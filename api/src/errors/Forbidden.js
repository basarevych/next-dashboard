class Forbidden extends Error {
  constructor() {
    super("Access denied");
    this.code = "E_FORBIDDEN";
    this.statusCode = 403;
  }

  static get $provides() {
    return "error.forbidden";
  }
}

module.exports = Forbidden;
