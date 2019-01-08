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
/******/ 	return __webpack_require__(__webpack_require__.s = 238);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

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
    PRODUCTION: "PRODUCTION",
    RD: "RD",
    PURCHASING: "PURCHASING",
    MARKETING: "MARKETING",
    HR: "HR",
    ACCOUNTING: "ACCOUNTING"
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelectors = exports.authOperations = exports.authTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(33));

var authTypes = _interopRequireWildcard(__webpack_require__(13));

exports.authTypes = authTypes;

var authOperations = _interopRequireWildcard(__webpack_require__(34));

exports.authOperations = authOperations;

var authSelectors = _interopRequireWildcard(__webpack_require__(17));

exports.authSelectors = authSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(24));

var appTypes = _interopRequireWildcard(__webpack_require__(12));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__(29));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__(42));

exports.appSelectors = appSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_GOOGLE_MAPS_KEY = exports.SET_STATUS = exports.SET_COOKIE = exports.SET_CSRF = void 0;
var SET_CSRF = "app/auth/SET_CSRF";
exports.SET_CSRF = SET_CSRF;
var SET_COOKIE = "app/auth/SET_COOKIE";
exports.SET_COOKIE = SET_COOKIE;
var SET_STATUS = "app/auth/SET_STATUS";
exports.SET_STATUS = SET_STATUS;
var SET_GOOGLE_MAPS_KEY = "app/auth/SET_GOOGLE_MAPS_KEY";
exports.SET_GOOGLE_MAPS_KEY = SET_GOOGLE_MAPS_KEY;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-form/immutable");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var moment = __webpack_require__(32); // Add locales:
//require("moment/locale/ru.js"); // en is already there


module.exports = moment;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserProviders = exports.getAllProviders = exports.getRoles = exports.getEmail = exports.getName = exports.isAdmin = exports.isAuthenticated = exports.getCookie = exports.getCsrf = void 0;

var _reselect = __webpack_require__(21);

var _constants = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCsrf = function getCsrf(state) {
  return state.getIn(["auth", "csrf"]);
};

exports.getCsrf = getCsrf;

var getCookie = function getCookie(state) {
  return state.getIn(["auth", "cookie"]);
};

exports.getCookie = getCookie;

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

var getName = function getName(state) {
  return state.getIn(["auth", "name"]);
};

exports.getName = getName;

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
    en: parse(__webpack_require__(25)),
    ru: parse(__webpack_require__(26))
  },
  getLocaleData: function getLocaleData() {
    return [__webpack_require__(27), __webpack_require__(28)];
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var constants = __webpack_require__(5);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _immutable = __webpack_require__(9);

var _reactIntl = __webpack_require__(7);

var _styles = __webpack_require__(3);

var _List = _interopRequireDefault(__webpack_require__(73));

var _ListItem = _interopRequireDefault(__webpack_require__(74));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(53));

var _ListItemText = _interopRequireDefault(__webpack_require__(54));

var _InfoOutlined = _interopRequireDefault(__webpack_require__(75));

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
    errorList: {
      padding: 0
    },
    errorListItem: {
      paddingTop: "0.5rem",
      paddingLeft: "0.5rem",
      paddingRight: 0
    },
    error: {
      color: theme.palette.text.secondary
    }
  };
};

var Errors =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Errors, _React$PureComponent);

  function Errors() {
    _classCallCheck(this, Errors);

    return _possibleConstructorReturn(this, _getPrototypeOf(Errors).apply(this, arguments));
  }

  _createClass(Errors, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_List.default, {
        classes: {
          root: this.props.classes.errorList
        }
      },
      /* eslint-disable-line */
      this.props.errors.map(function (error, index) {
        return _react.default.createElement(_ListItem.default, {
          key: "error-".concat(index),
          classes: {
            root: _this.props.classes.errorListItem
          }
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_InfoOutlined.default, {
          className: _this.props.classes.error
        })), _react.default.createElement(_ListItemText.default, {
          classes: {
            primary: _this.props.classes.error
          },
          primary: _this.props.intl.formatMessage({
            id: error
          })
        }));
      }));
    }
  }]);

  return Errors;
}(_react.default.PureComponent);

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Errors));

exports.default = _default;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("country-telephone-data");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(11);

var types = _interopRequireWildcard(__webpack_require__(12));

var _locales = _interopRequireDefault(__webpack_require__(19));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  created: Number, // timestamp
  di: Injectt,
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 25 */
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Dashboard","TITLE_DASHBOARD":"Dashboard","MENU_FORMS":"Forms","TITLE_FORMS":"Forms","MENU_CHARTS":"Charts","TITLE_CHARTS":"Charts","MENU_TABLES":"Tables","TITLE_TABLES":"Tables","MENU_MAPS":"Maps","TITLE_MAPS":"Maps","MENU_NOTIFICATIONS":"Notifications","TITLE_NOTIFICATIONS":"Notifications","MENU_TYPOGRAPHY":"Typography","TITLE_TYPOGRAPHY":"Typography","MENU_ICONS":"Icons","TITLE_ICONS":"Icons","MENU_USERS":"Users","TITLE_USERS":"Users","SIDEBAR_BENCHMARKS_LINK":"Benchmark Results","SIDEBAR_RESPONSIVENESS_LINK":"Responsiveness Test","HEADER_INBOX_LABEL":"Inbox","HEADER_PROFILE_LABEL":"Profile","USERS_LOGIN_COLUMN":"Login","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create user","EDIT_USER_TITLE_EDIT":"Edit user","EDIT_USER_NAME_LABEL":"Name","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","EDIT_USER_FAILED":"An error occured","DELETE_USER_TITLE":"Delete users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","FORMS_MESSAGE_TITLE":"It's alive!","FORMS_MESSAGE_CONTENT":["The form example below is fully implemented, fields normalize and validate the input."," You can try to fill out and submit this form to see it in action."],"FORMS_SUCCESS_TITLE":"Congratulations!","FORMS_SUCCESS_TEXT":"The form is finished and ready to be submitted to the backend","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Prev","WIZARD_NEXT_BUTTON":"Next","WIZARD_SUBMIT_BUTTON":"Done","WIZARD_ERROR_LABEL":"Please fill out this form","SHIPPING_STEP_TITLE":"Shipping","SHIPPING_STEP_DESCR":"Choose your shipping options","SHIPPING_FIRST_NAME_LABEL":"First name","SHIPPING_MIDDLE_NAME_LABEL":"Middle name (optional)","SHIPPING_LAST_NAME_LABEL":"Last name","SHIPPING_ADDRESS_LABEL":"Address","SHIPPING_CITY_LABEL":"City/town","SHIPPING_STATE_LABEL":"State/Province/Region (if required)","SHIPPING_CODE_LABEL":"ZIP/Postal code","SHIPPING_COUNTRY_LABEL":"Country","SHIPPING_PHONE_LABEL":"Phone number","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"What is a dog?","SHIPPING_Q2":"What kinds of dogs are there?","SHIPPING_Q3":"How do you acquire a dog?","BILLING_STEP_TITLE":"Billing","BILLING_STEP_DESCR":"Enter billing information","BILLING_CARD_NUMBER_LABEL":"Credit card number","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Billing address is the same as shipping address","BILLING_Q1":"What is Lorem Ipsum?","BILLING_Q2":"When did they start using it?","CONFIRM_STEP_TITLE":"Confirm","CONFIRM_STEP_DESCR_SUCCESS":"The form is ready to be submitted","CONFIRM_STEP_DESCR_FAILURE":"The form is not completed yet","CONFIRM_SHIPPING_LABEL":"Shipping Information","CONFIRM_BILLING_LABEL":"Billing Information","CONFIRM_FIRST_NAME_LABEL":"First name:","CONFIRM_MIDDLE_NAME_LABEL":"Middle name:","CONFIRM_LAST_NAME_LABEL":"Last name:","CONFIRM_ADDRESS_LABEL":"Address:","CONFIRM_CITY_LABEL":"City/town:","CONFIRM_STATE_LABEL":"State/Province/Region:","CONFIRM_CODE_LABEL":"ZIP/Postal code:","CONFIRM_COUNTRY_LABEL":"Country:","CONFIRM_PHONE_LABEL":"Phone number:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Credit card number:","CONFIRM_CARD_DATE_LABEL":"Credit card expires:","APP_AUTH_TITLE":"Authentication","APP_AUTH_ANONYMOUS_BUTTON":"Anonymous","APP_AUTH_CREDENTIALS_LABEL":"Sign In using Credentials","APP_AUTH_NEW_USER_LABEL":"I don't have an account yet, please create one","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SERVICE_BUTTON":"Sign In with","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","APP_AUTH_EMAIL_TAKEN":"This email is already registered","OPERATION_FAILED":"Operation failed","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_PATTERN":"Please provide a valid value","ERROR_INVALID_EMAIL":"Please provide a valid email address","ERROR_INVALID_PHONE":"Please, provide a valid phone number","ERROR_INVALID_PHONE_COUNTRY":"This is not a valid phone number for this country","ERROR_INVALID_CREDIT_CARD_NUMBER":"Please, provide a valid credit card number","ERROR_INVALID_CREDIT_CARD_DATE":"Please, provide a valid credit card expiration date","ERROR_INVALID_CREDIT_CARD_SECRET":"Please, provide a valid credit card CVV2 code","ERROR_INVALID_PASSWORD":"Password should be at least 6 characters long","ERROR_MISMATCHED_PASSWORDS":"The two passwords typed do not match"};

