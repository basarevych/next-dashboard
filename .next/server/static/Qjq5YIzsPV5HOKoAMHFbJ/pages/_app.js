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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "+Fxg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _materialUiPickers = __webpack_require__("Ch/8");

var _moment = _interopRequireDefault(__webpack_require__("f7fu"));

var _moment2 = _interopRequireDefault(__webpack_require__("Ty80"));

var DateProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DateProvider, _React$Component);

  function DateProvider() {
    (0, _classCallCheck2.default)(this, DateProvider);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DateProvider).apply(this, arguments));
  }

  (0, _createClass2.default)(DateProvider, [{
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

/***/ "+Opk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfile = exports.unlinkProvider = exports.linkProvider = exports.updateProfile = exports.finishEmailVerification = exports.requestEmailVerification = exports.signOut = exports.signUp = exports.signIn = exports.getStatus = exports.setStatus = exports.setCsrf = exports.setGoogleMapsKey = exports.setCookie = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("z+7x"));

var selectors = _interopRequireWildcard(__webpack_require__("p/Qe"));

var _getFormErrors = _interopRequireDefault(__webpack_require__("EUet"));

var _state = __webpack_require__("E4eY");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var _SignIn = _interopRequireDefault(__webpack_require__("1eZf"));

var _SignUp = _interopRequireDefault(__webpack_require__("Q7hD"));

var _SignOut = _interopRequireDefault(__webpack_require__("DxzU"));

var _RequestEmailVerification = _interopRequireDefault(__webpack_require__("Vc6o"));

var _VerifyEmail = _interopRequireDefault(__webpack_require__("6W9M"));

var _UpdateProfile = _interopRequireDefault(__webpack_require__("MfzE"));

var _UnlinkProvider = _interopRequireDefault(__webpack_require__("JgQo"));

var _DeleteProfile = _interopRequireDefault(__webpack_require__("N1iz"));

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
      var _ref = (0, _asyncToGenerator2.default)(
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
                return _context.abrupt("return", new _promise.default(function (resolve) {
                  return setTimeout(function () {
                    return resolve(fetchStatus());
                  }, 3000);
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
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
      var _ref2 = (0, _asyncToGenerator2.default)(
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
                if (status) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return");

              case 6:
                _context2.next = 8;
                return dispatch(actions.setStatus(status));

              case 8:
                if (false) {}

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.setStatus = setStatus;

var getStatus = function getStatus() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return dispatch(setStatus());

              case 2:
                return _context3.abrupt("return", {
                  name: selectors.getName(getState()),
                  email: selectors.getEmail(getState()),
                  isEmailVerified: selectors.getIsEmailVerified(getState())
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.getStatus = getStatus;

var signIn = function signIn(_ref4) {
  var email = _ref4.email,
      password = _ref4.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        var storage, data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                storage = di.get("storage");
                storage.set("notAnonymous", true);
                _context4.next = 4;
                return (0, _SignIn.default)(di, {
                  email: email,
                  password: password
                });

              case 4:
                data = _context4.sent;

                if (!_.get(data, "data.signIn.success", false)) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 8;
                return dispatch(setStatus());

              case 8:
                return _context4.abrupt("return", true);

              case 9:
                return _context4.abrupt("return", (0, _getFormErrors.default)(data, "APP_AUTH_FAILED"));

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x9, _x10, _x11) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.signIn = signIn;

var signUp = function signUp(_ref6) {
  var email = _ref6.email,
      password = _ref6.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _SignUp.default)(di, {
                  email: email,
                  password: password
                });

              case 2:
                data = _context5.sent;

                if (!_.get(data, "data.signUp.success", false)) {
                  _context5.next = 10;
                  break;
                }

                _context5.next = 6;
                return dispatch(setStatus());

              case 6:
                if (true) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 9;
                return window.__NEXT_PAGE_INIT({
                  store: window.__NEXT_REDUX_STORE__
                });

              case 9:
                return _context5.abrupt("return", true);

              case 10:
                return _context5.abrupt("return", (0, _getFormErrors.default)(data, "APP_AUTH_EMAIL_TAKEN"));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x12, _x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.signUp = signUp;

var signOut = function signOut() {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return dispatch(_state.appOperations.stop());

              case 2:
                _context6.next = 4;
                return (0, _SignOut.default)(di);

              case 4:
                window.location.href = "/";
                return _context6.abrupt("return", true);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x15, _x16, _x17) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.signOut = signOut;

var requestEmailVerification = function requestEmailVerification() {
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _RequestEmailVerification.default)(di);

              case 2:
                data = _context7.sent;
                return _context7.abrupt("return", !!_.get(data, "data.requestEmailVerification.success", false));

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x18, _x19, _x20) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.requestEmailVerification = requestEmailVerification;

var finishEmailVerification = function finishEmailVerification(_ref10) {
  var token = _ref10.token;
  return (
    /*#__PURE__*/
    function () {
      var _ref11 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _VerifyEmail.default)(di, {
                  token: token
                });

              case 2:
                data = _context8.sent;

                if (!_.get(data, "data.verifyEmail.success", false)) {
                  _context8.next = 7;
                  break;
                }

                _context8.next = 6;
                return dispatch(setStatus());

              case 6:
                return _context8.abrupt("return", true);

              case 7:
                return _context8.abrupt("return", false);

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x21, _x22, _x23) {
        return _ref11.apply(this, arguments);
      };
    }()
  );
};

exports.finishEmailVerification = finishEmailVerification;

var updateProfile = function updateProfile(_ref12) {
  var email = _ref12.email,
      name = _ref12.name,
      password = _ref12.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref13 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return (0, _UpdateProfile.default)(di, {
                  email: email,
                  name: name,
                  password: password
                });

              case 2:
                data = _context9.sent;

                if (!_.get(data, "data.updateProfile.success", false)) {
                  _context9.next = 5;
                  break;
                }

                return _context9.abrupt("return", true);

              case 5:
                return _context9.abrupt("return", (0, _getFormErrors.default)(data));

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x24, _x25, _x26) {
        return _ref13.apply(this, arguments);
      };
    }()
  );
};

exports.updateProfile = updateProfile;

var linkProvider = function linkProvider(_ref14) {
  var provider = _ref14.provider;
  return (
    /*#__PURE__*/
    function () {
      var _ref15 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(dispatch, getState, di) {
        var cookie;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                cookie = di.get("cookie");
                cookie.set("redirect", window.location.pathname, 1 / 24);
                _context10.next = 4;
                return dispatch(_state.appOperations.stop());

              case 4:
                window.location.href = window.location.origin + "/api/oauth/" + _.lowerCase(provider);
                return _context10.abrupt("return", true);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x27, _x28, _x29) {
        return _ref15.apply(this, arguments);
      };
    }()
  );
};

exports.linkProvider = linkProvider;

var unlinkProvider = function unlinkProvider(_ref16) {
  var provider = _ref16.provider;
  return (
    /*#__PURE__*/
    function () {
      var _ref17 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return (0, _UnlinkProvider.default)(di, {
                  provider: provider
                });

              case 2:
                data = _context11.sent;

                if (!_.get(data, "data.unlinkProvider.success", false)) {
                  _context11.next = 7;
                  break;
                }

                _context11.next = 6;
                return dispatch(setStatus());

              case 6:
                return _context11.abrupt("return", true);

              case 7:
                return _context11.abrupt("return", false);

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x30, _x31, _x32) {
        return _ref17.apply(this, arguments);
      };
    }()
  );
};

exports.unlinkProvider = unlinkProvider;

var deleteProfile = function deleteProfile() {
  return (
    /*#__PURE__*/
    function () {
      var _ref18 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return dispatch(_state.appOperations.stop());

              case 2:
                _context12.next = 4;
                return (0, _DeleteProfile.default)(di);

              case 4:
                window.location.href = "/";
                return _context12.abrupt("return", true);

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x33, _x34, _x35) {
        return _ref18.apply(this, arguments);
      };
    }()
  );
};

exports.deleteProfile = deleteProfile;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "+tnT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TableChart");

/***/ }),

/***/ "+z5V":
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

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "/iUP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 63cf91ced53e73edb780bf2751b57911
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EmployeeDept = "ACCOUNTING" | "HR" | "MARKETING" | "PRODUCTION" | "PURCHASING" | "RD" | "%future added value";
export type CreateEmployeeInput = {|
  uid?: ?string,
  checked?: ?boolean,
  name?: ?string,
  dept?: ?EmployeeDept,
  title?: ?string,
  country?: ?string,
  salary?: ?number,
  clientMutationId?: ?string,
|};
export type CreateEmployeeMutationVariables = {|
  input: CreateEmployeeInput
|};
export type CreateEmployeeMutationResponse = {|
  +createEmployee: ?{|
    +employee: ?{|
      +id: string
    |}
  |}
|};
export type CreateEmployeeMutation = {|
  variables: CreateEmployeeMutationVariables,
  response: CreateEmployeeMutationResponse,
|};
*/

/*
mutation CreateEmployeeMutation(
  $input: CreateEmployeeInput!
) {
  createEmployee(input: $input) {
    employee {
      id
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
    "type": "CreateEmployeeInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "createEmployee",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "CreateEmployeePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "employee",
      "storageKey": null,
      "args": null,
      "concreteType": "Employee",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "CreateEmployeeMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "CreateEmployeeMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "CreateEmployeeMutation",
      "id": null,
      "text": "mutation CreateEmployeeMutation(\n  $input: CreateEmployeeInput!\n) {\n  createEmployee(input: $input) {\n    employee {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '88a7c7e8df38fa5fa4ff48e3f8284213';
module.exports = node;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "00Dt":
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

/***/ }),

/***/ "07Y+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash e17bc909ac53c3d9020aa449f26fd11f
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteEmployeeInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteEmployeeMutationVariables = {|
  input: DeleteEmployeeInput
|};
export type DeleteEmployeeMutationResponse = {|
  +deleteEmployee: ?{|
    +employee: ?{|
      +id: string
    |}
  |}
|};
export type DeleteEmployeeMutation = {|
  variables: DeleteEmployeeMutationVariables,
  response: DeleteEmployeeMutationResponse,
|};
*/

/*
mutation DeleteEmployeeMutation(
  $input: DeleteEmployeeInput!
) {
  deleteEmployee(input: $input) {
    employee {
      id
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
    "type": "DeleteEmployeeInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteEmployee",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "DeleteEmployeePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "employee",
      "storageKey": null,
      "args": null,
      "concreteType": "Employee",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "DeleteEmployeeMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "DeleteEmployeeMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "DeleteEmployeeMutation",
      "id": null,
      "text": "mutation DeleteEmployeeMutation(\n  $input: DeleteEmployeeInput!\n) {\n  deleteEmployee(input: $input) {\n    employee {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'e6744264438a7d81d3212a35a47c6ca0';
module.exports = node;

/***/ }),

/***/ "0AQm":
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

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "0Yqw":
/***/ (function(module, exports) {

module.exports = require("relay-query-lookup-renderer");

/***/ }),

/***/ "0zOY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var pako = __webpack_require__("pLMf");

var utf8 = __webpack_require__("CAhU");

var _require = __webpack_require__("zwQV"),
    byteDecode = _require.byteDecode;

var _require2 = __webpack_require__("Qt1O"),
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "1Kbk":
/***/ (function(module, exports) {

module.exports = require("react-flags");

/***/ }),

/***/ "1Pmw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.edit = exports.create = exports.editFirstSelected = exports.deselectAll = exports.selectAll = exports.setSelected = exports.hideEditModal = exports.showEditModal = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("fcv4"));

var selectors = _interopRequireWildcard(__webpack_require__("smpn"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var _getFormErrors = _interopRequireDefault(__webpack_require__("EUet"));

var _CreateUser = _interopRequireDefault(__webpack_require__("2e9F"));

var _EditUser = _interopRequireDefault(__webpack_require__("8hF4"));

var _DeleteUser = _interopRequireDefault(__webpack_require__("faI2"));

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
      var _ref = (0, _asyncToGenerator2.default)(
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
        }, _callee);
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
      var _ref3 = (0, _asyncToGenerator2.default)(
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

                if (!_.get(data, "data.createUser.user.id", null)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context2.abrupt("return", true);

              case 7:
                return _context2.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
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
      var _ref5 = (0, _asyncToGenerator2.default)(
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

                if (!_.get(data, "data.editUser.user.id", null)) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context3.abrupt("return", true);

              case 7:
                return _context3.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
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
      var _ref7 = (0, _asyncToGenerator2.default)(
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
                return _context4.abrupt("return", !!_.get(data, "data.deleteUser.user.id", null));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x9, _x10, _x11) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "1S23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 95f42e41b3b9d26fafdc0714ed791abe
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EmployeeDept = "ACCOUNTING" | "HR" | "MARKETING" | "PRODUCTION" | "PURCHASING" | "RD" | "%future added value";
export type EditEmployeeInput = {|
  id: string,
  uid?: ?string,
  checked?: ?boolean,
  name?: ?string,
  dept?: ?EmployeeDept,
  title?: ?string,
  country?: ?string,
  salary?: ?number,
  clientMutationId?: ?string,
|};
export type EditEmployeeMutationVariables = {|
  input: EditEmployeeInput
|};
export type EditEmployeeMutationResponse = {|
  +editEmployee: ?{|
    +employee: ?{|
      +id: string
    |}
  |}
|};
export type EditEmployeeMutation = {|
  variables: EditEmployeeMutationVariables,
  response: EditEmployeeMutationResponse,
|};
*/

/*
mutation EditEmployeeMutation(
  $input: EditEmployeeInput!
) {
  editEmployee(input: $input) {
    employee {
      id
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
    "type": "EditEmployeeInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "editEmployee",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "EditEmployeePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "employee",
      "storageKey": null,
      "args": null,
      "concreteType": "Employee",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "EditEmployeeMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "EditEmployeeMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "EditEmployeeMutation",
      "id": null,
      "text": "mutation EditEmployeeMutation(\n  $input: EditEmployeeInput!\n) {\n  editEmployee(input: $input) {\n    employee {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '544d4606cbbbd95fc31a953d239c7598';
module.exports = node;

/***/ }),

/***/ "1TCz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("TbGu"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _app = _interopRequireWildcard(__webpack_require__("8Bbg"));

var _reactRedux = __webpack_require__("h74D");

var _styles = __webpack_require__("9Pu4");

var _jss = __webpack_require__("q1C7");

var _CssBaseline = _interopRequireDefault(__webpack_require__("AJJM"));

var _jssExtend = _interopRequireDefault(__webpack_require__("zqzL"));

var _JssProvider = _interopRequireDefault(__webpack_require__("Gkmu"));

var _serialize = _interopRequireDefault(__webpack_require__("GE5e"));

var _deserialize = _interopRequireDefault(__webpack_require__("0zOY"));

var _getDiContainer = _interopRequireDefault(__webpack_require__("prCD"));

var _getReduxStore = _interopRequireDefault(__webpack_require__("9S3X"));

var _getRelayEnvironment = _interopRequireDefault(__webpack_require__("r8N8"));

var _getMaterialContext = _interopRequireDefault(__webpack_require__("IvTs"));

var _state = __webpack_require__("E4eY");

var _state2 = __webpack_require__("Yoxy");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__("jRAA"));

var _Relay = __webpack_require__("JyB7");

var _IntlContainer = _interopRequireDefault(__webpack_require__("xkAL"));

var _DateContainer = _interopRequireDefault(__webpack_require__("MqDA"));

var _LayoutContainer = _interopRequireDefault(__webpack_require__("qhFA"));

// Configure JSS
var jss = (0, _jss.create)({
  plugins: [].concat((0, _toConsumableArray2.default)((0, _styles.jssPreset)().plugins), [(0, _jssExtend.default)()])
});

var MyApp =
/*#__PURE__*/
function (_App) {
  (0, _inherits2.default)(MyApp, _App);
  (0, _createClass2.default)(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, ctx, req, res, err, pathname, query, statusCode, di, store, environment, cookie, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                req = ctx.req, res = ctx.res, err = ctx.err, pathname = ctx.pathname, query = ctx.query;
                statusCode = res && res.statusCode || err && (err.statusCode || 500) || 200; // Dependency Injection Container

                di = (0, _getDiContainer.default)(); // Redux Store

                store = (0, _getReduxStore.default)(di);
                _context.t0 = store;
                _context.t1 = _state.appOperations;
                _context.t2 = statusCode;
                _context.t3 = req && req.csrfHeader;
                _context.t4 = req && req.getAuthStatus;

                if (!_context.t4) {
                  _context.next = 14;
                  break;
                }

                _context.next = 13;
                return req.getAuthStatus();

              case 13:
                _context.t4 = _context.sent;

              case 14:
                _context.t5 = _context.t4;
                _context.t6 = query && query.subscriptionsServer;
                _context.t7 = query && query.googleMapsKey;
                _context.t8 = {
                  statusCode: _context.t2,
                  csrf: _context.t3,
                  status: _context.t5,
                  subscriptionsServer: _context.t6,
                  googleMapsKey: _context.t7
                };
                _context.t9 = _context.t1.create.call(_context.t1, _context.t8);
                _context.next = 21;
                return _context.t0.dispatch.call(_context.t0, _context.t9);

              case 21:
                if (statusCode === 200 && !(0, _isRouteAllowed.default)(pathname, _state2.authSelectors.getRoles(store.getState()))) {
                  statusCode = 403;
                  store.dispatch(_state.appOperations.setStatusCode({
                    code: statusCode
                  }));
                } // Relay Environment


                environment = (0, _getRelayEnvironment.default)(di); // when doing SSR we will be making own API requests on behalf of current user

                cookie = req && req.cookieHeader;
                if (cookie) di.get("fetcher").setCookie(cookie);
                ctx.statusCode = statusCode;
                ctx.isAuthenticated = _state2.authSelectors.isAuthenticated(store.getState());
                ctx.store = store;
                ctx.fetchQuery = (0, _Relay.fetchQuery)(environment);
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 34;
                  break;
                }

                _context.next = 33;
                return Component.getInitialProps(ctx);

              case 33:
                pageProps = _context.sent;

              case 34:
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  theme: query.theme,
                  reduxState: (0, _serialize.default)(store.getState(), "redux"),
                  relayState: (0, _serialize.default)(environment.getStore().getSource(), "relay")
                });

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function MyApp(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyApp);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyApp).call(this, props));
    var di = (0, _getDiContainer.default)();
    _this.reduxStore = (0, _getReduxStore.default)(di, (0, _deserialize.default)(props.reduxState, "redux"));
    _this.relayEnvironment = (0, _getRelayEnvironment.default)(di, (0, _deserialize.default)(props.relayState, "relay"));
    _this.materialContext = (0, _getMaterialContext.default)(props.theme);
    if (false) {}
    return _this;
  }

  (0, _createClass2.default)(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
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
      return _react.default.createElement(_app.Container, null, _react.default.createElement(_reactRedux.Provider, {
        store: this.reduxStore
      }, _react.default.createElement(_Relay.RelayProvider, {
        environment: this.relayEnvironment
      }, _react.default.createElement(_IntlContainer.default, null, _react.default.createElement(_DateContainer.default, null, _react.default.createElement(_JssProvider.default, {
        jss: jss,
        registry: this.materialContext.sheetsRegistry,
        generateClassName: this.materialContext.generateClassName
      }, _react.default.createElement(_styles.MuiThemeProvider, {
        theme: this.materialContext.theme,
        sheetsManager: this.materialContext.sheetsManager
      }, _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_LayoutContainer.default, {
        title: title
      }, _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
        materialContext: this.materialContext
      }))))))))));
    }
  }]);
  return MyApp;
}(_app.default);

