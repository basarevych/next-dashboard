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
/******/ 	return __webpack_require__(__webpack_require__.s = "44fc");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "+Pi7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRelay = __webpack_require__("iuEU");

var _StatContainer = _interopRequireDefault(__webpack_require__("8xuZ"));

var ProfitStat = (0, _reactRelay.createFragmentContainer)(_StatContainer.default, {
  data: function data() {
    return __webpack_require__("4lmM");
  }
});
var _default = ProfitStat;
exports.default = _default;

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
 * @relayHash 95535901148ba064862dd4c92398112c
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
      "variableName": "input",
      "type": "CreateEmployeeInput!"
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

/***/ "07Y+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 9e4b3d48c1e718853e89dc742f6bb7ad
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
      "variableName": "input",
      "type": "DeleteEmployeeInput!"
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

/***/ "0Yqw":
/***/ (function(module, exports) {

module.exports = require("relay-query-lookup-renderer");

/***/ }),

/***/ "0bJo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
type DemoItemContainer_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DemoListContainer_viewer$ref: FragmentReference;
export type DemoListContainer_viewer = {|
  +employees: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +$fragmentRefs: DemoItemContainer_node$ref,
      |},
    |}>,
    +pageInfo: {|
      +startCursor: ?string,
      +endCursor: ?string,
    |},
    +totalCount: ?number,
  |},
  +$refType: DemoListContainer_viewer$ref,
|};
*/

var node
/*: ReaderFragment*/
= {
  "kind": "Fragment",
  "name": "DemoListContainer_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [{
    "kind": "LocalArgument",
    "name": "dept",
    "type": "EmployeeDept",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "sortBy",
    "type": "EmployeeSortBy",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "sortDir",
    "type": "EmployeeSortDir",
    "defaultValue": null
  }, {
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
    "name": "employees",
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
      "name": "dept",
      "variableName": "dept",
      "type": "EmployeeDept"
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
    }, {
      "kind": "Variable",
      "name": "sortBy",
      "variableName": "sortBy",
      "type": "EmployeeSortBy"
    }, {
      "kind": "Variable",
      "name": "sortDir",
      "variableName": "sortDir",
      "type": "EmployeeSortDir"
    }],
    "concreteType": "EmployeeConnection",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "EmployeeEdge",
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
        "concreteType": "Employee",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "FragmentSpread",
          "name": "DemoItemContainer_node",
          "args": null
        }]
      }]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "pageInfo",
      "storageKey": null,
      "args": null,
      "concreteType": "PageInfo",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "startCursor",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "endCursor",
        "args": null,
        "storageKey": null
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
.hash = 'bc9f025d4edc58fa2cdbbb87e4ec613e';
module.exports = node;

/***/ }),

/***/ "19SY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _WorldMap = _interopRequireWildcard(__webpack_require__("nMfB"));

var WorldMap = (0, _styles.withStyles)(_WorldMap.styles, {
  withTheme: true
})((0, _reactIntl.injectIntl)(_WorldMap.default));
var _default = WorldMap;
exports.default = _default;

/***/ }),

/***/ "1S23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 5e890b96f60ffa169e5a9c25cea10539
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
      "variableName": "input",
      "type": "EditEmployeeInput!"
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
 * @relayHash bf496e45f968cf9673a5cc5b4c96bce2
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

/***/ "30mr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "44fc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u9iw");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4SgA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.query = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactRelay = __webpack_require__("iuEU");

var _Relay = __webpack_require__("JyB7");

var _DashboardContainer = _interopRequireWildcard(__webpack_require__("GYkG"));

var defaultVariables = {
  country: _DashboardContainer.defaultCountry,
  dept: _DashboardContainer.defaultDept,
  first: _DashboardContainer.pageSize,
  sortBy: _DashboardContainer.sortBy,
  sortDir: _DashboardContainer.sortDir
};

var query = function query() {
  return __webpack_require__("vsef");
};

exports.query = query;

var DashboardPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DashboardPage, _React$Component);

  function DashboardPage() {
    (0, _classCallCheck2.default)(this, DashboardPage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DashboardPage).apply(this, arguments));
  }

  (0, _createClass2.default)(DashboardPage, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Relay.NextQueryRenderer, {
        query: query,
        variables: defaultVariables,
        render: function render(_ref) {
          var error = _ref.error,
              props = _ref.props;
          if (error || !props) return null;
          return _react.default.createElement(_DashboardContainer.default, {
            viewer: props.viewer
          });
        }
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref2) {
        var statusCode, fetchQuery;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                statusCode = _ref2.statusCode, fetchQuery = _ref2.fetchQuery;

                if (!(statusCode === 200)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return fetchQuery(query, defaultVariables);

              case 4:
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
  return DashboardPage;
}(_react.default.Component);

var _default = DashboardPage;
exports.default = _default;

/***/ }),

/***/ "4lmM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProfitStatContainer_data$ref: FragmentReference;
export type ProfitStatContainer_data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +date: any,
      +value: number,
    |}
  |}>,
  +$refType: ProfitStatContainer_data$ref,
|};
*/

var node
/*: ReaderFragment*/
= {
  "kind": "Fragment",
  "name": "ProfitStatContainer_data",
  "type": "ProfitValueConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "ProfitValueEdge",
    "plural": true,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "ProfitValue",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "date",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": "value",
        "name": "profit",
        "args": null,
        "storageKey": null
      }]
    }]
  }]
}; // prettier-ignore

node
/*: any*/
.hash = '7db74ca7e91409fc43cd9eb186b0d09f';
module.exports = node;

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

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

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "6u3M":
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

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactVirtualized = __webpack_require__("xvxd");

var _CircularProgress = _interopRequireDefault(__webpack_require__("1imS"));

var styles = function styles(theme) {
  return {
    root: {
      width: "100%",
      position: "absolute"
    },
    spinnerWrapper: {
      position: "absolute"
    },
    spinner: {
      position: "absolute",
      width: 60,
      height: 60,
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)",
      color: theme.main.color
    }
  };
};

exports.styles = styles;

var MarketSpinner =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MarketSpinner, _React$Component);

  function MarketSpinner() {
    (0, _classCallCheck2.default)(this, MarketSpinner);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MarketSpinner).apply(this, arguments));
  }

  (0, _createClass2.default)(MarketSpinner, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement("div", {
        className: this.props.classes.root
      }, _react.default.createElement(_reactVirtualized.AutoSizer, {
        disableHeight: true
      }, function (_ref) {
        var width = _ref.width;
        if (!width || !_this.props.isActive) return null;
        return _react.default.createElement("div", {
          className: _this.props.classes.spinnerWrapper,
          style: {
            width: width,
            height: width
          }
        }, _react.default.createElement("div", {
          className: _this.props.classes.spinner
        }, _react.default.createElement(_CircularProgress.default, {
          color: "inherit",
          size: 60
        })));
      }));
    }
  }]);
  return MarketSpinner;
}(_react.default.Component);

var _default = MarketSpinner;
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

/***/ "8+Nu":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("8bdy");

var iterableToArrayLimit = __webpack_require__("fprZ");

var nonIterableRest = __webpack_require__("Bh1o");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

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

/***/ "8bdy":
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__("p0XB");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "8s86":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DemoItemContainer_node$ref: FragmentReference;
export type DemoItemContainer_node = {|
  +id: string,
  +uid: string,
  +checked: boolean,
  +name: string,
  +title: string,
  +country: {|
    +id: string,
    +name: string,
  |},
  +salary: number,
  +$refType: DemoItemContainer_node$ref,
|};
*/

var node
/*: ReaderFragment*/
= function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "DemoItemContainer_node",
    "type": "Employee",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [v0
    /*: any*/
    , {
      "kind": "ScalarField",
      "alias": null,
      "name": "uid",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "checked",
      "args": null,
      "storageKey": null
    }, v1
    /*: any*/
    , {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "country",
      "storageKey": null,
      "args": null,
      "concreteType": "Country",
      "plural": false,
      "selections": [v0
      /*: any*/
      , v1
      /*: any*/
      ]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "salary",
      "args": null,
      "storageKey": null
    }]
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '2c78cd51b1270a58f66e341c5e768b57';
module.exports = node;

/***/ }),

/***/ "8xuZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _Stat = _interopRequireWildcard(__webpack_require__("Le1x"));

var Stat = (0, _styles.withStyles)(_Stat.styles, {
  withTheme: true
})((0, _reactIntl.injectIntl)(_Stat.default));
var _default = Stat;
exports.default = _default;

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AV/6":
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ }),

/***/ "Ai9N":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

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

/***/ "B5gx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MarketShareContainer_viewer$ref: FragmentReference;
export type MarketShareContainer_viewer = {|
  +marketSharesByCountry: ?{|
    +id: string,
    +country: ?{|
      +name: string
    |},
    +shares: $ReadOnlyArray<?{|
      +vendor: string,
      +name: string,
      +values: $ReadOnlyArray<?number>,
    |}>,
  |},
  +$refType: MarketShareContainer_viewer$ref,
|};
*/