/***/ }),
/* 26 */
/***/ (function(module) {

module.exports = {};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/ru.js");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.init = exports.create = exports.stop = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _injectt = _interopRequireDefault(__webpack_require__(30));

var actions = _interopRequireWildcard(__webpack_require__(31));

var _auth = __webpack_require__(6);

var _constants = _interopRequireDefault(__webpack_require__(5));

var _Fetcher = _interopRequireDefault(__webpack_require__(36));

var _Storage = _interopRequireDefault(__webpack_require__(37));

var _Socket = _interopRequireDefault(__webpack_require__(38));

var _Cookie = _interopRequireDefault(__webpack_require__(41));

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

var create = function create(_ref) {
  var cookie = _ref.cookie,
      status = _ref.status,
      googleMapsKey = _ref.googleMapsKey;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return dispatch(actions.create());

              case 2:
                if (!cookie) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return dispatch(_auth.authOperations.setCookie({
                  cookie: cookie
                }));

              case 5:
                if (!status) {
                  _context.next = 8;
                  break;
                }

                _context.next = 8;
                return dispatch(_auth.authOperations.setStatus(status));

              case 8:
                if (!googleMapsKey) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return dispatch(_auth.authOperations.setGoogleMapsKey({
                  googleMapsKey: googleMapsKey
                }));

              case 11:
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

exports.create = create;

var init = function init() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState) {
        var di;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                di = new _injectt.default();
                di.registerInstance(getState, "getState");
                di.registerInstance(dispatch, "dispatch");
                di.registerClass(_Fetcher.default);
                di.registerClass(_Storage.default);
                di.registerClass(_Socket.default);
                di.registerClass(_Cookie.default);
                _context2.next = 9;
                return dispatch(actions.init({
                  di: di
                }));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2, _x3) {
        return _ref3.apply(this, arguments);
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
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.all([dispatch(_auth.authOperations.setStatus()), fontsLoaded]);

              case 2:
                return _context3.abrupt("return", dispatch(actions.start()));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.start = start;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("injectt");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setConnected = exports.setStatusCode = exports.stop = exports.start = exports.init = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__(16));

var types = _interopRequireWildcard(__webpack_require__(12));

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(9);

var _reduxImmutable = __webpack_require__(11);

var types = _interopRequireWildcard(__webpack_require__(13));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  csrf: String,
  cookie: String,
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

var cookieReducer = function cookieReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_COOKIE:
      if (!_.isUndefined(action.cookie)) return action.cookie;
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
  cookie: cookieReducer,
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfile = exports.unlinkProvider = exports.linkProvider = exports.updateProfile = exports.finishProfileVerification = exports.requestProfileVerification = exports.loadProfile = exports.signOut = exports.signUp = exports.signIn = exports.setStatus = exports.setCsrf = exports.setGoogleMapsKey = exports.setCookie = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _moment = _interopRequireDefault(__webpack_require__(16));

var _router = _interopRequireDefault(__webpack_require__(18));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(20));

var actions = _interopRequireWildcard(__webpack_require__(35));

var selectors = _interopRequireWildcard(__webpack_require__(17));

var _app = __webpack_require__(10);

var _constants = _interopRequireDefault(__webpack_require__(5));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var setCookie = actions.setCookie;
exports.setCookie = setCookie;
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
        var fetcher;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                fetcher = _app.appSelectors.getService(getState(), {
                  service: "fetcher"
                });
                _context.next = 4;
                return fetcher.fetch({
                  resource: "".concat(_constants.default.apiBase, "/status")
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error("STATUS: ".concat(_context.t0.message));

              case 10:
                return _context.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve(fetchStatus());
                  }, 3000);
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
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
                return fetchStatus();

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
                if (false) {}

              case 15:
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
        var result, storage, fetcher, data, errors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

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
                fetcher = _app.appSelectors.getService(getState(), {
                  service: "fetcher"
                });
                _context3.next = 7;
                return fetcher.query({
                  text: "mutation ($email: String, $password: String) {\n                signIn(email: $email, password: $password) {\n                  success\n                }\n              }"
                }, {
                  email: email,
                  password: password
                });

              case 7:
                data = _context3.sent;

                if (!_.get(data, "data.signIn.success", false)) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 11;
                return dispatch(setStatus());

              case 11:
                if (true) {
                  _context3.next = 14;
                  break;
                }

                _context3.next = 14;
                return window.__NEXT_PAGE_INIT({
                  store: window.__NEXT_REDUX_STORE__
                });

              case 14:
                return _context3.abrupt("return", true);

              case 17:
                result = {};
                errors = _.get(data, "errors", []);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 22;

                for (_iterator = errors[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  error = _step.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context3.next = 30;
                break;

              case 26:
                _context3.prev = 26;
                _context3.t0 = _context3["catch"](22);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 30:
                _context3.prev = 30;
                _context3.prev = 31;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 33:
                _context3.prev = 33;

                if (!_didIteratorError) {
                  _context3.next = 36;
                  break;
                }

                throw _iteratorError;

              case 36:
                return _context3.finish(33);

              case 37:
                return _context3.finish(30);

              case 38:
                if (!_.keys(result).length) result = {
                  _error: "APP_AUTH_FAILED"
                };

              case 39:
                _context3.next = 44;
                break;

              case 41:
                _context3.prev = 41;
                _context3.t1 = _context3["catch"](1);
                console.error(_context3.t1);

              case 44:
                return _context3.abrupt("return", result);

              case 45:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 41], [22, 26, 30, 38], [31,, 33, 37]]);
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
      _regenerator.default.mark(function _callee4(dispatch, getState) {
        var result, fetcher, data, errors, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, error;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = false;
                _context4.prev = 1;
                fetcher = _app.appSelectors.getService(getState(), {
                  service: "fetcher"
                });
                _context4.next = 5;
                return fetcher.query({
                  text: "mutation ($email: String, $password: String) {\n                signUp(email: $email, password: $password) {\n                  success\n                }\n              }"
                }, {
                  email: email,
                  password: password
                });

              case 5:
                data = _context4.sent;

                if (!_.get(data, "data.signUp.success", false)) {
                  _context4.next = 15;
                  break;
                }

                _context4.next = 9;
                return dispatch(setStatus());

              case 9:
                if (true) {
                  _context4.next = 12;
                  break;
                }

                _context4.next = 12;
                return window.__NEXT_PAGE_INIT({
                  store: window.__NEXT_REDUX_STORE__
                });

              case 12:
                return _context4.abrupt("return", true);

              case 15:
                result = {};
                errors = _.get(data, "errors", []);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context4.prev = 20;

                for (_iterator2 = errors[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  error = _step2.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context4.next = 28;
                break;

              case 24:
                _context4.prev = 24;
                _context4.t0 = _context4["catch"](20);
                _didIteratorError2 = true;
                _iteratorError2 = _context4.t0;

              case 28:
                _context4.prev = 28;
                _context4.prev = 29;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 31:
                _context4.prev = 31;

                if (!_didIteratorError2) {
                  _context4.next = 34;
                  break;
                }

                throw _iteratorError2;

              case 34:
                return _context4.finish(31);

              case 35:
                return _context4.finish(28);

              case 36:
                if (!_.keys(result).length) result = {
                  _error: "APP_AUTH_EMAIL_TAKEN"
                };

              case 37:
                _context4.next = 42;
                break;

              case 39:
                _context4.prev = 39;
                _context4.t1 = _context4["catch"](1);
                console.error(_context4.t1);

              case 42:
                return _context4.abrupt("return", result);

              case 43:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 39], [20, 24, 28, 36], [29,, 31, 35]]);
      }));

      return function (_x7, _x8) {
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
      _regenerator.default.mark(function _callee5(dispatch, getState) {
        var result, fetcher, data;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = false;
                _context5.prev = 1;
                fetcher = _app.appSelectors.getService(getState(), {
                  service: "fetcher"
                });
                _context5.next = 5;
                return fetcher.query({
                  text: "mutation {\n                signOut {\n                  success\n                }\n              }"
                }, {});

              case 5:
                data = _context5.sent;
                result = _.get(data, "data.signOut.success") || false;

                if (!result) {
                  _context5.next = 10;
                  break;
                }

                _context5.next = 10;
                return dispatch(setStatus());

              case 10:
                _context5.next = 15;
                break;

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](1);
                console.error(_context5.t0);

              case 15:
                return _context5.abrupt("return", result);

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 12]]);
      }));

      return function (_x9, _x10) {
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

      return function (_x11, _x12) {
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
      _regenerator.default.mark(function _callee7(dispatch, getState) {
        var result, fetcher, data;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                result = false;
                _context7.prev = 1;
                fetcher = _app.appSelectors.getService(getState(), {
                  service: "fetcher"
                });
                _context7.next = 5;
                return fetcher.query({
                  text: "mutation {\n                requestEmailVerification {\n                  success\n                }\n              }"
                }, {});

              case 5:
                data = _context7.sent;
                result = _.get(data, "data.requestEmailVerification.success") || false;
                _context7.next = 12;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](1);
                console.error(_context7.t0);

              case 12:
                return _context7.abrupt("return", result);

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 9]]);
      }));

      return function (_x13, _x14) {
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
      _regenerator.default.mark(function _callee8(dispatch, getState) {
        var result, fetcher, data;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                result = false;
                _context8.prev = 1;
                fetcher = _app.appSelectors.getService(getState(), {
                  service: "fetcher"
                });
                _context8.next = 5;
                return fetcher.query({
                  text: "mutation ($token: String) {\n                verifyEmail(token: $token) {\n                  success\n                }\n              }"
                }, {
                  token: token
                });

              case 5:
                data = _context8.sent;
                result = _.get(data, "data.verifyEmail.success") || false;

                if (!result) {
                  _context8.next = 10;
                  break;
                }

                _context8.next = 10;
                return dispatch(setStatus());

              case 10:
                _context8.next = 15;
                break;

              case 12:
                _context8.prev = 12;
                _context8.t0 = _context8["catch"](1);
                console.error(_context8.t0);

              case 15:
                return _context8.abrupt("return", result);

              case 16:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 12]]);
      }));

      return function (_x15, _x16) {
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
      _regenerator.default.mark(function _callee9(dispatch, getState) {
        var result, fetcher, data, errors, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, error;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                result = false;
                _context9.prev = 1;
                fetcher = _app.appSelectors.getService(getState(), {
                  service: "fetcher"
                });
                _context9.next = 5;
                return fetcher.query({
                  text: "mutation ($email: String, $name: String, $password: String) {\n                updateProfile(email: $email, name: $name, password: $password) {\n                  success\n                }\n              }"
                }, {
                  email: email,
                  name: name,
                  password: password
                });

              case 5:
                data = _context9.sent;

                if (!_.get(data, "data.updateProfile.success", false)) {
                  _context9.next = 12;
                  break;
                }

                _context9.next = 9;
                return dispatch(loadProfile(onChange));

              case 9:
                return _context9.abrupt("return", true);

              case 12:
                result = {};
                errors = _.get(data, "errors", []);
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context9.prev = 17;

                for (_iterator3 = errors[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  error = _step3.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context9.next = 25;
                break;

              case 21:
                _context9.prev = 21;
                _context9.t0 = _context9["catch"](17);
                _didIteratorError3 = true;
                _iteratorError3 = _context9.t0;

              case 25:
                _context9.prev = 25;
                _context9.prev = 26;

                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }

              case 28:
                _context9.prev = 28;

                if (!_didIteratorError3) {
                  _context9.next = 31;
                  break;
                }

                throw _iteratorError3;

              case 31:
                return _context9.finish(28);

              case 32:
                return _context9.finish(25);

              case 33:
                if (!_.keys(result).length) result = {
                  _error: "OPERATION_FAILED"
                };

              case 34:
                _context9.next = 39;
                break;

              case 36:
                _context9.prev = 36;
                _context9.t1 = _context9["catch"](1);
                console.error(_context9.t1);

              case 39:
                return _context9.abrupt("return", result);

              case 40:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 36], [17, 21, 25, 33], [26,, 28, 32]]);
      }));

      return function (_x17, _x18) {
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

      return function (_x19) {
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
      _regenerator.default.mark(function _callee11(dispatch, getState) {
        var result, fetcher, data;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                result = false;
                _context11.prev = 1;
                fetcher = _app.appSelectors.getService(getState(), {
                  service: "fetcher"
                });
                _context11.next = 5;
                return fetcher.query({
                  text: "mutation ($provider: String) {\n                unlinkProvider(provider: $provider) {\n                  success\n                }\n              }"
                }, {
                  provider: provider
                });

              case 5:
                data = _context11.sent;
                result = _.get(data, "data.unlinkProvider.success") || false;

                if (!result) {
                  _context11.next = 10;
                  break;
                }

                _context11.next = 10;
                return dispatch(setStatus());

              case 10:
                _context11.next = 15;
                break;

              case 12:
                _context11.prev = 12;
                _context11.t0 = _context11["catch"](1);
                console.error(_context11.t0);

              case 15:
                return _context11.abrupt("return", result);

              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[1, 12]]);
      }));

      return function (_x20, _x21) {
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
      _regenerator.default.mark(function _callee12(dispatch, getState) {
        var result, fetcher, data;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                result = false;
                _context12.prev = 1;
                fetcher = _app.appSelectors.getService(getState(), {
                  service: "fetcher"
                });
                _context12.next = 5;
                return fetcher.query({
                  text: "mutation {\n                deleteProfile {\n                  success\n                }\n              }"
                }, {});

              case 5:
                data = _context12.sent;
                result = _.get(data, "data.deleteProfile.success") || false;

                if (!result) {
                  _context12.next = 11;
                  break;
                }

                _context12.next = 10;
                return dispatch(_app.appOperations.stop());

              case 10:
                window.location.href = "/";

              case 11:
                _context12.next = 16;
                break;

              case 13:
                _context12.prev = 13;
                _context12.t0 = _context12["catch"](1);
                console.error(_context12.t0);

              case 16:
                return _context12.abrupt("return", result);

              case 17:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[1, 13]]);
      }));

      return function (_x22, _x23) {
        return _ref19.apply(this, arguments);
      };
    }()
  );
};

