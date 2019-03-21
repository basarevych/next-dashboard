"use strict";

require("@babel/polyfill");
require("isomorphic-unfetch");
if (!global._) global._ = require("lodash");

const Injectt = require("injectt/src/injectt.node");
const nextApp = require("next");
const path = require("path");
const express = require("express");
const { PubSub } = require("graphql-subscriptions");
const getStore = require("./state/store");
const constants = require("../common/constants");
const styles = require("../common/themes");
const l10n = require("../common/locales");

require("dotenv").config({ path: path.join(__dirname, "..", "/.env") });

let appHost = process.env.APP_HOST || "0.0.0.0";
let appPort = parseInt(process.env.APP_PORT, 10) || 3000;
let appOrigins = process.env.APP_ORIGINS;
let appSubscriptionsServer =
  process.env.APP_SUBSCRIPTIONS_SERVER || `ws://localhost:${appPort}`;
let appInnerServer =
  process.env.APP_INNER_SERVER || `http://localhost:${appPort}`;
let appStatic = process.env.APP_STATIC || "";
let appTrustProxy = process.env.APP_TRUST_PROXY === "true" ? 1 : 0;
let appOnlineUsers = parseInt(process.env.APP_ONLINE_USERS, 10) || 50;
let appSslKey = process.env.APP_SSL_KEY;
let appSslCert = process.env.APP_SSL_CERT;
let appSslCa = process.env.APP_SSL_CA;
let sessionSecret = process.env.SESSION_SECRET;
let sessionMaxAge = 1000 * 60 * 60 * 24 * 7;
let mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost:27017/next-dashboard";
let rootLogin = process.env.ROOT_LOGIN;
let rootPassword = process.env.ROOT_PASSWORD;
let emailFrom = process.env.EMAIL_FROM;
let emailServer = process.env.EMAIL_SERVER;
let emailPort = parseInt(process.env.EMAIL_PORT, 10) || 25;
let emailSsl = process.env.EMAIL_SSL === "true";
let emailUsername = process.env.EMAIL_USERNAME;
let emailPassword = process.env.EMAIL_PASSWORD;
let facebookAuthId = process.env.FACEBOOK_AUTH_ID;
let facebookAuthSecret = process.env.FACEBOOK_AUTH_SECRET;
let googleAuthId = process.env.GOOGLE_AUTH_ID;
let googleAuthSecret = process.env.GOOGLE_AUTH_SECRET;
let twitterAuthKey = process.env.TWITTER_AUTH_KEY;
let twitterAuthSecret = process.env.TWITTER_AUTH_SECRET;
let googleMapsKey = process.env.GOOGLE_MAPS_KEY;

if (!process.env.NODE_ENV) process.env.NODE_ENV = "production";
if (!process.env.APP_INNER_SERVER)
  process.env.APP_INNER_SERVER = appInnerServer;

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
      appSubscriptionsServer,
      appInnerServer,
      appStatic,
      appTrustProxy,
      appOnlineUsers,
      appSslKey,
      appSslCert,
      appSslCa,
      mongoUrl,
      sessionSecret,
      sessionMaxAge,
      rootLogin,
      rootPassword,
      emailFrom,
      emailServer,
      emailPort,
      emailSsl,
      emailUsername,
      emailPassword,
      facebookAuthId,
      facebookAuthSecret,
      googleAuthId,
      googleAuthSecret,
      twitterAuthKey,
      twitterAuthSecret,
      googleMapsKey
    };

    // Express
    this.express = express();
    this.express.set("port", this.config.appPort);
    this.express.set("trust proxy", this.config.appTrustProxy);

    // Dependency injection container
    this.di = new Injectt();
    this.di.load(path.resolve(__dirname, "src")); // auto load all the services
    this.di.registerInstance(this, "app");
    this.di.registerInstance(this.config, "config");
    this.di.registerInstance(new PubSub(), "pubsub");

    // Redux store
    this.store = getStore(this.di);
  }

  async init({ mainServer }) {
    if (!this.config.sessionSecret) {
      console.error("Please define SESSION_SECRET");
      process.exit(1);
    }
    if (!_.isArray(this.config.appOrigins)) {
      throw new Error(
        "APP_ORIGINS env variable should be a JSON string of array of strings"
      );
    }

    this.server = mainServer;

    // Retrieve all the singletons and run their .init() method
    // (this will also instantiate these singletons)
    await Promise.all(_.invokeMap(this.di.singletons(), "init"));

    // Initialize Next
    this.next = nextApp({ dev: process.env.NODE_ENV === "development" });
    await this.next.prepare();
    this.nextHandler = this.next.getRequestHandler();

    // Express and Socket.IO middleware
    const middleware = this.di.get("middleware");
    return Promise.all([
      middleware.express(this.express),
      middleware.io(this.di.get("ws").io)
    ]);
  }

  /**
   * This is what Next's getInitialProps() will see
   */
  async analyzeRequest({ path, query, locale, theme } = {}) {
    return {
      page: constants.pages[path] && constants.pages[path].page,
      query: _.assign({}, query || {}, {
        subscriptionsServer: this.config.appSubscriptionsServer,
        locale: locale || l10n.defaultLocale || null,
        theme: theme || styles.defaultTheme || null,
        googleMapsKey: this.config.googleMapsKey || null
      })
    };
  }
}

module.exports = App;
