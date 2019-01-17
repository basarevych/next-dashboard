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
/******/ 	return __webpack_require__(__webpack_require__.s = 284);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-relay");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-form/immutable");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelectors = exports.authOperations = exports.authTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(27));

var authTypes = _interopRequireWildcard(__webpack_require__(13));

exports.authTypes = authTypes;

var authOperations = _interopRequireWildcard(__webpack_require__(28));

exports.authOperations = authOperations;

var authSelectors = _interopRequireWildcard(__webpack_require__(18));

exports.authSelectors = authSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(31));

var appTypes = _interopRequireWildcard(__webpack_require__(15));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__(36));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__(39));

exports.appSelectors = appSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getFormErrors = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _react = _interopRequireDefault(__webpack_require__(1));

var _immutable = __webpack_require__(9);

var _reactRedux = __webpack_require__(10);

var _immutable2 = __webpack_require__(11);

var _reduxForm = __webpack_require__(30);

var _context2 = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getFormErrors = function getFormErrors(data) {
  var defaultMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "OPERATION_FAILED";
  var result = {};

  var errors = _.get(data, "errors", []);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var error = _step.value;
      if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._error = (result._error || []).concat([error.message]);
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

  if (!_.keys(result).length) result = {
    _error: defaultMessage
  };
  return result;
};

exports.getFormErrors = getFormErrors;

var _default = function _default(FormComponent, mapStateToProps, mapDispatchToProps, mergeProps) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var withContext = function withContext(WrappedComponent) {
    return function WithFormContext(props) {
      return _react.default.createElement(_context2.FormNameContext.Provider, {
        value: FormComponent.formName
      }, _react.default.createElement(_context2.FormFieldsContext.Provider, {
        value: FormComponent.fields
      }, _react.default.createElement(WrappedComponent, props)));
    };
  };

  var destroyOnUnmount = options.destroyOnUnmount,
      reduxOptions = _objectWithoutProperties(options, ["destroyOnUnmount"]);

  var Form = (0, _reactRedux.connect)(function (state, props) {
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
  }, mergeProps, _.keys(reduxOptions).length ? reduxOptions : undefined)(withContext((0, _immutable2.reduxForm)({
    form: FormComponent.formName,
    destroyOnUnmount: destroyOnUnmount || true,
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserProviders = exports.getAllProviders = exports.getRoles = exports.getEmail = exports.getName = exports.isAdmin = exports.isAuthenticated = exports.getCsrf = void 0;

var _reselect = __webpack_require__(22);

var _constants = _interopRequireDefault(__webpack_require__(7));

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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormFieldsContext = exports.FormNameContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormNameContext = _react.default.createContext({});

exports.FormNameContext = FormNameContext;

var FormFieldsContext = _react.default.createContext({});

exports.FormFieldsContext = FormFieldsContext;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var constants = __webpack_require__(7);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 23 */
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
    en: parse(__webpack_require__(32)),
    ru: parse(__webpack_require__(33))
  },
  getLocaleData: function getLocaleData() {
    return [__webpack_require__(34), __webpack_require__(35)];
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var moment = __webpack_require__(38); // Add locales:
//require("moment/locale/ru.js"); // en is already there


module.exports = moment;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__(6);

var _styles = __webpack_require__(5);

var _Errors = _interopRequireWildcard(__webpack_require__(84));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Errors = (0, _styles.withStyles)(_Errors.styles)((0, _reactIntl.injectIntl)(_Errors.default));
var _default = Errors;
exports.default = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("country-telephone-data");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(9);

var _reduxImmutable = __webpack_require__(16);

var types = _interopRequireWildcard(__webpack_require__(13));

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfile = exports.unlinkProvider = exports.linkProvider = exports.updateProfile = exports.finishEmailVerification = exports.requestEmailVerification = exports.signOut = exports.signUp = exports.signIn = exports.setStatus = exports.setCsrf = exports.setGoogleMapsKey = exports.setCookie = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _router = _interopRequireDefault(__webpack_require__(19));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(21));

var actions = _interopRequireWildcard(__webpack_require__(29));

var selectors = _interopRequireWildcard(__webpack_require__(18));

var _connectForm = __webpack_require__(17);

var _state = __webpack_require__(14);

var _constants = _interopRequireDefault(__webpack_require__(7));

var _SignIn = _interopRequireDefault(__webpack_require__(40));

var _SignUp = _interopRequireDefault(__webpack_require__(42));

var _SignOut = _interopRequireDefault(__webpack_require__(44));

var _RequestEmailVerification = _interopRequireDefault(__webpack_require__(46));

var _VerifyEmail = _interopRequireDefault(__webpack_require__(48));

var _UpdateProfile = _interopRequireDefault(__webpack_require__(50));

var _UnlinkProvider = _interopRequireDefault(__webpack_require__(52));

var _DeleteProfile = _interopRequireDefault(__webpack_require__(54));

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
      _regenerator.default.mark(function _callee(dispatch, getState, di) {
        var fetcher;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                fetcher = di.get("fetcher");
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

      return function (_x, _x2, _x3) {
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
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
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
                return dispatch(_state.appOperations.stop());

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

      return function (_x4, _x5, _x6) {
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
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        var storage, data;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                storage = di.get("storage");
                storage.set("notAnonymous", true);
                _context3.next = 4;
                return (0, _SignIn.default)(di, {
                  email: email,
                  password: password
                });

              case 4:
                data = _context3.sent;

                if (!_.get(data, "data.signIn.success", false)) {
                  _context3.next = 12;
                  break;
                }

                _context3.next = 8;
                return dispatch(setStatus());

              case 8:
                if (true) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 11;
                return window.__NEXT_PAGE_INIT({
                  store: window.__NEXT_REDUX_STORE__
                });

              case 11:
                return _context3.abrupt("return", true);

              case 12:
                return _context3.abrupt("return", (0, _connectForm.getFormErrors)(data, "APP_AUTH_FAILED"));

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x7, _x8, _x9) {
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
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _SignUp.default)(di, {
                  email: email,
                  password: password
                });

              case 2:
                data = _context4.sent;

                if (!_.get(data, "data.signUp.success", false)) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 6;
                return dispatch(setStatus());

              case 6:
                if (true) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 9;
                return window.__NEXT_PAGE_INIT({
                  store: window.__NEXT_REDUX_STORE__
                });

              case 9:
                return _context4.abrupt("return", true);

              case 10:
                return _context4.abrupt("return", (0, _connectForm.getFormErrors)(data, "APP_AUTH_EMAIL_TAKEN"));

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x10, _x11, _x12) {
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
      _regenerator.default.mark(function _callee5(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _SignOut.default)(di);

              case 2:
                data = _context5.sent;

                if (!_.get(data, "data.signOut.success", false)) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 6;
                return dispatch(setStatus());

              case 6:
                return _context5.abrupt("return", true);

              case 7:
                return _context5.abrupt("return", false);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x13, _x14, _x15) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.signOut = signOut;

var requestEmailVerification = function requestEmailVerification() {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _RequestEmailVerification.default)(di);

              case 2:
                data = _context6.sent;
                return _context6.abrupt("return", !!_.get(data, "data.requestEmailVerification.success", false));

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x16, _x17, _x18) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.requestEmailVerification = requestEmailVerification;

var finishEmailVerification = function finishEmailVerification(_ref9) {
  var token = _ref9.token;
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _VerifyEmail.default)(di, {
                  token: token
                });

              case 2:
                data = _context7.sent;

                if (!_.get(data, "data.verifyEmail.success", false)) {
                  _context7.next = 7;
                  break;
                }

                _context7.next = 6;
                return dispatch(setStatus());

              case 6:
                return _context7.abrupt("return", true);

              case 7:
                return _context7.abrupt("return", false);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x19, _x20, _x21) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
};

exports.finishEmailVerification = finishEmailVerification;

var updateProfile = function updateProfile(_ref11) {
  var email = _ref11.email,
      name = _ref11.name,
      password = _ref11.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref12 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _UpdateProfile.default)(di, {
                  email: email,
                  name: name,
                  password: password
                });

              case 2:
                data = _context8.sent;

                if (!_.get(data, "data.updateProfile.success", false)) {
                  _context8.next = 5;
                  break;
                }

                return _context8.abrupt("return", true);

              case 5:
                return _context8.abrupt("return", (0, _connectForm.getFormErrors)(data));

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function (_x22, _x23, _x24) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
};

exports.updateProfile = updateProfile;

var linkProvider = function linkProvider(_ref13) {
  var provider = _ref13.provider;
  return (
    /*#__PURE__*/
    function () {
      var _ref14 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(dispatch, getState, di) {
        var cookie;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                cookie = di.get("cookie");
                cookie.set("redirect", window.location.pathname, 1 / 24);
                _context9.next = 4;
                return dispatch(_state.appOperations.stop());

              case 4:
                window.location.href = window.location.origin + "/api/oauth/" + _.lowerCase(provider);
                return _context9.abrupt("return", true);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function (_x25, _x26, _x27) {
        return _ref14.apply(this, arguments);
      };
    }()
  );
};

exports.linkProvider = linkProvider;

var unlinkProvider = function unlinkProvider(_ref15) {
  var provider = _ref15.provider;
  return (
    /*#__PURE__*/
    function () {
      var _ref16 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _UnlinkProvider.default)(di, {
                  provider: provider
                });

              case 2:
                data = _context10.sent;

                if (!_.get(data, "data.unlinkProvider.success", false)) {
                  _context10.next = 7;
                  break;
                }

                _context10.next = 6;
                return dispatch(setStatus());

              case 6:
                return _context10.abrupt("return", true);

              case 7:
                return _context10.abrupt("return", false);

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function (_x28, _x29, _x30) {
        return _ref16.apply(this, arguments);
      };
    }()
  );
};

exports.unlinkProvider = unlinkProvider;

var deleteProfile = function deleteProfile() {
  return (
    /*#__PURE__*/
    function () {
      var _ref17 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return (0, _DeleteProfile.default)(di);

              case 2:
                data = _context11.sent;

                if (!_.get(data, "data.deleteProfile.success", false)) {
                  _context11.next = 8;
                  break;
                }

                _context11.next = 6;
                return dispatch(_state.appOperations.stop());

              case 6:
                window.location.href = "/";
                return _context11.abrupt("return", true);

              case 8:
                return _context11.abrupt("return", false);

              case 9:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function (_x31, _x32, _x33) {
        return _ref17.apply(this, arguments);
      };
    }()
  );
};

exports.deleteProfile = deleteProfile;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGoogleMapsKey = exports.setStatus = exports.setCsrf = void 0;

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

var setStatus = function setStatus(status) {
  return _objectSpread({
    type: types.SET_STATUS
  }, status);
};

exports.setStatus = setStatus;

var setGoogleMapsKey = function setGoogleMapsKey(_ref2) {
  var googleMapskey = _ref2.googleMapskey;
  return {
    type: types.SET_GOOGLE_MAPS_KEY,
    googleMapskey: googleMapskey
  };
};

exports.setGoogleMapsKey = setGoogleMapsKey;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(16);

var types = _interopRequireWildcard(__webpack_require__(15));

var _locales = _interopRequireDefault(__webpack_require__(23));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  created: Number, // timestamp
  locale: String,
  statusCode: Number, // current HTTP status code
  subscriptionsServer: String,
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

var subscriptionsServerReducer = function subscriptionsServerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.subscriptionsServer)) return action.subscriptionsServer;
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
  locale: localeReducer,
  statusCode: statusCodeReducer,
  subscriptionsServer: subscriptionsServerReducer,
  isStarted: isStartedReducer,
  isConnected: isConnectedReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 32 */
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Dashboard","TITLE_DASHBOARD":"Dashboard","MENU_FORMS":"Forms","TITLE_FORMS":"Forms","MENU_CHARTS":"Charts","TITLE_CHARTS":"Charts","MENU_TABLES":"Tables","TITLE_TABLES":"Tables","MENU_MAPS":"Maps","TITLE_MAPS":"Maps","MENU_NOTIFICATIONS":"Notifications","TITLE_NOTIFICATIONS":"Notifications","MENU_TYPOGRAPHY":"Typography","TITLE_TYPOGRAPHY":"Typography","MENU_ICONS":"Icons","TITLE_ICONS":"Icons","MENU_USERS":"Users","TITLE_USERS":"Users","SIDEBAR_BENCHMARKS_LINK":"Benchmark Results","SIDEBAR_RESPONSIVENESS_LINK":"Responsiveness Test","HEADER_INBOX_LABEL":"Inbox","HEADER_PROFILE_LABEL":"Profile","USERS_LOGIN_COLUMN":"Login","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create user","EDIT_USER_TITLE_EDIT":"Edit user","EDIT_USER_NAME_LABEL":"Name","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_ANONYMOUS_LABEL":"Anonymous","EDIT_USER_AUTHENTICATED_LABEL":"Authenticated","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","DELETE_USER_TITLE":"Delete users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","FORMS_MESSAGE_TITLE":"It's alive!","FORMS_MESSAGE_CONTENT":["The form example below is fully implemented, fields normalize and validate the input."," You can try to fill out and submit this form to see it in action."],"FORMS_SUCCESS_TITLE":"Congratulations!","FORMS_SUCCESS_TEXT":"The form is finished and ready to be submitted to the backend","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Prev","WIZARD_NEXT_BUTTON":"Next","WIZARD_SUBMIT_BUTTON":"Done","WIZARD_ERROR_LABEL":"Please fill out this form","SHIPPING_STEP_TITLE":"Shipping","SHIPPING_STEP_DESCR":"Choose your shipping options","SHIPPING_FIRST_NAME_LABEL":"First name","SHIPPING_MIDDLE_NAME_LABEL":"Middle name (optional)","SHIPPING_LAST_NAME_LABEL":"Last name","SHIPPING_ADDRESS_LABEL":"Address","SHIPPING_CITY_LABEL":"City/town","SHIPPING_STATE_LABEL":"State/Province/Region (if required)","SHIPPING_CODE_LABEL":"ZIP/Postal code","SHIPPING_COUNTRY_LABEL":"Country","SHIPPING_PHONE_LABEL":"Phone number","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"What is a dog?","SHIPPING_Q2":"What kinds of dogs are there?","SHIPPING_Q3":"How do you acquire a dog?","BILLING_STEP_TITLE":"Billing","BILLING_STEP_DESCR":"Enter billing information","BILLING_CARD_NUMBER_LABEL":"Credit card number","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Billing address is the same as shipping address","BILLING_Q1":"What is Lorem Ipsum?","BILLING_Q2":"When did they start using it?","CONFIRM_STEP_TITLE":"Confirm","CONFIRM_STEP_DESCR_SUCCESS":"The form is ready to be submitted","CONFIRM_STEP_DESCR_FAILURE":"The form is not completed yet","CONFIRM_SHIPPING_LABEL":"Shipping Information","CONFIRM_BILLING_LABEL":"Billing Information","CONFIRM_FIRST_NAME_LABEL":"First name:","CONFIRM_MIDDLE_NAME_LABEL":"Middle name:","CONFIRM_LAST_NAME_LABEL":"Last name:","CONFIRM_ADDRESS_LABEL":"Address:","CONFIRM_CITY_LABEL":"City/town:","CONFIRM_STATE_LABEL":"State/Province/Region:","CONFIRM_CODE_LABEL":"ZIP/Postal code:","CONFIRM_COUNTRY_LABEL":"Country:","CONFIRM_PHONE_LABEL":"Phone number:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Credit card number:","CONFIRM_CARD_DATE_LABEL":"Credit card expires:","APP_AUTH_TITLE":"Authentication","APP_AUTH_ANONYMOUS_BUTTON":"Anonymous","APP_AUTH_CREDENTIALS_LABEL":"Sign In using Credentials","APP_AUTH_NEW_USER_LABEL":"I don't have an account yet, please create one","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SERVICE_BUTTON":"Sign In with","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","APP_AUTH_EMAIL_TAKEN":"This email is already registered","OPERATION_FAILED":"Operation failed","ERROR":"Error","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_PATTERN":"Please provide a valid value","ERROR_INVALID_EMAIL":"Please provide a valid email address","ERROR_INVALID_PHONE":"Please, provide a valid phone number","ERROR_INVALID_PHONE_COUNTRY":"This is not a valid phone number for this country","ERROR_INVALID_CREDIT_CARD_NUMBER":"Please, provide a valid credit card number","ERROR_INVALID_CREDIT_CARD_DATE":"Please, provide a valid credit card expiration date","ERROR_INVALID_CREDIT_CARD_SECRET":"Please, provide a valid credit card CVV2 code","ERROR_INVALID_PASSWORD":"Password should be at least 6 characters long","ERROR_MISMATCHED_PASSWORDS":"The two passwords typed do not match"};

