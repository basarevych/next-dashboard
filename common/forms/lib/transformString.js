module.exports = function(value) {
  return this.isType(value) && value !== null
    ? value.replace(/\s{2,}/g, " ").trim()
    : value;
};
