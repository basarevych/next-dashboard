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
/******/ 	return __webpack_require__(__webpack_require__.s = 126);
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

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-relay");

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

var authTypes = _interopRequireWildcard(__webpack_require__(14));

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
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 14 */
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

var _Context = __webpack_require__(21);

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
      return _react.default.createElement(_Context.FormNameContext.Provider, {
        value: FormComponent.formName
      }, _react.default.createElement(_Context.FormFieldsContext.Provider, {
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

var _reselect = __webpack_require__(19);

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

module.exports = require("reselect");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 21 */
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
/* 22 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

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

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _immutable = __webpack_require__(9);

var _reactIntl = __webpack_require__(7);

var _styles = __webpack_require__(4);

var _List = _interopRequireDefault(__webpack_require__(81));

var _ListItem = _interopRequireDefault(__webpack_require__(82));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(65));

var _ListItemText = _interopRequireDefault(__webpack_require__(66));

var _InfoOutlined = _interopRequireDefault(__webpack_require__(83));

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

var _reduxImmutable = __webpack_require__(13);

var types = _interopRequireWildcard(__webpack_require__(14));

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

var _router = _interopRequireDefault(__webpack_require__(20));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(22));

var actions = _interopRequireWildcard(__webpack_require__(29));

var selectors = _interopRequireWildcard(__webpack_require__(18));

var _connectForm = __webpack_require__(17);

var _app = __webpack_require__(16);

var _constants = _interopRequireDefault(__webpack_require__(6));

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
                return dispatch(_app.appOperations.stop());

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
                return dispatch(_app.appOperations.stop());

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

var types = _interopRequireWildcard(__webpack_require__(14));

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

var _reduxImmutable = __webpack_require__(13);

var types = _interopRequireWildcard(__webpack_require__(15));

var _locales = _interopRequireDefault(__webpack_require__(23));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  created: Number, // timestamp
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
  locale: localeReducer,
  statusCode: statusCodeReducer,
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

var _auth = __webpack_require__(12);

var _constants = _interopRequireDefault(__webpack_require__(6));

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
                return dispatch(_auth.authOperations.setCookie({
                  cookie: cookie
                }));

              case 8:
                if (!csrf) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return dispatch(_auth.authOperations.setCsrf({
                  csrf: csrf
                }));

              case 11:
                if (!status) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return dispatch(_auth.authOperations.setStatus(status));

              case 14:
                if (!googleMapsKey) {
                  _context.next = 17;
                  break;
                }

                _context.next = 17;
                return dispatch(_auth.authOperations.setGoogleMapsKey({
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
exports.isConnected = exports.isStarted = exports.getLocale = exports.getStatusCode = exports.getCreated = void 0;

var getCreated = function getCreated(state) {
  return state.getIn(["app", "created"]);
};

exports.getCreated = getCreated;

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _reactRelay = __webpack_require__(5);

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

var _reactRelay = __webpack_require__(5);

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

var _reactRelay = __webpack_require__(5);

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

var _reactRelay = __webpack_require__(5);

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

var _reactRelay = __webpack_require__(5);

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

var _reactRelay = __webpack_require__(5);

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

var _reactRelay = __webpack_require__(5);

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

var _reactRelay = __webpack_require__(5);

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

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var tokenize = __webpack_require__(58);

var validator = __webpack_require__(59); //let allCountries, iso2Lookup;


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
/* 58 */
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
/* 59 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),
/* 62 */
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
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

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

module.exports = require("@material-ui/core/Dialog");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactIntl = __webpack_require__(7);

var _immutable = __webpack_require__(11);

var _Context = __webpack_require__(21);

var _normalize2 = _interopRequireDefault(__webpack_require__(57));

var _Text = _interopRequireDefault(__webpack_require__(79));

var _Select = _interopRequireDefault(__webpack_require__(84));

var _Checkbox = _interopRequireDefault(__webpack_require__(89));

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
/* 73 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_AVG_TIME = exports.SET_CLIENTS = exports.SET_SALES = exports.SET_PROFIT = exports.SET_EMPLOYEES = exports.SET_COUNTRIES = void 0;
var SET_COUNTRIES = "app/dashboard/SET_COUNTRIES";
exports.SET_COUNTRIES = SET_COUNTRIES;
var SET_EMPLOYEES = "app/dashboard/SET_EMPLOYEES";
exports.SET_EMPLOYEES = SET_EMPLOYEES;
var SET_PROFIT = "app/dashboard/SET_PROFIT";
exports.SET_PROFIT = SET_PROFIT;
var SET_SALES = "app/dashboard/SET_SALES";
exports.SET_SALES = SET_SALES;
var SET_CLIENTS = "app/dashboard/SET_CLIENTS";
exports.SET_CLIENTS = SET_CLIENTS;
var SET_AVG_TIME = "app/dashboard/SET_AVG_TIME";
exports.SET_AVG_TIME = SET_AVG_TIME;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalUserId = exports.isEditModalOpen = exports.getSelected = void 0;

var _reselect = __webpack_require__(19);

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
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),
/* 77 */
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

var _normalize = _interopRequireDefault(__webpack_require__(57));

var _validate2 = _interopRequireDefault(__webpack_require__(78));

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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var tokenize = __webpack_require__(58);

var validator = __webpack_require__(59); //let allCountries, iso2Lookup;


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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _styles = __webpack_require__(4);

var _TextField = _interopRequireDefault(__webpack_require__(80));

var _Errors = _interopRequireDefault(__webpack_require__(25));

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
/* 80 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InfoOutlined");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _immutable = __webpack_require__(9);

var _styles = __webpack_require__(4);

var _Select = _interopRequireDefault(__webpack_require__(85));

var _FormControl = _interopRequireDefault(__webpack_require__(60));

var _FormHelperText = _interopRequireDefault(__webpack_require__(61));

var _MenuItem = _interopRequireDefault(__webpack_require__(64));

var _InputLabel = _interopRequireDefault(__webpack_require__(86));

var _FilledInput = _interopRequireDefault(__webpack_require__(87));

var _Input = _interopRequireDefault(__webpack_require__(88));

var _Errors = _interopRequireDefault(__webpack_require__(25));

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
/* 85 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FilledInput");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _styles = __webpack_require__(4);

var _FormControl = _interopRequireDefault(__webpack_require__(60));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(90));

var _FormHelperText = _interopRequireDefault(__webpack_require__(61));

var _Checkbox = _interopRequireDefault(__webpack_require__(73));

var _Errors = _interopRequireDefault(__webpack_require__(25));

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
/* 90 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboardSelectors = exports.dashboardOperations = exports.dashboardTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(97));

var dashboardTypes = _interopRequireWildcard(__webpack_require__(74));

exports.dashboardTypes = dashboardTypes;

var dashboardOperations = _interopRequireWildcard(__webpack_require__(98));

exports.dashboardOperations = dashboardOperations;

var dashboardSelectors = _interopRequireWildcard(__webpack_require__(99));

exports.dashboardSelectors = dashboardSelectors;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _reducers.default;
exports.default = _default;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelectors = exports.usersOperations = exports.usersTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__(100));

var usersTypes = _interopRequireWildcard(__webpack_require__(62));

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
/* 94 */
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchQuery = exports.NextQueryRenderer = exports.RelayProvider = exports.RelayContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _relayRuntime = __webpack_require__(94);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(9);

var _reduxImmutable = __webpack_require__(13);

var types = _interopRequireWildcard(__webpack_require__(74));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* State Shape
Map({
  countries: List([]),
  employees: List([]),
  profit: List([]),
  sales: List([]),
  clients: List([]),
  avgTime: List([]),
})
*/
var countriesReducer = function countriesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_COUNTRIES:
      if (!_.isUndefined(action.countries)) return (0, _immutable.fromJS)(action.countries);
      break;
  }

  return state;
};

var employeesReducer = function employeesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_EMPLOYEES:
      if (!_.isUndefined(action.employees)) return (0, _immutable.fromJS)(action.employees);
      break;
  }

  return state;
};

