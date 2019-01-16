const EventEmitter = require("events");
const {
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
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
  mongooseConnection: { connectionFromPromisedArray, documentToCursor }
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
    if (type === "Employee")
      return this.employeesRepo.getEmployee(context, { id });
    return null;
  }

  typeResolver(obj) {
    if (obj instanceof this.employeeModel.model) return this.Employee;
    return null;
  }

  init() {
    const root = this.di.get("graphql");
    const { nodeInterface } = root.nodeDefinitions;

    this.EmployeeDept = new GraphQLEnumType({
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

    this.Employee = new GraphQLObjectType({
      name: "Employee",
      fields: () => ({
        id: globalIdField("Employee"),
        whenCreated: { type: new GraphQLNonNull(GraphQLDate) },
        whenUpdated: { type: new GraphQLNonNull(GraphQLDate) },
        checked: { type: new GraphQLNonNull(GraphQLBoolean) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        dept: {
          type: new GraphQLNonNull(new GraphQLList(this.EmployeeDept))
        },
        title: { type: new GraphQLNonNull(GraphQLString) },
        country: {
          type: new GraphQLNonNull(root.dashboard.Country),
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
      edgeType: EmployeeEdge
    } = connectionDefinitions({
      name: "Employee",
      nodeType: this.Employee,
      connectionFields: () => ({
        totalCount: {
          type: GraphQLInt,
          resolve: async (source, args, context) =>
            this.employeesRepo.countEmployees(context, args)
        }
      })
    });
    this.EmployeesConnection = EmployeesConnection;
    this.EmployeeEdge = EmployeeEdge;

    this.query = {
      employee: {
        type: this.Employee,
        args: {
          id: { type: GraphQLID }
        },
        resolve: (source, args, context) =>
          this.employeesRepo.getEmployee(
            context,
            _.assign({}, args, { id: args.id && fromGlobalId(args.id).id })
          )
      },
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
    };

    this.CreateEmployeeMutation = mutationWithClientMutationId({
      name: "CreateEmployee",
      inputFields: {
        checked: { type: GraphQLBoolean },
        name: { type: GraphQLString },
        dept: { type: new GraphQLList(this.EmployeeDept) },
        title: { type: GraphQLString },
        country: { type: GraphQLString },
        salary: { type: GraphQLInt }
      },
      outputFields: {
        employeeEdge: {
          type: this.EmployeeEdge,
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

    this.EditEmployeeMutation = mutationWithClientMutationId({
      name: "EditEmployee",
      inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        checked: { type: GraphQLBoolean },
        name: { type: GraphQLString },
        dept: { type: new GraphQLList(this.EmployeeDept) },
        title: { type: GraphQLString },
        country: { type: GraphQLString },
        salary: { type: GraphQLInt }
      },
      outputFields: {
        employeeEdge: {
          type: this.EmployeeEdge,
          resolve: async ({ employee }) => ({
            cursor: documentToCursor(employee),
            node: employee
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const employee = await this.employeesRepo.editEmployee(
          context,
          _.assign({}, args, { id: fromGlobalId(args.id).id })
        );
        return { employee };
      }
    });

    this.DeleteEmployeeMutation = mutationWithClientMutationId({
      name: "DeleteEmployee",
      inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      outputFields: {
        employeeEdge: {
          type: this.EmployeeEdge,
          resolve: async ({ employee }) => ({
            cursor: documentToCursor(employee),
            node: employee
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const employee = await this.employeesRepo.deleteEmployee(
          context,
          _.assign({}, args, { id: fromGlobalId(args.id).id })
        );
        return { employee };
      }
    });

    this.mutation = {
      createEmployee: this.CreateEmployeeMutation,
      editEmployee: this.EditEmployeeMutation,
      deleteEmployee: this.DeleteEmployeeMutation
    };
  }
}

module.exports = Employees;
