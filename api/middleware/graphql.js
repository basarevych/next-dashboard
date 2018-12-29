"use strict";

const graphqlHTTP = require("express-graphql");
const schema = require("../schema");
const ValidationError = require("../lib/ValidationError");

module.exports = async () => (req, res, next) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
    formatError: error => {
      let parsed;
      if (
        error.originalError &&
        error.originalError.name === "ValidationError" &&
        !(error.originalError instanceof ValidationError)
      ) {
        parsed = ValidationError.fromMongoose(error.originalError);
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
  })(req, res, next);
};
