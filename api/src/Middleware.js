const EventEmitter = require("events");

class Middleware extends EventEmitter {
  constructor(
    early,
    parse,
    session,
    helpers,
    graphql,
    routes,
    render,
    late,
    error
  ) {
    super();

    this.middleware = {
      early,
      parse,
      session,
      helpers,
      graphql,
      routes,
      render,
      late,
      error
    };
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [
      "middleware.early",
      "middleware.parse",
      "middleware.session",
      "middleware.helpers",
      "middleware.graphql",
      "middleware.routes",
      "middleware.render",
      "middleware.late",
      "middleware.error"
    ];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {}

  async express(express) {
    let selected = [];
    for (let key of _.keys(this.middleware))
      if (this.middleware[key].express) selected.push(key);

    await Promise.all(_.map(selected, key => this.middleware[key].init()));
    for (let key of selected) await this.middleware[key].express(express);
  }

  async io(io) {
    let selected = [];
    for (let key of _.keys(this.middleware))
      if (this.middleware[key].io) selected.push(key);

    await Promise.all(_.map(selected, key => this.middleware[key].init()));
    for (let key of selected) await this.middleware[key].io(io);
  }
}

module.exports = Middleware;
