"use strict";

const { allCountries, iso2Lookup } = require("country-telephone-data");

module.exports = {
  allCountries: allCountries.map(country => {
    country.name = /^(.*?)(\s*\([^)]+\)\s*)*$/.exec(country.name)[1];
    return country;
  }),
  iso2Lookup,
  countryOptions: [{ iso2: "", name: "" }].concat(allCountries).map(item => ({
    value: item.iso2,
    label: item.name
  }))
};
