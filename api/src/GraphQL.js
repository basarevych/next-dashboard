const EventEmitter = require("events");
const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { nodeDefinitions } = require("graphql-relay");

class GraphQL extends EventEmitter {
  constructor(
    auth,
    users,
    employees,
    countries,
    profit,
    sales,
    clients,
    avgTime
  ) {
    super();

    this.auth = auth;
    this.users = users;
    this.employees = employees;
    this.countries = countries;
    this.profit = profit;
    this.sales = sales;
    this.clients = clients;
    this.avgTime = avgTime;

    this.nodeDefinitions = nodeDefinitions(
      (globalId, context) => {
        const result = _.find(
          [
            this.auth.idFetcher(globalId, context),
            this.user.idFetcher(globalId, context),
            this.employees.idFetcher(globalId, context),
            this.countries.idFetcher(globalId, context),
            this.profit.idFetcher(globalId, context),
            this.sales.idFetcher(globalId, context),
            this.clients.idFetcher(globalId, context),
            this.avgTime.idFetcher(globalId, context)
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
            this.countries.typeResolver(obj),
            this.profit.typeResolver(obj),
            this.sales.typeResolver(obj),
            this.clients.typeResolver(obj),
            this.avgTime.typeResolver(obj)
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
      "graphql.countries",
      "graphql.profit",
      "graphql.sales",
      "graphql.clients",
      "graphql.avgTime"
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
        this.countries.init();
        this.profit.init();
        this.sales.init();
        this.clients.init();
        this.avgTime.init();

        this.Query = new GraphQLObjectType({
          name: "Query",
          fields: _.merge(
            { node: this.nodeDefinitions.nodeField },
            this.auth.query,
            this.users.query,
            this.employees.query,
            this.countries.query,
            this.profit.query,
            this.sales.query,
            this.clients.query,
            this.avgTime.query
          )
        });

        this.Mutation = new GraphQLObjectType({
          name: "Mutation",
          fields: _.merge(
            {},
            this.auth.mutation,
            this.users.mutation,
            this.employees.mutation,
            this.countries.mutation,
            this.profit.mutation,
            this.sales.mutation,
            this.clients.mutation,
            this.avgTime.mutation
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
