/**
 * Setup test environment
 */

"use strict";

if (!require.ensure) {
  // fake webpack code splitting function
  require.ensure = (deps, cb) => cb(require);
}

// Polyfills
require("@babel/polyfill/noConflict");
require("isomorphic-unfetch");
