const EventEmitter = require("events");
const {
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType
} = require("graphql");
const {
  connectionArgs,
  connectionDefinitions,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId
} = require("graphql-relay");
const {
  connectionFromPromisedArray,
  documentToCursor
} = require("graphql-relay-connection");
const constants = require("../../../common/constants");
const GraphQLDate = require("./Date");

class Employees extends EventEmitter {
  constructor(di, employeeModel, employeesRepo, dashboardRepo) {
    super();

    this.di = di;
    this.employeeModel = employeeModel;
    this.employeesRepo = employeesRepo;
    this.dashboardRepo = dashboardRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.employees";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [
      "di",
      "model.employee",
      "repository.employees",
      "repository.dashboard"
    ];
  }

  idFetcher(globalId, context) {
    const { type, id } = fromGlobalId(globalId);
    console.log(id);
    if (type === "Employee")
      return this.employeesRepo.getEmployee(context, { id });
    if (type === "EmployeeList")
      return this.employeesRepo.getEmployees(context);
    return null;
  }

  typeResolver(obj) {
    if (obj instanceof this.employeeModel.model) return this.GraphQLEmployee;
    return null;
  }

  init() {
    const root = this.di.get("graphql");
    const { nodeInterface } = root.nodeDefinitions;

    this.GraphQLEmployeeDept = new GraphQLEnumType({
      name: "EmployeeDept",
      values: _.reduce(
        _.map(constants.depts, (dept, index) => ({ dept, index })),
        (acc, cur) => {
          acc[cur.dept] = { value: cur.index };
          return acc;
        },
        {}
      )
    });

    this.GraphQLEmployee = new GraphQLObjectType({
      name: "Employee",
      fields: () => ({
        id: globalIdField("Employee"),
        whenCreated: { type: new GraphQLNonNull(GraphQLDate) },
        whenUpdated: { type: new GraphQLNonNull(GraphQLDate) },
        checked: { type: new GraphQLNonNull(GraphQLBoolean) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        dept: {
          type: new GraphQLNonNull(new GraphQLList(this.GraphQLEmployeeDept))
        },
        title: { type: new GraphQLNonNull(GraphQLString) },
        country: {
          type: new GraphQLNonNull(root.countries.GraphQLCountry),
          resolve: (source, args, context) =>
            this.dashboardRepo.getCountry(
              context,
              _.assign({}, args, { id: source.country })
            )
        },
        salary: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: EmployeesConnection,
      edgeType: GraphQLEmployeeEdge
    } = connectionDefinitions({
      name: "Employee",
      nodeType: this.GraphQLEmployee
    });
    this.EmployeesConnection = EmployeesConnection;
    this.GraphQLEmployeeEdge = GraphQLEmployeeEdge;

    this.GraphQLEmployeeList = new GraphQLObjectType({
      name: "EmployeeList",
      fields: {
        id: globalIdField("EmployeeList"),
        employees: {
          type: this.EmployeesConnection,
          args: {
            dept: { type: GraphQLString },
            ...connectionArgs
          },
          resolve: (source, args, context) =>
            connectionFromPromisedArray(
              this.employeesRepo.getEmployees(context, args),
              args
            )
        }
      },
      interfaces: [nodeInterface]
    });

    this.query = {
      employee: {
        type: this.GraphQLEmployee,
        args: {
          id: globalIdField("Employee")
        },
        resolve: (source, args, context) =>
          this.employeesRepo.getEmployee(context, {
            id: fromGlobalId(args.id).id
          })
      },
      employees: {
        type: this.GraphQLEmployeeList
      }
    };

    this.GraphQLCreateEmployeeMutation = mutationWithClientMutationId({
      name: "CreateEmployee",
      inputFields: {
        checked: { type: GraphQLBoolean },
        name: { type: GraphQLString },
        dept: { type: new GraphQLList(this.GraphQLEmployeeDept) },
        title: { type: GraphQLString },
        country: { type: GraphQLString },
        salary: { type: GraphQLInt }
      },
      outputFields: {
        employeeEdge: {
          type: this.GraphQLEmployeeEdge,
          resolve: async ({ employee }) => ({
            cursor: documentToCursor(employee),
            node: employee
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const employee = await this.employeesRepo.createEmployee(context, args);
        return { employee };
      }
    });

    this.GraphQLEditEmployeeMutation = mutationWithClientMutationId({
      name: "EditEmployee",
      inputFields: {
        id: { type: GraphQLID },
        checked: { type: GraphQLBoolean },
        name: { type: GraphQLString },
        dept: { type: new GraphQLList(this.GraphQLEmployeeDept) },
        title: { type: GraphQLString },
        country: { type: GraphQLString },
        salary: { type: GraphQLInt }
      },
      outputFields: {
        employeeEdge: {
          type: this.GraphQLEmployeeEdge,
          resolve: async ({ employee }) => ({
            cursor: documentToCursor(employee),
            node: employee
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const employee = await this.employeesRepo.editEmployee(context, args);
        return { employee };
      }
    });

    this.GraphQLDeleteEmployeeMutation = mutationWithClientMutationId({
      name: "DeleteEmployee",
      inputFields: {
        id: { type: GraphQLID }
      },
      outputFields: {
        employeeEdge: {
          type: this.GraphQLEmployeeEdge,
          resolve: async ({ employee }) => ({
            cursor: documentToCursor(employee),
            node: employee
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const employee = await this.employeesRepo.deleteEmployee(context, args);
        return { employee };
      }
    });

    this.mutation = {
      createEmployee: this.GraphQLCreateEmployeeMutation,
      editEmployee: this.GraphQLEditEmployeeMutation,
      deleteEmployee: this.GraphQLDeleteEmployeeMutation
    };
  }
}

module.exports = Employees;
