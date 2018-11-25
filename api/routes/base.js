const Router = require("express").Router;

/**
 * Base class for all the routes
 */
class BaseRoute {
  /**
   * Constructor
   * @param {App} app
   */
  constructor(app) {
    this.app = app;
    this.router = Router();
  }

  /**
   * Activate route
   */
  async init() {}
}

module.exports = BaseRoute;
