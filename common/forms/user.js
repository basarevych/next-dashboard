/**
 * {
 *    fieldName: {
 *      label: 'translation key',
 *      normalize: 'rule1:param1:param2|rule2:param1:param2|...', // happens on change, optional
 *      transform: 'rule1:param1:param2|rule2:param1:param2|...', // happens on blur, optional
 *      validate: 'rule1:param1:param2|rule2:param1:param2|...',  // happens on blur, optional
 *    }
 * }
 *
 * Normalize and transfrom rules:
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
 *
 * Validation rules:
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

module.exports = {
  name: {
    label: "EDIT_USER_NAME_LABEL"
  },
  email: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required|email",
    label: "EDIT_USER_EMAIL_LABEL"
  },
  password: {
    label: "EDIT_USER_PASSWORD_LABEL",
    validate: "password"
  },
  isAdmin: {
    label: "EDIT_USER_ADMIN_LABEL"
  }
};
