/**
 * Jest Configuration
 *
 * Do 'yarn test' to run Jest
 */

"use strict";

module.exports = {
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"]
};
