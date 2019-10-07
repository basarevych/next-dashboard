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
if (global.Intl) {
  if (!process.browser) {
    if (!require("intl-locales-supported")(locales)) {
      const IntlPolyfill = require("intl");
      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
  }

  if (!Intl.PluralRules) {
    promises.push(
      new Promise((resolve, reject) => {
        require.ensure(
          [],
          require => {
            require("intl-pluralrules");
            resolve();
          },
          error => reject(error),
          "polyfills"
        );
      })
    );
  }

  if (!Intl.RelativeTimeFormat) {
    promises.push(
      new Promise((resolve, reject) => {
        require.ensure(
          [],
          require => {
            require("@formatjs/intl-relativetimeformat/polyfill");
            for (let locale of locales) {
              require("@formatjs/intl-relativetimeformat/dist/locale-data/" +
                locale +
                ".js");
            }
            resolve();
          },
          error => reject(error),
          "polyfills"
        );
      })
    );
  }
} else {
  promises.push(
    new Promise((resolve, reject) => {
      require.ensure(
        [],
        require => {
          require("intl");
          for (let locale of locales)
            require("intl/locale-data/jsonp/" + locale + ".js");
          require("intl-pluralrules");
          require("@formatjs/intl-relativetimeformat/polyfill");
          for (let locale of locales) {
            require("@formatjs/intl-relativetimeformat/dist/locale-data/" +
              locale +
              ".js");
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
