"use strict";

const material = require("./material");
const daemon = require("./daemon");

module.exports = {
  defaultTheme: "daemon",
  names: { daemon: "Daemon", material: "Material" },
  themes: { daemon, material }
};
