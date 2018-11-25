"use strict";

const constants = require("./constants");

module.exports = function isRouteAllowed(path, userRoles = []) {
  const pageRoles = constants.pages[path] && constants.pages[path].roles;
  if (!pageRoles || pageRoles.length === 0) return true;

  for (let role of pageRoles) {
    if (!_.includes(userRoles, role)) return false;
  }

  return true;
};