var _default = MyApp;
exports.default = _default;

/***/ }),

/***/ "1eZf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("bI0k");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "2+Lp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.edit = exports.create = exports.editFirstSelected = exports.deselectAll = exports.selectAll = exports.setSelected = exports.hideEditModal = exports.showEditModal = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("gWH5"));

var selectors = _interopRequireWildcard(__webpack_require__("ghjP"));

var _getFormErrors = _interopRequireDefault(__webpack_require__("EUet"));

var _CreateEmployee = _interopRequireDefault(__webpack_require__("Y/f1"));

var _EditEmployee = _interopRequireDefault(__webpack_require__("jxgt"));

var _DeleteEmployee = _interopRequireDefault(__webpack_require__("am9M"));

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
      var _ref = (0, _asyncToGenerator2.default)(
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
                  employeeId: selected[0]
                })));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.editFirstSelected = editFirstSelected;

var create = function create(_ref2) {
  var uid = _ref2.uid,
      checked = _ref2.checked,
      name = _ref2.name,
      dept = _ref2.dept,
      title = _ref2.title,
      country = _ref2.country,
      salary = _ref2.salary;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _CreateEmployee.default)(di, {
                  uid: uid,
                  checked: checked,
                  name: name,
                  dept: dept,
                  title: title,
                  country: country,
                  salary: salary
                });

              case 2:
                data = _context2.sent;

                if (!_.get(data, "data.createEmployee.employee.id", null)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context2.abrupt("return", true);

              case 7:
                return _context2.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
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
      uid = _ref4.uid,
      checked = _ref4.checked,
      name = _ref4.name,
      dept = _ref4.dept,
      title = _ref4.title,
      country = _ref4.country,
      salary = _ref4.salary;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _EditEmployee.default)(di, {
                  id: id,
                  uid: uid,
                  checked: checked,
                  name: name,
                  dept: dept,
                  title: title,
                  country: country,
                  salary: salary
                });

              case 2:
                data = _context3.sent;

                if (!_.get(data, "data.editEmployee.employee.id", null)) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context3.abrupt("return", true);

              case 7:
                return _context3.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
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
      var _ref7 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _DeleteEmployee.default)(di, {
                  id: id
                });

              case 2:
                data = _context4.sent;
                return _context4.abrupt("return", !!_.get(data, "data.deleteEmployee.employee.id", null));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x9, _x10, _x11) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "26bE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 0610a65ec7d53fb2e2def56948272b29
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UnlinkProviderInput = {|
  provider?: ?string,
  clientMutationId?: ?string,
|};
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
      "variableName": "input"
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
    "fragment": {
      "kind": "Fragment",
      "name": "UnlinkProviderMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "UnlinkProviderMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "UnlinkProviderMutation",
      "id": null,
      "text": "mutation UnlinkProviderMutation(\n  $input: UnlinkProviderInput!\n) {\n  unlinkProvider(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '47e6fd901615a28cf21bd56913699a6f';
module.exports = node;

/***/ }),

/***/ "2PDY":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "2UXs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router = _interopRequireDefault(__webpack_require__("4Q3z"));

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _state = __webpack_require__("E4eY");

var _state2 = __webpack_require__("Yoxy");

var _AppAuthModal = _interopRequireWildcard(__webpack_require__("ZZkD"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: ( true) && _state.appSelectors.isStarted(state) && _state.appSelectors.getStatusCode(state) === 200 && !_state2.authSelectors.isAuthenticated(state),
    providers: _state2.authSelectors.getAllProviders(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetCookie: function onSetCookie(name, value, days) {
      return dispatch(_state.appOperations.setCookie({
        name: name,
        value: value,
        days: days
      }));
    },
    onSignIn: function onSignIn(email, password) {
      return dispatch(_state2.authOperations.signIn({
        email: email,
        password: password
      }));
    },
    onSignUp: function onSignUp(email, password) {
      return dispatch(_state2.authOperations.signUp({
        email: email,
        password: password
      }));
    }
  };
};

var AppAuthModal = (0, _styles.withStyles)(_AppAuthModal.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AppAuthModal.default)));
var _default = AppAuthModal;
exports.default = _default;

/***/ }),

/***/ "2e9F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("gEav");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "3giw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _Checkbox = _interopRequireWildcard(__webpack_require__("a73a"));

var Checkbox = (0, _styles.withStyles)(_Checkbox.styles)(_Checkbox.default);
var _default = Checkbox;
exports.default = _default;

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4VpM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FilledInput");

/***/ }),

/***/ "4ZJ9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "59gi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InfoOutlined");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "5YBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("Rkej");

__webpack_require__("jDDT");

__webpack_require__("GCOt");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "6Gna":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("xnum"));

var _reactIntl = __webpack_require__("k004");

var _reactToastify = __webpack_require__("oAEb");

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var _CircularProgress = _interopRequireDefault(__webpack_require__("1imS"));

var _Hidden = _interopRequireDefault(__webpack_require__("Y8uC"));

var _Drawer = _interopRequireDefault(__webpack_require__("Q01v"));

var _SwipeableDrawer = _interopRequireDefault(__webpack_require__("pN9Q"));

var _SidebarContainer = _interopRequireDefault(__webpack_require__("fbqZ"));

var _HeaderContainer = _interopRequireDefault(__webpack_require__("Syd2"));

var _AppAuthModalContainer = _interopRequireDefault(__webpack_require__("2UXs"));

var _ErrorPage = _interopRequireDefault(__webpack_require__("T56u"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

__webpack_require__("5YBG");

var _styledScroll = _interopRequireDefault(__webpack_require__("00Dt"));

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
    swUpdate: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      zIndex: 11000,
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "0.5rem 1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    backdrop: {
      pointerEvents: "none",
      background: theme.main.backdrop,
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
      color: theme.main.spinner
    },
    sidebar: _.merge((_$merge = {
      background: theme.sidebar.background,
      border: "none",
      overflowX: "hidden",
      width: theme.sidebar.computerWidth * theme.spacing.unit
    }, (0, _defineProperty2.default)(_$merge, theme.breakpoints.between("sm", "md"), {
      width: theme.sidebar.tabletWidth * theme.spacing.unit
    }), (0, _defineProperty2.default)(_$merge, theme.breakpoints.down("xs"), {
      width: theme.sidebar.phoneWidth * theme.spacing.unit
    }), _$merge), (0, _styledScroll.default)(theme)),
    main: (_main = {
      background: theme.main.background,
      color: theme.main.color,
      minHeight: "100vh",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "stretch",
      marginLeft: theme.sidebar.computerWidth * theme.spacing.unit
    }, (0, _defineProperty2.default)(_main, theme.breakpoints.between("sm", "md"), {
      marginLeft: theme.sidebar.tabletWidth * theme.spacing.unit
    }), (0, _defineProperty2.default)(_main, theme.breakpoints.down("xs"), {
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
    },
    toastBox: {
      borderRadius: theme.shape.borderRadius,
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      "& button": {
        color: theme.palette.text.primary
      }
    },
    toastProgress: {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText
    }
  };
};

exports.styles = styles;

var Layout =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Layout, _React$Component);

  function Layout(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Layout);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Layout).call(this, props));
    _this.state = {
      isUpdateNeeded: !!global.__swUpdateReady,
      isSidebarOpen: false
    };
    _this.handleSidebarToggle = _this.handleSidebarToggle.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSidebarOpen = _this.handleSidebarOpen.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSidebarClose = _this.handleSidebarClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.doUpdate = _this.doUpdate.bind((0, _assertThisInitialized2.default)(_this));
    _this.showUpdateMessage = _this.showUpdateMessage.bind((0, _assertThisInitialized2.default)(_this));
    _this.showToast = _this.showToast.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener(_constants.default.events.SW_UPDATE_READY, this.showUpdateMessage);
      window.addEventListener(_constants.default.events.TOAST, this.showToast);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener(_constants.default.events.SW_UPDATE_READY, this.showUpdateMessage);
      window.removeEventListener(_constants.default.events.TOAST, this.showToast);
    }
  }, {
    key: "handleSidebarToggle",
    value: function handleSidebarToggle() {
      this.setState({
        isSidebarOpen: !this.state.isSidebarOpen
      });
    }
  }, {
    key: "handleSidebarOpen",
    value: function handleSidebarOpen() {
      if (!this.state.isSidebarOpen) this.setState({
        isSidebarOpen: true
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
    key: "doUpdate",
    value: function doUpdate() {
      this.setState({
        isUpdateNeeded: false
      });
      window.location.reload(true);
    }
  }, {
    key: "showUpdateMessage",
    value: function showUpdateMessage() {
      this.setState({
        isUpdateNeeded: true
      });
    }
  }, {
    key: "showToast",
    value: function showToast(evt) {
      (0, _reactToastify.toast)(_react.default.createElement("div", null, _react.default.createElement("h3", null, evt.detail.title), _react.default.createElement("p", null, evt.detail.content)), {
        position: evt.detail.position,
        className: this.props.classes.toastBox,
        progressClassName: this.props.classes.toastProgress
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.isStopped) return null;
      return _react.default.createElement("div", {
        className: "app"
      }, this.props.title && _react.default.createElement(_head.default, null, _react.default.createElement("title", null, this.props.intl.formatMessage({
        id: this.props.title
      }))), this.state.isUpdateNeeded && _react.default.createElement("div", {
        className: this.props.classes.swUpdate
      }, _react.default.createElement(_Button.default, {
        variant: "text",
        color: "inherit",
        onClick: this.doUpdate
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "LAYOUT_SW_UPDATE_MESSAGE"
      }))), this.props.isError && _react.default.createElement("main", {
        className: this.props.classes.anonymous
      }, _react.default.createElement(_ErrorPage.default, {
        statusCode: this.props.statusCode
      })), !this.props.isError && _react.default.createElement(_react.default.Fragment, null, this.props.isAuthenticated && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactToastify.ToastContainer, null), _react.default.createElement(_Hidden.default, {
        implementation: "css",
        smUp: true
      }, _react.default.createElement(_SwipeableDrawer.default, {
        open: this.state.isSidebarOpen,
        classes: {
          paper: this.props.classes.sidebar
        },
        onOpen: this.handleSidebarOpen,
        onClose: this.handleSidebarClose
      }, _react.default.createElement(_SidebarContainer.default, {
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
      }, _react.default.createElement(_SidebarContainer.default, {
        onMenuClick: this.handleSidebarClose
      }))), _react.default.createElement("div", {
        className: this.props.classes.main
      }, _react.default.createElement("main", {
        className: this.props.classes.content
      }, !this.props.isError && _react.default.createElement(_HeaderContainer.default, {
        onSidebarToggle: this.handleSidebarToggle
      }), this.props.children))), !this.props.isAuthenticated && _react.default.createElement("main", {
        className: this.props.classes.anonymous
      }, this.props.children), !this.props.isStarted && _react.default.createElement("div", {
        className: this.props.classes.backdrop
      }, _react.default.createElement("div", {
        className: this.props.classes.spinner
      }, _react.default.createElement(_CircularProgress.default, {
        color: "inherit",
        size: 60
      })))), _react.default.createElement(_AppAuthModalContainer.default, null));
    }
  }]);
  return Layout;
}(_react.default.Component);

var _default = Layout;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "6W9M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("NX2N");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "7Z6F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnected = exports.isStopped = exports.isStarted = exports.getLocale = exports.getSubscriptionsServer = exports.getStatusCode = exports.getCreated = void 0;

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

var isStopped = function isStopped(state) {
  return state.getIn(["app", "isStopped"]);
};

exports.isStopped = isStopped;

var isConnected = function isConnected(state) {
  return state.getIn(["app", "isConnected"]);
};

exports.isConnected = isConnected;

/***/ }),

/***/ "7nhY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PowerSettingsNew");

/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8Ey4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 3b926aae2cb8044e9dfe7ff97d761d06
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRole = "ADMIN" | "ANONYMOUS" | "AUTHENTICATED" | "%future added value";
export type EditUserInput = {|
  id: string,
  email?: ?string,
  name?: ?string,
  password?: ?string,
  roles?: ?$ReadOnlyArray<?UserRole>,
  clientMutationId?: ?string,
|};
export type EditUserMutationVariables = {|
  input: EditUserInput
|};
export type EditUserMutationResponse = {|
  +editUser: ?{|
    +user: ?{|
      +id: string
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
    user {
      id
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
      "variableName": "input"
    }],
    "concreteType": "EditUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
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
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "EditUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "EditUserMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "EditUserMutation",
      "id": null,
      "text": "mutation EditUserMutation(\n  $input: EditUserInput!\n) {\n  editUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '3e6c36e4a9a4bce4d918bd7dea47edbc';
module.exports = node;

/***/ }),

/***/ "8L3H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendToast = exports.getToken = exports.getCookie = exports.setCookie = exports.start = exports.create = exports.stop = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _router = _interopRequireDefault(__webpack_require__("4Q3z"));

var actions = _interopRequireWildcard(__webpack_require__("gRch"));

var _state = __webpack_require__("Yoxy");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

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
      var _ref2 = (0, _asyncToGenerator2.default)(
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
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}; // called in App.costructor() client-side


exports.create = create;

var start = function start() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return dispatch(_state.authOperations.setStatus());

              case 2:
                if (!(!_state.authSelectors.isAuthenticated(getState()) && !di.get("storage").get("notAnonymous") && !_.get(_router.default, "query.noautologin"))) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return dispatch(_state.authOperations.signIn({
                  email: null,
                  password: null
                }));

              case 5:
                _context2.next = 7;
                return dispatch(actions.start());

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.start = start;

var setCookie = function setCookie(_ref4) {
  var name = _ref4.name,
      value = _ref4.value,
      days = _ref4.days;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                di.get("cookie").set(name, value, days);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x5, _x6, _x7) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.setCookie = setCookie;

var getCookie = function getCookie(_ref6) {
  var name = _ref6.name;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", di.get("cookie").get(name));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x8, _x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.getCookie = getCookie;

var getToken = function getToken() {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", di.get("fetcher").getToken());

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x11, _x12, _x13) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.getToken = getToken;

var sendToast = function sendToast(_ref9) {
  var position = _ref9.position,
      title = _ref9.title,
      content = _ref9.content;
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", di.get("socket").emit(_constants.default.messages.TOAST, {
                  position: position,
                  title: title,
                  content: content
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x14, _x15, _x16) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
};

exports.sendToast = sendToast;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "8hF4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("8Ey4");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "9HlK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _Radio = _interopRequireWildcard(__webpack_require__("iYPX"));

var Radio = (0, _styles.withStyles)(_Radio.styles)(_Radio.default);
var _default = Radio;
exports.default = _default;

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9S3X":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getReduxStore;

var _redux = __webpack_require__("rKB8");

var _reduxImmutable = __webpack_require__("RGyf");

var _reduxDevtoolsExtension = __webpack_require__("ufKq");

var _reduxThunk = _interopRequireDefault(__webpack_require__("ZSx1"));

var _state = _interopRequireDefault(__webpack_require__("E4eY"));

var _state2 = _interopRequireDefault(__webpack_require__("Yoxy"));

var _state3 = _interopRequireDefault(__webpack_require__("ZKx5"));

var _state4 = _interopRequireDefault(__webpack_require__("rdLC"));

var rootReducer = (0, _reduxImmutable.combineReducers)({
  app: _state.default,
  auth: _state2.default,
  employees: _state3.default,
  users: _state4.default
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

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "AV/6":
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ }),

/***/ "AlFE":
/***/ (function(module, exports) {

module.exports = require("subscriptions-transport-ws");

/***/ }),

/***/ "Avpf":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$getOwnPropertySymbols = __webpack_require__("4mXO");

var _Object$keys = __webpack_require__("pLtp");

var defineProperty = __webpack_require__("xHqa");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _Object$keys(source);

    if (typeof _Object$getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var utils_1 = __webpack_require__("p8BD");

var router_1 = __webpack_require__("4Q3z");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (false) {}
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "BlHF":
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),

/***/ "Blge":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InsertChart");

/***/ }),

/***/ "CAhU":
/***/ (function(module, exports) {

module.exports = require("utf8");

/***/ }),

/***/ "CUfL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "Ch/8":
/***/ (function(module, exports) {

module.exports = require("material-ui-pickers");

/***/ }),

/***/ "Cxfq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash bc6cdc8dfc71704f2b6cf314ccfb0c7f
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RequestEmailVerificationInput = {|
  clientMutationId?: ?string
|};
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
      "variableName": "input"
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
    "fragment": {
      "kind": "Fragment",
      "name": "RequestEmailVerificationMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "RequestEmailVerificationMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "RequestEmailVerificationMutation",
      "id": null,
      "text": "mutation RequestEmailVerificationMutation(\n  $input: RequestEmailVerificationInput!\n) {\n  requestEmailVerification(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '501ecd6de6ba0d802c7cd7159a7a1df4';
module.exports = node;

/***/ }),

/***/ "Dxhi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _Text = _interopRequireWildcard(__webpack_require__("IUnC"));

var Text = (0, _styles.withStyles)(_Text.styles)(_Text.default);
var _default = Text;
exports.default = _default;

/***/ }),

/***/ "DxzU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("RJ40");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "E4eY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("FE/x"));

var appTypes = _interopRequireWildcard(__webpack_require__("rz8+"));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__("8L3H"));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__("7Z6F"));

exports.appSelectors = appSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "EGUq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _List = _interopRequireDefault(__webpack_require__("0LMq"));

var _ListItem = _interopRequireDefault(__webpack_require__("c25J"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("GLYF"));

var _ListItemText = _interopRequireDefault(__webpack_require__("W+03"));

var _InfoOutlined = _interopRequireDefault(__webpack_require__("59gi"));

var _ErrorOutlined = _interopRequireDefault(__webpack_require__("OFRV"));

var styles = function styles(theme) {
  return {
    list: {
      padding: 0
    },
    listItem: {
      paddingTop: "0.5rem",
      paddingLeft: "0.5rem",
      paddingRight: 0
    },
    info: {
      color: theme.palette.text.secondary
    },
    error: {
      color: theme.palette.text.secondary
    }
  };
};

exports.styles = styles;

var ErrorMessage =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(ErrorMessage, _React$PureComponent);

  function ErrorMessage() {
    (0, _classCallCheck2.default)(this, ErrorMessage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorMessage).apply(this, arguments));
  }

  (0, _createClass2.default)(ErrorMessage, [{
    key: "render",
    value: function render() {
      var _this = this;

      var list = [];

      if (this.props.messages) {
        list = list.concat(_.map(this.props.messages, function (item) {
          return {
            message: item
          };
        }));
      }

      if (this.props.errors) list = list.concat(_.map(this.props.errors, function (item) {
        return {
          error: item
        };
      }));
      return _react.default.createElement(_List.default, {
        classes: {
          root: this.props.classes.list
        }
      }, _.map(list, function (item, index) {
        return _react.default.createElement(_ListItem.default, {
          key: "message-".concat(index),
          classes: {
            root: _this.props.classes.listItem
          }
        }, _react.default.createElement(_ListItemIcon.default, null, item.message ? _react.default.createElement(_InfoOutlined.default, {
          className: _this.props.classes.info
        }) : _react.default.createElement(_ErrorOutlined.default, {
          className: _this.props.classes.info
        })), _react.default.createElement(_ListItemText.default, {
          classes: {
            primary: _this.props.classes.info
          },
          primary: _this.props.intl.formatMessage({
            id: item.message ? item.message : item.error
          })
        }));
      }));
    }
  }]);
  return ErrorMessage;
}(_react.default.PureComponent);