var profitReducer = function profitReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_PROFIT:
      if (!_.isUndefined(action.profit)) return (0, _immutable.fromJS)(action.profit);
      break;
  }

  return state;
};

var salesReducer = function salesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_SALES:
      if (!_.isUndefined(action.sales)) return (0, _immutable.fromJS)(action.sales);
      break;
  }

  return state;
};

var clientsReducer = function clientsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_CLIENTS:
      if (!_.isUndefined(action.clients)) return (0, _immutable.fromJS)(action.clients);
      break;
  }

  return state;
};

var avgTimeReducer = function avgTimeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_AVG_TIME:
      if (!_.isUndefined(action.avgTime)) return (0, _immutable.fromJS)(action.avgTime);
      break;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  countries: countriesReducer,
  employees: employeesReducer,
  profit: profitReducer,
  sales: salesReducer,
  clients: clientsReducer,
  avgTime: avgTimeReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvgTime = exports.getClients = exports.getSales = exports.getProfit = exports.getEmployees = exports.getCountryOptions = exports.getCountries = void 0;

var _reselect = __webpack_require__(19);

var _immutable = __webpack_require__(9);

var getCountries = function getCountries(state) {
  return state.getIn(["dashboard", "employees"]);
};

exports.getCountries = getCountries;
var getCountryOptions = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["dashboard", "countries"]);
}, function (countries) {
  return (// eslint-disable-next-line lodash/prefer-lodash-method
    countries.map(function (country) {
      return (0, _immutable.Map)({
        value: country.get("code"),
        label: country.get("name")
      });
    }).unshift((0, _immutable.Map)({
      value: "",
      label: ""
    }))
  );
});
exports.getCountryOptions = getCountryOptions;

var getEmployees = function getEmployees(state) {
  return state.getIn(["dashboard", "employees"]);
};

exports.getEmployees = getEmployees;

var getProfit = function getProfit(state, props) {
  return (// eslint-disable-next-line lodash/prefer-lodash-method
    state.getIn(["dashboard", "profit"]).map(function (item) {
      return item.set("name", props.intl.formatDate(new Date(item.get("date"), {
        weekday: "short"
      })));
    })
  );
};

exports.getProfit = getProfit;

var getSales = function getSales(state) {
  return state.getIn(["dashboard", "sales"]);
};

exports.getSales = getSales;

var getClients = function getClients(state) {
  return state.getIn(["dashboard", "clients"]);
};

exports.getClients = getClients;

var getAvgTime = function getAvgTime(state) {
  return state.getIn(["dashboard", "avgTime"]);
};

exports.getAvgTime = getAvgTime;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(9);

var _reduxImmutable = __webpack_require__(13);

var types = _interopRequireWildcard(__webpack_require__(62));

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

var _constants = _interopRequireDefault(__webpack_require__(6));

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

var types = _interopRequireWildcard(__webpack_require__(62));

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

var _reactRelay = __webpack_require__(5);

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

var _reactRelay = __webpack_require__(5);

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

var _reactRelay = __webpack_require__(5);

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

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("pako");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("utf8");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("base64util");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("json-immutable");

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var material = __webpack_require__(148);

var daemon = __webpack_require__(149);

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
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(127);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _react = _interopRequireDefault(__webpack_require__(1));

var _app = _interopRequireWildcard(__webpack_require__(128));

var _router = _interopRequireDefault(__webpack_require__(20));

var _reactRedux = __webpack_require__(10);

var _styles = __webpack_require__(4);

var _jss = __webpack_require__(115);

var _CssBaseline = _interopRequireDefault(__webpack_require__(129));

var _jssExtend = _interopRequireDefault(__webpack_require__(130));

var _JssProvider = _interopRequireDefault(__webpack_require__(131));

var _serialize = _interopRequireDefault(__webpack_require__(132));

var _deserialize = _interopRequireDefault(__webpack_require__(133));

var _getDiContainer = _interopRequireDefault(__webpack_require__(134));

var _getReduxStore = _interopRequireDefault(__webpack_require__(142));

var _getRelayEnvironment = _interopRequireDefault(__webpack_require__(146));

var _getMaterialContext = _interopRequireDefault(__webpack_require__(147));

var _app2 = __webpack_require__(16);

var _auth = __webpack_require__(12);

var _constants = _interopRequireDefault(__webpack_require__(6));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(22));

var _Relay = __webpack_require__(96);

var _Intl = _interopRequireDefault(__webpack_require__(151));

var _Date = _interopRequireDefault(__webpack_require__(153));

var _Layout = _interopRequireDefault(__webpack_require__(157));

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
  plugins: [].concat(_toConsumableArray((0, _styles.jssPreset)().plugins), [(0, _jssExtend.default)()])
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
        var Component, ctx, req, res, err, query, di, store, environment, cookie, statusCode, csrf, status, googleMapsKey, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                req = ctx.req, res = ctx.res, err = ctx.err, query = ctx.query;
                di = (0, _getDiContainer.default)();
                store = (0, _getReduxStore.default)(di);
                environment = (0, _getRelayEnvironment.default)(di); // when doing SSR we will be making own API requests on behalf of current user

                cookie = req && req.cookieHeader;
                if (!false && cookie) di.get("fetcher").setCookie(cookie); // init the store

                statusCode = res && res.statusCode || err && (err.statusCode || 500) || 200;
                csrf = req && req.csrfHeader;
                _context.t0 = req && req.getAuthStatus;

                if (!_context.t0) {
                  _context.next = 14;
                  break;
                }

                _context.next = 13;
                return req.getAuthStatus();

              case 13:
                _context.t0 = _context.sent;

              case 14:
                status = _context.t0;
                googleMapsKey = query && query.googleMapsKey;
                _context.next = 18;
                return store.dispatch(_app2.appOperations.create({
                  statusCode: statusCode,
                  csrf: csrf,
                  status: status,
                  googleMapsKey: googleMapsKey
                }));

              case 18:
                ctx.statusCode = statusCode;
                ctx.store = store;
                ctx.fetchQuery = (0, _Relay.fetchQuery)(environment);
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 26;
                  break;
                }

                _context.next = 25;
                return Component.getInitialProps(ctx);

              case 25:
                pageProps = _context.sent;

              case 26:
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  theme: query.theme,
                  reduxState: (0, _serialize.default)(store.getState(), "redux"),
                  relayState: (0, _serialize.default)(environment.getStore().getSource(), "relay")
                });

              case 27:
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

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this, props));
    var di = (0, _getDiContainer.default)();
    _this.reduxStore = (0, _getReduxStore.default)(di, (0, _deserialize.default)(props.reduxState, "redux"));
    _this.relayEnvironment = (0, _getRelayEnvironment.default)(di, (0, _deserialize.default)(props.relayState, "relay"));
    _this.materialContext = (0, _getMaterialContext.default)(props.theme);

    _this.reduxStore.dispatch(_app2.appOperations.init());

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
      var path = router.pathname;
      var title = _constants.default.pages[path] && _constants.default.pages[path].title;
      if (false) {}
      return _react.default.createElement(_app.Container, null, _react.default.createElement(_reactRedux.Provider, {
        store: this.reduxStore
      }, _react.default.createElement(_Relay.RelayProvider, {
        environment: this.relayEnvironment
      }, _react.default.createElement(_Intl.default, null, _react.default.createElement(_Date.default, null, _react.default.createElement(_JssProvider.default, {
        jss: jss,
        registry: this.materialContext.sheetsRegistry,
        generateClassName: this.materialContext.generateClassName
      }, _react.default.createElement(_styles.MuiThemeProvider, {
        theme: this.materialContext.theme,
        sheetsManager: this.materialContext.sheetsManager
      }, _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_Layout.default, {
        title: title
      }, _react.default.createElement(Component, _extends({}, pageProps, {
        materialContext: this.materialContext
      }))))))))));
    }
  }]);

  return MyApp;
}(_app.default);

