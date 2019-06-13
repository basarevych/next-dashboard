/**
 * Late middleware
 */
class Late {
  constructor(di) {
    this.di = di;
  }

  static get $provides() {
    return "middleware.late";
  }

  static get $requires() {
    return ["di"];
  }

  async init() {}

  accept({ express }) {
    // Throw 404 if we get this far in the stack
    // without ending the middleware chain
    express.use((req, res, next) => {
      next(this.di.get("error.notFound"));
    });
  }
}

module.exports = Late;