var node
/*: ReaderFragment*/
= function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "MarketShareContainer_viewer",
    "type": "Viewer",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "country",
      "type": "ID",
      "defaultValue": null
    }],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "marketSharesByCountry",
      "storageKey": null,
      "args": [{
        "kind": "Variable",
        "name": "country",
        "variableName": "country",
        "type": "ID"
      }],
      "concreteType": "MarketShare",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "country",
        "storageKey": null,
        "args": null,
        "concreteType": "Country",
        "plural": false,
        "selections": [v0
        /*: any*/
        ]
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "shares",
        "storageKey": null,
        "args": null,
        "concreteType": "MarketShareValue",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "vendor",
          "args": null,
          "storageKey": null
        }, v0
        /*: any*/
        , {
          "kind": "ScalarField",
          "alias": null,
          "name": "values",
          "args": null,
          "storageKey": null
        }]
      }]
    }]
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '1d66f4f648933aa7587e7bdb10a6efcc';
module.exports = node;

/***/ }),

/***/ "BMWC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ClientsStatContainer_data$ref: FragmentReference;
export type ClientsStatContainer_data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +date: any,
      +value: number,
    |}
  |}>,
  +$refType: ClientsStatContainer_data$ref,
|};
*/

var node
/*: ReaderFragment*/
= {
  "kind": "Fragment",
  "name": "ClientsStatContainer_data",
  "type": "ClientsValueConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "ClientsValueEdge",
    "plural": true,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "ClientsValue",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "date",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": "value",
        "name": "clients",
        "args": null,
        "storageKey": null
      }]
    }]
  }]
}; // prettier-ignore

node
/*: any*/
.hash = 'bbe164386ede175423c40a2a9334906c';
module.exports = node;

/***/ }),

/***/ "Bh1o":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "BjFw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "BkaX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRelay = __webpack_require__("iuEU");

var _StatContainer = _interopRequireDefault(__webpack_require__("8xuZ"));

var AvgTimeStat = (0, _reactRelay.createFragmentContainer)(_StatContainer.default, {
  data: function data() {
    return __webpack_require__("WfD6");
  }
});
var _default = AvgTimeStat;
exports.default = _default;

/***/ }),

/***/ "BlHF":
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),

/***/ "CW2C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRelay = __webpack_require__("iuEU");

var _StatContainer = _interopRequireDefault(__webpack_require__("8xuZ"));

var SalesStat = (0, _reactRelay.createFragmentContainer)(_StatContainer.default, {
  data: function data() {
    return __webpack_require__("bvoX");
  }
});
var _default = SalesStat;
exports.default = _default;

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "Cxfq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 91dce655f4047d7107980eb75b5c6a83
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

/***/ "Dpyv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 67c7b5aabc01c2dcc8ac427c7b8e802e
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MarketShareContainer_viewer$ref = any;
export type MarketShareContainerQueryVariables = {|
  country?: ?string
|};
export type MarketShareContainerQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: MarketShareContainer_viewer$ref
  |}
|};
export type MarketShareContainerQuery = {|
  variables: MarketShareContainerQueryVariables,
  response: MarketShareContainerQueryResponse,
|};
*/

/*
query MarketShareContainerQuery(
  $country: ID
) {
  viewer {
    ...MarketShareContainer_viewer_1vRKRZ
  }
}

fragment MarketShareContainer_viewer_1vRKRZ on Viewer {
  marketSharesByCountry(country: $country) {
    id
    country {
      name
      id
    }
    shares {
      vendor
      name
      values
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
    "name": "country",
    "type": "ID",
    "defaultValue": null
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "MarketShareContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
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
          "name": "MarketShareContainer_viewer",
          "args": [{
            "kind": "Variable",
            "name": "country",
            "variableName": "country",
            "type": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "MarketShareContainerQuery",
      "argumentDefinitions": v0
      /*: any*/
      ,
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
          "name": "marketSharesByCountry",
          "storageKey": null,
          "args": [{
            "kind": "Variable",
            "name": "country",
            "variableName": "country",
            "type": "ID"
          }],
          "concreteType": "MarketShare",
          "plural": false,
          "selections": [v1
          /*: any*/
          , {
            "kind": "LinkedField",
            "alias": null,
            "name": "country",
            "storageKey": null,
            "args": null,
            "concreteType": "Country",
            "plural": false,
            "selections": [v2
            /*: any*/
            , v1
            /*: any*/
            ]
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "shares",
            "storageKey": null,
            "args": null,
            "concreteType": "MarketShareValue",
            "plural": true,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "vendor",
              "args": null,
              "storageKey": null
            }, v2
            /*: any*/
            , {
              "kind": "ScalarField",
              "alias": null,
              "name": "values",
              "args": null,
              "storageKey": null
            }, v1
            /*: any*/
            ]
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
    },
    "params": {
      "operationKind": "query",
      "name": "MarketShareContainerQuery",
      "id": null,
      "text": "query MarketShareContainerQuery(\n  $country: ID\n) {\n  viewer {\n    ...MarketShareContainer_viewer_1vRKRZ\n  }\n}\n\nfragment MarketShareContainer_viewer_1vRKRZ on Viewer {\n  marketSharesByCountry(country: $country) {\n    id\n    country {\n      name\n      id\n    }\n    shares {\n      vendor\n      name\n      values\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '855249396793496836a79fac35a348b0';
module.exports = node;

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

/***/ "GJn5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("8+Nu"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _reactVirtualized = __webpack_require__("xvxd");

var _victory = __webpack_require__("wL32");

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _colors = __webpack_require__("I2ft");

var styles = function styles() {
  return {
    root: {
      padding: "1rem",
      textAlign: "center"
    }
  };
};

exports.styles = styles;

var MarketShare =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MarketShare, _React$Component);

  function MarketShare() {
    (0, _classCallCheck2.default)(this, MarketShare);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MarketShare).apply(this, arguments));
  }

  (0, _createClass2.default)(MarketShare, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this = this;

      if (prevProps.selected !== this.props.selected) {
        this.props.relay.refetch({
          country: this.props.selected
        }, null, function () {
          return _this.props.onLoaded();
        }, {
          force: true
        });
      }
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Typography.default, {
        variant: "h4",
        color: "inherit"
      }, _.get(this.props.viewer, "marketSharesByCountry.country") === null ? this.props.intl.formatMessage({
        id: "DASHBOARD_WORLD_LABEL"
      }) : _.get(this.props.viewer, "marketSharesByCountry.country.name")), _react.default.createElement(_Typography.default, {
        variant: "body2",
        color: "inherit"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "DASHBOARD_NOT_REALLY_LABEL"
      })));
    }
  }, {
    key: "renderChart",
    value: function renderChart(width, height) {
      var _this2 = this;

      var shares = _.get(this.props.viewer, "marketSharesByCountry.shares", []);

      if (!shares.length) return null;
      return _react.default.createElement("svg", {
        width: width,
        height: height
      }, _react.default.createElement("defs", null, _.map([0, 1, 2, 3], function (index) {
        var _getColorStart = (0, _colors.getColorStart)(index, 4),
            _getColorStart2 = (0, _slicedToArray2.default)(_getColorStart, 3),
            r1 = _getColorStart2[0],
            g1 = _getColorStart2[1],
            b1 = _getColorStart2[2];

        var _getColorEnd = (0, _colors.getColorEnd)(index, 4),
            _getColorEnd2 = (0, _slicedToArray2.default)(_getColorEnd, 3),
            r2 = _getColorEnd2[0],
            g2 = _getColorEnd2[1],
            b2 = _getColorEnd2[2];

        return _react.default.createElement("linearGradient", {
          key: "gradient-".concat(index),
          id: "worldPieGradient".concat(index + 1),
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%"
        }, _react.default.createElement("stop", {
          offset: "0%",
          stopColor: "rgb(".concat(r1, ", ").concat(g1, ", ").concat(b1, ")")
        }), _react.default.createElement("stop", {
          offset: "100%",
          stopColor: "rgb(".concat(r2, ", ").concat(g2, ", ").concat(b2, ")")
        }));
      })), _react.default.createElement(_victory.VictoryChart, {
        width: width,
        height: height,
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 50
        },
        standalone: false,
        containerComponent: _react.default.createElement(_victory.VictoryContainer, {
          responsive: false
        }),
        polar: true,
        events: [{
          childName: "all",
          eventHandlers: {
            onClick: function onClick() {
              return _this2.props.onSelect("WORLD");
            }
          }
        }],
        theme: _.merge({}, _victory.VictoryTheme.material, {
          axis: {
            style: {
              axis: {
                display: "none"
              },
              ticks: {
                display: "none"
              },
              tickLabels: {
                display: "none"
              },
              grid: {
                display: "none"
              }
            }
          },
          legend: {
            colorScale: ["url(#worldPieGradient1)", "url(#worldPieGradient2)", "url(#worldPieGradient3)", "url(#worldPieGradient4)"],
            style: {
              labels: {
                fill: this.props.theme.main.color
              }
            }
          },
          stack: {
            colorScale: ["url(#worldPieGradient1)", "url(#worldPieGradient2)", "url(#worldPieGradient3)", "url(#worldPieGradient4)"],
            style: {
              labels: {
                fill: this.props.theme.main.color
              }
            }
          }
        })
      }, _react.default.createElement(_victory.VictoryAxis, null), _react.default.createElement(_victory.VictoryStack, {
        labels: function labels(d) {
          return d.vendor;
        }
      }, _.map([0, 1, 2, 3], function (index) {
        return _react.default.createElement(_victory.VictoryBar, {
          key: "bar-".concat(index),
          data: shares,
          x: "name",
          y: function y(d) {
            return d.values[index];
          }
        });
      })), _react.default.createElement(_victory.VictoryLegend, {
        orientation: "vertical",
        gutter: 20,
        data: [{
          name: "Q1"
        }, {
          name: "Q2"
        }, {
          name: "Q3"
        }, {
          name: "Q4"
        }]
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.classes.root,
        style: this.props.style
      }, this.renderTitle(), _react.default.createElement("div", null, _react.default.createElement(_reactVirtualized.AutoSizer, {
        disableHeight: true
      }, function (_ref) {
        var width = _ref.width;
        return !!width && _this3.renderChart(width, width);
      })));
    }
  }]);
  return MarketShare;
}(_react.default.Component);

