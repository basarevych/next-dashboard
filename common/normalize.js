"use strict";

const tokenize = require("./tokenize");
const validator = require("validator");
//let allCountries, iso2Lookup;
const { allCountries, iso2Lookup } = require("country-telephone-data");

/**
 * Normalizer function for Redux Form
 * takes input like "rule1:param1:param2|rule2:param1:param2|..."
 *
 * trim                       remove white space from the beginning and the end of value
 * compact:spaces             replace multiple occurences of space in a row with a single space
 * remove:spaces              remove spaces
 * rows:size                  forces "size" number of rows (1 if size is omitted)
 * integer                    removes everything except digits
 * phone                      forces international phone phormat
 * email                      normalizes email
 * credit_card:number         normalizes credit card number
 * credit_card:date           normalizes credit card expiration date
 * credit_card:secret         normalizes credit card CVV2 code
 */
module.exports = function normalize(options, value, allValues) {
  let rules = {};
  for (let rule of tokenize(options, "\\", "|")) {
    let params = tokenize(rule, "\\", ":");
    if (!params.length) continue;
    let command = params.shift();
    rules[command] = params;
  }

  let result = _.isUndefined(value) ? "" : _.toString(value);

  for (let command of _.keys(rules)) {
    let i;
    let tmp;
    let search;
    let isLongBreak = !!result.match(/\r\n/);
    switch (command) {
      case "trim":
        // trims the input, no params
        tmp = [];
        for (let line of _.split(_.trim(result), /\r\n?|\n/g))
          tmp.push(_.trim(line));
        result = tmp.join(isLongBreak ? "\r\n" : "\n");
        break;
      case "compact":
        // with "spaces" param compacts spaces into single space preserving new lines
        if (_.includes(rules[command], "spaces")) {
          tmp = [];
          for (let line of _.split(result, /\r\n?|\n/g))
            tmp.push(_.replace(line, /\s+/g, " "));
          result = tmp.join(isLongBreak ? "\r\n" : "\n");
        }
        break;
      case "remove":
        // with "spaces" param removes spaces inside the line preveserving new lines
        if (_.includes(rules[command], "spaces")) {
          tmp = [];
          for (let line of _.split(result, /\r\n?|\n/g))
            tmp.push(_.replace(line, /\s+/g, ""));
          result = tmp.join(isLongBreak ? "\r\n" : "\n");
        }
        break;
      case "rows":
        // first param is the number of rows in the result (defaults to 1)
        tmp = _.split(result, /\r\n?|\n/g);
        result = "";
        for (i = 0; i < tmp.length; i++) {
          if (
            i > 0 &&
            i < (rules[command].length ? parseInt(rules[command][0]) : 1)
          )
            result += isLongBreak ? "\r\n" : "\n";
          result += tmp[i];
        }
        break;
      case "integer":
        result = _.replace(result, /[^0-9]+/g, "");
        break;
      case "phone":
        // converts input to internations phone number format
        // expect package 'country-telephone-data' and form field "country" to exist
        tmp = _.replace(result, /[^0-9]+/g, "");
        result = "";
        i = 0;
        search =
          allCountries &&
          iso2Lookup &&
          allCountries[iso2Lookup[allValues.country]];
        if (search && search.dialCode && _.startsWith(tmp, search.dialCode)) {
          result +=
            search.dialCode + (search.dialCode.length < tmp.length ? " " : "");
          i = search.dialCode.length;
        }
        for (; i < tmp.length; i++) {
          if (i === 5 || i === 8 || i === 10) result += " ";
          result += tmp[i];
        }
        if (result.length) result = "+" + result;
        break;
      case "email":
        // normalizes email
        result = validator.normalizeEmail(result);
        if (result === "@") result = "";
        break;
      case "credit_card":
        // normalizes credit card attribute set by first param ("number", "date" or "secret")
        switch (rules[command].length && rules[command][0]) {
          case "number":
            tmp = _.replace(result, /[^0-9]+/g, "");
            result = "";
            for (i = 0; i < tmp.length; i++) {
              if (i > 0 && !(i % 4)) result += " ";
              result += tmp[i];
            }
            break;
          case "date":
            tmp = _.replace(result, /[^0-9]+/g, "");
            result = tmp.slice(0, 2);
            if (tmp.length > 2) {
              result += " / ";
              result += tmp.slice(2);
            }
            break;
          case "secret":
            result = _.replace(result, /[^0-9]+/g, "");
            break;
        }
        break;
    }
  }

  return result;
};
