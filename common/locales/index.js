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
  for (let key of Object.keys(source)) {
    messages[key] = Array.isArray(source[key])
      ? source[key].join("")
      : source[key];
  }
  return messages;
}

module.exports = {
  defaultLocale: "en",
  locales: ["en", "ru"],
  intl: { en: "en", ru: "ru" }, // official locale name in react-intl
  flags: { en: "US", ru: "RU" },
  names: { en: "English", ru: "Русский язык" },
  messages: {
    en: parse(require("./en")),
    ru: parse(require("./ru"))
  }
};
