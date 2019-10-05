"use strict";

require("core-js/stable");
require("regenerator-runtime/runtime");

const WebFont = require("webfontloader");
const { locales } = require("../../../common/locales");
const constants = require("../../../common/constants");

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

if (process.browser) {
  // get rid of auto fill, not disabling auto complete
  window.addEventListener("load", () => {
    for (let el of document.querySelectorAll(
      ".field.empty .input input, .field.empty textarea"
    )) {
      el.value = "";
    }
    for (let el of document.querySelectorAll(".checkbox:not(.checked) input"))
      el.checked = false;
    for (let el of document.querySelectorAll(".checkbox.checked input"))
      el.checked = true;
  });

  // Remove the ugly Facebook appended hash
  // <https://github.com/jaredhanson/passport-facebook/issues/12>
  if (window.location.hash && window.location.hash === "#_=_") {
    if (window.history && history.replaceState) {
      window.history.replaceState("", document.title, window.location.pathname);
    } else {
      // Prevent scrolling by storing the page's current scroll offset
      var scroll = {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
      };
      window.location.hash = "";
      // Restore the scroll offset, should be flicker free
      document.body.scrollTop = scroll.top;
      document.body.scrollLeft = scroll.left;
    }
  }

  // our fonts
  WebFont.load({
    active: () => {
      window.__fontsLoaded = true;
      window.dispatchEvent(new CustomEvent(constants.events.FONTS_LOADED));
    },
    google: {
      families: [
        "Roboto:400,400i,700,700i:latin-ext,cyrillic",
        "Roboto Mono:400,700:latin-ext,cyrillic"
      ]
    }
  });

  // function to show a popup
  window.__popup = function(title, content, options = {}) {
    window.dispatchEvent(
      new CustomEvent(constants.events.TOAST, {
        detail: {
          title,
          content,
          ...options
        }
      })
    );
  };

  // error handlers
  if (process.env.NODE_ENV === "production") {
    window.onerror = function(msg, url, line, col, error) {
      let extra = !col ? "" : "\ncolumn: " + col;
      extra += !error ? "" : "\nerror: " + error;
      console.error(
        "Error: " + msg + "\nurl: " + url + "\nline: " + line + extra
      );
      window.__popup("An Error Occurred", msg, { autoClose: false });
      return false;
    };
    window.onunhandledrejection = function(evt) {
      console.error(evt.reason);
      window.__popup("An Error Occurred", evt.reason.message, {
        autoClose: false
      });
      return false;
    };
  }
}

module.exports = Promise.all(promises)
  .then(() => {
    if (process.env.NODE_ENV === "development") console.log("Initialized");
  })
  .catch(error => console.error(error));
