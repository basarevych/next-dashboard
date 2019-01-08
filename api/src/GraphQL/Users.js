const EventEmitter = require("events");
const {
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLID,
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
  connectionFromPromisedArray,
  documentToCursor
} = require("graphql-relay-connection");
const constants = require("../../../common/constants");
const GraphQLDate = require("./Date");

class Users extends EventEmitter {
  constructor(di, userModel, usersRepo) {
    super();

    this.di = di;
    this.userModel = userModel;
    this.usersRepo = usersRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.users";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "model.user", "repository.users"];
  }

  idFetcher(globalId, context) {
    const { type, id } = fromGlobalId(globalId);
    console.log(id);
    if (type === "User") return this.usersRepo.getUser(context, { id });
    if (type === "UserList") return this.usersRepo.getUsers(context);
    return null;
  }

  typeResolver(obj) {
    if (obj instanceof this.userModel.model) return this.GraphQLUser;
    return null;
  }

  init() {
    const root = this.di.get("graphql");
    const { nodeInterface } = root.nodeDefinitions;

    this.GraphQLUserRole = new GraphQLEnumType({
      name: "UserRole",
      values: _.reduce(
        _.map(constants.roles, (role, index) => ({ role, index })),
        (acc, cur) => {
          acc[cur.role] = { value: cur.index };
          return acc;
        },
        {}
      )
    });

    this.GraphQLUser = new GraphQLObjectType({
      name: "User",
      fields: () => ({
        id: globalIdField("User"),
        whenCreated: { type: new GraphQLNonNull(GraphQLDate) },
        whenUpdated: { type: new GraphQLNonNull(GraphQLDate) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        isEmailVerified: { type: new GraphQLNonNull(GraphQLBoolean) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        roles: {
          type: new GraphQLNonNull(new GraphQLList(this.GraphQLUserRole))
        }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: UsersConnection,
      edgeType: GraphQLUserEdge
    } = connectionDefinitions({
      name: "User",
      nodeType: this.GraphQLUser
    });
    this.UsersConnection = UsersConnection;
    this.GraphQLUserEdge = GraphQLUserEdge;

    this.GraphQLUserList = new GraphQLObjectType({
      name: "UserList",
      fields: {
        id: globalIdField("UserList"),
        users: {
          type: this.UsersConnection,
          args: connectionArgs,
          resolve: (source, args, context) =>
            connectionFromPromisedArray(
              this.usersRepo.getUsers(context, args),
              args
            )
        }
      },
      interfaces: [nodeInterface]
    });

    this.query = {
      user: {
        type: this.GraphQLUser,
        args: {
          id: globalIdField("User")
        },
        resolve: (source, args, context) =>
          this.usersRepo.getUser(context, { id: fromGlobalId(args.id).id })
      },
      users: {
        type: this.GraphQLUserList
      }
    };

    this.GraphQLCreateUserMutation = mutationWithClientMutationId({
      name: "CreateUser",
      inputFields: {
        email: { type: GraphQLString },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        roles: { type: new GraphQLList(this.GraphQLUserRole) }
      },
      outputFields: {
        userEdge: {
          type: this.GraphQLUserEdge,
          resolve: async ({ user }) => ({
            cursor: documentToCursor(user),
            node: user
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const user = await this.usersRepo.createUser(context, args);
        return { user };
      }
    });

    this.GraphQLEditUserMutation = mutationWithClientMutationId({
      name: "EditUser",
      inputFields: {
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        roles: { type: new GraphQLList(this.GraphQLUserRole) }
      },
      outputFields: {
        userEdge: {
          type: this.GraphQLUserEdge,
          resolve: async ({ user }) => ({
            cursor: documentToCursor(user),
            node: user
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const user = await this.usersRepo.editUser(context, args);
        return { user };
      }
    });

    this.GraphQLDeleteUserMutation = mutationWithClientMutationId({
      name: "DeleteUser",
      inputFields: {
        id: { type: GraphQLID }
      },
      outputFields: {
        userEdge: {
          type: this.GraphQLUserEdge,
          resolve: async ({ user }) => ({
            cursor: documentToCursor(user),
            node: user
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const user = await this.usersRepo.deleteUser(context, args);
        return { user };
      }
    });

    this.mutation = {
      createUser: this.GraphQLCreateUserMutation,
      editUser: this.GraphQLEditUserMutation,
      deleteUser: this.GraphQLDeleteUserMutation
    };
  }
}

module.exports = Users;
