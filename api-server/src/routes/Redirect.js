const debug = require("debug")("app:redirect");
const Router = require("express").Router;

class RedirectRoute {
  constructor(config) {
    this.config = config;
    this.router = Router();
  }

  static get $provides() {
    return "route.redirect";
  }

  static get $requires() {
    return ["config"];
  }

  async init() {
    if (this.promise) return this.promise;
    this.promise = Promise.resolve();

    this.router.get("/redirect/:name", this.getRedirect.bind(this));
  }

  async getRedirect(req, res, next) {
    debug("Got request");

    try {
      switch (req.params.name) {
        case "github":
          return res.redirect("https://github.com/basarevych/next-dashboard");
        case "benchmarks":
          return res.redirect(
            "https://gtmetrix.com/reports/dashboard.daemon-notes.com/TNBkxgL5"
          );
        case "responsiveness":
          return res.redirect(
            "https://material.io/tools/resizer/#url=https%3A%2F%2Fdashboard.daemon-notes.com"
          );
      }

      return res.redirect(this.config.apiAppServer);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = RedirectRoute;
