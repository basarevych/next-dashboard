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

class AvgTime extends EventEmitter {
  constructor(di, dashboardModel, dashboardRepo, employeesRepo) {
    super();

    this.di = di;
    this.dashboardModel = dashboardModel;
    this.dashboardRepo = dashboardRepo;
    this.employeesRepo = employeesRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.avgTime";
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
    if (type === "AvgTimeList") return this.dashboardRepo.getAvgTime(context);
    return null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  typeResolver() {
    return null;
  }

  init() {
    const root = this.di.get("graphql");
    const { nodeInterface } = root.nodeDefinitions;

    this.GraphQLAvgTime = new GraphQLObjectType({
      name: "AvgTime",
      fields: () => ({
        id: globalIdField("AvgTime"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        avgTime: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: AvgTimeConnection,
      edgeType: GraphQLAvgTimeEdge
    } = connectionDefinitions({
      name: "AvgTime",
      nodeType: this.GraphQLAvgTime
    });
    this.AvgTimeConnection = AvgTimeConnection;
    this.GraphQLAvgTimeEdge = GraphQLAvgTimeEdge;

    this.GraphQLAvgTimeList = new GraphQLObjectType({
      name: "AvgTimeList",
      fields: {
        id: globalIdField("AvgTimeList"),
        avgTime: {
          type: this.AvgTimeConnection,
          args: connectionArgs,
          resolve: (source, args, context) =>
            connectionFromPromisedArray(
              this.dashboardRepo.getAvgTime(context, args),
              args
            )
        }
      },
      interfaces: [nodeInterface]
    });

    this.query = {
      avgTime: {
        type: this.GraphQLAvgTimeList
      }
    };

    this.mutation = {};
  }
}

module.exports = AvgTime;