/***/ }),
/* 33 */
/***/ (function(module) {

module.exports = {};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/ru.js");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = exports.start = exports.init = exports.create = exports.stop = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var actions = _interopRequireWildcard(__webpack_require__(37));

var _state = __webpack_require__(12);

var _constants = _interopRequireDefault(__webpack_require__(7));

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
var stop = actions.stop; // called in App.getInitialProps()

exports.stop = stop;

var create = function create(_ref) {
  var statusCode = _ref.statusCode,
      cookie = _ref.cookie,
      csrf = _ref.csrf,
      status = _ref.status,
      subscriptionsServer = _ref.subscriptionsServer,
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
                return dispatch(actions.create({
                  subscriptionsServer: subscriptionsServer
                }));

              case 2:
                if (!statusCode) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return dispatch(setStatusCode({
                  code: statusCode
                }));

              case 5:
                if (!cookie) {
                  _context.next = 8;
                  break;
                }

                _context.next = 8;
                return dispatch(_state.authOperations.setCookie({
                  cookie: cookie
                }));

              case 8:
                if (!csrf) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return dispatch(_state.authOperations.setCsrf({
                  csrf: csrf
                }));

              case 11:
                if (!status) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return dispatch(_state.authOperations.setStatus(status));

              case 14:
                if (!googleMapsKey) {
                  _context.next = 17;
                  break;
                }

                _context.next = 17;
                return dispatch(_state.authOperations.setGoogleMapsKey({
                  googleMapsKey: googleMapsKey
                }));

              case 17:
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
}; // called in App.costructor()


exports.create = create;

var init = function init() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", dispatch(actions.init()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.init = init;
var fontsLoaded; // called in App.componentDidMount()

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
                return Promise.all([dispatch(_state.authOperations.setStatus()), fontsLoaded]);

              case 2:
                return _context3.abrupt("return", dispatch(actions.start()));

              case 3:
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

exports.start = start;

var setCookie = function setCookie(_ref5) {
  var name = _ref5.name,
      value = _ref5.value,
      days = _ref5.days;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                di.get("cookie").set(name, value, days);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4, _x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.setCookie = setCookie;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setConnected = exports.setStatusCode = exports.stop = exports.start = exports.init = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__(24));

var types = _interopRequireWildcard(__webpack_require__(15));

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnected = exports.isStarted = exports.getLocale = exports.getSubscriptionsServer = exports.getStatusCode = exports.getCreated = void 0;

var getCreated = function getCreated(state) {
  return state.getIn(["app", "created"]);
};

exports.getCreated = getCreated;

var getStatusCode = function getStatusCode(state) {
  return state.getIn(["app", "statusCode"]);
};

exports.getStatusCode = getStatusCode;

var getSubscriptionsServer = function getSubscriptionsServer(state) {
  return state.getIn(["app", "subscriptionsServer"]);
};

exports.getSubscriptionsServer = getSubscriptionsServer;

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(41);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash b8b211a3ad4d2961ae62c9647d8108ca
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInInput = {
  email?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
};
export type SignInMutationVariables = {|
  input: SignInInput
|};
export type SignInMutationResponse = {|
  +signIn: ?{|
    +success: ?boolean
  |}
|};
export type SignInMutation = {|
  variables: SignInMutationVariables,
  response: SignInMutationResponse,
|};
*/

/*
mutation SignInMutation(
  $input: SignInInput!
) {
  signIn(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignInInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "signIn",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "SignInInput!"
    }],
    "concreteType": "SignInPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "SignInMutation",
    "id": null,
    "text": "mutation SignInMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    success\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "SignInMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "SignInMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '153fa344d90b87f0fcb641bc7a1ed120';
module.exports = node;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(43);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 407c6a79885b5ce4d606bc5e2865b27a
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpInput = {
  email?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
};
export type SignUpMutationVariables = {|
  input: SignUpInput
|};
export type SignUpMutationResponse = {|
  +signUp: ?{|
    +success: ?boolean
  |}
|};
export type SignUpMutation = {|
  variables: SignUpMutationVariables,
  response: SignUpMutationResponse,
|};
*/

/*
mutation SignUpMutation(
  $input: SignUpInput!
) {
  signUp(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignUpInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "signUp",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "SignUpInput!"
    }],
    "concreteType": "SignUpPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "SignUpMutation",
    "id": null,
    "text": "mutation SignUpMutation(\n  $input: SignUpInput!\n) {\n  signUp(input: $input) {\n    success\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "SignUpMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "SignUpMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '8d27fab1ea3de67cd05b843a4fb0c3b4';
module.exports = node;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(45);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 35523b15e9e70c75ec84ff3a6a23eab1
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignOutInput = {
  clientMutationId?: ?string
};
export type SignOutMutationVariables = {|
  input: SignOutInput
|};
export type SignOutMutationResponse = {|
  +signOut: ?{|
    +success: ?boolean
  |}
|};
export type SignOutMutation = {|
  variables: SignOutMutationVariables,
  response: SignOutMutationResponse,
|};
*/

/*
mutation SignOutMutation(
  $input: SignOutInput!
) {
  signOut(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignOutInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "signOut",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "SignOutInput!"
    }],
    "concreteType": "SignOutPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "SignOutMutation",
    "id": null,
    "text": "mutation SignOutMutation(\n  $input: SignOutInput!\n) {\n  signOut(input: $input) {\n    success\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "SignOutMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "SignOutMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '417ec230bfa986933ff799e6fab9074c';
module.exports = node;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(47);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash c93a1d649c3075c466d44d741327b282
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RequestEmailVerificationInput = {
  clientMutationId?: ?string
};
export type RequestEmailVerificationMutationVariables = {|
  input: RequestEmailVerificationInput
|};
export type RequestEmailVerificationMutationResponse = {|
  +requestEmailVerification: ?{|
    +success: ?boolean
  |}
|};
export type RequestEmailVerificationMutation = {|
  variables: RequestEmailVerificationMutationVariables,
  response: RequestEmailVerificationMutationResponse,
|};
*/

/*
mutation RequestEmailVerificationMutation(
  $input: RequestEmailVerificationInput!
) {
  requestEmailVerification(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "RequestEmailVerificationInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "requestEmailVerification",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "RequestEmailVerificationInput!"
    }],
    "concreteType": "RequestEmailVerificationPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "RequestEmailVerificationMutation",
    "id": null,
    "text": "mutation RequestEmailVerificationMutation(\n  $input: RequestEmailVerificationInput!\n) {\n  requestEmailVerification(input: $input) {\n    success\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "RequestEmailVerificationMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "RequestEmailVerificationMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '501ecd6de6ba0d802c7cd7159a7a1df4';
module.exports = node;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(49);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash f88cdf868c0e80c586bf954060416c72
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type VerifyEmailInput = {
  emailToken?: ?string,
  clientMutationId?: ?string,
};
export type VerifyEmailMutationVariables = {|
  input: VerifyEmailInput
|};
export type VerifyEmailMutationResponse = {|
  +verifyEmail: ?{|
    +success: ?boolean
  |}
|};
export type VerifyEmailMutation = {|
  variables: VerifyEmailMutationVariables,
  response: VerifyEmailMutationResponse,
|};
*/

/*
mutation VerifyEmailMutation(
  $input: VerifyEmailInput!
) {
  verifyEmail(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "VerifyEmailInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "verifyEmail",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "VerifyEmailInput!"
    }],
    "concreteType": "VerifyEmailPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "VerifyEmailMutation",
    "id": null,
    "text": "mutation VerifyEmailMutation(\n  $input: VerifyEmailInput!\n) {\n  verifyEmail(input: $input) {\n    success\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "VerifyEmailMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "VerifyEmailMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '697c5198cee43cb38a38a4ac286ff409';
module.exports = node;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(51);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 3d1c556b0cf7612a25b1ea70b6fbd5e8
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProfileInput = {
  email?: ?string,
  name?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
};
export type UpdateProfileMutationVariables = {|
  input: UpdateProfileInput
|};
export type UpdateProfileMutationResponse = {|
  +updateProfile: ?{|
    +success: ?boolean
  |}
|};
export type UpdateProfileMutation = {|
  variables: UpdateProfileMutationVariables,
  response: UpdateProfileMutationResponse,
|};
*/

/*
mutation UpdateProfileMutation(
  $input: UpdateProfileInput!
) {
  updateProfile(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateProfileInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "updateProfile",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "UpdateProfileInput!"
    }],
    "concreteType": "UpdateProfilePayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "UpdateProfileMutation",
    "id": null,
    "text": "mutation UpdateProfileMutation(\n  $input: UpdateProfileInput!\n) {\n  updateProfile(input: $input) {\n    success\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "UpdateProfileMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "UpdateProfileMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '9e47c867af2046685911f7372c7f5bae';
module.exports = node;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(53);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 8f40615b90acaa4034e7d9662c6f3581
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UnlinkProviderInput = {
  provider?: ?string,
  clientMutationId?: ?string,
};
export type UnlinkProviderMutationVariables = {|
  input: UnlinkProviderInput
|};
export type UnlinkProviderMutationResponse = {|
  +unlinkProvider: ?{|
    +success: ?boolean
  |}
|};
export type UnlinkProviderMutation = {|
  variables: UnlinkProviderMutationVariables,
  response: UnlinkProviderMutationResponse,
|};
*/

/*
mutation UnlinkProviderMutation(
  $input: UnlinkProviderInput!
) {
  unlinkProvider(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "UnlinkProviderInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "unlinkProvider",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "UnlinkProviderInput!"
    }],
    "concreteType": "UnlinkProviderPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "UnlinkProviderMutation",
    "id": null,
    "text": "mutation UnlinkProviderMutation(\n  $input: UnlinkProviderInput!\n) {\n  unlinkProvider(input: $input) {\n    success\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "UnlinkProviderMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "UnlinkProviderMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '47e6fd901615a28cf21bd56913699a6f';
module.exports = node;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(55);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash e4df89a8fbe88c24bb1197155129bf94
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProfileInput = {
  clientMutationId?: ?string
};
export type DeleteProfileMutationVariables = {|
  input: DeleteProfileInput
|};
export type DeleteProfileMutationResponse = {|
  +deleteProfile: ?{|
    +success: ?boolean
  |}
|};
export type DeleteProfileMutation = {|
  variables: DeleteProfileMutationVariables,
  response: DeleteProfileMutationResponse,
|};
*/

/*
mutation DeleteProfileMutation(
  $input: DeleteProfileInput!
) {
  deleteProfile(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteProfileInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteProfile",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "DeleteProfileInput!"
    }],
    "concreteType": "DeleteProfilePayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "DeleteProfileMutation",
    "id": null,
    "text": "mutation DeleteProfileMutation(\n  $input: DeleteProfileInput!\n) {\n  deleteProfile(input: $input) {\n    success\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "DeleteProfileMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "DeleteProfileMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '52e325cd180e1e90940a792f459eb397';
module.exports = node;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var tokenize = __webpack_require__(59);

var validator = __webpack_require__(60); //let allCountries, iso2Lookup;


var _require = __webpack_require__(26),
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 59 */
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
/* 60 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.DESELECT_ALL = exports.SELECT_ALL = exports.SET_SELECTED = void 0;
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
/* 64 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__(6);

var _Field = _interopRequireDefault(__webpack_require__(80));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = (0, _reactIntl.injectIntl)(_Field.default);
var _default = Field;
exports.default = _default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelectors = exports.usersOperations = exports.usersTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(100));

var usersTypes = _interopRequireWildcard(__webpack_require__(63));

exports.usersTypes = usersTypes;

var usersOperations = _interopRequireWildcard(__webpack_require__(101));

exports.usersOperations = usersOperations;

var usersSelectors = _interopRequireWildcard(__webpack_require__(75));

exports.usersSelectors = usersSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalUserId = exports.isEditModalOpen = exports.getSelected = void 0;

var _reselect = __webpack_require__(22);

var getSelected = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["users", "selected"]);
}, function (selected) {
  return selected.toJS();
});
exports.getSelected = getSelected;

var isEditModalOpen = function isEditModalOpen(state) {
  return state.getIn(["users", "isEditModalOpen"]);
};

exports.isEditModalOpen = isEditModalOpen;

var getEditModalUserId = function getEditModalUserId(state) {
  return state.getIn(["users", "editModalUserId"]);
};

exports.getEditModalUserId = getEditModalUserId;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchQuery = exports.NextQueryRenderer = exports.RelayProvider = exports.RelayContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _relayRuntime = __webpack_require__(98);

var _relayQueryLookupRenderer = _interopRequireDefault(__webpack_require__(109));

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

var RelayContext = _react.default.createContext({});

exports.RelayContext = RelayContext;

var RelayProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RelayProvider, _React$Component);

  function RelayProvider() {
    _classCallCheck(this, RelayProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(RelayProvider).apply(this, arguments));
  }

  _createClass(RelayProvider, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(RelayContext.Provider, {
        value: this.props.environment
      }, this.props.children);
    }
  }]);

  return RelayProvider;
}(_react.default.Component);

exports.RelayProvider = RelayProvider;

var NextQueryRenderer =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(NextQueryRenderer, _React$Component2);

  function NextQueryRenderer() {
    _classCallCheck(this, NextQueryRenderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(NextQueryRenderer).apply(this, arguments));
  }

  _createClass(NextQueryRenderer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["children"]);

      return _react.default.createElement(RelayContext.Consumer, null, function (environment) {
        return _react.default.createElement(_relayQueryLookupRenderer.default, _extends({
          lookup: true,
          environment: environment
        }, props), children);
      });
    }
  }]);

  return NextQueryRenderer;
}(_react.default.Component);

exports.NextQueryRenderer = NextQueryRenderer;

var fetchQuery = function fetchQuery(environment) {
  return function (query, variables) {
    return (0, _relayRuntime.fetchQuery)(environment, query, variables);
  };
};

exports.fetchQuery = fetchQuery;

/***/ }),
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _immutable = __webpack_require__(11);