var _default = MyApp;
exports.default = _default;

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("jss-extend");

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var pako = __webpack_require__(116);

var utf8 = __webpack_require__(117);

var _require = __webpack_require__(118),
    byteEncode = _require.byteEncode;

var _require2 = __webpack_require__(119),
    serialize = _require2.serialize;
/**
 * Sserialize Immutable state into BASE64 string
 */


module.exports = function (state, type) {
  if (!state) return "";
  var obj;

  if (type === "redux") {
    obj = serialize(state);
  } else {
    obj = state;
  }

  var str = JSON.stringify(obj, function (key, value) {
    return _.isString(value) ? utf8.encode(value) : value;
  });
  var output = byteEncode(pako.deflate(str, {
    to: "string"
  }));
  return output;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var pako = __webpack_require__(116);

var utf8 = __webpack_require__(117);

var _require = __webpack_require__(118),
    byteDecode = _require.byteDecode;

var _require2 = __webpack_require__(119),
    deserialize = _require2.deserialize;
/**
 * Deserialize BASE64 string into Immutable state
 */


module.exports = function (input, type) {
  if (!input) return undefined;
  var str = pako.inflate(byteDecode(input), {
    to: "string"
  });
  var obj = JSON.parse(str, function (key, value) {
    return _.isString(value) ? utf8.decode(value) : value;
  });
  var state;
  if (type === "redux") state = deserialize(obj);else state = obj;
  return state;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDiContainer;

var _injectt = _interopRequireDefault(__webpack_require__(135));

var _Fetcher = _interopRequireDefault(__webpack_require__(136));

var _Storage = _interopRequireDefault(__webpack_require__(137));

var _Socket = _interopRequireDefault(__webpack_require__(138));

var _Cookie = _interopRequireDefault(__webpack_require__(141));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var diFactory = function diFactory() {
  var di = new _injectt.default();
  di.registerClass(_Fetcher.default);
  di.registerClass(_Storage.default);
  di.registerClass(_Socket.default);
  di.registerClass(_Cookie.default);
  return di;
};

var __NEXT_DI_CONTAINER__ = "__NEXT_DI_CONTAINER__";

function getDiContainer() {
  var di;

  if (true) {
    // Always make a new container if server,
    // otherwise state is shared between requests
    di = diFactory();
  } else {}

  return di;
}

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("injectt");

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _auth = __webpack_require__(12);

var _constants = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fetcher =
/*#__PURE__*/
function () {
  function Fetcher(getState, dispatch) {
    _classCallCheck(this, Fetcher);

    this.getState = getState;
    this.dispatch = dispatch;
    this.cookie = null;
  } // eslint-disable-next-line lodash/prefer-constant


  _createClass(Fetcher, [{
    key: "setCookie",
    value: function setCookie(cookie) {
      this.cookie = cookie;
    }
  }, {
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
        var method, resource, data, headers, csrf, errors, query, response, error;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                method = _ref.method, resource = _ref.resource, data = _ref.data;
                method = method || "GET";
                headers = {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                };
                if (this.cookie) headers["Cookie"] = this.cookie;

                if (!("production" === "production" && method !== "GET")) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return this.getCsrf();

              case 7:
                csrf = _context.sent;
                if (csrf) headers["X-CSRF-Token"] = csrf;

              case 9:
                if (!false && method !== "GET" && (!this.cookie || "production" === "production" && !csrf)) {
                  errors = [];
                  if (!this.cookie) errors.push("no cookie");
                  if ("production" === "production" && !csrf) errors.push("no csrf");
                  query = data.query;
                  if (query) query = _.split(query, /\r?\n/);
                  process.stderr.write(["Broken fetch in SSR: ".concat(resource, " (").concat(errors.join(", "), ")"), JSON.stringify(query || data, undefined, 4)].join("\n") + "\n");
                }

                _context.next = 12;
                return fetch( false ? undefined : process.env.APP_INNER_SERVER + resource, {
                  method: method,
                  credentials: "include",
                  headers: headers,
                  body: data && JSON.stringify(data)
                });

              case 12:
                response = _context.sent;

                if (!(response.status === 403 && csrf)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 16;
                return this.dispatch(_auth.authOperations.setCsrf({
                  csrf: null
                }));

              case 16:
                if (!(response.status !== 200)) {
                  _context.next = 21;
                  break;
                }

                error = new Error("Fetch failed: ".concat(resource, " [").concat(response.status, "]"));
                error.status = response.status;
                error.query = data;
                throw error;

              case 21:
                return _context.abrupt("return", response.json());

              case 22:
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
    key: "getCsrf",
    value: function () {
      var _getCsrf = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _this = this;

        var csrf, data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                csrf = _auth.authSelectors.getCsrf(this.getState());

                if (!(csrf || !false)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", csrf);

              case 3:
                _context2.prev = 3;
                _context2.next = 6;
                return this.fetch({
                  resource: "".concat(_constants.default.apiBase, "/csrf")
                });

              case 6:
                data = _context2.sent;
                if (data.csrf) csrf = data.csrf;
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](3);
                console.error("CSRF: ".concat(_context2.t0.message));

              case 13:
                if (!csrf) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 16;
                return this.dispatch(_auth.authOperations.setCsrf({
                  csrf: csrf
                }));

              case 16:
                return _context2.abrupt("return", csrf);

              case 17:
                return _context2.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve(_this.getCsrf());
                  }, 3000);
                }));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 10]]);
      }));

      function getCsrf() {
        return _getCsrf.apply(this, arguments);
      }

      return getCsrf;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(operation, variables, cacheConfig, uploadables) {
        var _this2 = this;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.fetch({
                  method: "POST",
                  resource: _constants.default.graphqlBase,
                  data: {
                    query: operation.text,
                    // GraphQL text from input
                    variables: variables
                  }
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);

                if (true) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve(_this2.query(operation, variables, cacheConfig, uploadables));
                  }, 1000);
                }));

              case 10:
                return _context3.abrupt("return", {
                  errors: [{
                    message: _context3.t0.message,
                    query: _context3.t0.query
                  }]
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
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
      return ["getState", "dispatch"];
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 137 */
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(0));

var _socket = _interopRequireDefault(__webpack_require__(139));

var _app = __webpack_require__(16);

var _auth = __webpack_require__(12);

var _constants = _interopRequireDefault(__webpack_require__(6));

var _package = _interopRequireDefault(__webpack_require__(140));

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
/* 139 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 140 */
/***/ (function(module) {

module.exports = {"name":"next-dashboard","version":"0.1.0","private":true,"dependencies":{"@date-io/moment":"~0.0.2","@material-ui/core":"~3.8.2","@material-ui/icons":"~3.0.2","@zeit/next-bundle-analyzer":"~0.1.2","@zeit/next-css":"~1.0.1","base64util":"~2.0.0-f","bcrypt":"~3.0.3","body-parser":"~1.18.3","chance":"~1.0.18","classnames":"~2.2.6","compression":"~1.7.3","connect-mongo":"~2.0.3","cookie-parser":"~1.4.3","cors":"~2.8.5","country-telephone-data":"~0.6.0","csurf":"~1.9.0","debug":"~4.1.1","dotenv":"~6.2.0","express":"~4.16.4","express-graphql":"~0.7.1","express-session":"~1.15.6","fs-extra":"~7.0.1","graphql":"~14.0.2","graphql-relay":"~0.5.5","graphql-relay-connection":"~0.0.4","http-status-codes":"~1.3.0","immutable":"~4.0.0-rc.12","injectt":"~0.1.6","intl":"~1.2.5","intl-locales-supported":"~1.0.0","intl-messageformat":"~2.2.0","isomorphic-fetch":"^2.2.1","isomorphic-unfetch":"~3.0.0","json-immutable":"~0.4.0","jss":"~9.8.7","jss-extend":"~6.2.0","lodash":"~4.17.11","lru-cache":"~5.1.1","material-ui-pickers":"~2.0.5","moment":"~2.23.0","moment-timezone":"~0.5.23","mongoose":"~5.4.2","morgan":"~1.9.1","next":"~7.0.2","next-compose-plugins":"~2.1.1","next-progressbar":"~1.0.0","nodemailer":"~5.0.1","null-loader":"~0.1.1","pako":"~1.0.7","passport":"~0.4.0","passport-facebook":"~2.1.1","passport-google-oauth":"~1.0.0","passport-twitter":"~1.0.4","raf":"~3.4.1","react":"~16.7.0","react-dom":"~16.7.0","react-flags":"~0.1.17","react-intl":"~2.7.2","react-jss":"~8.6.1","react-redux":"~6.0.0","react-relay":"~1.7.0","react-swipeable-views":"~0.13.0","react-toastify":"~4.5.2","react-virtualized":"~9.21.0","redux":"~4.0.1","redux-devtools-extension":"~2.13.7","redux-form":"~8.1.0","redux-immutable":"~4.0.0","redux-thunk":"~2.3.0","relay-query-lookup-renderer":"~3.0.2","relay-runtime":"~1.7.0","reselect":"~4.0.0","serviceworker-webpack-plugin":"~1.0.1","sharp":"~0.21.1","socket.io":"~2.2.0","svg-inline-loader":"~0.8.0","utf8":"~3.0.0","validator":"~10.10.0","webpack":"4.20.2"},"devDependencies":{"@babel/core":"7.0.0","babel-core":"7.0.0-bridge.0","babel-eslint":"~10.0.1","babel-jest":"~23.6.0","babel-plugin-lodash":"~3.3.4","babel-plugin-relay":"~1.7.0","css-mqpacker":"~7.0.0","enzyme":"~3.8.0","enzyme-adapter-react-16":"~1.7.1","eslint":"~5.12.0","eslint-plugin-lodash":"~5.1.0","eslint-plugin-react":"~7.12.3","jest":"~23.6.0","jsdom":"~13.1.0","jsdom-global":"~3.0.2","postcss-clean":"~1.1.0","postcss-loader":"~3.0.0","postcss-preset-env":"~6.5.0","postcss-url":"~8.0.0","prop-types":"~15.6.2","relay-compiler":"~1.7.0","relay-compiler-webpack-plugin":"~1.0.4","supertest":"~3.3.0","webfontloader":"~1.6.28"},"resolutions":{"graphql":"~14.0.2","**/graphql":"~14.0.2"},"scripts":{"lint":"eslint . --max-warnings=0","test":"jest . --no-cache --forceExit","schema":"node ./bin/update-schema","relay":"node ./bin/update-schema && relay-compiler --src ./app --schema ./api/schema.graphql --verbose","build":"node ./bin/prepare-build && env NODE_ENV=production TMPDIR=$PWD/.tmp next build","export":"env NODE_ENV=production TMPDIR=$PWD/.tmp next export","dev":"node ./bin/prepare-build && env NODE_ENV=development node ./bin/www","start":"env NODE_ENV=production node ./bin/www"}};

/***/ }),
/* 141 */
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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getReduxStore;

var _redux = __webpack_require__(143);

var _reduxImmutable = __webpack_require__(13);

var _reduxDevtoolsExtension = __webpack_require__(144);

var _reduxThunk = _interopRequireDefault(__webpack_require__(145));

var _immutable = __webpack_require__(11);

var _app = _interopRequireDefault(__webpack_require__(16));

var _auth = _interopRequireDefault(__webpack_require__(12));

var _dashboard = _interopRequireDefault(__webpack_require__(92));

var _users = _interopRequireDefault(__webpack_require__(93));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _reduxImmutable.combineReducers)({
  form: _immutable.reducer,
  app: _app.default,
  auth: _auth.default,
  dashboard: _dashboard.default,
  users: _users.default
});

