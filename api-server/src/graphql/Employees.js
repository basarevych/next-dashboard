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
    this.root = null;
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
    if (obj instanceof this.employeeModel.model) return this.root.Employee;
    return null;
  }

  async init({ root }) {
    this.root = root;
    const { nodeInterface } = this.root.nodeDefinitions;

    this.root.EmployeeDept = new GraphQLEnumType({
      name: "EmployeeDept",
      values: this.employeeModel.depts
        .map((dept, index) => ({ dept, index }))
        .reduce((acc, cur) => {
          acc[cur.dept] = { value: cur.index };
          return acc;
        }, {})
    });

    this.root.Employee = new GraphQLObjectType({
      name: "Employee",
      fields: () => ({
        id: globalIdField("Employee"),
        whenCreated: { type: new GraphQLNonNull(GraphQLDate) },
        whenUpdated: { type: new GraphQLNonNull(GraphQLDate) },
        uid: { type: new GraphQLNonNull(GraphQLID) },
        checked: { type: new GraphQLNonNull(GraphQLBoolean) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        dept: {
          type: new GraphQLNonNull(this.root.EmployeeDept),
          resolve: source => this.employeeModel.depts.indexOf(source.dept)
        },
        title: { type: new GraphQLNonNull(GraphQLString) },
        country: {
          type: new GraphQLNonNull(this.root.Country),
          resolve: (source, args, context) =>
            this.dashboardRepo.getCountry(
              context,
              Object.assign({}, args, {
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
      nodeType: this.root.Employee,
      connectionFields: () => ({
        totalCount: {
          type: GraphQLInt
        }
      })
    });
    this.root.EmployeeConnection = EmployeeConnection;
    this.root.EmployeeEdge = EmployeeEdge;

    this.root.EmployeeSortBy = new GraphQLEnumType({
      name: "EmployeeSortBy",
      values: this.employeeModel.sortBy
        .map((item, index) => ({ item, index }))
        .reduce((acc, cur) => {
          acc[cur.item] = { value: cur.index };
          return acc;
        }, {})
    });

    this.root.EmployeeSortDir = new GraphQLEnumType({
      name: "EmployeeSortDir",
      values: this.employeeModel.sortDir
        .map((item, index) => ({ item, index }))
        .reduce((acc, cur) => {
          acc[cur.item] = { value: cur.index };
          return acc;
        }, {})
    });

    this.query = {
      employee: {
        type: this.root.Employee,
        args: {
          id: { type: GraphQLID }
        },
        resolve: (source, args, context) =>
          this.employeesRepo.getEmployee(
            context,
            Object.assign({}, args, { id: args.id && fromGlobalId(args.id).id })
          )
      },
      employees: {
        type: this.root.EmployeeConnection,
        args: {
          dept: { type: this.root.EmployeeDept },
          sortBy: { type: this.root.EmployeeSortBy },
          sortDir: { type: this.root.EmployeeSortDir },
          ...connectionArgs
        },
        resolve: (source, args, context) =>
          this.employeesRepo.getEmployeeConnection(
            context,
            Object.assign({}, args, {
              dept:
                typeof args.dept === "number" &&
                this.employeeModel.depts[args.dept],
              sortBy:
                typeof args.sortBy === "number" &&
                this.employeeModel.sortBy[args.sortBy],
              sortDir:
                typeof args.sortDir === "number" &&
                this.employeeModel.sortDir[args.sortDir]
            })
          )
      }
    };

    this.root.CreateEmployeeMutation = mutationWithClientMutationId({
      name: "CreateEmployee",
      inputFields: {
        uid: { type: GraphQLID },
        checked: { type: GraphQLBoolean },
        name: { type: GraphQLString },
        dept: { type: this.root.EmployeeDept },
        title: { type: GraphQLString },
        country: { type: GraphQLID },
        salary: { type: GraphQLInt }
      },
      outputFields: {
        employee: { type: this.root.Employee }
      },
      mutateAndGetPayload: async (args, context) => {
        const employee = await this.employeesRepo.createEmployee(
          context,
          Object.assign({}, args, {
            dept:
              typeof args.dept === "number" &&
              this.employeeModel.depts[args.dept]
          })
        );
        return { employee };
      }
    });

    this.root.EditEmployeeMutation = mutationWithClientMutationId({
      name: "EditEmployee",
      inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        uid: { type: GraphQLID },
        checked: { type: GraphQLBoolean },
        name: { type: GraphQLString },
        dept: { type: this.root.EmployeeDept },
        title: { type: GraphQLString },
        country: { type: GraphQLID },
        salary: { type: GraphQLInt }
      },
      outputFields: {
        employee: { type: this.root.Employee }
      },
      mutateAndGetPayload: async (args, context) => {
        const employee = await this.employeesRepo.editEmployee(
          context,
          Object.assign({}, args, {
            id: args.id && fromGlobalId(args.id).id,
            dept:
              typeof args.dept === "number" &&
              this.employeeModel.depts[args.dept]
          })
        );
        return { employee };
      }
    });

    this.root.DeleteEmployeeMutation = mutationWithClientMutationId({
      name: "DeleteEmployee",
      inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      outputFields: {
        employee: { type: this.root.Employee }
      },
      mutateAndGetPayload: async (args, context) => {
        const employee = await this.employeesRepo.deleteEmployee(
          context,
          Object.assign({}, args, { id: args.id && fromGlobalId(args.id).id })
        );
        return { employee };
      }
    });

    this.mutation = {
      createEmployee: this.root.CreateEmployeeMutation,
      editEmployee: this.root.EditEmployeeMutation,
      deleteEmployee: this.root.DeleteEmployeeMutation
    };

    this.subscription = {
      employeeCreated: {
        type: this.root.Employee,
        args: {},
        subscribe: this.employeesRepo.subscribe("employeeCreated")
      },
      employeeUpdated: {
        type: this.root.Employee,
        args: {},
        subscribe: this.employeesRepo.subscribe("employeeUpdated")
      },
      employeeDeleted: {
        type: this.root.Employee,
        args: {},
        subscribe: this.employeesRepo.subscribe("employeeDeleted")
      },
      employeeEvent: {
        type: this.root.Employee,
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
