const debug = require("debug")("app:csrf");
const BaseRoute = require("./base");

/**
 * CSRF route
 */
class CsrfRoute extends BaseRoute {
  /**
   * Constructor
   * @param {App} app
   */
  constructor(app) {
    super(app);

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