var storeFactory = function storeFactory(di, initialState) {
  var middleware = (0, _redux.applyMiddleware)(_reduxThunk.default.withExtraArgument(di));
  if (false) {}
  var store = (0, _redux.createStore)(rootReducer, initialState || undefined, middleware);
  di.registerInstance(store, "store");
  di.registerInstance(store.getState.bind(store), "getState");
  di.registerInstance(store.dispatch.bind(store), "dispatch");
  return store;
};

var __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getReduxStore(di, initialState) {
  var store;

  if (true) {
    // Always make a new store if server,
    // otherwise state is shared between requests
    store = storeFactory(di, initialState);
  } else {}

  return store;
}

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRelayEnviroment;

var _relayRuntime = __webpack_require__(94);

var envFactory = function envFactory(di, initialState) {
  var fetcher = di.get("fetcher");

  var network = _relayRuntime.Network.create(fetcher.query.bind(fetcher));

  var store = new _relayRuntime.Store(new _relayRuntime.RecordSource(initialState || undefined));
  var env = new _relayRuntime.Environment({
    network: network,
    store: store
  });
  di.registerInstance(env, "env");
  return env;
};

var __NEXT_RELAY_ENVIRONMENT__ = "__NEXT_RELAY_ENVIRONMENT__";

function getRelayEnviroment(di, initialState) {
  var relayEnvironment;

  if (true) {
    // Always make a new environment if server,
    // otherwise it is is shared between requests
    relayEnvironment = envFactory(di, initialState);
  } else {}

  return relayEnvironment;
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMaterialContext;

var _jss = __webpack_require__(115);

var _styles = __webpack_require__(4);

var _themes = _interopRequireDefault(__webpack_require__(120));

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

function getMaterialContext(themeName) {
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
/* 148 */
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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(95),
    darken = _require.darken,
    lighten = _require.lighten,
    fade = _require.fade;

var _require2 = __webpack_require__(150),
    red = _require2.red,
    blueGrey = _require2.blueGrey;

var primary = "#707484";
var secondary = "#af441d";
var bgPage = "#000000";
var bgNormal = "#484e5e";
var textNormal = "rgba(255, 255, 255, 0.9)";
var textDark = "rgba(255, 255, 255, 0.6)";
var textDisabled = "rgba(255, 255, 255, 0.4)";
var textContrast = "#ffffff";
var textError = red[400];
var textInfo = blueGrey[400];
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
      paper: bgNormal
    },
    text: {
      primary: textNormal,
      secondary: textDark,
      disabled: textDisabled,
      hint: textDisabled
    },
    error: {
      main: textError
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
    background: "linear-gradient(to bottom, #484e5e 0, #161920 80%, #161920 100%)",
    itemBackground: "transparent",
    itemBorder: "4px solid transparent",
    itemColor: textDark,
    itemHoverBackground: bgNormal,
    itemHoverColor: textNormal,
    itemHoverBorder: "4px solid ".concat(darken(secondary, 0.3)),
    itemSelectedBackground: lighten(bgNormal, 0.1),
    itemSelectedColor: textContrast,
    itemSelectedBorder: "4px solid ".concat(secondary),
    itemSelectedHoverBackground: lighten(bgNormal, 0.15),
    itemSelectedHoverColor: textContrast,
    itemSelectedHoverBorder: "4px solid ".concat(lighten(secondary, 0.05))
  },
  main: {
    background: "linear-gradient(to right, #484e5e 0, #484e5e 15%, #20252f 100%)",
    spacing: 24,
    error: {
      background: fade(textError, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    },
    info: {
      background: fade(textInfo, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    }
  },
  props: {
    MuiDialog: {
      scroll: "body"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        background: ["linear-gradient(to bottom right, ".concat(lighten(bgNormal, 0.2), " 0, ").concat(darken(bgNormal, 0.2), " 100%)"), "!important"]
      }
    },
    MuiAvatar: {
      root: {
        borderRadius: 3
      }
    },
    MuiTableRow: {
      root: {
        //height: ["100%", "!important"],
        height: [48, "!important"],
        "& th": {
          fontWeight: "bold"
        }
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
      root: {
        "&$disabled": {
          "&:not($containedPrimary):not($containedSecondary)": {
            background: [lighten(bgNormal, 0.05), "!important"],
            color: [textDisabled, "!important"]
          },
          "&$containedPrimary": {
            background: [darken(primary, 0.15), "!important"],
            color: [textDisabled, "!important"]
          },
          "&$containedSecondary": {
            background: [darken(secondary, 0.15), "!important"],
            color: [textDisabled, "!important"]
          }
        }
      }
    },
    MuiIconButton: {
      root: {
        "&$disabled": {
          "&:not($colorPrimary):not($colorSecondary)": {
            color: [textDisabled, "!important"]
          }
        }
      }
    },
    MuiInput: {
      root: {
        "&$underline": {
          "&:before": {
            borderBottom: "2px solid ".concat(textDark)
          },
          "&:after": {
            borderBottom: "2px solid ".concat(lighten(secondary, 0.1))
          }
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderWidth: [2, "!important"]
        },
        "&:not($disabled):not($error) $notchedOutline": {
          borderColor: [textDark, "!important"]
        },
        "&:not($disabled):not($error):hover:not($focused) $notchedOutline": {
          borderColor: [textContrast, "!important"]
        },
        "&:not($disabled):not($error)$focused $notchedOutline": {
          borderColor: [lighten(secondary, 0.1), "!important"]
        },
        "&$disabled $notchedOutline": {
          borderColor: [textDisabled, "!important"]
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: [lighten(bgNormal, 0.1), "!important"],
        borderRadius: 4,
        "&:hover": {
          background: [lighten(bgNormal, 0.2), "!important"]
        },
        "&$focused": {
          background: [lighten(bgNormal, 0.2), "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$underline": {
          "&:before": {
            borderBottom: ["none", "!important"]
          },
          "&:after": {
            borderBottom: ["none", "!important"]
          }
        }
      }
    },
    MuiInputLabel: {
      root: {
        pointerEvents: "none",
        zIndex: 100,
        "&$focused": {
          color: [textContrast, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$filled": {
          color: [textDark, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        }
      }
    },
    MuiSwitch: {
      icon: {
        color: textDark
      }
    },
    MuiSelect: {
      icon: {
        color: textDark
      }
    },
    MuiListItemIcon: {
      root: {
        margin: [0, "!important"]
      }
    },
    MuiCheckbox: {
      root: {
        "&$checked": {
          color: [textNormal, "!important"]
        }
      }
    }
  }
};

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(10);

var _app = __webpack_require__(16);

var _Intl = _interopRequireDefault(__webpack_require__(152));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _app.appSelectors.getLocale(state),
    created: _app.appSelectors.getCreated(state)
  };
};

var IntlProvider = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_Intl.default);
var _default = IntlProvider;
exports.default = _default;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactIntl = __webpack_require__(7);

var _locales = _interopRequireDefault(__webpack_require__(23));

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

var IntlProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IntlProvider, _React$Component);

  function IntlProvider() {
    _classCallCheck(this, IntlProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(IntlProvider).apply(this, arguments));
  }

  _createClass(IntlProvider, [{
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

  return IntlProvider;
}(_react.default.Component);

var _default = IntlProvider;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(10);

var _app = __webpack_require__(16);

var _Date = _interopRequireDefault(__webpack_require__(154));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _app.appSelectors.getLocale(state)
  };
};

var DateProvider = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_Date.default);
var _default = DateProvider;
exports.default = _default;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _materialUiPickers = __webpack_require__(155);

var _moment = _interopRequireDefault(__webpack_require__(156));

var _moment2 = _interopRequireDefault(__webpack_require__(24));

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

var DateProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateProvider, _React$Component);

  function DateProvider() {
    _classCallCheck(this, DateProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(DateProvider).apply(this, arguments));
  }

  _createClass(DateProvider, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_materialUiPickers.MuiPickersUtilsProvider, {
        utils: _moment.default,
        locale: this.props.locale,
        moment: _moment2.default
      }, this.props.children);
    }
  }]);

  return DateProvider;
}(_react.default.Component);

