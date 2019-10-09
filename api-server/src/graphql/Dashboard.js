const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLObjectType
} = require("graphql");
const {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  connectionFromPromisedArray,
  fromGlobalId,
  globalIdField
} = require("graphql-relay");
const GraphQLDate = require("./Date");

class Dashboard {
  constructor(di, dashboardModel, dashboardRepo, employeesRepo) {
    this.di = di;
    this.dashboardModel = dashboardModel;
    this.dashboardRepo = dashboardRepo;
    this.employeesRepo = employeesRepo;
    this.root = null;
  }

  static get $provides() {
    return "graphql.dashboard";
  }

  static get $requires() {
    return [
      "di",
      "model.dashboard",
      "repository.dashboard",
      "repository.employees"
    ];
  }

  idFetcher(globalId, context) {
    const { type, id } = fromGlobalId(globalId);
    if (type === "Country")
      return this.dashboardRepo.getCountry(context, { id });
    if (type === "USCity") return this.dashboardRepo.getUSCity(context, { id });
    if (type === "VisitorsValue")
      return this.dashboardRepo.getVisitorsValue(context, { id });
    if (type === "LoadValue")
      return this.dashboardRepo.getLoadValue(context, { id });
    if (type === "MemoryValue")
      return this.dashboardRepo.getMemoryValue(context, { id });
    if (type === "OperationsValue")
      return this.dashboardRepo.getOperationsValue(context, { id });
    if (type === "AvgTimeValue")
      return this.dashboardRepo.getAvgTimeValue(context, { id });
    return null;
  }

  typeResolver(obj) {
    if (obj instanceof this.dashboardModel.CountryModel)
      return this.root.Country;
    if (obj instanceof this.dashboardModel.USCityModel) return this.root.USCity;
    if (obj instanceof this.dashboardModel.VisitorsValueModel)
      return this.root.VisitorsValue;
    if (obj instanceof this.dashboardModel.LoadValueModel)
      return this.root.LoadValue;
    if (obj instanceof this.dashboardModel.MemoryValueModel)
      return this.root.MemoryValue;
    if (obj instanceof this.dashboardModel.OperationsValueModel)
      return this.root.OperationsValue;
    if (obj instanceof this.dashboardModel.AvgTimeValueModel)
      return this.root.AvgTimeValue;
    return null;
  }

