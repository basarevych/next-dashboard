"use strict";

require("core-js/es6");
require("isomorphic-unfetch");

const swRuntime = require("serviceworker-webpack-plugin/lib/runtime");
const swEvents = require("serviceworker-webpack-plugin/lib/browser/registerEvents");
const swApplyUpdate = require("serviceworker-webpack-plugin/lib/browser/applyUpdate");
const WebFont = require("webfontloader");
const locales = require("../../../common/locales").locales;
const constants = require("../../../common/constants");

const promises = [];

if (!global.requestAnimationFrame) {
  // requestAnimationFrame polyfill
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

if (global.Intl) {
  // Intl polyfill
  if (!process.browser) {
    if (!require("intl-locales-supported")(locales.locales)) {
      const IntlPolyfill = require("intl");
      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
  }
} else {
  if (!process.browser) {
    global.Intl = require("intl");
  } else {
    promises.push(
      new Promise((resolve, reject) => {
        require.ensure(
          [],
          require => {
            require("intl");
            for (let locale of locales)
              require("intl/locale-data/jsonp/" + locale + ".js");
            resolve();
          },
          error => reject(error),
          "polyfills"
        );
      })
    );
  }
}

if (process.browser) {
  window.onerror = function(msg, url, line, col, error) {
    var extra = !col ? "" : "\ncolumn: " + col;
    extra += !error ? "" : "\nerror: " + error;
    console.error(
      "Error: " + msg + "\nurl: " + url + "\nline: " + line + extra
    );
    if (process.env.NODE_ENV !== "development")
      setTimeout(() => window.location.reload(), 3000);
    return false;
  };

  // get rid of auto fill, not disabling auto complete
  window.addEventListener("load", () => {
    for (let el of document.querySelectorAll(
      ".field.empty .input input, .field.empty textarea"
    ))
      el.value = "";
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

  WebFont.load({
    // our fonts
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

  if (
    "serviceWorker" in navigator &&
    (window.location.protocol === "https:" ||
      window.location.hostname === "localhost")
  ) {
    const registration = swRuntime.register(); // install the service worker
    swEvents(registration, {
      onUpdateReady: () => {
        swApplyUpdate()
          .then(() => window.location.reload())
          .catch(error => console.error(error));
      }
    });
  } else {
    if (process.env.NODE_ENV === "development")
      console.log("[SW] Service Worker is not available");
  }
}

module.exports = Promise.all(promises)
  .then(() => {
    if (process.env.NODE_ENV === "development") console.log("Initialized");
  })
  .catch(error => console.error(error));
