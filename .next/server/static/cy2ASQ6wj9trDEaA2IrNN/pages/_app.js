module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var roles = {
  ANONYMOUS: "ANONYMOUS",
  // only the anonymous has this
  AUTHENTICATED: "AUTHENTICATED",
  // every one except the anonymous has this
  ADMIN: "ADMIN"
};
module.exports = {
  apiBase: "/api",
  graphqlBase: "/graphql",
  socketsBase: "/ws",
  roles: roles,
  oauthProviders: {
    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    GOOGLE: "GOOGLE"
  },
  pages: {
    "/": {
      page: "/",
      icon: "dashboard",
      menu: "MENU_DASHBOARD",
      title: "TITLE_DASHBOARD"
    },
    "/forms": {
      page: "/forms",
      icon: "forms",
      menu: "MENU_FORMS",
      title: "TITLE_FORMS"
    },
    "/charts": {
      page: "/charts",
      icon: "charts",
      menu: "MENU_CHARTS",
      title: "TITLE_CHARTS"
    },
    "/tables": {
      page: "/tables",
      icon: "tables",
      menu: "MENU_TABLES",
      title: "TITLE_TABLES"
    },
    "/maps": {
      page: "/maps",
      icon: "maps",
      menu: "MENU_MAPS",
      title: "TITLE_MAPS"
    },
    "/notifications": {
      page: "/notifications",
      icon: "notifications",
      menu: "MENU_NOTIFICATIONS",
      title: "TITLE_NOTIFICATIONS"
    },
    "/typography": {
      page: "/typography",
      icon: "typography",
      menu: "MENU_TYPOGRAPHY",
      title: "TITLE_TYPOGRAPHY"
    },
    "/icons": {
      page: "/icons",
      icon: "icons",
      menu: "MENU_ICONS",
      title: "TITLE_ICONS"
    },
    "/auth/profile": {
      page: "/auth/profile",
      title: "TITLE_PROFILE",
      roles: [roles.AUTHENTICATED]
    },
    "/auth/verify": {
      page: "/auth/verify",
      title: "TITLE_VERIFY_EMAIL"
    },
    "/auth/error": {
      page: "/auth/error",
      title: "TITLE_OAUTH_ERROR"
    },
    "/users": {
      page: "/users",
      icon: "users",
      menu: "MENU_USERS",
      title: "TITLE_USERS",
      roles: [roles.ADMIN]
    }
  },
  depts: {
    prod: "DASHBOARD_PRODUCTION_LABEL",
    rd: "DASHBOARD_RD_LABEL",
    purch: "DASHBOARD_PURCHASING_LABEL",
    market: "DASHBOARD_MARKETING_LABEL",
    hr: "DASHBOARD_HR_LABEL",
    acc: "DASHBOARD_ACCOUNTING_LABEL"
  },
  tableUrl: "https://jsonplaceholder.typicode.com/photos",
  messages: {
    HELLO: "HELLO",
    SET_STATUS: "SET_STATUS"
  },
  events: {
    FONTS_LOADED: "FONTS_LOADED"
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(21));

var appTypes = _interopRequireWildcard(__webpack_require__(10));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__(26));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__(40));

exports.appSelectors = appSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelectors = exports.authOperations = exports.authTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(30));

var authTypes = _interopRequireWildcard(__webpack_require__(11));

exports.authTypes = authTypes;

var authOperations = _interopRequireWildcard(__webpack_require__(31));

exports.authOperations = authOperations;

var authSelectors = _interopRequireWildcard(__webpack_require__(17));

exports.authSelectors = authSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_LOCALE = exports.SET_CONNECTED = exports.SET_STATUS_CODE = exports.STOP = exports.START = exports.INIT = exports.CREATE = void 0;
var CREATE = "app/app/CREATE";
exports.CREATE = CREATE;
var INIT = "app/app/INIT";
exports.INIT = INIT;
var START = "app/app/START";
exports.START = START;
var STOP = "app/app/STOP";
exports.STOP = STOP;
var SET_STATUS_CODE = "app/app/SET_STATUS_CODE";
exports.SET_STATUS_CODE = SET_STATUS_CODE;
var SET_CONNECTED = "app/app/SET_CONNECTED";
exports.SET_CONNECTED = SET_CONNECTED;
var SET_LOCALE = "app/app/SET_LOCALE";
exports.SET_LOCALE = SET_LOCALE;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_GOOGLE_MAPS_KEY = exports.SET_STATUS = exports.SET_CSRF = void 0;
var SET_CSRF = "app/auth/SET_CSRF";
exports.SET_CSRF = SET_CSRF;
var SET_STATUS = "app/auth/SET_STATUS";
exports.SET_STATUS = SET_STATUS;
var SET_GOOGLE_MAPS_KEY = "app/auth/SET_GOOGLE_MAPS_KEY";
exports.SET_GOOGLE_MAPS_KEY = SET_GOOGLE_MAPS_KEY;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-form/immutable");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var moment = __webpack_require__(29); // Add locales:
//require("moment/locale/ru.js"); // en is already there


module.exports = moment;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserProviders = exports.getAllProviders = exports.getRoles = exports.getEmail = exports.isAdmin = exports.isAuthenticated = exports.getCsrf = void 0;

var _reselect = __webpack_require__(33);

var _constants = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCsrf = function getCsrf(state) {
  return state.getIn(["auth", "csrf"]);
};

exports.getCsrf = getCsrf;

var isAuthenticated = function isAuthenticated(state) {
  return state.getIn(["auth", "isAuthenticated"]);
};
/* eslint-disable lodash/prefer-lodash-method */


exports.isAuthenticated = isAuthenticated;

var isAdmin = function isAdmin(state) {
  return state.getIn(["auth", "roles"]).includes(_constants.default.roles.ADMIN);
};
/* eslint-enable */


exports.isAdmin = isAdmin;

var getEmail = function getEmail(state) {
  return state.getIn(["auth", "email"]);
};

exports.getEmail = getEmail;
var getRoles = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["auth", "roles"]);
}, function (roles) {
  return roles.toJS();
});
exports.getRoles = getRoles;
var getAllProviders = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["auth", "providers"]);
}, function (providers) {
  return Array.from(providers.keys());
});
exports.getAllProviders = getAllProviders;
var getUserProviders = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["auth", "providers"]);
}, function (providers) {
  return providers.toJS();
});
exports.getUserProviders = getUserProviders;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

function parse(source) {
  var messages = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _.keys(source)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      messages[key] = _.isArray(source[key]) ? source[key].join("") : source[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return messages;
}

module.exports = {
  defaultLocale: "en",
  locales: ["en", "ru"],
  flags: {
    en: "US",
    ru: "RU"
  },
  names: {
    en: "English",
    ru: "Русский язык"
  },
  messages: {
    en: parse(__webpack_require__(22)),
    ru: parse(__webpack_require__(23))
  },
  getLocaleData: function getLocaleData() {
    return [__webpack_require__(24), __webpack_require__(25)];
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var constants = __webpack_require__(6);

module.exports = function isRouteAllowed(path) {
  var userRoles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var pageRoles = constants.pages[path] && constants.pages[path].roles;
  if (!pageRoles || pageRoles.length === 0) return true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pageRoles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var role = _step.value;
      if (!_.includes(userRoles, role)) return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(12);

var types = _interopRequireWildcard(__webpack_require__(10));

var _locales = _interopRequireDefault(__webpack_require__(19));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  created: Number, // timestamp
  di: DiContainer,
  locale: String,
  statusCode: Number, // current HTTP status code
  isStarted: Boolean,
  isConnected: Boolean, // WebSocket
})
*/
var createdReducer = function createdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.created)) return action.created;
      break;
  }

  return state;
};

var diReducer = function diReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.INIT:
      if (!_.isUndefined(action.di)) return action.di;
      break;
  }

  return state;
};

var localeReducer = function localeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _locales.default.defaultLocale;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_LOCALE:
      if (!_.isUndefined(action.locale)) return action.locale;
      break;
  }

  return state;
};

var statusCodeReducer = function statusCodeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS_CODE:
      if (_.isFinite(action.code) && action.code >= 200) return action.code;
      break;
  }

  return state;
};

var isStartedReducer = function isStartedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.START:
      return true;

    case types.STOP:
      return false;
  }

  return state;
};

var isConnectedReducer = function isConnectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_CONNECTED:
      if (!_.isUndefined(action.isConnected)) return action.isConnected;
      break;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  created: createdReducer,
  di: diReducer,
  locale: localeReducer,
  statusCode: statusCodeReducer,
  isStarted: isStartedReducer,
  isConnected: isConnectedReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Dashboard","TITLE_DASHBOARD":"Dashboard","MENU_FORMS":"Forms","TITLE_FORMS":"Forms","MENU_CHARTS":"Charts","TITLE_CHARTS":"Charts","MENU_TABLES":"Tables","TITLE_TABLES":"Tables","MENU_MAPS":"Maps","TITLE_MAPS":"Maps","MENU_NOTIFICATIONS":"Notifications","TITLE_NOTIFICATIONS":"Notifications","MENU_TYPOGRAPHY":"Typography","TITLE_TYPOGRAPHY":"Typography","MENU_ICONS":"Icons","TITLE_ICONS":"Icons","MENU_USERS":"Users","TITLE_USERS":"Users","SIDEBAR_ANONYMOUS":"Anonymous","SIDEBAR_BENCHMARKS_LINK":"Benchmark Results","SIDEBAR_RESPONSIVENESS_LINK":"Responsiveness Test","HEADER_INBOX_LABEL":"Inbox","HEADER_PROFILE_LABEL":"Profile","USERS_LOGIN_COLUMN":"Login","USERS_ROLES_COLUMN":"Roles","USERS_ACTION_BUTTON":"Action","USERS_CLEAR_BUTTON":"Clear Selection","USERS_CREATE_BUTTON":"Add User","USERS_EDIT_ACTION":"Edit User","USERS_DELETE_ACTION":"Delete Users","EDIT_USER_TITLE_CREATE":"Create user","EDIT_USER_TITLE_EDIT":"Edit user","EDIT_USER_NAME_LABEL":"Name","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","EDIT_USER_FAILED":"An error occured","DELETE_USER_TITLE":"Delete users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","APP_AUTH_TITLE":"Authentication","APP_AUTH_ANONYMOUS_BUTTON":"Anonymous","APP_AUTH_CREDENTIALS_LABEL":"Sign In using Credentials","APP_AUTH_NEW_USER_LABEL":"I don't have an account yet, please create one","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SERVICE_BUTTON":"Sign In with","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_EMAIL":"Please provide a valid email address","ERROR_INVALID_PASSWORD":"Password length must be at least 6 characters"};

/***/ }),
/* 23 */
/***/ (function(module) {

module.exports = {};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/ru.js");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.init = exports.create = exports.gqlQuery = exports.stop = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(27));

var actions = _interopRequireWildcard(__webpack_require__(28));

var _auth = __webpack_require__(8);

var _constants = _interopRequireDefault(__webpack_require__(6));

var _injectt = _interopRequireDefault(__webpack_require__(34));

var _Storage = _interopRequireDefault(__webpack_require__(35));

var _Socket = _interopRequireDefault(__webpack_require__(36));

var _Cookie = _interopRequireDefault(__webpack_require__(39));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var setStatusCode = actions.setStatusCode;
exports.setStatusCode = setStatusCode;
var setConnected = actions.setConnected;
exports.setConnected = setConnected;
var setLocale = actions.setLocale;
exports.setLocale = setLocale;
var stop = actions.stop;
exports.stop = stop;

var fetchCsrf =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var csrf, response;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            csrf = null;
            _context.prev = 1;
            _context.next = 4;
            return (0, _isomorphicUnfetch.default)(_constants.default.apiBase + "/csrf", {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            });

          case 4:
            response = _context.sent;

            if (!(response.status !== 200)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", null);

          case 7:
            _context.next = 9;
            return response.json();

          case 9:
            csrf = _context.sent.csrf;
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

          case 15:
            return _context.abrupt("return", new Promise(function (resolve) {
              return setTimeout(function () {
                return resolve(csrf || fetchCsrf());
              }, 1000);
            }));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 12]]);
  }));

  return function fetchCsrf() {
    return _ref.apply(this, arguments);
  };
}();

var gqlQuery = function gqlQuery(query, variables) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState) {
        var csrf, response, data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                csrf = _auth.authSelectors.getCsrf(getState());

                if (csrf) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return fetchCsrf();

              case 5:
                csrf = _context2.sent;
                _context2.next = 8;
                return dispatch(_auth.authOperations.setCsrf({
                  csrf: csrf
                }));

              case 8:
                _context2.next = 10;
                return (0, _isomorphicUnfetch.default)(_constants.default.graphqlBase, {
                  method: "POST",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-CSRF-Token": csrf
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: variables
                  })
                });

              case 10:
                response = _context2.sent;

                if (!(response.status === 403)) {
                  _context2.next = 15;
                  break;
                }

                _context2.next = 14;
                return dispatch(_auth.authOperations.setCsrf({
                  csrf: null
                }));

              case 14:
                return _context2.abrupt("return", dispatch(gqlQuery(query, variables)));

              case 15:
                data = null;
                _context2.prev = 16;
                _context2.next = 19;
                return response.json();

              case 19:
                data = _context2.sent;
                _context2.next = 25;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](16);
                console.error(_context2.t0);

              case 25:
                if (!(response.status !== 200)) {
                  _context2.next = 27;
                  break;
                }

                throw new Error("GraphQL query failed [".concat(response.status, "]"), data);

              case 27:
                return _context2.abrupt("return", data);

              case 30:
                _context2.prev = 30;
                _context2.t1 = _context2["catch"](0);
                console.error(_context2.t1);
                throw _context2.t1;

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 30], [16, 22]]);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.gqlQuery = gqlQuery;

var create = function create(_ref3) {
  var status = _ref3.status,
      googleMapsKey = _ref3.googleMapsKey;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return dispatch(actions.create());

              case 2:
                if (!status) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 5;
                return dispatch(_auth.authOperations.setStatus(status));

              case 5:
                if (!googleMapsKey) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 8;
                return dispatch(_auth.authOperations.setGoogleMapsKey(googleMapsKey));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.create = create;

var init = function init() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState) {
        var di;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                di = new _injectt.default();
                di.registerInstance(getState, "getState");
                di.registerInstance(dispatch, "dispatch");
                di.registerClass(_Storage.default);
                di.registerClass(_Socket.default);
                di.registerClass(_Cookie.default);
                return _context4.abrupt("return", dispatch(actions.init({
                  di: di
                })));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4, _x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.init = init;
var fontsLoaded;

var start = function start() {
  if (!fontsLoaded) {
    fontsLoaded = new Promise(function (resolve) {
      if (window.__fontsLoaded) return resolve();
      window.addEventListener(_constants.default.events.FONTS_LOADED, resolve, {
        once: true
      });
      setTimeout(resolve, 5000);
    });
  }

  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Promise.all([dispatch(_auth.authOperations.setStatus()), fontsLoaded]);

              case 2:
                return _context5.abrupt("return", dispatch(actions.start()));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.start = start;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setConnected = exports.setStatusCode = exports.stop = exports.start = exports.init = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__(16));

var types = _interopRequireWildcard(__webpack_require__(10));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = function create(data) {
  return _.assign({
    type: types.CREATE
  }, data);
};

exports.create = create;

var init = function init(data) {
  return _.assign({
    type: types.INIT
  }, data);
};

exports.init = init;

var start = function start() {
  return {
    type: types.START
  };
};

exports.start = start;

var stop = function stop() {
  return {
    type: types.STOP
  };
};

exports.stop = stop;

var setStatusCode = function setStatusCode(_ref) {
  var code = _ref.code;
  return {
    type: types.SET_STATUS_CODE,
    code: code
  };
};

exports.setStatusCode = setStatusCode;

var setConnected = function setConnected(_ref2) {
  var isConnected = _ref2.isConnected;
  return {
    type: types.SET_CONNECTED,
    isConnected: isConnected
  };
};

exports.setConnected = setConnected;

var setLocale = function setLocale(_ref3) {
  var locale = _ref3.locale;

  _moment.default.locale(locale);

  return {
    type: types.SET_LOCALE,
    locale: locale
  };
};

exports.setLocale = setLocale;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(14);

var _reduxImmutable = __webpack_require__(12);

var types = _interopRequireWildcard(__webpack_require__(11));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  csrf: String,
  isAuthenticated: Boolean,
  name: String,
  email: String,
  isEmailVerified: Boolean,
  roles: List([String]),
  providers: Map({
    name: Booelan, // is linked
  }),
  googleMapsKey: null,
})
*/
var csrfReducer = function csrfReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_CSRF:
      if (!_.isUndefined(action.csrf)) return action.csrf;
      break;
  }

  return state;
};

