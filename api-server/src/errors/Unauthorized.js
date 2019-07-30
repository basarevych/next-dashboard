class Unauthorized extends Error {
  constructor() {
    super("Unauthorized");
    this.code = "E_UNAUTHORIZED";
    this.statusCode = 401;
  }

  static get $provides() {
    return "error.unauthorized";
  }
}

module.exports = Unauthorized;
