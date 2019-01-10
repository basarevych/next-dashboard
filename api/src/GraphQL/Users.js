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
  mongooseConnection: { connectionFromPromisedArray, documentToCursor }
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
    if (type === "User") return this.usersRepo.getUser(context, { id });
    return null;
  }

  typeResolver(obj) {
    if (obj instanceof this.userModel.model) return this.User;
    return null;
  }

  init() {
    const root = this.di.get("graphql");
    const { nodeInterface } = root.nodeDefinitions;

    this.UserRole = new GraphQLEnumType({
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

    this.User = new GraphQLObjectType({
      name: "User",
      fields: () => ({
        id: globalIdField("User"),
        whenCreated: { type: new GraphQLNonNull(GraphQLDate) },
        whenUpdated: { type: new GraphQLNonNull(GraphQLDate) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        isEmailVerified: { type: new GraphQLNonNull(GraphQLBoolean) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        roles: {
          type: new GraphQLNonNull(new GraphQLList(this.UserRole))
        }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: UsersConnection,
      edgeType: UserEdge
    } = connectionDefinitions({
      name: "User",
      nodeType: this.User
    });
    this.UsersConnection = UsersConnection;
    this.UserEdge = UserEdge;

    this.query = {
      user: {
        type: this.User,
        args: {
          id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, args, context) =>
          this.usersRepo.getUser(
            context,
            _.assign(
              {},
              args,
              _.assign({}, args, { id: fromGlobalId(args.id).id })
            )
          )
      },
      users: {
        type: this.UsersConnection,
        args: connectionArgs,
        resolve: (source, args, context) =>
          connectionFromPromisedArray(
            this.usersRepo.getUsers(context, args),
            args
          )
      }
    };

    this.CreateUserMutation = mutationWithClientMutationId({
      name: "CreateUser",
      inputFields: {
        email: { type: GraphQLString },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        roles: { type: new GraphQLList(this.UserRole) }
      },
      outputFields: {
        userEdge: {
          type: this.UserEdge,
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

    this.EditUserMutation = mutationWithClientMutationId({
      name: "EditUser",
      inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        email: { type: GraphQLString },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        roles: { type: new GraphQLList(this.UserRole) }
      },
      outputFields: {
        userEdge: {
          type: this.UserEdge,
          resolve: async ({ user }) => ({
            cursor: documentToCursor(user),
            node: user
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const user = await this.usersRepo.editUser(
          context,
          _.assign({}, args, { id: fromGlobalId(args.id).id })
        );
        return { user };
      }
    });

    this.DeleteUserMutation = mutationWithClientMutationId({
      name: "DeleteUser",
      inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      outputFields: {
        userEdge: {
          type: this.UserEdge,
          resolve: async ({ user }) => ({
            cursor: documentToCursor(user),
            node: user
          })
        }
      },
      mutateAndGetPayload: async (args, context) => {
        const user = await this.usersRepo.deleteUser(
          context,
          _.assign({}, args, { id: fromGlobalId(args.id).id })
        );
        return { user };
      }
    });

    this.mutation = {
      createUser: this.CreateUserMutation,
      editUser: this.EditUserMutation,
      deleteUser: this.DeleteUserMutation
    };
  }
}

module.exports = Users;