var _default = MarketShare;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "GKS8":
/***/ (function(module, exports) {

module.exports = require("country-iso-3-to-2");

/***/ }),

/***/ "GYkG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "defaultCountry", {
  enumerable: true,
  get: function get() {
    return _Dashboard.defaultCountry;
  }
});
Object.defineProperty(exports, "defaultDept", {
  enumerable: true,
  get: function get() {
    return _Dashboard.defaultDept;
  }
});
Object.defineProperty(exports, "pageSize", {
  enumerable: true,
  get: function get() {
    return _Dashboard.pageSize;
  }
});
Object.defineProperty(exports, "sortBy", {
  enumerable: true,
  get: function get() {
    return _Dashboard.sortBy;
  }
});
Object.defineProperty(exports, "sortDir", {
  enumerable: true,
  get: function get() {
    return _Dashboard.sortDir;
  }
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _Dashboard = _interopRequireWildcard(__webpack_require__("jDsb"));

var Dashboard = (0, _styles.withStyles)(_Dashboard.styles, {
  withTheme: true
})(_Dashboard.default);
var _default = Dashboard;
exports.default = _default;

/***/ }),

/***/ "HSb4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return (
    /* theme */
    {
      "& table": {
        display: ["block", "!important"]
      },
      "& thead": {
        display: ["block", "!important"]
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
        marginTop: ["0.25rem", "!important"],
        marginBottom: ["0.25rem", "!important"]
      }
    }
  );
};

exports.default = _default;

/***/ }),

/***/ "I1Aa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pageSize", {
  enumerable: true,
  get: function get() {
    return _DemoListContainer.pageSize;
  }
});
Object.defineProperty(exports, "sortBy", {
  enumerable: true,
  get: function get() {
    return _DemoListContainer.sortBy;
  }
});
Object.defineProperty(exports, "sortDir", {
  enumerable: true,
  get: function get() {
    return _DemoListContainer.sortDir;
  }
});
exports.default = exports.defaultDept = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _reactVirtualized = __webpack_require__("xvxd");

var _AppBar = _interopRequireDefault(__webpack_require__("4151"));

var _Tabs = _interopRequireDefault(__webpack_require__("SJC6"));

var _Tab = _interopRequireDefault(__webpack_require__("6Yxu"));

var _DemoListContainer = _interopRequireWildcard(__webpack_require__("kUfH"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var defaultDept = _.values(_constants.default.depts)[0];

exports.defaultDept = defaultDept;

var DemoTable =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DemoTable, _React$Component);

  function DemoTable(props) {
    var _this;

    (0, _classCallCheck2.default)(this, DemoTable);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DemoTable).call(this, props));
    _this.depts = _.values(_constants.default.depts);
    _this.state = {
      index: _.indexOf(_this.depts, defaultDept)
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(DemoTable, [{
    key: "handleChange",
    value: function handleChange(event, index) {
      this.setState({
        index: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_reactVirtualized.AutoSizer, {
        disableHeight: true
      }, function (_ref) {
        var width = _ref.width;
        return _react.default.createElement("div", {
          style: {
            width: width
          }
        }, _react.default.createElement(_AppBar.default, {
          position: "static"
        }, _react.default.createElement(_Tabs.default, {
          variant: "scrollable",
          scrollButtons: "auto",
          value: _this2.state.index,
          onChange: _this2.handleChange
        }, _.map(_this2.depts, function (dept) {
          return _react.default.createElement(_Tab.default, {
            key: "tab-".concat(dept),
            label: _this2.props.intl.formatMessage({
              id: "DEPT_".concat(dept)
            })
          });
        }))), _react.default.createElement(_DemoListContainer.default, {
          dept: _this2.depts[_this2.state.index],
          viewer: _this2.props.viewer
        }));
      });
    }
  }]);
  return DemoTable;
}(_react.default.Component);

var _default = DemoTable;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "I2ft":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function getColorStart(index, length) {
  return hslToRgb(index / length, 0.65, 0.7);
}

function getColorEnd(index, length) {
  return hslToRgb(index / length, 0.65, 0.4);
}

function getColorAverage(index, length) {
  return hslToRgb(index / length, 0.65, 0.55);
}

module.exports = {
  hueToRgb: hueToRgb,
  hslToRgb: hslToRgb,
  getColorStart: getColorStart,
  getColorEnd: getColorEnd,
  getColorAverage: getColorAverage
};

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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KUZr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "styles", {
  enumerable: true,
  get: function get() {
    return _DemoItem.styles;
  }
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _styles = __webpack_require__("9Pu4");

var _reactRelay = __webpack_require__("iuEU");

var _state = __webpack_require__("ZKx5");

var _DemoItem = _interopRequireWildcard(__webpack_require__("WUkW"));

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSwitch: function onSwitch(id, checked) {
      return dispatch(_state.employeesOperations.edit({
        id: id,
        checked: checked
      }));
    }
  };
};

var DemoItem = (0, _reactRelay.createFragmentContainer)((0, _styles.withStyles)(_DemoItem.styles)((0, _reactRedux.connect)(null, mapDispatchToProps)(_DemoItem.default)), {
  node: function node() {
    return __webpack_require__("8s86");
  }
});
var _default = DemoItem;
exports.default = _default;

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

/***/ "Le1x":
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

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _classnames = _interopRequireDefault(__webpack_require__("K2gz"));

var _reactIntl = __webpack_require__("k004");

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var _colorManipulator = __webpack_require__("oOPP");

var _green = _interopRequireDefault(__webpack_require__("Zo8Y"));

var _red = _interopRequireDefault(__webpack_require__("RpH3"));

var _Chart = _interopRequireDefault(__webpack_require__("ZfZm"));

var styles = function styles(theme) {
  return {
    root: {
      color: theme.chart.statColor,
      borderRadius: theme.shape.borderRadius,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      position: "relative",
      "& svg": {
        overflow: ["visible", "!important"]
      }
    },
    delta: {
      position: "absolute",
      top: 0,
      right: 0,
      borderTopRightRadius: 3,
      borderBottomLeftRadius: 3,
      padding: "0.25rem 0.5rem"
    },
    stat: {
      padding: "1rem",
      width: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    increasing: {
      color: "#ffffff",
      background: (0, _colorManipulator.fade)(_green.default[800], 0.65)
    },
    descreasing: {
      color: "#ffffff",
      background: (0, _colorManipulator.fade)(_red.default[800], 0.65)
    },
    chart: {
      marginTop: "-1rem"
    }
  };
};

exports.styles = styles;

var Stat =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Stat, _React$Component);

  function Stat() {
    (0, _classCallCheck2.default)(this, Stat);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Stat).apply(this, arguments));
  }

  (0, _createClass2.default)(Stat, [{
    key: "getData",
    value: function getData() {
      var _this = this;

      return _.map(_.get(this.props.data, "edges", []), function (edge) {
        var date = new Date(_.get(edge, "node.date"));

        var value = _.get(edge, "node.value");

        return {
          date: date,
          value: value,
          tooltip: _this.props.intl.formatMessage({
            id: _this.props.label
          }) + ": " + value + "\n" + _this.props.intl.formatDate(date)
        };
      });
    }
  }, {
    key: "renderStat",
    value: function renderStat() {
      return _react.default.createElement("div", {
        className: this.props.classes.stat
      }, _react.default.createElement(_Typography.default, {
        variant: "h3",
        color: "inherit"
      }, _react.default.createElement(_reactIntl.FormattedNumber, {
        value: _.last(this.getData()).value,
        maximumFractionDigits: this.props.precision
      })), _react.default.createElement(_Typography.default, {
        variant: "overline",
        color: "inherit"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: this.props.label
      })));
    }
  }, {
    key: "renderDelta",
    value: function renderDelta() {
      var items = _.slice(this.getData(), -2);

      if (items.length !== 2) return null;
      var delta = 100 * (items[1].value - items[0].value) / items[0].value;
      var symbol = delta > 0 ? "▲" : delta < 0 ? "▼" : "";
      var className = delta > 0 ? "increasing" : delta < 0 ? "descreasing" : null;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(this.props.classes.delta, className && this.props.classes[className])
      }, symbol, _react.default.createElement(_reactIntl.FormattedNumber, {
        value: Math.abs(delta),
        maximumFractionDigits: 0
      }), "%");
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_Paper.default, {
        className: this.props.classes.root
      }, this.renderDelta(), this.renderStat(), _react.default.createElement(_Chart.default, {
        className: this.props.classes.chart,
        data: this.getData(),
        colors: {
          grid: (0, _colorManipulator.fade)(this.props.theme.palette.text.secondary, 0.25),
          area: this.props.theme.chart.areaColor,
          line: this.props.theme.chart.lineColor
        }
      }));
    }
  }]);
  return Stat;
}(_react.default.Component);

