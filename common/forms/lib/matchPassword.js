module.exports = function(otherPassword, schema) {
  return schema.test(
    "is-the-same",
    "ERROR_MISMATCHED_VALUES",
    value => value === otherPassword
  );
};
