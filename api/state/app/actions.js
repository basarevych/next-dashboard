"use strict";

const types = require("./types");

const init = data => _.assign({ type: types.INIT }, data);

module.exports = {
  init
};
