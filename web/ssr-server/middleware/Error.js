/**
 * Error handler
 */
class Error {
  constructor(app) {
    this.app = app;
  }

  async accept({ express }) {
    express.use(async (error, req, res, next) => {
      if (!res.headersSent) {
        const { page, query } = await this.app.analyzeRequest(req);
        if (res.statusCode === 200) res.status(error.statusCode || 500);
        this.app.next.renderError(error, req, res, page || "/", query || {});
      }
    });
  }
}

module.exports = Error;