var isAuthenticatedReducer = function isAuthenticatedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.isAuthenticated)) return action.isAuthenticated;
      break;
  }

  return state;
};

var nameReducer = function nameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.name)) return action.name;
      break;
  }

  return state;
};

var emailReducer = function emailReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.email)) return action.email;
      break;
  }

  return state;
};

var isEmailVerifiedReducer = function isEmailVerifiedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.isEmailVerified)) return action.isEmailVerified;
      break;
  }

  return state;
};

var rolesReducer = function rolesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.roles)) return (0, _immutable.fromJS)(action.roles);
      break;
  }

  return state;
};

var providersReducer = function providersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.providers)) return (0, _immutable.fromJS)(action.providers);
      break;
  }

  return state;
};

var googleMapsKeyReducer = function googleMapsKeyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_GOOGLE_MAPS_KEY:
      if (!_.isUndefined(action.googleMapsKey)) return action.googleMapsKey;
      break;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  csrf: csrfReducer,
  isAuthenticated: isAuthenticatedReducer,
  name: nameReducer,
  email: emailReducer,
  isEmailVerified: isEmailVerifiedReducer,
  roles: rolesReducer,
  providers: providersReducer,
  googleMapsKey: googleMapsKeyReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfile = exports.unlinkProvider = exports.linkProvider = exports.updateProfile = exports.finishProfileVerification = exports.requestProfileVerification = exports.loadProfile = exports.signOut = exports.signUp = exports.signIn = exports.setStatus = exports.setCsrf = exports.setGoogleMapsKey = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _moment = _interopRequireDefault(__webpack_require__(16));

var _router = _interopRequireDefault(__webpack_require__(18));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(20));

var actions = _interopRequireWildcard(__webpack_require__(32));

var selectors = _interopRequireWildcard(__webpack_require__(17));

var _app = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var setGoogleMapsKey = actions.setGoogleMapsKey;
exports.setGoogleMapsKey = setGoogleMapsKey;
var setCsrf = actions.setCsrf;
exports.setCsrf = setCsrf;

var fetchStatus = function fetchStatus() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState) {
        var status, providers, providersQuery, response;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                status = null;
                _context.prev = 1;
                providers = selectors.getAllProviders(getState());
                providersQuery = "";

                if (providers && providers.length) {
                  providersQuery = "\n          providers {\n            ".concat(_.map(providers, function (item) {
                    return _.toLower(item);
                  }).join("\n"), "\n          }\n        ");
                }

                _context.next = 7;
                return dispatch(_app.appOperations.gqlQuery("\n        query {\n          status {\n            isAuthenticated\n            name\n            email\n            isEmailVerified\n            roles\n            ".concat(providersQuery, "\n          }\n        }\n      ")));

              case 7:
                response = _context.sent;
                status = response && _.get(response, "data.status", null);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 14:
                if (!status) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", status);

              case 16:
                return _context.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve(fetchStatus());
                  }, 1000);
                }));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var setStatus = function setStatus(status) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState) {
        var socket;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (true) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 3;
                return dispatch(fetchStatus());

              case 3:
                status = _context2.sent;

              case 4:
                if (true) {
                  _context2.next = 10;
                  break;
                }

                if ((0, _isRouteAllowed.default)(_router.default.pathname, status.roles)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 8;
                return dispatch(_app.appOperations.stop());

              case 8:
                window.location.href = "/";
                return _context2.abrupt("return");

              case 10:
                if (status) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return");

              case 12:
                _context2.next = 14;
                return dispatch(actions.setStatus(status));

              case 14:
                socket = _app.appSelectors.getService(getState(), {
                  service: "socket"
                });

                if (socket) {
                  if (selectors.isAuthenticated(getState())) socket.connect();else socket.disconnect();
                }

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.setStatus = setStatus;

var signIn = function signIn(_ref3) {
  var email = _ref3.email,
      password = _ref3.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState) {
        var result, storage, response, error;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = false;
                _context3.prev = 1;
                storage = _app.appSelectors.getService(getState(), {
                  service: "storage"
                });
                if (storage) storage.set("notAnonymous", true);
                _context3.next = 6;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($email: String, $password: String) {\n            signIn(email: $email, password: $password) {\n              success\n            }\n          }\n        ", {
                  email: email,
                  password: password
                }));

              case 6:
                response = _context3.sent;

                if (!(response && _.get(response, "data.signIn.success", false))) {
                  _context3.next = 16;
                  break;
                }

                _context3.next = 10;
                return dispatch(setStatus());

              case 10:
                if (true) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 13;
                return window.__NEXT_PAGE_INIT({
                  store: window.__NEXT_REDUX_STORE__
                });

              case 13:
                return _context3.abrupt("return", true);

              case 16:
                error = response && _.get(response, "errors.0", null);
                if (error && error.code === "E_VALIDATION") result = error.details;

              case 18:
                _context3.next = 23;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](1);
                console.error(_context3.t0);

              case 23:
                return _context3.abrupt("return", result);

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 20]]);
      }));

      return function (_x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.signIn = signIn;

var signUp = function signUp(_ref5) {
  var email = _ref5.email,
      password = _ref5.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        var result, response, error;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = false;
                _context4.prev = 1;
                _context4.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($email: String, $password: String) {\n            signUp(email: $email, password: $password) {\n              success\n            }\n          }\n        ", {
                  email: email,
                  password: password
                }));

              case 4:
                response = _context4.sent;

                if (!(response && _.get(response, "data.signUp.success", false))) {
                  _context4.next = 14;
                  break;
                }

                _context4.next = 8;
                return dispatch(setStatus());

              case 8:
                if (true) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 11;
                return window.__NEXT_PAGE_INIT({
                  store: window.__NEXT_REDUX_STORE__
                });

              case 11:
                return _context4.abrupt("return", true);

              case 14:
                error = response && _.get(response, "errors.0", null);
                if (error && error.code === "E_VALIDATION") result = error.details;

              case 16:
                _context4.next = 21;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](1);
                console.error(_context4.t0);

              case 21:
                return _context4.abrupt("return", result);

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 18]]);
      }));

      return function (_x7) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.signUp = signUp;

var signOut = function signOut() {
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch) {
        var response;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation {\n            signOut {\n              success\n            }\n          }\n        "));

              case 3:
                response = _context5.sent;

                if (!(response && _.get(response, "data.signOut.success", false))) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", dispatch(setStatus()));

              case 6:
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                console.error(_context5.t0);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      return function (_x8) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.signOut = signOut;

var loadProfile = function loadProfile(_ref8) {
  var onChange = _ref8.onChange;
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch, getState) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return dispatch(setStatus());

              case 2:
                _context6.next = 4;
                return dispatch(onChange("email", selectors.getEmail(getState())));

              case 4:
                _context6.next = 6;
                return dispatch(onChange("name", selectors.getName(getState())));

              case 6:
                _context6.next = 8;
                return dispatch(onChange("isAdmin", selectors.isAdmin(getState()) ? "yes" : "no"));

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x9, _x10) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.loadProfile = loadProfile;

var requestProfileVerification = function requestProfileVerification() {
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(dispatch) {
        var response;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation {\n            requestEmailVerification {\n              success\n            }\n          }\n        "));

              case 3:
                response = _context7.sent;
                return _context7.abrupt("return", response && _.get(response, "data.requestEmailVerification.success", false));

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                console.error(_context7.t0);

              case 10:
                return _context7.abrupt("return", false);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 7]]);
      }));

      return function (_x11) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
};

exports.requestProfileVerification = requestProfileVerification;

var finishProfileVerification = function finishProfileVerification(_ref11) {
  var token = _ref11.token;
  return (
    /*#__PURE__*/
    function () {
      var _ref12 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(dispatch) {
        var result, response;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                result = false;
                _context8.prev = 1;
                _context8.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($token: String) {\n            verifyEmail(token: $token) {\n              success\n            }\n          }\n        ", {
                  token: token
                }));

              case 4:
                response = _context8.sent;
                result = response && _.get(response, "data.verifyEmail.success", false);

                if (!result) {
                  _context8.next = 9;
                  break;
                }

                _context8.next = 9;
                return dispatch(setStatus());

              case 9:
                _context8.next = 14;
                break;

              case 11:
                _context8.prev = 11;
                _context8.t0 = _context8["catch"](1);
                console.error(_context8.t0);

              case 14:
                return _context8.abrupt("return", result);

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 11]]);
      }));

      return function (_x12) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
};

exports.finishProfileVerification = finishProfileVerification;

var updateProfile = function updateProfile(_ref13) {
  var email = _ref13.email,
      name = _ref13.name,
      password = _ref13.password,
      onChange = _ref13.onChange;
  return (
    /*#__PURE__*/
    function () {
      var _ref14 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(dispatch) {
        var result, response, error;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                result = false;
                _context9.prev = 1;
                _context9.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($email: String, $name: String, $password: String) {\n            updateProfile(email: $email, name: $name, password: $password) {\n              success\n            }\n          }\n        ", {
                  email: email,
                  name: name,
                  password: password
                }));

              case 4:
                response = _context9.sent;

                if (!(response && _.get(response, "data.updateProfile.success", false))) {
                  _context9.next = 11;
                  break;
                }

                _context9.next = 8;
                return dispatch(loadProfile(onChange));

              case 8:
                result = true;
                _context9.next = 13;
                break;

              case 11:
                error = response && _.get(response, "errors.0", null);
                if (error && error.code === "E_VALIDATION") result = error.details;

              case 13:
                _context9.next = 18;
                break;

              case 15:
                _context9.prev = 15;
                _context9.t0 = _context9["catch"](1);
                console.error(_context9.t0);

              case 18:
                return _context9.abrupt("return", result);

              case 19:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 15]]);
      }));

      return function (_x13) {
        return _ref14.apply(this, arguments);
      };
    }()
  );
};

exports.updateProfile = updateProfile;

var linkProvider = function linkProvider(_ref15) {
  var provider = _ref15.provider;
  return (
    /*#__PURE__*/
    function () {
      var _ref16 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(dispatch) {
        var url, expires;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                url = encodeURIComponent(window.location.pathname);
                expires = _moment.default.utc().add(1, "hour").format();
                _context10.next = 4;
                return dispatch(_app.appOperations.stop());

              case 4:
                document.cookie = "redirect=".concat(url, "; expires=").concat(expires, "; path=/");
                window.location.href = window.location.origin + "/api/oauth/" + _.lowerCase(provider);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function (_x14) {
        return _ref16.apply(this, arguments);
      };
    }()
  );
};

exports.linkProvider = linkProvider;

var unlinkProvider = function unlinkProvider(_ref17) {
  var provider = _ref17.provider;
  return (
    /*#__PURE__*/
    function () {
      var _ref18 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(dispatch) {
        var result, response, error;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                result = false;
                _context11.prev = 1;
                _context11.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($provider: String) {\n            unlinkProvider(provider: $provider) {\n              success\n            }\n          }\n        ", {
                  provider: provider
                }));

              case 4:
                response = _context11.sent;

                if (!(response && _.get(response, "data.unlinkProvider.success", false))) {
                  _context11.next = 11;
                  break;
                }

                _context11.next = 8;
                return dispatch(setStatus());

              case 8:
                result = true;
                _context11.next = 13;
                break;

              case 11:
                error = response && _.get(response, "errors.0", null);
                if (error && error.code === "E_VALIDATION") result = error.details;

              case 13:
                _context11.next = 18;
                break;

              case 15:
                _context11.prev = 15;
                _context11.t0 = _context11["catch"](1);
                console.error(_context11.t0);

              case 18:
                return _context11.abrupt("return", result);

              case 19:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[1, 15]]);
      }));

      return function (_x15) {
        return _ref18.apply(this, arguments);
      };
    }()
  );
};

exports.unlinkProvider = unlinkProvider;

var deleteProfile = function deleteProfile() {
  return (
    /*#__PURE__*/
    function () {
      var _ref19 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(dispatch) {
        var response;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation {\n            deleteProfile {\n              success\n            }\n          }\n        "));

              case 3:
                response = _context12.sent;

                if (!(response && _.get(response, "data.deleteProfile.success", false))) {
                  _context12.next = 9;
                  break;
                }

                _context12.next = 7;
                return dispatch(_app.appOperations.stop());

              case 7:
                window.location.href = "/";
                return _context12.abrupt("return", true);

              case 9:
                _context12.next = 14;
                break;

              case 11:
                _context12.prev = 11;
                _context12.t0 = _context12["catch"](0);
                console.error(_context12.t0);

              case 14:
                return _context12.abrupt("return", false);

              case 15:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 11]]);
      }));

      return function (_x16) {
        return _ref19.apply(this, arguments);
      };
    }()
  );
};

exports.deleteProfile = deleteProfile;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStatus = exports.setCsrf = exports.setGoogleMapsKey = void 0;

var types = _interopRequireWildcard(__webpack_require__(11));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setGoogleMapsKey = function setGoogleMapsKey(_ref) {
  var googleMapskey = _ref.googleMapskey;
  return {
    type: types.SET_GOOGLE_MAPS_KEY,
    googleMapskey: googleMapskey
  };
};

exports.setGoogleMapsKey = setGoogleMapsKey;

var setCsrf = function setCsrf(_ref2) {
  var csrf = _ref2.csrf;
  return {
    type: types.SET_CSRF,
    csrf: csrf
  };
};

exports.setCsrf = setCsrf;

var setStatus = function setStatus(status) {
  return _objectSpread({
    type: types.SET_STATUS
  }, status);
};

