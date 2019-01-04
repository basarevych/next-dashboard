const EventEmitter = require("events");
const constants = require("../../common/constants");

class Router extends EventEmitter {
  constructor(build, csrf, auth, avatars, redirect, sitemap) {
    super();

    this.routes = {
      build,
      csrf,
      auth,
      avatars,
      redirect,
      sitemap
    };
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "router";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [
      "routes.build",
      "routes.csrf",
      "routes.auth",
      "routes.avatars",
      "routes.redirect",
      "routes.sitemap"
    ];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {}

  async use(express) {
    await Promise.all(
      _.map(_.keys(this.routes), key => this.routes[key].init())
    );

    for (let key of _.keys(this.routes))
      express.use(constants.apiBase, this.routes[key].router);
  }
}

module.exports = Router;
