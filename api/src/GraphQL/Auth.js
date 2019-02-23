const EventEmitter = require("events");
const { GraphQLString, GraphQLBoolean } = require("graphql");
const { mutationWithClientMutationId } = require("graphql-relay");

class Auth extends EventEmitter {
  constructor(di, authRepo) {
    super();

    this.di = di;
    this.authRepo = authRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.auth";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "repository.auth"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  idFetcher() {
    return null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  typeResolver() {
    return null;
  }

  init() {
    this.query = {};

    this.SignInMutation = mutationWithClientMutationId({
      name: "SignIn",
      inputFields: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => success
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signIn(context, args)
    });

    this.SignUpMutation = mutationWithClientMutationId({
      name: "SignUp",
      inputFields: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => success
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signUp(context, args)
    });

    this.SignOutMutation = mutationWithClientMutationId({
      name: "SignOut",
      inputFields: {},
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => success
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signOut(context, args)
    });

    this.RequestEmailVerificationMutation = mutationWithClientMutationId({
      name: "RequestEmailVerification",
      inputFields: {},
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => success
        }
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
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => success
        }
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
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => success
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.unlinkProvider(context, args)
    });

    this.UpdateProfileMutation = mutationWithClientMutationId({
      name: "UpdateProfile",
      inputFields: {
        email: { type: GraphQLString },
        name: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => success
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.updateProfile(context, args)
    });

    this.DeleteProfileMutation = mutationWithClientMutationId({
      name: "DeleteProfile",
      inputFields: {},
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => success
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.deleteProfile(context, args)
    });

    this.mutation = {
      signIn: this.SignInMutation,
      signUp: this.SignUpMutation,
      signOut: this.SignOutMutation,
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
