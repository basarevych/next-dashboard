const { GraphQLError } = require("graphql");

class ValidationError extends GraphQLError {
  constructor(mongooseError) {
    super("Validation error");
    this.code = "E_VALIDATION";

    if (mongooseError) {
      this.details = _.reduce(
        _.keys(mongooseError.errors),
        (acc, cur) => {
          let msg =
            mongooseError.errors[cur].reason ||
            mongooseError.errors[cur].message;
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
