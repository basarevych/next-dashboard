const Router = require("express").Router;

/**
 * Local API
 */
class Routes {
  constructor(app) {
    this.app = app;
    this.router = Router();

    this.router.post("/session", this.postSession.bind(this));
  }

  async init() {
    this.app.express.use(this.router);
  }

  /**
   * POST /session
   * @param {object} req
   * @param {object} res
   * @param {function} next
   */
  async postSession(req, res, next) {
    try {
      const { accessToken, refreshToken } = req.body;
      await req.setTokens(accessToken, refreshToken);
      res.json({ success: true, user: req.session.user });
    } catch (error) {
      console.error(error.message);
      res.json({ success: false });
    }
  }
}

module.exports = Routes;