(0, _defineProperty2.default)(Stat, "defaultProps", {
  precision: 0
});
var _default = Stat;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "MrYO":
/***/ (function(module, exports) {

module.exports = require("final-form");

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
 * @relayHash d3387ba72848f4453d696998e0552f0e
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

/***/ "Q28+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _reactRelay = __webpack_require__("iuEU");

var _MarketShare = _interopRequireWildcard(__webpack_require__("GJn5"));

var MarketShare = (0, _reactRelay.createRefetchContainer)((0, _styles.withStyles)(_MarketShare.styles, {
  withTheme: true
})((0, _reactIntl.injectIntl)(_MarketShare.default)), {
  viewer: function viewer() {
    return __webpack_require__("B5gx");
  }
}, function () {
  return __webpack_require__("Dpyv");
});
var _default = MarketShare;
exports.default = _default;

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
 * @relayHash 865cce8ddb297161c467f77194d19177
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

/***/ "RpH3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TAfE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRelay = __webpack_require__("iuEU");

var _StatContainer = _interopRequireDefault(__webpack_require__("8xuZ"));

var ClientsStat = (0, _reactRelay.createFragmentContainer)(_StatContainer.default, {
  data: function data() {
    return __webpack_require__("BMWC");
  }
});
var _default = ClientsStat;
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

/***/ "TWtx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

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
 * @relayHash 55cd4805567f2175bc5cc8956bd83584
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

/***/ "WUkW":
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

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _TableCell = _interopRequireDefault(__webpack_require__("Ai9N"));

var _TableRow = _interopRequireDefault(__webpack_require__("iDDF"));

var _Switch = _interopRequireDefault(__webpack_require__("lOiU"));

var styles = function styles() {
  return {
    checkboxField: {
      width: 1,
      whiteSpace: "pre"
    }
  };
};

exports.styles = styles;

var DemoItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DemoItem, _React$Component);

  function DemoItem() {
    (0, _classCallCheck2.default)(this, DemoItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DemoItem).apply(this, arguments));
  }

  (0, _createClass2.default)(DemoItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, {
        padding: "checkbox",
        component: "th",
        scope: "row",
        classes: {
          root: this.props.classes.checkboxField
        }
      }, this.props.node.uid, _react.default.createElement(_Switch.default, {
        checked: this.props.node.checked,
        onChange: function onChange(evt, checked) {
          return _this.props.onSwitch(_this.props.node.id, checked);
        },
        value: "on",
        color: "default"
      })), _react.default.createElement(_TableCell.default, null, this.props.node.name), _react.default.createElement(_TableCell.default, null, this.props.node.title), _react.default.createElement(_TableCell.default, null, this.props.node.country.name), _react.default.createElement(_TableCell.default, null, _react.default.createElement(_reactIntl.FormattedNumber, {
        value: this.props.node.salary
      })));
    }
  }]);
  return DemoItem;
}(_react.default.Component);

var _default = DemoItem;
exports.default = _default;

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

/***/ "WfD6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AvgTimeStatContainer_data$ref: FragmentReference;
export type AvgTimeStatContainer_data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +date: any,
      +value: number,
    |}
  |}>,
  +$refType: AvgTimeStatContainer_data$ref,
|};
*/

var node
/*: ReaderFragment*/
= {
  "kind": "Fragment",
  "name": "AvgTimeStatContainer_data",
  "type": "AvgTimeValueConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "AvgTimeValueEdge",
    "plural": true,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "AvgTimeValue",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "date",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": "value",
        "name": "avgTime",
        "args": null,
        "storageKey": null
      }]
    }]
  }]
}; // prettier-ignore

node
/*: any*/
.hash = '3fe0c3d474aa96c02c0e24295b991aef';
module.exports = node;

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

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "ZfZm":
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

var _reactVirtualized = __webpack_require__("xvxd");

var _victory = __webpack_require__("wL32");

var _Hidden = _interopRequireDefault(__webpack_require__("Y8uC"));

var Chart =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Chart, _React$Component);

  function Chart() {
    (0, _classCallCheck2.default)(this, Chart);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Chart).apply(this, arguments));
  }

  (0, _createClass2.default)(Chart, [{
    key: "renderChart",
    value: function renderChart(isMobile, width, height) {
      var chartContainer = isMobile ? _react.default.createElement(_victory.VictoryContainer, {
        responsive: false
      }) : _react.default.createElement(_victory.VictoryVoronoiContainer, {
        responsive: false,
        voronoiDimension: "x",
        voronoiBlacklist: ["line"],
        labels: function labels(d) {
          return d.tooltip;
        },
        labelComponent: _react.default.createElement(_victory.VictoryTooltip, {
          renderInPortal: true,
          orientation: "left"
        })
      });

      var chart = _react.default.createElement(_victory.VictoryChart, {
        width: width,
        height: height,
        padding: 0,
        domainPadding: {
          x: 0,
          y: 5
        },
        standalone: !isMobile,
        containerComponent: chartContainer
      }, _react.default.createElement(_victory.VictoryAxis, {
        dependentAxis: true,
        orientation: "left",
        style: {
          axis: {
            display: "none"
          },
          ticks: {
            display: "none"
          },
          tickLabels: {
            display: "none"
          },
          grid: {
            stroke: this.props.colors.grid,
            strokeWidth: 0.75
          }
        }
      }), _react.default.createElement(_victory.VictoryArea, {
        name: "line",
        data: this.props.data,
        interpolation: "monotoneX",
        x: "date",
        y: "value",
        style: {
          data: {
            fill: this.props.colors.area,
            stroke: this.props.colors.line,
            strokeWidth: 2
          }
        }
      }), _react.default.createElement(_victory.VictoryScatter, {
        name: "scatter",
        data: this.props.data,
        size: 3,
        x: "date",
        y: "value",
        style: {
          data: {
            fill: this.props.colors.line
          }
        }
      }));

      if (isMobile) {
        return _react.default.createElement("svg", {
          width: width,
          height: height
        }, chart);
      }

      return chart;
    }
  }, {
    key: "renderRoot",
    value: function renderRoot(isMobile) {
      var _this = this;

      return _react.default.createElement("div", {
        className: this.props.className
      }, _react.default.createElement(_reactVirtualized.AutoSizer, {
        disableHeight: true
      }, function (_ref) {
        var width = _ref.width;
        return !!width && _this.renderChart(isMobile, width, 0.3 * width);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Hidden.default, {
        smDown: true,
        initialWidth: "lg"
      }, this.renderRoot(false)), _react.default.createElement(_Hidden.default, {
        mdUp: true,
        initialWidth: "lg"
      }, this.renderRoot(true)));
    }
  }]);
  return Chart;
}(_react.default.Component);

var _default = Chart;
exports.default = _default;

/***/ }),

/***/ "Zo8Y":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

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

/***/ "bI0k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash b3d131657f448bf72df3943686145f46
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

/***/ "bvoX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SalesStatContainer_data$ref: FragmentReference;
export type SalesStatContainer_data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +date: any,
      +value: number,
    |}
  |}>,
  +$refType: SalesStatContainer_data$ref,
|};
*/

var node
/*: ReaderFragment*/
= {
  "kind": "Fragment",
  "name": "SalesStatContainer_data",
  "type": "SalesValueConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "SalesValueEdge",
    "plural": true,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "SalesValue",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "date",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": "value",
        "name": "sales",
        "args": null,
        "storageKey": null
      }]
    }]
  }]
}; // prettier-ignore

node
/*: any*/
.hash = '71d23134552b169b766e1af58ad071ce';
module.exports = node;

/***/ }),

/***/ "bzUq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

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

/***/ "fGOC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _MarketSpinner = _interopRequireWildcard(__webpack_require__("6u3M"));

var MarketSpinner = (0, _styles.withStyles)(_MarketSpinner.styles)(_MarketSpinner.default);
var _default = MarketSpinner;
exports.default = _default;

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

/***/ "fmY8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 19a8773c357350f57096b9b14457cc04
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

/***/ "fprZ":
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__("XXOK");

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "gH/O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 85534521975a37eb774243e6f76492d3
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

/***/ "hN1G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = exports.sortDir = exports.sortBy = exports.pageSize = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _reactRelay = __webpack_require__("iuEU");

var _Table = _interopRequireDefault(__webpack_require__("BjFw"));

var _TableBody = _interopRequireDefault(__webpack_require__("30mr"));

