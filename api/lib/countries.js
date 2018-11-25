"use strict";

const countryjs = require("countryjs");

const countries = {};
_.forEach(countryjs.all(), country => {
  let code = country.ISO.alpha2 || country.ISO.alpha3;
  if (!code || !country.name || _.has(countries, code)) return;

  let callingCodes = _.filter(
    _.map(country.callingCodes || [], item => _.toString(item)),
    item => !!item.length
  );
  countries[code] = {
    code,
    name: country.name,
    callingCodes
  };
});

module.exports = countries;