exports.deleteProfile = deleteProfile;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGoogleMapsKey = exports.setStatus = exports.setCookie = exports.setCsrf = void 0;

var types = _interopRequireWildcard(__webpack_require__(13));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setCsrf = function setCsrf(_ref) {
  var csrf = _ref.csrf;
  return {
    type: types.SET_CSRF,
    csrf: csrf
  };
};

exports.setCsrf = setCsrf;

var setCookie = function setCookie(_ref2) {
  var cookie = _ref2.cookie;
  return {
    type: types.SET_COOKIE,
    cookie: cookie
  };
};

exports.setCookie = setCookie;

var setStatus = function setStatus(status) {
  return _objectSpread({
    type: types.SET_STATUS
  }, status);
};

exports.setStatus = setStatus;

var setGoogleMapsKey = function setGoogleMapsKey(_ref3) {
  var googleMapskey = _ref3.googleMapskey;
  return {
    type: types.SET_GOOGLE_MAPS_KEY,
    googleMapskey: googleMapskey
  };
};

exports.setGoogleMapsKey = setGoogleMapsKey;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _auth = __webpack_require__(6);

var _constants = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fetcher =
/*#__PURE__*/
function () {
  function Fetcher(getState) {
    _classCallCheck(this, Fetcher);

    this._csrf = null;
    this.getState = getState;
  } // eslint-disable-next-line lodash/prefer-constant


  _createClass(Fetcher, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var method, resource, data, csrf, cookie, url, response, error;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                method = _ref.method, resource = _ref.resource, data = _ref.data, csrf = _ref.csrf;
                cookie = _auth.authSelectors.getCookie(this.getState());
                url = _constants.default.apiBase + resource;
                _context.next = 5;
                return fetch( false ? undefined : process.env.APP_INNER_SERVER + url, {
                  method: method || "GET",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-CSRF-Token": csrf,
                    Cookie: cookie || undefined
                  },
                  body: data && JSON.stringify(data)
                });

              case 5:
                response = _context.sent;
                if (response.status === 403 && method === "POST") this._csrf = null;

                if (!(response.status !== 200)) {
                  _context.next = 16;
                  break;
                }

                _context.t0 = Error;
                _context.t1 = "Fetch failed: ".concat(resource, " [").concat(response.status, "]");
                _context.next = 12;
                return response.json();

              case 12:
                _context.t2 = _context.sent;
                error = new _context.t0(_context.t1, _context.t2);
                error.response = response;
                throw error;

              case 16:
                return _context.abrupt("return", response.json());

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }())
  }, {
    key: "csrf",
    value: function () {
      var _csrf = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _this = this;

        var data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._csrf) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", this._csrf);

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return this.fetch({
                  resource: "".concat(_constants.default.apiBase, "/csrf")
                });

              case 5:
                data = _context2.sent;

                if (!data.csrf) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", this._csrf = data.csrf);

              case 8:
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                console.error("CSRF: ".concat(_context2.t0.message));

              case 13:
                return _context2.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve(_this.csrf());
                  }, 1000);
                }));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 10]]);
      }));

      function csrf() {
        return _csrf.apply(this, arguments);
      }

      return csrf;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(operation, variables, cacheConfig, uploadables) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.t0 = this;
                _context3.t1 = _constants.default.graphqlBase;
                _context3.t2 = {
                  query: operation.text,
                  // GraphQL text from input
                  variables: variables
                };
                _context3.next = 6;
                return this.csrf();

              case 6:
                _context3.t3 = _context3.sent;
                _context3.t4 = {
                  method: "POST",
                  resource: _context3.t1,
                  data: _context3.t2,
                  csrf: _context3.t3
                };
                _context3.next = 10;
                return _context3.t0.fetch.call(_context3.t0, _context3.t4);

              case 10:
                return _context3.abrupt("return", _context3.sent);

              case 13:
                _context3.prev = 13;
                _context3.t5 = _context3["catch"](0);

                if (!(_.get(_context3.t5, "response.status") === 403)) {
                  _context3.next = 17;
                  break;
                }

                return _context3.abrupt("return", this.query(operation, variables, cacheConfig, uploadables));

              case 17:
                return _context3.abrupt("return", {});

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 13]]);
      }));

      function query(_x3, _x4, _x5, _x6) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }], [{
    key: "$provides",
    get: function get() {
      return "fetcher";
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$requires",
    get: function get() {
      return ["getState"];
    } // eslint-disable-next-line lodash/prefer-constant

  }, {
    key: "$lifecycle",
    get: function get() {
      return "singleton";
    }
  }]);

  return Fetcher;
}();

var _default = Fetcher;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _socket = _interopRequireDefault(__webpack_require__(39));

var _app = __webpack_require__(10);

var _auth = __webpack_require__(6);

var _constants = _interopRequireDefault(__webpack_require__(5));

