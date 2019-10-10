const constants = require("../../../common/constants");

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
  /*
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
  */

  if (process.env.NODE_ENV === "development") console.log("Init");
}