var _default = DateProvider;
exports.default = _default;

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers");

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = require("@date-io/moment");

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(10);

var _reactIntl = __webpack_require__(7);

var _router = __webpack_require__(20);

var _app = __webpack_require__(16);

var _auth = __webpack_require__(12);

var _Layout = _interopRequireDefault(__webpack_require__(158));

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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _head = _interopRequireDefault(__webpack_require__(159));

var _reactIntl = __webpack_require__(7);

var _styles = __webpack_require__(4);

var _CircularProgress = _interopRequireDefault(__webpack_require__(160));

var _Hidden = _interopRequireDefault(__webpack_require__(76));

var _Drawer = _interopRequireDefault(__webpack_require__(161));

var _SwipeableDrawer = _interopRequireDefault(__webpack_require__(162));

var _Sidebar = _interopRequireDefault(__webpack_require__(163));

var _Header = _interopRequireDefault(__webpack_require__(175));

var _AppAuthModal = _interopRequireDefault(__webpack_require__(191));

__webpack_require__(198);

var _styledScroll = _interopRequireDefault(__webpack_require__(200));

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
        background: theme.palette.background.default,
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
      background: [theme.sidebar.background, "!important"],
      border: "none",
      overflowX: "hidden",
      width: theme.sidebar.computerWidth * theme.spacing.unit
    }, _defineProperty(_$merge, theme.breakpoints.between("sm", "md"), {
      width: theme.sidebar.tabletWidth * theme.spacing.unit
    }), _defineProperty(_$merge, theme.breakpoints.down("xs"), {
      width: theme.sidebar.phoneWidth * theme.spacing.unit
    }), _$merge), (0, _styledScroll.default)(theme)),
    main: (_main = {
      background: [theme.main.background, "!important"],
      minHeight: "100vh",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "stretch",
      marginLeft: theme.sidebar.computerWidth * theme.spacing.unit
    }, _defineProperty(_main, theme.breakpoints.between("sm", "md"), {
      marginLeft: theme.sidebar.tabletWidth * theme.spacing.unit
    }), _defineProperty(_main, theme.breakpoints.down("xs"), {
      marginLeft: 0
    }), _main),
    content: {
      boxShadow: "-2px -2px 8px rgba(0, 0, 0, 0.3)",
      zIndex: 1300,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    anonymous: {
      background: theme.palette.background.paper,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
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
      }))), this.props.isAuthenticated && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Hidden.default, {
        implementation: "css",
        smUp: true
      }, _react.default.createElement(_SwipeableDrawer.default, {
        open: this.state.isSidebarOpen,
        onOpen: this.handleSidebarToggle,
        onClose: this.handleSidebarClose
      }, _react.default.createElement(_Sidebar.default, {
        onMenuClick: this.handleSidebarClose
      }))), _react.default.createElement(_Hidden.default, {
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
      }))), _react.default.createElement("div", {
        className: this.props.classes.main
      }, _react.default.createElement("main", {
        className: this.props.classes.content
      }, !this.props.isError && _react.default.createElement(_Header.default, null), this.props.children))), !this.props.isAuthenticated && _react.default.createElement("main", {
        className: this.props.classes.anonymous
      }, this.props.children), !this.props.isStarted && !this.props.isError && _react.default.createElement("div", {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(10);

var _router = __webpack_require__(20);

var _reactIntl = __webpack_require__(7);

var _Sidebar = _interopRequireDefault(__webpack_require__(164));

var _auth = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: _auth.authSelectors.getRoles(state),
    name: _auth.authSelectors.getName(state) || _auth.authSelectors.getEmail(state) || "anonymous"
  };
};

var Sidebar = (0, _router.withRouter)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(_Sidebar.default)));
var _default = Sidebar;
exports.default = _default;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__(22));

var _reactIntl = __webpack_require__(7);

var _styles = __webpack_require__(4);

var _Typography = _interopRequireDefault(__webpack_require__(63));

