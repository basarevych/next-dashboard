/**
 * Jest Configuration
 *
 * Do 'yarn test' to run Jest
 */

"use strict";

if (!global._) global._ = require("lodash");

module.exports = {
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  globals: {
    _
  }
};
