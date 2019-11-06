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
    this.maxAge = "365d";
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

    // Service Worker (Google Workbox)
    this.app.express.use(
      "/sw.js",
      Express.static(path.join(__dirname, "..", "..", ".next", "sw.js"))
    );

    // Shortcuts to static
    this.app.express.use(
      "/_next",
      Express.static(path.join(__dirname, "..", "..", ".next"), {
        maxAge: this.maxAge,
        fallthrough: false
      })
    );
    this.app.express.use(
      Express.static(path.join(__dirname, "..", "..", "public"), {
        maxAge: this.maxAge
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
