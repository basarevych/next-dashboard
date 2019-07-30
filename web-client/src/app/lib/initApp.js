"use strict";

require("core-js/stable");
require("regenerator-runtime/runtime");

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

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      let promise;

      if (process.env.NODE_ENV !== "production") {
        promise = navigator.serviceWorker.getRegistrations().then(regs => {
          if (!regs.length) return;

          return Promise.all(_.invokeMap(regs, "unregister")).then(() => {
            console.log("[SW]", "Unregistered");
            window.location.reload(true);
          });
        });
      } else {
        promise = navigator.serviceWorker.register("sw.js").then(reg => {
          reg.onupdatefound = () => {
            let installingWorker = reg.installing;

            installingWorker.onstatechange = () => {
              switch (installingWorker.state) {
                case "installed":
                  if (navigator.serviceWorker.controller) {
                    if (process.env.NODE_ENV === "development") {
                      console.log(
                        "[SW]",
                        "New or updated content is available"
                      );
                    }
                    window.__updateReady = true;
                    window.dispatchEvent(
                      new CustomEvent(constants.events.UPDATE_READY)
                    );
                  } else {
                    if (process.env.NODE_ENV === "development")
                      console.log("[SW]", "Content is now available offline");
                  }
                  break;

                case "redundant":
                  if (process.env.NODE_ENV === "development") {
                    console.log(
                      "[SW]",
                      "The installing service worker became redundant."
                    );
                  }
                  break;
              }
            };
          };
        });
      }

      promise.catch(error => {
        if (process.env.NODE_ENV === "development")
          console.error("[SW]", error);
      });
    });
  }
}

module.exports = Promise.all(promises)
  .then(() => {
    if (process.env.NODE_ENV === "development") console.log("Initialized");
  })
  .catch(error => console.error(error));