var _default = ErrorMessage;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "EUet":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFormErrors;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _finalForm = __webpack_require__("MrYO");

function getFormErrors(data) {
  var defaultMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "OPERATION_FAILED";
  var result = {};
  var errors = _.get(data, "errors") || [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(errors), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var error = _step.value;
      if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result[_finalForm.FORM_ERROR] = (result[_finalForm.FORM_ERROR] || []).concat([error.message]);
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

  if (!_.keys(result).length) result = (0, _defineProperty2.default)({}, _finalForm.FORM_ERROR, defaultMessage);
  return result;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "EY6e":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertySymbols = __webpack_require__("4mXO");

var objectWithoutPropertiesLoose = __webpack_require__("L2E4");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (_Object$getOwnPropertySymbols) {
    var sourceSymbolKeys = _Object$getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "FE/x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("rz8+"));

var _locales = _interopRequireDefault(__webpack_require__("fXLo"));

/* State Shape
Map({
  created: Number, // timestamp
  locale: String,
  statusCode: Number, // current HTTP status code
  subscriptionsServer: String,
  isStarted: Boolean,
  isStopped: Boolean,
  isConnected: Boolean, // WebSocket
})
*/
var createdReducer = function createdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _now.default)();
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
  }

  return state;
};

var isStoppedReducer = function isStoppedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.STOP:
      return true;
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
  isStopped: isStoppedReducer,
  isConnected: isConnectedReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "G1Jh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _jsMd = _interopRequireDefault(__webpack_require__("I6kj"));

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var _MenuList = _interopRequireDefault(__webpack_require__("xmQw"));

var _MenuItem = _interopRequireDefault(__webpack_require__("x54t"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("GLYF"));

var _ListItemText = _interopRequireDefault(__webpack_require__("W+03"));

var _Dashboard = _interopRequireDefault(__webpack_require__("vFf/"));

var _Ballot = _interopRequireDefault(__webpack_require__("KrcP"));

var _InsertChart = _interopRequireDefault(__webpack_require__("Blge"));

var _TableChart = _interopRequireDefault(__webpack_require__("+tnT"));

var _Map = _interopRequireDefault(__webpack_require__("zmJW"));

var _SpeakerNotes = _interopRequireDefault(__webpack_require__("jWBx"));

var _BrightnessAuto = _interopRequireDefault(__webpack_require__("nz5+"));

var _Pets = _interopRequireDefault(__webpack_require__("v5c1"));

var _People = _interopRequireDefault(__webpack_require__("yFMe"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__("jRAA"));

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
      padding: 0
    },
    avatar: {
      margin: "2rem 0 1rem 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: theme.sidebar.color,
      "& img": {
        borderRadius: theme.shape.borderRadius
      }
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

exports.styles = styles;

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Sidebar, _React$Component);

  function Sidebar() {
    (0, _classCallCheck2.default)(this, Sidebar);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Sidebar).apply(this, arguments));
  }

  (0, _createClass2.default)(Sidebar, [{
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
        src: "".concat(_constants.default.apiBase, "/avatars/0?h=").concat((0, _jsMd.default)(this.props.email))
      }), _react.default.createElement(_Typography.default, {
        variant: "subtitle1",
        color: "inherit"
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
          return window.open("".concat(_constants.default.apiBase, "/redirect/github"));
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "SIDEBAR_GITHUB_LINK"
      })), _react.default.createElement("a", {
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

var _default = Sidebar;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "GCOt":
/***/ (function(module, exports) {



/***/ }),

/***/ "GE5e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var pako = __webpack_require__("pLMf");

var utf8 = __webpack_require__("CAhU");

var _require = __webpack_require__("zwQV"),
    byteEncode = _require.byteEncode;

var _require2 = __webpack_require__("Qt1O"),
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

  var str = (0, _stringify.default)(obj, function (key, value) {
    return _.isString(value) ? utf8.encode(value) : value;
  });
  var output = byteEncode(pako.deflate(str, {
    to: "string"
  }));
  return output;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "GYHf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "Gkmu":
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ "HaHp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ColorLens");

/***/ }),

/***/ "I1eL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

var _parseInt2 = _interopRequireDefault(__webpack_require__("6BQ9"));

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var tokenize = __webpack_require__("0AQm");

var validator = __webpack_require__("WZpn"); //let allCountries, iso2Lookup;


var _require = __webpack_require__("rtrS"),
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


module.exports = function normalize(options, value, allValues) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(tokenize(options, "\\", "|")), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
    for (var _iterator2 = (0, _getIterator2.default)(_.keys(rules)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
            for (var _iterator3 = (0, _getIterator2.default)(_.split(_.trim(result), /\r\n?|\n/g)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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
              for (var _iterator4 = (0, _getIterator2.default)(_.split(result, /\r\n?|\n/g)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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
              for (var _iterator5 = (0, _getIterator2.default)(_.split(result, /\r\n?|\n/g)), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
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
            if (i > 0 && i < (rules[_command].length ? (0, _parseInt2.default)(rules[_command][0]) : 1)) result += isLongBreak ? "\r\n" : "\n";
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
          search = allCountries && iso2Lookup && allCountries[iso2Lookup[allValues.country]];

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "I6kj":
/***/ (function(module, exports) {

module.exports = require("js-md5");

/***/ }),

/***/ "IUnC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _TextField = _interopRequireDefault(__webpack_require__("IbbU"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("LT9N"));

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
  (0, _inherits2.default)(MyText, _React$PureComponent);

  function MyText(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyText);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyText).call(this, props));
    _this.input = _react.default.createRef();
    _this.cachedValue = props.input.value;
    _this.cachedPosition = 0;
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(MyText, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.input.current) {
        // Fixes case when input is normalized in onChange() and
        // the cursor sometimes jumps to the end of input.
        var cur = this.props.input.value || "";
        var cached = this.cachedValue || "";

        if (this.cachedPosition !== cached.length) {
          var str = cached.substr(0, this.cachedPosition);
          var index = cur.indexOf(str);
          index = index === -1 ? this.cachedPosition : index + this.cachedPosition;
          var delta = cur.length - cached.length;
          if (cached !== str && delta > 0) index += delta;
          if (index <= cur.length) this.input.current.setSelectionRange(index, index);
        }
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      this.cachedPosition = evt.target.selectionEnd;
      this.cachedValue = evt.target.value;
      this.forceUpdate();
      return this.props.input.onChange(evt);
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

      var errors = null;

      if (this.props.meta.touched && !this.props.meta.active && !this.props.meta.submitting && (this.props.meta.error || this.props.meta.submitError && !this.props.meta.dirtySinceLastSubmit)) {
        errors = [];
        if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
        if (this.props.meta.submitError) errors = errors.concat(this.props.meta.submitError);
        errors = _.uniq(errors);
      }

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
          component: this.props.messages || errors ? "div" : undefined,
          classes: {
            root: this.props.classes.formHelper
          }
        },
        helperText: this.props.messages || errors ? _react.default.createElement(_FieldMessagesContainer.default, {
          messages: this.props.messages,
          errors: errors
        }) : undefined,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        inputRef: this.input,
        inputProps: {
          onKeyDown: function onKeyDown(evt) {
            if (_this2.props.type !== "textarea" && _this2.props.onSubmit && evt.keyCode === 13) {
              evt.preventDefault();
              evt.stopPropagation();

              _this2.props.form.blur(_this2.props.input.name);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "IfcR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "IvTs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMaterialContext;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _jss = __webpack_require__("q1C7");

var _styles = __webpack_require__("9Pu4");

var _themes = _interopRequireDefault(__webpack_require__("n6kc"));

/* eslint-disable no-underscore-dangle */
function createPageContext(themeName) {
  var theme = _themes.default.themes[themeName];
  if (!theme && _themes.default.themes[_themes.default.defaultTheme]) theme = _themes.default.themes[_themes.default.defaultTheme];
  if (!theme) theme = {};
  return {
    theme: (0, _styles.createMuiTheme)(theme),
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new _map.default(),
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

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "JgQo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("26bE");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "JlIP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__("oOPP"),
    darken = _require.darken,
    lighten = _require.lighten,
    fade = _require.fade;

var _require2 = __webpack_require__("+FwM"),
    red = _require2.red,
    blueGrey = _require2.blueGrey;

var primaryColor = "rgba(255, 255, 255, 0.9)";
var primaryBackground = "#4b648d";
var secondaryColor = "rgba(0, 0, 0, 0.9)";
var secondaryBackground = "#fda50f";
var bgPage = "#e0e0f0";
var bgPaper = "#ffffff";
var textPrimary = "rgba(0, 0, 0, 0.9)";
var textSecondary = "rgba(0, 0, 0, 0.6)";
var textDisabled = "rgba(0, 0, 0, 0.35)";
var textError = red[500];
var textInfo = blueGrey[400];
var fontSize = 14;
module.exports = {
  name: "light",
  palette: {
    primary: {
      main: primaryBackground,
      contrastText: primaryColor
    },
    secondary: {
      main: secondaryBackground,
      contrastText: secondaryColor
    },
    background: {
      default: bgPage,
      paper: bgPaper
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
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
  header: {
    color: [primaryColor, "!important"],
    background: [primaryBackground, "!important"]
  },
  sidebar: {
    computerWidth: 30,
    tabletWidth: 20,
    phoneWidth: 30,
    background: "rgb(30, 47, 65) linear-gradient(\n      to bottom,\n      rgba(65, 103, 165, 1.0) 0,\n      rgba(65, 103, 165, 0.0) 80%,\n      rgba(65, 103, 165, 0.0) 100%\n    )",
    color: primaryColor,
    itemBackground: "transparent",
    itemBorder: "4px solid transparent",
    itemColor: primaryColor,
    itemHoverBackground: darken(bgPaper, 0.15),
    itemHoverColor: textPrimary,
    itemHoverBorder: "4px solid ".concat(darken(secondaryBackground, 0.3)),
    itemSelectedBackground: darken(bgPaper, 0.05),
    itemSelectedColor: textPrimary,
    itemSelectedBorder: "4px solid ".concat(secondaryBackground),
    itemSelectedHoverBackground: bgPaper,
    itemSelectedHoverColor: textPrimary,
    itemSelectedHoverBorder: "4px solid ".concat(lighten(secondaryBackground, 0.05))
  },
  chart: {
    statColor: primaryBackground,
    mapColor: primaryColor,
    mapBackground: primaryBackground,
    mapHoverBackground: secondaryBackground,
    mapSelectedBackground: lighten(secondaryBackground, 0.15),
    lineColor: textInfo,
    areaColor: fade(textInfo, 0.25)
  },
  form: {
    stepperBackground: darken(bgPaper, 0.05),
    stepperLine: textDisabled,
    stepperColor: textDisabled,
    stepperActive: textPrimary
  },
  main: {
    background: bgPage,
    color: textPrimary,
    backdrop: "rgba(0, 0, 0, 0.85)",
    spinner: "#ffffff",
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
        background: bgPaper,
        color: textPrimary
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
        height: [48, "!important"]
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
        fontSize: "0.9rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        color: textPrimary
      },
      body: {
        fontSize: "1rem",
        "&.selected": {
          background: lighten(primaryBackground, 0.85)
        }
      }
    },
    MuiTablePagination: {
      root: {
        borderTop: "1px solid ".concat(textDisabled),
        fontSize: "0.9rem"
      },
      caption: {
        fontSize: "0.9rem"
      },
      toolbar: {
        height: [48, "!important"],
        minHeight: [48, "!important"]
      },
      selectIcon: {
        color: textSecondary
      }
    },
    MuiTabs: {
      scroller: {
        overflowX: ["hidden", "!important"],
        marginBottom: [0, "!important"]
      },
      scrollButtons: {
        height: 48
      },
      scrollButtonsAuto: {
        height: 48
      }
    },
    MuiTab: {
      root: {
        height: [48, "!important"]
      }
    },
    MuiIconButton: {
      root: {
        "&$disabled": {
          color: [textDisabled, "!important"]
        }
      }
    },
    MuiButton: {
      root: {
        "&$disabled": {
          "&:not($containedPrimary):not($containedSecondary)": {
            background: [darken(bgPage, 0.25), "!important"],
            color: [darken(textPrimary, 0.25), "!important"]
          },
          "&$containedPrimary": {
            background: [lighten(primaryBackground, 0.25), "!important"],
            color: [darken(primaryColor, 0.25), "!important"]
          },
          "&$containedSecondary": {
            background: [darken(secondaryBackground, 0.25), "!important"],
            color: [darken(secondaryColor, 0.25), "!important"]
          }
        }
      }
    },
    MuiInput: {
      root: {
        "&$underline": {
          "&:before": {
            borderBottom: "2px solid ".concat(textSecondary)
          },
          "&:after": {
            borderBottom: "2px solid ".concat(darken(secondaryBackground, 0.1))
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
          borderColor: [textSecondary, "!important"]
        },
        "&:not($disabled):not($error):hover:not($focused) $notchedOutline": {
          borderColor: [textPrimary, "!important"]
        },
        "&:not($disabled):not($error)$focused $notchedOutline": {
          borderColor: [darken(secondaryBackground, 0.1), "!important"]
        },
        "&$disabled $notchedOutline": {
          borderStyle: "dotted",
          borderColor: [textSecondary, "!important"]
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: [lighten(bgPage, 0.1), "!important"],
        borderRadius: 4,
        "&:hover": {
          background: [lighten(bgPage, 0.2), "!important"]
        },
        "&$focused": {
          background: [lighten(bgPage, 0.2), "!important"],
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
          color: [textPrimary, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$filled": {
          color: [textSecondary, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        }
      }
    },
    MuiListItemIcon: {
      root: {
        margin: [0, "!important"]
      }
    },
    MuiSelect: {
      icon: {
        color: textSecondary
      }
    },
    MuiCheckbox: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textSecondary, "!important"]
        }
      }
    },
    MuiRadio: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textSecondary, "!important"]
        }
      }
    },
    MuiSwitch: {
      icon: {
        color: darken(primaryBackground, 0.1)
      },
      iconChecked: {
        color: lighten(secondaryBackground, 0.25)
      }
    }
  }
};

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "JyB7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;
exports.fetchQuery = exports.NextQueryRenderer = exports.RelayProvider = exports.RelayContext = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactRelay = _interopRequireDefault(__webpack_require__("iuEU"));

var _relayRuntime = __webpack_require__("AV/6");

var _relayQueryLookupRenderer = _interopRequireDefault(__webpack_require__("0Yqw"));

var RelayContext = _react.default.createContext({});

exports.RelayContext = RelayContext;

var RelayProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RelayProvider, _React$Component);

  function RelayProvider() {
    (0, _classCallCheck2.default)(this, RelayProvider);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RelayProvider).apply(this, arguments));
  }

  (0, _createClass2.default)(RelayProvider, [{
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
  (0, _inherits2.default)(NextQueryRenderer, _React$Component2);

  function NextQueryRenderer() {
    (0, _classCallCheck2.default)(this, NextQueryRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NextQueryRenderer).apply(this, arguments));
  }

  (0, _createClass2.default)(NextQueryRenderer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
      return _react.default.createElement(RelayContext.Consumer, null, function (environment) {
        return _react.default.createElement(_relayQueryLookupRenderer.default, (0, _extends2.default)({
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

function subscribe(_ref) {
  var environment = _ref.environment,
      subscription = _ref.subscription,
      variables = _ref.variables,
      getToken = _ref.getToken,
      minInterval = _ref.minInterval,
      callback = _ref.callback;
  var request = null;
  var isDestroyed = false;
  var callbackTime = 0;
  var callbackTimer = null;
  if (_.isUndefined(variables)) variables = {};
  if (_.isUndefined(minInterval)) minInterval = 1000;

  var doSubscribe =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!getToken) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return getToken();

            case 3:
              variables.token = _context.sent;

            case 4:
              if (!isDestroyed) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              request = _reactRelay.default.requestSubscription(environment, {
                subscription: subscription,
                variables: variables,
                onCompleted: function onCompleted() {
                  request = null;
                  setTimeout(function () {
                    return doSubscribe().catch(console.error);
                  }, 1000);
                },
                onError: function onError(error) {
                  console.error(error);
                  request = null;
                  setTimeout(function () {
                    return doSubscribe().catch(console.error);
                  }, 1000);
                },
                onNext: function onNext() {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  if (isDestroyed || callbackTimer) return;
                  var delta = (0, _now.default)() - callbackTime;
                  callbackTimer = setTimeout(function () {
                    callbackTime = (0, _now.default)();
                    callbackTimer = null;
                    if (!isDestroyed) callback.apply(void 0, args);
                  }, delta < minInterval ? delta : 0);
                }
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function doSubscribe() {
      return _ref2.apply(this, arguments);
    };
  }();

  doSubscribe().catch(console.error);
  return function () {
    isDestroyed = true;

    if (callbackTimer) {
      clearTimeout(callbackTimer);
      callbackTimer = null;
    }

    if (request) {
      request.dispose();
      request = null;
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "JzfM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _Error = _interopRequireWildcard(__webpack_require__("ir66"));

var MyError = (0, _styles.withStyles)(_Error.styles)(_Error.default);
var _default = MyError;
exports.default = _default;

/***/ }),

/***/ "K0IL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _reactFinalForm = __webpack_require__("amB/");

var _context = _interopRequireDefault(__webpack_require__("mSjk"));

var _normalize = _interopRequireDefault(__webpack_require__("I1eL"));

var _validate2 = _interopRequireDefault(__webpack_require__("fAFH"));

var _TextContainer = _interopRequireDefault(__webpack_require__("Dxhi"));

var _SelectContainer = _interopRequireDefault(__webpack_require__("tmE+"));

var _CheckboxContainer = _interopRequireDefault(__webpack_require__("3giw"));

var _RadioContainer = _interopRequireDefault(__webpack_require__("9HlK"));

var _ErrorContainer = _interopRequireDefault(__webpack_require__("JzfM"));

var FormField =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FormField, _React$Component);

  function FormField() {
    (0, _classCallCheck2.default)(this, FormField);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormField).apply(this, arguments));
  }

  (0, _createClass2.default)(FormField, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          name = _this$props.name,
          type = _this$props.type,
          label = _this$props.label,
          _validate = _this$props.validate,
          _parse = _this$props.parse,
          _format = _this$props.format,
          fieldProps = (0, _objectWithoutProperties2.default)(_this$props, ["name", "type", "label", "validate", "parse", "format"]); // eslint-disable-line

      var Component;

      switch (type) {
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

        case "radio":
          Component = _RadioContainer.default;
          break;

        case "error":
          Component = _ErrorContainer.default;
          break;
      }

      return _react.default.createElement(_context.default.Consumer, null, function (_ref) {
        var fields = _ref.fields,
            values = _ref.values,
            form = _ref.form,
            handleSubmit = _ref.handleSubmit;
        return _react.default.createElement(_reactFinalForm.Field, (0, _extends2.default)({
          validateFields: []
        }, fieldProps, {
          form: form,
          component: Component,
          name: name,
          type: type,
          label: label || fields[name] && _this.props.intl.formatMessage({
            id: fields[name].label
          }),
          onSubmit: handleSubmit,
          validate: function validate(value, values) {
            var errors = [];

            if (fields[name]) {
              var options = fields[name].validate;
              if (options) errors = (0, _validate2.default)(options, value, values);
            }

            if (!errors.length) errors = undefined;
            if (_validate) return _validate(value, values, errors);
            return errors;
          },
          parse: function parse(value, name) {
            if (fields[name]) {
              var options = fields[name].normalize;
              if (options) value = (0, _normalize.default)(options, value, values);
            }

            if (_parse) return _parse(value, name);
            return value;
          },
          format: function format(value, name) {
            if (fields[name]) {
              var options = fields[name].transform;
              if (options) value = (0, _normalize.default)(options, value, values);
            }

            if (_format) return _format(value, name);
            return value;
          },
          formatOnBlur: true
        }));
      });
    }
  }]);
  return FormField;
}(_react.default.Component);

var _default = FormField;
exports.default = _default;

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KAMz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 59481a840e657823b70cde44dac555aa
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteUserInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteUserMutationVariables = {|
  input: DeleteUserInput
|};
export type DeleteUserMutationResponse = {|
  +deleteUser: ?{|
    +user: ?{|
      +id: string
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
    user {
      id
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
      "variableName": "input"
    }],
    "concreteType": "DeleteUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
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
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "DeleteUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "DeleteUserMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "DeleteUserMutation",
      "id": null,
      "text": "mutation DeleteUserMutation(\n  $input: DeleteUserInput!\n) {\n  deleteUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'c41c3a031a3a3c187abf4960c8697c73';
module.exports = node;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "KrcP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Ballot");

/***/ }),

/***/ "L2E4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$keys = __webpack_require__("pLtp");

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _Object$keys(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "LT9N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _FieldMessages = _interopRequireWildcard(__webpack_require__("EGUq"));

var FieldMessages = (0, _styles.withStyles)(_FieldMessages.styles)((0, _reactIntl.injectIntl)(_FieldMessages.default));
var _default = FieldMessages;
exports.default = _default;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "LZqe":
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "MfzE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("UpxW");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "MmNR":
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 3.998v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h-3v-7h-2v-3h2v-2.5a3.5 3.5 0 0 1 3.5-3.5H19zm1-2H4c-1.105 0-1.99.895-1.99 2l-.01 16c0 1.104.895 2 2 2h16c1.103 0 2-.896 2-2v-16a2 2 0 0 0-2-2z\"></path></svg>"

/***/ }),

/***/ "MqDA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _state = __webpack_require__("E4eY");

var _Date = _interopRequireDefault(__webpack_require__("+Fxg"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _state.appSelectors.getLocale(state)
  };
};

var DateProvider = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_Date.default);
var _default = DateProvider;
exports.default = _default;

/***/ }),

