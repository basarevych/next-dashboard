"use strict";

if (!global._) global._ = require("lodash");

const Injectt = require("injectt");
const nextApp = require("next");
const path = require("path");
const express = require("express");
const getStore = require("./state/store");
const { appOperations } = require("./state/app");
const constants = require("../common/constants");
const styles = require("../common/themes");
const l10n = require("../common/locales");

require("dotenv").config({ path: path.join(__dirname, "..", "/.env") });

let appHost = process.env.APP_HOST || "0.0.0.0";
let appPort = parseInt(process.env.APP_PORT, 10) || 3000;
let appOrigins = process.env.APP_ORIGINS;
let appInnerServer =
  process.env.APP_INNER_SERVER || `http://localhost:${appPort}`;
let appStatic = process.env.APP_STATIC || "";
let appTrustProxy = process.env.APP_TRUST_PROXY === "true" ? 1 : 0;
let appOnlineUsers = parseInt(process.env.APP_ONLINE_USERS, 10) || 50;
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
    if (!sessionSecret) {
      console.error("Please define SESSION_SECRET");
      process.exit(1);
    }

    if (appOrigins) {
      try {
        if (_.isString(appOrigins)) appOrigins = JSON.parse(appOrigins);
        if (!_.isArray(appOrigins))
          throw new Error(
            "APP_ORIGINS env variable should be a JSON string of array of strings"
          );
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
      appInnerServer,
      appStatic,
      appTrustProxy,
      appOnlineUsers,
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
    this.di.load(path.resolve(__dirname, "src"));
    this.di.registerInstance(this, "app");
    this.di.registerInstance(this.config, "config");

    // Redux store
    this.store = getStore();
    this.di.registerInstance(this.store, "store");
    this.di.registerInstance(this.store.getState.bind(this.store), "getState");
    this.di.registerInstance(this.store.dispatch.bind(this.store), "dispatch");
  }

  async init({ server }) {
    this.server = server;

    // Initialize the store
    await this.store.dispatch(
      appOperations.init({
        di: this.di
      })
    );

    // Initialize the singletons
    await Promise.all(_.invokeMap(this.di.singletons(), "init"));

    // Initialize Next
    this.next = nextApp({ dev: process.env.NODE_ENV === "development" });
    await this.next.prepare();
    this.nextHandler = this.next.getRequestHandler();

    // Express and Socket.IO middleware
    const middleware = this.di.get("middleware");
    middleware.express(this.express);
    middleware.io(this.di.get("ws").io);
  }

  /**
   * This is what Next's getInitialProps() will see
   */
  async analyzeRequest({ path, query, locale, theme } = {}) {
    return {
      page: constants.pages[path] && constants.pages[path].page,
      query: _.assign({}, query || {}, {
        locale: locale || l10n.defaultLocale || null,
        theme: theme || styles.defaultTheme || null,
        googleMapsKey: this.config.googleMapsKey || null
      })
    };
  }
}

module.exports = App;
