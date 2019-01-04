const EventEmitter = require("events");

/**
 * Late middleware
 */
class Late extends EventEmitter {
  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.late";
  }

  async init() {}

  async express(express) {
    // Throw 404 if we get this far in the stack
    // without ending the middleware chain
    express.use((req, res, next) => {
      let error = new Error("Not Found");
      error.status = 404;
      next(error);
    });
  }
}

module.exports = Late;
