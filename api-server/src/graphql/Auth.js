const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLObjectType
} = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");

class Auth {
  constructor(di, userModel, authRepo) {
    this.di = di;
    this.userModel = userModel;
    this.authRepo = authRepo;
  }

  static get $provides() {
    return "graphql.auth";
  }

  static get $requires() {
    return ["di", "model.user", "repository.auth"];
  }

  idFetcher() {
    return null;
  }

  typeResolver() {
    return null;
  }

  init() {
    const root = this.di.get("graphql");

    this.ProviderStatus = new GraphQLObjectType({
      name: "ProviderStatus",
      fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
        isLinked: { type: new GraphQLNonNull(GraphQLBoolean) }
      })
    });

    this.Status = new GraphQLObjectType({
      name: "Status",
      fields: () => ({
        isAuthenticated: { type: new GraphQLNonNull(GraphQLBoolean) },
        userId: { type: GraphQLString },
        email: { type: GraphQLString },
        isEmailVerified: { type: new GraphQLNonNull(GraphQLBoolean) },
        name: { type: GraphQLString },
        roles: {
          type: new GraphQLNonNull(new GraphQLList(root.users.UserRole)),
          resolve: source =>
            _.reduce(
              source.roles,
              (acc, cur) => {
                acc.push(_.indexOf(this.userModel.roles, cur));
                return acc;
              },
              []
            )
        },
        providers: {
          type: new GraphQLNonNull(new GraphQLList(this.ProviderStatus))
        }
      })
    });

    this.query = {
      me: {
        type: this.Status,
        resolve: (source, args, context) => this.authRepo.getStatus(context)
      }
    };

    this.SignInMutation = mutationWithClientMutationId({
      name: "SignIn",
      inputFields: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      outputFields: {
        success: { type: GraphQLBoolean },
        accessToken: { type: GraphQLString },
        refreshToken: { type: GraphQLString }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signIn(context, args)
    });

    this.SignUpMutation = mutationWithClientMutationId({
      name: "SignUp",
      inputFields: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        locale: { type: GraphQLString }
      },
      outputFields: {
        success: { type: GraphQLBoolean },
        accessToken: { type: GraphQLString },
        refreshToken: { type: GraphQLString }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signUp(context, args)
    });

    this.SignOutMutation = mutationWithClientMutationId({
      name: "SignOut",
      inputFields: {},
      outputFields: {
        success: { type: GraphQLBoolean }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signOut(context, args)
    });

    this.GetTokenMutation = mutationWithClientMutationId({
      name: "GetToken",
      inputFields: {
        type: { type: GraphQLString },
        token: { type: GraphQLString }
      },
      outputFields: {
        success: { type: GraphQLBoolean },
        token: { type: GraphQLString },
        refreshToken: { type: GraphQLString }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.getToken(context, args)
    });

    this.RequestEmailVerificationMutation = mutationWithClientMutationId({
      name: "RequestEmailVerification",
      inputFields: {
        locale: { type: GraphQLString }
      },
      outputFields: {
        success: { type: GraphQLBoolean }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.requestEmailVerification(context, args)
    });

    this.VerifyEmailMutation = mutationWithClientMutationId({
      name: "VerifyEmail",
      inputFields: {
        token: { type: GraphQLString }
      },
      outputFields: {
        success: { type: GraphQLBoolean },
        accessToken: { type: GraphQLString },
        refreshToken: { type: GraphQLString }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.verifyEmail(context, args)
    });

    this.UnlinkProviderMutation = mutationWithClientMutationId({
      name: "UnlinkProvider",
      inputFields: {
        provider: { type: GraphQLString }
      },
      outputFields: {
        success: { type: GraphQLBoolean }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.unlinkProvider(context, args)
    });

    this.UpdateProfileMutation = mutationWithClientMutationId({
      name: "UpdateProfile",
      inputFields: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      outputFields: {
        success: { type: GraphQLBoolean }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.updateProfile(context, args)
    });

    this.DeleteProfileMutation = mutationWithClientMutationId({
      name: "DeleteProfile",
      inputFields: {},
      outputFields: {
        success: { type: GraphQLBoolean }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.deleteProfile(context, args)
    });

    this.mutation = {
      signIn: this.SignInMutation,
      signUp: this.SignUpMutation,
      signOut: this.SignOutMutation,
      getToken: this.GetTokenMutation,
      requestEmailVerification: this.RequestEmailVerificationMutation,
      verifyEmail: this.VerifyEmailMutation,
      unlinkProvider: this.UnlinkProviderMutation,
      updateProfile: this.UpdateProfileMutation,
      deleteProfile: this.DeleteProfileMutation
    };

    this.subscription = {};
  }
}

module.exports = Auth;
