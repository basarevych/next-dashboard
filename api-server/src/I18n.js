const IntlMessageFormat = require("intl-messageformat");
const l10n = require("../common/locales");

class I18n {
  constructor() {
    this.defaultLocale = l10n.defaultLocale;
    this.locales = l10n.locales;
    this.messages = l10n.messages;
    this.formatters = new Map();
  }

  static get $provides() {
    return "i18n";
  }

  static get $requires() {
    return [];
  }

  static get $lifecycle() {
    return "singleton";
  }

  static formatterKey(locale, key) {
    return `${locale}.${key}`;
  }

  async init() {}

  translate(key, values, locale) {
    if (!locale) locale = this.defaultLocale;

    let formatterKey = this.constructor.formatterKey(locale, key);
    let formatter = this.formatters.get(formatterKey);
    if (!formatter) {
      formatter = new IntlMessageFormat(this.messages[locale][key], locale);
      this.formatters.set(formatterKey, formatter);
    }

    return formatter.format(values);
  }
}

module.exports = I18n;