var _normalize = _interopRequireDefault(__webpack_require__(58));

var _validate2 = _interopRequireDefault(__webpack_require__(79));

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var tokenize = __webpack_require__(59);

var validator = __webpack_require__(60); //let allCountries, iso2Lookup;


var _require = __webpack_require__(26),
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactIntl = __webpack_require__(6);

var _immutable = __webpack_require__(11);

var _context = __webpack_require__(20);

var _normalize2 = _interopRequireDefault(__webpack_require__(58));

var _TextContainer = _interopRequireDefault(__webpack_require__(81));

var _SelectContainer = _interopRequireDefault(__webpack_require__(88));

var _CheckboxContainer = _interopRequireDefault(__webpack_require__(94));

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
          Component = _TextContainer.default;
          break;

        case "select":
          Component = _SelectContainer.default;
          break;

        case "checkbox":
          Component = _CheckboxContainer.default;
          break;
      }

      return _react.default.createElement(_context.FormNameContext.Consumer, null, function (formName) {
        return _react.default.createElement(_context.FormFieldsContext.Consumer, null, function (fields) {
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

var _default = FormField;
exports.default = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__(5);

var _Text = _interopRequireWildcard(__webpack_require__(82));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Text = (0, _styles.withStyles)(_Text.styles)(_Text.default);
var _default = Text;
exports.default = _default;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _TextField = _interopRequireDefault(__webpack_require__(83));

var _ErrorsContainer = _interopRequireDefault(__webpack_require__(25));

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

exports.styles = styles;

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

      var errors = this.props.meta.error ? _react.default.createElement(_ErrorsContainer.default, {
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

var _default = MyText;
exports.default = _default;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _immutable = __webpack_require__(9);

var _reactIntl = __webpack_require__(6);

var _List = _interopRequireDefault(__webpack_require__(85));

var _ListItem = _interopRequireDefault(__webpack_require__(86));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(65));

var _ListItemText = _interopRequireDefault(__webpack_require__(66));

var _InfoOutlined = _interopRequireDefault(__webpack_require__(87));

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

exports.styles = styles;

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

var _default = Errors;
exports.default = _default;

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InfoOutlined");

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__(5);

var _Select = _interopRequireWildcard(__webpack_require__(89));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Select = (0, _styles.withStyles)(_Select.styles)(_Select.default);
var _default = Select;
exports.default = _default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _immutable = __webpack_require__(9);

var _Select = _interopRequireDefault(__webpack_require__(90));

var _FormControl = _interopRequireDefault(__webpack_require__(61));

var _FormHelperText = _interopRequireDefault(__webpack_require__(62));

var _MenuItem = _interopRequireDefault(__webpack_require__(64));

var _InputLabel = _interopRequireDefault(__webpack_require__(91));

var _FilledInput = _interopRequireDefault(__webpack_require__(92));

var _Input = _interopRequireDefault(__webpack_require__(93));

var _ErrorsContainer = _interopRequireDefault(__webpack_require__(25));

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

exports.styles = styles;

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
      }, _react.default.createElement(_ErrorsContainer.default, {
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

var _default = MySelect;
exports.default = _default;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FilledInput");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__(5);

var _Checkbox = _interopRequireWildcard(__webpack_require__(95));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Checkbox = (0, _styles.withStyles)(_Checkbox.styles)(_Checkbox.default);
var _default = Checkbox;
exports.default = _default;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _FormControl = _interopRequireDefault(__webpack_require__(61));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(96));

var _FormHelperText = _interopRequireDefault(__webpack_require__(62));

var _Checkbox = _interopRequireDefault(__webpack_require__(67));

var _ErrorsContainer = _interopRequireDefault(__webpack_require__(25));

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

exports.styles = styles;

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
      }, _react.default.createElement(_ErrorsContainer.default, {
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

var _default = MyCheckbox;
exports.default = _default;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 97 */,
/* 98 */
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ }),
/* 99 */,
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(9);

var _reduxImmutable = __webpack_require__(16);

var types = _interopRequireWildcard(__webpack_require__(63));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  selected: Set([String]), // IDs
  editModalUserId: String, // null when creating a new user
  isEditModalOpen: false,
})
*/
var selectedReducer = function selectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Set)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_SELECTED:
      if (!_.isUndefined(action.userId) && !_.isUndefined(action.isSelected)) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        if (state.includes(action.userId)) return state.delete(action.userId);else return state.add(action.userId);
      }

      break;

    case types.SELECT_ALL:
      if (!_.isUndefined(action.userIds)) return (0, _immutable.Set)(action.userIds);
      break;

    case types.DESELECT_ALL:
      return (0, _immutable.Set)([]);
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
  selected: selectedReducer,
  editModalUserId: editModalUserIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.edit = exports.create = exports.editFirstSelected = exports.deselectAll = exports.selectAll = exports.setSelected = exports.hideEditModal = exports.showEditModal = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var actions = _interopRequireWildcard(__webpack_require__(102));

