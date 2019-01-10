const { GraphQLError } = require("graphql");

class ValidationError extends GraphQLError {
  constructor(mongooseError) {
    super("Validation error");
    this.code = "E_VALIDATION";

    if (mongooseError) {
      this.details = _.reduce(
        _.keys(mongooseError.errors),
        (acc, cur) => {
          if (acc[cur]) acc[cur].push(mongooseError.errors[cur].message);
          else acc[cur] = [mongooseError.errors[cur].message];
          return acc;
        },
        {}
      );
    }
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "error.validation";
  }
}

module.exports = ValidationError;
