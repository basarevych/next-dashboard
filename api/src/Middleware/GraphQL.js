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
  }

  static get $provides() {
    return "middleware.graphql";
  }

  static get $requires() {
    return ["di", "graphql"];
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();
    return this.graphql.init();
  }

  accept({ express }) {
    express.post(constants.graphqlBase, this.getGraphQL(false));
    if (process.env.NODE_ENV === "development")
      express.get(constants.graphqlBase, this.getGraphQL(true));
  }

  getGraphQL(graphiql) {
    return graphqlHTTP({
      schema: this.graphql.schema,
      graphiql,
      customFormatErrorFn: error => {
        let message = error.message || "An unknown error occurred.";
        let code = error.code;
        let details = error.details;
        let locations = error.locations;
        let path = error.path;
        let extensions = error.extensions;

        let parsed = {};
        if (error.originalError) {
          if (
            error.originalError.name === "ValidationError" &&
            error.originalError.errors
          ) {
            // mongoose validation error, extract messages as details field
            parsed = this.di.get("error.validation", error.originalError);
          } else if (
            error.originalError.stack &&
            !error.originalError.details &&
            process.env.NODE_ENV !== "production"
          ) {
            // generic error, extract stack trace as details field
            parsed = { details: _.split(error.originalError.stack, "\n") };
          }
        }
        if (parsed.message) message = parsed.message;
        if (parsed.code) code = parsed.code;
        if (parsed.details) details = parsed.details;

        if (process.env.NODE_ENV === "production")
          return { message, code, details };

        return {
          message,
          code,
          details,
          locations,
          path,
          extensions
        };
      }
    });
  }
}

module.exports = GraphQL;