var _MenuList = _interopRequireDefault(__webpack_require__(165));

var _MenuItem = _interopRequireDefault(__webpack_require__(64));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(65));

var _ListItemText = _interopRequireDefault(__webpack_require__(66));

var _Dashboard = _interopRequireDefault(__webpack_require__(166));

var _Ballot = _interopRequireDefault(__webpack_require__(167));

var _InsertChart = _interopRequireDefault(__webpack_require__(168));

var _TableChart = _interopRequireDefault(__webpack_require__(169));

var _Map = _interopRequireDefault(__webpack_require__(170));

var _SpeakerNotes = _interopRequireDefault(__webpack_require__(171));

var _BrightnessAuto = _interopRequireDefault(__webpack_require__(172));

var _Pets = _interopRequireDefault(__webpack_require__(173));

var _People = _interopRequireDefault(__webpack_require__(174));

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
      color: theme.palette.text.secondary,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.secondary.main
      }
    },
    list: {
      padding: 0
    },
    avatar: {
      margin: "1rem 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    item: {
      background: [theme.sidebar.itemBackground, "!important"],
      color: [theme.sidebar.itemColor, "!important"],
      borderTop: ["none", "!important"],
      borderLeft: [theme.sidebar.itemBorder, "!important"],
      borderRight: ["none", "!important"],
      borderBottom: ["none", "!important"],
      justifyContent: "center",
      "& svg, & span": {
        color: [theme.sidebar.itemColor, "!important"]
      },
      "&:hover": {
        background: [theme.sidebar.itemHoverBackground, "!important"],
        color: [theme.sidebar.itemHoverColor, "!important"],
        borderTop: ["none", "!important"],
        borderLeft: [theme.sidebar.itemHoverBorder, "!important"],
        borderRight: ["none", "!important"],
        borderBottom: ["none", "!important"],
        "& svg, & span": {
          color: [theme.sidebar.itemHoverColor, "!important"]
        }
      }
    },
    itemSelected: {
      background: [theme.sidebar.itemSelectedBackground, "!important"],
      color: [theme.sidebar.itemSelectedColor, "!important"],
      borderTop: ["none", "!important"],
      borderLeft: [theme.sidebar.itemSelectedBorder, "!important"],
      borderRight: ["none", "!important"],
      borderBottom: ["none", "!important"],
      "& svg, & span": {
        color: [theme.sidebar.itemSelectedColor, "!important"]
      },
      "&:hover": {
        background: [theme.sidebar.itemSelectedHoverBackground, "!important"],
        color: [theme.sidebar.itemSelectedHoverColor, "!important"],
        borderTop: ["none", "!important"],
        borderLeft: [theme.sidebar.itemSelectedHoverBorder, "!important"],
        borderRight: ["none", "!important"],
        borderBottom: ["none", "!important"],
        "& svg, & span": {
          color: [theme.sidebar.itemSelectedHoverColor, "!important"]
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
      }), _react.default.createElement(_Typography.default, {
        variant: "subtitle1"
      }, this.props.name));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Ballot");

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InsertChart");

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TableChart");

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Map");

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SpeakerNotes");

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BrightnessAuto");

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Pets");

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(10);

var _reactIntl = __webpack_require__(7);

var _Header = _interopRequireDefault(__webpack_require__(176));

var _app = __webpack_require__(16);

var _auth = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _app.appSelectors.getLocale(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetCookie: function onSetCookie(name, value, days) {
      return dispatch(_app.appOperations.setCookie({
        name: name,
        value: value,
        days: days
      }));
    },
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

var Header = (0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Header.default));
var _default = Header;
exports.default = _default;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _reactIntl = __webpack_require__(7);

var _styles = __webpack_require__(4);

var _colorManipulator = __webpack_require__(95);

var _Hidden = _interopRequireDefault(__webpack_require__(76));

var _AppBar = _interopRequireDefault(__webpack_require__(177));

var _Toolbar = _interopRequireDefault(__webpack_require__(178));

var _Button = _interopRequireDefault(__webpack_require__(56));

var _IconButton = _interopRequireDefault(__webpack_require__(179));

var _InputBase = _interopRequireDefault(__webpack_require__(180));

var _Menu = _interopRequireDefault(__webpack_require__(181));

var _MenuItem = _interopRequireDefault(__webpack_require__(64));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(65));

var _ListItemText = _interopRequireDefault(__webpack_require__(66));

var _ListItemAvatar = _interopRequireDefault(__webpack_require__(182));

var _Avatar = _interopRequireDefault(__webpack_require__(183));

var _Badge = _interopRequireDefault(__webpack_require__(184));

var _Search = _interopRequireDefault(__webpack_require__(185));

var _Mail = _interopRequireDefault(__webpack_require__(186));

var _AccountBox = _interopRequireDefault(__webpack_require__(187));

var _ColorLens = _interopRequireDefault(__webpack_require__(188));

var _PowerSettingsNew = _interopRequireDefault(__webpack_require__(189));

var _reactFlags = _interopRequireDefault(__webpack_require__(190));

var _locales = _interopRequireDefault(__webpack_require__(23));

var _themes = _interopRequireDefault(__webpack_require__(120));

var _moment = _interopRequireDefault(__webpack_require__(24));