var _package = _interopRequireDefault(__webpack_require__(40));

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

      function onHello(_x) {
        return _onHello.apply(this, arguments);
      }

      return onHello;
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

      function onSetStatus(_x2) {
        return _onSetStatus.apply(this, arguments);
      }

      return onSetStatus;
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

      function onDisconnect() {
        return _onDisconnect.apply(this, arguments);
      }

      return onDisconnect;
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
/* 39 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 40 */
/***/ (function(module) {

module.exports = {"name":"next-dashboard","version":"0.1.0","private":true,"dependencies":{"@date-io/moment":"~0.0.2","@material-ui/core":"~3.8.1","@material-ui/icons":"~3.0.1","@zeit/next-bundle-analyzer":"~0.1.2","@zeit/next-css":"~1.0.1","base64util":"~2.0.0-f","bcrypt":"~3.0.3","body-parser":"~1.18.3","chance":"~1.0.18","classnames":"~2.2.6","compression":"~1.7.3","connect-mongo":"~2.0.3","cookie-parser":"~1.4.3","cors":"~2.8.5","country-telephone-data":"~0.6.0","csurf":"~1.9.0","debug":"~4.1.1","dotenv":"~6.2.0","express":"~4.16.4","express-graphql":"~0.7.1","express-session":"~1.15.6","fs-extra":"~7.0.1","graphql":"14.0.2","graphql-relay":"~0.5.5","graphql-relay-connection":"^0.0.4","http-status-codes":"~1.3.0","immutable":"~4.0.0-rc.12","injectt":"~0.1.6","intl":"~1.2.5","intl-locales-supported":"~1.0.0","intl-messageformat":"~2.2.0","isomorphic-unfetch":"~3.0.0","json-immutable":"~0.4.0","jss":"~9.8.7","jss-extend":"~6.2.0","lodash":"~4.17.11","lru-cache":"~5.1.1","material-ui-pickers":"~2.0.5","moment":"~2.23.0","moment-timezone":"~0.5.23","mongoose":"~5.4.2","morgan":"~1.9.1","next":"~7.0.2","next-compose-plugins":"~2.1.1","next-progressbar":"~1.0.0","nodemailer":"~5.0.0","null-loader":"~0.1.1","pako":"~1.0.7","passport":"~0.4.0","passport-facebook":"~2.1.1","passport-google-oauth":"~1.0.0","passport-twitter":"~1.0.4","raf":"~3.4.1","react":"~16.7.0","react-dom":"~16.7.0","react-flags":"~0.1.17","react-intl":"~2.7.2","react-jss":"~8.6.1","react-redux":"~6.0.0","react-relay":"~1.7.0","react-swipeable-views":"~0.13.0","react-toastify":"~4.5.2","react-virtualized":"~9.21.0","redux":"~4.0.1","redux-devtools-extension":"~2.13.7","redux-form":"~8.1.0","redux-immutable":"~4.0.0","redux-thunk":"~2.3.0","reselect":"~4.0.0","serviceworker-webpack-plugin":"~1.0.1","sharp":"~0.21.1","socket.io":"~2.2.0","svg-inline-loader":"~0.8.0","utf8":"~3.0.0","validator":"~10.10.0","webpack":"4.20.2"},"devDependencies":{"@babel/core":"7.0.0","babel-core":"7.0.0-bridge.0","babel-eslint":"~10.0.1","babel-jest":"~23.6.0","babel-plugin-lodash":"~3.3.4","babel-plugin-relay":"~1.7.0","css-mqpacker":"~7.0.0","enzyme":"~3.8.0","enzyme-adapter-react-16":"~1.7.1","eslint":"~5.12.0","eslint-plugin-lodash":"~5.1.0","eslint-plugin-react":"~7.12.3","jest":"~23.6.0","jsdom":"~13.1.0","jsdom-global":"~3.0.2","postcss-clean":"~1.1.0","postcss-loader":"~3.0.0","postcss-preset-env":"~6.5.0","postcss-url":"~8.0.0","prop-types":"~15.6.2","relay-compiler":"^1.7.0","supertest":"~3.3.0","webfontloader":"~1.6.28"},"scripts":{"lint":"eslint . --max-warnings=0","test":"jest . --no-cache --forceExit","relay":"node ./bin/update-schema && relay-compiler --src ./app --schema ./api/schema.graphql --verbose","build":"node ./bin/prepare-build && env NODE_ENV=production TMPDIR=$PWD/.tmp next build","export":"env NODE_ENV=production TMPDIR=$PWD/.tmp next export","dev":"node ./bin/prepare-build && env NODE_ENV=development node ./bin/www","start":"env NODE_ENV=production node ./bin/www"}};

/***/ }),
/* 41 */
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
/* 42 */
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
  return di && di.get.apply(di, [props.service].concat(_toConsumableArray(props.params || [])));
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
exports.FormFieldsContext = exports.FormNameContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormNameContext = _react.default.createContext({});

exports.FormNameContext = FormNameContext;

var FormFieldsContext = _react.default.createContext({});

exports.FormFieldsContext = FormFieldsContext;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var tokenize = __webpack_require__(46);

var validator = __webpack_require__(47); //let allCountries, iso2Lookup;


var _require = __webpack_require__(23),
    allCountries = _require.allCountries,
    iso2Lookup = _require.iso2Lookup;
/**
 * Normalizer function for Redux Form
 * takes input like "rule1:param1:param2|rule2:param1:param2|..."
 *
 * trim                       remove white space from the beginning and the end of value
 * compact:spaces             replace multiple occurences of space in a row with a single space
 * remove:spaces              remove spaces
 * rows:size                  forces "size" number of rows (1 if size is omitted)
 * integer                    removes everything except digits
 * phone                      forces international phone phormat
 * email                      normalizes email
 * credit_card:number         normalizes credit card number
 * credit_card:date           normalizes credit card expiration date
 * credit_card:secret         normalizes credit card CVV2 code
 */


module.exports = function normalize(options, value, prevValue, allValues
/* prevAllValues */
) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tokenize(options, "\\", "|")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;
      var params = tokenize(rule, "\\", ":");
      if (!params.length) continue;
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
      var search = void 0;
      var isLongBreak = !!result.match(/\r\n/);

      switch (_command) {
        case "trim":
          // trims the input, no params
          tmp = [];
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _.split(_.trim(result), /\r\n?|\n/g)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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

          result = tmp.join(isLongBreak ? "\r\n" : "\n");
          break;

        case "compact":
          // with "spaces" param compacts spaces into single space preserving new lines
          if (_.includes(rules[_command], "spaces")) {
            tmp = [];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = _.split(result, /\r\n?|\n/g)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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

            result = tmp.join(isLongBreak ? "\r\n" : "\n");
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
              for (var _iterator5 = _.split(result, /\r\n?|\n/g)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
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

            result = tmp.join(isLongBreak ? "\r\n" : "\n");
          }

          break;

        case "rows":
          // first param is the number of rows in the result (defaults to 1)
          tmp = _.split(result, /\r\n?|\n/g);
          result = "";

          for (i = 0; i < tmp.length; i++) {
            if (i > 0 && i < (rules[_command].length ? parseInt(rules[_command][0]) : 1)) result += isLongBreak ? "\r\n" : "\n";
            result += tmp[i];
          }

          break;

        case "integer":
          result = _.replace(result, /[^0-9]+/g, "");
          break;

        case "phone":
          // converts input to internations phone number format
          // expect package 'country-telephone-data' and form field "country" to exist
          tmp = _.replace(result, /[^0-9]+/g, "");
          result = "";
          i = 0;
          search = allCountries && iso2Lookup && allCountries[iso2Lookup[allValues.get("country")]];

          if (search && search.dialCode && _.startsWith(tmp, search.dialCode)) {
            result += search.dialCode + (search.dialCode.length < tmp.length ? " " : "");
            i = search.dialCode.length;
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function tokenize(str, esc, sep) {
  var result = [];
  var tmp = "";

  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);

    if (c === esc) {
      tmp += str.charAt(++i);
    } else if (c === sep) {
      result.push(tmp);
      tmp = "";
    } else {
      tmp += c;
    }
  }

  result.push(tmp);
  return result;
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.DESELECT_ALL = exports.SELECT_ALL = exports.SET_SELECTED = exports.SET_LIST = void 0;
var SET_LIST = "app/users/SET_LIST";
exports.SET_LIST = SET_LIST;
var SET_SELECTED = "app/users/SET_SELECTED";
exports.SET_SELECTED = SET_SELECTED;
var SELECT_ALL = "app/users/SELECT_ALL";
exports.SELECT_ALL = SELECT_ALL;
var DESELECT_ALL = "app/users/DESELECT_ALL";
exports.DESELECT_ALL = DESELECT_ALL;
var SHOW_EDIT_MODAL = "app/users/SHOW_EDIT_MODAL";
exports.SHOW_EDIT_MODAL = SHOW_EDIT_MODAL;
var HIDE_EDIT_MODAL = "app/users/HIDE_EDIT_MODAL";
exports.HIDE_EDIT_MODAL = HIDE_EDIT_MODAL;

/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _immutable = __webpack_require__(9);

var _reactRedux = __webpack_require__(14);

var _immutable2 = __webpack_require__(15);

var _reduxForm = __webpack_require__(68);

var _Context = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = function _default(FormComponent, mapStateToProps, mapDispatchToProps) {
  var withContext = function withContext(WrappedComponent) {
    return function WithFormContext(props) {
      return _react.default.createElement(_Context.FormNameContext.Provider, {
        value: FormComponent.formName
      }, _react.default.createElement(_Context.FormFieldsContext.Provider, {
        value: FormComponent.fields
      }, _react.default.createElement(WrappedComponent, props)));
    };
  };

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var Form = _reactRedux.connect.apply(void 0, [function (state, props) {
    return _.assign(mapStateToProps ? mapStateToProps(state, props) : {}, {
      getValue: function getValue(field) {
        var values = (0, _immutable2.getFormValues)(FormComponent.formName)(state);
        return field ? values && values.get(field) : values || (0, _immutable.Map)();
      },
      getError: function getError(field) {
        var errors = (0, _immutable2.getFormAsyncErrors)(FormComponent.formName)(state);
        return field ? errors && errors.get(field) : errors || (0, _immutable.Map)();
      }
    });
  }, function (dispatch, props) {
    return _.assign(mapDispatchToProps ? mapDispatchToProps(dispatch, props) : {}, {
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
                  return dispatch((0, _reduxForm.startAsyncValidation)(FormComponent.formName));

                case 2:
                  _context.next = 4;
                  return dispatch((0, _reduxForm.stopAsyncValidation)(FormComponent.formName, errors));

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function updateValidation(_x) {
          return _updateValidation.apply(this, arguments);
        }

        return updateValidation;
      }()
    });
  }].concat(args))(withContext((0, _immutable2.reduxForm)({
    form: FormComponent.formName,
    destroyOnUnmount: false,
    pure: false,
    shouldAsyncValidate: function shouldAsyncValidate(_ref) {
      var trigger = _ref.trigger;
      return _.includes(["blur", "submit"], trigger);
    },
    onSubmit: FormComponent.onSubmit.bind(FormComponent),
    onSubmitFail: FormComponent.onSubmitFail.bind(FormComponent),
    onSubmitSuccess: FormComponent.onSubmitSuccess.bind(FormComponent),
    onChange: FormComponent.onChange.bind(FormComponent),
    asyncValidate: FormComponent.onValidate.bind(FormComponent)
  })(FormComponent)));

  Form.formName = FormComponent.formName;
  return Form;
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _reactIntl = __webpack_require__(7);

var _immutable = __webpack_require__(15);

var _Context = __webpack_require__(44);

var _normalize2 = _interopRequireDefault(__webpack_require__(45));

var _Text = _interopRequireDefault(__webpack_require__(71));

var _Select = _interopRequireDefault(__webpack_require__(76));

var _Checkbox = _interopRequireDefault(__webpack_require__(81));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FormField =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(FormField, _React$PureComponent);

  function FormField() {
    _classCallCheck(this, FormField);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormField).apply(this, arguments));
  }

  _createClass(FormField, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          name = _this$props.name,
          type = _this$props.type,
          fieldProps = _objectWithoutProperties(_this$props, ["name", "type"]); // eslint-disable-line


      var Component;

      switch (this.props.type) {
        case "text":
        case "password":
        case "textarea":
          Component = _Text.default;
          break;

        case "select":
          Component = _Select.default;
          break;

        case "checkbox":
          Component = _Checkbox.default;
          break;
      }

      return _react.default.createElement(_Context.FormNameContext.Consumer, null, function (formName) {
        return _react.default.createElement(_Context.FormFieldsContext.Consumer, null, function (fields) {
          return _react.default.createElement(_immutable.Field, _extends({
            component: Component,
            fieldId: "input-".concat(formName, "-").concat(name),
            name: name,
            type: type,
            label: fields[name] && _this.props.intl.formatMessage({
              id: fields[name].label
            }),
            normalize: function normalize(value) {
              if (!fields[_this.props.name]) return value;
              var options = fields[_this.props.name].normalize;
              if (!options) return value;

              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              return _normalize2.default.apply(void 0, [options, value].concat(args));
            }
          }, fieldProps));
        });
      });
    }
  }]);

  return FormField;
}(_react.default.PureComponent);