var selectors = _interopRequireWildcard(__webpack_require__(75));

var _constants = _interopRequireDefault(__webpack_require__(7));

var _connectForm = __webpack_require__(17);

var _CreateUser = _interopRequireDefault(__webpack_require__(103));

var _EditUser = _interopRequireDefault(__webpack_require__(105));

var _DeleteUser = _interopRequireDefault(__webpack_require__(107));

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

                if (!selected.length) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", dispatch(actions.showEditModal({
                  userId: selected[0]
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
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _CreateUser.default)(di, {
                  name: name,
                  email: email,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN])
                });

              case 2:
                data = _context2.sent;

                if (!_.get(data, "data.createUser.userEdge.node.id", null)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context2.abrupt("return", true);

              case 7:
                return _context2.abrupt("return", (0, _connectForm.getFormErrors)(data));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3, _x4, _x5) {
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
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _EditUser.default)(di, {
                  id: id,
                  name: name,
                  email: email,
                  password: password,
                  roles: _.compact([isAdmin && _constants.default.roles.ADMIN])
                });

              case 2:
                data = _context3.sent;

                if (!_.get(data, "data.editUser.userEdge.node.id", null)) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context3.abrupt("return", true);

              case 7:
                return _context3.abrupt("return", (0, _connectForm.getFormErrors)(data));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x6, _x7, _x8) {
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
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _DeleteUser.default)(di, {
                  id: id
                });

              case 2:
                data = _context4.sent;
                return _context4.abrupt("return", !!_.get(data, "data.deleteUser.userEdge.node.id", null));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x9, _x10, _x11) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEditModal = exports.showEditModal = exports.deselectAll = exports.selectAll = exports.setSelected = void 0;

