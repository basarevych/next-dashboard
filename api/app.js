"use strict";

if (!global._) global._ = require("lodash");

const nextApp = require("next");
const Injectt = require("injectt");
const path = require("path");
const express = require("express");
const compression = require("compression");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const constants = require("../common/constants");
const styles = require("../common/themes");
const cors = require("./middleware/cors");
const session = require("./middleware/session");
const helpers = require("./middleware/helpers");
const csrf = require("csurf");
const graphql = require("./middleware/graphql");
const render = require("./middleware/render");
const headers = require("./middleware/headers");
const throw404 = require("./middleware/throw404");
const error = require("./middleware/error");
const routes = require("./routes");
const getStore = require("./state/store");
const { appOperations } = require("./state/app");
const l10n = require("../common/locales");

require("dotenv").config({ path: path.join(__dirname, "..", "/.env") });
if (!process.env.NODE_ENV) process.env.NODE_ENV = "production";

let appHost = process.env.APP_HOST || "0.0.0.0";
let appPort = parseInt(process.env.APP_PORT, 10) || 3000;
let appOrigins = process.env.APP_ORIGINS || `["http://localhost:${appPort}"]`;
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

    let originsApp; // parse allowed origins of our app
    try {
      originsApp = JSON.parse(appOrigins);
      if (!_.isArray(originsApp))
        throw new Error(
          "APP_ORIGINS env variable should be a JSON string of array of strings"
        );
    } catch (error) {
      console.error("Could not parse APP_ORIGINS: ", error.message);
      process.exit(1);
    }

    this.config = {
      appHost,
      appPort,
      appOrigins: originsApp,
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

    this.di = new Injectt();
    this.di.registerInstance(this, "app");
    this.di.registerInstance(this.config, "config");

    this.express = express();
    this.express.set("port", this.config.appPort);
    this.express.set("trust proxy", this.config.appTrustProxy);
  }

  async init({ server }) {
    this.server = server;
    this.di.load(path.resolve(__dirname, "services"));

    this.store = getStore();
    this.di.registerInstance(this.store, "store");
    this.di.registerInstance(this.store.getState.bind(this.store), "getState");
    this.di.registerInstance(this.store.dispatch.bind(this.store), "dispatch");

    // Next page renderer and cacher
    const { renderPage, preCachePages } = render(this);
    server.once("listening", () => preCachePages({ user: null }));
    this.renderPage = renderPage;
    this.preCachePages = preCachePages;

    // Initialize the store
    await this.store.dispatch(
      appOperations.init({
        di: this.di
      })
    );

    // Initialize the singletons
    await this.di.get("db").init();
    await this.di.get("mailer").init();
    await this.di.get("ws").init();
    await this.di.get("auth").init();

    // Routes
    this.routes = routes(this);

    // Initialize Next
    this.next = nextApp({
      dev: process.env.NODE_ENV === "development"
    });
    await this.next.prepare();
    this.nextHandler = this.next.getRequestHandler();

    // Initialize the routes
    for (let route of _.keys(this.routes)) await this.routes[route].init();

    // Early middleware first
    if (process.env.NODE_ENV === "production") this.express.use(cors(this));
    this.express.use(compression());
    this.express.use(
      favicon(path.join(__dirname, "..", "static", "favicon.ico"))
    );

    // Logger
    if (process.env.NODE_ENV !== "test") this.express.use(logger("dev"));

    // Shortcuts to static
    this.express.use(
      "/sw.js",
      express.static(path.join(__dirname, "..", ".next", "sw.js"))
    );
    this.express.use(
      "/static",
      express.static(path.join(__dirname, "..", "static"), { maxAge: "10d" })
    );

    // Parse request
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(cookieParser());

    // Session
    const sessionMiddleware = session(this);
    this.express.use(sessionMiddleware.express);
    this.di.get("ws").io.use(sessionMiddleware.socket);

    // CSRF
    if (process.env.NODE_ENV === "production") this.express.use(csrf());

    // Set default headers
    this.express.use(headers());

    // Alias app services on request object
    const helpersMiddleware = helpers(this);
    this.express.use(helpersMiddleware.express);
    this.di.get("ws").io.use(helpersMiddleware.socket);

    // GraphQL API at /graphql
    this.express.use(constants.graphqlBase, graphql(this));

    // REST API is /api/*
    for (let route of _.keys(this.routes))
      this.express.use(constants.apiBase, this.routes[route].router);

    // Serve the rest of pages using Next
    this.express.get("*", this.renderPage);

    // Throw 404 if we haven't sent anything yet
    this.express.use(throw404(this));

    // Catch errors thrown anywhere in above
    this.express.use(error(this));
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