  async init({ root }) {
    this.root = root;
    const { nodeInterface } = this.root.nodeDefinitions;

    this.root.Country = new GraphQLObjectType({
      name: "Country",
      fields: () => ({
        id: globalIdField("Country"),
        name: { type: new GraphQLNonNull(GraphQLString) },
        callingCode: { type: new GraphQLNonNull(GraphQLString) },
        employees: {
          type: this.root.EmployeeConnection,
          args: {
            dept: { type: this.root.EmployeeDept },
            ...connectionArgs
          },
          resolve: (source, args, context) =>
            this.employeesRepo.getEmployeeConnection(
              context,
              Object.assign({}, args, {
                country: source.id,
                dept: args.dept && this.employeeModel.depts[args.dept]
              })
            )
        }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: CountryConnection,
      edgeType: CountryEdge
    } = connectionDefinitions({
      name: "Country",
      nodeType: this.root.Country
    });
    this.root.CountryConnection = CountryConnection;
    this.root.CountryEdge = CountryEdge;

    this.root.USCity = new GraphQLObjectType({
      name: "USCity",
      fields: () => ({
        id: globalIdField("USCity"),
        name: { type: new GraphQLNonNull(GraphQLString) },
        stateId: { type: new GraphQLNonNull(GraphQLString) },
        stateName: { type: new GraphQLNonNull(GraphQLString) },
        lat: { type: new GraphQLNonNull(GraphQLFloat) },
        lng: { type: new GraphQLNonNull(GraphQLFloat) },
        population: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: USCityConnection,
      edgeType: USCityEdge
    } = connectionDefinitions({
      name: "USCity",
      nodeType: this.root.USCity,
      connectionFields: () => ({
        otherPopulation: {
          type: GraphQLInt
        }
      })
    });
    this.root.USCityConnection = USCityConnection;
    this.root.USCityEdge = USCityEdge;

    this.root.VisitorsValue = new GraphQLObjectType({
      name: "VisitorsValue",
      fields: () => ({
        id: globalIdField("VisitorsValue"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        visitors: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: VisitorsValueConnection,
      edgeType: VisitorsValueEdge
    } = connectionDefinitions({
      name: "VisitorsValue",
      nodeType: this.root.VisitorsValue
    });
    this.root.VisitorsValueConnection = VisitorsValueConnection;
    this.root.VisitorsValueEdge = VisitorsValueEdge;

    this.root.LoadValue = new GraphQLObjectType({
      name: "LoadValue",
      fields: () => ({
        id: globalIdField("LoadValue"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        load: { type: new GraphQLNonNull(GraphQLFloat) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: LoadValueConnection,
      edgeType: LoadValueEdge
    } = connectionDefinitions({
      name: "LoadValue",
      nodeType: this.root.LoadValue
    });
    this.root.LoadValueConnection = LoadValueConnection;
    this.root.LoadValueEdge = LoadValueEdge;

    this.root.MemoryValue = new GraphQLObjectType({
      name: "MemoryValue",
      fields: () => ({
        id: globalIdField("MemoryValue"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        memory: { type: new GraphQLNonNull(GraphQLFloat) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: MemoryValueConnection,
      edgeType: MemoryValueEdge
    } = connectionDefinitions({
      name: "MemoryValue",
      nodeType: this.root.MemoryValue
    });
    this.root.MemoryValueConnection = MemoryValueConnection;
    this.root.MemoryValueEdge = MemoryValueEdge;

    this.root.OperationsValue = new GraphQLObjectType({
      name: "OperationsValue",
      fields: () => ({
        id: globalIdField("OperationsValue"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        operations: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: OperationsValueConnection,
      edgeType: OperationsValueEdge
    } = connectionDefinitions({
      name: "OperationsValue",
      nodeType: this.root.OperationsValue
    });
    this.root.OperationsValueConnection = OperationsValueConnection;
    this.root.OperationsValueEdge = OperationsValueEdge;

    this.root.AvgTimeValue = new GraphQLObjectType({
      name: "AvgTimeValue",
      fields: () => ({
        id: globalIdField("AvgTimeValue"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        avgTime: { type: new GraphQLNonNull(GraphQLFloat) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: AvgTimeValueConnection,
      edgeType: AvgTimeValueEdge
    } = connectionDefinitions({
      name: "AvgTimeValue",
      nodeType: this.root.AvgTimeValue
    });
    this.root.AvgTimeValueConnection = AvgTimeValueConnection;
    this.root.AvgTimeValueEdge = AvgTimeValueEdge;

    this.query = {
      country: {
        type: this.root.Country,
        args: {
          id: { type: GraphQLID }
        },
        resolve: (source, args, context) =>
          this.dashboardRepo.getCountry(
            context,
            Object.assign({}, args, { id: args.id && fromGlobalId(args.id).id })
          )
      },
      countries: {
        type: this.root.CountryConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getCountries(context, args),
            args
          )
      },
      usCity: {
        type: this.root.USCity,
        args: {
          id: { type: GraphQLID }
        },
        resolve: (source, args, context) =>
          this.dashboardRepo.getUSCity(
            context,
            Object.assign({}, args, { id: args.id && fromGlobalId(args.id).id })
          )
      },
      usCities: {
        type: this.root.USCityConnection,
        args: {
          ...connectionArgs,
          stateId: { type: GraphQLString },
          stateName: { type: GraphQLString },
          limit: { type: GraphQLInt }
        },
        resolve: async (source, args, context) => {
          const cities = await this.dashboardRepo.getUSCities(context, args);
          const conn = await connectionFromArray(cities, args);
          conn.otherPopulation = cities.otherPopulation;
          return conn;
        }
      },
      visitorsValues: {
        type: this.root.VisitorsValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getVisitorsValues(context, args),
            args
          )
      },
      loadValues: {
        type: this.root.LoadValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getLoadValues(context, args),
            args
          )
      },
      memoryValues: {
        type: this.root.MemoryValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getMemoryValues(context, args),
            args
          )
      },
      operationsValues: {
        type: this.root.OperationsValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getOperationsValues(context, args),
            args
          )
      },
      avgTimeValues: {
        type: this.root.AvgTimeValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getAvgTimeValues(context, args),
            args
          )
      }
    };

    this.mutation = {};

    this.root.DashboardValues = new GraphQLObjectType({
      name: "DashboardValues",
      fields: () => ({
        id: globalIdField("DashboardValues"),
        visitors: { type: new GraphQLNonNull(this.root.VisitorsValueEdge) },
        load: { type: new GraphQLNonNull(this.root.LoadValueEdge) },
        memory: { type: new GraphQLNonNull(this.root.MemoryValueEdge) },
        operations: { type: new GraphQLNonNull(this.root.OperationsValueEdge) },
        avgTime: { type: new GraphQLNonNull(this.root.AvgTimeValueEdge) }
      }),
      interfaces: [nodeInterface]
    });

    this.subscription = {
      dashboardEvent: {
        type: this.root.DashboardValues,
        args: {},
        subscribe: this.dashboardRepo.subscribe("dashboardEvent")
      }
    };
  }
}

module.exports = Dashboard;
