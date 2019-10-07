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
    if (type === "ProfitValue")
      return this.dashboardRepo.getProfitValue(context, { id });
    if (type === "SalesValue")
      return this.dashboardRepo.getSalesValue(context, { id });
    if (type === "ClientsValue")
      return this.dashboardRepo.getClientsValue(context, { id });
    if (type === "AvgTimeValue")
      return this.dashboardRepo.getAvgTimeValue(context, { id });
    return null;
  }

  typeResolver(obj) {
    if (obj instanceof this.dashboardModel.CountryModel)
      return this.root.Country;
    if (obj instanceof this.dashboardModel.USCityModel) return this.root.USCity;
    if (obj instanceof this.dashboardModel.ProfitValueModel)
      return this.root.ProfitValue;
    if (obj instanceof this.dashboardModel.SalesValueModel)
      return this.root.SalesValue;
    if (obj instanceof this.dashboardModel.ClientsValueModel)
      return this.root.ClientsValue;
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

    this.root.ProfitValue = new GraphQLObjectType({
      name: "ProfitValue",
      fields: () => ({
        id: globalIdField("ProfitValue"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        revenues: { type: new GraphQLNonNull(GraphQLInt) },
        expenses: { type: new GraphQLNonNull(GraphQLInt) },
        profit: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: ProfitValueConnection,
      edgeType: ProfitValueEdge
    } = connectionDefinitions({
      name: "ProfitValue",
      nodeType: this.root.ProfitValue
    });
    this.root.ProfitValueConnection = ProfitValueConnection;
    this.root.ProfitValueEdge = ProfitValueEdge;

    this.root.SalesValue = new GraphQLObjectType({
      name: "SalesValue",
      fields: () => ({
        id: globalIdField("SalesValue"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        sales: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: SalesValueConnection,
      edgeType: SalesValueEdge
    } = connectionDefinitions({
      name: "SalesValue",
      nodeType: this.root.SalesValue
    });
    this.root.SalesValueConnection = SalesValueConnection;
    this.root.SalesValueEdge = SalesValueEdge;

    this.root.ClientsValue = new GraphQLObjectType({
      name: "ClientsValue",
      fields: () => ({
        id: globalIdField("ClientsValue"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        clients: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: ClientsValueConnection,
      edgeType: ClientsValueEdge
    } = connectionDefinitions({
      name: "ClientsValue",
      nodeType: this.root.ClientsValue
    });
    this.root.ClientsValueConnection = ClientsValueConnection;
    this.root.ClientsValueEdge = ClientsValueEdge;

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
      profitValues: {
        type: this.root.ProfitValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getProfitValues(context, args),
            args
          )
      },
      salesValues: {
        type: this.root.SalesValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getSalesValues(context, args),
            args
          )
      },
      clientsValues: {
        type: this.root.ClientsValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getClientsValues(context, args),
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
    this.subscription = {};
  }
}

module.exports = Dashboard;