exports.setStatus = setStatus;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("injectt");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage =
/*#__PURE__*/
function () {
  function Storage(getState, dispatch) {
    _classCallCheck(this, Storage);

    if (true) return;
    this.getState = getState;
    this.dispatch = dispatch;
  } // eslint-disable-next-line lodash/prefer-constant


  _createClass(Storage, [{
    key: "get",
    value: function get(key, defaultValue) {
      if (true) return;
      var value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (true) return;
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (true) return;
      localStorage.removeItem(key);
    }
  }], [{
    key: "$provides",
    get: function get() {
      return "storage";
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$requires",
    get: function get() {
      return ["getState", "dispatch"];
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);

  return Storage;
}();

var _default = Storage;
exports.default = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _socket = _interopRequireDefault(__webpack_require__(37));

var _app = __webpack_require__(7);

var _auth = __webpack_require__(8);

var _constants = _interopRequireDefault(__webpack_require__(6));

var _package = _interopRequireDefault(__webpack_require__(38));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Socket =
/*#__PURE__*/
function () {
  function Socket(getState, dispatch) {
    _classCallCheck(this, Socket);

    if (true) return;
    this.getState = getState;
    this.dispatch = dispatch;
    this.socket = (0, _socket.default)({
      path: _constants.default.socketsBase,
      autoConnect: false
    });
    this.socket.on(_constants.default.messages.HELLO, this.onHello.bind(this));
    this.socket.on(_constants.default.messages.SET_STATUS, this.onSetStatus.bind(this));
    this.socket.on("disconnect", this.onDisconnect.bind(this));
  } // eslint-disable-next-line lodash/prefer-constant


  _createClass(Socket, [{
    key: "emit",
    value: function emit(message, data, cb) {
      if (true) return;
      if (false) {}
      this.socket.emit(message, data, cb && function (response) {
        try {
          return cb(response);
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      if (true) return;
      if (!_app.appSelectors.isConnected(this.getState())) this.socket.connect();
      this.emit(_constants.default.messages.HELLO, {
        version: _package.default.version
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (true) return;
      if (_app.appSelectors.isConnected(this.getState())) this.socket.disconnect();
    }
  }, {
    key: "onHello",
    value: function () {
      var _onHello = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(msg) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                if (false) {}

                if (!(msg.version !== _package.default.version)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return this.dispatch(_app.appOperations.stop());

              case 5:
                return _context.abrupt("return", setTimeout(function () {
                  return window.location.reload();
                }, 3000));

              case 6:
                _context.next = 8;
                return this.dispatch(_app.appOperations.setConnected({
                  isConnected: true
                }));

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      return function onHello(_x) {
        return _onHello.apply(this, arguments);
      };
    }()
  }, {
    key: "onSetStatus",
    value: function () {
      var _onSetStatus = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(msg) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (false) {}

                _context2.next = 4;
                return this.dispatch(_auth.authOperations.setStatus(msg));

              case 4:
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      return function onSetStatus(_x2) {
        return _onSetStatus.apply(this, arguments);
      };
    }()
  }, {
    key: "onDisconnect",
    value: function () {
      var _onDisconnect = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                if (false) {}
                _context3.next = 4;
                return this.dispatch(_app.appOperations.setConnected({
                  isConnected: false
                }));

              case 4:
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      return function onDisconnect() {
        return _onDisconnect.apply(this, arguments);
      };
    }()
  }], [{
    key: "$provides",
    get: function get() {
      return "socket";
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$requires",
    get: function get() {
      return ["getState", "dispatch"];
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);

  return Socket;
}();

var _default = Socket;
exports.default = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 38 */
/***/ (function(module) {

module.exports = {"name":"next-dashboard","version":"0.1.0","private":true,"dependencies":{"@date-io/moment":"~0.0.2","@material-ui/core":"~3.6.0","@material-ui/icons":"~3.0.1","@zeit/next-bundle-analyzer":"~0.1.2","@zeit/next-css":"~1.0.1","base64util":"~2.0.0-f","bcrypt":"~3.0.2","body-parser":"~1.18.3","classnames":"~2.2.6","compression":"~1.7.3","connect-mongo":"~2.0.2","cookie-parser":"~1.4.3","cors":"~2.8.5","countryjs":"~1.8.0","csurf":"~1.9.0","debug":"~4.1.0","dotenv":"~6.1.0","express":"~4.16.4","express-graphql":"~0.7.1","express-session":"~1.15.6","fs-extra":"~7.0.1","graphql":"14.0.2","graphql-tools":"~4.0.3","immutable":"~4.0.0-rc.12","injectt":"~0.1.1","intl":"~1.2.5","intl-locales-supported":"~1.0.0","intl-messageformat":"~2.2.0","isomorphic-unfetch":"~3.0.0","json-immutable":"~0.4.0","jss":"~9.8.7","jss-extend":"~6.2.0","lodash":"~4.17.11","lru-cache":"~5.1.1","material-ui-pickers":"~2.0.3","moment":"~2.22.2","moment-timezone":"~0.5.23","mongoose":"~5.3.14","morgan":"~1.9.1","next":"~7.0.2","next-compose-plugins":"~2.1.1","next-progressbar":"~1.0.0","nodemailer":"~4.7.0","null-loader":"~0.1.1","pako":"~1.0.6","passport":"~0.4.0","passport-facebook":"~2.1.1","passport-google-oauth":"~1.0.0","passport-twitter":"~1.0.4","raf":"~3.4.1","react":"~16.6.3","react-dom":"~16.6.3","react-flags":"~0.1.17","react-intl":"~2.7.2","react-jss":"~8.6.1","react-redux":"~5.1.1","react-swipeable-views":"~0.13.0","react-toastify":"~4.4.3","react-virtualized":"~9.21.0","redux":"~4.0.1","redux-devtools-extension":"~2.13.7","redux-form":"~7.4.2","redux-immutable":"~4.0.0","redux-thunk":"~2.3.0","reselect":"~4.0.0","serve-favicon":"~2.5.0","serviceworker-webpack-plugin":"~1.0.1","sharp":"~0.21.0","socket.io":"~2.1.1","ssh2":"~0.6.1","svg-inline-loader":"~0.8.0","utf8":"~3.0.0","uuid":"~3.3.2","validator":"~10.9.0","webpack":"4.20.2","xterm":"~3.8.0"},"devDependencies":{"@babel/core":"7.0.0","babel-core":"7.0.0-bridge.0","babel-eslint":"~10.0.1","babel-jest":"~23.6.0","babel-plugin-lodash":"~3.3.4","css-mqpacker":"~7.0.0","enzyme":"~3.7.0","enzyme-adapter-react-16":"~1.7.0","eslint":"~5.9.0","eslint-plugin-lodash":"~4.0.0","eslint-plugin-react":"~7.11.1","jest":"~23.6.0","jsdom":"~13.0.0","jsdom-global":"~3.0.2","postcss-clean":"~1.1.0","postcss-loader":"~3.0.0","postcss-preset-env":"~6.4.0","postcss-url":"~8.0.0","prop-types":"~15.6.2","supertest":"~3.3.0","webfontloader":"~1.6.28"},"scripts":{"lint":"eslint . --max-warnings=0","test":"jest . --no-cache --forceExit","build":"node ./bin/prepare-build && env NODE_ENV=production TMPDIR=$PWD/.tmp next build","export":"env NODE_ENV=production TMPDIR=$PWD/.tmp next export","dev":"node ./bin/prepare-build && env NODE_ENV=development node ./bin/www","start":"env NODE_ENV=production node ./bin/www"}};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cookie =
/*#__PURE__*/
function () {
  function Cookie() {
    _classCallCheck(this, Cookie);
  }

  _createClass(Cookie, [{
    key: "get",
    value: function get(name) {
      if (true) return;
      var v = document.cookie.match("(^|;) ?" + encodeURIComponent(name) + "=([^;]*)(;|$)");
      return v ? decodeURIComponent(v[2]) : null;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
      if (true) return;
      var d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";path=/;expires=" + d.toGMTString();
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      if (true) return;
      this.set(encodeURIComponent(name), "", -1);
    }
  }], [{
    key: "$provides",
    // eslint-disable-next-line lodash/prefer-constant
    get: function get() {
      return "cookie";
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$requires",
    get: function get() {
      return [];
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);

  return Cookie;
}();

var _default = Cookie;
exports.default = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnected = exports.isStarted = exports.getLocale = exports.getStatusCode = exports.getService = exports.getCreated = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getCreated = function getCreated(state) {
  return state.getIn(["app", "created"]);
};

exports.getCreated = getCreated;

var getService = function getService(state, props) {
  var di = state.getIn(["app", "di"]);
  return di ? di.get.apply(di, [props.service].concat(_toConsumableArray(props.params || []))) : null;
};

exports.getService = getService;

var getStatusCode = function getStatusCode(state) {
  return state.getIn(["app", "statusCode"]);
};

exports.getStatusCode = getStatusCode;

var getLocale = function getLocale(state) {
  return state.getIn(["app", "locale"]);
};

exports.getLocale = getLocale;

var isStarted = function isStarted(state) {
  return state.getIn(["app", "isStarted"]);
};

exports.isStarted = isStarted;

var isConnected = function isConnected(state) {
  return state.getIn(["app", "isConnected"]);
};

exports.isConnected = isConnected;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.SET_LIST = void 0;
var SET_LIST = "app/users/SET_LIST";
exports.SET_LIST = SET_LIST;
var SHOW_EDIT_MODAL = "app/users/SHOW_EDIT_MODAL";
exports.SHOW_EDIT_MODAL = SHOW_EDIT_MODAL;
var HIDE_EDIT_MODAL = "app/users/HIDE_EDIT_MODAL";
exports.HIDE_EDIT_MODAL = HIDE_EDIT_MODAL;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelectors = exports.usersOperations = exports.usersTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(56));

var usersTypes = _interopRequireWildcard(__webpack_require__(41));

exports.usersTypes = usersTypes;

var usersOperations = _interopRequireWildcard(__webpack_require__(57));

exports.usersOperations = usersOperations;

var usersSelectors = _interopRequireWildcard(__webpack_require__(59));

exports.usersSelectors = usersSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var validator = __webpack_require__(49);
/**
 * Normalizer function for Redux Form
 * takes input like "command1:param1:param2|command2:param1:param2"
 */


module.exports = function normalize(props, options, value, prevValue, allValues
/* prevAllValues */
) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _.split(options, "|")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;

      var params = _.split(_.trim(rule), ":");

      var command = params.shift();
      rules[command] = params;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var result = _.isUndefined(value) ? "" : _.toString(value);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _.keys(rules)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _command = _step2.value;
      var i = void 0;
      var tmp = void 0;

      switch (_command) {
        case "trim":
          // trims the input, no params
          tmp = [];
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _.split(_.replace(_.trim(result), /\r+/g, ""), "\n")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var line = _step3.value;
              tmp.push(_.trim(line));
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          result = tmp.join("\r\n");
          break;

        case "compact":
          // with "spaces" param compacts spaces into single space preserving new lines
          if (_.includes(rules[_command], "spaces")) {
            tmp = [];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = _.split(_.replace(result, /\r+/g, ""), "\n")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _line = _step4.value;
                tmp.push(_.replace(_line, /\s+/g, " "));
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            result = tmp.join("\r\n");
          }

          break;

        case "remove":
          // with "spaces" param removes spaces inside the line preveserving new lines
          if (_.includes(rules[_command], "spaces")) {
            tmp = [];
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = _.split(_.replace(result, /\r+/g, ""), "\n")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _line2 = _step5.value;
                tmp.push(_.replace(_line2, /\s+/g, ""));
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            result = tmp.join("\r\n");
          }

          break;

        case "rows":
          // first param is the number of rows in the result (defaults to 1)
          tmp = _.split(_.replace(result, /\r+/g, ""), "\n");
          result = "";

          for (i = 0; i < tmp.length; i++) {
            if (i > 0 && i < (rules[_command].length ? parseInt(rules[_command][0]) : 1)) result += "\r\n";
            result += tmp[i];
          }

          break;

        case "phone":
          // converts input to internations phone number format
          // props of the form should have getCallingCodes() selector function
          tmp = _.replace(result, /[^0-9]+/g, "");
          result = "";
          i = 0;
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = props.getCallingCodes(allValues.get("country"))[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var code = _step6.value;

              if (_.startsWith(tmp, code)) {
                result += code + (code.length < tmp.length ? " " : "");
                i = code.length;
                break;
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          for (; i < tmp.length; i++) {
            if (i === 5 || i === 8 || i === 10) result += " ";
            result += tmp[i];
          }

          if (result.length) result = "+" + result;
          break;

        case "email":
          // normalizes email
          result = validator.normalizeEmail(result);
          if (result === "@") result = "";
          break;

        case "credit_card":
          // normalizes credit card attribute set by first param ("number", "date" or "secret")
          switch (rules[_command].length && rules[_command][0]) {
            case "number":
              tmp = _.replace(result, /[^0-9]+/g, "");
              result = "";

              for (i = 0; i < tmp.length; i++) {
                if (i > 0 && !(i % 4)) result += " ";
                result += tmp[i];
              }

              break;

            case "date":
              tmp = _.replace(result, /[^0-9]+/g, "");
              result = tmp.slice(0, 2);

              if (tmp.length > 2) {
                result += " / ";
                result += tmp.slice(2);
              }

              break;

            case "secret":
              result = _.replace(result, /[^0-9]+/g, "");
              break;
          }

          break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(14);

var _reduxImmutable = __webpack_require__(12);

var types = _interopRequireWildcard(__webpack_require__(41));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  list: List([
    Map({
      id: String,
      login: String,
      roles: [String],
    })
  ]),
  editModalUserId: String, // null when creating a new user
  isEditModalOpen: false,
})
*/
var listReducer = function listReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_LIST:
      if (!_.isUndefined(action.list)) return (0, _immutable.fromJS)(action.list);
      break;
  }

  return state;
};

var editModalUserIdReducer = function editModalUserIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.userId || null;
  }

  return state;
};

var isEditModalOpenReducer = function isEditModalOpenReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return true;

    case types.HIDE_EDIT_MODAL:
      return false;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  list: listReducer,
  editModalUserId: editModalUserIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.edit = exports.create = exports.load = exports.hideEditModal = exports.showEditModal = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var actions = _interopRequireWildcard(__webpack_require__(58));

var _app = __webpack_require__(7);

var _constants = _interopRequireDefault(__webpack_require__(6));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var showEditModal = actions.showEditModal;
exports.showEditModal = showEditModal;
var hideEditModal = actions.hideEditModal;
exports.hideEditModal = hideEditModal;

var load = function load() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      req = _ref.req;

  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch) {
        var users, response;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 9;
                  break;
                }

                _context.t0 = _;
                _context.next = 4;
                return req.di.get("repository.users").getUsers(req);

              case 4:
                _context.t1 = _context.sent;

                _context.t2 = function (user) {
                  return _.assign({}, user, {
                    whenCreated: user.whenCreated.valueOf(),
                    whenUpdated: user.whenUpdated.valueOf()
                  });
                };

                users = _context.t0.map.call(_context.t0, _context.t1, _context.t2);
                _context.next = 13;
                break;

              case 9:
                _context.next = 11;
                return dispatch(_app.appOperations.gqlQuery("\n          query {\n            users {\n              id\n              name\n              email\n              roles\n            }\n          }\n        "));

              case 11:
                response = _context.sent;
                users = response && _.get(response, "data.users");

              case 13:
                _context.next = 15;
                return dispatch(actions.setList({
                  list: users
                }));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.load = load;

var create = function create(_ref3) {
  var name = _ref3.name,
      email = _ref3.email,
      password = _ref3.password,
      isAdmin = _ref3.isAdmin;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch) {
        var result, response, error;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = false;
                _context2.prev = 1;
                _context2.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($name: String, $email: String, $password: String, $roles: [UserRole]) {\n            createUser(name: $name, email: $email, password: $password, roles: $roles) {\n              success\n            }\n          }\n        ", {
                  name: name,
                  email: email,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN])
                }));

              case 4:
                response = _context2.sent;

                if (!(response && _.get(response, "data.createUser.success", false))) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 8;
                return dispatch(actions.hideEditModal());

              case 8:
                return _context2.abrupt("return", true);

              case 11:
                error = response && _.get(response, "errors.0", null);
                if (error && error.code === "E_VALIDATION") result = error.details;

              case 13:
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](1);
                console.error(_context2.t0);

              case 18:
                return _context2.abrupt("return", result);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 15]]);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.create = create;

var edit = function edit(_ref5) {
  var id = _ref5.id,
      name = _ref5.name,
      email = _ref5.email,
      password = _ref5.password,
      isAdmin = _ref5.isAdmin;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        var result, response, error;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = false;
                _context3.prev = 1;
                _context3.next = 4;
                return dispatch(_app.appOperations.gqlQuery("\n          mutation ($id: String, $name: String, $email: String, $password: String, $roles: [UserRole]) {\n            editUser(id: $id, name: $name, email: $email, password: $password, roles: $roles) {\n              success\n            }\n          }\n        ", {
                  id: id,
                  name: name,
                  email: email,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN])
                }));

              case 4:
                response = _context3.sent;

                if (!(response && _.get(response, "data.editUser.success", false))) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 8;
                return dispatch(actions.hideEditModal());

              case 8:
                return _context3.abrupt("return", true);

              case 11:
                error = response && _.get(response, "errors.0", null);
                if (error && error.code === "E_VALIDATION") result = error.details;

              case 13:
                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](1);
                console.error(_context3.t0);

              case 18:
                return _context3.abrupt("return", result);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 15]]);
      }));

      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.edit = edit;

