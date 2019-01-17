const graphqlHTTP = require("express-graphql");
const EventEmitter = require("events");
const constants = require("../../../common/constants");

/**
 * GraphQL endpoints
 */
class GraphQL extends EventEmitter {
  constructor(di, graphql) {
    super();

    this.di = di;
    this.graphql = graphql;
    this.middleware = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.graphql";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "graphql"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    return this.graphql.init();
  }

  async express(express) {
    express.post(constants.graphqlBase, this.getGraphQL(false));
    if (process.env.NODE_ENV === "development")
      express.get(constants.graphqlBase, this.getGraphQL(true));
  }

  getGraphQL(graphiql) {
    return graphqlHTTP({
      schema: this.graphql.schema,
      graphiql,
      formatError: error => {
        let parsed;
        if (error.originalError) {
          if (
            error.originalError.name === "ValidationError" &&
            error.originalError.errors
          ) {
            // mongoose error
            parsed = this.di.get("error.validation", error.originalError);
          } else if (
            error.originalError.stack &&
            !error.originalError.details &&
            process.env.NODE_ENV !== "production"
          ) {
            parsed = { details: _.split(error.originalError.stack, "\n") };
          }
        }

        return {
          message:
            (parsed && parsed.message) ||
            (error.originalError && error.originalError.message) ||
            error.message ||
            "Error",
          code:
            (parsed && parsed.code) ||
            (error.originalError && error.originalError.code) ||
            error.code ||
            undefined,
          details:
            (parsed && parsed.details) ||
            (error.originalError && error.originalError.details) ||
            error.details ||
            undefined
        };
      }
    });
  }
}

module.exports = GraphQL;
