const validator = require("validator");

module.exports = function(value) {
  return _.isString(value) ? validator.isCreditCard(value) : false;
};
