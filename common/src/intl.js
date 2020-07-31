"use strict";

// Node's imeplementaion of Intl comes with en locale only
// the following will replace it with full implemention
// NOTE: Node v13+ does not need this

global.Intl = require("intl");

const { locales } = require("../locales");

require("@formatjs/intl-pluralrules/polyfill");
for (let locale of locales)
  require("@formatjs/intl-pluralrules/locale-data/" + locale.slice(0, 2));

require("@formatjs/intl-relativetimeformat/polyfill");
for (let locale of locales)
  require("@formatjs/intl-relativetimeformat/locale-data/" +
    locale.slice(0, 2));