var _constants = _interopRequireDefault(__webpack_require__(6));

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
  var _inputInput;

  return {
    spacer: {
      height: "1.5rem"
    },
    wrapper: {
      zIndex: 1400,
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      height: 30
    },
    barContainer: {
      transition: "all 0.25s ease-in-out"
    },
    bar: {
      background: theme.palette.background.paper,
      boxShadow: "none"
    },
    barItem: {
      marginLeft: "0.5rem",
      marginRight: "0.5rem"
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
    menu: _defineProperty({
      width: "100%",
      maxWidth: theme.spacing.unit * 45,
      background: (0, _colorManipulator.lighten)(theme.palette.background.paper, 0.1),
      "& svg": {
        color: [theme.palette.primary.contrastText, "!important"]
      }
    }, theme.breakpoints.down("xs"), {
      width: "90%",
      maxWidth: "90%"
    }),
    menuItem: {
      height: "auto"
    },
    inboxAvatar: {
      width: 60,
      height: 60
    },
    inboxName: {
      fontSize: "120%"
    },
    inboxDate: {
      fontSize: "80%"
    },
    inboxPreview: {
      display: "inline",
      whiteSpace: "normal"
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
      barHeight: 0,
      barWidth: 0,
      anchorInbox: null,
      anchorLocales: null,
      anchorThemes: null
    };
    _this.isDestroyed = false;
    _this.bar = _react.default.createRef();
    _this.handleWrapperMouseEnter = _this.handleWrapperMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleWrapperMouseLeave = _this.handleWrapperMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleWrapperClick = _this.handleWrapperClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBarMouseEnter = _this.handleBarMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBarMouseLeave = _this.handleBarMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleInboxOpen = _this.handleInboxOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleLocalesOpen = _this.handleLocalesOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleThemesOpen = _this.handleThemesOpen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSignOut = _this.handleSignOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.bar.current) {
        this.setState({
          barHeight: this.bar.current.offsetHeight,
          barWidth: this.bar.current.offsetWidth
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.bar.current && (this.state.barHeight !== this.bar.current.offsetHeight || this.state.barWidth !== this.bar.current.offsetWidth)) {
        this.setState({
          barHeight: this.bar.current.offsetHeight,
          barWidth: this.bar.current.offsetWidth
        });
      }
    }
  }, {
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
    key: "handleInboxOpen",
    value: function handleInboxOpen(event) {
      this.setState({
        anchorInbox: event.currentTarget
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
      this.props.onSetCookie("locale", locale);
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
      this.props.onSetCookie("theme", theme);
      this.handleMenuClose();
      window.location.reload(true);
    }
  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorInbox: null,
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
    key: "renderInbox",
    value: function renderInbox() {
      return _react.default.createElement(_Menu.default, {
        classes: {
          paper: this.props.classes.menu
        },
        anchorEl: this.state.anchorInbox,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        open: !!this.state.anchorInbox,
        onClose: this.handleMenuClose
      }, _react.default.createElement(_MenuItem.default, {
        className: this.props.classes.menuItem,
        onClick: this.handleMenuClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Mitch Stigall",
        src: "".concat(_constants.default.apiBase, "/avatars/1")
      })), _react.default.createElement(_ListItemText.default, {
        primary: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: this.props.classes.inboxName
        }, "Mitch Stigall"), _react.default.createElement("div", {
          className: this.props.classes.inboxDate
        }, this.props.intl.formatDate((0, _moment.default)("2030-03-21 09:31:40").toDate(), {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        }))),
        secondary: _react.default.createElement("span", {
          className: this.props.classes.inboxPreview
        }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
      }), " "), _react.default.createElement(_MenuItem.default, {
        className: this.props.classes.menuItem,
        onClick: this.handleMenuClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Marie Wineinger",
        src: "".concat(_constants.default.apiBase, "/avatars/2")
      })), _react.default.createElement(_ListItemText.default, {
        primary: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: this.props.classes.inboxName
        }, "Marie Wineinger"), _react.default.createElement("div", {
          className: this.props.classes.inboxDate
        }, this.props.intl.formatDate((0, _moment.default)("2030-03-21 10:03:12").toDate(), {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        }))),
        secondary: _react.default.createElement("span", {
          className: this.props.classes.inboxPreview
        }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
      }), " "), _react.default.createElement(_MenuItem.default, {
        className: this.props.classes.menuItem,
        onClick: this.handleMenuClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Ted Eriksson",
        src: "".concat(_constants.default.apiBase, "/avatars/3")
      })), _react.default.createElement(_ListItemText.default, {
        primary: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: this.props.classes.inboxName
        }, "Ted Eriksson"), _react.default.createElement("div", {
          className: this.props.classes.inboxDate
        }, this.props.intl.formatDate((0, _moment.default)("2030-03-21 10:27:42").toDate(), {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        }))),
        secondary: _react.default.createElement("span", {
          className: this.props.classes.inboxPreview
        }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
      }), " "), _react.default.createElement(_MenuItem.default, {
        className: this.props.classes.menuItem,
        onClick: this.handleMenuClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Martin Murry",
        src: "".concat(_constants.default.apiBase, "/avatars/4")
      })), _react.default.createElement(_ListItemText.default, {
        primary: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: this.props.classes.inboxName
        }, "Martin Murry"), _react.default.createElement("div", {
          className: this.props.classes.inboxDate
        }, this.props.intl.formatDate((0, _moment.default)("2030-03-21 11:35:09").toDate(), {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        }))),
        secondary: _react.default.createElement("span", {
          className: this.props.classes.inboxPreview
        }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
      }), " "));
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
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
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
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
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
    key: "renderShadow",
    value: function renderShadow() {
      var boundary = this.props.theme.sidebar.computerWidth * this.props.theme.spacing.unit;
      return _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: this.state.barWidth,
        height: "30"
      }, _react.default.createElement("defs", null, _react.default.createElement("clipPath", {
        id: "appBarClipLeft"
      }, _react.default.createElement("rect", {
        x: "0",
        y: "0",
        width: boundary,
        height: "30"
      })), _react.default.createElement("filter", {
        id: "appBarShadowLeft",
        x: "-10",
        y: "-10",
        width: this.state.barWidth + 20,
        height: "60"
      }, _react.default.createElement("feGaussianBlur", {
        in: "SourceAlpha",
        stdDeviation: "8"
      }), _react.default.createElement("feOffset", {
        dx: "0",
        dy: "2",
        result: "offsetblur"
      }), _react.default.createElement("feFlood", {
        floodColor: "rgba(0, 0, 0, 0.9)"
      }), _react.default.createElement("feComposite", {
        in2: "offsetblur",
        operator: "in"
      }), _react.default.createElement("feMerge", null, _react.default.createElement("feMergeNode", null), _react.default.createElement("feMergeNode", {
        in: "SourceGraphic"
      }))), _react.default.createElement("clipPath", {
        id: "appBarClipRight"
      }, _react.default.createElement("rect", {
        x: boundary,
        y: "0",
        width: this.state.barWidth - boundary,
        height: "30"
      })), _react.default.createElement("filter", {
        id: "appBarShadowRight",
        x: "-10",
        y: "-10",
        width: this.state.barWidth + 20,
        height: "60"
      }, _react.default.createElement("feGaussianBlur", {
        in: "SourceAlpha",
        stdDeviation: "4"
      }), _react.default.createElement("feOffset", {
        dx: "0",
        dy: "2",
        result: "offsetblur"
      }), _react.default.createElement("feFlood", {
        floodColor: "rgba(0, 0, 0, 0.5)"
      }), _react.default.createElement("feComposite", {
        in2: "offsetblur",
        operator: "in"
      }), _react.default.createElement("feMerge", null, _react.default.createElement("feMergeNode", null), _react.default.createElement("feMergeNode", {
        in: "SourceGraphic"
      })))), _react.default.createElement("g", {
        clipPath: "url(#appBarClipLeft)"
      }, _react.default.createElement("rect", {
        x: "-10",
        y: "-16",
        width: boundary + 20,
        height: "20",
        fill: this.props.theme.palette.secondary.main,
        filter: "url(#appBarShadowLeft)"
      })), _react.default.createElement("g", {
        clipPath: "url(#appBarClipRight)"
      }, _react.default.createElement("rect", {
        x: boundary - 10,
        y: "-16",
        width: this.state.barWidth - boundary + 20,
        height: "20",
        fill: this.props.theme.palette.secondary.main,
        filter: "url(#appBarShadowRight)"
      })));
    }
  }, {
    key: "renderBar",
    value: function renderBar(isPermanent) {
      var isVisible = isPermanent || this.state.isWrapperHovered || this.state.isBarHovered;
      return _react.default.createElement("div", {
        className: this.props.classes.barContainer,
        style: {
          transform: "translate3d(0, ".concat(isVisible ? "0" : "-".concat(this.state.barHeight ? this.state.barHeight - 2 + "px" : "100%"), ", 0)")
        }
      }, _react.default.createElement("div", {
        ref: this.bar
      }, _react.default.createElement(_AppBar.default, {
        className: this.props.classes.bar,
        elevation: 10,
        position: "static",
        color: isVisible ? "primary" : "secondary",
        onMouseEnter: this.handleBarMouseEnter,
        onMouseLeave: this.handleBarMouseLeave
      }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Hidden.default, {
        smDown: true
      }, _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem,
        onClick: this.handleInboxOpen
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 4,
        color: "secondary"
      }, _react.default.createElement(_Mail.default, null)), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "HEADER_INBOX_LABEL"
      })), _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem
      }, _react.default.createElement(_AccountBox.default, null), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "HEADER_PROFILE_LABEL"
      })), _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem,
        onClick: this.handleLocalesOpen
      }, _react.default.createElement(_reactFlags.default, {
        name: _locales.default.flags[this.props.locale],
        format: "png",
        pngSize: 24,
        basePath: "" + "/static/img/flags"
      }), "\xA0\xA0", _.upperCase(this.props.locale)), _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem,
        onClick: this.handleThemesOpen
      }, _react.default.createElement(_ColorLens.default, null), "\xA0\xA0", _.upperFirst(this.props.theme.name))), _react.default.createElement(_Hidden.default, {
        mdUp: true
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleInboxOpen
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
      }, _react.default.createElement(_PowerSettingsNew.default, null))), this.renderInbox(), this.renderLocales(), this.renderThemes())), !isPermanent && this.renderShadow());
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Hidden.default, {
        smUp: true,
        initialWidth: "lg"
      }, this.renderBar(true)), _react.default.createElement(_Hidden.default, {
        xsDown: true,
        initialWidth: "lg"
      }, _react.default.createElement("div", {
        className: this.props.classes.wrapper,
        onMouseEnter: this.handleWrapperMouseEnter,
        onMouseLeave: this.handleWrapperMouseLeave,
        onClick: this.handleWrapperClick
      }, this.renderBar(false))), _react.default.createElement("div", {
        className: this.props.classes.spacer
      }));
    }
  }]);

  return Header;
}(_react.default.PureComponent);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Header);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ColorLens");

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PowerSettingsNew");

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = require("react-flags");

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__(7);

