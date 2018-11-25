"use strict";

const debug = require("debug")("app:auth");

module.exports = {
  query: {
    status: async (parent, args, context) => {
      debug("status");
      return context.di.get("repository.auth").getStatus(context, args);
    }
  },
  mutation: {
    signIn: async (parent, args, context) => {
      debug("signIn");
      return context.di.get("repository.auth").signIn(context, args);
    },

    signUp: async (parent, args, context) => {
      debug("signUp");
      return context.di.get("repository.auth").signUp(context, args);
    },

    signOut: async (parent, args, context) => {
      debug("signOut");
      return context.di.get("repository.auth").signOut(context, args);
    },

    requestEmailVerification: async (parent, args, context) => {
      debug("requestEmailVerification");
      return context.di
        .get("repository.auth")
        .requestEmailVerification(context, args);
    },

    verifyEmail: async (parent, args, context) => {
      debug("verifyEmail");
      return context.di.get("repository.auth").verifyEmail(context, args);
    },

    unlinkProvider: async (parent, args, context) => {
      debug("unlinkProvider");
      return context.di.get("repository.auth").unlinkProvider(context, args);
    },

    updateProfile: async (parent, args, context) => {
      debug("updateProfile");
      return context.di.get("repository.auth").updateProfile(context, args);
    },

    deleteProfile: async (parent, args, context) => {
      debug("deleteProfile");
      return context.di.get("repository.auth").deleteProfile(context, args);
    }
  }
};
