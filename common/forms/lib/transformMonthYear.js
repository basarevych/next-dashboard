module.exports = function(value) {
  if (!this.isType(value) || value === null) return value;
  const parts = _.split(value, "/");
  const month = _.replace(parts[0], /[^0-9]+/g, "");
  const year = _.replace(parts[1], /[^0-9]+/g, "");
  return month + " / " + year;
};