var types = _interopRequireWildcard(__webpack_require__(63));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var setSelected = function setSelected(_ref) {
  var userId = _ref.userId,
      isSelected = _ref.isSelected;
  return {
    type: types.SET_SELECTED,
    userId: userId,
    isSelected: isSelected
  };
};

exports.setSelected = setSelected;

var selectAll = function selectAll(_ref2) {
  var userIds = _ref2.userIds;
  return {
    type: types.SELECT_ALL,
    userIds: userIds
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(104);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 8822ac06f99dc30cc35fa291a9a7f2c8
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRole = "ADMIN" | "ANONYMOUS" | "AUTHENTICATED" | "%future added value";
export type CreateUserInput = {
  email?: ?string,
  name?: ?string,
  password?: ?string,
  roles?: ?$ReadOnlyArray<?UserRole>,
  clientMutationId?: ?string,
};
export type CreateUserMutationVariables = {|
  input: CreateUserInput
|};
export type CreateUserMutationResponse = {|
  +createUser: ?{|
    +userEdge: ?{|
      +node: ?{|
        +id: string
      |}
    |}
  |}
|};
export type CreateUserMutation = {|
  variables: CreateUserMutationVariables,
  response: CreateUserMutationResponse,
|};
*/

/*
mutation CreateUserMutation(
  $input: CreateUserInput!
) {
  createUser(input: $input) {
    userEdge {
      node {
        id
      }
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateUserInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "createUser",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "CreateUserInput!"
    }],
    "concreteType": "CreateUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "userEdge",
      "storageKey": null,
      "args": null,
      "concreteType": "UserEdge",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }]
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "CreateUserMutation",
    "id": null,
    "text": "mutation CreateUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    userEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "CreateUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "CreateUserMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '4d017819edd0b2ef41273c13de0e8039';
module.exports = node;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(106);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 0dba4ef84e95f7a3ac1f331ec9d577fc
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRole = "ADMIN" | "ANONYMOUS" | "AUTHENTICATED" | "%future added value";
export type EditUserInput = {
  id: string,
  email?: ?string,
  name?: ?string,
  password?: ?string,
  roles?: ?$ReadOnlyArray<?UserRole>,
  clientMutationId?: ?string,
};
export type EditUserMutationVariables = {|
  input: EditUserInput
|};
export type EditUserMutationResponse = {|
  +editUser: ?{|
    +userEdge: ?{|
      +node: ?{|
        +id: string
      |}
    |}
  |}
|};
export type EditUserMutation = {|
  variables: EditUserMutationVariables,
  response: EditUserMutationResponse,
|};
*/

/*
mutation EditUserMutation(
  $input: EditUserInput!
) {
  editUser(input: $input) {
    userEdge {
      node {
        id
      }
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditUserInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "editUser",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "EditUserInput!"
    }],
    "concreteType": "EditUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "userEdge",
      "storageKey": null,
      "args": null,
      "concreteType": "UserEdge",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }]
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "EditUserMutation",
    "id": null,
    "text": "mutation EditUserMutation(\n  $input: EditUserInput!\n) {\n  editUser(input: $input) {\n    userEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "EditUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "EditUserMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '88d2eda75302f87b796990de2f381147';
module.exports = node;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mutation = function mutation() {
  return __webpack_require__(108);
};

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 381c9201f886bcb132e1804847c4c8bc
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteUserInput = {
  id: string,
  clientMutationId?: ?string,
};
export type DeleteUserMutationVariables = {|
  input: DeleteUserInput
|};
export type DeleteUserMutationResponse = {|
  +deleteUser: ?{|
    +userEdge: ?{|
      +node: ?{|
        +id: string
      |}
    |}
  |}
|};
export type DeleteUserMutation = {|
  variables: DeleteUserMutationVariables,
  response: DeleteUserMutationResponse,
|};
*/

/*
mutation DeleteUserMutation(
  $input: DeleteUserInput!
) {
  deleteUser(input: $input) {
    userEdge {
      node {
        id
      }
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteUserInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteUser",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "DeleteUserInput!"
    }],
    "concreteType": "DeleteUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "userEdge",
      "storageKey": null,
      "args": null,
      "concreteType": "UserEdge",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }]
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "DeleteUserMutation",
    "id": null,
    "text": "mutation DeleteUserMutation(\n  $input: DeleteUserInput!\n) {\n  deleteUser(input: $input) {\n    userEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "DeleteUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "DeleteUserMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '1ac1045b2ff2d482fa8414db6e0c1261';
module.exports = node;

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("relay-query-lookup-renderer");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__(6);

var _styles = __webpack_require__(5);

var _ErrorMessage = _interopRequireWildcard(__webpack_require__(114));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ErrorMessage = (0, _styles.withStyles)(_ErrorMessage.styles)((0, _reactIntl.injectIntl)(_ErrorMessage.default));
var _default = ErrorMessage;
exports.default = _default;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactIntl = __webpack_require__(6);

var _httpStatusCodes = _interopRequireDefault(__webpack_require__(115));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    layout: _defineProperty({
      width: "100%",
      maxWidth: 1300 + 2 * theme.main.spacing,
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.main.spacing
    }, theme.breakpoints.down("md"), {
      flexDirection: "column",
      padding: theme.main.spacing / 2,
      maxWidth: 1300 + theme.main.spacing
    }),
    code: _defineProperty({
      fontSize: "300%",
      textShadow: "2px 2px 4px #000000",
      padding: "0.5rem 2rem",
      color: "1px solid ".concat(theme.palette.text.primary),
      borderRight: "1px solid ".concat(theme.palette.text.disabled)
    }, theme.breakpoints.down("md"), {
      borderRight: "none"
    }),
    text: {
      fontSize: "200%",
      textShadow: "2px 2px 4px #000000",
      padding: "0.5rem 2rem",
      color: "1px solid ".concat(theme.palette.text.secondary)
    }
  };
};

exports.styles = styles;

var ErrorMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorMessage, _React$Component);

  function ErrorMessage() {
    _classCallCheck(this, ErrorMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorMessage).apply(this, arguments));
  }

  _createClass(ErrorMessage, [{
    key: "getCode",
    value: function getCode() {
      if (this.props.error) return this.props.intl.formatMessage({
        id: "ERROR"
      });
      if (!this.props.statusCode || this.props.statusCode === 200) return 500;
      return this.props.statusCode;
    }
  }, {
    key: "getText",
    value: function getText() {
      if (this.props.error) return this.props.error.message;
      return _httpStatusCodes.default.getStatusText(this.getCode());
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement("div", {
        className: this.props.classes.code
      }, this.getCode()), _react.default.createElement("div", {
        className: this.props.classes.text
      }, this.getText()));
    }
  }]);

  return ErrorMessage;
}(_react.default.Component);

var _default = ErrorMessage;
exports.default = _default;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),
/* 116 */,
/* 117 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
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
/* 129 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),
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
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(285);


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _UsersPageContainer.default;
  }
});

var _UsersPageContainer = _interopRequireDefault(__webpack_require__(286));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(10);

var _state = __webpack_require__(12);

var _UsersPage = _interopRequireDefault(__webpack_require__(287));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: _state.authSelectors.isAuthenticated(state)
  };
};

var UsersPage = (0, _reactRedux.connect)(mapStateToProps)(_UsersPage.default);
UsersPage.getInitialProps = _UsersPage.default.getInitialProps;
var _default = UsersPage;
exports.default = _default;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.query = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactRelay = __webpack_require__(4);

var _Relay = __webpack_require__(76);

var _UserListContainer = _interopRequireWildcard(__webpack_require__(288));

var _ErrorMessageContainer = _interopRequireDefault(__webpack_require__(113));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var defaultVariables = {
  first: _UserListContainer.pageSize
};

var query = function query() {
  return __webpack_require__(309);
};

exports.query = query;

var UsersPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UsersPage, _React$Component);

  _createClass(UsersPage, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var statusCode, fetchQuery;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                statusCode = _ref.statusCode, fetchQuery = _ref.fetchQuery;

                if (!(statusCode !== 200)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return fetchQuery(query, defaultVariables);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function UsersPage(props) {
    _classCallCheck(this, UsersPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(UsersPage).call(this, props));
  }

  _createClass(UsersPage, [{
    key: "render",
    value: function render() {
      if (!this.props.isAuthenticated) return null;
      return _react.default.createElement(_Relay.NextQueryRenderer, {
        query: query,
        variables: defaultVariables,
        render: function render(_ref2) {
          var error = _ref2.error,
              props = _ref2.props;
          if (error) return _react.default.createElement(_ErrorMessageContainer.default, {
            error: error
          });
          if (!props) return null;
          return _react.default.createElement(_UserListContainer.default, {
            viewer: props.viewer
          });
        }
      });
    }
  }]);

  return UsersPage;
}(_react.default.Component);

var _default = UsersPage;
exports.default = _default;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pageSize", {
  enumerable: true,
  get: function get() {
    return _UserList.pageSize;
  }
});
exports.default = void 0;

var _reactRedux = __webpack_require__(10);

var _reactRelay = __webpack_require__(4);

var _reactIntl = __webpack_require__(6);

var _styles = __webpack_require__(5);

var _state = __webpack_require__(74);

var _UserList = _interopRequireWildcard(__webpack_require__(289));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isEditing: _state.usersSelectors.isEditModalOpen(state),
    selected: _state.usersSelectors.getSelected(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onCreate: function onCreate() {
      return dispatch(_state.usersOperations.showEditModal());
    },
    onEdit: function onEdit() {
      return dispatch(_state.usersOperations.editFirstSelected());
    },
    onDelete: function onDelete(userId) {
      return dispatch(_state.usersOperations.remove({
        id: userId
      }));
    },
    onSetSelected: function onSetSelected(userId, isSelected) {
      return dispatch(_state.usersOperations.setSelected({
        userId: userId,
        isSelected: isSelected
      }));
    },
    onSelectAll: function onSelectAll(userIds) {
      return dispatch(_state.usersOperations.selectAll({
        userIds: userIds
      }));
    },
    onDeselectAll: function onDeselectAll() {
      return dispatch(_state.usersOperations.deselectAll());
    }
  };
};

var Users = (0, _reactRelay.createRefetchContainer)((0, _styles.withStyles)(_UserList.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_UserList.default))), {
  viewer: function viewer() {
    return __webpack_require__(307);
  }
}, function () {
  return __webpack_require__(308);
});
var _default = Users;
exports.default = _default;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = exports.pageSize = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactIntl = __webpack_require__(6);

var _reactRelay = __webpack_require__(4);

var _Typography = _interopRequireDefault(__webpack_require__(56));

var _Button = _interopRequireDefault(__webpack_require__(57));

var _Toolbar = _interopRequireDefault(__webpack_require__(110));

var _IconButton = _interopRequireDefault(__webpack_require__(111));

var _Table = _interopRequireDefault(__webpack_require__(290));

var _TableBody = _interopRequireDefault(__webpack_require__(291));

var _TableCell = _interopRequireDefault(__webpack_require__(129));

var _TableHead = _interopRequireDefault(__webpack_require__(292));

var _TableRow = _interopRequireDefault(__webpack_require__(130));

var _TablePagination = _interopRequireDefault(__webpack_require__(293));

var _Paper = _interopRequireDefault(__webpack_require__(112));

var _Checkbox = _interopRequireDefault(__webpack_require__(67));

var _Refresh = _interopRequireDefault(__webpack_require__(294));

var _responsiveTable = _interopRequireDefault(__webpack_require__(295));

var _UserItemContainer = _interopRequireWildcard(__webpack_require__(296));

var _EditUserModalContainer = _interopRequireDefault(__webpack_require__(299));

var _ConfirmModalContainer = _interopRequireDefault(__webpack_require__(304));

var _Relay = __webpack_require__(76);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var pageSize = 20;
exports.pageSize = pageSize;

var styles = function styles(theme) {
  return _objectSpread({
    layout: {
      width: "100%",
      flex: 1,
      padding: theme.main.spacing
    },
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
    paper: {
      background: theme.main.paper
    },
    table: _defineProperty({}, theme.breakpoints.down("sm"), (0, _responsiveTable.default)(theme)),
    grow: {
      flex: 1
    }
  }, (0, _UserItemContainer.styles)(theme));
};

exports.styles = styles;

var subscription = function subscription() {
  return __webpack_require__(306);
};

var UserList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserList, _React$Component);

  function UserList(props) {
    var _this;

    _classCallCheck(this, UserList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserList).call(this, props));
    _this.state = {
      pageSize: pageSize,
      pageNumber: 0,
      lastVariables: {
        first: pageSize
      },
      isConfirmOpen: false
    };
    _this.isDestroyed = false;
    _this.refreshTime = 0;
    _this.refreshTimer = null;
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCreateAction = _this.handleCreateAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleEditAction = _this.handleEditAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDeleteAction = _this.handleDeleteAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCancelDelete = _this.handleCancelDelete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleConfirmDelete = _this.handleConfirmDelete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleRefresh = _this.handleRefresh.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChangePage = _this.handleChangePage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChangeRowsPerPage = _this.handleChangeRowsPerPage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(UserList, [{
    key: "subscribe",
    value: function subscribe() {
      var _this2 = this;

      if (this.subscription) this.subscription.dispose();
      this.subscription = (0, _reactRelay.requestSubscription)(this.context, {
        subscription: subscription,
        variables: {},
        onCompleted: function onCompleted() {
          _this2.subscription = null;
          if (!_this2.isDestroyed) setTimeout(function () {
            return _this2.subscribe();
          }, 1000);
        },
        onError: function onError(error) {
          _this2.subscription = null;
          console.error(error);
          if (!_this2.isDestroyed) setTimeout(function () {
            return _this2.subscribe();
          }, 1000);
        },
        onNext: function onNext() {
          if (_this2.refreshTimer) return;

          var delta = Date.now() - _this2.refreshTime;

          _this2.refreshTimer = setTimeout(_this2.handleRefresh, delta > 1000 ? 1000 : delta);
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.subscribe();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      if (this.state.pageNumber * this.state.pageSize >= this.props.viewer.users.totalCount) {
        // we fell off the list - reset to the beginning
        var variables = {
          first: this.state.pageSize,
          after: null,
          last: null,
          before: null
        };
        this.props.relay.refetch(variables, null, function () {
          return _this3.setState({
            pageNumber: 0,
            lastVariables: variables
          });
        }, {
          force: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isDestroyed = true;

      if (this.subscription) {
        this.subscription.dispose();
        this.subscription = null;
      }

      if (this.refreshTimer) {
        clearTimeout(this.refreshTimer);
        this.refreshTimer = null;
      }
    }
  }, {
    key: "hasRecords",
    value: function hasRecords() {
      return this.props.viewer.users.edges.length > 0;
    }
  }, {
    key: "isAllSelected",
    value: function isAllSelected() {
      var list = _.map(this.props.viewer.users.edges, "node.id");

      return _.difference(list, this.props.selected).length === 0;
    }
  }, {
    key: "isAllDeselected",
    value: function isAllDeselected() {
      return this.props.selected.length === 0;
    }
  }, {
    key: "isSelected",
    value: function isSelected(userId) {
      return _.includes(this.props.selected, userId);
    }
  }, {
    key: "handleToggleAll",
    value: function handleToggleAll() {
      var forceOff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (forceOff || this.isAllSelected()) this.props.onDeselectAll();else this.props.onSelectAll(_.map(this.props.viewer.users.edges, "node.id"));
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(userId) {
      this.props.onSetSelected(userId, !this.isSelected(userId));
    }
  }, {
    key: "handleCreateAction",
    value: function () {
      var _handleCreateAction = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.onCreate();

              case 2:
                this.handleRefresh();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleCreateAction() {
        return _handleCreateAction.apply(this, arguments);
      }

      return handleCreateAction;
    }()
  }, {
    key: "handleEditAction",
    value: function () {
      var _handleEditAction = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.props.onEdit();

              case 2:
                this.handleRefresh();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleEditAction() {
        return _handleEditAction.apply(this, arguments);
      }

      return handleEditAction;
    }()
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
      _regenerator.default.mark(function _callee3() {
        var _this4 = this;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  isConfirmOpen: false
                });
                _context3.next = 3;
                return Promise.all(_.map(this.props.selected, function (userId) {
                  return _this4.props.onDelete(userId);
                }));

              case 3:
                this.handleRefresh();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleConfirmDelete() {
        return _handleConfirmDelete.apply(this, arguments);
      }

      return handleConfirmDelete;
    }()
  }, {
    key: "handleRefresh",
    value: function handleRefresh() {
      if (this.refreshTimer) {
        clearTimeout(this.refreshTimer);
        this.refreshTimer = null;
      }

      if (this.isDestroyed) return;
      this.props.relay.refetch(this.state.lastVariables, null, null, {
        force: true
      });
      this.refreshTime = Date.now();
    }
  }, {
    key: "handleChangeRowsPerPage",
    value: function handleChangeRowsPerPage(evt) {
      var _this5 = this;

      var pageSize = evt.target.value;
      var variables = {
        first: pageSize,
        after: null,
        last: null,
        before: null
      };
      this.props.relay.refetch(variables, null, function () {
        return _this5.setState({
          pageSize: pageSize,
          pageNumber: 0,
          lastVariables: variables
        });
      }, {
        force: true
      });
    }
  }, {
    key: "handleChangePage",
    value: function handleChangePage(evt, pageNumber) {
      var _this6 = this;

      if (this.state.pageNumber === pageNumber) return;
      var state = {
        pageNumber: pageNumber
      };
      var variables = {
        first: null,
        after: null,
        last: null,
        before: null
      };

      if (pageNumber === 0) {
        variables.first = this.state.pageSize;
      } else if (pageNumber > this.state.pageNumber) {
        if (pageNumber + 1 > Math.ceil(this.props.viewer.users.totalCount / this.state.pageSize)) {
          return;
        }

        variables.first = this.state.pageSize;
        variables.after = _.last(this.props.viewer.users.edges).cursor;
      } else {
        if (this.state.pageNumber <= 0) return;
        variables.last = this.state.pageSize;
        variables.before = _.head(this.props.viewer.users.edges).cursor;
      }

      state.lastVariables = variables;
      this.props.relay.refetch(variables, null, function () {
        return _this6.setState(state);
      }, {
        force: true
      });
    }
  }, {
    key: "renderTable",
    value: function renderTable() {
      var _this7 = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.classes.paper
      }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Typography.default, {
        variant: "h6"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "TITLE_USERS"
      })), _react.default.createElement("div", {
        className: this.props.classes.grow
      }), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleRefresh
      }, _react.default.createElement(_Refresh.default, null))), _react.default.createElement(_Table.default, {
        padding: "dense",
        className: this.props.classes.table
      }, _react.default.createElement(_TableHead.default, null, _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, {
        padding: "checkbox",
        classes: {
          root: this.props.classes.checkboxField
        }
      }, _react.default.createElement(_Checkbox.default, {
        checked: !!this.hasRecords() && this.isAllSelected(),
        classes: {
          root: this.props.classes.checkbox
        },
        indeterminate: !this.isAllSelected() && !this.isAllDeselected(),
        onChange: function onChange() {
          return _this7.handleToggleAll();
        },
        value: "on"
      })), _react.default.createElement(_TableCell.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_LOGIN_COLUMN"
      })), _react.default.createElement(_TableCell.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_ROLES_COLUMN"
      })))), _react.default.createElement(_TableBody.default, null, _.map(this.props.viewer.users.edges, function (edge) {
        return _react.default.createElement(_UserItemContainer.default, {
          key: edge.cursor,
          node: edge.node,
          onToggle: _this7.handleToggle
        });
      }))), _react.default.createElement(_TablePagination.default, {
        rowsPerPageOptions: [10, 20, 30, 50, 100],
        component: "div",
        count: this.props.viewer.users.totalCount,
        rowsPerPage: this.state.pageSize,
        page: this.state.pageNumber,
        onChangeRowsPerPage: this.handleChangeRowsPerPage,
        onChangePage: this.handleChangePage
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement("div", {
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
        disabled: this.props.selected.length === 0,
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleEditAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_EDIT_BUTTON"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: this.props.selected.length === 0,
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleDeleteAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "USERS_DELETE_BUTTON"
      }))), this.renderTable(), this.props.isEditing && _react.default.createElement(_EditUserModalContainer.default, null), _react.default.createElement(_ConfirmModalContainer.default, {
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

  return UserList;
}(_react.default.Component);

_defineProperty(UserList, "contextType", _Relay.RelayContext);

var _default = UserList;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),
/* 293 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),
/* 294 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Refresh");

/***/ }),
/* 295 */
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

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "styles", {
  enumerable: true,
  get: function get() {
    return _UserItem.styles;
  }
});
exports.default = void 0;

