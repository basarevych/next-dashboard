module.exports = function(value) {
  return this.isType(value) && value !== null
    ? _.replace(value, /[^0-9]+/g, "")
    : value;
};