var _default = (0, _reactIntl.injectIntl)(FormField);

exports.default = _default;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelectors = exports.usersOperations = exports.usersTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(88));

var usersTypes = _interopRequireWildcard(__webpack_require__(50));

exports.usersTypes = usersTypes;

var usersOperations = _interopRequireWildcard(__webpack_require__(89));

exports.usersOperations = usersOperations;

var usersSelectors = _interopRequireWildcard(__webpack_require__(66));

exports.usersSelectors = usersSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalData = exports.isEditModalOpen = exports.isAllDeselected = exports.isAllSelected = exports.getNumSelected = exports.getSelected = exports.getList = void 0;

var getList = function getList(state) {
  return state.getIn(["users", "list"]);
};

exports.getList = getList;

var getSelected = function getSelected(state) {
  return (// eslint-disable-next-line lodash/prefer-lodash-method
    state.getIn(["users", "list"]).filter(function (item) {
      return !!item.get("isSelected");
    })
  );
};

exports.getSelected = getSelected;

var getNumSelected = function getNumSelected(state) {
  return getSelected(state).size;
};

exports.getNumSelected = getNumSelected;

var isAllSelected = function isAllSelected(state) {
  return getList(state).size === getSelected(state).size;
};

exports.isAllSelected = isAllSelected;

var isAllDeselected = function isAllDeselected(state) {
  return getSelected(state).size === 0;
};

exports.isAllDeselected = isAllDeselected;

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
/* 67 */,
/* 68 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _immutable = __webpack_require__(15);

var _normalize = _interopRequireDefault(__webpack_require__(45));

var _validate2 = _interopRequireDefault(__webpack_require__(70));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormComponent, _React$Component);

  _createClass(FormComponent, null, [{
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
      // remove error status of the field changed
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _.keys(this.cachedErrors[this.formName] || {})[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;

          if (values.get(field) !== prevValues.get(field)) {
            delete this.cachedErrors[this.formName][field];
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
                  _context.next = 24;
                  break;
                }

                field = _step2.value;
                value = values.get(field); // transform value first if requested

                if (!(transform && this.fields[field].transform)) {
                  _context.next = 17;
                  break;
                }

                transformed = (0, _normalize.default)(this.fields[field].transform, value, value, values, values);

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

                if (!this.cachedErrors[this.formName]) this.cachedErrors[this.formName] = {};
                if (errors.length) this.cachedErrors[this.formName][field] = errors;else delete this.cachedErrors[this.formName][field];

              case 21:
                _iteratorNormalCompletion2 = true;
                _context.next = 8;
                break;

              case 24:
                _context.next = 30;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](6);
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
                _context.next = 43;
                break;

              case 40:
                _context.prev = 40;
                _context.t1 = _context["catch"](1);
                console.error(_context.t1);

              case 43:
                if (!_.keys(this.cachedErrors[this.formName] || {}).length) {
                  _context.next = 45;
                  break;
                }

                throw _.cloneDeep(this.cachedErrors[this.formName]);

              case 45:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 40], [6, 26, 30, 38], [31,, 33, 37]]);
      }));

      function doValidate(_x, _x2, _x3, _x4) {
        return _doValidate.apply(this, arguments);
      }

      return doValidate;
    }()
  }, {
    key: "onValidate",
    value: function () {
      var _onValidate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _this2 = this;

        var _len,
            args,
            _key,
            _args2 = arguments;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args2[_key];
                }

                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    try {
                      resolve(_this2.doValidate.apply(_this2, args));
                    } catch (error) {
                      reject(error);
                    }
                  });
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onValidate() {
        return _onValidate.apply(this, arguments);
      }

      return onValidate;
    }()
  }]);

  function FormComponent(props) {
    var _this;

    _classCallCheck(this, FormComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormComponent).call(this, props));
    _this.submit = _this.submit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FormComponent, [{
    key: "validate",
    value: function () {
      var _validate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        var errors;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.constructor.doValidate(this.props.getValue(), this.props.dispatch, this.props, undefined, false);

              case 3:
                _context3.next = 8;
                break;

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);
                errors = _context3.t0;

              case 8:
                _context3.next = 10;
                return this.props.updateValidation(errors);

              case 10:
                return _context3.abrupt("return", errors ? errors : true);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 5]]);
      }));

      function validate() {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: "submit",
    value: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4() {
        var valid;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.validate();

              case 3:
                valid = _context4.sent;

                if (!(valid !== true)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", valid);

              case 6:
                _context4.next = 8;
                return this.props.handleSubmit();

              case 8:
                return _context4.abrupt("return", _context4.sent);

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 11]]);
      }));

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var tokenize = __webpack_require__(46);

var validator = __webpack_require__(47); //let allCountries, iso2Lookup;


var _require = __webpack_require__(23),
    allCountries = _require.allCountries,
    iso2Lookup = _require.iso2Lookup;
/**
 * Validation function for Redux Form
 * takes input like "rule1:param1:param2|rule2:param1:param2|..."
 *
 * re:regexp:flags            value should match the regular expression "regexp" with "flags"
 * required                   value is required
 * required:otherField        value is required if otherField is not empty
 * phone                      value is a phone number
 * email                      value is an email
 * password:length            value is a password of "length" characters (6 if omitted)
 * credit_card:number         value is credit card number
 * credit_card:date           value is credit card expiration date
 * credit_card:secret         value is credit card CVV2 code
 * match:otherField           value should be the same as the value of otherField
 */


module.exports = function validate(props, options, value, allValues) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tokenize(options, "\\", "|")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;
      var params = tokenize(rule, "\\", ":");
      if (!params.length) continue;
      var msg = void 0;
      if (params[0][0] === "!") msg = params.shift().slice(1);

      var _command = params.shift();

      rules[_command] = {
        msg: msg,
        params: params
      };
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

      if (allValues && rules.required.params.length && rules.required.params[0]) {
        var other = allValues.get(rules.required.params[0]);
        if (!other || !other.length) failed = false;
      }

      if (failed) errors.push("ERROR_FIELD_REQUIRED");
    }
  } else {
    // all the other rules only apply to non-empty value
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = commands[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var command = _step2.value;
        var success = void 0;
        var tmp = void 0;
        var search = void 0;
        var normalized = void 0;

        switch (command) {
          case "re":
            tmp = new RegExp(rules[command].params[0], rules[command].params[1] || undefined);
            success = value.match(tmp);
            if (!success) errors.push(rules[command].msg || "ERROR_INVALID_PATTERN");
            break;

          case "phone":
            // validate phone number in international format
            if (!validator.isEmpty(value)) {
              normalized = _.replace(value, /[^0-9]+/g, "");

              if (normalized.length !== 12) {
                errors.push(rules[command].msg || "ERROR_INVALID_PHONE");
              } else {
                search = allCountries && iso2Lookup && allCountries[iso2Lookup[allValues.get("country")]];
                if (search && search.dialCode) success = _.startsWith(normalized, search.dialCode);else success = true;

                if (!success) {
                  errors.push(rules[command].msg || "ERROR_INVALID_PHONE_COUNTRY");
                }
              }
            }

            break;

          case "email":
            // validate email
            if (!validator.isEmail(value)) errors.push(rules[command].msg || "ERROR_INVALID_EMAIL");
            break;

          case "password":
            // validate password, first param is password length (6 by default)
            tmp = rules[command].params.length && rules[command].params[0] || 6;
            if (value.length < tmp) errors.push(rules[command].msg || "ERROR_INVALID_PASSWORD");
            break;

          case "credit_card":
            // validate credit card attribute set by first param ("number", "date" or "secret")
            normalized = _.replace(value, /[^0-9]+/g, "");

            switch (rules[command].params.length && rules[command].params[0]) {
              case "number":
                if (normalized.length !== 16 || !validator.isCreditCard(normalized)) {
                  errors.push(rules[command].msg || "ERROR_INVALID_CREDIT_CARD_NUMBER");
                }

                break;

              case "date":
                if (normalized.length !== 4) {
                  errors.push(rules[command].msg || "ERROR_INVALID_CREDIT_CARD_DATE");
                } else {
                  tmp = [parseInt(normalized.slice(0, 2)), parseInt(normalized.slice(2))];

                  if (tmp[0] < 1 || tmp[0] > 12 || tmp[1] < new Date().getFullYear() - 2000) {
                    errors.push(rules[command].msg || "ERROR_INVALID_CREDIT_CARD_DATE");
                  }
                }

                break;

              case "secret":
                if (normalized.length !== 3) {
                  errors.push(rules[command].msg || "ERROR_INVALID_CREDIT_CARD_SECRET");
                }

                break;
            }

            break;

          case "match":
            // this rule is triggered when field set by first param has other value than this one
            tmp = rules[command].params.length && rules[command].params[0];
            if (tmp && allValues && allValues.get(tmp) !== value) errors.push(rules[command].msg || "ERROR_MISMATCHED_VALUES");
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _styles = __webpack_require__(3);

var _TextField = _interopRequireDefault(__webpack_require__(72));

var _Errors = _interopRequireDefault(__webpack_require__(22));

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

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    }
  };
};

