"use strict";

require("regenerator-runtime/runtime");
if (!global._) global._ = require("lodash");

const Injectt = require("injectt");
const path = require("path");
const express = require("express");

require("dotenv").config({ path: path.join(__dirname, "..", "/.env") });
if (!process.env.NODE_ENV) process.env.NODE_ENV = "production";

// These variables are set in .env file or by the environment
let apiHost = process.env.API_HOST || "0.0.0.0";
let apiPort = parseInt(process.env.API_PORT, 10) || 4000;
let apiOrigins = process.env.API_ORIGINS;
let apiTrustProxy = process.env.API_TRUST_PROXY === "true" ? 1 : 0;
let apiSslKey = process.env.API_SSL_KEY;
let apiSslCert = process.env.API_SSL_CERT;
let apiSslCa = process.env.API_SSL_CA;
let apiAppServer = process.env.API_APP_SERVER;
let jwtSecret = process.env.JWT_SECRET;
let redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
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
let googleAuthId = process.env.GOOGLE_AUTH_ID;
let googleAuthSecret = process.env.GOOGLE_AUTH_SECRET;
let facebookAuthId = process.env.FACEBOOK_AUTH_ID;
let facebookAuthSecret = process.env.FACEBOOK_AUTH_SECRET;
let twitterAuthKey = process.env.TWITTER_AUTH_KEY;
let twitterAuthSecret = process.env.TWITTER_AUTH_SECRET;

/**
 * The application
 */
class App {
  constructor() {
    if (apiOrigins) {
      try {
        if (_.isString(apiOrigins)) apiOrigins = JSON.parse(apiOrigins);
      } catch (error) {
        console.error("Could not parse API_ORIGINS: ", error.message);
        process.exit(1);
      }
    } else {
      apiOrigins = [`http://localhost:${apiPort}`];
    }

    this.config = {
      apiHost,
      apiPort,
      apiOrigins: apiOrigins.concat([apiAppServer]),
      apiTrustProxy,
      apiAppServer,
      apiSslKey,
      apiSslCert,
      apiSslCa,
      jwtSecret,
      redisUrl,
      mongoUrl,
      rootLogin,
      rootPassword,
      emailFrom,
      emailServer,
      emailPort,
      emailSsl,
      emailUsername,
      emailPassword,
      googleAuthId,
      googleAuthSecret,
      facebookAuthId,
      facebookAuthSecret,
      twitterAuthKey,
      twitterAuthSecret
    };

    // Express
    this.express = express();
    this.express.set("port", this.config.appPort);
    this.express.set("trust proxy", this.config.appTrustProxy);

    /*
      Dependency injection container
      https://www.npmjs.com/package/injectt

      A class is a service when it has "$provides" static property (the name)
      and optional "$requires" static property (list of names of the dependencies)
      Instantiated dependencies are passed as arguments to the constructor
    */
    this.di = new Injectt();
    this.di.load(path.resolve(__dirname)); // auto load all the services
    this.di.registerInstance(this, "app");
    this.di.registerInstance(this.config, "config");
  }

  async init({ mainServer }) {
    if (!this.config.apiAppServer) {
      console.error("Please define env variable API_APP_SERVER");
      process.exit(1);
    }
    if (!this.config.jwtSecret) {
      console.error("Please define JWT_SECRET");
      process.exit(1);
    }
    if (!_.isArray(this.config.apiOrigins)) {
      console.error(
        "API_ORIGINS env variable should be a JSON string of array of strings"
      );
      process.exit(1);
    }

    // HTTP server
    this.server = mainServer;

    // Retrieve all the singletons (instantiating them) and run
    // their .init() method
    await Promise.all(
      _.invokeMap(Array.from(this.di.singletons().values()), "init")
    );

    // Express/Socket.IO middleware
    this.middleware = _.reduce(
      [
        // Order matters
        "early",
        "parse",
        "routes",
        "graphql",
        "late",
        "error"
      ],
      (acc, cur) => acc.set(cur, this.di.get(`middleware.${cur}`)),
      new Map()
    );

    // Initialize
    await Promise.all(
      _.invokeMap(Array.from(this.middleware.values()), "init")
    );

    // Install
    await Promise.all(
      _.invokeMap(Array.from(this.middleware.values()), "accept", {
        express: this.express,
        io: this.di.get("ws").io
      })
    );
  }
}

module.exports = App;
