const EventEmitter = require("events");
const {
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType
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

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.dashboard";
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
    return null;
  }

  // eslint-disable-next-line lodash/prefer-constant
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
          type: root.employees.EmployeesConnection,
          args: {
            dept: { type: root.employees.EmployeeDept },
            ...connectionArgs
          },
          resolve: (source, args, context) =>
            this.employeesRepo.getEmployeesConnection(
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
      connectionType: CountriesConnection,
      edgeType: CountryEdge
    } = connectionDefinitions({
      name: "Country",
      nodeType: this.Country
    });
    this.CountriesConnection = CountriesConnection;
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
      connectionType: ProfitValuesConnection,
      edgeType: ProfitValueEdge
    } = connectionDefinitions({
      name: "ProfitValue",
      nodeType: this.ProfitValue
    });
    this.ProfitValuesConnection = ProfitValuesConnection;
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
      connectionType: SalesValuesConnection,
      edgeType: SalesValueEdge
    } = connectionDefinitions({
      name: "SalesValue",
      nodeType: this.SalesValue
    });
    this.SalesValuesConnection = SalesValuesConnection;
    this.SalesValueEdge = SalesValueEdge;

    this.ClientsValue = new GraphQLObjectType({
      name: "ClientsValue",
      fields: () => ({
        id: globalIdField("ClientsValue"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        cients: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: ClientsValuesConnection,
      edgeType: ClientsValueEdge
    } = connectionDefinitions({
      name: "ClientsValue",
      nodeType: this.ClientsValue
    });
    this.ClientsValuesConnection = ClientsValuesConnection;
    this.ClientsValueEdge = ClientsValueEdge;

    this.AvgTimeValue = new GraphQLObjectType({
      name: "AvgTimeValue",
      fields: () => ({
        id: globalIdField("AvgTimeValue"),
        date: { type: new GraphQLNonNull(GraphQLDate) },
        avgTime: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: AvgTimeValuesConnection,
      edgeType: AvgTimeValueEdge
    } = connectionDefinitions({
      name: "AvgTimeValue",
      nodeType: this.AvgTimeValue
    });
    this.AvgTimeValuesConnection = AvgTimeValuesConnection;
    this.AvgTimeValueEdge = AvgTimeValueEdge;

    this.query = {
      countries: {
        type: this.CountriesConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getCountries(context, args),
            args
          )
      },
      profitValues: {
        type: this.ProfitValuesConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getProfitValues(context, args),
            args
          )
      },
      salesValues: {
        type: this.SalesValuesConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getSalesValues(context, args),
            args
          )
      },
      clientsValues: {
        type: this.ClientsValuesConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.dashboardRepo.getClientsValues(context, args),
            args
          )
      },
      avgTimeValues: {
        type: this.AvgTimeValuesConnection,
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
