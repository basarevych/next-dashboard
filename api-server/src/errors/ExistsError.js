class EntityExistsError extends Error {
  constructor() {
    super("Entity already exists");
    this.code = "E_EXISTS";
    this.statusCode = 409;
  }

  static get $provides() {
    return "error.exists";
  }
}

module.exports = EntityExistsError;
