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

  async init({ express }) {
    this.routes = this.di.get(/^route\..+$/); // names starting with "route."
    const handlers = Array.from(this.routes.values());
    await Promise.all(handlers.map(item => item.init()));
    handlers.forEach(item => express.use(constants.apiBase, item.router));
  }
}

module.exports = Routes;
