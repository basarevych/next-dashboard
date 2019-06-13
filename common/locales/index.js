"use strict";

/**
 * Convert this:
 * {
 *    "KEY": [
 *      "string",
 *      "another",
 *      "..."
 *    ]
 * }
 *
 * Into this:
 * {
 *    "KEY": "stringanother..."
 * }
 */
function parse(source) {
  const messages = {};
  for (let key of _.keys(source))
    messages[key] = _.isArray(source[key]) ? source[key].join("") : source[key];
  return messages;
}

module.exports = {
  defaultLocale: "en",
  locales: ["en", "ru"],
  flags: { en: "US", ru: "RU" },
  names: { en: "English", ru: "Русский язык" },
  messages: {
    en: parse(require("./en")),
    ru: parse(require("./ru"))
  },
  getLocaleData() {
    return [
      require("react-intl/locale-data/en.js"),
      require("react-intl/locale-data/ru.js")
    ];
  }
};