/***/ "MrYO":
/***/ (function(module, exports) {

module.exports = require("final-form");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "N1iz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("gH/O");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "N72Q":
/***/ (function(module, exports) {

module.exports = require("moment/locale/ru.js");

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "NX2N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash c4493ac271685742f0399069fdb6eb31
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type VerifyEmailInput = {|
  token?: ?string,
  clientMutationId?: ?string,
|};
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
      "variableName": "input"
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
    "fragment": {
      "kind": "Fragment",
      "name": "VerifyEmailMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "VerifyEmailMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "VerifyEmailMutation",
      "id": null,
      "text": "mutation VerifyEmailMutation(\n  $input: VerifyEmailInput!\n) {\n  verifyEmail(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '697c5198cee43cb38a38a4ac286ff409';
module.exports = node;

/***/ }),

/***/ "O2Mp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var Storage =
/*#__PURE__*/
function () {
  function Storage(getState, dispatch) {
    (0, _classCallCheck2.default)(this, Storage);
    if (true) return;
    this.getState = getState;
    this.dispatch = dispatch;
  }

  (0, _createClass2.default)(Storage, [{
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
      localStorage.setItem(key, (0, _stringify.default)(value));
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
    }
  }, {
    key: "$requires",
    get: function get() {
      return ["getState", "dispatch"];
    }
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

/***/ "OFRV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ErrorOutlined");

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "PQJW":
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__("d04V");

var _isIterable = __webpack_require__("yLu3");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "PmAW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _Field = _interopRequireDefault(__webpack_require__("K0IL"));

var Field = (0, _reactIntl.injectIntl)(_Field.default);
var _default = Field;
exports.default = _default;

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "Q6gG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "Q7hD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("fmY8");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "QEhy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "QGZh":
/***/ (function(module, exports) {

module.exports = require("injectt");

/***/ }),

/***/ "Qt1O":
/***/ (function(module, exports) {

module.exports = require("json-immutable");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RGyf":
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),

/***/ "RJ40":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 3d9f71fe4d39d43be5cef0cc42d540c0
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignOutInput = {|
  clientMutationId?: ?string
|};
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
      "variableName": "input"
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
    "fragment": {
      "kind": "Fragment",
      "name": "SignOutMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "SignOutMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "SignOutMutation",
      "id": null,
      "text": "mutation SignOutMutation(\n  $input: SignOutInput!\n) {\n  signOut(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '417ec230bfa986933ff799e6fab9074c';
module.exports = node;

/***/ }),

/***/ "Rkej":
/***/ (function(module, exports) {



/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "Syd2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _Header = _interopRequireWildcard(__webpack_require__("Yd8m"));

var _state = __webpack_require__("E4eY");

var _state2 = __webpack_require__("Yoxy");

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _state.appSelectors.getLocale(state),
    isAnonymous: _state2.authSelectors.isAnonymous(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetCookie: function onSetCookie(name, value, days) {
      return dispatch(_state.appOperations.setCookie({
        name: name,
        value: value,
        days: days
      }));
    },
    onSetLocale: function onSetLocale(locale) {
      return dispatch(_state.appOperations.setLocale({
        locale: locale
      }));
    },
    onSignOut: function onSignOut() {
      return dispatch(_state2.authOperations.signOut());
    }
  };
};

var Header = (0, _styles.withStyles)(_Header.styles, {
  withTheme: true
})((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Header.default)));
var _default = Header;
exports.default = _default;

/***/ }),

/***/ "T56u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _ErrorMessageContainer = _interopRequireDefault(__webpack_require__("Y3Ay"));

var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ErrorPage, _React$Component);

  function ErrorPage() {
    (0, _classCallCheck2.default)(this, ErrorPage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorPage).apply(this, arguments));
  }

  (0, _createClass2.default)(ErrorPage, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_ErrorMessageContainer.default, {
        statusCode: this.props.statusCode
      });
    }
  }]);
  return ErrorPage;
}(_react.default.Component);

var _default = ErrorPage;
exports.default = _default;

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TbGu":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("fGSI");

var iterableToArray = __webpack_require__("PQJW");

var nonIterableSpread = __webpack_require__("2PDY");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "Ty80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //const moment = require("moment-timezone");

var moment = __webpack_require__("wy2R");

__webpack_require__("N72Q"); // en is already there


module.exports = moment;

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UpxW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 31ac9688456ff9c68e6877b602fca90f
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProfileInput = {|
  email?: ?string,
  name?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
|};
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
      "variableName": "input"
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
    "fragment": {
      "kind": "Fragment",
      "name": "UpdateProfileMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "UpdateProfileMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "UpdateProfileMutation",
      "id": null,
      "text": "mutation UpdateProfileMutation(\n  $input: UpdateProfileInput!\n) {\n  updateProfile(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '9e47c867af2046685911f7372c7f5bae';
module.exports = node;

/***/ }),

/***/ "V5w1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__("oOPP"),
    darken = _require.darken,
    lighten = _require.lighten,
    fade = _require.fade;

var _require2 = __webpack_require__("+FwM"),
    red = _require2.red,
    blueGrey = _require2.blueGrey;

var primaryColor = "rgba(255, 255, 255, 0.9)";
var primaryBackground = "#80838f";
var secondaryColor = "rgba(255, 255, 255, 0.9)";
var secondaryBackground = "#c5511d";
var bgNormal = "#3b3f4d";
var bgPaper = "#585e6e";
var textPrimary = "rgba(255, 255, 255, 0.9)";
var textSecondary = "rgba(255, 255, 255, 0.6)";
var textDisabled = "rgba(255, 255, 255, 0.35)";
var textError = red[400];
var textInfo = blueGrey[200];
var fontSize = 14;
module.exports = {
  name: "dark",
  palette: {
    primary: {
      main: primaryBackground,
      contrastText: primaryColor
    },
    secondary: {
      main: secondaryBackground,
      contrastText: secondaryColor
    },
    background: {
      default: bgNormal,
      paper: bgPaper
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
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
  header: {
    color: [primaryColor, "!important"],
    background: [primaryBackground, "!important"]
  },
  sidebar: {
    computerWidth: 30,
    tabletWidth: 20,
    phoneWidth: 30,
    background: "rgb(22, 25, 32) linear-gradient(\n        to bottom,\n        rgba(72, 78, 94, 1.0) 0,\n        rgba(72, 78, 94, 0.0) 80%,\n        rgba(72, 78, 94, 0.0) 100%\n      )",
    color: "#f0f0f0",
    itemBackground: "transparent",
    itemBorder: "4px solid transparent",
    itemColor: textSecondary,
    itemHoverBackground: lighten(bgNormal, 0.15),
    itemHoverColor: textPrimary,
    itemHoverBorder: "4px solid ".concat(darken(secondaryBackground, 0.3)),
    itemSelectedBackground: lighten(bgNormal, 0.25),
    itemSelectedColor: textPrimary,
    itemSelectedBorder: "4px solid ".concat(secondaryBackground),
    itemSelectedHoverBackground: lighten(bgNormal, 0.35),
    itemSelectedHoverColor: textPrimary,
    itemSelectedHoverBorder: "4px solid ".concat(lighten(secondaryBackground, 0.05))
  },
  chart: {
    statColor: textPrimary,
    mapColor: textPrimary,
    mapBackground: primaryBackground,
    mapHoverBackground: secondaryBackground,
    mapSelectedBackground: lighten(secondaryBackground, 0.15),
    lineColor: textInfo,
    areaColor: fade(textInfo, 0.25)
  },
  form: {
    stepperBackground: fade(primaryBackground, 0.65),
    stepperLine: textDisabled,
    stepperColor: textDisabled,
    stepperActive: textPrimary
  },
  main: {
    background: bgNormal,
    color: textPrimary,
    backdrop: "rgba(0, 0, 0, 0.85)",
    spinner: "#ffffff",
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
        background: bgPaper,
        color: textPrimary
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
        height: [48, "!important"]
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
        fontSize: "0.9rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        color: textPrimary
      },
      body: {
        fontSize: "1rem",
        "&.selected": {
          background: primaryBackground
        }
      }
    },
    MuiTablePagination: {
      root: {
        borderTop: "1px solid ".concat(textDisabled),
        fontSize: "0.9rem"
      },
      caption: {
        fontSize: "0.9rem"
      },
      toolbar: {
        height: [48, "!important"],
        minHeight: [48, "!important"]
      },
      selectIcon: {
        color: textSecondary
      }
    },
    MuiTabs: {
      scroller: {
        overflowX: ["hidden", "!important"],
        marginBottom: [0, "!important"]
      },
      scrollButtons: {
        height: 48
      },
      scrollButtonsAuto: {
        height: 48
      }
    },
    MuiTab: {
      root: {
        height: [48, "!important"]
      }
    },
    MuiIconButton: {
      root: {
        color: [textPrimary, "!important"],
        "&$disabled": {
          color: [textDisabled, "!important"]
        }
      }
    },
    MuiButton: {
      root: {
        "&:not($containedPrimary):not($containedSecondary)": {
          color: [textPrimary, "!important"]
        },
        "&$containedPrimary": {
          color: [primaryColor, "!important"]
        },
        "&$containedSecondary": {
          color: [secondaryColor, "!important"]
        },
        "&$disabled": {
          "&:not($containedPrimary):not($containedSecondary)": {
            background: [darken(bgNormal, 0.25), "!important"],
            color: [darken(textPrimary, 0.25), "!important"]
          },
          "&$containedPrimary": {
            background: [darken(primaryBackground, 0.25), "!important"],
            color: [darken(primaryColor, 0.25), "!important"]
          },
          "&$containedSecondary": {
            background: [darken(secondaryBackground, 0.25), "!important"],
            color: [darken(secondaryColor, 0.25), "!important"]
          }
        }
      }
    },
    MuiInput: {
      root: {
        "&$underline": {
          "&:before": {
            borderBottom: "2px solid ".concat(textSecondary)
          },
          "&:after": {
            borderBottom: "2px solid ".concat(lighten(secondaryBackground, 0.1))
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
          borderColor: [textSecondary, "!important"]
        },
        "&:not($disabled):not($error):hover:not($focused) $notchedOutline": {
          borderColor: [textPrimary, "!important"]
        },
        "&:not($disabled):not($error)$focused $notchedOutline": {
          borderColor: [lighten(secondaryBackground, 0.1), "!important"]
        },
        "&$disabled $notchedOutline": {
          borderStyle: "dotted",
          borderColor: [textSecondary, "!important"]
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
          color: [textPrimary, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$filled": {
          color: [textSecondary, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        }
      }
    },
    MuiListItemIcon: {
      root: {
        margin: [0, "!important"]
      }
    },
    MuiSelect: {
      icon: {
        color: textSecondary
      }
    },
    MuiCheckbox: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textPrimary, "!important"]
        }
      }
    },
    MuiRadio: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textPrimary, "!important"]
        }
      }
    },
    MuiSwitch: {
      icon: {
        color: darken(primaryBackground, 0.1)
      },
      iconChecked: {
        color: lighten(secondaryBackground, 0.25)
      }
    }
  }
};

/***/ }),

/***/ "Vc6o":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("Cxfq");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "WZpn":
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "Y/f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("/iUP");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "Y3Ay":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _ErrorMessage = _interopRequireWildcard(__webpack_require__("p198"));

var ErrorMessage = (0, _styles.withStyles)(_ErrorMessage.styles)((0, _reactIntl.injectIntl)(_ErrorMessage.default));
var _default = ErrorMessage;
exports.default = _default;

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Yd8m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = _interopRequireDefault(__webpack_require__("4Q3z"));

var _reactIntl = __webpack_require__("k004");

var _colorManipulator = __webpack_require__("oOPP");

var _Tooltip = _interopRequireDefault(__webpack_require__("vF8F"));

var _Hidden = _interopRequireDefault(__webpack_require__("Y8uC"));

var _AppBar = _interopRequireDefault(__webpack_require__("4151"));

var _Toolbar = _interopRequireDefault(__webpack_require__("Ms0O"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var _IconButton = _interopRequireDefault(__webpack_require__("EmCc"));

var _InputBase = _interopRequireDefault(__webpack_require__("ynsX"));

var _Menu = _interopRequireDefault(__webpack_require__("GYHf"));

var _MenuItem = _interopRequireDefault(__webpack_require__("x54t"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("GLYF"));

var _ListItemText = _interopRequireDefault(__webpack_require__("W+03"));

var _ListItemAvatar = _interopRequireDefault(__webpack_require__("QEhy"));

var _Avatar = _interopRequireDefault(__webpack_require__("4ZJ9"));

var _Badge = _interopRequireDefault(__webpack_require__("IfcR"));

var _Menu2 = _interopRequireDefault(__webpack_require__("4D1s"));

var _Search = _interopRequireDefault(__webpack_require__("iSPQ"));

var _Mail = _interopRequireDefault(__webpack_require__("Q6gG"));

var _AccountBox = _interopRequireDefault(__webpack_require__("j4BW"));

var _ColorLens = _interopRequireDefault(__webpack_require__("HaHp"));

var _PowerSettingsNew = _interopRequireDefault(__webpack_require__("7nhY"));

var _reactFlags = _interopRequireDefault(__webpack_require__("1Kbk"));

var _locales = _interopRequireDefault(__webpack_require__("fXLo"));

var _themes = _interopRequireDefault(__webpack_require__("n6kc"));

var _moment = _interopRequireDefault(__webpack_require__("Ty80"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var styles = function styles(theme) {
  var _inputInput;

  return {
    spacer: {
      height: "2rem"
    },
    wrapper: {
      zIndex: 1400,
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      height: 50
    },
    smallWrapper: {
      zIndex: 1400,
      alignSelf: "stretch"
    },
    barContainer: {
      transition: "all 0.25s ease-in-out"
    },
    bar: {
      color: theme.header.color,
      background: theme.header.background,
      boxShadow: "none"
    },
    barItem: {
      marginLeft: "0.5rem",
      marginRight: "0.5rem"
    },
    grow: {
      flexGrow: 1
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing.unit,
      marginLeft: theme.spacing.unit
    },
    searchIcon: (0, _defineProperty2.default)({
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
    }, (0, _defineProperty2.default)(_inputInput, theme.breakpoints.down("md"), {
      width: "100%"
    }), (0, _defineProperty2.default)(_inputInput, theme.breakpoints.down("xs"), {
      paddingLeft: theme.spacing.unit
    }), _inputInput),
    menu: (0, _defineProperty2.default)({
      width: "100%",
      maxWidth: theme.spacing.unit * 45,
      background: (0, _colorManipulator.lighten)(theme.palette.background.paper, 0.1),
      "& svg": {
        color: [theme.palette.text.primary, "!important"]
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
    },
    tooltip: {
      fontSize: ["1em", "!important"]
    }
  };
};

exports.styles = styles;

var Header =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Header, _React$Component);

  function Header(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Header);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Header).call(this, props));
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
    _this.onResize = _this.onResize.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleWrapperMouseEnter = _this.handleWrapperMouseEnter.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleWrapperMouseLeave = _this.handleWrapperMouseLeave.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleWrapperClick = _this.handleWrapperClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleBarMouseEnter = _this.handleBarMouseEnter.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleBarMouseLeave = _this.handleBarMouseLeave.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleInboxOpen = _this.handleInboxOpen.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleLocalesOpen = _this.handleLocalesOpen.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleThemesOpen = _this.handleThemesOpen.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSignOut = _this.handleSignOut.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.bar.current) {
        this.setState({
          barHeight: this.bar.current.offsetHeight,
          barWidth: this.bar.current.offsetWidth
        });
      }

      window.addEventListener("resize", this.onResize);
      window.addEventListener("orientationchange", this.onResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.bar.current && (this.state.barHeight !== this.bar.current.offsetHeight || this.state.barWidth !== this.bar.current.offsetWidth)) {
        setTimeout(function () {
          if (_this2.bar.current) {
            _this2.setState({
              barHeight: _this2.bar.current.offsetHeight,
              barWidth: _this2.bar.current.offsetWidth
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isDestroyed = true;
      window.removeEventListener("resize", this.onResize);
      window.removeEventListener("orientationchange", this.onResize);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.forceUpdate();
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
      var _this3 = this;

      event.stopPropagation();
      if (!this.state.isWrapperHovered) this.setState({
        isWrapperHovered: true
      });

      var onWindowClick = function onWindowClick() {
        window.removeEventListener("click", onWindowClick);
        if (!_this3.isDestroyed && _this3.state.isWrapperHovered) _this3.setState({
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
      var _this4 = this;

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
            return _this4.handleLocaleSwitch(locale);
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
      var _this5 = this;

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
      }, _.map(_themes.default.names, function (theme) {
        return _react.default.createElement(_MenuItem.default, {
          key: "theme-".concat(theme),
          onClick: function onClick() {
            return _this5.handleThemeSwitch(theme);
          }
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_ColorLens.default, null)), _react.default.createElement(_ListItemText.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
          id: "THEME_" + _.upperCase(theme) + "_LABEL"
        })));
      }));
    }
  }, {
    key: "renderShadow",
    value: function renderShadow() {
      var isLong = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var boundary = (isLong ? this.props.theme.sidebar.computerWidth : this.props.theme.sidebar.tabletWidth) * this.props.theme.spacing.unit;
      return _react.default.createElement("svg", {
        key: "shadow-".concat(this.state.barWidth),
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
        elevation: 0,
        position: "static",
        color: "primary",
        onMouseEnter: this.handleBarMouseEnter,
        onMouseLeave: this.handleBarMouseLeave
      }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Hidden.default, {
        xsDown: true
      }, _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem,
        onClick: this.handleInboxOpen
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 4,
        color: "secondary"
      }, _react.default.createElement(_Mail.default, null)), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "HEADER_INBOX_LABEL"
      })), this.props.isAnonymous && _react.default.createElement(_Tooltip.default, {
        title: this.props.intl.formatMessage({
          id: "HEADER_PROFILE_TOOLTIP"
        }),
        classes: {
          tooltip: this.props.classes.tooltip
        }
      }, _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem
      }, _react.default.createElement(_AccountBox.default, null), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "HEADER_PROFILE_LABEL"
      }))), !this.props.isAnonymous && _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem,
        onClick: function onClick() {
          return _router.default.push("/auth/profile");
        }
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
      }, _react.default.createElement(_ColorLens.default, null), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "THEME_" + _.upperCase(this.props.theme.name) + "_MENU"
      })), _react.default.createElement("div", {
        className: this.props.classes.grow
      }), _react.default.createElement("div", {
        className: this.props.classes.search
      }, _react.default.createElement("div", {
        className: this.props.classes.searchIcon
      }, _react.default.createElement(_Search.default, null)), _react.default.createElement(_InputBase.default, {
        placeholder: "Search\u2026",
        classes: {
          root: this.props.classes.inputRoot,
          input: this.props.classes.inputInput
        }
      })), _react.default.createElement("div", {
        className: this.props.classes.grow
      }), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleSignOut
      }, _react.default.createElement(_PowerSettingsNew.default, null))), _react.default.createElement(_Hidden.default, {
        smUp: true
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.props.onSidebarToggle
      }, _react.default.createElement(_Menu2.default, null)), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleInboxOpen
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 4,
        color: "secondary"
      }, _react.default.createElement(_Mail.default, null))), this.props.isAnonymous && _react.default.createElement(_Tooltip.default, {
        title: this.props.intl.formatMessage({
          id: "HEADER_PROFILE_TOOLTIP"
        }),
        classes: {
          tooltip: this.props.classes.tooltip
        }
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit"
      }, _react.default.createElement(_AccountBox.default, null))), !this.props.isAnonymous && _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: function onClick() {
          return _router.default.push("/auth/profile");
        }
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
      }, _react.default.createElement(_ColorLens.default, null)), _react.default.createElement("div", {
        className: this.props.classes.grow
      }), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleSignOut
      }, _react.default.createElement(_PowerSettingsNew.default, null)))), this.renderInbox(), this.renderLocales(), this.renderThemes())), !isPermanent && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Hidden.default, {
        mdDown: true
      }, this.renderShadow(true)), _react.default.createElement(_Hidden.default, {
        lgUp: true
      }, this.renderShadow(false))));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Hidden.default, {
        smUp: true,
        initialWidth: "lg"
      }, _react.default.createElement("div", {
        className: this.props.classes.smallWrapper,
        style: {
          height: this.state.height
        }
      }, this.renderBar(true))), _react.default.createElement(_Hidden.default, {
        xsDown: true,
        initialWidth: "lg"
      }, _react.default.createElement("div", {
        className: this.props.classes.wrapper,
        onMouseEnter: this.handleWrapperMouseEnter,
        onMouseLeave: this.handleWrapperMouseLeave,
        onClick: this.handleWrapperClick
      }, this.renderBar(false)), _react.default.createElement("div", {
        className: this.props.classes.spacer
      })));
    }
  }]);
  return Header;
}(_react.default.Component);

