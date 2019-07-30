const constants = require("../../common/constants");

/**
 * Additional API routes
 */
class Routes {
  constructor(di) {
    this.di = di;
  }

  static get $provides() {
    return "middleware.routes";
  }

  static get $requires() {
    return ["di"];
  }

  async init() {
    if (this.promise) return this.promise;
    this.routes = this.di.get(/^route\..+$/); // names starting with "route."
    this.promise = Promise.all(
      _.invokeMap(Array.from(this.routes.values()), "init")
    );
    return this.promise;
  }

  accept({ express }) {
    _.forEach(Array.from(this.routes.values()), item =>
      express.use(constants.apiBase, item.router)
    );
  }
}

module.exports = Routes;
