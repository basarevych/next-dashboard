module.exports = function(value) {
  if (typeof value !== "string") return false;
  const parts = value.split("/");
  if (parts.length !== 2) return false;
  const month = parseInt(parts[0].trim());
  const year = parseInt(parts[1].trim());
  const now = new Date();
  return (
    month >= 1 &&
    month <= 12 &&
    (year > now.getFullYear() - 2000 ||
      (year === now.getFullYear() - 2000 && month >= now.getMonth() + 1))
  );
};
