const EventEmitter = require("events");
const { GraphQLNonNull, GraphQLInt, GraphQLObjectType } = require("graphql");
const {
  connectionArgs,
  connectionDefinitions,
  connectionFromPromisedArray,
  fromGlobalId,
  globalIdField
} = require("graphql-relay");
const GraphQLDate = require("./Date");

class Clients extends EventEmitter {
  constructor(di, dashboardModel, dashboardRepo, employeesRepo) {
    super();

    this.di = di;
    this.dashboardModel = dashboardModel;
    this.dashboardRepo = dashboardRepo;
    this.employeesRepo = employeesRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.clients";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [
      "di",
      "model.dashboard",
      "repository.dashboard",
      "repository.employees"
    ];
  }

  idFetcher(globalId, context) {
    const { type } = fromGlobalId(globalId);
    if (type === "ClientsList") return this.dashboardRepo.getClients(context);
    return null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  typeResolver() {
    return null;
  }

  init() {
    const root = this.di.get("graphql");
    const { nodeInterface } = root.nodeDefinitions;

    this.GraphQLClients = new GraphQLObjectType({
      name: "Clients",
      fields: () => ({
        id: globalIdField("Clients"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        cients: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: ClientsConnection,
      edgeType: GraphQLClientsEdge
    } = connectionDefinitions({
      name: "Clients",
      nodeType: this.GraphQLClients
    });
    this.ClientsConnection = ClientsConnection;
    this.GraphQLClientsEdge = GraphQLClientsEdge;

    this.GraphQLClientsList = new GraphQLObjectType({
      name: "ClientsList",
      fields: {
        id: globalIdField("ClientsList"),
        clients: {
          type: this.ClientsConnection,
          args: connectionArgs,
          resolve: (source, args, context) =>
            connectionFromPromisedArray(
              this.dashboardRepo.getClients(context, args),
              args
            )
        }
      },
      interfaces: [nodeInterface]
    });

    this.query = {
      clients: {
        type: this.GraphQLClientsList
      }
    };

    this.mutation = {};
  }
}

module.exports = Clients;
