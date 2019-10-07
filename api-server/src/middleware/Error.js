/**
 * Error handler
 */
class Error {
  static get $provides() {
    return "middleware.error";
  }

  async init({ express }) {
    express.use((err, req, res, next) => {
      let details;
      if (process.env.NODE_ENV === "development")
        details = err.stack.split("\n");

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
