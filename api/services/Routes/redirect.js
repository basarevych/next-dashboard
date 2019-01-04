const debug = require("debug")("app:redirect");
const EventEmitter = require("events");
const Router = require("express").Router;
const moment = require("../../../common/moment");

/**
 * Redirector route
 */
class RedirectRoute extends EventEmitter {
  constructor(app) {
    super();

    this.app = app;
    this.router = Router();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "routes.redirect";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app"];
  }

  async init() {
    this.router.get("/redirect", this.getRedirect.bind(this));
    this.router.get("/redirect/:name", this.getRedirect.bind(this));
  }

  /**
   * GET /redirect/:name
   * @param {object} req
   * @param {object} res
   * @param {function} next
   */
  async getRedirect(req, res, next) {
    debug("Got request");

    try {
      switch (req.params.name) {
        case "benchmarks":
          return res.redirect(
            "https://gtmetrix.com/reports/dashboard.daemon-notes.com/psqMg48O"
          );
        case "responsiveness":
          return res.redirect(
            "https://material.io/tools/resizer/#url=https%3A%2F%2Fdashboard.daemon-notes.com"
          );
      }

      let redirect = "/";
      if (req.cookies && req.cookies.redirect) {
        redirect = req.cookies.redirect || redirect;
        res.cookie("redirect", "", { expires: moment.utc().toDate() });
      }

      return res.redirect(redirect);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = RedirectRoute;
