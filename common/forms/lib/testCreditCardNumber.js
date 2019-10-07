const validator = require("validator");

module.exports = function(value) {
  return typeof value === "string" ? validator.isCreditCard(value) : false;
};
