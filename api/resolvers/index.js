"use strict";

const date = require("./date");
const auth = require("./auth");
const users = require("./users");
const dashboard = require("./dashboard");

module.exports = {
  Date: date,
  Query: _.merge({}, auth.query, users.query, dashboard.query),
  Mutation: _.merge({}, auth.mutation, users.mutation)
};
