const { Kind, GraphQLScalarType } = require("graphql");
const moment = require("../../common/src/moment");

const GraphQLDate = new GraphQLScalarType({
  name: "Date",
  serialize: value => value.valueOf(),
  parseValue: value => moment(value),
  parseLiteral: ast => (ast.kind === Kind.INT ? moment(ast.value) : null)
});

module.exports = GraphQLDate;
