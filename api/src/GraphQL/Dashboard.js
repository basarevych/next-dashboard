const EventEmitter = require("events");
const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} = require("graphql");
const {
  connectionArgs,
  connectionDefinitions,
  connectionFromPromisedArray,
  fromGlobalId,
  globalIdField
} = require("graphql-relay");
const GraphQLDate = require("./Date");

class Dashboard extends EventEmitter {
  constructor(di, dashboardModel, dashboardRepo, employeesRepo) {
    super();

    this.di = di;
    this.dashboardModel = dashboardModel;
    this.dashboardRepo = dashboardRepo;
    this.employeesRepo = employeesRepo;
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
    if (type === "ProfitValue")
      return this.dashboardRepo.getProfitValue(context, { id });
    if (type === "SalesValue")
      return this.dashboardRepo.getSalesValue(context, { id });
    if (type === "ClientsValue")
      return this.dashboardRepo.getClientsValue(context, { id });
    if (type === "AvgTimeValue")
      return this.dashboardRepo.getAvgTimeValue(context, { id });
    if (type === "MarketShareValue")
      return this.dashboardRepo.getMarketSharesValue(context, { id });
    if (type === "MarketShare") {
      return this.dashboardRepo.getMarketShareByCountry(context, { id });
    }
    return null;
  }

  typeResolver(obj) {
    if (obj instanceof this.dashboardModel.CountryModel) return this.Country;
    if (obj instanceof this.dashboardModel.ProfitValueModel)
      return this.ProfitValue;
    if (obj instanceof this.dashboardModel.SalesValueModel)
      return this.SalesValue;
    if (obj instanceof this.dashboardModel.ClientsValueModel)
      return this.ClientsValue;
    if (obj instanceof this.dashboardModel.AvgTimeValueModel)
      return this.AvgTimeValue;
    if (obj instanceof this.dashboardModel.MarketShareValueModel)
      return this.MarketShareValue;
    if (obj instanceof this.dashboardModel.MarketShareModel)
      return this.MarketShare;
    return null;
  }

  init() {
    const root = this.di.get("graphql");
    const { nodeInterface } = root.nodeDefinitions;

    this.Country = new GraphQLObjectType({
      name: "Country",
      fields: () => ({
        id: globalIdField("Country"),
        name: { type: new GraphQLNonNull(GraphQLString) },
        callingCode: { type: new GraphQLNonNull(GraphQLString) },
        employees: {
          type: root.employees.EmployeeConnection,
          args: {
            dept: { type: root.employees.EmployeeDept },
            ...connectionArgs
          },
          resolve: (source, args, context) =>
            this.employeesRepo.getEmployeeConnection(
              context,
              _.assign({}, args, {
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
      nodeType: this.Country
    });
    this.CountryConnection = CountryConnection;
    this.CountryEdge = CountryEdge;

    this.ProfitValue = new GraphQLObjectType({
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
      nodeType: this.ProfitValue
    });
    this.ProfitValueConnection = ProfitValueConnection;
    this.ProfitValueEdge = ProfitValueEdge;

    this.SalesValue = new GraphQLObjectType({
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
      nodeType: this.SalesValue
    });
    this.SalesValueConnection = SalesValueConnection;
    this.SalesValueEdge = SalesValueEdge;

    this.ClientsValue = new GraphQLObjectType({
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
      nodeType: this.ClientsValue
    });
    this.ClientsValueConnection = ClientsValueConnection;
    this.ClientsValueEdge = ClientsValueEdge;

    this.AvgTimeValue = new GraphQLObjectType({
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
      nodeType: this.AvgTimeValue
    });
    this.AvgTimeValueConnection = AvgTimeValueConnection;
    this.AvgTimeValueEdge = AvgTimeValueEdge;

    this.MarketShareValue = new GraphQLObjectType({
      name: "MarketShareValue",
      fields: () => ({
        id: globalIdField("MarketShareValue"),
        vendor: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        values: { type: new GraphQLNonNull(new GraphQLList(GraphQLFloat)) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: MarketShareValueConnection,
      edgeType: MarketShareValueEdge
    } = connectionDefinitions({
      name: "MarketShareValue",
      nodeType: this.MarketShareValue
    });
    this.MarketShareValueConnection = MarketShareValueConnection;
    this.MarketShareValueEdge = MarketShareValueEdge;

    this.MarketShare = new GraphQLObjectType({
      name: "MarketShare",
      fields: () => ({
        id: globalIdField("MarketShare"),
        country: {
          type: this.Country,
          resolve: (source, args, context) =>
            source.id === "WORLD"
              ? null
              : this.dashboardRepo.getCountry(
                  context,
                  _.assign({}, args, {
                    id: source.id
                  })
                )
        },
        shares: {
          type: new GraphQLNonNull(new GraphQLList(this.MarketShareValue))
        }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: MarketShareConnection,
      edgeType: MarketShareEdge
    } = connectionDefinitions({
      name: "MarketShare",
      nodeType: this.MarketShare
    });
    this.MarketShareConnection = MarketShareConnection;
    this.MarketShareEdge = MarketShareEdge;

    this.query = {
      countries: {
        type: this.CountryConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getCountries(context, args),
            args
          )
      },
      profitValues: {
        type: this.ProfitValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getProfitValues(context, args),
            args
          )
      },
      salesValues: {
        type: this.SalesValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getSalesValues(context, args),
            args
          )
      },
      clientsValues: {
        type: this.ClientsValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getClientsValues(context, args),
            args
          )
      },
      avgTimeValues: {
        type: this.AvgTimeValueConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getAvgTimeValues(context, args),
            args
          )
      },
      marketSharesByCountry: {
        type: this.MarketShare,
        args: {
          country: { type: GraphQLID }
        },
        resolve: (source, args, context) =>
          this.dashboardRepo.getMarketSharesByCountry(context, args)
      },
      marketShares: {
        type: this.MarketShareConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getMarketShares(context, args),
            args
          )
      }
    };

    this.mutation = {};
    this.subscription = {};
  }
}

module.exports = Dashboard;
