"use strict";

const validator = require("validator");

/**
 * Normalizer function for Redux Form
 * takes input like "command1:param1:param2|command2:param1:param2"
 */
module.exports = function normalize(
  props,
  options,
  value,
  prevValue,
  allValues
  /* prevAllValues */
) {
  let rules = {};
  for (let rule of _.split(options, "|")) {
    let params = _.split(_.trim(rule), ":");
    let command = params.shift();
    rules[command] = params;
  }

  let result = _.isUndefined(value) ? "" : _.toString(value);

  for (let command of _.keys(rules)) {
    let i;
    let tmp;
    switch (command) {
      case "trim":
        // trims the input, no params
        tmp = [];
        for (let line of _.split(_.replace(_.trim(result), /\r+/g, ""), "\n"))
          tmp.push(_.trim(line));
        result = tmp.join("\r\n");
        break;
      case "compact":
        // with "spaces" param compacts spaces into single space preserving new lines
        if (_.includes(rules[command], "spaces")) {
          tmp = [];
          for (let line of _.split(_.replace(result, /\r+/g, ""), "\n"))
            tmp.push(_.replace(line, /\s+/g, " "));
          result = tmp.join("\r\n");
        }
        break;
      case "remove":
        // with "spaces" param removes spaces inside the line preveserving new lines
        if (_.includes(rules[command], "spaces")) {
          tmp = [];
          for (let line of _.split(_.replace(result, /\r+/g, ""), "\n"))
            tmp.push(_.replace(line, /\s+/g, ""));
          result = tmp.join("\r\n");
        }
        break;
      case "rows":
        // first param is the number of rows in the result (defaults to 1)
        tmp = _.split(_.replace(result, /\r+/g, ""), "\n");
        result = "";
        for (i = 0; i < tmp.length; i++) {
          if (
            i > 0 &&
            i < (rules[command].length ? parseInt(rules[command][0]) : 1)
          )
            result += "\r\n";
          result += tmp[i];
        }
        break;
      case "integer":
        result = _.replace(result, /[^0-9]+/g, "");
        break;
      case "phone":
        // converts input to internations phone number format
        // props of the form should have getCallingCodes() selector function
        tmp = _.replace(result, /[^0-9]+/g, "");
        result = "";
        i = 0;
        for (let code of props.getCallingCodes(allValues.get("country"))) {
          if (_.startsWith(tmp, code)) {
            result += code + (code.length < tmp.length ? " " : "");
            i = code.length;
            break;
          }
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
