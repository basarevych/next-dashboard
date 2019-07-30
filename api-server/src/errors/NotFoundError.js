class EntityNotFoundError extends Error {
  constructor() {
    super("Not found");
    this.code = "E_NOTFOUND";
    this.statusCode = 404;
  }

  static get $provides() {
    return "error.notFound";
  }
}

module.exports = EntityNotFoundError;