var remove = function remove(_ref7) {
  var id = _ref7.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        var response, success;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dispatch(_app.appOperations.gqlQuery("\n        mutation ($id: String) {\n          deleteUser(id: $id) {\n            success\n          }\n        }\n      ", {
                  id: id
                }));

              case 2:
                response = _context4.sent;
                success = response && _.get(response, "data.deleteUser.success") || false;
                return _context4.abrupt("return", success);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEditModal = exports.showEditModal = exports.setList = void 0;

var types = _interopRequireWildcard(__webpack_require__(41));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var setList = function setList(_ref) {
  var list = _ref.list;
  return {
    type: types.SET_LIST,
    list: list
  };
};

exports.setList = setList;

var showEditModal = function showEditModal() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      userId = _ref2.userId;

  return {
    type: types.SHOW_EDIT_MODAL,
    userId: userId
  };
};

exports.showEditModal = showEditModal;

var hideEditModal = function hideEditModal() {
  return {
    type: types.HIDE_EDIT_MODAL
  };
};

exports.hideEditModal = hideEditModal;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalData = exports.isEditModalOpen = exports.getList = void 0;

var getList = function getList(state) {
  return state.getIn(["users", "list"]);
};

exports.getList = getList;

var isEditModalOpen = function isEditModalOpen(state) {
  return state.getIn(["users", "isEditModalOpen"]);
};

exports.isEditModalOpen = isEditModalOpen;

var getEditModalData = function getEditModalData(state) {
  var id = state.getIn(["users", "editModalUserId"]);
  if (!id) return null; // eslint-disable-next-line

  return state.getIn(["users", "list"]).find(function (item) {
    return item.get("id") === id;
  });
};

exports.getEditModalData = getEditModalData;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(13);

var _immutable = __webpack_require__(15);

var getImmutableFields = function getImmutableFields(Form) {
  return _.difference(_.keys(Form.propTypes), _.keys(_immutable.propTypes));
};

var getBlurFields = function getBlurFields(Form) {
  return _.transform(Form.fields, function (acc, value, key) {
    if (value.transform || value.validate) acc.push(key);
  }, []);
};

var _default = function _default(FormComponent, mapStateToProps, mapDispatchToProps) {
  var Form = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _immutable.reduxForm)({
    form: FormComponent.formName,
    destroyOnUnmount: false,
    immutableProps: getImmutableFields(FormComponent),
    asyncBlurFields: getBlurFields(FormComponent),
    asyncChangeFields: [],
    onSubmit: FormComponent.onSubmit.bind(FormComponent),
    onSubmitFail: FormComponent.onSubmitFail.bind(FormComponent),
    onSubmitSuccess: FormComponent.onSubmitSuccess.bind(FormComponent),
    onChange: FormComponent.onChange.bind(FormComponent),
    asyncValidate: FormComponent.onValidate.bind(FormComponent)
  })(FormComponent));
  Form.formName = FormComponent.formName;
  return Form;
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _immutable = __webpack_require__(15);

var _normalize = _interopRequireDefault(__webpack_require__(48));

var _validate2 = _interopRequireDefault(__webpack_require__(65));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormComponent, _React$Component);

  _createClass(FormComponent, null, [{
    key: "getValue",
    value: function getValue(props, name) {
      return props.fieldValues[this.formName].get(name);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit()
    /*values, dispatch, props*/
    {}
  }, {
    key: "onSubmitFail",
    value: function onSubmitFail(error, dispatch, submitError
    /*, props */
    ) {
      if (false) {}
    }
  }, {
    key: "onSubmitSuccess",
    value: function onSubmitSuccess(result
    /*, dispatch, props */
    ) {
      if (false) {}
    }
  }, {
    key: "onChange",
    value: function onChange(values, dispatch, props, prevValues) {
      if (!this.cachedErrors[props.form]) return; // remove error status of the field changed

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = values.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;

          if (this.cachedErrors[props.form][field] && values.get(field) !== prevValues.get(field)) {
            delete this.cachedErrors[props.form][field];
            dispatch(props.clearAsyncError(field));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "doValidate",
    value: function () {
      var _doValidate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values, dispatch, props, blurredField) {
        var transform,
            fields,
            _iteratorNormalCompletion2,
            _didIteratorError2,
            _iteratorError2,
            _iterator2,
            _step2,
            field,
            value,
            transformed,
            errors,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                transform = _args.length > 4 && _args[4] !== undefined ? _args[4] : true;
                _context.prev = 1;
                // if blurred field is not set, validate all of them
                fields = blurredField ? _.isArray(blurredField) ? blurredField : [blurredField] : _.keys(this.fields);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 6;
                _iterator2 = fields[Symbol.iterator]();

              case 8:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context.next = 23;
                  break;
                }

                field = _step2.value;
                value = values.get(field); // transform value first if requested

                if (!(transform && this.fields[field].transform)) {
                  _context.next = 17;
                  break;
                }

                transformed = (0, _normalize.default)(props, this.fields[field].transform, value, value, values, values);

                if (!(transformed !== value)) {
                  _context.next = 17;
                  break;
                }

                _context.next = 16;
                return dispatch(props.change(field, transformed));

              case 16:
                value = transformed;

              case 17:
                errors = []; // validate

                if (this.fields[field].validate) errors = (0, _validate2.default)(props, this.fields[field].validate, value, values); // cache result

                if (errors.length) {
                  if (!this.cachedErrors[props.form]) this.cachedErrors[props.form] = {};
                  this.cachedErrors[props.form][field] = errors;
                } else {
                  if (this.cachedErrors[props.form]) delete this.cachedErrors[props.form][field];
                }

              case 20:
                _iteratorNormalCompletion2 = true;
                _context.next = 8;
                break;

              case 23:
                _context.next = 29;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](6);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t0;

              case 29:
                _context.prev = 29;
                _context.prev = 30;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 32:
                _context.prev = 32;

                if (!_didIteratorError2) {
                  _context.next = 35;
                  break;
                }

                throw _iteratorError2;

              case 35:
                return _context.finish(32);

              case 36:
                return _context.finish(29);

              case 37:
                _context.next = 42;
                break;

              case 39:
                _context.prev = 39;
                _context.t1 = _context["catch"](1);
                console.error(_context.t1);

              case 42:
                if (!(this.cachedErrors[props.form] && _.keys(this.cachedErrors[props.form]).length)) {
                  _context.next = 44;
                  break;
                }

                throw _.cloneDeep(this.cachedErrors[props.form]);

              case 44:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 39], [6, 25, 29, 37], [30,, 32, 36]]);
      }));

      return function doValidate(_x, _x2, _x3, _x4) {
        return _doValidate.apply(this, arguments);
      };
    }()
  }, {
    key: "onValidate",
    value: function () {
      var _onValidate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        var _this2 = this;

        var _len,
            args,
            _key,
            _args3 = arguments;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                for (_len = _args3.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args3[_key];
                }

                setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee2() {
                  return _regenerator.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.prev = 0;
                          _context2.next = 3;
                          return _this2.doValidate.apply(_this2, args);

                        case 3:
                          _context2.next = 7;
                          break;

                        case 5:
                          _context2.prev = 5;
                          _context2.t0 = _context2["catch"](0);

                        case 7:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this, [[0, 5]]);
                })));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function onValidate() {
        return _onValidate.apply(this, arguments);
      };
    }()
  }]);

  function FormComponent(props) {
    var _this;

    _classCallCheck(this, FormComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormComponent).call(this, props));
    _this.normalizers = {};
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      var _loop = function _loop() {
        var field = _step3.value;
        var options = _this.constructor.fields[field].normalize;
        if (options) _this.normalizers[field] = function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _normalize.default.apply(void 0, [_this.props, options].concat(args));
        };
      };

      for (var _iterator3 = _.keys(_this.constructor.fields)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return _this;
  }

  _createClass(FormComponent, [{
    key: "validate",
    value: function () {
      var _validate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4() {
        var errors;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.constructor.doValidate(this.props.fieldValues[this.props.form], this.props.dispatch, this.props, undefined, false);

              case 3:
                _context4.next = 8;
                break;

              case 5:
                _context4.prev = 5;
                _context4.t0 = _context4["catch"](0);
                errors = _context4.t0;

              case 8:
                _context4.next = 10;
                return this.props.updateValidation(errors);

              case 10:
                return _context4.abrupt("return", errors ? errors : true);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 5]]);
      }));

      return function validate() {
        return _validate.apply(this, arguments);
      };
    }()
  }, {
    key: "submit",
    value: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5() {
        var valid;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.validate();

              case 3:
                valid = _context5.sent;

                if (!(valid !== true)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", valid);

              case 6:
                _context5.next = 8;
                return this.props.handleSubmit();

              case 8:
                return _context5.abrupt("return", _context5.sent);

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);
                console.error(_context5.t0);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 11]]);
      }));

      return function submit() {
        return _submit.apply(this, arguments);
      };
    }() // eslint-disable-next-line

  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FormComponent;
}(_react.default.Component);

_defineProperty(FormComponent, "formName", "baseForm");

_defineProperty(FormComponent, "fields", {
  /*
  fieldName: {
    normalize: 'rules', // happens on change
    transform: 'rules', // happens on blur
    validate: 'rules',  // happens on blur
    label: 'ID',        // translation ID
  },
   */
});

_defineProperty(FormComponent, "cachedErrors", {});

var _default = FormComponent;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var validator = __webpack_require__(49);
/**
 * Validation function for Redux Form
 * takes input like "command1:param1:param2|command2:param1:param2"
 */


module.exports = function validate(props, options, value, allValues) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _.split(options, "|")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;

      var params = _.split(_.trim(rule), ":");

      var _command = params.shift();

      rules[_command] = params;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  value = _.isUndefined(value) ? "" : _.toString(value);

  var commands = _.keys(rules);

  var errors = [];

  if (validator.isEmpty(value)) {
    // when string is empty only "required" command is triggered
    if (_.includes(commands, "required")) {
      // optional first param is the name of other field that should
      // be non-empty for this to be triggered, always triggered otherwise
      var failed = true;

      if (allValues && rules.required.length && rules.required[0]) {
        var other = allValues.get(rules.required[0]);
        if (!other || !other.length) failed = false;
      }

      if (failed) errors.push({
        id: "ERROR_FIELD_REQUIRED"
      });
    }
  } else {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = commands[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var command = _step2.value;
        var success = void 0;
        var tmp = void 0;
        var normalized = void 0;

        switch (command) {
          case "phone":
            // validate phone number in international format
            if (!validator.isEmpty(value)) {
              normalized = _.replace(value, /[^0-9]+/g, "");

              if (normalized.length !== 12) {
                errors.push({
                  id: "ERROR_INVALID_PHONE"
                });
              } else {
                tmp = props.getCallingCodes(allValues.get("country"));
                success = !tmp.size;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = tmp[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var code = _step3.value;

                    if (_.startsWith(normalized, code)) {
                      success = true;
                      break;
                    }
                  }
                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                      _iterator3.return();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
                  }
                }

                if (!success) errors.push({
                  id: "ERROR_INVALID_PHONE_COUNTRY"
                });
              }
            }

            break;

          case "email":
            // validate email
            if (!validator.isEmpty(value) && !validator.isEmail(value)) errors.push({
              id: "ERROR_INVALID_EMAIL"
            });
            break;

          case "password":
            // validate password, first param is password length (6 by default)
            if (value.length < (rules[command].length && rules[command][0]) || 6) errors.push({
              id: "ERROR_INVALID_PASSWORD"
            });
            break;

          case "credit_card":
            // validate credit card attribute set by first param ("number", "date" or "secret")
            normalized = _.replace(value, /[^0-9]+/g, "");

            switch (rules[command].length && rules[command][0]) {
              case "number":
                if (normalized.length !== 16 || !validator.isCreditCard(normalized)) errors.push({
                  id: "ERROR_INVALID_CREDIT_CARD_NUMBER"
                });
                break;

              case "date":
                if (normalized.length !== 4) {
                  errors.push({
                    id: "ERROR_INVALID_CREDIT_CARD_DATE"
                  });
                } else {
                  tmp = [parseInt(normalized.slice(0, 2)), parseInt(normalized.slice(2))];
                  if (tmp[0] < 1 || tmp[0] > 12 || tmp[1] < new Date().getFullYear() - 2000) errors.push({
                    id: "ERROR_INVALID_CREDIT_CARD_DATE"
                  });
                }

                break;

              case "secret":
                if (normalized.length !== 3) errors.push({
                  id: "ERROR_INVALID_CREDIT_CARD_SECRET"
                });
                break;
            }

            break;

          case "match":
            // this rule is triggered when field set by first param has other value than this one
            tmp = rules[command].length && rules[command][0];
            if (tmp && allValues && allValues.get(tmp) !== value) errors.push({
              id: "ERROR_MISMATCHED_VALUES"
            });
            break;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return errors;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _shallowEqual = _interopRequireDefault(__webpack_require__(67));

var _reactIntl = __webpack_require__(9);

var _immutable = __webpack_require__(15);

var _styles = __webpack_require__(3);

var _List = _interopRequireDefault(__webpack_require__(68));

var _ListItem = _interopRequireDefault(__webpack_require__(69));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(45));

var _ListItemText = _interopRequireDefault(__webpack_require__(46));

var _TextField = _interopRequireDefault(__webpack_require__(70));

var _Select = _interopRequireDefault(__webpack_require__(71));

var _FormControl = _interopRequireDefault(__webpack_require__(72));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(73));

var _FormHelperText = _interopRequireDefault(__webpack_require__(74));

var _MenuItem = _interopRequireDefault(__webpack_require__(42));

var _Checkbox = _interopRequireDefault(__webpack_require__(55));

var _InputLabel = _interopRequireDefault(__webpack_require__(75));

var _FilledInput = _interopRequireDefault(__webpack_require__(76));

var _red = _interopRequireDefault(__webpack_require__(47));

var _InfoOutlined = _interopRequireDefault(__webpack_require__(77));

var _normalize2 = _interopRequireDefault(__webpack_require__(48));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    },
    errorList: {
      padding: 0
    },
    errorListItem: {
      paddingTop: "0.5rem",
      paddingLeft: "0.5rem",
      paddingRight: 0
    },
    label: {
      marginLeft: 0
    },
    error: {
      color: _red.default[300]
    }
  };
};

var FieldComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(FieldComponent, _React$PureComponent);

  function FieldComponent(props) {
    var _this;

    _classCallCheck(this, FieldComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FieldComponent).call(this, props));
    _this.input = _react.default.createRef();
    _this.cachedValue = props.input.value;
    _this.cachedPosition = 0;

    switch (props.type) {
      case "checkbox":
        _this.handleChange = _this.handleCheckboxChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        break;

      default:
        _this.handleChange = _this.handleDefaultChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    }

    _this.handleFocus = _this.handleDefaultFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBlur = _this.handleDefaultBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FieldComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.input.value === prevProps.input.value) return;

      if (this.input.current) {
        // fix cursor position on changing the value to the normalized variant
        var str;
        var index;

        switch (this.props.type) {
          case "text":
          case "password":
            str = (this.cachedValue || "").substr(0, this.cachedPosition);
            index = (this.props.input.value || "").indexOf(str) + this.cachedPosition;
            if (index !== -1 && this.cachedPosition < (this.cachedValue || "").length) this.input.current.selectionStart = this.input.current.selectionEnd = index;
            break;
        }
      }

      this.cachedValue = this.props.input.value;
    }
  }, {
    key: "handleDefaultChange",
    value: function handleDefaultChange(evt) {
      this.cachedValue = evt.target.value;
      this.cachedPosition = evt.target.selectionEnd;
      return this.props.input.onChange(this.cachedValue);
    }
  }, {
    key: "handleCheckboxChange",
    value: function handleCheckboxChange(evt) {
      return this.props.input.onChange(evt.target.checked ? "on" : "off");
    }
  }, {
    key: "handleDefaultFocus",
    value: function handleDefaultFocus() {
      var _this$props$input;

      return (_this$props$input = this.props.input).onFocus.apply(_this$props$input, arguments);
    }
  }, {
    key: "handleDefaultBlur",
    value: function handleDefaultBlur() {
      return this.props.input.onBlur(this.cachedValue);
    }
  }, {
    key: "renderErrors",
    value: function renderErrors() {
      var _this2 = this;

      if (!this.props.meta.error) return null;
      return _react.default.createElement(_List.default, {
        classes: {
          root: this.props.classes.errorList
        }
      },
      /* eslint-disable-line */
      this.props.meta.error.map(function (error, index) {
        return _react.default.createElement(_ListItem.default, {
          key: "error-".concat(index),
          classes: {
            root: _this2.props.classes.errorListItem
          }
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_InfoOutlined.default, {
          className: _this2.props.classes.error
        })), _react.default.createElement(_ListItemText.default, {
          classes: {
            primary: _this2.props.classes.error
          },
          primary: _.isString(error) ? error : _this2.props.intl.formatMessage(error.toJS())
        }));
      }));
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this3 = this;

      var errors = this.renderErrors();
      return _react.default.createElement(_TextField.default, {
        className: this.props.className,
        autoComplete: "off",
        fullWidth: true,
        type: this.props.type,
        value: this.props.input.value.toString(),
        label: this.props.label && this.props.intl.formatMessage({
          id: this.props.label
        }),
        disabled: this.props.meta.submitting || this.props.disabled,
        error: !!this.props.meta.error,
        FormHelperTextProps: {
          component: errors ? "div" : undefined,
          classes: {
            root: this.props.classes.formHelper
          }
        },
        helperText: errors || undefined,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        inputRef: this.input,
        inputProps: {
          id: this.props.fieldId,
          onKeyDown: function onKeyDown(evt) {
            if (evt.keyCode === 13) {
              evt.preventDefault();
              evt.stopPropagation();
              if (_this3.props.onSubmit) _this3.props.onSubmit();
            }
          }
        }
      });
    }
  }, {
    key: "renderCheckbox",
    value: function renderCheckbox() {
      return _react.default.createElement(_FormControlLabel.default, {
        classes: {
          root: this.props.classes.label
        },
        control: _react.default.createElement(_Checkbox.default, {
          checked: this.props.input.value === "on",
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          value: "on",
          color: this.props.color
        }),
        label: this.props.intl.formatMessage({
          id: this.props.label
        })
      });
    }
  }, {
    key: "renderDropdown",
    value: function renderDropdown() {
      var _this4 = this;

      var errors = this.renderErrors();
      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: "filled",
        fullWidth: true,
        error: !!this.props.meta.error
      }, _react.default.createElement(_InputLabel.default, {
        htmlFor: this.props.fieldId
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.label
      })), _react.default.createElement(_Select.default, {
        value: this.props.input.value,
        disabled: this.props.meta.submitting || this.props.disabled,
        onChange: this.handleChange,
        input: _react.default.createElement(_FilledInput.default, {
          id: this.props.fieldId,
          inputProps: {
            onKeyDown: function onKeyDown(evt) {
              if (evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();
                if (_this4.props.onSubmit) _this4.props.onSubmit();
              }
            }
          }
        })
      }, _.map(this.props.options, function (item, index) {
        return _react.default.createElement(_MenuItem.default, {
          key: "item-".concat(index),
          value: item.value
        }, item.label);
      })), errors && _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, errors));
    }
  }, {
    key: "render",
    value: function render() {
      switch (this.props.type) {
        case "text":
        case "password":
          return this.renderInput();

        case "checkbox":
          return this.renderCheckbox();

        case "dropdown":
          return this.renderDropdown();
      }

      return null;
    }
  }]);

  return FieldComponent;
}(_react.default.PureComponent);

_defineProperty(FieldComponent, "defaultProps", {
  color: "primary"
});

var LocalizedField = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(FieldComponent));

var FormField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormField, _React$Component);

  function FormField(props) {
    var _this5;

    _classCallCheck(this, FormField);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(FormField).call(this, props));
    _this5.normalize = _this5.normalize.bind(_assertThisInitialized(_assertThisInitialized(_this5)));
    return _this5;
  }

  _createClass(FormField, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual.default)(this.props.formFields, nextProps.formFields) || this.props.name !== nextProps.name || this.props.type !== nextProps.type || this.props.options !== nextProps.options || this.props.autoFocus !== nextProps.autoFocus || this.props.disabled !== nextProps.disabled;
    }
  }, {
    key: "normalize",
    value: function normalize(value) {
      if (!this.props.formFields[this.props.name]) return value;
      var options = this.props.formFields[this.props.name].normalize;
      if (!options) return value;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return _normalize2.default.apply(void 0, [this.props.formProps, options, value].concat(args));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          formFields = _this$props.formFields,
          formProps = _this$props.formProps,
          name = _this$props.name,
          type = _this$props.type,
          fieldProps = _objectWithoutProperties(_this$props, ["formFields", "formProps", "name", "type"]); // eslint-disable-line


      return _react.default.createElement(_immutable.Field, _extends({
        component: LocalizedField,
        fieldId: "input-".concat(name),
        name: name,
        type: type,
        normalize: this.normalize,
        label: formFields[name] && formFields[name].label
      }, fieldProps));
    }
  }]);

  return FormField;
}(_react.default.Component);

var _default = FormField;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("react-redux/lib/utils/shallowEqual");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FilledInput");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InfoOutlined");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var material = __webpack_require__(92);

var daemon = __webpack_require__(93);

module.exports = {
  defaultTheme: "daemon",
  names: {
    daemon: "Daemon",
    material: "Material"
  },
  themes: {
    daemon: daemon,
    material: material
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("pako");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("utf8");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("base64util");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("json-immutable");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _app = _interopRequireWildcard(__webpack_require__(87));

var _router = _interopRequireDefault(__webpack_require__(18));

var _reactRedux = __webpack_require__(13);

var _styles = __webpack_require__(3);

var _jss = __webpack_require__(78);

var _CssBaseline = _interopRequireDefault(__webpack_require__(88));

var _jssExtend = _interopRequireDefault(__webpack_require__(89));

var _JssProvider = _interopRequireDefault(__webpack_require__(90));

var _pageContext = _interopRequireDefault(__webpack_require__(91));

var _serialize = _interopRequireDefault(__webpack_require__(94));

var _deserialize = _interopRequireDefault(__webpack_require__(95));

var _store = _interopRequireDefault(__webpack_require__(96));

var _app2 = __webpack_require__(7);

var _auth = __webpack_require__(8);

var _constants = _interopRequireDefault(__webpack_require__(6));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(20));

var _IntlProvider = _interopRequireDefault(__webpack_require__(100));

var _DateProvider = _interopRequireDefault(__webpack_require__(102));

var _Layout = _interopRequireDefault(__webpack_require__(106));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Configure JSS
var jss = (0, _jss.create)({
  plugins: _toConsumableArray((0, _styles.jssPreset)().plugins).concat([(0, _jssExtend.default)()])
});

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  _createClass(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, ctx, _getStore, isCreated, store, req, res, err, query, statusCode, pageProps;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                _getStore = (0, _store.default)(), isCreated = _getStore.isCreated, store = _getStore.store;
                ctx.store = store;
                req = ctx.req, res = ctx.res, err = ctx.err, query = ctx.query;

                if (!isCreated) {
                  _context.next = 18;
                  break;
                }

                _context.t0 = store;
                _context.t1 = _app2.appOperations;
                _context.t2 = req && req.getAuthStatus;

                if (!_context.t2) {
                  _context.next = 12;
                  break;
                }

                _context.next = 11;
                return req.getAuthStatus();

              case 11:
                _context.t2 = _context.sent;

              case 12:
                _context.t3 = _context.t2;
                _context.t4 = req && req.googleMapsKey;
                _context.t5 = {
                  status: _context.t3,
                  googleMapsKey: _context.t4
                };
                _context.t6 = _context.t1.create.call(_context.t1, _context.t5);
                _context.next = 18;
                return _context.t0.dispatch.call(_context.t0, _context.t6);

              case 18:
                statusCode = res ? res.statusCode : err ? err.statusCode : null;
                if (!_.isFinite(statusCode) || statusCode < 200) statusCode = 200;

                if (!(_app2.appSelectors.getStatusCode(store.getState()) !== statusCode)) {
                  _context.next = 23;
                  break;
                }

                _context.next = 23;
                return store.dispatch(_app2.appOperations.setStatusCode({
                  code: statusCode
                }));

              case 23:
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 28;
                  break;
                }

                _context.next = 27;
                return Component.getInitialProps(ctx);

              case 27:
                pageProps = _context.sent;

              case 28:
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  locale: query.locale,
                  theme: query.theme,
                  state: (0, _serialize.default)(store.getState())
                });

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this, props));

    var _getStore2 = (0, _store.default)((0, _deserialize.default)(props.state)),
        store = _getStore2.store;

    _this.store = store;
    store.dispatch(_app2.appOperations.init());
    var locale = props.locale;
    if (!locale) locale = _app2.appSelectors.getLocale(store.getState());
    store.dispatch(_app2.appOperations.setLocale({
      locale: locale
    }));
    _this.pageContext = (0, _pageContext.default)(props.theme);
    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (false) { var jssStyles; }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = (0, _app.createUrl)(router);
      var path = router.pathname;
      var title = _constants.default.pages[path] && _constants.default.pages[path].title;
      if (false) {}
      return _react.default.createElement(_app.Container, null, _react.default.createElement(_reactRedux.Provider, {
        store: this.store
      }, _react.default.createElement(_IntlProvider.default, null, _react.default.createElement(_DateProvider.default, null, _react.default.createElement(_JssProvider.default, {
        jss: jss,
        registry: this.pageContext.sheetsRegistry,
        generateClassName: this.pageContext.generateClassName
      }, _react.default.createElement(_styles.MuiThemeProvider, {
        theme: this.pageContext.theme,
        sheetsManager: this.pageContext.sheetsManager
      }, _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_Layout.default, {
        title: title
      }, _react.default.createElement(Component, _extends({}, pageProps, {
        url: url,
        store: this.store,
        pageContext: this.pageContext
      })))))))));
    }
  }]);

  return MyApp;
}(_app.default);

var _default = MyApp;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("jss-extend");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPageContext;

var _jss = __webpack_require__(78);

var _styles = __webpack_require__(3);

var _themes = _interopRequireDefault(__webpack_require__(79));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */
function createPageContext(themeName) {
  var theme = _themes.default.themes[themeName];
  if (!theme && _themes.default.themes[_themes.default.defaultTheme]) theme = _themes.default.themes[_themes.default.defaultTheme];
  if (!theme) theme = {};
  return {
    theme: (0, _styles.createMuiTheme)(theme),
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new _jss.SheetsRegistry(),
    // The standard class name generator.
    generateClassName: (0, _styles.createGenerateClassName)()
  };
}