var _default = Header;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "Yoxy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelectors = exports.authOperations = exports.authTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("xbgq"));

var authTypes = _interopRequireWildcard(__webpack_require__("+z5V"));

exports.authTypes = authTypes;

var authOperations = _interopRequireWildcard(__webpack_require__("+Opk"));

exports.authOperations = authOperations;

var authSelectors = _interopRequireWildcard(__webpack_require__("p/Qe"));

exports.authSelectors = authSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "ZKx5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employeesSelectors = exports.employeesOperations = exports.employeesTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("jFLn"));

var employeesTypes = _interopRequireWildcard(__webpack_require__("vj2+"));

exports.employeesTypes = employeesTypes;

var employeesOperations = _interopRequireWildcard(__webpack_require__("2+Lp"));

exports.employeesOperations = employeesOperations;

var employeesSelectors = _interopRequireWildcard(__webpack_require__("ghjP"));

exports.employeesSelectors = employeesSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "ZZkD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _colorManipulator = __webpack_require__("oOPP");

var _Dialog = _interopRequireDefault(__webpack_require__("fEgT"));

var _DialogActions = _interopRequireDefault(__webpack_require__("1gBk"));

var _DialogContent = _interopRequireDefault(__webpack_require__("iTUb"));

var _DialogTitle = _interopRequireDefault(__webpack_require__("0Jp5"));

var _Grid = _interopRequireDefault(__webpack_require__("JQ2V"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var _Hidden = _interopRequireDefault(__webpack_require__("Y8uC"));

var _VisibilityOff = _interopRequireDefault(__webpack_require__("gGTQ"));

var _forms = __webpack_require__("h7lg");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var _facebook = _interopRequireDefault(__webpack_require__("MmNR"));

var _google = _interopRequireDefault(__webpack_require__("yh8l"));

var _twitter = _interopRequireDefault(__webpack_require__("w1vu"));

var _auth = _interopRequireDefault(__webpack_require__("sNAY"));

var styles = function styles(theme) {
  return {
    error: theme.main.error,
    actions: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "1rem"
    },
    credentialsPaper: {
      background: (0, _colorManipulator.lighten)(theme.palette.background.paper, 0.15),
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

exports.styles = styles;

var AppAuthModal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(AppAuthModal, _React$Component);

  function AppAuthModal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AppAuthModal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AppAuthModal).call(this, props));
    _this.state = {};
    _this.handleAnonymous = _this.handleAnonymous.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleProvider = _this.handleProvider.bind((0, _assertThisInitialized2.default)(_this));
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(AppAuthModal, [{
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
    key: "submit",
    value: function () {
      var _submit = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var isNewUser, email, password, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isNewUser = _ref.isNewUser, email = _ref.email, password = _ref.password;

                if (!isNewUser) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this.props.onSignUp(email, password);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return this.props.onSignIn(email, password);

              case 9:
                _context.t0 = _context.sent;

              case 10:
                result = _context.t0;
                return _context.abrupt("return", result === true ? {} : result);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit(_x) {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: "renderButton",
    value: function renderButton(provider, submitting) {
      var _this2 = this;

      provider = _.toLower(provider);
      return _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "default",
        classes: {
          contained: this.props.classes[provider]
        },
        disabled: submitting || !_.includes(this.props.providers, provider),
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

      if (!this.props.isOpen) return null;
      return _react.default.createElement(_forms.Form, {
        fields: _auth.default,
        onSubmit: this.submit,
        render: function render(_ref2) {
          var submitting = _ref2.submitting,
              submitError = _ref2.submitError,
              handleSubmit = _ref2.handleSubmit;
          return _react.default.createElement(_Dialog.default, {
            maxWidth: "sm",
            open: true,
            onClose: _.noop
          }, _react.default.createElement(_DialogTitle.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "APP_AUTH_TITLE"
          })), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_Grid.default, {
            container: true,
            spacing: 16,
            justify: "space-evenly"
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
            className: _this3.props.classes.anonymousButton,
            disabled: submitting,
            onClick: _this3.handleAnonymous
          }, _react.default.createElement(_VisibilityOff.default, null), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "APP_AUTH_ANONYMOUS_BUTTON"
          }))), _react.default.createElement(_Grid.default, {
            item: true
          }, _this3.renderButton(_constants.default.oauthProviders.FACEBOOK, submitting)), _react.default.createElement(_Grid.default, {
            item: true
          }, _this3.renderButton(_constants.default.oauthProviders.GOOGLE, submitting)), _react.default.createElement(_Grid.default, {
            item: true
          }, _this3.renderButton(_constants.default.oauthProviders.TWITTER, submitting))), _react.default.createElement(_Grid.default, {
            item: true,
            xs: 12,
            sm: 6
          }, _react.default.createElement(_Paper.default, {
            className: _this3.props.classes.credentialsPaper
          }, _react.default.createElement(_Grid.default, {
            container: true,
            spacing: 8,
            direction: "column"
          }, _react.default.createElement(_Grid.default, {
            item: true
          }, _react.default.createElement(_Typography.default, {
            variant: "h5",
            className: _this3.props.classes.credentialsLabel
          }, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "APP_AUTH_CREDENTIALS_LABEL"
          }))), !!submitError && _react.default.createElement(_Grid.default, {
            item: true
          }, _.map(_.isArray(submitError) ? submitError : [submitError], function (error, index) {
            return _react.default.createElement("div", {
              key: "error-".concat(index),
              className: _this3.props.classes.error
            }, _.isArray(error) ? _react.default.createElement(_reactIntl.FormattedMessage, {
              id: error[0],
              values: error[1]
            }) : _react.default.createElement(_reactIntl.FormattedMessage, {
              id: error
            }));
          })), _react.default.createElement(_Grid.default, {
            item: true
          }, _react.default.createElement(_forms.Field, {
            name: "isNewUser",
            type: "checkbox",
            color: "default"
          })), _react.default.createElement(_Grid.default, {
            item: true
          }, _react.default.createElement(_forms.Field, {
            name: "email",
            type: "text"
          })), _react.default.createElement(_Grid.default, {
            item: true
          }, _react.default.createElement(_forms.Field, {
            name: "password",
            type: "password"
          }))))))), _react.default.createElement(_DialogActions.default, {
            classes: {
              root: _this3.props.classes.actions
            }
          }, _react.default.createElement(_Button.default, {
            variant: "contained",
            color: "secondary",
            disabled: submitting,
            onClick: handleSubmit
          }, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "APP_AUTH_SUBMIT"
          }))));
        }
      });
    }
  }]);
  return AppAuthModal;
}(_react.default.Component);

var _default = AppAuthModal;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "a73a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__("7s44"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _Checkbox = _interopRequireDefault(__webpack_require__("r6Lb"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("LT9N"));

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
  (0, _inherits2.default)(MyCheckbox, _React$PureComponent);

  function MyCheckbox() {
    (0, _classCallCheck2.default)(this, MyCheckbox);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyCheckbox).apply(this, arguments));
  }

  (0, _createClass2.default)(MyCheckbox, [{
    key: "render",
    value: function render() {
      var _this = this;

      var errors = null;

      if (this.props.meta.touched && !this.props.meta.active && !this.props.meta.submitting && (this.props.meta.error || this.props.meta.submitError && !this.props.meta.dirtySinceLastSubmit)) {
        errors = [];
        if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
        if (this.props.meta.submitError) errors = errors.concat(this.props.meta.submitError);
        errors = _.uniq(errors);
      }

      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_FormControlLabel.default, {
        classes: {
          root: this.props.classes.label
        },
        label: this.props.label,
        control: _react.default.createElement(_Checkbox.default, {
          name: this.props.input.name,
          value: "on",
          autoFocus: this.props.autoFocus,
          checked: this.props.input.value,
          disabled: this.props.meta.submitting || this.props.disabled,
          color: this.props.color || "primary",
          onChange: this.props.input.onChange,
          onBlur: this.props.input.onBlur,
          onFocus: this.props.input.onFocus,
          inputProps: {
            onKeyDown: function onKeyDown(evt) {
              if (_this.props.onSubmit && evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();

                _this.props.form.blur(_this.props.input.name);

                _this.props.onSubmit();
              }
            }
          }
        })
      }), !!(this.props.messages || errors) && _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, _react.default.createElement(_FieldMessagesContainer.default, {
        messages: this.props.messages,
        errors: errors
      })));
    }
  }]);
  return MyCheckbox;
}(_react.default.PureComponent);

var _default = MyCheckbox;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "am9M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("07Y+");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "amB/":
/***/ (function(module, exports) {

module.exports = require("react-final-form");

/***/ }),

/***/ "bI0k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash fbd9d2aed12d660d081a1189fb297b2c
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInInput = {|
  email?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
|};
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
      "variableName": "input"
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
    "fragment": {
      "kind": "Fragment",
      "name": "SignInMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "SignInMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "SignInMutation",
      "id": null,
      "text": "mutation SignInMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '153fa344d90b87f0fcb641bc7a1ed120';
module.exports = node;

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "f7fu":
/***/ (function(module, exports) {

module.exports = require("@date-io/moment");

/***/ }),

/***/ "fAFH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

var _parseInt2 = _interopRequireDefault(__webpack_require__("6BQ9"));

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var tokenize = __webpack_require__("0AQm");

var validator = __webpack_require__("WZpn"); //let allCountries, iso2Lookup;


var _require = __webpack_require__("rtrS"),
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


module.exports = function validate(options, value, allValues) {
  var rules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(tokenize(options, "\\", "|")), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
        var other = allValues[rules.required.params[0]];
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
      for (var _iterator2 = (0, _getIterator2.default)(commands), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
                search = allCountries && iso2Lookup && allCountries[iso2Lookup[allValues.country]];
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
                  tmp = [(0, _parseInt2.default)(normalized.slice(0, 2)), (0, _parseInt2.default)(normalized.slice(2))];

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
            if (tmp && allValues && allValues[tmp] !== value) errors.push(rules[command].msg || "ERROR_MISMATCHED_VALUES");
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fGSI":
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__("p0XB");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "fXLo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

function parse(source) {
  var messages = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(_.keys(source)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
    en: parse(__webpack_require__("vmr9")),
    ru: parse(__webpack_require__("gbDh"))
  },
  getLocaleData: function getLocaleData() {
    return [__webpack_require__("BlHF"), __webpack_require__("vdyi")];
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "faI2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("KAMz");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "fbqZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _router = __webpack_require__("4Q3z");

var _styles = __webpack_require__("9Pu4");

var _Sidebar = _interopRequireWildcard(__webpack_require__("G1Jh"));

var _state = __webpack_require__("Yoxy");

var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: _state.authSelectors.getRoles(state),
    name: _state.authSelectors.getName(state) || _state.authSelectors.getEmail(state) || "",
    email: _state.authSelectors.getEmail(state) || "none"
  };
};

var Sidebar = (0, _router.withRouter)((0, _styles.withStyles)(_Sidebar.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(_Sidebar.default))));
var _default = Sidebar;
exports.default = _default;

/***/ }),

/***/ "fcv4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEditModal = exports.showEditModal = exports.deselectAll = exports.selectAll = exports.setSelected = void 0;

var types = _interopRequireWildcard(__webpack_require__("sTFT"));

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
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      exceptUserIds = _ref3.exceptUserIds;

  return {
    type: types.DESELECT_ALL,
    exceptUserIds: exceptUserIds
  };
};

exports.deselectAll = deselectAll;

var showEditModal = function showEditModal() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      userId = _ref4.userId;

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

