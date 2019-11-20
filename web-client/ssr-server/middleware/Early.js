const path = require("path");
const Express = require("express");
const cors = require("cors");
const compression = require("compression");
const logger = require("morgan");

/**
 * Early middleware
 */
class Early {
  constructor(app) {
    this.app = app;
    this.maxAge = 365 * 24 * 60 * 60;
  }

  async init() {
    // CORS
    this.app.express.use(
      cors({
        credentials: true,
        origin: (origin, callback) => {
          let match = !origin || this.app.config.appOrigins.includes(origin);
          if (match) return callback(null, true);
          console.log(`CORS! ${origin}`);
          let error = new Error("Not allowed by CORS");
          error.statusCode = 403;
          return callback(error);
        }
      })
    );

    // HTTP compression
    this.app.express.use(compression());

    // Log request
    if (process.env.NODE_ENV !== "test") this.app.express.use(logger("short"));

    // Public
    this.app.express.get(
      "/*",
      Express.static(path.join(__dirname, "..", "..", "public"), {
        maxAge: this.maxAge * 1000,
        fallthrough: true
      })
    );

    // Default headers for non-static
    this.app.express.use((req, res, next) => {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      return next();
    });
  }
}

module.exports = Early;
