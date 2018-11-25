"use strict";

function parse(source) {
  const messages = {};
  for (let key of _.keys(source))
    messages[key] = _.isArray(source[key]) ? source[key].join("") : source[key];
  return messages;
}

module.exports = {
  defaultLocale: "en",
  locales: ["en"],
  flags: { en: "US" },
  names: { en: "English" },
  messages: {
    en: parse(require("./en"))
  },
  getLocaleData() {
    return [require("react-intl/locale-data/en.js")];
  }
};
