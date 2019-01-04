const debug = require("debug")("app:csrf");
const EventEmitter = require("events");
const Router = require("express").Router;

/**
 * CSRF route
 */
class CsrfRoute extends EventEmitter {
  constructor(app) {
    super();

    this.app = app;
    this.router = Router();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "routes.csrf";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app"];
  }

  async init() {
    this.router.get("/csrf", this.getCsrf.bind(this));
  }

  /**
   * GET /csrf
   * @param {object} req
   * @param {object} res
   * @param {function} next
   */
  async getCsrf(req, res, next) {
    debug("Got request");

    try {
      res.json({ csrf: req.csrfToken ? req.csrfToken() : "undefined" });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = CsrfRoute;
