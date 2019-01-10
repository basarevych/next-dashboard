const { GraphQLError } = require("graphql");

class AccessError extends GraphQLError {
  constructor() {
    super("Access denied");
    this.code = "E_FORBIDDEN";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "error.access";
  }
}

module.exports = AccessError;