var _reactRedux = __webpack_require__(10);

var _reactIntl = __webpack_require__(6);

var _styles = __webpack_require__(5);

var _reactRelay = __webpack_require__(4);

var _state = __webpack_require__(74);

var _UserItem = _interopRequireWildcard(__webpack_require__(297));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    isSelected: _.includes(_state.usersSelectors.getSelected(state), props.node.id)
  };
};

var UserItem = (0, _reactRelay.createFragmentContainer)((0, _styles.withStyles)(_UserItem.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(_UserItem.default))), {
  node: function node() {
    return __webpack_require__(298);
  }
});
var _default = UserItem;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _classnames = _interopRequireDefault(__webpack_require__(117));

var _reactIntl = __webpack_require__(6);

var _TableCell = _interopRequireDefault(__webpack_require__(129));

var _TableRow = _interopRequireDefault(__webpack_require__(130));

var _Checkbox = _interopRequireDefault(__webpack_require__(67));

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
    checkboxField: {
      width: 1
    },
    checkbox: {
      padding: 0
    }
  };
};

exports.styles = styles;

var UserItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserItem, _React$Component);

  function UserItem() {
    _classCallCheck(this, UserItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserItem).apply(this, arguments));
  }

  _createClass(UserItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, {
        padding: "checkbox",
        className: (0, _classnames.default)(this.props.isSelected && "selected"),
        classes: {
          root: this.props.classes.checkboxField
        }
      }, _react.default.createElement(_Checkbox.default, {
        checked: this.props.isSelected,
        classes: {
          root: this.props.classes.checkbox
        },
        onChange: function onChange() {
          return _this.props.onToggle(_this.props.node.id);
        },
        value: "on"
      })), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected"),
        component: "th",
        scope: "row"
      }, this.props.node.email), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected")
      }, _.map(this.props.node.roles, function (item) {
        return _this.props.intl.formatMessage({
          id: "EDIT_USER_".concat(item, "_LABEL")
        });
      }).join(", ")));
    }
  }]);

  return UserItem;
}(_react.default.Component);

