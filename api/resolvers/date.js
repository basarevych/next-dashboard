"use strict";

const moment = require("../../common/moment");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

module.exports = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return moment(value); // value from the client
    },
    serialize(value) {
      return value.valueOf(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) return moment(ast.value); // ast value is always in string format
      return null;
    }
  })
};
