/**
 * Late middleware
 */
class Late {
  constructor(app) {
    this.app = app;
  }

  async accept({ express }) {
    // Throw 404 if we get this far in the stack
    // without ending the middleware chain
    express.use((req, res, next) => {
      let error = new Error("Not Found");
      error.statusCode = 404;
      next(error);
    });
  }
}

module.exports = Late;