var _default = UserItem;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type UserRole = "ADMIN" | "ANONYMOUS" | "AUTHENTICATED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserItemContainer_node$ref: FragmentReference;
export type UserItemContainer_node = {|
  +id: string,
  +email: string,
  +roles: $ReadOnlyArray<?UserRole>,
  +$refType: UserItemContainer_node$ref,
|};
*/

var node
/*: ConcreteFragment*/
= {
  "kind": "Fragment",
  "name": "UserItemContainer_node",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "email",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "roles",
    "args": null,
    "storageKey": null
  }]
}; // prettier-ignore

node
/*: any*/
.hash = '2e3507a6245cfeb9f0e1e77446dd8a0c';
module.exports = node;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__(5);

var _state = __webpack_require__(74);

var _connectForm = _interopRequireDefault(__webpack_require__(17));

var _EditUserModal = _interopRequireWildcard(__webpack_require__(300));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentId: _state.usersSelectors.getEditModalUserId(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onCancel: function onCancel() {
      return dispatch(_state.usersOperations.hideEditModal());
    },
    onLoad: function onLoad() {
      return dispatch(_state.usersOperations.load());
    },
    onCreate: function onCreate(name, email, password, isAdmin, isCallCenter) {
      return dispatch(_state.usersOperations.create({
        name: name,
        email: email,
        password: password,
        isAdmin: isAdmin,
        isCallCenter: isCallCenter
      }));
    },
    onEdit: function onEdit(id, name, email, password, isAdmin, isCallCenter) {
      return dispatch(_state.usersOperations.edit({
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

var EditUserModal = (0, _styles.withStyles)(_EditUserModal.styles)((0, _connectForm.default)(_EditUserModal.default, mapStateToProps, mapDispatchToProps));
var _default = EditUserModal;
exports.default = _default;

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.query = exports.styles = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactIntl = __webpack_require__(6);

var _reactRelay = __webpack_require__(4);

var _immutable = __webpack_require__(11);

var _Dialog = _interopRequireDefault(__webpack_require__(68));

var _DialogActions = _interopRequireDefault(__webpack_require__(69));

var _DialogContent = _interopRequireDefault(__webpack_require__(70));

var _DialogContentText = _interopRequireDefault(__webpack_require__(71));

var _DialogTitle = _interopRequireDefault(__webpack_require__(72));

var _Grid = _interopRequireDefault(__webpack_require__(8));

var _Button = _interopRequireDefault(__webpack_require__(57));

var _red = _interopRequireDefault(__webpack_require__(301));

var _Relay = __webpack_require__(76);

var _Form2 = _interopRequireDefault(__webpack_require__(78));

var _FieldContainer = _interopRequireDefault(__webpack_require__(73));

var _constants = _interopRequireDefault(__webpack_require__(7));

var _user = _interopRequireDefault(__webpack_require__(302));

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

exports.styles = styles;

var query = function query() {
  return __webpack_require__(303);
};

exports.query = query;

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
                if (!props.currentId) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return props.onEdit(props.currentId, props.getValue("name") || null, props.getValue("email"), props.getValue("password"), props.getValue("isAdmin"));

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

                throw new _immutable.SubmissionError(result);

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
  }]);

  function EditUserModal(props) {
    var _this;

    _classCallCheck(this, EditUserModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditUserModal).call(this, props));
    _this.state = {
      isLoaded: false
    };
    return _this;
  }

  _createClass(EditUserModal, [{
    key: "renderForm",
    value: function renderForm() {
      var _this2 = this;

      return _react.default.createElement(_Dialog.default, {
        maxWidth: "xs",
        classes: {
          paper: this.props.classes.paper
        },
        open: true,
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
      }, _react.default.createElement(_FieldContainer.default, {
        name: "name",
        type: "text",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_FieldContainer.default, {
        name: "email",
        type: "text",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_FieldContainer.default, {
        name: "password",
        type: "password",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_FieldContainer.default, {
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
  }, {
    key: "loadData",
    value: function loadData(viewer) {
      var _this3 = this;

      if (this.state.isLoaded) return;
      setTimeout(function () {
        _this3.props.dispatch(_this3.props.change("name", _.get(viewer, "user.name", "")));

        _this3.props.dispatch(_this3.props.change("email", _.get(viewer, "user.email", "")));

        _this3.props.dispatch(_this3.props.change("password", ""));

        _this3.props.dispatch(_this3.props.change("isAdmin", _.includes(_.get(viewer, "user.roles", []), _constants.default.roles.ADMIN)));

        _this3.setState({
          isLoaded: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (!this.props.currentId) return this.renderForm();
      return _react.default.createElement(_Relay.NextQueryRenderer, {
        query: query,
        variables: {
          currentId: this.props.currentId
        },
        render: function render(_ref) {
          var error = _ref.error,
              props = _ref.props;
          if (error || !props) return null;

          _this4.loadData(props.viewer);

          return _this4.renderForm();
        }
      });
    }
  }]);

  return EditUserModal;
}(_Form2.default);

_defineProperty(EditUserModal, "propTypes", _objectSpread({}, _Form2.default.propTypes, {
  classes: _propTypes.default.object.isRequired,
  currentId: _propTypes.default.string,
  onCancel: _propTypes.default.func.isRequired,
  onLoad: _propTypes.default.func.isRequired,
  onCreate: _propTypes.default.func.isRequired,
  onEdit: _propTypes.default.func.isRequired
}));

_defineProperty(EditUserModal, "formName", "editUserForm");

_defineProperty(EditUserModal, "fields", _user.default);

var _default = EditUserModal;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 301 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),
/* 302 */
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
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 0bab5ce79fc80b8c598a62daad66080d
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRole = "ADMIN" | "ANONYMOUS" | "AUTHENTICATED" | "%future added value";
export type EditUserModalQueryVariables = {|
  currentId?: ?string
|};
export type EditUserModalQueryResponse = {|
  +viewer: ?{|
    +user: ?{|
      +id: string,
      +name: ?string,
      +email: string,
      +roles: $ReadOnlyArray<?UserRole>,
    |}
  |}
|};
export type EditUserModalQuery = {|
  variables: EditUserModalQueryVariables,
  response: EditUserModalQueryResponse,
|};
*/

/*
query EditUserModalQuery(
  $currentId: ID
) {
  viewer {
    user(id: $currentId) {
      id
      name
      email
      roles
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "currentId",
    "type": "ID",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "id",
      "variableName": "currentId",
      "type": "ID"
    }],
    "concreteType": "User",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "roles",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "EditUserModalQuery",
    "id": null,
    "text": "query EditUserModalQuery(\n  $currentId: ID\n) {\n  viewer {\n    user(id: $currentId) {\n      id\n      name\n      email\n      roles\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "EditUserModalQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": v1
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "EditUserModalQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": v1
      }, {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }]
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'e83115080e2a1951947cf942d4cf520c';
module.exports = node;

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__(5);

var _ConfirmModal = _interopRequireWildcard(__webpack_require__(305));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ConfirmModal = (0, _styles.withStyles)(_ConfirmModal.styles)(_ConfirmModal.default);
var _default = ConfirmModal;
exports.default = _default;

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactIntl = __webpack_require__(6);

var _Dialog = _interopRequireDefault(__webpack_require__(68));

var _DialogActions = _interopRequireDefault(__webpack_require__(69));

var _DialogContent = _interopRequireDefault(__webpack_require__(70));

var _DialogContentText = _interopRequireDefault(__webpack_require__(71));

var _DialogTitle = _interopRequireDefault(__webpack_require__(72));

var _Button = _interopRequireDefault(__webpack_require__(57));

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

exports.styles = styles;

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

var _default = ConfirmModal;
exports.default = _default;

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 8fed596a4d40837c7c2739342781d3a2
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserListSubscriptionVariables = {||};
export type UserListSubscriptionResponse = {|
  +userEvent: ?{|
    +id: string
  |}
|};
export type UserListSubscription = {|
  variables: UserListSubscriptionVariables,
  response: UserListSubscriptionResponse,
|};
*/

/*
subscription UserListSubscription {
  userEvent {
    id
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "userEvent",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "subscription",
    "name": "UserListSubscription",
    "id": null,
    "text": "subscription UserListSubscription {\n  userEvent {\n    id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "UserListSubscription",
      "type": "Subscription",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": v0
    },
    "operation": {
      "kind": "Operation",
      "name": "UserListSubscription",
      "argumentDefinitions": [],
      "selections": v0
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '8574cddb097f890888ac3abc24cb8d7f';
module.exports = node;

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ConcreteFragment } from 'relay-runtime';
type UserItemContainer_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserListContainer_viewer$ref: FragmentReference;
export type UserListContainer_viewer = {|
  +users: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +$fragmentRefs: UserItemContainer_node$ref
      |},
    |}>,
    +totalCount: ?number,
  |},
  +$refType: UserListContainer_viewer$ref,
|};
*/

var node
/*: ConcreteFragment*/
= {
  "kind": "Fragment",
  "name": "UserListContainer_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [{
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  }],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "after",
      "variableName": "after",
      "type": "String"
    }, {
      "kind": "Variable",
      "name": "before",
      "variableName": "before",
      "type": "String"
    }, {
      "kind": "Variable",
      "name": "first",
      "variableName": "first",
      "type": "Int"
    }, {
      "kind": "Variable",
      "name": "last",
      "variableName": "last",
      "type": "Int"
    }],
    "concreteType": "UserConnection",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "UserEdge",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "UserItemContainer_node",
          "args": null
        }]
      }]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalCount",
      "args": null,
      "storageKey": null
    }]
  }]
}; // prettier-ignore

