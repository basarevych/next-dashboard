"use strict";

const dark = require("./dark");
const light = require("./light");

module.exports = {
  defaultTheme: "dark",
  names: ["dark", "light"],
  themes: { dark, light }
};
