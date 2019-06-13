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
const GraphQLDate = require("./Date");

class Users {
  constructor(di, userModel, usersRepo) {
    this.di = di;
    this.userModel = userModel;
    this.usersRepo = usersRepo;
  }

  static get $provides() {
    return "graphql.users";
  }

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
        _.map(this.userModel.roles, (role, index) => ({ role, index })),
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
        name: { type: GraphQLString },
        roles: {
          type: new GraphQLNonNull(new GraphQLList(this.UserRole)),
          resolve: source =>
            _.reduce(
              source.roles,
              (acc, cur) => {
                acc.push(_.indexOf(this.userModel.roles, cur));
                return acc;
              },
              []
            )
        }
      }),
      interfaces: [nodeInterface]
    });

    const {
      connectionType: UserConnection,
      edgeType: UserEdge
    } = connectionDefinitions({
      name: "User",
      nodeType: this.User,
      connectionFields: () => ({
        totalCount: {
          type: GraphQLInt
        }
      })
    });
    this.UserConnection = UserConnection;
    this.UserEdge = UserEdge;

    this.UserSortBy = new GraphQLEnumType({
      name: "UserSortBy",
      values: _.reduce(
        _.map(this.userModel.sortBy, (item, index) => ({ item, index })),
        (acc, cur) => {
          acc[cur.item] = { value: cur.index };
          return acc;
        },
        {}
      )
    });

    this.UserSortDir = new GraphQLEnumType({
      name: "UserSortDir",
      values: _.reduce(
        _.map(this.userModel.sortDir, (item, index) => ({ item, index })),
        (acc, cur) => {
          acc[cur.item] = { value: cur.index };
          return acc;
        },
        {}
      )
    });

    this.query = {
      user: {
        type: this.User,
        args: {
          id: { type: GraphQLID }
        },
        resolve: (source, args, context) =>
          this.usersRepo.getUser(
            context,
            _.assign({}, args, { id: args.id && fromGlobalId(args.id).id })
          )
      },
      users: {
        type: this.UserConnection,
        args: {
          sortBy: { type: this.UserSortBy },
          sortDir: { type: this.UserSortDir },
          ...connectionArgs
        },
        resolve: (source, args, context) =>
          this.usersRepo.getUserConnection(
            context,
            _.assign({}, args, {
              sortBy: args.sortBy && this.userModel.sortBy[args.sortBy],
              sortDir: args.sortDir && this.userModel.sortDir[args.sortDir]
            })
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
        user: { type: this.User }
      },
      mutateAndGetPayload: async (args, context) => {
        const user = await this.usersRepo.createUser(
          context,
          _.assign({}, args, {
            roles:
              args.roles &&
              _.reduce(
                args.roles,
                (acc, cur) => {
                  acc.push(this.userModel.roles[cur]);
                  return acc;
                },
                []
              )
          })
        );
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
        user: { type: this.User }
      },
      mutateAndGetPayload: async (args, context) => {
        const user = await this.usersRepo.editUser(
          context,
          _.assign({}, args, {
            id: args.id && fromGlobalId(args.id).id,
            roles:
              args.roles &&
              _.reduce(
                args.roles,
                (acc, cur) => {
                  acc.push(this.userModel.roles[cur]);
                  return acc;
                },
                []
              )
          })
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
        user: { type: this.User }
      },
      mutateAndGetPayload: async (args, context) => {
        const user = await this.usersRepo.deleteUser(
          context,
          _.assign({}, args, { id: args.id && fromGlobalId(args.id).id })
        );
        return { user };
      }
    });

    this.mutation = {
      createUser: this.CreateUserMutation,
      editUser: this.EditUserMutation,
      deleteUser: this.DeleteUserMutation
    };

    this.subscription = {
      userCreated: {
        type: this.User,
        args: {},
        subscribe: this.usersRepo.subscribe("userCreated")
      },
      userUpdated: {
        type: this.User,
        args: {},
        subscribe: this.usersRepo.subscribe("userUpdated")
      },
      userDeleted: {
        type: this.User,
        args: {},
        subscribe: this.usersRepo.subscribe("userDeleted")
      },
      userEvent: {
        type: this.User,
        args: {},
        resolve: ({ userCreated, userUpdated, userDeleted }) =>
          userCreated || userUpdated || userDeleted,
        subscribe: this.usersRepo.subscribe([
          "userCreated",
          "userUpdated",
          "userDeleted"
        ])
      }
    };
  }
}

module.exports = Users;
