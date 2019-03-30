"use strict";

const constants = require("./constants");

module.exports = function isRouteAllowed(path, userRoles = []) {
  const isAllowed = !!constants.pages[path] && constants.pages[path].isAllowed;
  if (!isAllowed) return true;
  return isAllowed(userRoles);
};
