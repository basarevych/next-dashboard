/**
 * Setup test environment
 */

"use strict";

if (!require.ensure) {
  // fake webpack code splitting function
  require.ensure = (deps, cb) => cb(require);
}

// JSDOM and Enzyme
global.initJsdomEnzyme = function() {
  const { configure } = require("enzyme");
  const Adapter = require("enzyme-adapter-react-16");
  configure({ adapter: new Adapter() });

  const { JSDOM } = require("jsdom");
  const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
  global.window = jsdom.window;
  global.document = jsdom.window.document;
  global.navigator = { userAgent: "node.js" };
};
