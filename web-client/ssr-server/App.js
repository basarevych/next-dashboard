"use strict";

if (!global._) global._ = require("lodash");

const nextApp = require("next");
const path = require("path");
const express = require("express");
const middleware = require("./middleware");
const Redis = require("ioredis");
const Cache = require("../common/src/cache");
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
let appSsrApiServer = process.env.APP_SSR_API_SERVER;
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
        if (typeof appOrigins === "string") appOrigins = JSON.parse(appOrigins);
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
      appSsrApiServer: appSsrApiServer || appApiServer,
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

    // Middleware
    this.middleware = middleware(this);
  }

  async init({ mainServer }) {
    if (!Array.isArray(this.config.appOrigins)) {
      console.error(
        "APP_ORIGINS env variable should be a JSON string of an array of strings"
      );
      process.exit(1);
    }

    if (!this.config.appApiServer) {
      console.error("Please define env variable APP_API_SERVER");
      process.exit(1);
    }

    if (!this.config.appWsServer) {
      console.error("Please define env variable APP_WS_SERVER");
      process.exit(1);
    }

    if (!this.config.sessionSecret) {
      console.error("Please define env variable SESSION_SECRET");
      process.exit(1);
    }

    if (!this.config.redisUrl) {
      console.error("Please define env variable REDIS_URL");
      process.exit(1);
    }

    if (!this.config.mapboxToken) {
      console.error("Please define env variable MAPBOX_TOKEN");
      process.exit(1);
    }

    // HTTP server
    this.server = mainServer;

    // Initialize Next
    this.next = nextApp({ dev: process.env.NODE_ENV === "development" });
    await this.next.prepare();

    // Initialize Cache
    process.stdout.write("> Redis... ");
    this.redis = new Redis(this.config.redisUrl, { lazyConnect: true });
    this.cache = new Cache(this.redis);
    await this.redis.connect();
    console.log("online");

    // Attach middleware
    await Array.from(this.middleware.values()).reduce(
      (acc, cur) => acc.then(() => cur.init()),
      Promise.resolve()
    );
  }

  /**
   * This is what getInitialProps()'s "query" param will be
   */
  async getQuery({ query, params, locale, theme } = {}) {
    return Object.assign({}, query || {}, params || {}, {
      locale: locale || l10n.defaultLocale || null,
      theme: theme || styles.defaultTheme || null
    });
  }
}

module.exports = App;