function getPageContext(themeName) {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (true) {
    return createPageContext(themeName);
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext(themeName);
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var primary = "#95acbd";
var secondary = "#53dc7f";
var pageBackground = "#f0f4f8";
var normalBackground = "#f0f4f8";
var disabledBackground = "#e0e4e8";
var textNormal = "rgba(0, 42, 70, 0.87)";
var textDark = "rgba(0, 42, 70, 0.54)";
var textDisabled = "rgba(0, 42, 70, 0.38)";
var textContrast = "#fefefe";
var fontSize = 14;
module.exports = {
  name: "material",
  wallpaper: "/static/img/bg.jpg?v=3",
  palette: {
    primary: {
      main: primary,
      contrastText: textContrast
    },
    secondary: {
      main: secondary,
      contrastText: textContrast
    },
    background: {
      default: pageBackground,
      paper: "#ffffff"
    },
    text: {
      primary: textNormal,
      secondary: textDark,
      disabled: textDisabled,
      hint: textDisabled
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: fontSize,
    fontFamily: ["Roboto", "sans-serif"].join(", ")
  },
  shape: {
    borderRadius: 5
  },
  sidebar: {
    width: 15,
    height: 11,
    background: "#053551",
    color: "#8d9fad",
    backgroundHover: "#008abd",
    colorHover: "#ffffff",
    backgroundSelected: "#0099d1",
    colorSelected: "#ffffff",
    backgroundSelectedHover: "#00b1f2",
    colorSelectedHover: "#ffffff"
  },
  main: {
    spacing: 24
  },
  overrides: {
    MuiTableRow: {
      root: {
        height: ["100%", "!important"]
      },
      head: {
        height: ["100%", "!important"]
      }
    },
    MuiTableHead: {
      root: {
        background: primary
      }
    },
    MuiTableCell: {
      root: {
        border: ["1px solid ".concat(pageBackground), "!important"],
        "&.odd": {
          background: "#ffffff"
        },
        "&.even": {
          background: "#e3e9f2"
        },
        "&.selected": {
          background: ["padding-box #a5d9f8", "!important"],
          "&:first-child": {
            borderLeft: ["1px solid transparent", "!important"]
          },
          "&:last-child": {
            borderRight: ["1px solid transparent", "!important"]
          },
          "&:not(.spaced-odd):not(.spaced-even)": {
            border: ["1px solid #a5d9f8", "!important"]
          }
        },
        "&.expanded": {
          border: ["1px solid transparent", "!important"]
        },
        "&.spaced-odd": {
          height: ["auto", "!important"],
          background: ["padding-box #ffffff", "!important"],
          borderTop: ["4px solid transparent", "!important"],
          borderRight: ["none", "!important"],
          borderBottom: ["4px solid transparent", "!important"],
          borderLeft: ["none", "!important"],
          "&:first-child": {
            borderLeft: ["1px solid transparent", "!important"],
            borderTopLeftRadius: [4, "!important"],
            borderBottomLeftRadius: [4, "!important"]
          },
          "&:last-child": {
            borderRight: ["1px solid transparent", "!important"],
            borderTopRightRadius: [4, "!important"],
            borderBottomRightRadius: [4, "!important"]
          },
          "&.selected": {
            background: ["padding-box #a5d9f8", "!important"]
          }
        },
        "&.spaced-even": {
          height: ["auto", "!important"],
          background: ["padding-box #e3e9f2", "!important"],
          borderTop: ["4px solid transparent", "!important"],
          borderRight: ["none", "!important"],
          borderBottom: ["4px solid transparent", "!important"],
          borderLeft: ["none", "!important"],
          "&:first-child": {
            borderLeft: ["1px solid transparent", "!important"],
            borderTopLeftRadius: [4, "!important"],
            borderBottomLeftRadius: [4, "!important"]
          },
          "&:last-child": {
            borderRight: ["1px solid transparent", "!important"],
            borderTopRightRadius: [3, "!important"],
            borderBottomRightRadius: [3, "!important"]
          },
          "&.selected": {
            background: ["padding-box #a5d9f8", "!important"]
          }
        }
      },
      head: {
        fontSize: fontSize,
        color: textContrast
      },
      body: {
        fontSize: fontSize
      }
    },
    MuiButton: {
      label: {
        height: "1em"
      },
      contained: {
        "&:not($containedPrimary):not($containedSecondary)": {
          background: [normalBackground, "!important"]
        }
      },
      disabled: {
        "&:not($containedPrimary):not($containedSecondary)": {
          background: [disabledBackground, "!important"],
          boxShadow: ["0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)", "!important"]
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: ["#f9f9f9", "!important"],
        borderRadius: 4,
        "&:hover": {
          background: ["#ffffff", "!important"]
        }
      },
      focused: {
        background: ["#ffffff", "!important"]
      },
      underline: {
        "&:before": {
          borderBottom: ["none", "!important"]
        },
        "&:after": {
          borderBottom: ["none", "!important"]
        }
      }
    },
    MuiInputLabel: {
      root: {
        pointerEvents: "none",
        zIndex: 100
      }
    },
    MuiCheckbox: {
      checked: {
        color: ["#0092ff", "!important"]
      }
    },
    MuiListItemIcon: {
      root: {
        margin: [0, "!important"]
      }
    }
  }
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var primary = "#4c5066";
var secondary = "#b33711";
var bgPage = "#000000";
var bgNormal = "#2b2c33";
var bgLight = "#3b3c43";
var bgDisabled = "#2b2c2c";
var bgContrast = "#5b5c63";
var textNormal = "rgba(255, 255, 255, 0.87)";
var textDark = "rgba(255, 255, 255, 0.54)";
var textDisabled = "rgba(255, 255, 255, 0.38)";
var textContrast = "#ffffff";
var fontSize = 14;
module.exports = {
  name: "daemon",
  wallpaper: "/static/img/bg.jpg?v=3",
  palette: {
    primary: {
      main: primary,
      contrastText: textContrast
    },
    secondary: {
      main: secondary,
      contrastText: textContrast
    },
    background: {
      default: bgPage,
      paper: bgLight
    },
    text: {
      primary: textNormal,
      secondary: textDark,
      disabled: textDisabled,
      hint: textDisabled
    },
    divider: "rgba(255, 255, 255, 0.12)"
  },
  typography: {
    useNextVariants: true,
    fontSize: fontSize,
    fontFamily: ["Roboto", "sans-serif"].join(", ")
  },
  shape: {
    borderRadius: 3
  },
  sidebar: {
    computerWidth: 30,
    tabletWidth: 20,
    phoneWidth: 20,
    background: "rgba(0, 0, 0, 0.5)",
    color: textNormal,
    backgroundHover: "rgba(255, 255, 255, 0.05)",
    colorHover: textContrast,
    backgroundSelected: "rgba(255, 255, 255, 0.1)",
    colorSelected: textContrast,
    backgroundSelectedHover: "rgba(255, 255, 255, 0.15)",
    colorSelectedHover: textContrast
  },
  main: {
    wallpaper: "/static/img/bg.jpg",
    background: "linear-gradient(to right bottom, #3d3f4d, #222326)",
    spacing: 24
  },
  overrides: {
    MuiTableRow: {
      root: {
        height: ["100%", "!important"]
      },
      head: {
        height: ["100%", "!important"]
      }
    },
    MuiTableBody: {
      root: {
        "& tr:last-child th, & tr:last-child td": {
          borderBottom: "none"
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid ".concat(textDisabled)
      },
      head: {
        fontSize: fontSize,
        color: textContrast
      },
      body: {
        fontSize: fontSize
      }
    },
    MuiButton: {
      label: {
        height: "1em"
      },
      contained: {
        "&:not($containedPrimary):not($containedSecondary)": {
          background: bgNormal
        }
      },
      disabled: {
        "&:not($containedPrimary):not($containedSecondary)": {
          color: [textDark, "!important"],
          background: [bgDisabled, "!important"],
          boxShadow: ["0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)", "!important"]
        }
      }
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "2px solid ".concat(textNormal)
        },
        "&:after": {
          borderBottom: "2px solid ".concat(secondary)
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: [bgLight, "!important"],
        borderRadius: 4,
        "&:hover": {
          background: [bgContrast, "!important"]
        }
      },
      focused: {
        background: [bgContrast, "!important"]
      },
      underline: {
        "&:before": {
          borderBottom: ["none", "!important"]
        },
        "&:after": {
          borderBottom: ["none", "!important"]
        }
      }
    },
    MuiInputLabel: {
      root: {
        pointerEvents: "none",
        zIndex: 100
      },
      focused: {
        color: [secondary, "!important"]
      },
      filled: {
        color: [textDark, "!important"]
      }
    },
    MuiSwitch: {
      icon: {
        color: textNormal
      }
    },
    MuiListItemIcon: {
      root: {
        margin: [0, "!important"]
      }
    }
  }
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var pako = __webpack_require__(80);

var utf8 = __webpack_require__(81);

var _require = __webpack_require__(82),
    byteEncode = _require.byteEncode;

var _require2 = __webpack_require__(83),
    serialize = _require2.serialize;
/**
 * Sserialize Immutable state into BASE64 string
 */


module.exports = function (state) {
  if (!state) return "";
  state = state.setIn(["app", "di"], null);
  var json = serialize(state);
  var str = JSON.stringify(json, function (key, value) {
    return _.isString(value) ? utf8.encode(value) : value;
  });
  var output = byteEncode(pako.deflate(str, {
    to: "string"
  }));
  return output;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var pako = __webpack_require__(80);

var utf8 = __webpack_require__(81);

var _require = __webpack_require__(82),
    byteDecode = _require.byteDecode;

var _require2 = __webpack_require__(83),
    deserialize = _require2.deserialize;
/**
 * Deserialize BASE64 string into Immutable state
 */


module.exports = function (input) {
  if (!input) return undefined;
  var str = pako.inflate(byteDecode(input), {
    to: "string"
  });
  var json = JSON.parse(str, function (key, value) {
    return _.isString(value) ? utf8.decode(value) : value;
  });
  var state = deserialize(json);
  return state;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStore;

var _redux = __webpack_require__(97);

var _reduxImmutable = __webpack_require__(12);

var _reduxDevtoolsExtension = __webpack_require__(98);

var _reduxThunk = _interopRequireDefault(__webpack_require__(99));

var _immutable = __webpack_require__(15);

var _app = _interopRequireDefault(__webpack_require__(7));

var _auth = _interopRequireDefault(__webpack_require__(8));

var _users = _interopRequireDefault(__webpack_require__(44));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _reduxImmutable.combineReducers)({
  form: _immutable.reducer,
  app: _app.default,
  auth: _auth.default,
  users: _users.default
});
var middleware = (0, _redux.applyMiddleware)(_reduxThunk.default);
if (false) {}

var storeFactory = function storeFactory(initialState) {
  return (0, _redux.createStore)(rootReducer, initialState, middleware);
};

var __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getStore(initialState) {
  var store;
  var isCreated = false;

  if (true) {
    // Always make a new store if server,
    // otherwise state is shared between requests
    store = storeFactory(initialState);
    isCreated = true;
  } else {}

  return {
    store: store,
    isCreated: isCreated
  };
}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(13);

var _app = __webpack_require__(7);

var _IntlProvider = _interopRequireDefault(__webpack_require__(101));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _app.appSelectors.getLocale(state),
    created: _app.appSelectors.getCreated(state)
  };
};

var IntlProvider = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_IntlProvider.default);
var _default = IntlProvider;
exports.default = _default;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _reactIntl = __webpack_require__(9);

var _locales = _interopRequireDefault(__webpack_require__(19));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

_.forEach(_locales.default.getLocaleData(), function (data) {
  return (0, _reactIntl.addLocaleData)(data);
});

var Provider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Provider).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactIntl.IntlProvider, {
        key: this.props.locale,
        locale: this.props.locale,
        messages: _locales.default.messages[this.props.locale],
        initialNow: this.props.created
      }, this.props.children);
    }
  }]);

  return Provider;
}(_react.default.Component);

var _default = Provider;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(13);

var _app = __webpack_require__(7);

var _DateProvider = _interopRequireDefault(__webpack_require__(103));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _app.appSelectors.getLocale(state)
  };
};

var DateProvider = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_DateProvider.default);
var _default = DateProvider;
exports.default = _default;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _materialUiPickers = __webpack_require__(104);

var _moment = _interopRequireDefault(__webpack_require__(105));

var _moment2 = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Provider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Provider).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_materialUiPickers.MuiPickersUtilsProvider, {
        utils: _moment.default,
        locale: this.props.locale,
        moment: _moment2.default
      }, this.props.children);
    }
  }]);

  return Provider;
}(_react.default.Component);

var _default = Provider;
exports.default = _default;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("@date-io/moment");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(13);

var _reactIntl = __webpack_require__(9);

var _router = __webpack_require__(18);

var _app = __webpack_require__(7);

var _auth = __webpack_require__(8);

var _Layout = _interopRequireDefault(__webpack_require__(107));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: _auth.authSelectors.isAuthenticated(state),
    isStarted: _app.appSelectors.isStarted(state) && (!_auth.authSelectors.isAuthenticated(state) || _app.appSelectors.isConnected(state)),
    isError: _app.appSelectors.getStatusCode(state) !== 200
  };
};

var Layout = (0, _router.withRouter)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_Layout.default)));
var _default = Layout;
exports.default = _default;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _head = _interopRequireDefault(__webpack_require__(108));

var _reactIntl = __webpack_require__(9);

var _styles = __webpack_require__(3);

var _CircularProgress = _interopRequireDefault(__webpack_require__(109));

var _Hidden = _interopRequireDefault(__webpack_require__(60));

var _Drawer = _interopRequireDefault(__webpack_require__(110));

var _SwipeableDrawer = _interopRequireDefault(__webpack_require__(111));

var _Sidebar = _interopRequireDefault(__webpack_require__(112));

var _Header = _interopRequireDefault(__webpack_require__(124));

var _AppAuthModal = _interopRequireDefault(__webpack_require__(138));

__webpack_require__(145);

var _styledScroll = _interopRequireDefault(__webpack_require__(147));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _$merge, _main;

  return {
    "@global": {
      html: {
        fontSize: "".concat(theme.typography.fontSize, "px")
      },
      body: _.merge({
        fontFamily: theme.typography.fontFamily,
        background: theme.palette.background.default + (theme.main.wallpaper ? " url(\"".concat(theme.main.wallpaper, "\") top left / 100vw 100vh no-repeat fixed") : ""),
        color: theme.palette.text.primary
      }, (0, _styledScroll.default)(theme)),
      pre: {
        fontFamily: '"Roboto Mono", monospace'
      }
    },
    app: {
      position: "relative"
    },
    backdrop: {
      background: theme.palette.background.default,
      opacity: 0.8,
      zIndex: 10000,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    spinner: {
      position: "fixed",
      width: 60,
      top: "50vh",
      left: "50vw",
      transform: "translate3d(-50%, -50%, 0)",
      color: theme.palette.primary.contrastText
    },
    sidebar: _.merge((_$merge = {
      background: theme.sidebar.background,
      overflowX: "hidden",
      width: theme.sidebar.computerWidth * theme.spacing.unit
    }, _defineProperty(_$merge, theme.breakpoints.between("sm", "md"), {
      width: theme.sidebar.tabletWidth * theme.spacing.unit
    }), _defineProperty(_$merge, theme.breakpoints.down("xs"), {
      width: theme.sidebar.phoneWidth * theme.spacing.unit
    }), _$merge), (0, _styledScroll.default)(theme)),
    main: (_main = {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginLeft: theme.sidebar.computerWidth * theme.spacing.unit
    }, _defineProperty(_main, theme.breakpoints.between("sm", "md"), {
      marginLeft: theme.sidebar.tabletWidth * theme.spacing.unit
    }), _defineProperty(_main, theme.breakpoints.down("xs"), {
      marginLeft: 0
    }), _main)
  };
};

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));
    _this.state = {
      isSidebarOpen: false
    };
    _this.handleSidebarToggle = _this.handleSidebarToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSidebarClose = _this.handleSidebarClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Layout, [{
    key: "handleSidebarToggle",
    value: function handleSidebarToggle() {
      this.setState({
        isSidebarOpen: !this.state.isSidebarOpen
      });
    }
  }, {
    key: "handleSidebarClose",
    value: function handleSidebarClose() {
      if (this.state.isSidebarOpen) this.setState({
        isSidebarOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "app"
      }, this.props.title && _react.default.createElement(_head.default, null, _react.default.createElement("title", null, this.props.intl.formatMessage({
        id: this.props.title
      }))), this.props.isAuthenticated && _react.default.createElement(_Hidden.default, {
        implementation: "css",
        smUp: true
      }, _react.default.createElement(_SwipeableDrawer.default, {
        open: this.state.isSidebarOpen,
        onOpen: this.handleSidebarToggle,
        onClose: this.handleSidebarClose
      }, _react.default.createElement(_Sidebar.default, {
        onMenuClick: this.handleSidebarClose
      }))), this.props.isAuthenticated && _react.default.createElement(_Hidden.default, {
        implementation: "css",
        xsDown: true
      }, _react.default.createElement(_Drawer.default, {
        variant: "permanent",
        open: true,
        classes: {
          paper: this.props.classes.sidebar
        }
      }, _react.default.createElement(_Sidebar.default, {
        onMenuClick: this.handleSidebarClose
      }))), this.props.isAuthenticated && _react.default.createElement("main", {
        className: this.props.classes.main
      }, !this.props.isError && _react.default.createElement(_Header.default, null), this.props.children), !this.props.isAuthenticated && this.props.children, !this.props.isStarted && !this.props.isError && _react.default.createElement("div", {
        className: this.props.classes.backdrop
      }, _react.default.createElement("div", {
        className: this.props.classes.spinner
      }, _react.default.createElement(_CircularProgress.default, {
        color: "inherit",
        size: 60
      }))), _react.default.createElement(_AppAuthModal.default, null));
    }
  }]);

  return Layout;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Layout);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(13);

var _router = __webpack_require__(18);

var _reactIntl = __webpack_require__(9);

var _Sidebar = _interopRequireDefault(__webpack_require__(113));

var _auth = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: _auth.authSelectors.getRoles(state)
  };
};

var Sidebar = (0, _router.withRouter)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(_Sidebar.default)));
var _default = Sidebar;
exports.default = _default;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(20));

var _reactIntl = __webpack_require__(9);

var _styles = __webpack_require__(3);

var _Typography = _interopRequireDefault(__webpack_require__(84));

var _MenuList = _interopRequireDefault(__webpack_require__(114));

var _MenuItem = _interopRequireDefault(__webpack_require__(42));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(45));

var _ListItemText = _interopRequireDefault(__webpack_require__(46));

var _Dashboard = _interopRequireDefault(__webpack_require__(115));

var _Ballot = _interopRequireDefault(__webpack_require__(116));

var _InsertChart = _interopRequireDefault(__webpack_require__(117));

var _TableChart = _interopRequireDefault(__webpack_require__(118));

var _Map = _interopRequireDefault(__webpack_require__(119));

var _SpeakerNotes = _interopRequireDefault(__webpack_require__(120));

var _BrightnessAuto = _interopRequireDefault(__webpack_require__(121));

var _Pets = _interopRequireDefault(__webpack_require__(122));

