"use strict";

const validator = require("validator");

/**
 * Validation function for Redux Form
 * takes input like "command1:param1:param2|command2:param1:param2"
 */
module.exports = function validate(props, options, value, allValues) {
  let rules = {};
  for (let rule of _.split(options, "|")) {
    let params = _.split(_.trim(rule), ":");
    let command = params.shift();
    rules[command] = params;
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
      if (failed) errors.push({ id: "ERROR_FIELD_REQUIRED" });
    }
  } else {
    for (let command of commands) {
      let success;
      let tmp;
      let normalized;
      switch (command) {
        case "phone":
          // validate phone number in international format
          if (!validator.isEmpty(value)) {
            normalized = _.replace(value, /[^0-9]+/g, "");
            if (normalized.length !== 12) {
              errors.push({ id: "ERROR_INVALID_PHONE" });
            } else {
              tmp = props.getCallingCodes(allValues.get("country"));
              success = !tmp.size;
              for (let code of tmp) {
                if (_.startsWith(normalized, code)) {
                  success = true;
                  break;
                }
              }
              if (!success) errors.push({ id: "ERROR_INVALID_PHONE_COUNTRY" });
            }
          }
          break;
        case "email":
          // validate email
          if (!validator.isEmpty(value) && !validator.isEmail(value))
            errors.push({ id: "ERROR_INVALID_EMAIL" });
          break;
        case "password":
          // validate password, first param is password length (6 by default)
          if (value.length < (rules[command].length && rules[command][0]) || 6)
            errors.push({ id: "ERROR_INVALID_PASSWORD" });
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
                errors.push({ id: "ERROR_INVALID_CREDIT_CARD_NUMBER" });
              break;
            case "date":
              if (normalized.length !== 4) {
                errors.push({ id: "ERROR_INVALID_CREDIT_CARD_DATE" });
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
                  errors.push({ id: "ERROR_INVALID_CREDIT_CARD_DATE" });
              }
              break;
            case "secret":
              if (normalized.length !== 3)
                errors.push({ id: "ERROR_INVALID_CREDIT_CARD_SECRET" });
              break;
          }
          break;
        case "match":
          // this rule is triggered when field set by first param has other value than this one
          tmp = rules[command].length && rules[command][0];
          if (tmp && allValues && allValues.get(tmp) !== value)
            errors.push({ id: "ERROR_MISMATCHED_VALUES" });
          break;
      }
    }
  }

  return errors;
};
