/**
 * Jest Configuration
 *
 * Do 'yarn test' to run Jest
 */

"use strict";

const _ = require("lodash");

module.exports = {
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  globals: {
    _
  }
};
