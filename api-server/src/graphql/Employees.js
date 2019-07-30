const {
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType
} = require("graphql");
const {
  connectionArgs,
  connectionDefinitions,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId
} = require("graphql-relay");
const GraphQLDate = require("./Date");

class Employees {
  constructor(di, employeeModel, employeesRepo, dashboardRepo) {
    this.di = di;
    this.employeeModel = employeeModel;
    this.employeesRepo = employeesRepo;
    this.dashboardRepo = dashboardRepo;
  }

  static get $provides() {
    return "graphql.employees";
  }

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
        _.map(this.employeeModel.depts, (dept, index) => ({ dept, index })),
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
        uid: { type: new GraphQLNonNull(GraphQLID) },
        checked: { type: new GraphQLNonNull(GraphQLBoolean) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        dept: {
          type: new GraphQLNonNull(this.EmployeeDept),
          resolve: source => _.indexOf(this.employeeModel.depts, source.dept)
        },
        title: { type: new GraphQLNonNull(GraphQLString) },
        country: {
          type: new GraphQLNonNull(root.dashboard.Country),
          resolve: (source, args, context) =>
            this.dashboardRepo.getCountry(
              context,
              _.assign({}, args, {
                id: source.country.id
              })
            )
        },
        salary: { type: new GraphQLNonNull(GraphQLInt) }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: EmployeeConnection,
      edgeType: EmployeeEdge
    } = connectionDefinitions({
      name: "Employee",
      nodeType: this.Employee,
      connectionFields: () => ({
        totalCount: {
          type: GraphQLInt
        }
      })
    });
    this.EmployeeConnection = EmployeeConnection;
    this.EmployeeEdge = EmployeeEdge;

    this.EmployeeSortBy = new GraphQLEnumType({
      name: "EmployeeSortBy",
      values: _.reduce(
        _.map(this.employeeModel.sortBy, (item, index) => ({ item, index })),
        (acc, cur) => {
          acc[cur.item] = { value: cur.index };
          return acc;
        },
        {}
      )
    });

    this.EmployeeSortDir = new GraphQLEnumType({
      name: "EmployeeSortDir",
      values: _.reduce(
        _.map(this.employeeModel.sortDir, (item, index) => ({ item, index })),
        (acc, cur) => {
          acc[cur.item] = { value: cur.index };
          return acc;
        },
        {}
      )
    });

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
        type: this.EmployeeConnection,
        args: {
          dept: { type: this.EmployeeDept },
          sortBy: { type: this.EmployeeSortBy },
          sortDir: { type: this.EmployeeSortDir },
          ...connectionArgs
        },
        resolve: (source, args, context) =>
          this.employeesRepo.getEmployeeConnection(
            context,
            _.assign({}, args, {
              dept:
                _.isNumber(args.dept) && this.employeeModel.depts[args.dept],
              sortBy:
                _.isNumber(args.sortBy) &&
                this.employeeModel.sortBy[args.sortBy],
              sortDir:
                _.isNumber(args.sortDir) &&
                this.employeeModel.sortDir[args.sortDir]
            })
          )
      }
    };

    this.CreateEmployeeMutation = mutationWithClientMutationId({
      name: "CreateEmployee",
      inputFields: {
        uid: { type: GraphQLID },
        checked: { type: GraphQLBoolean },
        name: { type: GraphQLString },
        dept: { type: this.EmployeeDept },
        title: { type: GraphQLString },
        country: { type: GraphQLID },
        salary: { type: GraphQLInt }
      },
      outputFields: {
        employee: { type: this.Employee }
      },
      mutateAndGetPayload: async (args, context) => {
        const employee = await this.employeesRepo.createEmployee(
          context,
          _.assign({}, args, {
            dept: _.isNumber(args.dept) && this.employeeModel.depts[args.dept]
          })
        );
        return { employee };
      }
    });

    this.EditEmployeeMutation = mutationWithClientMutationId({
      name: "EditEmployee",
      inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        uid: { type: GraphQLID },
        checked: { type: GraphQLBoolean },
        name: { type: GraphQLString },
        dept: { type: this.EmployeeDept },
        title: { type: GraphQLString },
        country: { type: GraphQLID },
        salary: { type: GraphQLInt }
      },
      outputFields: {
        employee: { type: this.Employee }
      },
      mutateAndGetPayload: async (args, context) => {
        const employee = await this.employeesRepo.editEmployee(
          context,
          _.assign({}, args, {
            id: args.id && fromGlobalId(args.id).id,
            dept: _.isNumber(args.dept) && this.employeeModel.depts[args.dept]
          })
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
        employee: { type: this.Employee }
      },
      mutateAndGetPayload: async (args, context) => {
        const employee = await this.employeesRepo.deleteEmployee(
          context,
          _.assign({}, args, { id: args.id && fromGlobalId(args.id).id })
        );
        return { employee };
      }
    });

    this.mutation = {
      createEmployee: this.CreateEmployeeMutation,
      editEmployee: this.EditEmployeeMutation,
      deleteEmployee: this.DeleteEmployeeMutation
    };

    this.subscription = {
      employeeCreated: {
        type: this.Employee,
        args: {},
        subscribe: this.employeesRepo.subscribe("employeeCreated")
      },
      employeeUpdated: {
        type: this.Employee,
        args: {},
        subscribe: this.employeesRepo.subscribe("employeeUpdated")
      },
      employeeDeleted: {
        type: this.Employee,
        args: {},
        subscribe: this.employeesRepo.subscribe("employeeDeleted")
      },
      employeeEvent: {
        type: this.Employee,
        args: {},
        resolve: ({ employeeCreated, employeeUpdated, employeeDeleted }) =>
          employeeCreated || employeeUpdated || employeeDeleted,
        subscribe: this.employeesRepo.subscribe([
          "employeeCreated",
          "employeeUpdated",
          "employeeDeleted"
        ])
      }
    };
  }
}

module.exports = Employees;