node
/*: any*/
.hash = '6a179f0442639baffffebc107be23447';
module.exports = node;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 3b4b5436f420bab1bf417f0fdca2cb5d
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserListContainer_viewer$ref = any;
export type UserListContainerQueryVariables = {|
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type UserListContainerQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: UserListContainer_viewer$ref
  |}
|};
export type UserListContainerQuery = {|
  variables: UserListContainerQueryVariables,
  response: UserListContainerQueryResponse,
|};
*/

/*
query UserListContainerQuery(
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  viewer {
    ...UserListContainer_viewer_pbnwq
  }
}

fragment UserListContainer_viewer_pbnwq on Viewer {
  users(first: $first, after: $after, last: $last, before: $before) {
    edges {
      cursor
      node {
        ...UserItemContainer_node
        id
      }
    }
    totalCount
  }
}

fragment UserItemContainer_node on User {
  id
  email
  roles
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "UserListContainerQuery",
    "id": null,
    "text": "query UserListContainerQuery(\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  viewer {\n    ...UserListContainer_viewer_pbnwq\n  }\n}\n\nfragment UserListContainer_viewer_pbnwq on Viewer {\n  users(first: $first, after: $after, last: $last, before: $before) {\n    edges {\n      cursor\n      node {\n        ...UserItemContainer_node\n        id\n      }\n    }\n    totalCount\n  }\n}\n\nfragment UserItemContainer_node on User {\n  id\n  email\n  roles\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "UserListContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "UserListContainer_viewer",
          "args": [{
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": null
          }, {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": null
          }, {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": null
          }, {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "UserListContainerQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "users",
          "storageKey": null,
          "args": [{
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          }, {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": "String"
          }, {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          }, {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": "Int"
          }],
          "concreteType": "UserConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserEdge",
            "plural": true,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "roles",
                "args": null,
                "storageKey": null
              }]
            }]
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          }]
        }]
      }, {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }]
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'de4537127a5018c61d0da25a45c8eeb2';
module.exports = node;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash ae67b12222b484f2cc39abe04f814e6f
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserListContainer_viewer$ref = any;
export type UsersPageQueryVariables = {|
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type UsersPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: UserListContainer_viewer$ref
  |}
|};
export type UsersPageQuery = {|
  variables: UsersPageQueryVariables,
  response: UsersPageQueryResponse,
|};
*/

/*
query UsersPageQuery(
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  viewer {
    ...UserListContainer_viewer_pbnwq
  }
}

fragment UserListContainer_viewer_pbnwq on Viewer {
  users(first: $first, after: $after, last: $last, before: $before) {
    edges {
      cursor
      node {
        ...UserItemContainer_node
        id
      }
    }
    totalCount
  }
}

fragment UserItemContainer_node on User {
  id
  email
  roles
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "UsersPageQuery",
    "id": null,
    "text": "query UsersPageQuery(\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  viewer {\n    ...UserListContainer_viewer_pbnwq\n  }\n}\n\nfragment UserListContainer_viewer_pbnwq on Viewer {\n  users(first: $first, after: $after, last: $last, before: $before) {\n    edges {\n      cursor\n      node {\n        ...UserItemContainer_node\n        id\n      }\n    }\n    totalCount\n  }\n}\n\nfragment UserItemContainer_node on User {\n  id\n  email\n  roles\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "UsersPageQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "UserListContainer_viewer",
          "args": [{
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": null
          }, {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": null
          }, {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": null
          }, {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "UsersPageQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "users",
          "storageKey": null,
          "args": [{
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          }, {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": "String"
          }, {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          }, {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": "Int"
          }],
          "concreteType": "UserConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserEdge",
            "plural": true,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "roles",
                "args": null,
                "storageKey": null
              }]
            }]
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          }]
        }]
      }, {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }]
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '7e202e5982e14d72cbadfc07ab5220df';
module.exports = node;

/***/ })
/******/ ]);