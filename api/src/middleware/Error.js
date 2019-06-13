/**
 * Error handler
 */
class Error {
  static get $provides() {
    return "middleware.error";
  }

  async init() {}

  accept({ express }) {
    express.use((err, req, res, next) => {
      let details;
      if (process.env.NODE_ENV === "development")
        details = _.split(err.stack, "\n");

      if (!res.headersSent) {
        res.status(err.statusCode || 500);
        res.json({
          errors: [{ message: err.message, code: err.code, details }]
        });
      }
    });
  }
}

module.exports = Error;
