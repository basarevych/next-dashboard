const { GraphQLError } = require("graphql");

class ValidationError extends GraphQLError {
  constructor(errors) {
    super("Validation error");
    this.code = "E_VALIDATION";
    this.details = _.reduce(
      errors,
      (acc, cur) => {
        if (Object.prototype.hasOwnProperty.call(acc, cur.key))
          acc[cur.key].push(cur.message);
        else acc[cur.key] = [cur.message];
        return acc;
      },
      {}
    );
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "error.validation";
  }

  static fromMongoose(error) {
    let errors = [];
    for (let field of _.keys(error.errors))
      errors.push({ key: field, message: error.errors[field].message });
    return new ValidationError(errors);
  }
}

module.exports = ValidationError;
