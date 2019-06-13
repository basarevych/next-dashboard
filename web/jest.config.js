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
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/.tmp/",
    "<rootDir>/static/",
    "<rootDir>/out/"
  ],
  moduleNameMapper: {
    ".*\\.less$": "<rootDir>/package.json",
    ".*\\.scss$": "<rootDir>/package.json",
    ".*\\.css$": "<rootDir>/package.json"
  },
  globals: {
    _
  }
};
