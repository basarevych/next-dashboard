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

class Sales extends EventEmitter {
  constructor(di, dashboardModel, dashboardRepo, employeesRepo) {
    super();

    this.di = di;
    this.dashboardModel = dashboardModel;
    this.dashboardRepo = dashboardRepo;
    this.employeesRepo = employeesRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.sales";
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
    if (type === "SalesList") return this.dashboardRepo.getSales(context);
    return null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  typeResolver() {
    return null;
  }

  init() {
    const root = this.di.get("graphql");
    const { nodeInterface } = root.nodeDefinitions;

    this.GraphQLSales = new GraphQLObjectType({
      name: "Sales",
      fields: () => ({
        id: globalIdField("Sales"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        sales: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: SalesConnection,
      edgeType: GraphQLSalesEdge
    } = connectionDefinitions({
      name: "Sales",
      nodeType: this.GraphQLSales
    });
    this.SalesConnection = SalesConnection;
    this.GraphQLSalesEdge = GraphQLSalesEdge;

    this.GraphQLSalesList = new GraphQLObjectType({
      name: "SalesList",
      fields: {
        id: globalIdField("SalesList"),
        sales: {
          type: this.SalesConnection,
          args: connectionArgs,
          resolve: (source, args, context) =>
            connectionFromPromisedArray(
              this.dashboardRepo.getSales(context, args),
              args
            )
        }
      },
      interfaces: [nodeInterface]
    });

    this.query = {
      sales: {
        type: this.GraphQLSalesList
      }
    };

    this.mutation = {};
  }
}

module.exports = Sales;
