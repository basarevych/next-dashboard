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

    this.GraphQLSignInMutation = mutationWithClientMutationId({
      name: "SignIn",
      inputFields: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => ({ success })
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signIn(context, args)
    });

    this.GraphQLSignUpMutation = mutationWithClientMutationId({
      name: "SignUp",
      inputFields: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => ({ success })
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signUp(context, args)
    });

    this.GraphQLSignOutMutation = mutationWithClientMutationId({
      name: "SignOut",
      inputFields: {},
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => ({ success })
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.signOut(context, args)
    });

    this.GraphQLRequestEmailVerificationMutation = mutationWithClientMutationId(
      {
        name: "RequestEmailVerification",
        inputFields: {},
        outputFields: {
          success: {
            type: GraphQLBoolean,
            resolve: ({ success }) => ({ success })
          }
        },
        mutateAndGetPayload: async (args, context) =>
          await this.authRepo.requestEmailVerification(context, args)
      }
    );

    this.GraphQLVerifyEmailMutation = mutationWithClientMutationId({
      name: "VerifyEmail",
      inputFields: {
        emailToken: { type: GraphQLString }
      },
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => ({ success })
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.verifyEmail(context, args)
    });

    this.GraphQLUnlinkProviderMutation = mutationWithClientMutationId({
      name: "UnlinkProvider",
      inputFields: {
        provider: { type: GraphQLString }
      },
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => ({ success })
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.unlinkProvider(context, args)
    });

    this.GraphQLUpdateProfileMutation = mutationWithClientMutationId({
      name: "UpdateProfile",
      inputFields: {
        email: { type: GraphQLString },
        name: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => ({ success })
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.updateProfile(context, args)
    });

    this.GraphQLDeleteProfileMutation = mutationWithClientMutationId({
      name: "DeleteProfile",
      inputFields: {},
      outputFields: {
        success: {
          type: GraphQLBoolean,
          resolve: ({ success }) => ({ success })
        }
      },
      mutateAndGetPayload: async (args, context) =>
        await this.authRepo.deleteProfile(context, args)
    });

    this.mutation = {
      signIn: this.GraphQLSignInMutation,
      signUp: this.GraphQLSignUpMutation,
      signOut: this.GraphQLSignOutMutation,
      requestEmailVerification: this.GraphQLRequestEmailVerificationMutation,
      verifyEmail: this.GraphQLVerifyEmailMutation,
      unlinkProvider: this.GraphQLUnlinkProviderMutation,
      updateProfile: this.GraphQLUpdateProfileMutation,
      deleteProfile: this.GraphQLDeleteProfileMutation
    };
  }
}

module.exports = Auth;
