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

class Profit extends EventEmitter {
  constructor(di, dashboardModel, dashboardRepo, employeesRepo) {
    super();

    this.di = di;
    this.dashboardModel = dashboardModel;
    this.dashboardRepo = dashboardRepo;
    this.employeesRepo = employeesRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.profit";
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
    if (type === "ProfitList") return this.dashboardRepo.getProfit(context);
    return null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  typeResolver() {
    return null;
  }

  init() {
    const root = this.di.get("graphql");
    const { nodeInterface } = root.nodeDefinitions;

    this.GraphQLProfit = new GraphQLObjectType({
      name: "Profit",
      fields: () => ({
        id: globalIdField("Profit"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        revenues: { type: new GraphQLNonNull(GraphQLInt) },
        expenses: { type: new GraphQLNonNull(GraphQLInt) },
        profit: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: ProfitsConnection,
      edgeType: GraphQLProfitEdge
    } = connectionDefinitions({
      name: "Profit",
      nodeType: this.GraphQLProfit
    });
    this.ProfitsConnection = ProfitsConnection;
    this.GraphQLProfitEdge = GraphQLProfitEdge;

    this.GraphQLProfitList = new GraphQLObjectType({
      name: "ProfitList",
      fields: {
        id: globalIdField("ProfitList"),
        profit: {
          type: this.ProfitsConnection,
          args: connectionArgs,
          resolve: (source, args, context) =>
            connectionFromPromisedArray(
              this.dashboardRepo.getProfit(context, args),
              args
            )
        }
      },
      interfaces: [nodeInterface]
    });

    this.query = {
      profit: {
        type: this.GraphQLProfitList
      }
    };

    this.mutation = {};
  }
}

module.exports = Profit;
