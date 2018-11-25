/**
 * Jest Configuration
 *
 * Do 'yarn jest' to run Jest
 */

"use strict";

const _ = require("lodash");

module.exports = {
  testEnvironment: "node",
  setupTestFrameworkScriptFile: "<rootDir>/jest.setup.js",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  moduleNameMapper: {
    ".*\\.less$": "<rootDir>/package.json",
    ".*\\.scss$": "<rootDir>/package.json",
    ".*\\.css$": "<rootDir>/package.json"
  },
  globals: {
    _
  }
};