/***/ "fmY8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 9eee426d8ef0d84db83a0db01492be7d
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpInput = {|
  email?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
|};
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
      "variableName": "input"
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
    "fragment": {
      "kind": "Fragment",
      "name": "SignUpMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "SignUpMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "SignUpMutation",
      "id": null,
      "text": "mutation SignUpMutation(\n  $input: SignUpInput!\n) {\n  signUp(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '8d27fab1ea3de67cd05b843a4fb0c3b4';
module.exports = node;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gEav":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 488532dfbb424554cad5bca51dd2c07d
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRole = "ADMIN" | "ANONYMOUS" | "AUTHENTICATED" | "%future added value";
export type CreateUserInput = {|
  email?: ?string,
  name?: ?string,
  password?: ?string,
  roles?: ?$ReadOnlyArray<?UserRole>,
  clientMutationId?: ?string,
|};
export type CreateUserMutationVariables = {|
  input: CreateUserInput
|};
export type CreateUserMutationResponse = {|
  +createUser: ?{|
    +user: ?{|
      +id: string
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
    user {
      id
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
      "variableName": "input"
    }],
    "concreteType": "CreateUserPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
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
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "CreateUserMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "CreateUserMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "CreateUserMutation",
      "id": null,
      "text": "mutation CreateUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'e10e0a2a6b930a44cda50e71a629c8f3';
module.exports = node;

/***/ }),

/***/ "gGTQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "gH/O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 9b4c12643d4b7f8ca0e9b1f320639e2f
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProfileInput = {|
  clientMutationId?: ?string
|};
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
      "variableName": "input"
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
    "fragment": {
      "kind": "Fragment",
      "name": "DeleteProfileMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "DeleteProfileMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "DeleteProfileMutation",
      "id": null,
      "text": "mutation DeleteProfileMutation(\n  $input: DeleteProfileInput!\n) {\n  deleteProfile(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '52e325cd180e1e90940a792f459eb397';
module.exports = node;

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gRch":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setConnected = exports.setStatusCode = exports.stop = exports.start = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__("Ty80"));

var types = _interopRequireWildcard(__webpack_require__("rz8+"));

var create = function create(data) {
  return _.assign({
    type: types.CREATE
  }, data);
};

exports.create = create;

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "gWH5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideEditModal = exports.showEditModal = exports.deselectAll = exports.selectAll = exports.setSelected = void 0;

var types = _interopRequireWildcard(__webpack_require__("vj2+"));

var setSelected = function setSelected(_ref) {
  var employeeId = _ref.employeeId,
      isSelected = _ref.isSelected;
  return {
    type: types.SET_SELECTED,
    employeeId: employeeId,
    isSelected: isSelected
  };
};

exports.setSelected = setSelected;

var selectAll = function selectAll(_ref2) {
  var employeeIds = _ref2.employeeIds;
  return {
    type: types.SELECT_ALL,
    employeeIds: employeeIds
  };
};

exports.selectAll = selectAll;

var deselectAll = function deselectAll() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      exceptEmployeeIds = _ref3.exceptEmployeeIds;

  return {
    type: types.DESELECT_ALL,
    exceptEmployeeIds: exceptEmployeeIds
  };
};

exports.deselectAll = deselectAll;

var showEditModal = function showEditModal() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      employeeId = _ref4.employeeId;

  return {
    type: types.SHOW_EDIT_MODAL,
    employeeId: employeeId
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

/***/ "gbDh":
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Дашборд","TITLE_DASHBOARD":"Дашборд","MENU_FORMS":"Формы","TITLE_FORMS":"Формы","MENU_CHARTS":"Графики","TITLE_CHARTS":"Графики","MENU_TABLES":"Таблицы","TITLE_TABLES":"Таблицы","MENU_MAPS":"Карты","TITLE_MAPS":"Карты","MENU_NOTIFICATIONS":"Уведомления","TITLE_NOTIFICATIONS":"Уведомления","MENU_TYPOGRAPHY":"Типографика","TITLE_TYPOGRAPHY":"Типографика","MENU_ICONS":"Иконки","TITLE_ICONS":"Иконки","MENU_USERS":"Пользователи","TITLE_USERS":"Пользователи","TITLE_PROFILE":"Профиль","TITLE_VERIFY":"Верификация email","TITLE_OAUTH_ERROR":"Ошибка авторизации","THEME_DARK_MENU":"Темная","THEME_DARK_LABEL":"Темная тема","THEME_LIGHT_MENU":"Светлая","THEME_LIGHT_LABEL":"Светлая тема","LAYOUT_SW_UPDATE_MESSAGE":"Доступно обновление. Кликните здесь, чтобы перезагрузить страницу.","SIDEBAR_GITHUB_LINK":"Github","SIDEBAR_BENCHMARKS_LINK":"Сравнительный тест","SIDEBAR_RESPONSIVENESS_LINK":"Тест реактивности","HEADER_INBOX_LABEL":"Входяшие","HEADER_PROFILE_LABEL":"Профиль","HEADER_PROFILE_TOOLTIP":["Как у анонимный пользователя, у вас нет профиля. Но, если вы выйдете из системы,"," у вас появится возможность пройти авторизацию с помощью Passport.js"],"PROFILE_NAME_LABEL":"Отображаемое имя","PROFILE_EMAIL_LABEL":"Email","PROFILE_PASSWORD1_LABEL":"Новый пароль","PROFILE_PASSWORD2_LABEL":"Повторите пароль","PROFILE_SAVE_BUTTON":"Сохранить","PROFILE_DESTROY_BUTTON":"Самоуничтожение","PROFILE_VERIFY_BUTTON":"Верифицировать email","PROFILE_LINK_BUTTON":"Привязать","PROFILE_UNLINK_BUTTON":"Отвязать","PROFILE_SAVE_SUCCESS":"Профиль был обновлен","PROFILE_VERIFY_SUCCESS":"Пожалуйста, проверьте вашу почту по поводу верификацонного сообщения","PROFILE_LINK_SUCCESS":"Привязываем провайдера...","PROFILE_UNLINK_SUCCESS":"Сервис более не привязан к вашему аккаунту","VERIFY_EMAIL_SUBJECT":"Next Dashboard - Верифицируйте ваш email","VERIFY_EMAIL_TEXT":"Используйте ссылку ниже для верификации вашего email:\n\n{url}\n\n","VERIFY_EMAIL_HTML":"<p>Используйте ссылку ниже для верификации вашего email:</p><p>{url}</p>","VERIFY_INTRO_MESSAGE":"Пожалуйста, используйте кнопку ниже для верификации вашего email","VERIFY_FAILED_MESSAGE":"Эта ссылка больше не работает","VERIFY_ACTION_BUTTON":"Верифицировать email","DELETE_PROFILE_TITLE":"Удалить профиль","DELETE_PROFILE_TEXT":"Вы уверены, что хотите удалить ваш профиль?","DELETE_PROFILE_CANCEL":"Отменить","DELETE_PROFILE_SUBMIT":"Удалить","OAUTH_ERROR_GENERIC":"Произошла ошибка","OAUTH_ERROR_ACCOUNT_EXISTS":"Аккаунт, связанный с вашим email, уже существует","OAUTH_ERROR_ACCOUNT_EXISTS_TITLE1":"Почему я это вижу?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE1":["Похоже, что вы уже входили, используя другой сервис.\n","Чтобы защитить ваш аккаунт, если вы уже входили, используя другой сервис, вам"," необходимо связать ваши аккануты, прежде чем вы сможете войти, используя другой сервис."],"OAUTH_ERROR_ACCOUNT_EXISTS_TITLE2":"Как это починить?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE2":["Чтобы войти, используя другой сервис, сначала войдите, используя email или предыдущий"," сервис, затем свяжите ваши аккаунты на странице профиля."],"DASHBOARD_PROFIT_LABEL":"Прибыль","DASHBOARD_SALES_LABEL":"Продажи","DASHBOARD_CLIENTS_LABEL":"Клиенты","DASHBOARD_AVG_TIME_LABEL":"Сред. время","DASHBOARD_WORLD_LABEL":"Мир","DASHBOARD_CLICK_MAP_LABEL":"Кликните, чтобы выбрать","DASHBOARD_NOT_REALLY_LABEL":"(на самом деле нет)","DEPT_PRODUCTION":"Призводство","DEPT_RD":"R&D","DEPT_PURCHASING":"Закупки","DEPT_MARKETING":"Маркетинг","DEPT_HR":"HR","DEPT_ACCOUNTING":"Бухгалтерия","EMPLOYEES_MESSAGE_TITLE":"Оно живое!","EMPLOYEES_MESSAGE_CONTENT":["Эта таблица работает благодаря GraphQL API и использует React Relay Modern. Попробуйте изменить значение в"," другом броузере или вкладке и вы увидите, что оно обновилось во всех броузерах, подключенных к данной странице,"," благодаря GraphQL Subscriptions."],"EMPLOYEES_UID_COLUMN":"UID","EMPLOYEES_NAME_COLUMN":"Имя","EMPLOYEES_DEPT_COLUMN":"Отдел","EMPLOYEES_TITLE_COLUMN":"Должность","EMPLOYEES_COUNTRY_COLUMN":"Страна","EMPLOYEES_SALARY_COLUMN":"Оклад","EMPLOYEES_CREATE_BUTTON":"Создать сотрудника","EMPLOYEES_EDIT_BUTTON":"Изменить сотрудника","EMPLOYEES_DELETE_BUTTON":"Удалить сотрудников","EDIT_EMPLOYEE_TITLE_CREATE":"Создать сотрудника","EDIT_EMPLOYEE_TITLE_EDIT":"Изменить сотрудника","EDIT_EMPLOYEE_UID_LABEL":"UID","EDIT_EMPLOYEE_UID_HINT":"Только цифры","EDIT_EMPLOYEE_CHECKED_LABEL":"Включен","EDIT_EMPLOYEE_NAME_LABEL":"Имя","EDIT_EMPLOYEE_DEPT_LABEL":"Отдел","EDIT_EMPLOYEE_TITLE_LABEL":"Должность","EDIT_EMPLOYEE_COUNTRY_LABEL":"Страна","EDIT_EMPLOYEE_SALARY_LABEL":"Оклад","EDIT_EMPLOYEE_CANCEL":"Отменить","EDIT_EMPLOYEE_SUBMIT":"Отправить","DELETE_EMPLOYEE_TITLE":"Удалить сотрудников","DELETE_EMPLOYEE_TEXT":"Удалить выбранных сотрудников?","DELETE_EMPLOYEE_CANCEL":"Отменить","DELETE_EMPLOYEE_SUBMIT":"Удалить","USERS_EMAIL_COLUMN":"Email","USERS_EMAIL_VERIFIED_COLUMN":"Преверен","USERS_NAME_COLUMN":"Имя","USERS_ROLES_COLUMN":"Роли","USERS_CREATE_BUTTON":"Создать пользователя","USERS_EDIT_BUTTON":"Изменить пользователя","USERS_DELETE_BUTTON":"Удалить пользователей","EDIT_USER_TITLE_CREATE":"Создать пользователя","EDIT_USER_TITLE_EDIT":"Изменить пользователя","EDIT_USER_NAME_LABEL":"Имя","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Пароль","EDIT_USER_ANONYMOUS_LABEL":"Аноним","EDIT_USER_AUTHENTICATED_LABEL":"Авторизованный","EDIT_USER_ADMIN_LABEL":"Администратор","EDIT_USER_CANCEL":"Отменить","EDIT_USER_SUBMIT":"Отправить","DELETE_USER_TITLE":"Удалить пользователей","DELETE_USER_TEXT":"Удалить выбранных пользователей?","DELETE_USER_CANCEL":"Отменить","DELETE_USER_SUBMIT":"Удалить","FORMS_MESSAGE_TITLE":"Оно живое!","FORMS_MESSAGE_CONTENT":["Пример формы ниже полностью фукциональный, поля нормализуют и проверяют ввод, используя файл описания данной "," формы. А сервер может перепроверить форму, испольуя тот же самый файл описания формы после отправки."],"FORMS_SUCCESS_TITLE":"Поздравляем!","FORMS_SUCCESS_TEXT":"Форма закончена и готова к отправке на сервер","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Пред","WIZARD_NEXT_BUTTON":"След","WIZARD_SUBMIT_BUTTON":"Готово","WIZARD_ERROR_LABEL":"Пожалуйста, заполните эту форму","SHIPPING_STEP_TITLE":"Доставка","SHIPPING_STEP_DESCR":"Укажите параметры доставки","SHIPPING_FIRST_NAME_LABEL":"Имя","SHIPPING_MIDDLE_NAME_LABEL":"Отчество (не обязательно)","SHIPPING_LAST_NAME_LABEL":"Фамилия","SHIPPING_ADDRESS_LABEL":"Адрес","SHIPPING_CITY_LABEL":"Город/Поселок","SHIPPING_STATE_LABEL":"Штат/Привинция/Регион (если требуется)","SHIPPING_CODE_LABEL":"ZIP/Почтовый индекс","SHIPPING_COUNTRY_LABEL":"Страна","SHIPPING_PHONE_LABEL":"Номер телефона","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"Что такое собака?","SHIPPING_Q2":"Какие виды собак бывают?","SHIPPING_Q3":"Как завести собаку?","BILLING_STEP_TITLE":"Оплата","BILLING_STEP_DESCR":"Укажите параметры оплаты","BILLING_CARD_NUMBER_LABEL":"Номер кредитной карты","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Адрес плательщика совпадает с адресом доставки","BILLING_Q1":"Что такое Lorem Ipsum?","BILLING_Q2":"Когда это начали применять?","CONFIRM_STEP_TITLE":"Готово","CONFIRM_STEP_DESCR_SUCCESS":"Форма готова к отправке","CONFIRM_STEP_DESCR_FAILURE":"Форма еще не закончена","CONFIRM_SHIPPING_LABEL":"Параметры доставки","CONFIRM_BILLING_LABEL":"Параметры оплаты","CONFIRM_FIRST_NAME_LABEL":"Имя:","CONFIRM_MIDDLE_NAME_LABEL":"Отчество:","CONFIRM_LAST_NAME_LABEL":"Фамилия:","CONFIRM_ADDRESS_LABEL":"Адрес:","CONFIRM_CITY_LABEL":"Город/Поселок:","CONFIRM_STATE_LABEL":"Штат/Привинция/Регион:","CONFIRM_CODE_LABEL":"ZIP/Почтовый индекс:","CONFIRM_COUNTRY_LABEL":"Страна:","CONFIRM_PHONE_LABEL":"Номер телефона:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Номер кредитной карты:","CONFIRM_CARD_DATE_LABEL":"Срок карты истекает:","NOTIFICATIONS_LABEL":"Уведомления","NOTIFICATIONS_TITLE":"Стилизованный попап!","ICONS_FILTER_LABEL":"Фильтр","APP_AUTH_TITLE":"Авторизация","APP_AUTH_ANONYMOUS_BUTTON":"Аноним","APP_AUTH_CREDENTIALS_LABEL":"Войти, используя логин/пароль","APP_AUTH_NEW_USER_LABEL":"У меня еще нет аккаунт. Пожалуйста, создайте его","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Пароль","APP_AUTH_SERVICE_BUTTON":"Войти с","APP_AUTH_SUBMIT":"Войти","APP_AUTH_FAILED":"Неправильный логин/пароль","APP_AUTH_EMAIL_TAKEN":"Этот email уже зарегистрирован","OPERATION_FAILED":"Операция завершилась ошибкой","ERROR":"Ошибка","ERROR_GO_HOME_LINK":"Перезагрузить стартовую страницу","ERROR_FIELD_REQUIRED":"Это поле обязательно","ERROR_INVALID_PATTERN":"Пожалуйста, укажите правильное значение","ERROR_INVALID_EMAIL":"Пожалуйста, укажите правильный email","ERROR_INVALID_PHONE":"Пожалуйста, укажите правильный номер телефона","ERROR_INVALID_PHONE_COUNTRY":"Это неправильный номер телефона для указанной страны","ERROR_INVALID_CREDIT_CARD_NUMBER":"Пожалуйста, укажите правильный номер кредитной карты","ERROR_INVALID_CREDIT_CARD_DATE":"Пожалуйста, укажите правильный срок действия кредитной карты","ERROR_INVALID_CREDIT_CARD_SECRET":"Пожалуйста, укажите правильный код CVV2","ERROR_INVALID_PASSWORD":"Длина пароля должна быть не меньше 6 символов","ERROR_MISMATCHED_VALUES":"Два, введенные вами значения, не совпадают"};

/***/ }),

/***/ "ghjP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalEmployeeId = exports.isEditModalOpen = exports.getSelected = void 0;

var _reselect = __webpack_require__("MWqi");

var getSelected = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["employees", "selected"]);
}, function (selected) {
  return selected.toJS();
});
exports.getSelected = getSelected;

var isEditModalOpen = function isEditModalOpen(state) {
  return state.getIn(["employees", "isEditModalOpen"]);
};

exports.isEditModalOpen = isEditModalOpen;

var getEditModalEmployeeId = function getEditModalEmployeeId(state) {
  return state.getIn(["employees", "editModalEmployeeId"]);
};

exports.getEditModalEmployeeId = getEditModalEmployeeId;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "h7lg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FormContext", {
  enumerable: true,
  get: function get() {
    return _context.default;
  }
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _Form.default;
  }
});
Object.defineProperty(exports, "Field", {
  enumerable: true,
  get: function get() {
    return _FieldContainer.default;
  }
});
Object.defineProperty(exports, "FormSpy", {
  enumerable: true,
  get: function get() {
    return _reactFinalForm.FormSpy;
  }
});

var _context = _interopRequireDefault(__webpack_require__("mSjk"));

var _Form = _interopRequireDefault(__webpack_require__("p8rN"));

var _FieldContainer = _interopRequireDefault(__webpack_require__("PmAW"));

var _reactFinalForm = __webpack_require__("amB/");

/***/ }),

/***/ "hbHv":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "iYPX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__("7s44"));

var _Radio = _interopRequireDefault(__webpack_require__("CUfL"));

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

var MyRadio =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MyRadio, _React$PureComponent);

  function MyRadio() {
    (0, _classCallCheck2.default)(this, MyRadio);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyRadio).apply(this, arguments));
  }

  (0, _createClass2.default)(MyRadio, [{
    key: "render",
    value: function render() {
      var _this = this;

      var errors = null;

      if (this.props.meta.touched && !this.props.meta.active && !this.props.meta.submitting && (this.props.meta.error || this.props.meta.submitError && !this.props.meta.dirtySinceLastSubmit)) {
        errors = [];
        if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
        if (this.props.meta.submitError) errors = errors.concat(this.props.meta.submitError);
        errors = _.uniq(errors);
      }

      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_FormControlLabel.default, {
        classes: {
          root: this.props.classes.label
        },
        label: this.props.label,
        control: _react.default.createElement(_Radio.default, {
          name: this.props.input.name,
          value: this.props.input.value,
          autoFocus: this.props.autoFocus,
          checked: this.props.input.checked,
          disabled: this.props.meta.submitting || this.props.disabled,
          color: this.props.color || "primary",
          onChange: this.props.input.onChange,
          onBlur: this.props.input.onBlur,
          onFocus: this.props.input.onFocus,
          inputProps: {
            onKeyDown: function onKeyDown(evt) {
              if (_this.props.onSubmit && evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();

                _this.props.form.blur(_this.props.input.name);

                _this.props.onSubmit();
              }
            }
          }
        })
      }));
    }
  }]);
  return MyRadio;
}(_react.default.PureComponent);

var _default = MyRadio;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ik0m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _locales = _interopRequireDefault(__webpack_require__("fXLo"));

_.forEach(_locales.default.getLocaleData(), function (data) {
  return (0, _reactIntl.addLocaleData)(data);
});

var IntlProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(IntlProvider, _React$Component);

  function IntlProvider() {
    (0, _classCallCheck2.default)(this, IntlProvider);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IntlProvider).apply(this, arguments));
  }

  (0, _createClass2.default)(IntlProvider, [{
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "ir66":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("LT9N"));

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

var MyError =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MyError, _React$PureComponent);

  function MyError() {
    (0, _classCallCheck2.default)(this, MyError);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyError).apply(this, arguments));
  }

  (0, _createClass2.default)(MyError, [{
    key: "render",
    value: function render() {
      var errors = null;

      if (this.props.meta.touched && !this.props.meta.active && !this.props.meta.submitting && (this.props.meta.error || this.props.meta.submitError && !this.props.meta.dirtySinceLastSubmit)) {
        errors = [];
        if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
        if (this.props.meta.submitError) errors = errors.concat(this.props.meta.submitError);
        errors = _.uniq(errors);
      }

      if (!errors) return null;
      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, _react.default.createElement(_FieldMessagesContainer.default, {
        errors: errors
      })));
    }
  }]);
  return MyError;
}(_react.default.PureComponent);

var _default = MyError;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "iuEU":
/***/ (function(module, exports) {

module.exports = require("react-relay");

/***/ }),

/***/ "j4BW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "jFLn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _immutable = __webpack_require__("nuGg");

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("vj2+"));

/* State Shape
Map({
  selected: Set([String]), // IDs
  editModalEmployeeId: String, // null when creating a new employee
  isEditModalOpen: false,
})
*/
var selectedReducer = function selectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Set)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_SELECTED:
      if (!_.isUndefined(action.employeeId) && !_.isUndefined(action.isSelected)) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        if (state.includes(action.employeeId)) return state.delete(action.employeeId);else return state.add(action.employeeId);
      }

      break;

    case types.SELECT_ALL:
      if (!_.isUndefined(action.employeeIds)) return (0, _immutable.Set)(action.employeeIds);
      break;

    case types.DESELECT_ALL:
      if (_.isUndefined(action.exceptEmployeeIds)) {
        return (0, _immutable.Set)([]);
      } else {
        return state.withMutations(function (set) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator2.default)(set.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              if (!_.includes(action.exceptEmployeeIds, item)) set.delete(item);
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
        });
      }

  }

  return state;
};

var editModalEmployeeIdReducer = function editModalEmployeeIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.employeeId || null;
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
  editModalEmployeeId: editModalEmployeeIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "jRAA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constants = __webpack_require__("o4p3");

module.exports = function isRouteAllowed(path) {
  var userRoles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isAllowed = !!constants.pages[path] && constants.pages[path].isAllowed;
  if (!isAllowed) return true;
  return isAllowed(userRoles);
};

/***/ }),

/***/ "jWBx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SpeakerNotes");

/***/ }),

