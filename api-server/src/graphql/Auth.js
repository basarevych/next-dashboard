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
    this.root = null;
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

  async init({ root }) {
    this.root = root;

    this.root.ProviderStatus = new GraphQLObjectType({
      name: "ProviderStatus",
      fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
        isLinked: { type: new GraphQLNonNull(GraphQLBoolean) }
      })
    });

    this.root.Status = new GraphQLObjectType({
      name: "Status",
      fields: () => ({
        isAuthenticated: { type: new GraphQLNonNull(GraphQLBoolean) },
        userId: { type: GraphQLString },
        email: { type: GraphQLString },
        isEmailVerified: { type: new GraphQLNonNull(GraphQLBoolean) },
        name: { type: GraphQLString },
        roles: {
          type: new GraphQLNonNull(new GraphQLList(this.root.UserRole)),
          resolve: source =>
            source.roles.reduce((acc, cur) => {
              acc.push(this.userModel.roles.indexOf(cur));
              return acc;
            }, [])
        },
        providers: {
          type: new GraphQLNonNull(new GraphQLList(this.root.ProviderStatus))
        }
      })
    });

    this.query = {
      me: {
        type: this.root.Status,
        resolve: (source, args, context) => this.authRepo.getStatus(context)
      }
    };

    this.root.SignInMutation = mutationWithClientMutationId({
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

    this.root.SignUpMutation = mutationWithClientMutationId({
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

    this.root.SignOutMutation = mutationWithClientMutationId({
      name: "SignOut",
      inputFields: {},
      outputFields: {
        success: { type: GraphQLBoolean }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signOut(context, args)
    });

    this.root.GetTokenMutation = mutationWithClientMutationId({
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

    this.root.RequestEmailVerificationMutation = mutationWithClientMutationId({
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

    this.root.VerifyEmailMutation = mutationWithClientMutationId({
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

    this.root.UnlinkProviderMutation = mutationWithClientMutationId({
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

    this.root.UpdateProfileMutation = mutationWithClientMutationId({
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

    this.root.DeleteProfileMutation = mutationWithClientMutationId({
      name: "DeleteProfile",
      inputFields: {},
      outputFields: {
        success: { type: GraphQLBoolean }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.deleteProfile(context, args)
    });

    this.mutation = {
      signIn: this.root.SignInMutation,
      signUp: this.root.SignUpMutation,
      signOut: this.root.SignOutMutation,
      getToken: this.root.GetTokenMutation,
      requestEmailVerification: this.root.RequestEmailVerificationMutation,
      verifyEmail: this.root.VerifyEmailMutation,
      unlinkProvider: this.root.UnlinkProviderMutation,
      updateProfile: this.root.UpdateProfileMutation,
      deleteProfile: this.root.DeleteProfileMutation
    };

    this.subscription = {};
  }
}

module.exports = Auth;
