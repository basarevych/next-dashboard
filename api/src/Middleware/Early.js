const path = require("path");
const Express = require("express");
const cors = require("cors");
const compression = require("compression");
const logger = require("morgan");
const EventEmitter = require("events");

/**
 * Early middleware
 */
class Early extends EventEmitter {
  constructor(config) {
    super();

    this.config = config;
    this.cors = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.early";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["config"];
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();
    this.cors = cors({
      origin: (origin, callback) => {
        let match = !origin || _.includes(this.config.appOrigins, origin);
        if (match) return callback(null, true);
        console.log(`CORS! ${origin}`);
        let error = new Error("Not allowed by CORS");
        error.status = 403;
        return callback(error);
      }
    });
  }

  accept({ express }) {
    // CORS
    if (process.env.NODE_ENV === "production") express.use(this.cors);

    // HTTP compression
    express.use(compression());

    // Log request
    if (process.env.NODE_ENV !== "test") express.use(logger("short"));

    // Shortcuts to static
    express.use(
      "/sw.js",
      Express.static(path.join(__dirname, "..", "..", "..", ".next", "sw.js"))
    );
    express.use(
      "/static",
      Express.static(path.join(__dirname, "..", "..", "..", "static"), {
        maxAge: "10d"
      })
    );
    express.use(
      "/favicon.ico",
      Express.static(
        path.join(__dirname, "..", "..", "..", "static", "img", "favicon.ico"),
        {
          maxAge: "10d"
        }
      )
    );

    // Default headers
    express.use((req, res, next) => {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      return next();
    });
  }
}

module.exports = Early;