/***/ "jxgt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("1S23");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
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
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kIqJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _state = __webpack_require__("Yoxy");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var Fetcher =
/*#__PURE__*/
function () {
  function Fetcher(getState, dispatch) {
    (0, _classCallCheck2.default)(this, Fetcher);
    this.getState = getState;
    this.dispatch = dispatch;
    this.cookie = null;
  }

  (0, _createClass2.default)(Fetcher, [{
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
      var _ref2 = (0, _asyncToGenerator2.default)(
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

                if (!( true && method !== "GET")) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return this.getCsrf();

              case 7:
                csrf = _context.sent;
                if (csrf) headers["X-CSRF-Token"] = csrf;

              case 9:
                if ( true && method !== "GET" && (!this.cookie ||  true && !csrf)) {
                  errors = [];
                  if (!this.cookie) errors.push("no cookie");
                  if ( true && !csrf) errors.push("no csrf");
                  query = data.query;
                  if (query) query = _.split(query, /\r?\n/);
                  process.stderr.write(["Broken fetch in SSR: ".concat(resource, " (").concat(errors.join(", "), ")"), (0, _stringify.default)(query || data, undefined, 4)].join("\n") + "\n");
                }

                _context.next = 12;
                return fetch( false ? undefined : process.env.APP_INNER_SERVER + resource, {
                  method: method,
                  credentials: "include",
                  headers: headers,
                  body: data && (0, _stringify.default)(data)
                });

              case 12:
                response = _context.sent;

                if (!(response.status === 403 && csrf)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 16;
                return this.dispatch(_state.authOperations.setCsrf({
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
      var _getCsrf = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _this = this;

        var csrf, data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                csrf = _state.authSelectors.getCsrf(this.getState());

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
                return this.dispatch(_state.authOperations.setCsrf({
                  csrf: csrf
                }));

              case 16:
                return _context2.abrupt("return", csrf);

              case 17:
                return _context2.abrupt("return", new _promise.default(function (resolve) {
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
    key: "getToken",
    value: function () {
      var _getToken = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        var _this2 = this;

        var data;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.fetch({
                  resource: "".concat(_constants.default.apiBase, "/token")
                });

              case 3:
                data = _context3.sent;

                if (!data.token) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", data.token);

              case 6:
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.error("TOKEN: ".concat(_context3.t0.message));

              case 11:
                return _context3.abrupt("return", new _promise.default(function (resolve) {
                  return setTimeout(function () {
                    return resolve(_this2.getToken());
                  }, 3000);
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function getToken() {
        return _getToken.apply(this, arguments);
      }

      return getToken;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(operation, variables, cacheConfig, uploadables) {
        var _this3 = this;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
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
                return _context4.abrupt("return", _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);

                if (true) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("return", new _promise.default(function (resolve) {
                  return setTimeout(function () {
                    return resolve(_this3.query(operation, variables, cacheConfig, uploadables));
                  }, 1000);
                }));

              case 10:
                return _context4.abrupt("return", {
                  errors: [{
                    message: _context4.t0.message,
                    query: _context4.t0.query
                  }]
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 6]]);
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
    }
  }, {
    key: "$requires",
    get: function get() {
      return ["getState", "dispatch"];
    }
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "kiQV":
/***/ (function(module) {

module.exports = {"name":"next-dashboard","version":"0.1.8","private":true,"dependencies":{"@babel/polyfill":"~7.4.4","@date-io/moment":"~1.3.5","@material-ui/core":"~3.9.3","@material-ui/icons":"~3.0.2","@zeit/next-bundle-analyzer":"~0.1.2","@zeit/next-css":"~1.0.1","base64util":"~2.0.0","bcrypt":"~3.0.6","body-parser":"~1.19.0","chance":"~1.0.18","classnames":"~2.2.6","compression":"~1.7.4","connect-mongo":"~2.0.3","cookie-parser":"~1.4.4","cors":"~2.8.5","country-iso-3-to-2":"~1.0.1","country-telephone-data":"~0.6.0","csurf":"~1.10.0","debug":"~4.1.1","dotenv":"~8.0.0","express":"~4.16.4","express-graphql":"~0.8.0","express-session":"~1.16.1","fast-relay-pagination":"~2.0.2","final-form":"~4.12.0","final-form-calculate":"~1.3.1","fs-extra":"~7.0.1","graphql":"~14.2.1","graphql-relay":"~0.6.0","graphql-subscriptions":"~1.1.0","http-status-codes":"~1.3.2","immutable":"~4.0.0-rc.12","injectt":"~0.2.0","intl":"~1.2.5","intl-locales-supported":"~1.0.0","intl-messageformat":"~2.2.0","isomorphic-unfetch":"~3.0.0","js-md5":"~0.7.3","json-immutable":"~0.4.0","jsonwebtoken":"~8.5.1","jss":"~9.8.7","jss-extend":"~6.2.0","lodash":"~4.17.11","lru-cache":"~5.1.1","material-ui-pickers":"~2.2.4","moment":"~2.24.0","moment-timezone":"~0.5.25","mongoose":"~5.5.5","morgan":"~1.9.1","next":"~8.1.0","next-compose-plugins":"~2.2.0","nodemailer":"~6.1.1","null-loader":"~1.0.0","pako":"~1.0.10","passport":"~0.4.0","passport-facebook":"~3.0.0","passport-google-oauth":"~2.0.0","passport-twitter":"~1.0.4","raf":"~3.4.1","react":"~16.8.6","react-credit-cards":"~0.7.0","react-dom":"~16.8.6","react-final-form":"~4.1.0","react-flags":"~0.1.17","react-google-maps":"~9.4.5","react-intl":"~2.8.0","react-jss":"~8.6.1","react-redux":"~7.0.3","react-relay":"~4.0.0","react-simple-maps":"~0.12.1","react-swipeable-views":"~0.13.1","react-toastify":"~5.1.0","react-virtualized":"~9.21.0","redux":"~4.0.1","redux-devtools-extension":"~2.13.8","redux-immutable":"~4.0.0","redux-thunk":"~2.3.0","relay-compiler":"~4.0.0","relay-compiler-webpack-plugin":"~4.0.0","relay-query-lookup-renderer":"~4.0.0","relay-runtime":"~4.0.0","reselect":"~4.0.0","sharp":"~0.22.1","socket.io":"~2.2.0","subscriptions-transport-ws":"~0.9.16","svg-inline-loader":"~0.8.0","terser-webpack-plugin":"~1.2.3","utf8":"~3.0.0","validator":"~10.11.0","victory":"~32.2.2","webpack":"~4.30.0","workbox-webpack-plugin":"~4.3.1"},"devDependencies":{"@babel/core":"~7.4.4","babel-core":"7.0.0-bridge.0","babel-eslint":"~10.0.1","babel-jest":"~24.8.0","babel-plugin-lodash":"~3.3.4","babel-plugin-relay":"~4.0.0","enzyme":"~3.9.0","enzyme-adapter-react-16":"~1.12.1","eslint":"~5.16.0","eslint-plugin-lodash":"~5.1.0","eslint-plugin-react":"~7.13.0","graphql-compiler":"^2.0.0-rc.1","jest":"~24.8.0","jsdom":"~15.0.0","jsdom-global":"~3.0.2","postcss-clean":"~1.1.0","postcss-loader":"~3.0.0","postcss-preset-env":"~6.6.0","postcss-url":"~8.0.0","prop-types":"~15.7.2","supertest":"~4.0.2","webfontloader":"~1.6.28"},"resolutions":{"graphql":"~14.2.1","**/graphql":"~14.2.1"},"scripts":{"lint":"eslint . --max-warnings=0","test":"jest . --no-cache --verbose","schema":"node ./bin/update-schema","relay":"node ./bin/update-schema && relay-compiler --src ./app --schema ./api/schema.graphql --verbose","build":"node ./bin/prepare-build && env NODE_ENV=production TMPDIR=$PWD/.tmp next build","export":"env NODE_ENV=production TMPDIR=$PWD/.tmp next export && node ./bin/finish-export","dev":"node ./bin/prepare-build && env NODE_ENV=development node ./bin/www","start":"env NODE_ENV=production node ./bin/www"}};

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mSjk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var FormContext = _react.default.createContext({});

var _default = FormContext;
exports.default = _default;

/***/ }),

/***/ "n6kc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dark = __webpack_require__("V5w1");

var light = __webpack_require__("JlIP");

module.exports = {
  defaultTheme: "dark",
  names: ["dark", "light"],
  themes: {
    dark: dark,
    light: light
  }
};

/***/ }),

/***/ "nuGg":
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "nz5+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BrightnessAuto");

/***/ }),

/***/ "o4p3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var roles = {
  ANONYMOUS: "ANONYMOUS",
  // only the anonymous has this
  AUTHENTICATED: "AUTHENTICATED",
  // every one including anonymous has this
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
      page: "/"
    },
    "/dashboard": {
      page: "/dashboard",
      icon: "dashboard",
      menu: "MENU_DASHBOARD",
      title: "TITLE_DASHBOARD",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/forms": {
      page: "/forms",
      icon: "forms",
      menu: "MENU_FORMS",
      title: "TITLE_FORMS",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/charts": {
      page: "/charts",
      icon: "charts",
      menu: "MENU_CHARTS",
      title: "TITLE_CHARTS",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/tables": {
      page: "/tables",
      icon: "tables",
      menu: "MENU_TABLES",
      title: "TITLE_TABLES",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/maps": {
      page: "/maps",
      icon: "maps",
      menu: "MENU_MAPS",
      title: "TITLE_MAPS",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/notifications": {
      page: "/notifications",
      icon: "notifications",
      menu: "MENU_NOTIFICATIONS",
      title: "TITLE_NOTIFICATIONS",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/typography": {
      page: "/typography",
      icon: "typography",
      menu: "MENU_TYPOGRAPHY",
      title: "TITLE_TYPOGRAPHY",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/icons": {
      page: "/icons",
      icon: "icons",
      menu: "MENU_ICONS",
      title: "TITLE_ICONS",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/auth/profile": {
      page: "/auth/profile",
      title: "TITLE_PROFILE",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED) && !_.includes(userRoles, roles.ANONYMOUS);
      }
    },
    "/auth/verify": {
      page: "/auth/verify",
      title: "TITLE_VERIFY"
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
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.ADMIN);
      }
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
    SET_STATUS: "SET_STATUS",
    TOAST: "TOAST"
  },
  events: {
    FONTS_LOADED: "FONTS_LOADED",
    SW_UPDATE_READY: "SW_UPDATE_READY",
    TOAST: "TOAST"
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "p/Qe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserProviders = exports.getAllProviders = exports.getRoles = exports.getGoogleMapsKey = exports.getIsEmailVerified = exports.getEmail = exports.getName = exports.isAdmin = exports.isAnonymous = exports.isRegular = exports.isAuthenticated = exports.getCsrf = void 0;

var _from = _interopRequireDefault(__webpack_require__("d04V"));

var _reselect = __webpack_require__("MWqi");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var getCsrf = function getCsrf(state) {
  return state.getIn(["auth", "csrf"]);
};

exports.getCsrf = getCsrf;

var isAuthenticated = function isAuthenticated(state) {
  return state.getIn(["auth", "isAuthenticated"]);
};

exports.isAuthenticated = isAuthenticated;

var isRegular = function isRegular(state) {
  return (// eslint-disable-next-line lodash/prefer-lodash-method
    state.getIn(["auth", "roles"]).includes(_constants.default.roles.AUTHENTICATED)
  );
};

exports.isRegular = isRegular;

var isAnonymous = function isAnonymous(state) {
  return (// eslint-disable-next-line lodash/prefer-lodash-method
    state.getIn(["auth", "roles"]).includes(_constants.default.roles.ANONYMOUS)
  );
};

exports.isAnonymous = isAnonymous;

var isAdmin = function isAdmin(state) {
  return (// eslint-disable-next-line lodash/prefer-lodash-method
    state.getIn(["auth", "roles"]).includes(_constants.default.roles.ADMIN)
  );
};

exports.isAdmin = isAdmin;

var getName = function getName(state) {
  return state.getIn(["auth", "name"]);
};

exports.getName = getName;

var getEmail = function getEmail(state) {
  return state.getIn(["auth", "email"]);
};

exports.getEmail = getEmail;

var getIsEmailVerified = function getIsEmailVerified(state) {
  return state.getIn(["auth", "isEmailVerified"]);
};

exports.getIsEmailVerified = getIsEmailVerified;

var getGoogleMapsKey = function getGoogleMapsKey(state) {
  return state.getIn(["auth", "googleMapsKey"]);
};

exports.getGoogleMapsKey = getGoogleMapsKey;
var getRoles = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["auth", "roles"]);
}, function (roles) {
  return roles.toJS();
});
exports.getRoles = getRoles;
var getAllProviders = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["auth", "providers"]);
}, function (providers) {
  return (0, _from.default)(providers.keys());
});
exports.getAllProviders = getAllProviders;
var getUserProviders = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["auth", "providers"]);
}, function (providers) {
  return providers.toJS();
});
exports.getUserProviders = getUserProviders;

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p198":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _httpStatusCodes = _interopRequireDefault(__webpack_require__("LZqe"));

var styles = function styles(theme) {
  return {
    layout: (0, _defineProperty2.default)({
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
    code: (0, _defineProperty2.default)({
      fontSize: "300%",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      padding: "0.5rem 2rem",
      color: "1px solid ".concat(theme.palette.text.primary),
      borderRight: "1px solid ".concat(theme.palette.text.disabled)
    }, theme.breakpoints.down("md"), {
      borderRight: "none"
    }),
    text: {
      fontSize: "200%",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      padding: "0.5rem 2rem",
      color: "1px solid ".concat(theme.palette.text.secondary)
    },
    linkWrapper: {
      fontSize: "1rem",
      marginTop: "1rem"
    },
    link: {
      color: theme.palette.text.primary,
      textDecoration: "none",
      "&:hover": {
        color: "#ffffff"
      }
    }
  };
};

exports.styles = styles;

var ErrorMessage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ErrorMessage, _React$Component);

  function ErrorMessage() {
    (0, _classCallCheck2.default)(this, ErrorMessage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorMessage).apply(this, arguments));
  }

  (0, _createClass2.default)(ErrorMessage, [{
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
      }, this.getText(), _react.default.createElement("div", {
        className: this.props.classes.linkWrapper
      }, ">\xA0\xA0", _react.default.createElement("a", {
        href: "/",
        className: this.props.classes.link
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "ERROR_GO_HOME_LINK"
      })))));
    }
  }]);
  return ErrorMessage;
}(_react.default.Component);

var _default = ErrorMessage;
exports.default = _default;

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "p8rN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactFinalForm = __webpack_require__("amB/");

var _context = _interopRequireDefault(__webpack_require__("mSjk"));

var FormComponent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FormComponent, _React$Component);

  function FormComponent() {
    (0, _classCallCheck2.default)(this, FormComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(FormComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fields = _this$props.fields,
          _render = _this$props.render,
          formProps = (0, _objectWithoutProperties2.default)(_this$props, ["fields", "render"]);
      return _react.default.createElement(_reactFinalForm.Form, (0, _extends2.default)({}, formProps, {
        render: function render(props) {
          return _react.default.createElement(_context.default.Provider, {
            value: (0, _objectSpread2.default)({
              fields: fields
            }, props)
          }, _react.default.createElement("form", {
            noValidate: true,
            autoComplete: "off",
            onSubmit: props.handleSubmit
          }, _render(props)));
        }
      }));
    }
  }]);
  return FormComponent;
}(_react.default.Component);

var _default = FormComponent;
exports.default = _default;

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "pLMf":
/***/ (function(module, exports) {

module.exports = require("pako");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pN9Q":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),

/***/ "prCD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDiContainer;

var _injectt = _interopRequireDefault(__webpack_require__("QGZh"));

var _Fetcher = _interopRequireDefault(__webpack_require__("kIqJ"));

var _Storage = _interopRequireDefault(__webpack_require__("O2Mp"));

var _Socket = _interopRequireDefault(__webpack_require__("ybxu"));

var _Cookie = _interopRequireDefault(__webpack_require__("qb5g"));

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

/***/ "q1C7":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qb5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var Cookie =
/*#__PURE__*/
function () {
  function Cookie() {
    (0, _classCallCheck2.default)(this, Cookie);
  }

  (0, _createClass2.default)(Cookie, [{
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
    get: function get() {
      return "cookie";
    }
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

/***/ "qhFA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _router = __webpack_require__("4Q3z");

var _styles = __webpack_require__("9Pu4");

var _state = __webpack_require__("E4eY");

var _state2 = __webpack_require__("Yoxy");

var _Layout = _interopRequireWildcard(__webpack_require__("6Gna"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: _state2.authSelectors.isAuthenticated(state),
    isStarted: _state.appSelectors.isStarted(state) && (!_state2.authSelectors.isAuthenticated(state) || _state.appSelectors.isConnected(state)),
    isStopped: _state.appSelectors.isStopped(state),
    isError: _state.appSelectors.getStatusCode(state) !== 200,
    statusCode: _state.appSelectors.getStatusCode(state)
  };
};

var Layout = (0, _router.withRouter)((0, _styles.withStyles)(_Layout.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_Layout.default))));
var _default = Layout;
exports.default = _default;

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "r8N8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRelayEnviroment;

var _relayRuntime = __webpack_require__("AV/6");

var _subscriptionsTransportWs = __webpack_require__("AlFE");

var _state = __webpack_require__("E4eY");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var envFactory = function envFactory(di, initialState) {
  var setupSubscription = function setupSubscription(config, variables, cacheConfig, observer) {
    var query = config.text;
    var subscriptionClient = new _subscriptionsTransportWs.SubscriptionClient(_state.appSelectors.getSubscriptionsServer(di.get("getState")()) + _constants.default.graphqlBase, {
      reconnect: true
    });

    subscriptionClient.maxConnectTimeGenerator.duration = function () {
      return subscriptionClient.maxConnectTimeGenerator.max;
    };

    var client = subscriptionClient.request({
      query: query,
      variables: variables
    }).subscribe({
      next: function next(result) {
        observer.onNext({
          data: result.data || {}
        });
      },
      complete: function complete() {
        observer.onCompleted();
      },
      error: function error(_error) {
        observer.onError(_error);
      }
    });
    return {
      dispose: client.unsubscribe
    };
  };

  var fetcher = di.get("fetcher");

  var network = _relayRuntime.Network.create(fetcher.query.bind(fetcher), setupSubscription);

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

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rLaN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _immutable = __webpack_require__("nuGg");

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("sTFT"));

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
      if (_.isUndefined(action.exceptUserIds)) {
        return (0, _immutable.Set)([]);
      } else {
        return state.withMutations(function (set) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator2.default)(set.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              if (!_.includes(action.exceptUserIds, item)) set.delete(item);
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
        });
      }

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "ra+8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Select = _interopRequireDefault(__webpack_require__("OdWO"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _MenuItem = _interopRequireDefault(__webpack_require__("x54t"));

var _InputLabel = _interopRequireDefault(__webpack_require__("zOcm"));

var _FilledInput = _interopRequireDefault(__webpack_require__("4VpM"));

var _Input = _interopRequireDefault(__webpack_require__("tBFs"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("LT9N"));

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
  (0, _inherits2.default)(MySelect, _React$PureComponent);

  function MySelect() {
    (0, _classCallCheck2.default)(this, MySelect);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MySelect).apply(this, arguments));
  }

  (0, _createClass2.default)(MySelect, [{
    key: "render",
    value: function render() {
      var _this = this;

      var errors = null;

      if (this.props.meta.touched && !this.props.meta.active && !this.props.meta.submitting && (this.props.meta.error || this.props.meta.submitError && !this.props.meta.dirtySinceLastSubmit)) {
        errors = [];
        if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
        if (this.props.meta.submitError) errors = errors.concat(this.props.meta.submitError);
        errors = _.uniq(errors);
      }

      var SelectInput = this.props.variant === "filled" ? _FilledInput.default : _Input.default;
      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_InputLabel.default, null, this.props.label), _react.default.createElement(_Select.default, {
        value: this.props.input.value || "",
        native: this.props.native,
        autoFocus: this.props.autoFocus,
        disabled: this.props.meta.submitting || this.props.disabled,
        onChange: this.props.input.onChange,
        onBlur: this.props.input.onBlur,
        onFocus: this.props.input.onFocus,
        input: _react.default.createElement(SelectInput, {
          inputProps: {
            onKeyDown: function onKeyDown(evt) {
              if (_this.props.onSubmit && evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();

                _this.props.form.blur(_this.props.input.name);

                _this.props.onSubmit();
              }
            }
          }
        })
      }, !this.props.native && _.map(this.props.options, function (item, index) {
        return _react.default.createElement(_MenuItem.default, {
          key: "item-".concat(index),
          value: item.value
        }, item.label);
      }), !!this.props.native && _.map(this.props.options, function (item, index) {
        return _react.default.createElement("option", {
          key: "item-".concat(index),
          value: item.value
        }, item.label);
      })), !!(this.props.messages || errors) && _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, _react.default.createElement(_FieldMessagesContainer.default, {
        messages: this.props.messages,
        errors: errors
      })));
    }
  }]);
  return MySelect;
}(_react.default.PureComponent);