var MyText =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MyText, _React$PureComponent);

  function MyText(props) {
    var _this;

    _classCallCheck(this, MyText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyText).call(this, props));
    _this.input = _react.default.createRef();
    _this.cachedValue = props.input.value;
    _this.cachedPosition = 0;
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MyText, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.input.current) {
        // fix cursor position on changing the value to the normalized variant
        var cur = this.props.input.value || "";
        var cached = this.cachedValue || "";

        if (this.cachedPosition !== cached.length) {
          var str = cached.substr(0, this.cachedPosition);
          var index = cur.indexOf(str);
          index = index === -1 ? this.cachedPosition : index + this.cachedPosition;
          var delta = cur.length - cached.length;
          if (delta > 0) index += delta;
          if (index <= cur.length) this.input.current.setSelectionRange(index, index);
        }
      }

      this.cachedValue = this.props.input.value;
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      this.cachedPosition = evt.target.selectionEnd;
      this.cachedValue = evt.target.value;
      this.forceUpdate();
      return this.props.input.onChange(evt.target.value);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(evt) {
      this.cachedPosition = evt.target.selectionEnd;
      this.forceUpdate();
      return this.props.input.onFocus(evt);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      return this.props.input.onBlur(evt);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errors = this.props.meta.error ? _react.default.createElement(_Errors.default, {
        errors: this.props.meta.error
      }) : null;
      return _react.default.createElement(_TextField.default, {
        className: this.props.className,
        autoComplete: "off",
        autoFocus: this.props.autoFocus,
        fullWidth: true,
        variant: this.props.variant || (this.props.type === "textarea" ? "outlined" : "standard"),
        type: this.props.type,
        multiline: this.props.type === "textarea",
        rows: this.props.rows,
        rowsMax: this.props.rows,
        value: this.props.input.value ? this.props.input.value.toString() : "",
        label: this.props.label,
        disabled: this.props.meta.submitting || this.props.disabled,
        error: !!errors,
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
            if (_this2.props.onSubmit && evt.keyCode === 13) {
              evt.preventDefault();
              evt.stopPropagation();

              _this2.props.onSubmit();
            }
          }
        }
      });
    }
  }]);

  return MyText;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles)(MyText);

exports.default = _default;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InfoOutlined");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _immutable = __webpack_require__(9);

var _styles = __webpack_require__(3);

var _Select = _interopRequireDefault(__webpack_require__(77));

var _FormControl = _interopRequireDefault(__webpack_require__(48));

var _FormHelperText = _interopRequireDefault(__webpack_require__(49));

var _MenuItem = _interopRequireDefault(__webpack_require__(52));

var _InputLabel = _interopRequireDefault(__webpack_require__(78));

var _FilledInput = _interopRequireDefault(__webpack_require__(79));

var _Input = _interopRequireDefault(__webpack_require__(80));

var _Errors = _interopRequireDefault(__webpack_require__(22));

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

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    }
  };
};

var MySelect =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MySelect, _React$PureComponent);

  function MySelect(props) {
    var _this;

    _classCallCheck(this, MySelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MySelect).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MySelect, [{
    key: "handleChange",
    value: function handleChange(evt) {
      return this.props.input.onChange(evt.target.value);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(evt) {
      return this.props.input.onFocus(evt);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      return this.props.input.onBlur(evt);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errors = this.props.meta.error ? _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, _react.default.createElement(_Errors.default, {
        errors: this.props.meta.error
      })) : null;
      var SelectInput = this.props.variant === "filled" ? _FilledInput.default : _Input.default;
      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_InputLabel.default, {
        htmlFor: this.props.fieldId
      }, this.props.label), _react.default.createElement(_Select.default, {
        value: this.props.input.value || "",
        native: this.props.native,
        autoFocus: this.props.autoFocus,
        disabled: this.props.meta.submitting || this.props.disabled,
        onChange: this.handleChange,
        input: _react.default.createElement(SelectInput, {
          inputProps: {
            id: this.props.fieldId,
            onKeyDown: function onKeyDown(evt) {
              if (_this2.props.onSubmit && evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();

                _this2.props.onSubmit();
              }
            }
          }
        })
      }, !this.props.native && // eslint-disable-next-line lodash/prefer-lodash-method
      this.props.options.map(function (item, index) {
        return _react.default.createElement(_MenuItem.default, {
          key: "item-".concat(index),
          value: item.get("value")
        }, item.get("label"));
      }), !!this.props.native && // eslint-disable-next-line lodash/prefer-lodash-method
      this.props.options.map(function (item, index) {
        return _react.default.createElement("option", {
          key: "item-".concat(index),
          value: item.get("value")
        }, item.get("label"));
      })), errors);
    }
  }]);

  return MySelect;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles)(MySelect);

exports.default = _default;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FilledInput");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _styles = __webpack_require__(3);

var _FormControl = _interopRequireDefault(__webpack_require__(48));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(82));

var _FormHelperText = _interopRequireDefault(__webpack_require__(49));

var _Checkbox = _interopRequireDefault(__webpack_require__(62));

var _Errors = _interopRequireDefault(__webpack_require__(22));

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

var styles = function styles() {
  return {
    formHelper: {
      margin: 0
    },
    label: {
      marginLeft: 0
    }
  };
};

var MyCheckbox =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MyCheckbox, _React$PureComponent);

  function MyCheckbox(props) {
    var _this;

    _classCallCheck(this, MyCheckbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyCheckbox).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MyCheckbox, [{
    key: "handleChange",
    value: function handleChange(evt, isChecked) {
      return this.props.input.onChange(isChecked);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(evt) {
      return this.props.input.onFocus(evt);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      return this.props.input.onBlur(evt);
    }
  }, {
    key: "render",
    value: function render() {
      var errors = this.props.meta.error ? _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, _react.default.createElement(_Errors.default, {
        errors: this.props.meta.error
      })) : null;
      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_FormControlLabel.default, {
        classes: {
          root: this.props.classes.label
        },
        control: _react.default.createElement(_Checkbox.default, {
          id: this.props.fieldId,
          value: "on",
          autoFocus: this.props.autoFocus,
          checked: this.props.input.value,
          disabled: this.props.meta.submitting || this.props.disabled,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          color: this.props.color || "primary"
        }),
        label: this.props.label
      }), errors);
    }
  }]);

  return MyCheckbox;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(MyCheckbox);

exports.default = _default;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(9);

var _reduxImmutable = __webpack_require__(11);

var types = _interopRequireWildcard(__webpack_require__(50));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  list: List([
    Map({
      id: String,
      isSelected: Boolean,
      name: String,
      email: String,
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
      if (!_.isUndefined(action.list)) // eslint-disable-next-line lodash/prefer-lodash-method
        return (0, _immutable.fromJS)(action.list).map(function (item, index) {
          return item.set("isSelected", !!state.getIn([index, "isSelected"]));
        });
      break;

    case types.SET_SELECTED:
      if (!_.isUndefined(action.userId)) return state.withMutations(function (list) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        var index = list.findIndex(function (item) {
          return item.get("id") === action.userId;
        });
        if (index !== -1) list.setIn([index, "isSelected"], !!action.isSelected);
      });
      break;

    case types.SELECT_ALL:
      // eslint-disable-next-line lodash/prefer-lodash-method
      return state.map(function (item) {
        return item.set("isSelected", true);
      });

    case types.DESELECT_ALL:
      // eslint-disable-next-line lodash/prefer-lodash-method
      return state.map(function (item) {
        return item.set("isSelected", false);
      });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.edit = exports.create = exports.editFirstSelected = exports.deselectAll = exports.selectAll = exports.setSelected = exports.hideEditModal = exports.showEditModal = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var actions = _interopRequireWildcard(__webpack_require__(90));

var selectors = _interopRequireWildcard(__webpack_require__(66));

var _app = __webpack_require__(10);

var _constants = _interopRequireDefault(__webpack_require__(5));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var showEditModal = actions.showEditModal;
exports.showEditModal = showEditModal;
var hideEditModal = actions.hideEditModal;
exports.hideEditModal = hideEditModal;
var setSelected = actions.setSelected;
exports.setSelected = setSelected;
var selectAll = actions.selectAll;
exports.selectAll = selectAll;
var deselectAll = actions.deselectAll;
exports.deselectAll = deselectAll;

var editFirstSelected = function editFirstSelected() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState) {
        var selected;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selected = selectors.getSelected(getState());

                if (!selected.size) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", dispatch(actions.showEditModal({
                  userId: selected.first().get("id")
                })));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.editFirstSelected = editFirstSelected;

var create = function create(_ref2) {
  var name = _ref2.name,
      email = _ref2.email,
      password = _ref2.password,
      isAdmin = _ref2.isAdmin;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch) {
        var result, response, errors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error;

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
                result = {};
                errors = response && _.get(response, "errors", []);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 16;

                for (_iterator = errors[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  error = _step.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context2.next = 24;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](16);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 24:
                _context2.prev = 24;
                _context2.prev = 25;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 27:
                _context2.prev = 27;

                if (!_didIteratorError) {
                  _context2.next = 30;
                  break;
                }

                throw _iteratorError;

              case 30:
                return _context2.finish(27);

              case 31:
                return _context2.finish(24);

              case 32:
                if (!_.keys(result).length) result = {
                  _error: "EDIT_USER_FAILED"
                };

              case 33:
                _context2.next = 38;
                break;

              case 35:
                _context2.prev = 35;
                _context2.t1 = _context2["catch"](1);
                console.error(_context2.t1);

              case 38:
                return _context2.abrupt("return", result);

              case 39:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 35], [16, 20, 24, 32], [25,, 27, 31]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.create = create;

var edit = function edit(_ref4) {
  var id = _ref4.id,
      name = _ref4.name,
      email = _ref4.email,
      password = _ref4.password,
      isAdmin = _ref4.isAdmin;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        var result, response, errors, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, error;

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
                result = {};
                errors = response && _.get(response, "errors", []);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context3.prev = 16;

                for (_iterator2 = errors[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  error = _step2.value;
                  if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
                }

                _context3.next = 24;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](16);
                _didIteratorError2 = true;
                _iteratorError2 = _context3.t0;

              case 24:
                _context3.prev = 24;
                _context3.prev = 25;

                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }

              case 27:
                _context3.prev = 27;

                if (!_didIteratorError2) {
                  _context3.next = 30;
                  break;
                }

                throw _iteratorError2;

              case 30:
                return _context3.finish(27);

              case 31:
                return _context3.finish(24);

              case 32:
                if (!_.keys(result).length) result = {
                  _error: "EDIT_USER_FAILED"
                };

              case 33:
                _context3.next = 38;
                break;

              case 35:
                _context3.prev = 35;
                _context3.t1 = _context3["catch"](1);
                console.error(_context3.t1);

              case 38:
                return _context3.abrupt("return", result);

              case 39:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 35], [16, 20, 24, 32], [25,, 27, 31]]);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.edit = edit;

