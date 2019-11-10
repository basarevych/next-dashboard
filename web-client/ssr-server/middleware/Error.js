/**
 * Error handler
 */
class Error {
  constructor(app) {
    this.app = app;
  }

  async init() {
    this.app.express.use(async (error, req, res, next) => {
      if (!res.headersSent) {
        const query = await this.app.getQuery("/_error", req);
        const statusCode = error.statusCode || 500;
        if (res.statusCode !== statusCode) res.status(statusCode);
        this.app.next.renderError(error, req, res, "/_error", query);
      }
    });
  }
}

module.exports = Error;