var _People = _interopRequireDefault(__webpack_require__(123));

var _constants = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = function styles(theme) {
  return {
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "stretch"
    },
    grow: {
      flex: 1
    },
    link: {
      display: "block",
      margin: "1rem",
      textAlign: "center",
      color: theme.sidebar.color,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.secondary.main
      }
    },
    list: {
      width: theme.sidebar.width * theme.spacing.unit,
      padding: 0
    },
    avatar: {
      margin: "1rem 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    item: {
      background: [theme.sidebar.background, "!important"],
      color: [theme.sidebar.color, "!important"],
      justifyContent: "center",
      "& svg, & span": {
        color: [theme.sidebar.color, "!important"]
      },
      "&:hover": {
        background: [theme.sidebar.backgroundHover, "!important"],
        color: [theme.sidebar.colorHover, "!important"],
        "& svg, & span": {
          color: [theme.sidebar.colorHover, "!important"]
        }
      }
    },
    itemSelected: {
      background: [theme.sidebar.backgroundSelected, "!important"],
      color: [theme.sidebar.colorSelected, "!important"],
      "& svg, & span": {
        color: [theme.sidebar.colorSelected, "!important"]
      },
      "&:hover": {
        background: [theme.sidebar.backgroundSelectedHover, "!important"],
        color: [theme.sidebar.colorSelectedHover, "!important"],
        "& svg, & span": {
          color: [theme.sidebar.colorSelectedHover, "!important"]
        }
      }
    }
  };
};

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: "handleMenuClick",
    value: function handleMenuClick(path) {
      this.props.router.push(path);
      this.props.onMenuClick();
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      return _react.default.createElement("div", {
        className: this.props.classes.avatar
      }, _react.default.createElement("img", {
        src: "".concat(_constants.default.apiBase, "/avatars/0")
      }), _.includes(this.props.roles, _constants.default.roles.ANONYMOUS) && _react.default.createElement(_Typography.default, {
        variant: "subtitle1"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "SIDEBAR_ANONYMOUS"
      })));
    }
  }, {
    key: "renderItem",
    value: function renderItem(path) {
      var _this = this;

      if (!path || !_constants.default.pages[path] || !(0, _isRouteAllowed.default)(path, this.props.roles)) {
        return null;
      }

      var _constants$pages$path = _constants.default.pages[path],
          icon = _constants$pages$path.icon,
          menu = _constants$pages$path.menu;
      if (!icon && !menu) return null;
      return _react.default.createElement(_MenuItem.default, {
        key: "page-".concat(path),
        classes: {
          root: this.props.classes.item,
          selected: this.props.classes.itemSelected
        },
        selected: this.props.router.pathname === path,
        onClick: function onClick() {
          return _this.handleMenuClick(path);
        }
      }, icon === "dashboard" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_Dashboard.default, null)), icon === "forms" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_Ballot.default, null)), icon === "charts" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_InsertChart.default, null)), icon === "tables" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_TableChart.default, null)), icon === "maps" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_Map.default, null)), icon === "notifications" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_SpeakerNotes.default, null)), icon === "typography" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_BrightnessAuto.default, null)), icon === "icons" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_Pets.default, null)), icon === "users" && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_People.default, null)), !!menu && _react.default.createElement(_ListItemText.default, {
        primary: this.props.intl.formatMessage({
          id: menu
        })
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: this.props.classes.root
      }, _react.default.createElement(_MenuList.default, {
        classes: {
          root: this.props.classes.list
        },
        subheader: this.renderHeader()
      }, _.map(_.keys(_constants.default.pages), function (path) {
        return _this2.renderItem(path);
      })), _react.default.createElement("div", {
        className: this.props.classes.grow
      }), _react.default.createElement("div", null, _react.default.createElement("a", {
        href: "javascript:void(0)",
        className: this.props.classes.link,
        onClick: function onClick() {
          return window.open("".concat(_constants.default.apiBase, "/redirect/benchmarks"));
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "SIDEBAR_BENCHMARKS_LINK"
      })), _react.default.createElement("a", {
        href: "javascript:void(0)",
        className: this.props.classes.link,
        onClick: function onClick() {
          return window.open("".concat(_constants.default.apiBase, "/redirect/responsiveness"));
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "SIDEBAR_RESPONSIVENESS_LINK"
      }))));
    }
  }]);

  return Sidebar;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Sidebar);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Ballot");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InsertChart");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TableChart");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Map");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SpeakerNotes");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BrightnessAuto");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Pets");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(13);

var _Header = _interopRequireDefault(__webpack_require__(125));

var _app = __webpack_require__(7);

var _auth = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    cookie: _app.appSelectors.getService(state, {
      service: "cookie"
    }),
    locale: _app.appSelectors.getLocale(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetLocale: function onSetLocale(locale) {
      return dispatch(_app.appOperations.setLocale({
        locale: locale
      }));
    },
    onSignOut: function onSignOut() {
      return dispatch(_auth.authOperations.signOut());
    }
  };
};

var Header = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Header.default);
var _default = Header;
exports.default = _default;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _reactIntl = __webpack_require__(9);

var _styles = __webpack_require__(3);

var _colorManipulator = __webpack_require__(126);

var _Hidden = _interopRequireDefault(__webpack_require__(60));

var _AppBar = _interopRequireDefault(__webpack_require__(127));

var _Toolbar = _interopRequireDefault(__webpack_require__(128));

var _Button = _interopRequireDefault(__webpack_require__(43));

var _IconButton = _interopRequireDefault(__webpack_require__(129));

var _InputBase = _interopRequireDefault(__webpack_require__(130));

var _Menu = _interopRequireDefault(__webpack_require__(61));

var _MenuItem = _interopRequireDefault(__webpack_require__(42));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(45));

var _ListItemText = _interopRequireDefault(__webpack_require__(46));

var _Badge = _interopRequireDefault(__webpack_require__(131));

var _Search = _interopRequireDefault(__webpack_require__(132));

var _Mail = _interopRequireDefault(__webpack_require__(133));

var _AccountBox = _interopRequireDefault(__webpack_require__(134));

var _ColorLens = _interopRequireDefault(__webpack_require__(135));

var _PowerSettingsNew = _interopRequireDefault(__webpack_require__(136));

var _reactFlags = _interopRequireDefault(__webpack_require__(137));

var _locales = _interopRequireDefault(__webpack_require__(19));

var _themes = _interopRequireDefault(__webpack_require__(79));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _root, _inputInput;

  return {
    root: (_root = {
      position: "fixed",
      right: 0,
      top: 0,
      height: 50,
      left: theme.sidebar.computerWidth * theme.spacing.unit
    }, _defineProperty(_root, theme.breakpoints.between("sm", "md"), {
      left: theme.sidebar.tabletWidth * theme.spacing.unit
    }), _defineProperty(_root, theme.breakpoints.down("xs"), {
      left: 0
    }), _root),
    bar: {
      transition: "all 0.25s ease-in-out"
    },
    grow: {
      flexGrow: 1
    },
    search: _defineProperty({
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing.unit,
      marginLeft: theme.spacing.unit
    }, theme.breakpoints.down("md"), {
      flexGrow: 1
    }),
    searchIcon: _defineProperty({
      width: theme.spacing.unit * 5,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, theme.breakpoints.down("xs"), {
      display: "none"
    }),
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: (_inputInput = {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 5,
      transition: theme.transitions.create("width"),
      width: 300
    }, _defineProperty(_inputInput, theme.breakpoints.down("md"), {
      width: "100%"
    }), _defineProperty(_inputInput, theme.breakpoints.down("xs"), {
      paddingLeft: theme.spacing.unit
    }), _inputInput),
    menu: {
      background: theme.palette.primary.main,
      "& svg": {
        color: [theme.palette.primary.contrastText, "!important"]
      }
    }
  };
};

var Header =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Header, _React$PureComponent);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      isWrapperHovered: false,
      isBarHovered: false,
      anchorLocales: null,
      anchorThemes: null
    };
    _this.isDestroyed = false;
    _this.handleWrapperMouseEnter = _this.handleWrapperMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleWrapperMouseLeave = _this.handleWrapperMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleWrapperClick = _this.handleWrapperClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBarMouseEnter = _this.handleBarMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBarMouseLeave = _this.handleBarMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleLocalesOpen = _this.handleLocalesOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleThemesOpen = _this.handleThemesOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSignOut = _this.handleSignOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isDestroyed = true;
    }
  }, {
    key: "handleWrapperMouseEnter",
    value: function handleWrapperMouseEnter() {
      if (!this.state.isWrapperHovered) this.setState({
        isWrapperHovered: true
      });
    }
  }, {
    key: "handleWrapperMouseLeave",
    value: function handleWrapperMouseLeave() {
      if (this.state.isWrapperHovered) this.setState({
        isWrapperHovered: false
      });
    }
  }, {
    key: "handleWrapperClick",
    value: function handleWrapperClick(event) {
      var _this2 = this;

      event.stopPropagation();
      if (!this.state.isWrapperHovered) this.setState({
        isWrapperHovered: true
      });

      var onWindowClick = function onWindowClick() {
        window.removeEventListener("click", onWindowClick);
        if (!_this2.isDestroyed && _this2.state.isWrapperHovered) _this2.setState({
          isWrapperHovered: false
        });
      };

      window.addEventListener("click", onWindowClick);
    }
  }, {
    key: "handleBarMouseEnter",
    value: function handleBarMouseEnter() {
      if (!this.state.isBarHovered) this.setState({
        isBarHovered: true
      });
    }
  }, {
    key: "handleBarMouseLeave",
    value: function handleBarMouseLeave() {
      if (this.state.isBarHovered) this.setState({
        isBarHovered: false
      });
    }
  }, {
    key: "handleLocalesOpen",
    value: function handleLocalesOpen(event) {
      this.setState({
        anchorLocales: event.currentTarget
      });
    }
  }, {
    key: "handleLocaleSwitch",
    value: function handleLocaleSwitch(locale) {
      this.props.cookie.set("locale", locale);
      this.handleMenuClose();
      this.props.onSetLocale(locale);
    }
  }, {
    key: "handleThemesOpen",
    value: function handleThemesOpen(event) {
      this.setState({
        anchorThemes: event.currentTarget
      });
    }
  }, {
    key: "handleThemeSwitch",
    value: function handleThemeSwitch(theme) {
      this.props.cookie.set("theme", theme);
      this.handleMenuClose();
      window.location.reload(true);
    }
  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorLocales: null,
        anchorThemes: null,
        isWrapperHovered: false,
        isBarHovered: false
      });
    }
  }, {
    key: "handleSignOut",
    value: function handleSignOut() {
      this.props.onSignOut();
    }
  }, {
    key: "renderLocales",
    value: function renderLocales() {
      var _this3 = this;

      return _react.default.createElement(_Menu.default, {
        classes: {
          paper: this.props.classes.menu
        },
        anchorEl: this.state.anchorLocales,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        open: !!this.state.anchorLocales,
        onClose: this.handleMenuClose
      }, _.map(_locales.default.locales, function (locale) {
        return _react.default.createElement(_MenuItem.default, {
          key: "locale-".concat(locale),
          onClick: function onClick() {
            return _this3.handleLocaleSwitch(locale);
          }
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_reactFlags.default, {
          name: _locales.default.flags[locale],
          format: "png",
          pngSize: 24,
          basePath: "" + "/static/img/flags"
        })), _react.default.createElement(_ListItemText.default, null, _locales.default.names[locale]));
      }));
    }
  }, {
    key: "renderThemes",
    value: function renderThemes() {
      var _this4 = this;

      return _react.default.createElement(_Menu.default, {
        classes: {
          paper: this.props.classes.menu
        },
        anchorEl: this.state.anchorThemes,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        open: !!this.state.anchorThemes,
        onClose: this.handleMenuClose
      }, _.map(_.keys(_themes.default.names), function (theme) {
        return _react.default.createElement(_MenuItem.default, {
          key: "theme-".concat(theme),
          onClick: function onClick() {
            return _this4.handleThemeSwitch(theme);
          }
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_ColorLens.default, null)), _react.default.createElement(_ListItemText.default, null, _themes.default.names[theme]));
      }));
    }
  }, {
    key: "renderBar",
    value: function renderBar(isPermanent) {
      var isVisible = isPermanent || this.state.isWrapperHovered || this.state.isBarHovered;
      return _react.default.createElement(_AppBar.default, {
        className: this.props.classes.bar,
        elevation: 10,
        position: "static",
        color: isVisible ? "primary" : "secondary",
        onMouseEnter: this.handleBarMouseEnter,
        onMouseLeave: this.handleBarMouseLeave,
        style: {
          transform: "translate3d(0, ".concat(isVisible ? "0" : "-95%", ", 0)")
        }
      }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Hidden.default, {
        smDown: true
      }, _react.default.createElement(_Button.default, {
        color: "inherit"
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 4,
        color: "secondary"
      }, _react.default.createElement(_Mail.default, null)), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "HEADER_INBOX_LABEL"
      })), _react.default.createElement(_Button.default, {
        color: "inherit"
      }, _react.default.createElement(_AccountBox.default, null), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "HEADER_PROFILE_LABEL"
      })), _react.default.createElement(_Button.default, {
        color: "inherit",
        onClick: this.handleLocalesOpen
      }, _react.default.createElement(_reactFlags.default, {
        name: _locales.default.flags[this.props.locale],
        format: "png",
        pngSize: 24,
        basePath: "" + "/static/img/flags"
      }), "\xA0\xA0", _.upperCase(this.props.locale)), _react.default.createElement(_Button.default, {
        color: "inherit",
        onClick: this.handleThemesOpen
      }, _react.default.createElement(_ColorLens.default, null), "\xA0\xA0", _.upperFirst(this.props.theme.name))), _react.default.createElement(_Hidden.default, {
        mdUp: true
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit"
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 4,
        color: "secondary"
      }, _react.default.createElement(_Mail.default, null))), _react.default.createElement(_IconButton.default, {
        color: "inherit"
      }, _react.default.createElement(_AccountBox.default, null)), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleLocalesOpen
      }, _react.default.createElement(_reactFlags.default, {
        name: _locales.default.flags[this.props.locale],
        format: "png",
        pngSize: 24,
        basePath: "" + "/static/img/flags"
      })), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleThemesOpen
      }, _react.default.createElement(_ColorLens.default, null))), _react.default.createElement(_Hidden.default, {
        smDown: true
      }, _react.default.createElement("div", {
        className: this.props.classes.grow
      })), _react.default.createElement("div", {
        className: this.props.classes.search
      }, _react.default.createElement("div", {
        className: this.props.classes.searchIcon
      }, _react.default.createElement(_Search.default, null)), _react.default.createElement(_InputBase.default, {
        placeholder: "Search\u2026",
        classes: {
          root: this.props.classes.inputRoot,
          input: this.props.classes.inputInput
        }
      })), _react.default.createElement(_Hidden.default, {
        smDown: true
      }, _react.default.createElement("div", {
        className: this.props.classes.grow
      })), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleSignOut
      }, _react.default.createElement(_PowerSettingsNew.default, null))), this.renderLocales(), this.renderThemes());
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.classes.root,
        onMouseEnter: this.handleWrapperMouseEnter,
        onMouseLeave: this.handleWrapperMouseLeave,
        onClick: this.handleWrapperClick
      }, _react.default.createElement(_Hidden.default, {
        smUp: true,
        initialWidth: "lg"
      }, this.renderBar(true)), _react.default.createElement(_Hidden.default, {
        xsDown: true,
        initialWidth: "lg"
      }, this.renderBar(false)));
    }
  }]);

  return Header;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Header);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ColorLens");

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PowerSettingsNew");

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = require("react-flags");

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _immutable = __webpack_require__(14);

