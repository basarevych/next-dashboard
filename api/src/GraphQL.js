const EventEmitter = require("events");
const { makeExecutableSchema } = require("graphql-tools");
const typeDefs = require("../schema");

class GraphQL extends EventEmitter {
  constructor(date, auth, users, dashboard) {
    super();

    this.date = date;
    this.auth = auth;
    this.users = users;
    this.dashboard = dashboard;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [
      "graphql.date",
      "graphql.auth",
      "graphql.users",
      "graphql.dashboard"
    ];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = new Promise(async (resolve, reject) => {
      try {
        this.schema = makeExecutableSchema({
          typeDefs,
          resolvers: _.merge(
            {},
            await this.date.gql(),
            await this.auth.gql(),
            await this.users.gql(),
            await this.dashboard.gql()
          ),
          resolverValidationOptions: {
            requireResolversForResolveType: false
          }
        });

        resolve();
      } catch (error) {
        reject(error);
      }
    });
    return this.promise;
  }
}

module.exports = GraphQL;