var remove = function remove(_ref6) {
  var id = _ref6.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        var response;
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
                return _context4.abrupt("return", response && _.get(response, "data.deleteUser.success") || false);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x5) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEditModal = exports.showEditModal = exports.deselectAll = exports.selectAll = exports.setSelected = exports.setList = void 0;

var types = _interopRequireWildcard(__webpack_require__(50));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var setList = function setList(_ref) {
  var list = _ref.list;
  return {
    type: types.SET_LIST,
    list: list
  };
};

exports.setList = setList;

var setSelected = function setSelected(_ref2) {
  var userId = _ref2.userId,
      isSelected = _ref2.isSelected;
  return {
    type: types.SET_SELECTED,
    userId: userId,
    isSelected: isSelected
  };
};

exports.setSelected = setSelected;

var selectAll = function selectAll() {
  return {
    type: types.SELECT_ALL
  };
};

exports.selectAll = selectAll;

var deselectAll = function deselectAll() {
  return {
    type: types.DESELECT_ALL
  };
};

exports.deselectAll = deselectAll;

var showEditModal = function showEditModal() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      userId = _ref3.userId;

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
/* 91 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 92 */,
/* 93 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(239);


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _UsersPage.default;
  }
});

var _UsersPage = _interopRequireDefault(__webpack_require__(240));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _reactRedux = __webpack_require__(14);

var _auth = __webpack_require__(6);

var _users = __webpack_require__(65);

var _UsersPage = _interopRequireDefault(__webpack_require__(241));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: _auth.authSelectors.isAuthenticated(state)
  };
};

var UsersPage = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_UsersPage.default);

UsersPage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var store, req;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, req = _ref.req;
            _context.next = 3;
            return store.dispatch(_users.usersOperations.load({
              req: req
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = UsersPage;
exports.default = _default;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _styles = __webpack_require__(3);

var _Grid = _interopRequireDefault(__webpack_require__(8));

var _Users = _interopRequireDefault(__webpack_require__(242));

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
    layout: {
      width: "100%",
      flex: 1,
      padding: theme.main.spacing
    }
  };
};

var UsersPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UsersPage, _React$Component);

  function UsersPage() {
    _classCallCheck(this, UsersPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(UsersPage).apply(this, arguments));
  }

  _createClass(UsersPage, [{
    key: "render",
    value: function render() {
      if (!this.props.isAuthenticated) return null;
      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: this.props.theme.main.spacing
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Users.default, null))));
    }
  }]);

  return UsersPage;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(UsersPage);

exports.default = _default;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(14);

var _reactIntl = __webpack_require__(7);

var _users = __webpack_require__(65);

var _Users = _interopRequireDefault(__webpack_require__(243));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: _users.usersSelectors.getList(state),
    isAllSelected: _users.usersSelectors.isAllSelected(state),
    isAllDeselected: _users.usersSelectors.isAllDeselected(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onCreate: function onCreate() {
      return dispatch(_users.usersOperations.showEditModal());
    },
    onEdit: function onEdit() {
      return dispatch(_users.usersOperations.editFirstSelected());
    },
    onDelete: function onDelete(userId) {
      return dispatch(_users.usersOperations.remove({
        id: userId
      }));
    },
    onSetSelected: function onSetSelected(userId, isSelected) {
      return dispatch(_users.usersOperations.setSelected({
        userId: userId,
        isSelected: isSelected
      }));
    },
    onSelectAll: function onSelectAll() {
      return dispatch(_users.usersOperations.selectAll());
    },
    onDeselectAll: function onDeselectAll() {
      return dispatch(_users.usersOperations.deselectAll());
    }
  };
};

var Users = (0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Users.default));
var _default = Users;
exports.default = _default;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(93));

var _immutable = __webpack_require__(9);

var _reactIntl = __webpack_require__(7);

var _styles = __webpack_require__(3);

var _Table = _interopRequireDefault(__webpack_require__(244));

var _TableBody = _interopRequireDefault(__webpack_require__(245));

var _TableCell = _interopRequireDefault(__webpack_require__(246));

var _TableHead = _interopRequireDefault(__webpack_require__(247));

var _TableRow = _interopRequireDefault(__webpack_require__(248));

var _Paper = _interopRequireDefault(__webpack_require__(91));

var _Button = _interopRequireDefault(__webpack_require__(43));

var _Checkbox = _interopRequireDefault(__webpack_require__(62));

var _EditUserModal = _interopRequireDefault(__webpack_require__(249));

var _ConfirmModal = _interopRequireDefault(__webpack_require__(253));

var _responsiveTable = _interopRequireDefault(__webpack_require__(254));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  return {
    paper: {
      padding: "1rem"
    },
    table: _defineProperty({}, theme.breakpoints.down("sm"), (0, _responsiveTable.default)(theme)),
    buttons: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignContent: "stretch"
    },
    button: {
      margin: "0.5rem"
    },
    checkboxField: {
      width: 1
    },
    checkbox: {
      padding: 0
    }
  };
};

var Users =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Users, _React$Component);

  function Users(props) {
    var _this;

    _classCallCheck(this, Users);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Users).call(this, props));
    _this.state = {
      isConfirmOpen: false
    };
    _this.handleCreateAction = _this.handleCreateAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleEditAction = _this.handleEditAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDeleteAction = _this.handleDeleteAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCancelDelete = _this.handleCancelDelete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleConfirmDelete = _this.handleConfirmDelete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Users, [{
    key: "handleToggleAll",
    value: function handleToggleAll() {
      var forceOff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (forceOff || this.props.isAllSelected) this.props.onDeselectAll();else this.props.onSelectAll();
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(userId) {
      // eslint-disable-next-line lodash/prefer-lodash-method
      var user = this.props.users.find(function (user) {
        return user.get("id") === userId;
      });
      var isSelected = user && user.get("isSelected");
      this.props.onSetSelected(userId, !isSelected);
    }
  }, {
    key: "handleCreateAction",
    value: function handleCreateAction() {
      this.props.onCreate();
    }
  }, {
    key: "handleEditAction",
    value: function handleEditAction() {
      this.props.onEdit();
    }
  }, {
    key: "handleDeleteAction",
    value: function handleDeleteAction() {
      this.setState({
        isConfirmOpen: true
      });
    }
  }, {
    key: "handleCancelDelete",
    value: function handleCancelDelete() {
      this.setState({
        isConfirmOpen: false
      });
    }
  }, {
    key: "handleConfirmDelete",
    value: function () {
      var _handleConfirmDelete = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this2 = this;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  isConfirmOpen: false
                });
                _context.next = 3;
                return Promise.all( // eslint-disable-next-line lodash/prefer-lodash-method
                this.props.users.filter(function (user) {
                  return user.get("isSelected");
                }).map(function (user) {
                  return _this2.props.onDelete(user.get("id"));
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleConfirmDelete() {
        return _handleConfirmDelete.apply(this, arguments);
      }

      return handleConfirmDelete;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: this.props.classes.buttons
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleCreateAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_CREATE_BUTTON"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: this.props.isAllDeselected,
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleEditAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_EDIT_BUTTON"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: this.props.isAllDeselected,
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleDeleteAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_DELETE_BUTTON"
      }))), _react.default.createElement(_Paper.default, {
        className: this.props.classes.paper
      }, _react.default.createElement(_Table.default, {
        padding: "dense",
        className: this.props.classes.table
      }, _react.default.createElement(_TableHead.default, null, _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, {
        padding: "none",
        classes: {
          root: this.props.classes.checkboxField
        }
      }, _react.default.createElement(_Checkbox.default, {
        checked: !!this.props.users.size && this.props.isAllSelected,
        classes: {
          root: this.props.classes.checkbox
        },
        indeterminate: !this.props.isAllSelected && !this.props.isAllDeselected,
        onChange: function onChange() {
          return _this3.handleToggleAll();
        },
        value: "on"
      })), _react.default.createElement(_TableCell.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_LOGIN_COLUMN"
      })), _react.default.createElement(_TableCell.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_ROLES_COLUMN"
      })))), _react.default.createElement(_TableBody.default, null, this.props.users.map(function (row, index) {
        return _react.default.createElement(_TableRow.default, {
          key: "row-".concat(index)
        }, _react.default.createElement(_TableCell.default, {
          padding: "none",
          className: (0, _classnames.default)(index % 2 ? "even" : "odd", row.get("isSelected") && "selected"),
          classes: {
            root: _this3.props.classes.checkboxField
          }
        }, _react.default.createElement(_Checkbox.default, {
          checked: !!row.get("isSelected"),
          classes: {
            root: _this3.props.classes.checkbox
          },
          onChange: function onChange() {
            return _this3.handleToggle(row.get("id"));
          },
          value: "on"
        })), _react.default.createElement(_TableCell.default, {
          className: (0, _classnames.default)(index % 2 ? "even" : "odd", row.get("isSelected") && "selected"),
          component: "th",
          scope: "row"
        }, row.get("email")), _react.default.createElement(_TableCell.default, {
          className: (0, _classnames.default)(index % 2 ? "even" : "odd", row.get("isSelected") && "selected")
        }, row.get("roles").toJS().map(function (item) {
          return _this3.props.intl.formatMessage({
            id: "EDIT_USER_".concat(item, "_LABEL")
          });
        }).join(", ")));
      })))), _react.default.createElement(_EditUserModal.default, null), _react.default.createElement(_ConfirmModal.default, {
        isOpen: this.state.isConfirmOpen,
        title: "DELETE_USER_TITLE",
        text: "DELETE_USER_TEXT",
        cancel: "DELETE_USER_CANCEL",
        submit: "DELETE_USER_SUBMIT",
        onCancel: this.handleCancelDelete,
        onSubmit: this.handleConfirmDelete
      }));
    }
  }]);

  return Users;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Users);

exports.default = _default;

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__(7);

var _users = __webpack_require__(65);

var _connectForm = _interopRequireDefault(__webpack_require__(55));

var _EditUserModal = _interopRequireDefault(__webpack_require__(250));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: _users.usersSelectors.getEditModalData(state),
    isOpen: _users.usersSelectors.isEditModalOpen(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onCancel: function onCancel() {
      return dispatch(_users.usersOperations.hideEditModal());
    },
    onLoad: function onLoad() {
      return dispatch(_users.usersOperations.load());
    },
    onCreate: function onCreate(name, email, password, isAdmin, isCallCenter) {
      return dispatch(_users.usersOperations.create({
        name: name,
        email: email,
        password: password,
        isAdmin: isAdmin,
        isCallCenter: isCallCenter
      }));
    },
    onEdit: function onEdit(id, name, email, password, isAdmin, isCallCenter) {
      return dispatch(_users.usersOperations.edit({
        id: id,
        name: name,
        email: email,
        password: password,
        isAdmin: isAdmin,
        isCallCenter: isCallCenter
      }));
    }
  };
};

var EditUserModal = (0, _reactIntl.injectIntl)((0, _connectForm.default)(_EditUserModal.default, mapStateToProps, mapDispatchToProps));
var _default = EditUserModal;
exports.default = _default;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _immutable = __webpack_require__(9);

var _reactIntl = __webpack_require__(7);

var _immutable2 = __webpack_require__(15);

var _styles = __webpack_require__(3);

var _Dialog = _interopRequireDefault(__webpack_require__(56));

var _DialogActions = _interopRequireDefault(__webpack_require__(57));

var _DialogContent = _interopRequireDefault(__webpack_require__(58));

var _DialogContentText = _interopRequireDefault(__webpack_require__(59));

var _DialogTitle = _interopRequireDefault(__webpack_require__(60));

var _Grid = _interopRequireDefault(__webpack_require__(8));

var _Button = _interopRequireDefault(__webpack_require__(43));

var _red = _interopRequireDefault(__webpack_require__(251));

var _Form2 = _interopRequireDefault(__webpack_require__(69));

var _Field = _interopRequireDefault(__webpack_require__(61));

var _constants = _interopRequireDefault(__webpack_require__(5));

var _user = _interopRequireDefault(__webpack_require__(252));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
    }
  };
};

var EditUserModal =
/*#__PURE__*/
function (_Form) {
  _inherits(EditUserModal, _Form);

  _createClass(EditUserModal, null, [{
    key: "onSubmit",
    value: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values, dispatch, props) {
        var result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!props.data) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return props.onEdit(props.data.get("id"), props.getValue("name") || null, props.getValue("email"), props.getValue("password"), props.getValue("isAdmin"));

              case 3:
                result = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.next = 8;
                return props.onCreate(props.getValue("name") || null, props.getValue("email"), props.getValue("password"), props.getValue("isAdmin"));

              case 8:
                result = _context.sent;

              case 9:
                if (!(result === true)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 12;
                return props.onLoad();

              case 12:
                _context.next = 16;
                break;

              case 14:
                if (!(result && _.isObject(result))) {
                  _context.next = 16;
                  break;
                }

                throw new _immutable2.SubmissionError(result);

              case 16:
                return _context.abrupt("return", result);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onSubmit(_x, _x2, _x3) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var state = {};
      /* eslint-disable lodash/prefer-lodash-method */

      if (prevState.isOpen !== nextProps.isOpen) {
        var name = nextProps.data && nextProps.data.get("name");
        var email = nextProps.data && nextProps.data.get("email");
        var isAdmin = !!(nextProps.data && nextProps.data.get("roles").includes(_constants.default.roles.ADMIN));
        nextProps.dispatch(nextProps.change("name", name || ""));
        nextProps.dispatch(nextProps.change("email", email || ""));
        nextProps.dispatch(nextProps.change("password", ""));
        nextProps.dispatch(nextProps.change("isAdmin", isAdmin));
        nextProps.dispatch(nextProps.clearAsyncError());
        nextProps.dispatch(nextProps.clearSubmitErrors());
        state.isOpen = nextProps.isOpen;
      }
      /* eslint-enable */


      return _.keys(state).length ? state : null;
    }
  }]);

  function EditUserModal(props) {
    var _this;

    _classCallCheck(this, EditUserModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditUserModal).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(EditUserModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_Dialog.default, {
        maxWidth: "xs",
        classes: {
          paper: this.props.classes.paper
        },
        open: this.props.isOpen,
        onClose: this.props.onCancel
      }, _react.default.createElement(_DialogTitle.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.data ? "EDIT_USER_TITLE_EDIT" : "EDIT_USER_TITLE_CREATE"
      })), this.props.error && _react.default.createElement(_DialogContent.default, null, _.map(_.isArray(this.props.error) ? this.props.error : [this.props.error], function (error, index) {
        return _react.default.createElement(_DialogContentText.default, {
          key: "error-".concat(index),
          classes: {
            root: _this2.props.classes.error
          }
        }, _.isArray(error) ? _react.default.createElement(_reactIntl.FormattedMessage, {
          id: error[0],
          values: error[1]
        }) : _react.default.createElement(_reactIntl.FormattedMessage, {
          id: error
        }));
      })), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16,
        component: "form",
        noValidate: true,
        autoComplete: "off",
        onSubmit: this.submit
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Field.default, {
        name: "name",
        type: "text",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Field.default, {
        name: "email",
        type: "text",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Field.default, {
        name: "password",
        type: "password",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_Field.default, {
        name: "isAdmin",
        type: "checkbox",
        onSubmit: this.submit
      })))), _react.default.createElement(_DialogActions.default, {
        classes: {
          root: this.props.classes.actions
        }
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: this.props.submitting,
        onClick: this.props.onCancel
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EDIT_USER_CANCEL"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        disabled: this.props.submitting,
        onClick: this.submit
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EDIT_USER_SUBMIT"
      }))));
    }
  }]);

  return EditUserModal;
}(_Form2.default);

