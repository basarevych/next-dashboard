"use strict";

const appReducer = require("./reducers");

const appTypes = require("./types");
const appOperations = require("./operations");
const appSelectors = require("./selectors");

module.exports = {
  appReducer,
  appTypes,
  appOperations,
  appSelectors
};
