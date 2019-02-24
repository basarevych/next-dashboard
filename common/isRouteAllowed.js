"use strict";

const constants = require("./constants");

module.exports = function isRouteAllowed(path, userRoles = []) {
  const pageRoles = constants.pages[path] && constants.pages[path].roles;
  if (!pageRoles || pageRoles.length === 0) return true;

  for (let role of pageRoles) {
    if (role[0] === "!") {
      role = role.slice(1);
      if (_.includes(userRoles, role)) return false;
    } else {
      if (!_.includes(userRoles, role)) return false;
    }
  }

  return true;
};
