const EventEmitter = require("events");

class Auth extends EventEmitter {
  constructor(authRepo) {
    super();

    this.authRepo = authRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.auth";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["repository.auth"];
  }

  async gql() {
    return {
      Query: {
        status: async (parent, args, context) =>
          this.authRepo.getStatus(context, args)
      },
      Mutation: {
        signIn: async (parent, args, context) =>
          this.authRepo.signIn(context, args),
        signUp: async (parent, args, context) =>
          this.authRepo.signUp(context, args),
        signOut: async (parent, args, context) =>
          this.authRepo.signOut(context, args),
        requestEmailVerification: async (parent, args, context) =>
          this.authRepo.requestEmailVerification(context, args),
        verifyEmail: async (parent, args, context) =>
          this.authRepo.verifyEmail(context, args),
        unlinkProvider: async (parent, args, context) =>
          this.authRepo.unlinkProvider(context, args),
        updateProfile: async (parent, args, context) =>
          this.authRepo.updateProfile(context, args),
        deleteProfile: async (parent, args, context) =>
          this.authRepo.deleteProfile(context, args)
      }
    };
  }
}

module.exports = Auth;
