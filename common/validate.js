"use strict";

const validator = require("validator");
const { allCountries, iso2Lookup } = require("country-telephone-data");

/**
 * Validation function for Redux Form
 * takes input like "rule1:param1:param2|rule2:param1:param2|..."
 *
 * re:regexp:flags            value should match the regular expression "regexp", second param is flags
 *                            when ":" is needed in the regexp it should be escaped like this "\\:"
 * required                   value is required
 * required:otherField        value is required if otherField is not empty
 * phone                      value is a phone number
 * email                      value is an email
 * password:length            value is a password of "length" characters (6 if omitted)
 * credit_card:number         value is credit card number
 * credit_card:date           value is credit card expiration date
 * credit_card:secret         value is credit card CVV2 code
 * match:otherField           value should be the same as the value of otherField
 */
module.exports = function validate(props, options, value, allValues) {
  let rules = {};
  for (let rule of _.split(options, "|")) {
    let params = _.split(_.trim(rule), ":");
    let command = params.shift();
    if (command !== "re") {
      rules[command] = params;
    } else {
      rules[command] = [];
      let line = params.join(":");
      let found = false;
      for (let i = 0; i < line.length; i++) {
        if (line[i] === ":" && (i > 0 || line[i - 1] !== "\\")) {
          rules[command].push(line.slice(0, i));
          rules[command] = rules[command].concat(
            _.split(line.slice(i + 1), ":")
          );
          found = true;
          break;
        }
      }
      if (!found) rules[command] = params;
    }
  }

  value = _.isUndefined(value) ? "" : _.toString(value);

  let commands = _.keys(rules);
  let errors = [];
  if (validator.isEmpty(value)) {
    // when string is empty only "required" command is triggered
    if (_.includes(commands, "required")) {
      // optional first param is the name of other field that should
      // be non-empty for this to be triggered, always triggered otherwise
      let failed = true;
      if (allValues && rules.required.length && rules.required[0]) {
        let other = allValues.get(rules.required[0]);
        if (!other || !other.length) failed = false;
      }
      if (failed) errors.push("ERROR_FIELD_REQUIRED");
    }
  } else {
    // all the other rules only apply to non-empty value
    for (let command of commands) {
      let success;
      let tmp;
      let search;
      let normalized;
      switch (command) {
        case "re":
          tmp = new RegExp(rules[command][0], rules[command][1]);
          success = value.match(tmp);
          if (!success) errors.push("ERROR_INVALID_PATTERN");
          break;
        case "phone":
          // validate phone number in international format
          if (!validator.isEmpty(value)) {
            normalized = _.replace(value, /[^0-9]+/g, "");
            if (normalized.length !== 12) {
              errors.push("ERROR_INVALID_PHONE");
            } else {
              search =
                allCountries &&
                iso2Lookup &&
                allCountries[iso2Lookup[allValues.get("country")]];
              if (search && search.dialCode)
                success = _.startsWith(normalized, search.dialCode);
              else success = true;
              if (!success) errors.push("ERROR_INVALID_PHONE_COUNTRY");
            }
          }
          break;
        case "email":
          // validate email
          if (!validator.isEmpty(value) && !validator.isEmail(value))
            errors.push("ERROR_INVALID_EMAIL");
          break;
        case "password":
          // validate password, first param is password length (6 by default)
          if (
            value.length < ((rules[command].length && rules[command][0]) || 6)
          ) {
            errors.push("ERROR_INVALID_PASSWORD");
          }
          break;
        case "credit_card":
          // validate credit card attribute set by first param ("number", "date" or "secret")
          normalized = _.replace(value, /[^0-9]+/g, "");
          switch (rules[command].length && rules[command][0]) {
            case "number":
              if (
                normalized.length !== 16 ||
                !validator.isCreditCard(normalized)
              )
                errors.push("ERROR_INVALID_CREDIT_CARD_NUMBER");
              break;
            case "date":
              if (normalized.length !== 4) {
                errors.push("ERROR_INVALID_CREDIT_CARD_DATE");
              } else {
                tmp = [
                  parseInt(normalized.slice(0, 2)),
                  parseInt(normalized.slice(2))
                ];
                if (
                  tmp[0] < 1 ||
                  tmp[0] > 12 ||
                  tmp[1] < new Date().getFullYear() - 2000
                )
                  errors.push("ERROR_INVALID_CREDIT_CARD_DATE");
              }
              break;
            case "secret":
              if (normalized.length !== 3)
                errors.push("ERROR_INVALID_CREDIT_CARD_SECRET");
              break;
          }
          break;
        case "match":
          // this rule is triggered when field set by first param has other value than this one
          tmp = rules[command].length && rules[command][0];
          if (tmp && allValues && allValues.get(tmp) !== value)
            errors.push("ERROR_MISMATCHED_VALUES");
          break;
      }
    }
  }

  return errors;
};
