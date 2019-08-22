/**
 * Setup test environment
 */

"use strict";

if (!global._) global._ = require("lodash");

if (!require.ensure) {
  // fake webpack code splitting function
  require.ensure = (deps, cb) => cb(require);
}
