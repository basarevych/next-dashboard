"use strict";

require("regenerator-runtime/runtime");
require("../common/src/intl");

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
let isPublisher = process.env.IS_PUBLISHER === "true" ? 1 : 0;
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
let twitterAuthKey = process.env.TWITTER_AUTH_KEY;
let twitterAuthSecret = process.env.TWITTER_AUTH_SECRET;
let linkedinAuthId = process.env.LINKEDIN_AUTH_ID;
let linkedinAuthSecret = process.env.LINKEDIN_AUTH_SECRET;

/**
 * The application
 */
class App {
  constructor() {
    if (!apiOrigins) apiOrigins = [`http://localhost:${apiPort}`];
    else if (typeof apiOrigins === "string")
      apiOrigins = apiOrigins.split(",").map(item => item.trim());

    this.config = {
      apiHost,
      apiPort,
      apiOrigins: apiOrigins.concat([apiAppServer]),
      apiTrustProxy,
      apiAppServer,
      apiSslKey,
      apiSslCert,
      apiSslCa,
      isPublisher,
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
      twitterAuthKey,
      twitterAuthSecret,
      linkedinAuthId,
      linkedinAuthSecret
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
      console.error("Please define env variable JWT_SECRET");
      process.exit(1);
    }

    // HTTP server
    this.server = mainServer;

    // Retrieve all the singletons, instantiating them, and run their .init()
    await Array.from(this.di.singletons().values()).reduce(
      (acc, cur) => acc.then(() => cur.init()),
      Promise.resolve()
    );

    // Express/Socket.io middleware
    this.middleware = [
      // Order matters
      "early",
      "parse",
      "routes",
      "graphql",
      "late",
      "error"
    ].reduce(
      (acc, cur) => acc.set(cur, this.di.get(`middleware.${cur}`)),
      new Map()
    );

    // Install
    await Array.from(this.middleware.values()).reduce(
      (acc, cur) =>
        acc.then(() =>
          cur.init({ express: this.express, io: this.di.get("ws").io })
        ),
      Promise.resolve()
    );

    if (this.config.isPublisher && process.env.NODE_ENV !== "test") {
      process.stdout.write("> Preseeding stats... ");
      await this.di.get("repository.dashboard").preseedStats();
      console.log("done");
      this.statsTimer = setInterval(async () => {
        try {
          await this.di.get("repository.dashboard").publishStats();
        } catch (error) {
          console.error(error);
        }
      }, 3000);
    }
  }
}

module.exports = App;
