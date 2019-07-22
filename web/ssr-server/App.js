"use strict";

if (!global._) global._ = require("lodash");

const nextApp = require("next");
const path = require("path");
const express = require("express");
const Redis = require("ioredis");
const Cache = require("../common/src/cache");
const constants = require("../common/constants");
const l10n = require("../common/locales");
const styles = require("../styles/themes");

require("dotenv").config({ path: path.join(__dirname, "..", "/.env") });
if (!process.env.NODE_ENV) process.env.NODE_ENV = "production";

// These variables are set in .env file or by environment
let appHost = process.env.APP_HOST || "0.0.0.0";
let appPort = parseInt(process.env.APP_PORT, 10) || 3000;
let appOrigins = process.env.APP_ORIGINS;
let appTrustProxy = process.env.APP_TRUST_PROXY === "true" ? 1 : 0;
let appApiServer = process.env.APP_API_SERVER;
let appWsServer = process.env.APP_WS_SERVER;
let appSslKey = process.env.APP_SSL_KEY;
let appSslCert = process.env.APP_SSL_CERT;
let appSslCa = process.env.APP_SSL_CA;
let sessionSecret = process.env.SESSION_SECRET;
let sessionMaxAge = 1000 * 60 * 60 * 24 * 7;
let redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
let mapboxToken = process.env.MAPBOX_TOKEN;

/**
 * The application
 */
class App {
  /**
   * Constructor
   */
  constructor() {
    if (appOrigins) {
      try {
        if (_.isString(appOrigins)) appOrigins = JSON.parse(appOrigins);
      } catch (error) {
        console.error("Could not parse APP_ORIGINS: ", error.message);
        process.exit(1);
      }
    } else {
      appOrigins = [`http://localhost:${appPort}`];
    }

    this.config = {
      appHost,
      appPort,
      appOrigins,
      appTrustProxy,
      appApiServer,
      appWsServer,
      appSslKey,
      appSslCert,
      appSslCa,
      sessionSecret,
      sessionMaxAge,
      redisUrl,
      mapboxToken
    };

    // Express
    this.express = express();
    this.express.set("port", this.config.appPort);
    this.express.set("trust proxy", this.config.appTrustProxy);

    // Next
    this.next = nextApp({ dev: process.env.NODE_ENV === "development" });

    // Cache (Redis)
    this.redis = new Redis(this.config.redisUrl, { lazyConnect: true });
    this.cache = new Cache(this.redis);
  }

  checkConfig() {
    if (!this.config.appApiServer) {
      console.error("Please define env variable APP_API_SERVER");
      process.exit(1);
    }
    if (!this.config.appWsServer) {
      console.error("Please define env variable APP_WS_SERVER");
      process.exit(1);
    }
    if (!this.config.mapboxToken) {
      console.error("Please define env variable MAPBOX_TOKEN");
      process.exit(1);
    }
    if (!_.isArray(this.config.appOrigins)) {
      throw new Error(
        "APP_ORIGINS env variable should be a JSON string of an array of strings"
      );
    }
  }

  async init({ mainServer }) {
    this.checkConfig();
    if (!this.config.sessionSecret) {
      console.error("Please define env variable SESSION_SECRET");
      process.exit(1);
    }

    // HTTP server
    this.server = mainServer;

    // Initialize Next
    await this.next.prepare();

    // Initialize Redis
    await this.redis.connect();
    console.log("> Redis is online");

    // Middleware, order matters
    this.middleware = _.reduce(
      [
        "Early",
        "Parse",
        "Session",
        "Helpers",
        "Routes",
        "Render",
        "Late",
        "Error"
      ],
      async (acc, cur) => {
        const Middleware = require(`./middleware/${cur}`);
        const instance = new Middleware(this);
        await instance.accept({ express: this.express });
        return (await acc).set(cur, instance);
      },
      Promise.resolve(new Map())
    );
  }

  /**
   * This is what Next's getInitialProps() will see
   */
  async analyzeRequest({ path, query, locale, theme } = {}) {
    this.checkConfig();

    return _.assign({}, constants.pages[path] || {}, {
      query: _.assign({}, query || {}, {
        appServer: this.config.appOrigins[0],
        apiServer: this.config.appApiServer,
        wsServer: this.config.appWsServer,
        locale: locale || l10n.defaultLocale || null,
        theme: theme || styles.defaultTheme || null,
        mapboxToken: this.config.mapboxToken || null
      })
    });
  }
}

module.exports = App;