var _TableCell = _interopRequireDefault(__webpack_require__("Ai9N"));

var _TableHead = _interopRequireDefault(__webpack_require__("TWtx"));

var _TableRow = _interopRequireDefault(__webpack_require__("iDDF"));

var _TablePagination = _interopRequireDefault(__webpack_require__("bzUq"));

var _TableSortLabel = _interopRequireDefault(__webpack_require__("jOOh"));

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _colorManipulator = __webpack_require__("oOPP");

var _responsiveTable = _interopRequireDefault(__webpack_require__("HSb4"));

var _DemoItemContainer = _interopRequireWildcard(__webpack_require__("KUZr"));

var _Relay = __webpack_require__("JyB7");

var pageSize = 5;
exports.pageSize = pageSize;
var sortBy = "uid";
exports.sortBy = sortBy;
var sortDir = "asc";
exports.sortDir = sortDir;

var styles = function styles(theme) {
  return (0, _objectSpread2.default)({
    message: (0, _defineProperty2.default)({
      background: (0, _colorManipulator.lighten)(theme.palette.background.paper, 0.1),
      width: "100%",
      marginTop: "-2rem",
      display: "flex",
      justifyContent: "stretch",
      alignItems: "center"
    }, theme.breakpoints.down("sm"), {
      flexDirection: "column"
    }),
    messageTitle: {
      fontSize: 26,
      margin: "3rem 3rem 1rem 3rem"
    },
    messageContent: {
      flex: 1,
      maxWidth: "600px",
      margin: "3rem 1rem 1rem 1rem"
    },
    layout: {
      width: "100%",
      flex: 1,
      padding: theme.main.spacing
    },
    buttons: {
      marginTop: "3rem",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignContent: "stretch"
    },
    button: {
      margin: "0.5rem"
    },
    table: (0, _defineProperty2.default)({}, theme.breakpoints.down("sm"), (0, _responsiveTable.default)(theme)),
    grow: {
      flex: 1
    }
  }, (0, _DemoItemContainer.styles)(theme));
};

exports.styles = styles;

var subscription = function subscription() {
  return __webpack_require__("ty8e");
};

var DemoList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DemoList, _React$Component);

  function DemoList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, DemoList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DemoList).call(this, props));
    _this.state = {
      pageSize: pageSize,
      pageNumber: 0,
      variables: {
        dept: props.dept,
        sortBy: sortBy,
        sortDir: sortDir,
        first: pageSize
      },
      isConfirmOpen: false
    };
    _this.handleRefreshAction = _this.handleRefreshAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChangePage = _this.handleChangePage.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChangeRowsPerPage = _this.handleChangeRowsPerPage.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(DemoList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unsubscribe = (0, _Relay.subscribe)({
        subscription: subscription,
        getToken: this.props.getToken,
        environment: this.context,
        callback: this.handleRefreshAction
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.state.variables.dept !== this.props.dept) {
        var variables = {
          dept: this.props.dept,
          sortBy: sortBy,
          sortDir: sortDir,
          first: this.state.pageSize
        };
        return setTimeout(function () {
          _this2.setState({
            pageNumber: 0,
            variables: variables
          }, function () {
            return _this2.props.relay.refetch(variables, null, null, {
              force: true
            });
          });
        });
      }

      var total = _.get(this.props.viewer, "employees.totalCount", 0);

      if (total && this.state.pageNumber * this.state.pageSize >= total) {
        // we fell off the list - reset to the beginning
        var _variables = {
          dept: this.state.variables.dept,
          sortBy: sortBy,
          sortDir: sortDir,
          first: this.state.pageSize
        };
        setTimeout(function () {
          _this2.setState({
            pageNumber: 0,
            variables: _variables
          }, function () {
            return _this2.props.relay.refetch(_variables, null, null, {
              force: true
            });
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
      }
    }
  }, {
    key: "handleRefreshAction",
    value: function handleRefreshAction() {
      this.props.relay.refetch(this.state.variables, null, null, {
        force: true
      });
    }
  }, {
    key: "handleSort",
    value: function handleSort(sortBy) {
      var _this3 = this;

      var sortDir = "asc";
      if (this.state.variables.sortBy === sortBy) sortDir = this.state.variables.sortDir === "asc" ? "desc" : "asc";
      var variables = {
        dept: this.state.variables.dept,
        sortBy: sortBy,
        sortDir: sortDir,
        first: this.state.pageSize
      };
      this.setState({
        pageNumber: 0,
        variables: variables
      }, function () {
        return _this3.props.relay.refetch(variables, null, null, {
          force: true
        });
      });
    }
  }, {
    key: "handleChangeRowsPerPage",
    value: function handleChangeRowsPerPage(evt) {
      var _this4 = this;

      var pageSize = evt.target.value;
      var variables = {
        dept: this.state.variables.dept,
        sortBy: this.state.variables.sortBy,
        sortDir: this.state.variables.sortDir,
        first: pageSize
      };
      this.setState({
        pageSize: pageSize,
        pageNumber: 0,
        variables: variables
      }, function () {
        return _this4.props.relay.refetch(variables, null, null, {
          force: true
        });
      });
    }
  }, {
    key: "handleChangePage",
    value: function handleChangePage(evt, pageNumber) {
      var _this5 = this;

      if (this.state.pageNumber === pageNumber) return;
      var variables = {
        dept: this.state.variables.dept,
        sortBy: this.state.variables.sortBy,
        sortDir: this.state.variables.sortDir
      };

      if (pageNumber === 0) {
        variables.first = this.state.pageSize;
      } else if (pageNumber > this.state.pageNumber) {
        if (pageNumber + 1 > Math.ceil(_.get(this.props.viewer, "employees.totalCount", 0) / this.state.pageSize)) {
          return;
        }

        variables.first = this.state.pageSize;
        variables.after = _.get(this.props.viewer, "employees.pageInfo.endCursor", null);
      } else {
        if (this.state.pageNumber <= 0) return;
        variables.last = this.state.pageSize;
        variables.before = _.get(this.props.viewer, "employees.pageInfo.startCursor", null);
      }

      this.setState({
        pageNumber: pageNumber,
        variables: variables
      }, function () {
        return _this5.props.relay.refetch(variables, null, null, {
          force: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.classes.paper
      }, _react.default.createElement(_Table.default, {
        padding: "dense",
        className: this.props.classes.table
      }, _react.default.createElement(_TableHead.default, null, _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, {
        padding: "checkbox",
        sortDirection: this.state.variables.sortBy === "uid" ? this.state.variables.sortDir : false
      }, _react.default.createElement(_TableSortLabel.default, {
        active: this.state.variables.sortBy === "uid",
        direction: this.state.variables.sortDir,
        onClick: function onClick() {
          return _this6.handleSort("uid");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_UID_COLUMN"
      }))), _react.default.createElement(_TableCell.default, {
        sortDirection: this.state.variables.sortBy === "name" ? this.state.variables.sortDir : false
      }, _react.default.createElement(_TableSortLabel.default, {
        active: this.state.variables.sortBy === "name",
        direction: this.state.variables.sortDir,
        onClick: function onClick() {
          return _this6.handleSort("name");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_NAME_COLUMN"
      }))), _react.default.createElement(_TableCell.default, {
        sortDirection: this.state.variables.sortBy === "title" ? this.state.variables.sortDir : false
      }, _react.default.createElement(_TableSortLabel.default, {
        active: this.state.variables.sortBy === "title",
        direction: this.state.variables.sortDir,
        onClick: function onClick() {
          return _this6.handleSort("title");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_TITLE_COLUMN"
      }))), _react.default.createElement(_TableCell.default, {
        sortDirection: this.state.variables.sortBy === "country" ? this.state.variables.sortDir : false
      }, _react.default.createElement(_TableSortLabel.default, {
        active: this.state.variables.sortBy === "country",
        direction: this.state.variables.sortDir,
        onClick: function onClick() {
          return _this6.handleSort("country");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_COUNTRY_COLUMN"
      }))), _react.default.createElement(_TableCell.default, {
        sortDirection: this.state.variables.sortBy === "salary" ? this.state.variables.sortDir : false
      }, _react.default.createElement(_TableSortLabel.default, {
        active: this.state.variables.sortBy === "salary",
        direction: this.state.variables.sortDir,
        onClick: function onClick() {
          return _this6.handleSort("salary");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_SALARY_COLUMN"
      }))))), _react.default.createElement(_TableBody.default, null, _.map(_.get(this.props.viewer, "employees.edges", []), function (edge) {
        return _react.default.createElement(_DemoItemContainer.default, {
          key: edge.cursor,
          node: edge.node
        });
      }))), _react.default.createElement(_TablePagination.default, {
        rowsPerPageOptions: [5, 10, 20, 30, 50, 100],
        component: "div",
        count: _.get(this.props.viewer, "employees.totalCount", 0),
        rowsPerPage: this.state.pageSize,
        labelRowsPerPage: "",
        page: this.state.pageNumber,
        onChangeRowsPerPage: this.handleChangeRowsPerPage,
        onChangePage: this.handleChangePage
      }));
    }
  }]);
  return DemoList;
}(_react.default.Component);

(0, _defineProperty2.default)(DemoList, "contextType", _Relay.RelayContext);
var _default = DemoList;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "hcU9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "defaultDept", {
  enumerable: true,
  get: function get() {
    return _DemoTable.defaultDept;
  }
});
Object.defineProperty(exports, "pageSize", {
  enumerable: true,
  get: function get() {
    return _DemoTable.pageSize;
  }
});
Object.defineProperty(exports, "sortBy", {
  enumerable: true,
  get: function get() {
    return _DemoTable.sortBy;
  }
});
Object.defineProperty(exports, "sortDir", {
  enumerable: true,
  get: function get() {
    return _DemoTable.sortDir;
  }
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _DemoTable = _interopRequireWildcard(__webpack_require__("I1Aa"));

var DemoTable = (0, _reactIntl.injectIntl)(_DemoTable.default);
var _default = DemoTable;
exports.default = _default;

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

/***/ "iDDF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

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

/***/ "iuEU":
/***/ (function(module, exports) {

module.exports = require("react-relay");

/***/ }),

/***/ "jBo5":
/***/ (function(module, exports) {

module.exports = require("react-simple-maps");

/***/ }),

/***/ "jDsb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "defaultDept", {
  enumerable: true,
  get: function get() {
    return _DemoTableContainer.defaultDept;
  }
});
Object.defineProperty(exports, "pageSize", {
  enumerable: true,
  get: function get() {
    return _DemoTableContainer.pageSize;
  }
});
Object.defineProperty(exports, "sortBy", {
  enumerable: true,
  get: function get() {
    return _DemoTableContainer.sortBy;
  }
});
Object.defineProperty(exports, "sortDir", {
  enumerable: true,
  get: function get() {
    return _DemoTableContainer.sortDir;
  }
});
exports.default = exports.styles = exports.defaultCountry = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Grid = _interopRequireDefault(__webpack_require__("JQ2V"));

