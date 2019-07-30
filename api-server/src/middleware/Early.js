const cors = require("cors");
const compression = require("compression");
const logger = require("morgan");

/**
 * Early middleware
 */
class Early {
  constructor(config) {
    this.config = config;
    this.maxAge = "365d";
  }

  static get $provides() {
    return "middleware.early";
  }

  static get $requires() {
    return ["config"];
  }

  async init() {}

  accept({ express }) {
    // CORS
    express.use(
      cors({
        credentials: true,
        origin: (origin, callback) => {
          let match = !origin || _.includes(this.config.apiOrigins, origin);
          if (match) return callback(null, true);
          console.log(`CORS! ${origin}`);
          let error = new Error("Not allowed by CORS");
          error.status = 403;
          return callback(error);
        }
      })
    );

    // HTTP compression
    express.use(compression());

    // Log request
    if (process.env.NODE_ENV !== "test") express.use(logger("short"));

    // Default headers
    express.use((req, res, next) => {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      return next();
    });
  }
}

module.exports = Early;
