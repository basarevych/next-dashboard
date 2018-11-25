"use strict";

const debug = require("debug")("app:users");

module.exports = {
  query: {
    users: async (parent, args, context) => {
      debug("users");
      return context.di.get("repository.users").getUsers(context, args);
    }
  },
  mutation: {
    createUser: async (parent, args, context) => {
      debug("createUser");
      return context.di.get("repository.users").createUser(context, args);
    },

    editUser: async (parent, args, context) => {
      debug("editUser");
      return context.di.get("repository.users").editUser(context, args);
    },

    deleteUser: async (parent, args, context) => {
      debug("deleteUser");
      return context.di.get("repository.users").deleteUser(context, args);
    }
  }
};
