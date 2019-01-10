const EventEmitter = require("events");
const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { nodeDefinitions } = require("graphql-relay");

class GraphQL extends EventEmitter {
  constructor(auth, users, employees, dashboard) {
    super();

    this.auth = auth;
    this.users = users;
    this.employees = employees;
    this.dashboard = dashboard;

    this.nodeDefinitions = nodeDefinitions(
      (globalId, context) => {
        const result = _.find(
          [
            this.auth.idFetcher(globalId, context),
            this.user.idFetcher(globalId, context),
            this.employees.idFetcher(globalId, context),
            this.dashboard.idFetcher(globalId, context)
          ],
          value => !!value
        );
        return result || null;
      },
      obj => {
        const result = _.find(
          [
            this.auth.typeResolver(obj),
            this.user.typeResolver(obj),
            this.employees.typeResolver(obj),
            this.dashboard.typeResolver(obj)
          ],
          value => !!value
        );
        return result || null;
      }
    );
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [
      "graphql.auth",
      "graphql.users",
      "graphql.employees",
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
        this.auth.init();
        this.users.init();
        this.employees.init();
        this.dashboard.init();

        this.Viewer = new GraphQLObjectType({
          name: "Viewer",
          fields: _.merge(
            this.auth.query,
            this.users.query,
            this.employees.query,
            this.dashboard.query,
            { node: this.nodeDefinitions.nodeField }
          )
        });

        this.Query = new GraphQLObjectType({
          name: "Query",
          fields: {
            viewer: {
              type: this.Viewer,
              resolve: _.constant({})
            },
            node: this.nodeDefinitions.nodeField
          }
        });

        this.Mutation = new GraphQLObjectType({
          name: "Mutation",
          fields: _.merge(
            {},
            this.auth.mutation,
            this.users.mutation,
            this.employees.mutation,
            this.dashboard.mutation
          )
        });

        this.schema = new GraphQLSchema({
          query: this.Query,
          mutation: this.Mutation
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
