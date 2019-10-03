module.exports = function(value) {
  if (!_.isString(value)) return false;
  const parts = _.split(value, "/");
  if (parts.length !== 2) return false;
  const month = parseInt(_.trim(parts[0]));
  const year = parseInt(_.trim(parts[1]));
  const now = new Date();
  return (
    month >= 1 &&
    month <= 12 &&
    (year > now.getFullYear() - 2000 ||
      (year === now.getFullYear() - 2000 && month >= now.getMonth() + 1))
  );
};