var _default = MySelect;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "rdLC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelectors = exports.usersOperations = exports.usersTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("rLaN"));

var usersTypes = _interopRequireWildcard(__webpack_require__("sTFT"));

exports.usersTypes = usersTypes;

var usersOperations = _interopRequireWildcard(__webpack_require__("1Pmw"));

exports.usersOperations = usersOperations;

var usersSelectors = _interopRequireWildcard(__webpack_require__("smpn"));

exports.usersSelectors = usersSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rtrS":
/***/ (function(module, exports) {

module.exports = require("country-telephone-data");

/***/ }),

/***/ "rz8+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_LOCALE = exports.SET_CONNECTED = exports.SET_STATUS_CODE = exports.STOP = exports.START = exports.CREATE = void 0;
var CREATE = "app/app/CREATE";
exports.CREATE = CREATE;
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

/***/ "sNAY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
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
    validate: "required",
    label: "APP_AUTH_PASSWORD_LABEL"
  }
};

/***/ }),

/***/ "sTFT":
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

/***/ "smpn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEditModalUserId = exports.isEditModalOpen = exports.getSelected = void 0;

var _reselect = __webpack_require__("MWqi");

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

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "tmE+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _Select = _interopRequireWildcard(__webpack_require__("ra+8"));

var Select = (0, _styles.withStyles)(_Select.styles)(_Select.default);
var _default = Select;
exports.default = _default;

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "v5c1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Pets");

/***/ }),

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "vFf/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "vdyi":
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/ru.js");

/***/ }),

/***/ "vj2+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.DESELECT_ALL = exports.SELECT_ALL = exports.SET_SELECTED = void 0;
var SET_SELECTED = "app/employees/SET_SELECTED";
exports.SET_SELECTED = SET_SELECTED;
var SELECT_ALL = "app/employees/SELECT_ALL";
exports.SELECT_ALL = SELECT_ALL;
var DESELECT_ALL = "app/employees/DESELECT_ALL";
exports.DESELECT_ALL = DESELECT_ALL;
var SHOW_EDIT_MODAL = "app/employees/SHOW_EDIT_MODAL";
exports.SHOW_EDIT_MODAL = SHOW_EDIT_MODAL;
var HIDE_EDIT_MODAL = "app/employees/HIDE_EDIT_MODAL";
exports.HIDE_EDIT_MODAL = HIDE_EDIT_MODAL;

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vmr9":
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Dashboard","TITLE_DASHBOARD":"Dashboard","MENU_FORMS":"Forms","TITLE_FORMS":"Forms","MENU_CHARTS":"Charts","TITLE_CHARTS":"Charts","MENU_TABLES":"Tables","TITLE_TABLES":"Tables","MENU_MAPS":"Maps","TITLE_MAPS":"Maps","MENU_NOTIFICATIONS":"Notifications","TITLE_NOTIFICATIONS":"Notifications","MENU_TYPOGRAPHY":"Typography","TITLE_TYPOGRAPHY":"Typography","MENU_ICONS":"Icons","TITLE_ICONS":"Icons","MENU_USERS":"Users","TITLE_USERS":"Users","TITLE_PROFILE":"Profile","TITLE_VERIFY":"Email verification","TITLE_OAUTH_ERROR":"Authentication error","THEME_DARK_MENU":"Dark","THEME_DARK_LABEL":"Dark Theme","THEME_LIGHT_MENU":"Light","THEME_LIGHT_LABEL":"Light Theme","LAYOUT_SW_UPDATE_MESSAGE":"An update is available. Click here to reload the page.","SIDEBAR_GITHUB_LINK":"Github","SIDEBAR_BENCHMARKS_LINK":"Benchmarks","SIDEBAR_RESPONSIVENESS_LINK":"Responsiveness Test","HEADER_INBOX_LABEL":"Inbox","HEADER_PROFILE_LABEL":"Profile","HEADER_PROFILE_TOOLTIP":"As an anoymous user you don't have a profile. But if you log out you will have an option to sign in using Passport.js","PROFILE_NAME_LABEL":"Display name","PROFILE_EMAIL_LABEL":"Email","PROFILE_PASSWORD1_LABEL":"New password","PROFILE_PASSWORD2_LABEL":"Retype password","PROFILE_SAVE_BUTTON":"Save","PROFILE_DESTROY_BUTTON":"Self-destruct","PROFILE_VERIFY_BUTTON":"Verify Email","PROFILE_LINK_BUTTON":"Link","PROFILE_UNLINK_BUTTON":"Unlink","PROFILE_SAVE_SUCCESS":"Profile has been updated","PROFILE_VERIFY_SUCCESS":"Please check your mailbox for the verification email","PROFILE_LINK_SUCCESS":"Linking the service provider...","PROFILE_UNLINK_SUCCESS":"The service is no longer linked to your account","VERIFY_EMAIL_SUBJECT":"Next Dashboard - Verify your email","VERIFY_EMAIL_TEXT":"Use the link below to verify your email address:\n\n{url}\n\n","VERIFY_EMAIL_HTML":"<p>Use the link below to verify your email address:</p><p>{url}</p>","VERIFY_INTRO_MESSAGE":"Please use the button below to verify your email address","VERIFY_FAILED_MESSAGE":"This link is no longer valid","VERIFY_ACTION_BUTTON":"Verify Email","DELETE_PROFILE_TITLE":"Delete profile","DELETE_PROFILE_TEXT":"Are you sure you want to delete your profile?","DELETE_PROFILE_CANCEL":"Cancel","DELETE_PROFILE_SUBMIT":"Delete","OAUTH_ERROR_GENERIC":"An error occured","OAUTH_ERROR_ACCOUNT_EXISTS":"An account associated with your email address already exists","OAUTH_ERROR_ACCOUNT_EXISTS_TITLE1":"Why am I seeing this?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE1":["It looks like you might have already signed up using another service.\n","To protect your account, if you have perviously signed up using another service you must"," link accounts before you can use a different service to sign in."],"OAUTH_ERROR_ACCOUNT_EXISTS_TITLE2":"How do I fix this?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE2":["To sign in using another service, first sign in using your email address or the previous"," service then link accounts in your profile page."],"DASHBOARD_PROFIT_LABEL":"Profit","DASHBOARD_SALES_LABEL":"Sales","DASHBOARD_CLIENTS_LABEL":"Clients","DASHBOARD_AVG_TIME_LABEL":"Avg Time","DASHBOARD_WORLD_LABEL":"World","DASHBOARD_CLICK_MAP_LABEL":"Click to select","DASHBOARD_NOT_REALLY_LABEL":"(not really)","DEPT_PRODUCTION":"Production","DEPT_RD":"R&D","DEPT_PURCHASING":"Purchasing","DEPT_MARKETING":"Marketing","DEPT_HR":"HR","DEPT_ACCOUNTING":"Accounting","EMPLOYEES_MESSAGE_TITLE":"It's alive!","EMPLOYEES_MESSAGE_CONTENT":["This table is powered by GraphQL API and uses React Relay Modern. Try changing a value in another browser or tab and"," you will see it updated in all the browsers connected to this page thanks to GraphQL Subscriptions."],"EMPLOYEES_UID_COLUMN":"UID","EMPLOYEES_NAME_COLUMN":"Name","EMPLOYEES_DEPT_COLUMN":"Department","EMPLOYEES_TITLE_COLUMN":"Title","EMPLOYEES_COUNTRY_COLUMN":"Country","EMPLOYEES_SALARY_COLUMN":"Salary","EMPLOYEES_CREATE_BUTTON":"Create Employee","EMPLOYEES_EDIT_BUTTON":"Edit Employee","EMPLOYEES_DELETE_BUTTON":"Delete Employees","EDIT_EMPLOYEE_TITLE_CREATE":"Create employee","EDIT_EMPLOYEE_TITLE_EDIT":"Edit employee","EDIT_EMPLOYEE_UID_LABEL":"UID","EDIT_EMPLOYEE_UID_HINT":"Digits only","EDIT_EMPLOYEE_CHECKED_LABEL":"Enabled","EDIT_EMPLOYEE_NAME_LABEL":"Name","EDIT_EMPLOYEE_DEPT_LABEL":"Department","EDIT_EMPLOYEE_TITLE_LABEL":"Title","EDIT_EMPLOYEE_COUNTRY_LABEL":"Country","EDIT_EMPLOYEE_SALARY_LABEL":"Salary","EDIT_EMPLOYEE_CANCEL":"Cancel","EDIT_EMPLOYEE_SUBMIT":"Submit","DELETE_EMPLOYEE_TITLE":"Delete employees","DELETE_EMPLOYEE_TEXT":"Delete selected employees?","DELETE_EMPLOYEE_CANCEL":"Cancel","DELETE_EMPLOYEE_SUBMIT":"Delete","USERS_EMAIL_COLUMN":"Email","USERS_EMAIL_VERIFIED_COLUMN":"Verified","USERS_NAME_COLUMN":"Name","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create user","EDIT_USER_TITLE_EDIT":"Edit user","EDIT_USER_NAME_LABEL":"Name","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_ANONYMOUS_LABEL":"Anonymous","EDIT_USER_AUTHENTICATED_LABEL":"Authenticated","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","DELETE_USER_TITLE":"Delete users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","FORMS_MESSAGE_TITLE":"It's alive!","FORMS_MESSAGE_CONTENT":["The form example below is fully functional, the fields normalize and validate the input using this form's"," declaration file. And the server can use the very same declaration file to revalidate the form upon submitting."],"FORMS_SUCCESS_TITLE":"Congratulations!","FORMS_SUCCESS_TEXT":"The form is finished and ready to be submitted to the backend","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Prev","WIZARD_NEXT_BUTTON":"Next","WIZARD_SUBMIT_BUTTON":"Done","WIZARD_ERROR_LABEL":"Please fill out this form","SHIPPING_STEP_TITLE":"Shipping","SHIPPING_STEP_DESCR":"Choose your shipping options","SHIPPING_FIRST_NAME_LABEL":"First name","SHIPPING_MIDDLE_NAME_LABEL":"Middle name (optional)","SHIPPING_LAST_NAME_LABEL":"Last name","SHIPPING_ADDRESS_LABEL":"Address","SHIPPING_CITY_LABEL":"City/town","SHIPPING_STATE_LABEL":"State/Province/Region (if required)","SHIPPING_CODE_LABEL":"ZIP/Postal code","SHIPPING_COUNTRY_LABEL":"Country","SHIPPING_PHONE_LABEL":"Phone number","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"What is a dog?","SHIPPING_Q2":"What kinds of dogs are there?","SHIPPING_Q3":"How do you acquire a dog?","BILLING_STEP_TITLE":"Billing","BILLING_STEP_DESCR":"Enter billing information","BILLING_CARD_NUMBER_LABEL":"Credit card number","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Billing address is the same as shipping address","BILLING_Q1":"What is Lorem Ipsum?","BILLING_Q2":"When did they start using it?","CONFIRM_STEP_TITLE":"Confirm","CONFIRM_STEP_DESCR_SUCCESS":"The form is ready to be submitted","CONFIRM_STEP_DESCR_FAILURE":"The form is not completed yet","CONFIRM_SHIPPING_LABEL":"Shipping Information","CONFIRM_BILLING_LABEL":"Billing Information","CONFIRM_FIRST_NAME_LABEL":"First name:","CONFIRM_MIDDLE_NAME_LABEL":"Middle name:","CONFIRM_LAST_NAME_LABEL":"Last name:","CONFIRM_ADDRESS_LABEL":"Address:","CONFIRM_CITY_LABEL":"City/town:","CONFIRM_STATE_LABEL":"State/Province/Region:","CONFIRM_CODE_LABEL":"ZIP/Postal code:","CONFIRM_COUNTRY_LABEL":"Country:","CONFIRM_PHONE_LABEL":"Phone number:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Credit card number:","CONFIRM_CARD_DATE_LABEL":"Credit card expires:","NOTIFICATIONS_LABEL":"Notifications","NOTIFICATIONS_TITLE":"Styled Popup!","ICONS_FILTER_LABEL":"Filter","APP_AUTH_TITLE":"Authentication","APP_AUTH_ANONYMOUS_BUTTON":"Anonymous","APP_AUTH_CREDENTIALS_LABEL":"Sign In using Credentials","APP_AUTH_NEW_USER_LABEL":"I don't have an account yet, please create one","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SERVICE_BUTTON":"Sign In with","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","APP_AUTH_EMAIL_TAKEN":"This email is already registered","OPERATION_FAILED":"Operation failed","ERROR":"Error","ERROR_GO_HOME_LINK":"Reload the start page","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_PATTERN":"Please provide a valid value","ERROR_INVALID_EMAIL":"Please provide a valid email address","ERROR_INVALID_PHONE":"Please, provide a valid phone number","ERROR_INVALID_PHONE_COUNTRY":"This is not a valid phone number for this country","ERROR_INVALID_CREDIT_CARD_NUMBER":"Please, provide a valid credit card number","ERROR_INVALID_CREDIT_CARD_DATE":"Please, provide a valid credit card expiration date","ERROR_INVALID_CREDIT_CARD_SECRET":"Please, provide a valid credit card CVV2 code","ERROR_INVALID_PASSWORD":"Password should be at least 6 characters long","ERROR_MISMATCHED_VALUES":"The two values you entered do not match"};

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "w1vu":
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 5.894a8.304 8.304 0 0 1-2.357.636 4.064 4.064 0 0 0 1.804-2.235c-.792.463-1.67.8-2.605.98A4.128 4.128 0 0 0 15.847 4c-2.266 0-4.104 1.808-4.104 4.04 0 .316.037.624.107.92a11.711 11.711 0 0 1-8.458-4.22 3.972 3.972 0 0 0-.555 2.03c0 1.401.724 2.638 1.825 3.362a4.138 4.138 0 0 1-1.858-.505v.05c0 1.958 1.414 3.59 3.29 3.961a4.169 4.169 0 0 1-1.852.07c.522 1.604 2.037 2.772 3.833 2.804a8.315 8.315 0 0 1-5.096 1.73c-.331 0-.658-.02-.979-.057A11.748 11.748 0 0 0 8.29 20c7.547 0 11.674-6.155 11.674-11.493 0-.175-.004-.349-.011-.522A8.265 8.265 0 0 0 22 5.894z\"></path></svg>"

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xHqa":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "xbgq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__("nuGg");

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("+z5V"));

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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "xkAL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _state = __webpack_require__("E4eY");

var _Intl = _interopRequireDefault(__webpack_require__("ik0m"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _state.appSelectors.getLocale(state),
    created: _state.appSelectors.getCreated(state)
  };
};

var IntlProvider = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  pure: false
})(_Intl.default);
var _default = IntlProvider;
exports.default = _default;

/***/ }),

/***/ "xmQw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "yFMe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "ybxu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _router = _interopRequireDefault(__webpack_require__("4Q3z"));

var _socket = _interopRequireDefault(__webpack_require__("pI2v"));

var _state = __webpack_require__("E4eY");

var _state2 = __webpack_require__("Yoxy");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var _package = _interopRequireDefault(__webpack_require__("kiQV"));

var Socket =
/*#__PURE__*/
function () {
  function Socket(getState, dispatch) {
    (0, _classCallCheck2.default)(this, Socket);
    if (true) return;
    this.getState = getState;
    this.dispatch = dispatch;
    this.socket = (0, _socket.default)({
      path: _constants.default.socketsBase,
      autoConnect: false
    });
    this.socket.on(_constants.default.messages.HELLO, this.onHello.bind(this));
    this.socket.on(_constants.default.messages.SET_STATUS, this.onSetStatus.bind(this));
    this.socket.on(_constants.default.messages.TOAST, this.onToast.bind(this));
    this.socket.on("disconnect", this.onDisconnect.bind(this));
  }

  (0, _createClass2.default)(Socket, [{
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
      if (!_state.appSelectors.isConnected(this.getState())) this.socket.connect();
      this.emit(_constants.default.messages.HELLO, {
        version: _package.default.version
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (true) return;

      if (_state.appSelectors.isConnected(this.getState())) {
        this.socket.disconnect();
        if (_router.default.pathname !== "/") _router.default.push("/");
      }
    }
  }, {
    key: "onHello",
    value: function () {
      var _onHello = (0, _asyncToGenerator2.default)(
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
                return this.dispatch(_state.appOperations.stop());

              case 5:
                return _context.abrupt("return", setTimeout(function () {
                  return window.location.reload();
                }, 3000));

              case 6:
                _context.next = 8;
                return this.dispatch(_state.appOperations.setConnected({
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
      var _onSetStatus = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(msg) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (false) {}

                _context2.next = 4;
                return this.dispatch(_state2.authOperations.setStatus(msg));

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
    key: "onToast",
    value: function () {
      var _onToast = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(msg) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                try {
                  if (false) {}
                  window.dispatchEvent(new CustomEvent(_constants.default.events.TOAST, {
                    detail: msg
                  }));
                } catch (error) {
                  console.error(error);
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function onToast(_x3) {
        return _onToast.apply(this, arguments);
      }

      return onToast;
    }()
  }, {
    key: "onDisconnect",
    value: function () {
      var _onDisconnect = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4() {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                if (false) {}
                _context4.next = 4;
                return this.dispatch(_state.appOperations.setConnected({
                  isConnected: false
                }));

              case 4:
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 6]]);
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
    }
  }, {
    key: "$requires",
    get: function get() {
      return ["getState", "dispatch"];
    }
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

/***/ "yh8l":
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 11h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zm-13.869.143V13.2h3.504c-.175.857-1.051 2.571-3.504 2.571A3.771 3.771 0 0 1 4.365 12a3.771 3.771 0 0 1 3.766-3.771c1.227 0 2.015.514 2.453.942l1.664-1.542C11.198 6.6 9.796 6 8.131 6 4.715 6 2 8.657 2 12s2.715 6 6.131 6C11.635 18 14 15.6 14 12.171c0-.428 0-.685-.088-1.028h-5.78z\"></path></svg>"

/***/ }),

/***/ "ynsX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "z+7x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGoogleMapsKey = exports.setStatus = exports.setCsrf = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var types = _interopRequireWildcard(__webpack_require__("+z5V"));

var setCsrf = function setCsrf(_ref) {
  var csrf = _ref.csrf;
  return {
    type: types.SET_CSRF,
    csrf: csrf
  };
};

exports.setCsrf = setCsrf;

var setStatus = function setStatus(status) {
  return (0, _objectSpread2.default)({
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

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "zmJW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Map");

/***/ }),

/***/ "zqzL":
/***/ (function(module, exports) {

module.exports = require("jss-extend");

/***/ }),

/***/ "zwQV":
/***/ (function(module, exports) {

module.exports = require("base64util");

/***/ })

/******/ });