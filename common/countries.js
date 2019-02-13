"use strict";

const { allCountries, iso2Lookup } = require("country-telephone-data");

module.exports = {
  allCountries: _.map(allCountries, country => {
    country.name = /^(.*?)(\s*\([^)]+\)\s*)*$/.exec(country.name)[1];
    return country;
  }),
  iso2Lookup
};
