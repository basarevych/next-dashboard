const graphqlHTTP = require("express-graphql");
const constants = require("../../../common/constants");

/**
 * GraphQL endpoints
 */
class GraphQL {
  constructor(di, graphql) {
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
    this.promise = this.graphql.init();
    return this.promise;
  }

  accept({ express }) {
    express.use(constants.graphqlBase, function(req, res, next) {
      if (req.method === "OPTIONS") res.sendStatus(200);
      else next();
    });
    express.use(constants.graphqlBase, this.getGraphQL());
  }

  getGraphQL() {
    return graphqlHTTP({
      schema: this.graphql.schema,
      graphiql: process.env.NODE_ENV === "development",
      customFormatErrorFn: error => {
        let original = error.originalError || {};
        if (!original.details && original.errors) {
          // mongoose validation error, extract messages as the details field
          original = this.di.get("error.validation", original);
        }
        if (!original.details && original.stack) {
          // generic exception, extract stack trace as the details field
          original.details = _.split(error.originalError.stack, "\n");
        }

        let message = original.message || error.message || "An error occurred";
        let code = original.code || error.code;
        let details = original.details || error.details;
        let locations = error.locations;
        let path = error.path;
        let extensions = error.extensions;

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
