"use strict";

const usersReducer = require("./reducers");

const usersTypes = require("./types");
const usersOperations = require("./operations");
const usersSelectors = require("./selectors");

module.exports = {
  usersReducer,
  usersTypes,
  usersOperations,
  usersSelectors
};
