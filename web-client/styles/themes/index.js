"use strict";

const { createMuiTheme } = require("@material-ui/core/styles");
const dark = require("./dark");
const light = require("./light");

module.exports = {
  defaultTheme: "dark",
  names: ["dark", "light"],
  defs: { dark, light },
  themes: { dark: createMuiTheme(dark), light: createMuiTheme(light) }
};