var _Grow = _interopRequireDefault(__webpack_require__("mf1M"));

var _ProfitStatContainer = _interopRequireDefault(__webpack_require__("+Pi7"));

var _SalesStatContainer = _interopRequireDefault(__webpack_require__("CW2C"));

var _ClientsStatContainer = _interopRequireDefault(__webpack_require__("TAfE"));

var _AvgTimeStatContainer = _interopRequireDefault(__webpack_require__("BkaX"));

var _WorldMapContainer = _interopRequireDefault(__webpack_require__("19SY"));

var _MarketShareContainer = _interopRequireDefault(__webpack_require__("Q28+"));

var _MarketSpinnerContainer = _interopRequireDefault(__webpack_require__("fGOC"));

var _DemoTableContainer = _interopRequireWildcard(__webpack_require__("hcU9"));

var defaultCountry = "WORLD";
exports.defaultCountry = defaultCountry;

var styles = function styles(theme) {
  return {
    layout: {
      width: "100%",
      flex: 1,
      padding: theme.main.spacing
    },
    spinnerWrapper: {
      position: "relative"
    },
    spinner: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)",
      color: theme.palette.primary.contrastText
    }
  };
};

exports.styles = styles;

var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Dashboard, _React$Component);

  function Dashboard(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Dashboard);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Dashboard).call(this, props));
    _this.state = {
      countryId: defaultCountry,
      isLoaded: true
    };
    _this.isTransitioning = false;
    _this.isDestroyed = false;
    _this.handleCountrySelected = _this.handleCountrySelected.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleLoaded = _this.handleLoaded.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Dashboard, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isDestroyed = true;
    }
  }, {
    key: "handleCountrySelected",
    value: function handleCountrySelected(id) {
      var _this2 = this;

      if (this.isTransitioning) return;
      if (this.state.countryId === id) return;
      this.isTransitioning = true;
      this.setState({
        isLoaded: false
      }, function () {
        setTimeout(function () {
          _this2.isTransitioning = false;
          if (_this2.isDestroyed) return;

          _this2.setState({
            countryId: id
          });
        }, _this2.props.theme.transitions.duration.leavingScreen);
      });
    }
  }, {
    key: "handleLoaded",
    value: function handleLoaded() {
      if (this.isDestroyed || this.state.isLoaded) return;
      this.setState({
        isLoaded: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: this.props.theme.main.spacing,
        justify: "center"
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: this.props.theme.main.spacing,
        item: true,
        alignContent: "space-between",
        xs: 12,
        sm: 12,
        md: 3
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6,
        md: 12
      }, _react.default.createElement(_ProfitStatContainer.default, {
        label: "DASHBOARD_PROFIT_LABEL",
        data: this.props.viewer.profitValues
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6,
        md: 12
      }, _react.default.createElement(_SalesStatContainer.default, {
        label: "DASHBOARD_SALES_LABEL",
        data: this.props.viewer.salesValues
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6,
        md: 12
      }, _react.default.createElement(_ClientsStatContainer.default, {
        label: "DASHBOARD_CLIENTS_LABEL",
        data: this.props.viewer.clientsValues
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6,
        md: 12
      }, _react.default.createElement(_AvgTimeStatContainer.default, {
        label: "DASHBOARD_AVG_TIME_LABEL",
        precision: 2,
        data: this.props.viewer.avgTimeValues
      }))), _react.default.createElement(_Grid.default, {
        container: true,
        spacing: this.props.theme.main.spacing,
        alignItems: "stretch",
        item: true,
        xs: 12,
        sm: 12,
        md: true
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 8
      }, _react.default.createElement(_WorldMapContainer.default, {
        selected: this.state.countryId,
        onSelect: this.handleCountrySelected
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 4,
        style: {
          display: "flex",
          position: "relative"
        }
      }, !this.state.isLoaded && _react.default.createElement(_MarketSpinnerContainer.default, {
        isActive: true
      }), _react.default.createElement(_Grow.default, {
        in: this.state.isLoaded,
        style: {
          width: "100%"
        }
      }, _react.default.createElement(_MarketShareContainer.default, {
        selected: this.state.countryId,
        viewer: this.props.viewer,
        onLoaded: this.handleLoaded,
        onSelect: this.handleCountrySelected
      }))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_DemoTableContainer.default, {
        viewer: this.props.viewer
      })))));
    }
  }]);
  return Dashboard;
}(_react.default.Component);

var _default = Dashboard;
exports.default = _default;

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

/***/ "jOOh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableSortLabel");

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

/***/ "kUfH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pageSize", {
  enumerable: true,
  get: function get() {
    return _DemoList.pageSize;
  }
});
Object.defineProperty(exports, "sortBy", {
  enumerable: true,
  get: function get() {
    return _DemoList.sortBy;
  }
});
Object.defineProperty(exports, "sortDir", {
  enumerable: true,
  get: function get() {
    return _DemoList.sortDir;
  }
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactRelay = __webpack_require__("iuEU");

var _styles = __webpack_require__("9Pu4");

var _state = __webpack_require__("E4eY");

var _DemoList = _interopRequireWildcard(__webpack_require__("hN1G"));

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getToken: function getToken() {
      return dispatch(_state.appOperations.getToken());
    }
  };
};

var DemoList = (0, _reactRelay.createRefetchContainer)((0, _styles.withStyles)(_DemoList.styles)((0, _reactRedux.connect)(null, mapDispatchToProps)(_DemoList.default)), {
  viewer: function viewer() {
    return __webpack_require__("0bJo");
  }
}, function () {
  return __webpack_require__("oNLe");
});
var _default = DemoList;
exports.default = _default;

/***/ }),

/***/ "lOiU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mf1M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "nMfB":
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

var _countryIso3To = _interopRequireDefault(__webpack_require__("GKS8"));

var _reactIntl = __webpack_require__("k004");

var _reactSimpleMaps = __webpack_require__("jBo5");

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var styles = function styles() {
  return {
    root: {
      padding: "1rem"
    }
  };
};

exports.styles = styles;

