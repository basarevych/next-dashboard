const {
  execute,
  subscribe,
  GraphQLObjectType,
  GraphQLSchema
} = require("graphql");
const { nodeDefinitions } = require("graphql-relay");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const constants = require("../../common/constants");

class GraphQL {
  constructor(di, app, ws, auth, cache) {
    this.di = di;
    this.app = app;
    this.ws = ws;
    this.auth = auth;
    this.cache = cache;
  }

  static get $provides() {
    return "graphql";
  }

  static get $requires() {
    return ["di", "app", "ws", "auth", "cache"];
  }

  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = (async () => {
      this.modules = this.di.get(/^graphql\..+$/); // names starting with "graphql."
      const instances = Array.from(this.modules.values());

      // Relay node definitions
      this.nodeDefinitions = nodeDefinitions(
        (globalId, context) => {
          const result = instances.find(
            item => !!item.idFetcher(globalId, context)
          );
          return result || null;
        },
        obj => {
          const result = instances.find(item => !!item.typeResolver(obj));
          return result || null;
        }
      );

      // Initialize modules
      await Promise.all(instances.map(item => item.init({ root: this })));

      // Query definition
      this.Viewer = new GraphQLObjectType({
        name: "Viewer",
        fields: instances.reduce((acc, cur) => Object.assign(acc, cur.query), {
          node: this.nodeDefinitions.nodeField
        })
      });
      this.Query = new GraphQLObjectType({
        name: "Query",
        fields: {
          viewer: {
            type: this.Viewer,
            resolve: () => ({})
          },
          node: this.nodeDefinitions.nodeField
        }
      });

      // Mutation definition
      this.Mutation = new GraphQLObjectType({
        name: "Mutation",
        fields: instances.reduce(
          (acc, cur) => Object.assign(acc, cur.mutation),
          {}
        )
      });

      // Subscription definition
      this.Subscription = new GraphQLObjectType({
        name: "Subscription",
        fields: instances.reduce(
          (acc, cur) => Object.assign(acc, cur.subscription),
          {}
        )
      });

      // Create the schema
      this.schema = new GraphQLSchema({
        query: this.Query,
        mutation: this.Mutation,
        subscription: this.Subscription
      });

      // Bind the subscriptions
      if (this.app.server) {
        await this.ws.init();
        SubscriptionServer.create(
          {
            schema: this.schema,
            execute,
            subscribe,
            onConnect: async connectionParams => {
              // context.token equals to:
              //    undefined - when no token was provided (anonymous),
              //    payload - token payload when token is valid
              // if provided token is invalid reject the connection
              if (connectionParams.token) {
                let token = await this.auth.useToken(connectionParams.token);
                if (token === false) return false;
                return { token };
              }

              return true;
            }
          },
          {
            server: this.app.server,
            path: constants.graphqlBase
          }
        );
      }
    })();
    return this.promise;
  }
}

module.exports = GraphQL;