var _reactIntl = __webpack_require__(9);

var _immutable2 = __webpack_require__(15);

var _reduxForm = __webpack_require__(62);

var _app = __webpack_require__(7);

var _auth = __webpack_require__(8);

var _createForm = _interopRequireDefault(__webpack_require__(63));

var _AppAuthModal = _interopRequireDefault(__webpack_require__(139));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formName = _AppAuthModal.default.formName;

var mapStateToProps = function mapStateToProps(state) {
  return {
    fieldValues: _defineProperty({}, formName, (0, _immutable2.getFormValues)(formName)(state) || (0, _immutable.Map)()),
    fieldErrors: _defineProperty({}, formName, (0, _immutable2.getFormAsyncErrors)(formName)(state) || (0, _immutable.Map)()),
    isOpen: _app.appSelectors.isStarted(state) && _app.appSelectors.getStatusCode(state) === 200 && !_auth.authSelectors.isAuthenticated(state),
    providers: _auth.authSelectors.getAllProviders(state),
    cookie: _app.appSelectors.getService(state, {
      service: "cookie"
    })
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    updateValidation: function () {
      var _updateValidation = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(errors) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return dispatch((0, _reduxForm.startAsyncValidation)(formName));

              case 2:
                _context.next = 4;
                return dispatch((0, _reduxForm.stopAsyncValidation)(formName, errors));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function updateValidation(_x) {
        return _updateValidation.apply(this, arguments);
      };
    }(),
    onSignIn: function onSignIn(email, password) {
      return dispatch(_auth.authOperations.signIn({
        email: email,
        password: password
      }));
    },
    onSignUp: function onSignUp(email, password) {
      return dispatch(_auth.authOperations.signUp({
        email: email,
        password: password
      }));
    }
  };
};

var AppAuthModal = (0, _reactIntl.injectIntl)((0, _createForm.default)(_AppAuthModal.default, mapStateToProps, mapDispatchToProps));
var _default = AppAuthModal;
exports.default = _default;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _reactIntl = __webpack_require__(9);

var _immutable = __webpack_require__(15);

var _styles = __webpack_require__(3);

var _Dialog = _interopRequireDefault(__webpack_require__(50));

var _DialogActions = _interopRequireDefault(__webpack_require__(51));

var _DialogContent = _interopRequireDefault(__webpack_require__(52));

var _DialogContentText = _interopRequireDefault(__webpack_require__(53));

var _DialogTitle = _interopRequireDefault(__webpack_require__(54));

var _Grid = _interopRequireDefault(__webpack_require__(5));

var _Button = _interopRequireDefault(__webpack_require__(43));

var _Paper = _interopRequireDefault(__webpack_require__(140));

var _Typography = _interopRequireDefault(__webpack_require__(84));

var _Hidden = _interopRequireDefault(__webpack_require__(60));

var _red = _interopRequireDefault(__webpack_require__(47));

var _VisibilityOff = _interopRequireDefault(__webpack_require__(141));

var _Form2 = _interopRequireDefault(__webpack_require__(64));

var _Field = _interopRequireDefault(__webpack_require__(66));

var _constants = _interopRequireDefault(__webpack_require__(6));

var _facebook = _interopRequireDefault(__webpack_require__(142));

var _google = _interopRequireDefault(__webpack_require__(143));

var _twitter = _interopRequireDefault(__webpack_require__(144));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    paper: {
      background: theme.main.background
    },
    error: {
      color: _red.default[500]
    },
    actions: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "1rem"
    },
    credentialsPaper: {
      height: "100%",
      padding: "1rem 1rem 2rem"
    },
    credentialsLabel: {
      marginTop: "0.5rem",
      textAlign: "center"
    },
    anonymousButton: {
      width: "100%"
    },
    serviceLogo: {
      marginLeft: "0.5em",
      marginRight: "0.5em",
      verticalAlign: "middle",
      "& svg": {
        height: "1.8em",
        fill: "currentColor",
        verticalAlign: "middle"
      }
    },
    facebook: {
      width: "100%",
      color: theme.palette.primary.contrastText,
      background: ["#3b5998", "!important"],
      "&:hover": {
        background: ["#1b3978", "!important"]
      }
    },
    google: {
      width: "100%",
      color: theme.palette.primary.contrastText,
      background: ["#dd4b39", "!important"],
      "&:hover": {
        background: ["#bd2b19", "!important"]
      }
    },
    twitter: {
      width: "100%",
      color: theme.palette.primary.contrastText,
      background: ["#38A1F3", "!important"],
      "&:hover": {
        background: ["#1881d3", "!important"]
      }
    }
  };
};

var AppAuthModal =
/*#__PURE__*/
function (_Form) {
  _inherits(AppAuthModal, _Form);

  _createClass(AppAuthModal, null, [{
    key: "onSubmit",
    value: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values, dispatch, props) {
        var result, errors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, field, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, message;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.getValue(props, "isNewUser") === "yes")) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return props.onSignUp(this.getValue(props, "email"), this.getValue(props, "password"));

              case 3:
                result = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.next = 8;
                return props.onSignIn(this.getValue(props, "email"), this.getValue(props, "password"));

              case 8:
                result = _context.sent;

              case 9:
                if (!(result && _.isObject(result))) {
                  _context.next = 56;
                  break;
                }

                errors = {};
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 14;
                _iterator = _.keys(result)[Symbol.iterator]();

              case 16:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 41;
                  break;
                }

                field = _step.value;
                errors[field] = [];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 22;

                for (_iterator2 = result[field][Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  message = _step2.value;
                  errors[field].push({
                    id: message
                  });
                }

                _context.next = 30;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](22);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t0;

              case 30:
                _context.prev = 30;
                _context.prev = 31;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 33:
                _context.prev = 33;

                if (!_didIteratorError2) {
                  _context.next = 36;
                  break;
                }

                throw _iteratorError2;

              case 36:
                return _context.finish(33);

              case 37:
                return _context.finish(30);

              case 38:
                _iteratorNormalCompletion = true;
                _context.next = 16;
                break;

              case 41:
                _context.next = 47;
                break;

              case 43:
                _context.prev = 43;
                _context.t1 = _context["catch"](14);
                _didIteratorError = true;
                _iteratorError = _context.t1;

              case 47:
                _context.prev = 47;
                _context.prev = 48;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 50:
                _context.prev = 50;

                if (!_didIteratorError) {
                  _context.next = 53;
                  break;
                }

                throw _iteratorError;

              case 53:
                return _context.finish(50);

              case 54:
                return _context.finish(47);

              case 55:
                throw new _immutable.SubmissionError(errors);

              case 56:
                return _context.abrupt("return", result);

              case 57:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[14, 43, 47, 55], [22, 26, 30, 38], [31,, 33, 37], [48,, 50, 54]]);
      }));

      return function onSubmit(_x, _x2, _x3) {
        return _onSubmit.apply(this, arguments);
      };
    }()
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var state = {};

      if (prevState.isOpen !== nextProps.isOpen) {
        nextProps.dispatch(nextProps.change("isNewUser", "no"));
        nextProps.dispatch(nextProps.change("password", ""));
        nextProps.dispatch(nextProps.clearAsyncError("_"));
        state.isOpen = nextProps.isOpen;
        state.errors = null;
      }

      if (nextProps.error && nextProps.error.has("_")) state.errors = nextProps.error.get("_");
      return _.keys(state).length ? state : null;
    }
  }]);

  function AppAuthModal(props) {
    var _this;

    _classCallCheck(this, AppAuthModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppAuthModal).call(this, props));
    _this.state = {
      isOpen: props.isOpen,
      errors: null
    };
    _this.handleAnonymous = _this.handleAnonymous.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleProvider = _this.handleProvider.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(AppAuthModal, [{
    key: "handleAnonymous",
    value: function handleAnonymous() {
      this.props.onSignIn(null, null);
    }
  }, {
    key: "handleProvider",
    value: function handleProvider(provider) {
      this.props.cookie.set("redirect", window.location.pathname, 0.042);
      window.location.href = "".concat(_constants.default.apiBase, "/oauth/").concat(_.toLower(provider));
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  errors: null
                });
                _context2.next = 3;
                return _get(_getPrototypeOf(AppAuthModal.prototype), "submit", this).call(this);

              case 3:
                _context2.t0 = !_context2.sent;

                if (!_context2.t0) {
                  _context2.next = 6;
                  break;
                }

                _context2.t0 = !this.state.errors;

              case 6:
                if (!_context2.t0) {
                  _context2.next = 8;
                  break;
                }

                this.setState({
                  errors: ["APP_AUTH_FAILED"]
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function handleSubmit() {
        return _handleSubmit.apply(this, arguments);
      };
    }()
  }, {
    key: "renderButton",
    value: function renderButton(provider) {
      var _this2 = this;

      provider = _.toLower(provider);
      return _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "default",
        classes: {
          contained: this.props.classes[provider]
        },
        disabled: this.props.submitting || !_.includes(this.props.providers, provider),
        onClick: function onClick() {
          return _this2.handleProvider(provider);
        }
      }, _react.default.createElement(_Hidden.default, {
        xsDown: true
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "APP_AUTH_SERVICE_BUTTON"
      })), provider === "facebook" && _react.default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: _facebook.default
        },
        className: this.props.classes.serviceLogo
      }), provider === "google" && _react.default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: _google.default
        },
        className: this.props.classes.serviceLogo
      }), provider === "twitter" && _react.default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: _twitter.default
        },
        className: this.props.classes.serviceLogo
      }), _.upperFirst(provider));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement(_Dialog.default, {
        maxWidth: "md",
        fullWidth: true,
        classes: {
          paper: this.props.classes.paper
        },
        open: this.props.isOpen,
        onClose: _.noop
      }, _react.default.createElement(_DialogTitle.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "APP_AUTH_TITLE"
      })), this.state.errors && _react.default.createElement(_DialogContent.default, null, _.map(this.state.errors, function (error, index) {
        return _react.default.createElement(_DialogContentText.default, {
          key: "error-".concat(index),
          classes: {
            root: _this3.props.classes.error
          }
        }, _react.default.createElement(_reactIntl.FormattedMessage, {
          id: error
        }));
      })), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16,
        justify: "space-evenly",
        component: "form",
        noValidate: true,
        autoComplete: "off",
        onSubmit: this.handleSubmit
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16,
        direction: "column",
        justify: "center",
        item: true,
        xs: 12,
        sm: 6,
        md: 5
      }, _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        className: this.props.classes.anonymousButton,
        disabled: this.props.submitting,
        onClick: this.handleAnonymous
      }, _react.default.createElement(_VisibilityOff.default, null), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "APP_AUTH_ANONYMOUS_BUTTON"
      }))), _react.default.createElement(_Grid.default, {
        item: true
      }, this.renderButton(_constants.default.oauthProviders.FACEBOOK)), _react.default.createElement(_Grid.default, {
        item: true
      }, this.renderButton(_constants.default.oauthProviders.GOOGLE)), _react.default.createElement(_Grid.default, {
        item: true
      }, this.renderButton(_constants.default.oauthProviders.TWITTER))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6,
        md: 7
      }, _react.default.createElement(_Paper.default, {
        className: this.props.classes.credentialsPaper
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 8,
        direction: "column"
      }, _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Typography.default, {
        variant: "h5",
        className: this.props.classes.credentialsLabel
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "APP_AUTH_CREDENTIALS_LABEL"
      }))), _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Field.default, {
        formFields: this.constructor.fields,
        formProps: this.props,
        name: "isNewUser",
        type: "checkbox",
        color: "default",
        onSubmit: this.handleSubmit
      })), _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Field.default, {
        formFields: this.constructor.fields,
        formProps: this.props,
        name: "email",
        type: "text",
        onSubmit: this.handleSubmit
      })), _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Field.default, {
        formFields: this.constructor.fields,
        formProps: this.props,
        name: "password",
        type: "password",
        onSubmit: this.handleSubmit
      }))))))), _react.default.createElement(_DialogActions.default, {
        classes: {
          root: this.props.classes.actions
        }
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        disabled: this.props.submitting,
        onClick: this.handleSubmit
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "APP_AUTH_SUBMIT"
      }))));
    }
  }]);

  return AppAuthModal;
}(_Form2.default);

_defineProperty(AppAuthModal, "propTypes", _objectSpread({}, _Form2.default.propTypes, {
  intl: _reactIntl.intlShape,
  theme: _propTypes.default.object.isRequired,
  classes: _propTypes.default.object.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  providers: _propTypes.default.array.isRequired,
  cookie: _propTypes.default.object.isRequired,
  onSignIn: _propTypes.default.func.isRequired,
  onSignUp: _propTypes.default.func.isRequired
}));

_defineProperty(AppAuthModal, "formName", "signInForm");

_defineProperty(AppAuthModal, "fields", {
  isNewUser: {
    label: "APP_AUTH_NEW_USER_LABEL"
  },
  email: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required|email",
    label: "APP_AUTH_EMAIL_LABEL"
  },
  password: {
    validate: "required|password",
    label: "APP_AUTH_PASSWORD_LABEL"
  }
});

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(AppAuthModal);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 3.998v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h-3v-7h-2v-3h2v-2.5a3.5 3.5 0 0 1 3.5-3.5H19zm1-2H4c-1.105 0-1.99.895-1.99 2l-.01 16c0 1.104.895 2 2 2h16c1.103 0 2-.896 2-2v-16a2 2 0 0 0-2-2z\"></path></svg>"

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 11h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zm-13.869.143V13.2h3.504c-.175.857-1.051 2.571-3.504 2.571A3.771 3.771 0 0 1 4.365 12a3.771 3.771 0 0 1 3.766-3.771c1.227 0 2.015.514 2.453.942l1.664-1.542C11.198 6.6 9.796 6 8.131 6 4.715 6 2 8.657 2 12s2.715 6 6.131 6C11.635 18 14 15.6 14 12.171c0-.428 0-.685-.088-1.028h-5.78z\"></path></svg>"

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 5.894a8.304 8.304 0 0 1-2.357.636 4.064 4.064 0 0 0 1.804-2.235c-.792.463-1.67.8-2.605.98A4.128 4.128 0 0 0 15.847 4c-2.266 0-4.104 1.808-4.104 4.04 0 .316.037.624.107.92a11.711 11.711 0 0 1-8.458-4.22 3.972 3.972 0 0 0-.555 2.03c0 1.401.724 2.638 1.825 3.362a4.138 4.138 0 0 1-1.858-.505v.05c0 1.958 1.414 3.59 3.29 3.961a4.169 4.169 0 0 1-1.852.07c.522 1.604 2.037 2.772 3.833 2.804a8.315 8.315 0 0 1-5.096 1.73c-.331 0-.658-.02-.979-.057A11.748 11.748 0 0 0 8.29 20c7.547 0 11.674-6.155 11.674-11.493 0-.175-.004-.349-.011-.522A8.265 8.265 0 0 0 22 5.894z\"></path></svg>"

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(146);

/***/ }),
/* 146 */
/***/ (function(module, exports) {



/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    "&::-webkit-scrollbar": {
      "-webkitAppearance": "none",
      width: "".concat(theme.spacing.unit, "px"),
      height: "".concat(theme.spacing.unit, "px")
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent"
    },
    "&::-webkit-scrollbar-thumb": {
      cursor: "pointer",
      borderRadius: theme.shape.borderRadius / 2,
      background: theme.palette.primary.main,
      transition: "color 0.2s ease"
    },
    "&::-webkit-scrollbar-thumb:window-inactive": {
      background: theme.palette.primary.main
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: theme.palette.primary.light
    }
  };
};

exports.default = _default;

/***/ })
/******/ ]);