var WorldMap =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(WorldMap, _React$Component);

  function WorldMap() {
    (0, _classCallCheck2.default)(this, WorldMap);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorldMap).apply(this, arguments));
  }

  (0, _createClass2.default)(WorldMap, [{
    key: "renderMap",
    value: function renderMap() {
      var _this = this;

      return _react.default.createElement(_reactSimpleMaps.ComposableMap, {
        rojectionConfig: {
          scale: 200,
          rotation: [-10, 0, 0]
        },
        style: {
          width: "100%",
          height: "auto"
        }
      }, _react.default.createElement(_reactSimpleMaps.ZoomableGroup, {
        center: [0, 20],
        disablePanning: true
      }, _react.default.createElement(_reactSimpleMaps.Geographies, {
        geography: "/static/map/world-50m.json"
      }, function (geographies, projection) {
        return _.map(geographies, function (geography, i) {
          return geography.id !== "ATA" && _react.default.createElement(_reactSimpleMaps.Geography, {
            key: i,
            onClick: function onClick() {
              _this.props.onSelect((0, _countryIso3To.default)(geography.id));
            },
            geography: geography,
            projection: projection,
            style: {
              default: {
                fill: _this.props.theme.chart.mapBackground,
                stroke: _this.props.theme.chart.mapColor,
                strokeWidth: 1,
                outline: "none"
              },
              hover: {
                fill: _this.props.theme.chart.mapHoverBackground,
                stroke: _this.props.theme.chart.mapColor,
                strokeWidth: 1,
                outline: "none"
              },
              pressed: {
                fill: _this.props.theme.chart.mapSelectedBackground,
                stroke: _this.props.theme.chart.mapColor,
                strokeWidth: 1,
                outline: "none"
              }
            }
          });
        });
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_Paper.default, {
        className: this.props.classes.root,
        elevation: 4
      }, this.renderMap(), _react.default.createElement(_Typography.default, {
        variant: "body2"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "DASHBOARD_CLICK_MAP_LABEL"
      })));
    }
  }]);
  return WorldMap;
}(_react.default.Component);

var _default = WorldMap;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "nuGg":
/***/ (function(module, exports) {

module.exports = require("immutable");

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

/***/ "oNLe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 8c9612e4a672ff46e40e1ab06832e637
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DemoListContainer_viewer$ref = any;
export type EmployeeDept = "ACCOUNTING" | "HR" | "MARKETING" | "PRODUCTION" | "PURCHASING" | "RD" | "%future added value";
export type EmployeeSortBy = "checked" | "country" | "dept" | "name" | "salary" | "title" | "uid" | "%future added value";
export type EmployeeSortDir = "asc" | "desc" | "%future added value";
export type DemoListContainerQueryVariables = {|
  dept?: ?EmployeeDept,
  sortBy?: ?EmployeeSortBy,
  sortDir?: ?EmployeeSortDir,
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type DemoListContainerQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: DemoListContainer_viewer$ref
  |}
|};
export type DemoListContainerQuery = {|
  variables: DemoListContainerQueryVariables,
  response: DemoListContainerQueryResponse,
|};
*/

/*
query DemoListContainerQuery(
  $dept: EmployeeDept
  $sortBy: EmployeeSortBy
  $sortDir: EmployeeSortDir
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  viewer {
    ...DemoListContainer_viewer_4Eqn1
  }
}

fragment DemoListContainer_viewer_4Eqn1 on Viewer {
  employees(dept: $dept, sortBy: $sortBy, sortDir: $sortDir, first: $first, after: $after, last: $last, before: $before) {
    edges {
      cursor
      node {
        id
        ...DemoItemContainer_node
      }
    }
    pageInfo {
      startCursor
      endCursor
    }
    totalCount
  }
}

fragment DemoItemContainer_node on Employee {
  id
  uid
  checked
  name
  title
  country {
    id
    name
  }
  salary
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "dept",
    "type": "EmployeeDept",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "sortBy",
    "type": "EmployeeSortBy",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "sortDir",
    "type": "EmployeeSortDir",
    "defaultValue": null
  }, {
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
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "DemoListContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
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
          "name": "DemoListContainer_viewer",
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
            "name": "dept",
            "variableName": "dept",
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
          }, {
            "kind": "Variable",
            "name": "sortBy",
            "variableName": "sortBy",
            "type": null
          }, {
            "kind": "Variable",
            "name": "sortDir",
            "variableName": "sortDir",
            "type": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "DemoListContainerQuery",
      "argumentDefinitions": v0
      /*: any*/
      ,
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
          "name": "employees",
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
            "name": "dept",
            "variableName": "dept",
            "type": "EmployeeDept"
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
          }, {
            "kind": "Variable",
            "name": "sortBy",
            "variableName": "sortBy",
            "type": "EmployeeSortBy"
          }, {
            "kind": "Variable",
            "name": "sortDir",
            "variableName": "sortDir",
            "type": "EmployeeSortDir"
          }],
          "concreteType": "EmployeeConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "EmployeeEdge",
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
              "concreteType": "Employee",
              "plural": false,
              "selections": [v1
              /*: any*/
              , {
                "kind": "ScalarField",
                "alias": null,
                "name": "uid",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "checked",
                "args": null,
                "storageKey": null
              }, v2
              /*: any*/
              , {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              }, {
                "kind": "LinkedField",
                "alias": null,
                "name": "country",
                "storageKey": null,
                "args": null,
                "concreteType": "Country",
                "plural": false,
                "selections": [v1
                /*: any*/
                , v2
                /*: any*/
                ]
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "salary",
                "args": null,
                "storageKey": null
              }]
            }]
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "startCursor",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
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
    },
    "params": {
      "operationKind": "query",
      "name": "DemoListContainerQuery",
      "id": null,
      "text": "query DemoListContainerQuery(\n  $dept: EmployeeDept\n  $sortBy: EmployeeSortBy\n  $sortDir: EmployeeSortDir\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  viewer {\n    ...DemoListContainer_viewer_4Eqn1\n  }\n}\n\nfragment DemoListContainer_viewer_4Eqn1 on Viewer {\n  employees(dept: $dept, sortBy: $sortBy, sortDir: $sortDir, first: $first, after: $after, last: $last, before: $before) {\n    edges {\n      cursor\n      node {\n        id\n        ...DemoItemContainer_node\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n    }\n    totalCount\n  }\n}\n\nfragment DemoItemContainer_node on Employee {\n  id\n  uid\n  checked\n  name\n  title\n  country {\n    id\n    name\n  }\n  salary\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '86c85f72c0b3b154a26219a75cbbfa26';
module.exports = node;

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

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "ty8e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 7248286b0049958dc9010fe6da95d4c8
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DemoListSubscriptionVariables = {|
  token?: ?string
|};
export type DemoListSubscriptionResponse = {|
  +employeeEvent: ?{|
    +id: string
  |}
|};
export type DemoListSubscription = {|
  variables: DemoListSubscriptionVariables,
  response: DemoListSubscriptionResponse,
|};
*/

/*
subscription DemoListSubscription(
  $token: String
) {
  employeeEvent(token: $token) {
    id
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "token",
    "type": "String",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "employeeEvent",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "token",
      "variableName": "token",
      "type": "String"
    }],
    "concreteType": "Employee",
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
    "fragment": {
      "kind": "Fragment",
      "name": "DemoListSubscription",
      "type": "Subscription",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "DemoListSubscription",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "subscription",
      "name": "DemoListSubscription",
      "id": null,
      "text": "subscription DemoListSubscription(\n  $token: String\n) {\n  employeeEvent(token: $token) {\n    id\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '654c2c2f233454bcefcc17e998eb44c7';
module.exports = node;

/***/ }),

/***/ "u9iw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _DashboardPage.default;
  }
});

var _DashboardPage = _interopRequireDefault(__webpack_require__("4SgA"));

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

