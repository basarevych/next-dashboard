const debug = require("debug")("app:csrf");
const EventEmitter = require("events");
const Router = require("express").Router;

/**
 * User own status route
 */
class StatusRoute extends EventEmitter {
  constructor() {
    super();

    this.router = Router();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "route.status";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();
    this.router.get("/status", this.getStatus.bind(this));
  }

  /**
   * GET /status
   * @param {object} req
   * @param {object} res
   * @param {function} next
   */
  async getStatus(req, res, next) {
    debug("Got request");

    try {
      res.json(await req.getAuthStatus());
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = StatusRoute;