var _app = __webpack_require__(16);

var _auth = __webpack_require__(12);

var _connectForm = _interopRequireDefault(__webpack_require__(17));

var _AppAuthModal = _interopRequireDefault(__webpack_require__(192));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: _app.appSelectors.isStarted(state) && _app.appSelectors.getStatusCode(state) === 200 && !_auth.authSelectors.isAuthenticated(state),
    providers: _auth.authSelectors.getAllProviders(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetCookie: function onSetCookie(name, value, days) {
      return dispatch(_app.appOperations.setCookie({
        name: name,
        value: value,
        days: days
      }));
    },
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

var AppAuthModal = (0, _reactIntl.injectIntl)((0, _connectForm.default)(_AppAuthModal.default, mapStateToProps, mapDispatchToProps));
var _default = AppAuthModal;
exports.default = _default;

/***/ }),
/* 192 */
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

var _reactIntl = __webpack_require__(7);

var _immutable = __webpack_require__(11);

var _styles = __webpack_require__(4);

var _Dialog = _interopRequireDefault(__webpack_require__(67));

var _DialogActions = _interopRequireDefault(__webpack_require__(68));

var _DialogContent = _interopRequireDefault(__webpack_require__(69));

var _DialogContentText = _interopRequireDefault(__webpack_require__(70));

var _DialogTitle = _interopRequireDefault(__webpack_require__(71));

var _Grid = _interopRequireDefault(__webpack_require__(8));

var _Button = _interopRequireDefault(__webpack_require__(56));

var _Paper = _interopRequireDefault(__webpack_require__(110));

var _Typography = _interopRequireDefault(__webpack_require__(63));

var _Hidden = _interopRequireDefault(__webpack_require__(76));

var _VisibilityOff = _interopRequireDefault(__webpack_require__(193));

var _Form2 = _interopRequireDefault(__webpack_require__(77));

var _Field = _interopRequireDefault(__webpack_require__(72));

var _constants = _interopRequireDefault(__webpack_require__(6));

var _facebook = _interopRequireDefault(__webpack_require__(194));

var _google = _interopRequireDefault(__webpack_require__(195));

var _twitter = _interopRequireDefault(__webpack_require__(196));

var _auth = _interopRequireDefault(__webpack_require__(197));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var styles = function styles(theme) {
  return {
    error: theme.main.error,
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
        var result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!props.getValue("isNewUser")) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return props.onSignUp(props.getValue("email"), props.getValue("password"));

              case 3:
                result = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.next = 8;
                return props.onSignIn(props.getValue("email"), props.getValue("password"));

              case 8:
                result = _context.sent;

              case 9:
                if (!(result && _.isObject(result))) {
                  _context.next = 11;
                  break;
                }

                throw new _immutable.SubmissionError(result);

              case 11:
                return _context.abrupt("return", result);

              case 12:
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

      if (prevState.isOpen !== nextProps.isOpen) {
        nextProps.dispatch(nextProps.change("isNewUser", false));
        nextProps.dispatch(nextProps.change("password", ""));
        nextProps.dispatch(nextProps.clearAsyncError());
        nextProps.dispatch(nextProps.clearSubmitErrors());
        state.isOpen = nextProps.isOpen;
      }

      return _.keys(state).length ? state : null;
    }
  }]);

  function AppAuthModal(props) {
    var _this;

    _classCallCheck(this, AppAuthModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppAuthModal).call(this, props));
    _this.state = {};
    _this.handleAnonymous = _this.handleAnonymous.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleProvider = _this.handleProvider.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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
      this.props.onSetCookie("redirect", window.location.pathname, 0.042);
      window.location.href = "".concat(_constants.default.apiBase, "/oauth/").concat(_.toLower(provider));
    }
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
        maxWidth: "sm",
        open: this.props.isOpen,
        onClose: _.noop
      }, _react.default.createElement(_DialogTitle.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "APP_AUTH_TITLE"
      })), this.props.error && _react.default.createElement(_DialogContent.default, null, _.map(_.isArray(this.props.error) ? this.props.error : [this.props.error], function (error, index) {
        return _react.default.createElement(_DialogContentText.default, {
          key: "error-".concat(index),
          classes: {
            root: _this3.props.classes.error
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
        justify: "space-evenly",
        component: "form",
        noValidate: true,
        autoComplete: "off",
        onSubmit: this.submit
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16,
        direction: "column",
        justify: "center",
        item: true,
        xs: 12,
        sm: 6
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
        sm: 6
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
        name: "isNewUser",
        type: "checkbox",
        color: "default",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Field.default, {
        name: "email",
        type: "text",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Field.default, {
        name: "password",
        type: "password",
        onSubmit: this.submit
      }))))))), _react.default.createElement(_DialogActions.default, {
        classes: {
          root: this.props.classes.actions
        }
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        disabled: this.props.submitting,
        onClick: this.submit
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
  onSetCookie: _propTypes.default.func.isRequired,
  onSignIn: _propTypes.default.func.isRequired,
  onSignUp: _propTypes.default.func.isRequired
}));

_defineProperty(AppAuthModal, "formName", "signInForm");

_defineProperty(AppAuthModal, "fields", _auth.default);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(AppAuthModal);

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 3.998v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h-3v-7h-2v-3h2v-2.5a3.5 3.5 0 0 1 3.5-3.5H19zm1-2H4c-1.105 0-1.99.895-1.99 2l-.01 16c0 1.104.895 2 2 2h16c1.103 0 2-.896 2-2v-16a2 2 0 0 0-2-2z\"></path></svg>"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 11h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zm-13.869.143V13.2h3.504c-.175.857-1.051 2.571-3.504 2.571A3.771 3.771 0 0 1 4.365 12a3.771 3.771 0 0 1 3.766-3.771c1.227 0 2.015.514 2.453.942l1.664-1.542C11.198 6.6 9.796 6 8.131 6 4.715 6 2 8.657 2 12s2.715 6 6.131 6C11.635 18 14 15.6 14 12.171c0-.428 0-.685-.088-1.028h-5.78z\"></path></svg>"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 5.894a8.304 8.304 0 0 1-2.357.636 4.064 4.064 0 0 0 1.804-2.235c-.792.463-1.67.8-2.605.98A4.128 4.128 0 0 0 15.847 4c-2.266 0-4.104 1.808-4.104 4.04 0 .316.037.624.107.92a11.711 11.711 0 0 1-8.458-4.22 3.972 3.972 0 0 0-.555 2.03c0 1.401.724 2.638 1.825 3.362a4.138 4.138 0 0 1-1.858-.505v.05c0 1.958 1.414 3.59 3.29 3.961a4.169 4.169 0 0 1-1.852.07c.522 1.604 2.037 2.772 3.833 2.804a8.315 8.315 0 0 1-5.096 1.73c-.331 0-.658-.02-.979-.057A11.748 11.748 0 0 0 8.29 20c7.547 0 11.674-6.155 11.674-11.493 0-.175-.004-.349-.011-.522A8.265 8.265 0 0 0 22 5.894z\"></path></svg>"

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isNewUser: {
    label: "APP_AUTH_NEW_USER_LABEL"
  },
  email: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required",
    label: "APP_AUTH_EMAIL_LABEL"
  },
  password: {
    validate: "required",
    label: "APP_AUTH_PASSWORD_LABEL"
  }
};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(199);

/***/ }),
/* 199 */
/***/ (function(module, exports) {



/***/ }),
/* 200 */
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