/***/ "vsef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 07a327b78c17dd75426e79d0fa2dcefa
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AvgTimeStatContainer_data$ref = any;
type ClientsStatContainer_data$ref = any;
type DemoListContainer_viewer$ref = any;
type MarketShareContainer_viewer$ref = any;
type ProfitStatContainer_data$ref = any;
type SalesStatContainer_data$ref = any;
export type EmployeeDept = "ACCOUNTING" | "HR" | "MARKETING" | "PRODUCTION" | "PURCHASING" | "RD" | "%future added value";
export type EmployeeSortBy = "checked" | "country" | "dept" | "name" | "salary" | "title" | "uid" | "%future added value";
export type EmployeeSortDir = "asc" | "desc" | "%future added value";
export type DashboardPageQueryVariables = {|
  country?: ?string,
  dept?: ?EmployeeDept,
  sortBy?: ?EmployeeSortBy,
  sortDir?: ?EmployeeSortDir,
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type DashboardPageQueryResponse = {|
  +viewer: ?{|
    +profitValues: ?{|
      +$fragmentRefs: ProfitStatContainer_data$ref
    |},
    +salesValues: ?{|
      +$fragmentRefs: SalesStatContainer_data$ref
    |},
    +clientsValues: ?{|
      +$fragmentRefs: ClientsStatContainer_data$ref
    |},
    +avgTimeValues: ?{|
      +$fragmentRefs: AvgTimeStatContainer_data$ref
    |},
    +$fragmentRefs: MarketShareContainer_viewer$ref & DemoListContainer_viewer$ref,
  |}
|};
export type DashboardPageQuery = {|
  variables: DashboardPageQueryVariables,
  response: DashboardPageQueryResponse,
|};
*/

/*
query DashboardPageQuery(
  $country: ID
  $dept: EmployeeDept
  $sortBy: EmployeeSortBy
  $sortDir: EmployeeSortDir
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  viewer {
    profitValues {
      ...ProfitStatContainer_data
    }
    salesValues {
      ...SalesStatContainer_data
    }
    clientsValues {
      ...ClientsStatContainer_data
    }
    avgTimeValues {
      ...AvgTimeStatContainer_data
    }
    ...MarketShareContainer_viewer_1vRKRZ
    ...DemoListContainer_viewer_4Eqn1
  }
}

fragment ProfitStatContainer_data on ProfitValueConnection {
  edges {
    node {
      date
      value: profit
      id
    }
  }
}

fragment SalesStatContainer_data on SalesValueConnection {
  edges {
    node {
      date
      value: sales
      id
    }
  }
}

fragment ClientsStatContainer_data on ClientsValueConnection {
  edges {
    node {
      date
      value: clients
      id
    }
  }
}

fragment AvgTimeStatContainer_data on AvgTimeValueConnection {
  edges {
    node {
      date
      value: avgTime
      id
    }
  }
}

fragment MarketShareContainer_viewer_1vRKRZ on Viewer {
  marketSharesByCountry(country: $country) {
    id
    country {
      name
      id
    }
    shares {
      vendor
      name
      values
      id
    }
  }
}

fragment DemoListContainer_viewer_4Eqn1 on Viewer {
  employees(dept: $dept, sortBy: $sortBy, sortDir: $sortDir, first: $first, after: $after, last: $last, before: $before) {
    edges {
      cursor
      node {
        id
        ...DemoItemContainer_node
      }
    }
    pageInfo {
      startCursor
      endCursor
    }
    totalCount
  }
}

fragment DemoItemContainer_node on Employee {
  id
  uid
  checked
  name
  title
  country {
    id
    name
  }
  salary
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "country",
    "type": "ID",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "dept",
    "type": "EmployeeDept",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "sortBy",
    "type": "EmployeeSortBy",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "sortDir",
    "type": "EmployeeSortDir",
    "defaultValue": null
  }, {
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
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "date",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "DashboardPageQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": [{
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "profitValues",
          "storageKey": null,
          "args": null,
          "concreteType": "ProfitValueConnection",
          "plural": false,
          "selections": [{
            "kind": "FragmentSpread",
            "name": "ProfitStatContainer_data",
            "args": null
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "salesValues",
          "storageKey": null,
          "args": null,
          "concreteType": "SalesValueConnection",
          "plural": false,
          "selections": [{
            "kind": "FragmentSpread",
            "name": "SalesStatContainer_data",
            "args": null
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "clientsValues",
          "storageKey": null,
          "args": null,
          "concreteType": "ClientsValueConnection",
          "plural": false,
          "selections": [{
            "kind": "FragmentSpread",
            "name": "ClientsStatContainer_data",
            "args": null
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "avgTimeValues",
          "storageKey": null,
          "args": null,
          "concreteType": "AvgTimeValueConnection",
          "plural": false,
          "selections": [{
            "kind": "FragmentSpread",
            "name": "AvgTimeStatContainer_data",
            "args": null
          }]
        }, {
          "kind": "FragmentSpread",
          "name": "MarketShareContainer_viewer",
          "args": [{
            "kind": "Variable",
            "name": "country",
            "variableName": "country",
            "type": null
          }]
        }, {
          "kind": "FragmentSpread",
          "name": "DemoListContainer_viewer",
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
            "name": "dept",
            "variableName": "dept",
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
          }, {
            "kind": "Variable",
            "name": "sortBy",
            "variableName": "sortBy",
            "type": null
          }, {
            "kind": "Variable",
            "name": "sortDir",
            "variableName": "sortDir",
            "type": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "DashboardPageQuery",
      "argumentDefinitions": v0
      /*: any*/
      ,
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
          "name": "profitValues",
          "storageKey": null,
          "args": null,
          "concreteType": "ProfitValueConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ProfitValueEdge",
            "plural": true,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "ProfitValue",
              "plural": false,
              "selections": [v1
              /*: any*/
              , {
                "kind": "ScalarField",
                "alias": "value",
                "name": "profit",
                "args": null,
                "storageKey": null
              }, v2
              /*: any*/
              ]
            }]
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "salesValues",
          "storageKey": null,
          "args": null,
          "concreteType": "SalesValueConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "SalesValueEdge",
            "plural": true,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "SalesValue",
              "plural": false,
              "selections": [v1
              /*: any*/
              , {
                "kind": "ScalarField",
                "alias": "value",
                "name": "sales",
                "args": null,
                "storageKey": null
              }, v2
              /*: any*/
              ]
            }]
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "clientsValues",
          "storageKey": null,
          "args": null,
          "concreteType": "ClientsValueConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ClientsValueEdge",
            "plural": true,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "ClientsValue",
              "plural": false,
              "selections": [v1
              /*: any*/
              , {
                "kind": "ScalarField",
                "alias": "value",
                "name": "clients",
                "args": null,
                "storageKey": null
              }, v2
              /*: any*/
              ]
            }]
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "avgTimeValues",
          "storageKey": null,
          "args": null,
          "concreteType": "AvgTimeValueConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "AvgTimeValueEdge",
            "plural": true,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "AvgTimeValue",
              "plural": false,
              "selections": [v1
              /*: any*/
              , {
                "kind": "ScalarField",
                "alias": "value",
                "name": "avgTime",
                "args": null,
                "storageKey": null
              }, v2
              /*: any*/
              ]
            }]
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "marketSharesByCountry",
          "storageKey": null,
          "args": [{
            "kind": "Variable",
            "name": "country",
            "variableName": "country",
            "type": "ID"
          }],
          "concreteType": "MarketShare",
          "plural": false,
          "selections": [v2
          /*: any*/
          , {
            "kind": "LinkedField",
            "alias": null,
            "name": "country",
            "storageKey": null,
            "args": null,
            "concreteType": "Country",
            "plural": false,
            "selections": [v3
            /*: any*/
            , v2
            /*: any*/
            ]
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "shares",
            "storageKey": null,
            "args": null,
            "concreteType": "MarketShareValue",
            "plural": true,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "vendor",
              "args": null,
              "storageKey": null
            }, v3
            /*: any*/
            , {
              "kind": "ScalarField",
              "alias": null,
              "name": "values",
              "args": null,
              "storageKey": null
            }, v2
            /*: any*/
            ]
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "employees",
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
            "name": "dept",
            "variableName": "dept",
            "type": "EmployeeDept"
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
          }, {
            "kind": "Variable",
            "name": "sortBy",
            "variableName": "sortBy",
            "type": "EmployeeSortBy"
          }, {
            "kind": "Variable",
            "name": "sortDir",
            "variableName": "sortDir",
            "type": "EmployeeSortDir"
          }],
          "concreteType": "EmployeeConnection",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "EmployeeEdge",
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
              "concreteType": "Employee",
              "plural": false,
              "selections": [v2
              /*: any*/
              , {
                "kind": "ScalarField",
                "alias": null,
                "name": "uid",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "checked",
                "args": null,
                "storageKey": null
              }, v3
              /*: any*/
              , {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              }, {
                "kind": "LinkedField",
                "alias": null,
                "name": "country",
                "storageKey": null,
                "args": null,
                "concreteType": "Country",
                "plural": false,
                "selections": [v2
                /*: any*/
                , v3
                /*: any*/
                ]
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "salary",
                "args": null,
                "storageKey": null
              }]
            }]
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "startCursor",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
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
    },
    "params": {
      "operationKind": "query",
      "name": "DashboardPageQuery",
      "id": null,
      "text": "query DashboardPageQuery(\n  $country: ID\n  $dept: EmployeeDept\n  $sortBy: EmployeeSortBy\n  $sortDir: EmployeeSortDir\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  viewer {\n    profitValues {\n      ...ProfitStatContainer_data\n    }\n    salesValues {\n      ...SalesStatContainer_data\n    }\n    clientsValues {\n      ...ClientsStatContainer_data\n    }\n    avgTimeValues {\n      ...AvgTimeStatContainer_data\n    }\n    ...MarketShareContainer_viewer_1vRKRZ\n    ...DemoListContainer_viewer_4Eqn1\n  }\n}\n\nfragment ProfitStatContainer_data on ProfitValueConnection {\n  edges {\n    node {\n      date\n      value: profit\n      id\n    }\n  }\n}\n\nfragment SalesStatContainer_data on SalesValueConnection {\n  edges {\n    node {\n      date\n      value: sales\n      id\n    }\n  }\n}\n\nfragment ClientsStatContainer_data on ClientsValueConnection {\n  edges {\n    node {\n      date\n      value: clients\n      id\n    }\n  }\n}\n\nfragment AvgTimeStatContainer_data on AvgTimeValueConnection {\n  edges {\n    node {\n      date\n      value: avgTime\n      id\n    }\n  }\n}\n\nfragment MarketShareContainer_viewer_1vRKRZ on Viewer {\n  marketSharesByCountry(country: $country) {\n    id\n    country {\n      name\n      id\n    }\n    shares {\n      vendor\n      name\n      values\n      id\n    }\n  }\n}\n\nfragment DemoListContainer_viewer_4Eqn1 on Viewer {\n  employees(dept: $dept, sortBy: $sortBy, sortDir: $sortDir, first: $first, after: $after, last: $last, before: $before) {\n    edges {\n      cursor\n      node {\n        id\n        ...DemoItemContainer_node\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n    }\n    totalCount\n  }\n}\n\nfragment DemoItemContainer_node on Employee {\n  id\n  uid\n  checked\n  name\n  title\n  country {\n    id\n    name\n  }\n  salary\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '8e4ea0a4fb49bc6ab5c4e91d9ee6835b';
module.exports = node;

/***/ }),

/***/ "wL32":
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "xvxd":
/***/ (function(module, exports) {

module.exports = require("react-virtualized");

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

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

/***/ })

/******/ });