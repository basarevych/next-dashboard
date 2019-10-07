module.exports = function(value) {
  return this.isType(value) && value !== null
    ? value.replace(/[^0-9]+/g, "")
    : value;
};
