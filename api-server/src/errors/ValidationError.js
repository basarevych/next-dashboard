class ValidationError extends Error {
  constructor({ errors } = {}) {
    super("Validation error");
    this.code = "E_VALIDATION";
    this.statusCode = 400;

    if (errors) {
      this.details = _.reduce(
        _.keys(errors),
        (acc, cur) => {
          let msg = errors[cur].reason || errors[cur].message;
          if (acc[cur]) acc[cur].push(msg);
          else acc[cur] = [msg];
          return acc;
        },
        {}
      );
    }
  }

  static get $provides() {
    return "error.validation";
  }
}

module.exports = ValidationError;