_defineProperty(EditUserModal, "propTypes", _objectSpread({}, _Form2.default.propTypes, {
  intl: _reactIntl.intlShape,
  theme: _propTypes.default.object.isRequired,
  classes: _propTypes.default.object.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  data: _propTypes.default.instanceOf(_immutable.Map),
  onCancel: _propTypes.default.func.isRequired,
  onLoad: _propTypes.default.func.isRequired,
  onCreate: _propTypes.default.func.isRequired,
  onEdit: _propTypes.default.func.isRequired
}));

_defineProperty(EditUserModal, "formName", "editUserForm");

_defineProperty(EditUserModal, "fields", _user.default);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(EditUserModal);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: {
    label: "EDIT_USER_NAME_LABEL"
  },
  email: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required|email",
    label: "EDIT_USER_EMAIL_LABEL"
  },
  password: {
    label: "EDIT_USER_PASSWORD_LABEL",
    validate: "password"
  },
  isAdmin: {
    label: "EDIT_USER_ADMIN_LABEL"
  }
};

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _reactIntl = __webpack_require__(7);

var _styles = __webpack_require__(3);

var _Dialog = _interopRequireDefault(__webpack_require__(56));

var _DialogActions = _interopRequireDefault(__webpack_require__(57));

var _DialogContent = _interopRequireDefault(__webpack_require__(58));

var _DialogContentText = _interopRequireDefault(__webpack_require__(59));

var _DialogTitle = _interopRequireDefault(__webpack_require__(60));

var _Button = _interopRequireDefault(__webpack_require__(43));

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

var styles = function styles() {
  return {
    actions: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "1rem"
    }
  };
};

var ConfirmModal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ConfirmModal, _React$PureComponent);

  function ConfirmModal() {
    _classCallCheck(this, ConfirmModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfirmModal).apply(this, arguments));
  }

  _createClass(ConfirmModal, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Dialog.default, {
        maxWidth: "xs",
        open: this.props.isOpen,
        onClose: this.props.onCancel
      }, _react.default.createElement(_DialogTitle.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.title
      })), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_DialogContentText.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.text,
        values: this.props.values
      }))), _react.default.createElement(_DialogActions.default, {
        classes: {
          root: this.props.classes.actions
        }
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        onClick: this.props.onCancel
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.cancel
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        onClick: this.props.onSubmit
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.submit
      }))));
    }
  }]);

  return ConfirmModal;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(ConfirmModal);

exports.default = _default;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    "& table": {
      display: ["block", "!important"]
    },
    "& thead": {
      display: ["none", "!important"],
      background: [theme.palette.background.paper, "!important"]
    },
    "& tbody": {
      display: ["block", "!important"]
    },
    "& th": {
      display: ["block", "!important"],
      width: "100%",
      paddingLeft: ["1rem", "!important"],
      paddingRight: ["1rem", "!important"],
      "&:not(:last-child)": {
        borderColor: "transparent"
      }
    },
    "& td": {
      display: ["block", "!important"],
      width: "100%",
      paddingLeft: ["1rem", "!important"],
      paddingRight: ["1rem", "!important"],
      "&:not(:last-child)": {
        borderColor: "transparent"
      }
    },
    "& tr": {
      height: ["100%", "!important"],
      display: ["block", "!important"],
      paddingTop: ["0.25rem", "!important"],
      marginBottom: ["0.25rem", "!important"]
    }
  };
};

exports.default = _default;

/***/ })
/******/ ]);