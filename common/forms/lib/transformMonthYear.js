module.exports = function(value) {
  if (!this.isType(value) || value === null) return value;
  const parts = value.split("/");
  const month = parts[0].replace(/[^0-9]+/g, "");
  const year = parts[1].replace(/[^0-9]+/g, "");
  return month + " / " + year;
};
