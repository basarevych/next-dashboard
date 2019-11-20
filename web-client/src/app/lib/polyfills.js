"use strict";

require("core-js/stable");
require("regenerator-runtime/runtime");

const { locales } = require("../../../common/locales");

const promises = [];

// requestAnimationFrame polyfill
if (!global.requestAnimationFrame) {
  promises.push(
    new Promise((resolve, reject) => {
      require.ensure(
        [],
        require => {
          require("raf/polyfill");
          resolve();
        },
        error => reject(error),
        "polyfills"
      );
    })
  );
}

// requestIdleCallback polyfill
if (!global.requestIdleCallback) {
  promises.push(
    new Promise((resolve, reject) => {
      require.ensure(
        [],
        require => {
          require("requestidlecallback");
          resolve();
        },
        error => reject(error),
        "polyfills"
      );
    })
  );
}

// Intl polyfill
if (!Intl.PluralRules) {
  promises.push(
    new Promise((resolve, reject) => {
      require.ensure(
        [],
        require => {
          require("@formatjs/intl-pluralrules/polyfill");
          for (let locale of locales) {
            require("@formatjs/intl-pluralrules/dist/locale-data/" +
              locale.slice(0, 2));
          }
          resolve();
        },
        error => reject(error),
        "polyfills"
      );
    })
  );
}

// Intl polyfill
if (!Intl.RelativeTimeFormat) {
  promises.push(
    new Promise((resolve, reject) => {
      require.ensure(
        [],
        require => {
          require("@formatjs/intl-relativetimeformat/polyfill");
          for (let locale of locales) {
            require("@formatjs/intl-relativetimeformat/dist/locale-data/" +
              locale.slice(0, 2));
          }
          resolve();
        },
        error => reject(error),
        "polyfills"
      );
    })
  );
}

module.exports = Promise.all(promises)
  .then(() => {
    if (process.env.NODE_ENV === "development") console.log("Polyfills");
  })
  .catch(error => console.error(error));
