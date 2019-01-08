const EventEmitter = require("events");
const { GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");
const {
  connectionArgs,
  connectionDefinitions,
  connectionFromPromisedArray,
  fromGlobalId,
  globalIdField
} = require("graphql-relay");

class Countries extends EventEmitter {
  constructor(di, dashboardModel, dashboardRepo, employeesRepo) {
    super();

    this.di = di;
    this.dashboardModel = dashboardModel;
    this.dashboardRepo = dashboardRepo;
    this.employeesRepo = employeesRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.countries";
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
    if (type === "CountryList") return this.dashboardRepo.getCountries(context);
    return null;
  }

  typeResolver(obj) {
    if (obj instanceof this.dashboardModel.CountryModel)
      return this.GraphQLCountry;
    return null;
  }

  init() {
    const root = this.di.get("graphql");
    const { nodeInterface } = root.nodeDefinitions;

    this.GraphQLCountry = new GraphQLObjectType({
      name: "Country",
      fields: () => ({
        id: globalIdField("Country"),
        name: { type: new GraphQLNonNull(GraphQLString) },
        callingCode: { type: new GraphQLNonNull(GraphQLString) },
        employees: {
          type: root.employees.EmployeesConnection,
          args: {
            dept: { type: GraphQLString },
            ...connectionArgs
          },
          resolve: (source, args, context) =>
            connectionFromPromisedArray(
              this.employeesRepo.getEmployees(
                context,
                _.assign({}, args, { country: source.id })
              ),
              args
            )
        }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: CountriesConnection,
      edgeType: GraphQLCountryEdge
    } = connectionDefinitions({
      name: "Country",
      nodeType: this.GraphQLCountry
    });
    this.CountriesConnection = CountriesConnection;
    this.GraphQLCountryEdge = GraphQLCountryEdge;

    this.GraphQLCountryList = new GraphQLObjectType({
      name: "CountryList",
      fields: {
        id: globalIdField("CountryList"),
        countries: {
          type: this.CountriesConnection,
          args: connectionArgs,
          resolve: (source, args, context) =>
            connectionFromPromisedArray(
              this.dashboardRepo.getCountries(context, args),
              args
            )
        }
      },
      interfaces: [nodeInterface]
    });

    this.query = {
      country: {
        type: this.GraphQLCountry,
        args: {
          id: globalIdField("Country")
        },
        resolve: (source, args, context) =>
          this.dashboardRepo.getCountry(context, {
            id: fromGlobalId(args.id).id
          })
      },
      countries: {
        type: this.GraphQLCountryList
      }
    };

    this.mutation = {};
  }
}

module.exports = Countries;
