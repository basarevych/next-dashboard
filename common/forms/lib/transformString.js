module.exports = function(value) {
  return this.isType(value) && value !== null
    ? _.trim(_.replace(value, /\s{2,}/g, " "))
    : value;
};
