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

  async accept({ express }) {
    // CORS
    if (process.env.NODE_ENV === "production") {
      express.use(
        cors({
          origin: (origin, callback) => {
            let match =
              !origin || _.includes(this.app.config.appOrigins, origin);
            if (match) return callback(null, true);
            console.log(`CORS! ${origin}`);
            let error = new Error("Not allowed by CORS");
            error.statusCode = 403;
            return callback(error);
          }
        })
      );
    }

    // HTTP compression
    express.use(compression());

    // Log request
    if (process.env.NODE_ENV !== "test") express.use(logger("short"));

    // Service Worker (Google Workbox)
    express.use(
      "/sw.js",
      Express.static(path.join(__dirname, "..", "..", ".next", "sw.js"))
    );
    express.use(
      "/_next/build-manifest.json",
      Express.static(
        path.join(__dirname, "..", "..", ".next", "build-manifest.json")
      )
    );
    express.use(
      "/_next/react-loadable-manifest.json",
      Express.static(
        path.join(
          __dirname,
          "..",
          "..",
          ".next",
          "react-loadable-manifest.json"
        )
      )
    );

    // Shortcuts to static
    express.use(
      "/static",
      Express.static(path.join(__dirname, "..", "..", "static"), {
        maxAge: this.maxAge
      })
    );
    express.use(
      "/favicon.ico",
      Express.static(
        path.join(__dirname, "..", "..", "static", "img", "favicon.ico"),
        {
          maxAge: this.maxAge
        }
      )
    );

    // Default headers for non-static
    express.use((req, res, next) => {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      return next();
    });
  }
}

module.exports = Early;
