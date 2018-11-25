"use strict";

const debug = require("debug")("app:dashboard");

module.exports = {
  query: {
    countries: async (parent, args, context) => {
      debug("countries");
      return context.di.get("repository.dashboard").getCountries(context, args);
    },

    country: async (parent, args, context) => {
      debug("country");
      return context.di.get("repository.dashboard").getCountry(context, args);
    },

    employees: async (parent, args, context) => {
      debug("employees");
      return context.di.get("repository.dashboard").getEmployees(context, args);
    },

    profit: async (parent, args, context) => {
      debug("profit");
      return context.di.get("repository.dashboard").getProfit(context, args);
    },

    sales: async (parent, args, context) => {
      debug("sales");
      return context.di.get("repository.dashboard").getSales(context, args);
    },

    clients: async (parent, args, context) => {
      debug("clients");
      return context.di.get("repository.dashboard").getClients(context, args);
    },

    avgTime: async (parent, args, context) => {
      debug("avgTime");
      return context.di.get("repository.dashboard").getAvgTime(context, args);
    }
  }
};
