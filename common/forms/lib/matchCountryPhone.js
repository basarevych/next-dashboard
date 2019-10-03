const { allCountries, iso2Lookup } = require("../../src/countries");

module.exports = function(country, schema) {
  const info = allCountries[iso2Lookup[country]];
  const dialCode = info ? _.split(info.dialCode, "") : [];
  const format = info && info.format;
  const re =
    !!format &&
    "^" +
      _.map(format, char =>
        /[0-9]/.test(char)
          ? char
          : char === "."
          ? dialCode.length
            ? dialCode.shift()
            : "\\d"
          : "\\" + char
      ).join("") +
      "$";
  return schema.matches(
    new RegExp(re || `^\\+${dialCode.join("")}`),
    "ERROR_INVALID_PHONE"
  );
};
