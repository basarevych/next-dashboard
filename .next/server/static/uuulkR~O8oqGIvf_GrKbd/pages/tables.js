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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
exports.deleteProfile = exports.unlinkProvider = exports.linkProvider = exports.updateProfile = exports.finishEmailVerification = exports.requestEmailVerification = exports.signOut = exports.signUp = exports.signIn = exports.setStatus = exports.setCsrf = exports.setGoogleMapsKey = exports.setCookie = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _router = _interopRequireDefault(__webpack_require__("20a2"));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__("jRAA"));

var actions = _interopRequireWildcard(__webpack_require__("z+7x"));

var selectors = _interopRequireWildcard(__webpack_require__("p/Qe"));

var _connectForm = __webpack_require__("ciYs");

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
      var _ref4 = (0, _asyncToGenerator2.default)(
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
      var _ref6 = (0, _asyncToGenerator2.default)(
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
      var _ref7 = (0, _asyncToGenerator2.default)(
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
      var _ref8 = (0, _asyncToGenerator2.default)(
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
      var _ref10 = (0, _asyncToGenerator2.default)(
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
      var _ref12 = (0, _asyncToGenerator2.default)(
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
      var _ref14 = (0, _asyncToGenerator2.default)(
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
      var _ref16 = (0, _asyncToGenerator2.default)(
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
      var _ref17 = (0, _asyncToGenerator2.default)(
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "+V0K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 9d412ff64407f393d5b2ecee9ceed793
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EmployeeListContainer_viewer$ref = any;
export type EmployeeSortBy = "checked" | "country" | "dept" | "name" | "salary" | "title" | "uid" | "%future added value";
export type EmployeeSortDir = "asc" | "desc" | "%future added value";
export type EmployeeListContainerQueryVariables = {|
  sortBy?: ?EmployeeSortBy,
  sortDir?: ?EmployeeSortDir,
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type EmployeeListContainerQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: EmployeeListContainer_viewer$ref
  |}
|};
export type EmployeeListContainerQuery = {|
  variables: EmployeeListContainerQueryVariables,
  response: EmployeeListContainerQueryResponse,
|};
*/

/*
query EmployeeListContainerQuery(
  $sortBy: EmployeeSortBy
  $sortDir: EmployeeSortDir
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  viewer {
    ...EmployeeListContainer_viewer_3WF44T
  }
}

fragment EmployeeListContainer_viewer_3WF44T on Viewer {
  employees(sortBy: $sortBy, sortDir: $sortDir, first: $first, after: $after, last: $last, before: $before) {
    edges {
      cursor
      node {
        id
        ...EmployeeItemContainer_node
      }
    }
    pageInfo {
      startCursor
      endCursor
    }
    totalCount
  }
}

fragment EmployeeItemContainer_node on Employee {
  id
  uid
  checked
  name
  dept
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
      "name": "EmployeeListContainerQuery",
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
          "name": "EmployeeListContainer_viewer",
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
      "name": "EmployeeListContainerQuery",
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
                "name": "dept",
                "args": null,
                "storageKey": null
              }, {
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
      "name": "EmployeeListContainerQuery",
      "id": null,
      "text": "query EmployeeListContainerQuery(\n  $sortBy: EmployeeSortBy\n  $sortDir: EmployeeSortDir\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  viewer {\n    ...EmployeeListContainer_viewer_3WF44T\n  }\n}\n\nfragment EmployeeListContainer_viewer_3WF44T on Viewer {\n  employees(sortBy: $sortBy, sortDir: $sortDir, first: $first, after: $after, last: $last, before: $before) {\n    edges {\n      cursor\n      node {\n        id\n        ...EmployeeItemContainer_node\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n    }\n    totalCount\n  }\n}\n\nfragment EmployeeItemContainer_node on Employee {\n  id\n  uid\n  checked\n  name\n  dept\n  title\n  country {\n    id\n    name\n  }\n  salary\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '2206184615fffd6b19222069f91ff743';
module.exports = node;

/***/ }),

/***/ "+fmV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _ConfirmModal = _interopRequireWildcard(__webpack_require__("G//K"));

var ConfirmModal = (0, _styles.withStyles)(_ConfirmModal.styles)(_ConfirmModal.default);
var _default = ConfirmModal;
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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

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

var hoist_non_react_statics_1 = __importDefault(__webpack_require__("BVXd"));

var utils_1 = __webpack_require__("p8BD");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CYu8");


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
    }, _callee, this);
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

var _connectForm = __webpack_require__("ciYs");

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
        }, _callee4, this);
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

/***/ "20a2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nOHt")


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

/***/ "3/e5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
type EmployeeItemContainer_node$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EmployeeListContainer_viewer$ref: FragmentReference;
export type EmployeeListContainer_viewer = {|
  +employees: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +$fragmentRefs: EmployeeItemContainer_node$ref,
      |},
    |}>,
    +pageInfo: {|
      +startCursor: ?string,
      +endCursor: ?string,
    |},
    +totalCount: ?number,
  |},
  +$refType: EmployeeListContainer_viewer$ref,
|};
*/

var node
/*: ReaderFragment*/
= {
  "kind": "Fragment",
  "name": "EmployeeListContainer_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [{
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
          "name": "EmployeeItemContainer_node",
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
.hash = '290ffc95b8dc6a072210a34e098696ac';
module.exports = node;

/***/ }),

/***/ "30mr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

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

/***/ "4VpM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FilledInput");

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

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

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
    }, _callee, this);
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

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "8L3H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = exports.getCookie = exports.setCookie = exports.start = exports.init = exports.create = exports.stop = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

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
      var _ref3 = (0, _asyncToGenerator2.default)(
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
    fontsLoaded = new _promise.default(function (resolve) {
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
      var _ref4 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _promise.default.all([dispatch(_state.authOperations.setStatus()), fontsLoaded]);

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
      var _ref6 = (0, _asyncToGenerator2.default)(
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

var getCookie = function getCookie(_ref7) {
  var name = _ref7.name;
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
                return _context5.abrupt("return", di.get("cookie").get(name));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x7, _x8, _x9) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.getCookie = getCookie;

var getToken = function getToken() {
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", di.get("fetcher").getToken());

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x10, _x11, _x12) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.getToken = getToken;

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

/***/ "AvS8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 4cc6c5a340a5e416a43214d5a3e2544f
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EmployeeListSubscriptionVariables = {|
  token?: ?string
|};
export type EmployeeListSubscriptionResponse = {|
  +employeeEvent: ?{|
    +id: string
  |}
|};
export type EmployeeListSubscription = {|
  variables: EmployeeListSubscriptionVariables,
  response: EmployeeListSubscriptionResponse,
|};
*/

/*
subscription EmployeeListSubscription(
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
      "name": "EmployeeListSubscription",
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
      "name": "EmployeeListSubscription",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "subscription",
      "name": "EmployeeListSubscription",
      "id": null,
      "text": "subscription EmployeeListSubscription(\n  $token: String\n) {\n  employeeEvent(token: $token) {\n    id\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'b39a444af095ba39a328a36d37bb1538';
module.exports = node;

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

/***/ "BVXd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__("UWCm");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "BjFw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "BlHF":
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),

/***/ "Bsfg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.query = exports.styles = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _parseInt2 = _interopRequireDefault(__webpack_require__("6BQ9"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _immutable = __webpack_require__("nuGg");

var _reactIntl = __webpack_require__("k004");

var _reactRelay = __webpack_require__("iuEU");

var _graphqlRelay = __webpack_require__("Ygce");

var _immutable2 = __webpack_require__("NFhO");

var _Dialog = _interopRequireDefault(__webpack_require__("fEgT"));

var _DialogActions = _interopRequireDefault(__webpack_require__("1gBk"));

var _DialogContent = _interopRequireDefault(__webpack_require__("iTUb"));

var _DialogContentText = _interopRequireDefault(__webpack_require__("MbIc"));

var _DialogTitle = _interopRequireDefault(__webpack_require__("0Jp5"));

var _Grid = _interopRequireDefault(__webpack_require__("JQ2V"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var _red = _interopRequireDefault(__webpack_require__("RpH3"));

var _Relay = __webpack_require__("JyB7");

var _Form2 = _interopRequireDefault(__webpack_require__("p8rN"));

var _FieldContainer = _interopRequireDefault(__webpack_require__("PmAW"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var _employee = _interopRequireDefault(__webpack_require__("e1yp"));

var _countries = __webpack_require__("PlrT");

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
  return __webpack_require__("DUvs");
};

exports.query = query;

var EditEmployeeModal =
/*#__PURE__*/
function (_Form) {
  (0, _inherits2.default)(EditEmployeeModal, _Form);
  (0, _createClass2.default)(EditEmployeeModal, null, [{
    key: "onSubmit",
    value: function () {
      var _onSubmit = (0, _asyncToGenerator2.default)(
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
                return props.onEdit(props.currentId, props.getValue("uid"), props.getValue("checked") || false, props.getValue("name"), props.getValue("dept"), props.getValue("title"), props.getValue("country"), (0, _parseInt2.default)(props.getValue("salary")));

              case 3:
                result = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.next = 8;
                return props.onCreate(props.getValue("uid"), props.getValue("checked") || false, props.getValue("name"), props.getValue("dept"), props.getValue("title"), props.getValue("country"), (0, _parseInt2.default)(props.getValue("salary")));

              case 8:
                result = _context.sent;

              case 9:
                if (!(result && _.isObject(result))) {
                  _context.next = 11;
                  break;
                }

                throw new _immutable2.SubmissionError(result);

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
  }]);

  function EditEmployeeModal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EditEmployeeModal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EditEmployeeModal).call(this, props));
    _this.deptOptions = (0, _immutable.fromJS)(_.map(_.values(_constants.default.depts), function (item) {
      return {
        value: item,
        label: item && _this.props.intl.formatMessage({
          id: "DEPT_".concat(item)
        })
      };
    }));
    _this.countryOptions = (0, _immutable.fromJS)(_.map(_countries.allCountries, function (item) {
      return {
        value: item.iso2,
        label: item.name
      };
    }));
    _this.state = {
      isLoaded: false
    };
    props.dispatch(props.change("dept", _this.deptOptions.getIn([0, "value"])));
    props.dispatch(props.change("country", _this.countryOptions.getIn([0, "value"])));
    return _this;
  }

  (0, _createClass2.default)(EditEmployeeModal, [{
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
        id: this.props.currentId ? "EDIT_EMPLOYEE_TITLE_EDIT" : "EDIT_EMPLOYEE_TITLE_CREATE"
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
        name: "uid",
        type: "text",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
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
        name: "checked",
        type: "checkbox",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        container: true,
        spacing: 16
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 6
      }, _.map(_.values(_constants.default.depts), function (item, index) {
        if (index % 2 !== 0) return null;
        return _react.default.createElement(_FieldContainer.default, {
          key: "radio-".concat(item),
          name: "dept",
          type: "radio",
          value: item,
          label: _this2.props.intl.formatMessage({
            id: "DEPT_".concat(item)
          }),
          onSubmit: _this2.submit
        });
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 6
      }, _.map(_.values(_constants.default.depts), function (item, index) {
        if (index % 2 === 0) return null;
        return _react.default.createElement(_FieldContainer.default, {
          key: "radio-".concat(item),
          name: "dept",
          type: "radio",
          value: item,
          label: _this2.props.intl.formatMessage({
            id: "DEPT_".concat(item)
          }),
          onSubmit: _this2.submit
        });
      }))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_FieldContainer.default, {
        name: "title",
        type: "text",
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_FieldContainer.default, {
        name: "country",
        type: "select",
        native: true,
        options: this.countryOptions,
        onSubmit: this.submit
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12
      }, _react.default.createElement(_FieldContainer.default, {
        name: "salary",
        type: "text",
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
        id: "EDIT_EMPLOYEE_CANCEL"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary",
        disabled: this.props.submitting,
        onClick: this.submit
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EDIT_EMPLOYEE_SUBMIT"
      }))));
    }
  }, {
    key: "loadData",
    value: function loadData(viewer) {
      var _this3 = this;

      if (this.state.isLoaded) return;
      setTimeout(function () {
        _this3.props.dispatch(_this3.props.change("uid", (0, _parseInt2.default)(_.get(viewer, "employee.uid", "0")).toString()));

        _this3.props.dispatch(_this3.props.change("checked", _.get(viewer, "employee.checked", false)));

        _this3.props.dispatch(_this3.props.change("name", _.get(viewer, "employee.name", "")));

        _this3.props.dispatch(_this3.props.change("dept", _.get(viewer, "employee.dept", "")));

        _this3.props.dispatch(_this3.props.change("title", _.get(viewer, "employee.title", "")));

        _this3.props.dispatch(_this3.props.change("country", (0, _graphqlRelay.fromGlobalId)(_.get(viewer, "employee.country.id", "")).id));

        _this3.props.dispatch(_this3.props.change("salary", _.get(viewer, "employee.salary", "").toString()));

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
  return EditEmployeeModal;
}(_Form2.default);

(0, _defineProperty2.default)(EditEmployeeModal, "propTypes", (0, _objectSpread2.default)({}, _Form2.default.propTypes, {
  intl: _reactIntl.intlShape.isRequired,
  classes: _propTypes.default.object.isRequired,
  currentId: _propTypes.default.string,
  onCancel: _propTypes.default.func.isRequired,
  onCreate: _propTypes.default.func.isRequired,
  onEdit: _propTypes.default.func.isRequired
}));
(0, _defineProperty2.default)(EditEmployeeModal, "formName", "editEmployeeForm");
(0, _defineProperty2.default)(EditEmployeeModal, "fields", _employee.default);
var _default = EditEmployeeModal;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "CUfL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "CYu8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _EmployeesPageContainer.default;
  }
});

var _EmployeesPageContainer = _interopRequireDefault(__webpack_require__("sLDs"));

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

/***/ "DUvs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash cc19a10994b6321348503a6e9392f75f
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EmployeeDept = "ACCOUNTING" | "HR" | "MARKETING" | "PRODUCTION" | "PURCHASING" | "RD" | "%future added value";
export type EditEmployeeModalQueryVariables = {|
  currentId?: ?string
|};
export type EditEmployeeModalQueryResponse = {|
  +viewer: ?{|
    +employee: ?{|
      +id: string,
      +uid: string,
      +checked: boolean,
      +name: string,
      +dept: EmployeeDept,
      +title: string,
      +country: {|
        +id: string,
        +name: string,
      |},
      +salary: number,
    |}
  |}
|};
export type EditEmployeeModalQuery = {|
  variables: EditEmployeeModalQueryVariables,
  response: EditEmployeeModalQueryResponse,
|};
*/

/*
query EditEmployeeModalQuery(
  $currentId: ID
) {
  viewer {
    employee(id: $currentId) {
      id
      uid
      checked
      name
      dept
      title
      country {
        id
        name
      }
      salary
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
  },
      v3 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "employee",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "id",
      "variableName": "currentId",
      "type": "ID"
    }],
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
      "name": "dept",
      "args": null,
      "storageKey": null
    }, {
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
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "EditEmployeeModalQuery",
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
        "selections": v3
        /*: any*/

      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "EditEmployeeModalQuery",
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
        "selections": v3
        /*: any*/

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
      "name": "EditEmployeeModalQuery",
      "id": null,
      "text": "query EditEmployeeModalQuery(\n  $currentId: ID\n) {\n  viewer {\n    employee(id: $currentId) {\n      id\n      uid\n      checked\n      name\n      dept\n      title\n      country {\n        id\n        name\n      }\n      salary\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '221d77417c651acc4e082bf4ee907bef';
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
    }, _callee, this);
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

/***/ "F0iy":
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

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _immutable = __webpack_require__("nuGg");

var _reactIntl = __webpack_require__("k004");

var _List = _interopRequireDefault(__webpack_require__("0LMq"));

var _ListItem = _interopRequireDefault(__webpack_require__("c25J"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("GLYF"));

var _ListItemText = _interopRequireDefault(__webpack_require__("W+03"));

var _InfoOutlined = _interopRequireDefault(__webpack_require__("59gi"));

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
  (0, _inherits2.default)(Errors, _React$PureComponent);

  function Errors() {
    (0, _classCallCheck2.default)(this, Errors);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Errors).apply(this, arguments));
  }

  (0, _createClass2.default)(Errors, [{
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "G//K":
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

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _reactIntl = __webpack_require__("k004");

var _Dialog = _interopRequireDefault(__webpack_require__("fEgT"));

var _DialogActions = _interopRequireDefault(__webpack_require__("1gBk"));

var _DialogContent = _interopRequireDefault(__webpack_require__("iTUb"));

var _DialogContentText = _interopRequireDefault(__webpack_require__("MbIc"));

var _DialogTitle = _interopRequireDefault(__webpack_require__("0Jp5"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

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
  (0, _inherits2.default)(ConfirmModal, _React$PureComponent);

  function ConfirmModal() {
    (0, _classCallCheck2.default)(this, ConfirmModal);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ConfirmModal).apply(this, arguments));
  }

  (0, _createClass2.default)(ConfirmModal, [{
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

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "HSb4":
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


module.exports = function normalize(options, value, prevValue, allValues
/* prevAllValues */
) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "IUnC":
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _TextField = _interopRequireDefault(__webpack_require__("IbbU"));

var _ErrorsContainer = _interopRequireDefault(__webpack_require__("tfRR"));

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

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

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
    }, _callee, this);
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

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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
      }, _callee, this);
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

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _reactIntl = __webpack_require__("k004");

var _immutable = __webpack_require__("NFhO");

var _context = __webpack_require__("mSjk");

var _normalize2 = _interopRequireDefault(__webpack_require__("I1eL"));

var _TextContainer = _interopRequireDefault(__webpack_require__("Dxhi"));

var _SelectContainer = _interopRequireDefault(__webpack_require__("tmE+"));

var _CheckboxContainer = _interopRequireDefault(__webpack_require__("3giw"));

var _RadioContainer = _interopRequireDefault(__webpack_require__("9HlK"));

var FormField =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(FormField, _React$PureComponent);

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
          value = _this$props.value,
          label = _this$props.label,
          fieldProps = (0, _objectWithoutProperties2.default)(_this$props, ["name", "type", "value", "label"]); // eslint-disable-line

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

        case "radio":
          Component = _RadioContainer.default;
          break;
      }

      return _react.default.createElement(_context.FormNameContext.Consumer, null, function (formName) {
        return _react.default.createElement(_context.FormFieldsContext.Consumer, null, function (fields) {
          return _react.default.createElement(_immutable.Field, (0, _extends2.default)({
            component: Component,
            fieldId: "input-".concat(formName, "-").concat(name),
            name: name,
            type: type,
            value: value,
            label: label || fields[name] && _this.props.intl.formatMessage({
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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "K3IS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
export type EmployeeDept = "ACCOUNTING" | "HR" | "MARKETING" | "PRODUCTION" | "PURCHASING" | "RD" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type EmployeeItemContainer_node$ref: FragmentReference;
export type EmployeeItemContainer_node = {|
  +id: string,
  +uid: string,
  +checked: boolean,
  +name: string,
  +dept: EmployeeDept,
  +title: string,
  +country: {|
    +id: string,
    +name: string,
  |},
  +salary: number,
  +$refType: EmployeeItemContainer_node$ref,
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
    "name": "EmployeeItemContainer_node",
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
      "name": "dept",
      "args": null,
      "storageKey": null
    }, {
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
.hash = '6f28bed886134d58db4ef25d70a2a293';
module.exports = node;

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

/***/ "LZqe":
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),

/***/ "MW/T":
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

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _reactRelay = __webpack_require__("iuEU");

var _Relay = __webpack_require__("JyB7");

var _EmployeeListContainer = _interopRequireWildcard(__webpack_require__("Plze"));

var _ErrorMessageContainer = _interopRequireDefault(__webpack_require__("Y3Ay"));

var _isRouteAllowed = _interopRequireDefault(__webpack_require__("jRAA"));

var defaultVariables = {
  first: _EmployeeListContainer.pageSize,
  sortBy: _EmployeeListContainer.sortBy,
  sortDir: _EmployeeListContainer.sortDir
};

var query = function query() {
  return __webpack_require__("gkwM");
};

exports.query = query;

var EmployeesPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(EmployeesPage, _React$Component);

  function EmployeesPage() {
    (0, _classCallCheck2.default)(this, EmployeesPage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EmployeesPage).apply(this, arguments));
  }

  (0, _createClass2.default)(EmployeesPage, [{
    key: "render",
    value: function render() {
      if (!(0, _isRouteAllowed.default)("/tables", this.props.userRoles)) return null;
      return _react.default.createElement(_Relay.NextQueryRenderer, {
        query: query,
        variables: defaultVariables,
        render: function render(_ref) {
          var error = _ref.error,
              props = _ref.props;
          if (error) return _react.default.createElement(_ErrorMessageContainer.default, {
            error: error
          });
          if (!props) return null;
          return _react.default.createElement(_EmployeeListContainer.default, {
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
  return EmployeesPage;
}(_react.default.Component);

var _default = EmployeesPage;
exports.default = _default;

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "MbIc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

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
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

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
    }, _callee, this);
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

/***/ "NFhO":
/***/ (function(module, exports) {

module.exports = require("redux-form/immutable");

/***/ }),

/***/ "NX2N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 6085e9c67d54878489a6fb0db25b1dfe
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type VerifyEmailInput = {|
  emailToken?: ?string,
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

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "PlrT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _require = __webpack_require__("rtrS"),
    allCountries = _require.allCountries,
    iso2Lookup = _require.iso2Lookup;

module.exports = {
  allCountries: _.map(allCountries, function (country) {
    country.name = /^(.*?)(\s*\([^)]+\)\s*)*$/.exec(country.name)[1];
    return country;
  }),
  iso2Lookup: iso2Lookup
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "Plze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pageSize", {
  enumerable: true,
  get: function get() {
    return _EmployeeList.pageSize;
  }
});
Object.defineProperty(exports, "sortBy", {
  enumerable: true,
  get: function get() {
    return _EmployeeList.sortBy;
  }
});
Object.defineProperty(exports, "sortDir", {
  enumerable: true,
  get: function get() {
    return _EmployeeList.sortDir;
  }
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactRelay = __webpack_require__("iuEU");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _state = __webpack_require__("E4eY");

var _state2 = __webpack_require__("ZKx5");

var _EmployeeList = _interopRequireWildcard(__webpack_require__("e1Aj"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    isEditing: _state2.employeesSelectors.isEditModalOpen(state),
    selected: _state2.employeesSelectors.getSelected(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getToken: function getToken() {
      return dispatch(_state.appOperations.getToken());
    },
    onCreate: function onCreate() {
      return dispatch(_state2.employeesOperations.showEditModal());
    },
    onEdit: function onEdit() {
      return dispatch(_state2.employeesOperations.editFirstSelected());
    },
    onDelete: function onDelete(employeeId) {
      return dispatch(_state2.employeesOperations.remove({
        id: employeeId
      }));
    },
    onSetSelected: function onSetSelected(employeeId, isSelected) {
      return dispatch(_state2.employeesOperations.setSelected({
        employeeId: employeeId,
        isSelected: isSelected
      }));
    },
    onSelectAll: function onSelectAll(employeeIds) {
      return dispatch(_state2.employeesOperations.selectAll({
        employeeIds: employeeIds
      }));
    },
    onDeselectAll: function onDeselectAll(exceptEmployeeIds) {
      return dispatch(_state2.employeesOperations.deselectAll({
        exceptEmployeeIds: exceptEmployeeIds
      }));
    }
  };
};

var EmployeeList = (0, _reactRelay.createRefetchContainer)((0, _styles.withStyles)(_EmployeeList.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_EmployeeList.default))), {
  viewer: function viewer() {
    return __webpack_require__("3/e5");
  }
}, function () {
  return __webpack_require__("+V0K");
});
var _default = EmployeeList;
exports.default = _default;

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
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

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

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

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

/***/ "TXK0":
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),

/***/ "Ty80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var moment = __webpack_require__("TXK0");

__webpack_require__("N72Q"); // en is already there


module.exports = moment;

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UWCm":
/***/ (function(module, exports) {

module.exports = require("react-is");

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
    }, _callee, this);
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

/***/ "WFUi":
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

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _classnames = _interopRequireDefault(__webpack_require__("K2gz"));

var _reactIntl = __webpack_require__("k004");

var _TableCell = _interopRequireDefault(__webpack_require__("Ai9N"));

var _TableRow = _interopRequireDefault(__webpack_require__("iDDF"));

var _Checkbox = _interopRequireDefault(__webpack_require__("r6Lb"));

var _Switch = _interopRequireDefault(__webpack_require__("lOiU"));

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

var EmployeeItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(EmployeeItem, _React$Component);

  function EmployeeItem() {
    (0, _classCallCheck2.default)(this, EmployeeItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EmployeeItem).apply(this, arguments));
  }

  (0, _createClass2.default)(EmployeeItem, [{
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
        padding: "checkbox",
        className: (0, _classnames.default)(this.props.isSelected && "selected"),
        classes: {
          root: this.props.classes.checkboxField
        }
      }, _react.default.createElement(_Switch.default, {
        checked: this.props.node.checked,
        onChange: function onChange(evt, checked) {
          return _this.props.onSwitch(_this.props.node.id, checked);
        },
        value: "on",
        color: "default"
      })), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected"),
        component: "th",
        scope: "row"
      }, this.props.node.uid), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected")
      }, this.props.node.name), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected")
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "DEPT_".concat(this.props.node.dept)
      })), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected")
      }, this.props.node.title), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected")
      }, this.props.node.country.name), _react.default.createElement(_TableCell.default, {
        className: (0, _classnames.default)(this.props.isSelected && "selected"),
        align: "right"
      }, _react.default.createElement(_reactIntl.FormattedNumber, {
        value: this.props.node.salary
      })));
    }
  }]);
  return EmployeeItem;
}(_react.default.Component);

var _default = EmployeeItem;
exports.default = _default;

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
    }, _callee, this);
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

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Ygce":
/***/ (function(module, exports) {

module.exports = require("graphql-relay");

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

/***/ "a73a":
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__("7s44"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _Checkbox = _interopRequireDefault(__webpack_require__("r6Lb"));

var _ErrorsContainer = _interopRequireDefault(__webpack_require__("tfRR"));

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

  function MyCheckbox(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyCheckbox);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyCheckbox).call(this, props));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(MyCheckbox, [{
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

/***/ "aAV7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

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
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "b3CU":
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__("pbKT");

var setPrototypeOf = __webpack_require__("vjea");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

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

/***/ "bzUq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ciYs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getFormErrors = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _immutable = __webpack_require__("nuGg");

var _reactRedux = __webpack_require__("h74D");

var _immutable2 = __webpack_require__("NFhO");

var _reduxForm = __webpack_require__("eLzx");

var _context2 = __webpack_require__("mSjk");

var getFormErrors = function getFormErrors(data) {
  var defaultMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "OPERATION_FAILED";
  var result = {};

  var errors = _.get(data, "errors", []);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(errors), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
      reduxOptions = (0, _objectWithoutProperties2.default)(options, ["destroyOnUnmount"]);
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
        var _updateValidation = (0, _asyncToGenerator2.default)(
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "e1Aj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = exports.sortDir = exports.sortBy = exports.pageSize = void 0;

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _reactIntl = __webpack_require__("k004");

var _reactRelay = __webpack_require__("iuEU");

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var _Toolbar = _interopRequireDefault(__webpack_require__("Ms0O"));

var _IconButton = _interopRequireDefault(__webpack_require__("EmCc"));

var _Table = _interopRequireDefault(__webpack_require__("BjFw"));

var _TableBody = _interopRequireDefault(__webpack_require__("30mr"));

var _TableCell = _interopRequireDefault(__webpack_require__("Ai9N"));

var _TableHead = _interopRequireDefault(__webpack_require__("TWtx"));

var _TableRow = _interopRequireDefault(__webpack_require__("iDDF"));

var _TablePagination = _interopRequireDefault(__webpack_require__("bzUq"));

var _TableSortLabel = _interopRequireDefault(__webpack_require__("jOOh"));

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _Checkbox = _interopRequireDefault(__webpack_require__("r6Lb"));

var _Refresh = _interopRequireDefault(__webpack_require__("uQSa"));

var _colorManipulator = __webpack_require__("oOPP");

var _responsiveTable = _interopRequireDefault(__webpack_require__("HSb4"));

var _EmployeeItemContainer = _interopRequireWildcard(__webpack_require__("ptAO"));

var _EditEmployeeModalContainer = _interopRequireDefault(__webpack_require__("eRIX"));

var _ConfirmModalContainer = _interopRequireDefault(__webpack_require__("+fmV"));

var _Relay = __webpack_require__("JyB7");

var pageSize = 10;
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
    paper: {
      background: theme.main.paper
    },
    table: (0, _defineProperty2.default)({}, theme.breakpoints.down("sm"), (0, _responsiveTable.default)(theme)),
    grow: {
      flex: 1
    }
  }, (0, _EmployeeItemContainer.styles)(theme));
};

exports.styles = styles;

var subscription = function subscription() {
  return __webpack_require__("AvS8");
};

var EmployeeList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(EmployeeList, _React$Component);

  function EmployeeList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EmployeeList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EmployeeList).call(this, props));
    _this.state = {
      pageSize: pageSize,
      pageNumber: 0,
      variables: {
        sortBy: sortBy,
        sortDir: sortDir,
        first: pageSize
      },
      isConfirmOpen: false
    };
    _this.handleToggle = _this.handleToggle.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleCreateAction = _this.handleCreateAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleEditAction = _this.handleEditAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleDeleteAction = _this.handleDeleteAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleCancelDelete = _this.handleCancelDelete.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleConfirmDelete = _this.handleConfirmDelete.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRefreshAction = _this.handleRefreshAction.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChangePage = _this.handleChangePage.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChangeRowsPerPage = _this.handleChangeRowsPerPage.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(EmployeeList, [{
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

      var total = _.get(this.props.viewer, "employees.totalCount", 0);

      if (total && this.state.pageNumber * this.state.pageSize >= total) {
        // we fell off the list - reset to the beginning
        var variables = {
          sortBy: sortBy,
          sortDir: sortDir,
          first: this.state.pageSize
        };
        this.setState({
          pageNumber: 0,
          variables: variables
        }, function () {
          return _this2.props.relay.refetch(variables, null, null, {
            force: true
          });
        });
      }

      this.props.onDeselectAll(_.map(_.get(this.props.viewer, "employees.edges", []), "node.id"));
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
    key: "hasRecords",
    value: function hasRecords() {
      return _.get(this.props.viewer, "employees.edges", []).length > 0;
    }
  }, {
    key: "isAllSelected",
    value: function isAllSelected() {
      var list = _.map(_.get(this.props.viewer, "employees.edges", []), "node.id");

      return _.difference(list, this.props.selected).length === 0;
    }
  }, {
    key: "isAllDeselected",
    value: function isAllDeselected() {
      return this.props.selected.length === 0;
    }
  }, {
    key: "isSelected",
    value: function isSelected(employeeId) {
      return _.includes(this.props.selected, employeeId);
    }
  }, {
    key: "handleToggleAll",
    value: function handleToggleAll() {
      var forceOff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (forceOff || this.isAllSelected()) {
        this.props.onDeselectAll();
      } else {
        this.props.onSelectAll(_.map(_.get(this.props.viewer, "employees.edges", []), "node.id"));
      }
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(employeeId) {
      this.props.onSetSelected(employeeId, !this.isSelected(employeeId));
    }
  }, {
    key: "handleCreateAction",
    value: function () {
      var _handleCreateAction = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.onCreate();

              case 2:
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
      var _handleEditAction = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.props.onEdit();

              case 2:
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
      var _handleConfirmDelete = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        var _this3 = this;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  isConfirmOpen: false
                });
                _context3.next = 3;
                return _promise.default.all(_.map(this.props.selected, function (employeeId) {
                  return _this3.props.onDelete(employeeId);
                }));

              case 3:
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
    key: "handleRefreshAction",
    value: function handleRefreshAction() {
      this.props.relay.refetch(this.state.variables, null, null, {
        force: true
      });
    }
  }, {
    key: "handleSort",
    value: function handleSort(sortBy) {
      var _this4 = this;

      var sortDir = "asc";
      if (this.state.variables.sortBy === sortBy) sortDir = this.state.variables.sortDir === "asc" ? "desc" : "asc";
      var variables = {
        sortBy: sortBy,
        sortDir: sortDir,
        first: this.state.pageSize
      };
      this.setState({
        pageNumber: 0,
        variables: variables
      }, function () {
        return _this4.props.relay.refetch(variables, null, null, {
          force: true
        });
      });
    }
  }, {
    key: "handleChangeRowsPerPage",
    value: function handleChangeRowsPerPage(evt) {
      var _this5 = this;

      var pageSize = evt.target.value;
      var variables = {
        sortBy: this.state.variables.sortBy,
        sortDir: this.state.variables.sortDir,
        first: pageSize
      };
      this.setState({
        pageSize: pageSize,
        pageNumber: 0,
        variables: variables
      }, function () {
        return _this5.props.relay.refetch(variables, null, null, {
          force: true
        });
      });
    }
  }, {
    key: "handleChangePage",
    value: function handleChangePage(evt, pageNumber) {
      var _this6 = this;

      if (this.state.pageNumber === pageNumber) return;
      var variables = {
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
        return _this6.props.relay.refetch(variables, null, null, {
          force: true
        });
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
        id: "TITLE_TABLES"
      })), _react.default.createElement("div", {
        className: this.props.classes.grow
      }), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleRefreshAction
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
      })), _react.default.createElement(_TableCell.default, {
        padding: "checkbox"
      }), _react.default.createElement(_TableCell.default, {
        sortDirection: this.state.variables.sortBy === "uid" ? this.state.variables.sortDir : false
      }, _react.default.createElement(_TableSortLabel.default, {
        active: this.state.variables.sortBy === "uid",
        direction: this.state.variables.sortDir,
        onClick: function onClick() {
          return _this7.handleSort("uid");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_UID_COLUMN"
      }))), _react.default.createElement(_TableCell.default, {
        sortDirection: this.state.variables.sortBy === "name" ? this.state.variables.sortDir : false
      }, _react.default.createElement(_TableSortLabel.default, {
        active: this.state.variables.sortBy === "name",
        direction: this.state.variables.sortDir,
        onClick: function onClick() {
          return _this7.handleSort("name");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_NAME_COLUMN"
      }))), _react.default.createElement(_TableCell.default, {
        sortDirection: this.state.variables.sortBy === "dept" ? this.state.variables.sortDir : false
      }, _react.default.createElement(_TableSortLabel.default, {
        active: this.state.variables.sortBy === "dept",
        direction: this.state.variables.sortDir,
        onClick: function onClick() {
          return _this7.handleSort("dept");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_DEPT_COLUMN"
      }))), _react.default.createElement(_TableCell.default, {
        sortDirection: this.state.variables.sortBy === "title" ? this.state.variables.sortDir : false
      }, _react.default.createElement(_TableSortLabel.default, {
        active: this.state.variables.sortBy === "title",
        direction: this.state.variables.sortDir,
        onClick: function onClick() {
          return _this7.handleSort("title");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_TITLE_COLUMN"
      }))), _react.default.createElement(_TableCell.default, {
        sortDirection: this.state.variables.sortBy === "country" ? this.state.variables.sortDir : false
      }, _react.default.createElement(_TableSortLabel.default, {
        active: this.state.variables.sortBy === "country",
        direction: this.state.variables.sortDir,
        onClick: function onClick() {
          return _this7.handleSort("country");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_COUNTRY_COLUMN"
      }))), _react.default.createElement(_TableCell.default, {
        align: "right",
        sortDirection: this.state.variables.sortBy === "salary" ? this.state.variables.sortDir : false
      }, _react.default.createElement(_TableSortLabel.default, {
        active: this.state.variables.sortBy === "salary",
        direction: this.state.variables.sortDir,
        onClick: function onClick() {
          return _this7.handleSort("salary");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_SALARY_COLUMN"
      }))))), _react.default.createElement(_TableBody.default, null, _.map(_.get(this.props.viewer, "employees.edges", []), function (edge) {
        return _react.default.createElement(_EmployeeItemContainer.default, {
          key: edge.cursor,
          node: edge.node,
          onToggle: _this7.handleToggle
        });
      }))), _react.default.createElement(_TablePagination.default, {
        rowsPerPageOptions: [10, 20, 30, 50, 100],
        component: "div",
        count: this.props.viewer.employees.totalCount,
        rowsPerPage: this.state.pageSize,
        page: this.state.pageNumber,
        onChangeRowsPerPage: this.handleChangeRowsPerPage,
        onChangePage: this.handleChangePage
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: this.props.classes.message
      }, _react.default.createElement(_Typography.default, {
        variant: "h6",
        className: this.props.classes.messageTitle
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_MESSAGE_TITLE"
      })), _react.default.createElement(_Typography.default, {
        variant: "body1",
        className: this.props.classes.messageContent
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_MESSAGE_CONTENT"
      }))), _react.default.createElement("div", {
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
        id: "EMPLOYEES_CREATE_BUTTON"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: this.props.selected.length === 0,
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleEditAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_EDIT_BUTTON"
      })), _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        disabled: this.props.selected.length === 0,
        classes: {
          root: this.props.classes.button
        },
        onClick: this.handleDeleteAction
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EMPLOYEES_DELETE_BUTTON"
      }))), this.renderTable(), this.props.isEditing && _react.default.createElement(_EditEmployeeModalContainer.default, null), _react.default.createElement(_ConfirmModalContainer.default, {
        isOpen: this.state.isConfirmOpen,
        title: "DELETE_EMPLOYEE_TITLE",
        text: "DELETE_EMPLOYEE_TEXT",
        cancel: "DELETE_EMPLOYEE_CANCEL",
        submit: "DELETE_EMPLOYEE_SUBMIT",
        onCancel: this.handleCancelDelete,
        onSubmit: this.handleConfirmDelete
      })));
    }
  }]);
  return EmployeeList;
}(_react.default.Component);

(0, _defineProperty2.default)(EmployeeList, "contextType", _Relay.RelayContext);
var _default = EmployeeList;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "e1yp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  uid: {
    normalize: "integer",
    validate: "required",
    label: "EDIT_EMPLOYEE_UID_LABEL"
  },
  checked: {
    label: "EDIT_EMPLOYEE_CHECKED_LABEL"
  },
  name: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required",
    label: "EDIT_EMPLOYEE_NAME_LABEL"
  },
  dept: {
    validate: "required",
    label: "EDIT_EMPLOYEE_DEPT_LABEL"
  },
  title: {
    validate: "required",
    label: "EDIT_EMPLOYEE_TITLE_LABEL"
  },
  country: {
    validate: "required",
    label: "EDIT_EMPLOYEE_COUNTRY_LABEL"
  },
  salary: {
    normalize: "integer",
    validate: "required",
    label: "EDIT_EMPLOYEE_SALARY_LABEL"
  }
};

/***/ }),

/***/ "eLzx":
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "eRIX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _reactIntl = __webpack_require__("k004");

var _state = __webpack_require__("ZKx5");

var _connectForm = _interopRequireDefault(__webpack_require__("ciYs"));

var _EditEmployeeModal = _interopRequireWildcard(__webpack_require__("Bsfg"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentId: _state.employeesSelectors.getEditModalEmployeeId(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onCancel: function onCancel() {
      return dispatch(_state.employeesOperations.hideEditModal());
    },
    onCreate: function onCreate(uid, checked, name, dept, title, country, salary) {
      return dispatch(_state.employeesOperations.create({
        uid: uid,
        checked: checked,
        name: name,
        dept: dept,
        title: title,
        country: country,
        salary: salary
      }));
    },
    onEdit: function onEdit(id, uid, checked, name, dept, title, country, salary) {
      return dispatch(_state.employeesOperations.edit({
        id: id,
        uid: uid,
        checked: checked,
        name: name,
        dept: dept,
        title: title,
        country: country,
        salary: salary
      }));
    }
  };
};

var EditEmployeeModal = (0, _styles.withStyles)(_EditEmployeeModal.styles)((0, _reactIntl.injectIntl)((0, _connectForm.default)(_EditEmployeeModal.default, mapStateToProps, mapDispatchToProps)));
var _default = EditEmployeeModal;
exports.default = _default;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

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


module.exports = function validate(props, options, value, allValues) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

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
exports.setLocale = exports.setConnected = exports.setStatusCode = exports.stop = exports.start = exports.init = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__("Ty80"));

var types = _interopRequireWildcard(__webpack_require__("rz8+"));

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

var deselectAll = function deselectAll(_ref3) {
  var exceptEmployeeIds = _ref3.exceptEmployeeIds;
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

module.exports = {};

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

/***/ "gkwM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 65d29055aa3ccbf9dcadbcfd12c7f271
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EmployeeListContainer_viewer$ref = any;
export type EmployeeSortBy = "checked" | "country" | "dept" | "name" | "salary" | "title" | "uid" | "%future added value";
export type EmployeeSortDir = "asc" | "desc" | "%future added value";
export type EmployeesPageQueryVariables = {|
  sortBy?: ?EmployeeSortBy,
  sortDir?: ?EmployeeSortDir,
  first?: ?number,
  after?: ?string,
  last?: ?number,
  before?: ?string,
|};
export type EmployeesPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: EmployeeListContainer_viewer$ref
  |}
|};
export type EmployeesPageQuery = {|
  variables: EmployeesPageQueryVariables,
  response: EmployeesPageQueryResponse,
|};
*/

/*
query EmployeesPageQuery(
  $sortBy: EmployeeSortBy
  $sortDir: EmployeeSortDir
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  viewer {
    ...EmployeeListContainer_viewer_3WF44T
  }
}

fragment EmployeeListContainer_viewer_3WF44T on Viewer {
  employees(sortBy: $sortBy, sortDir: $sortDir, first: $first, after: $after, last: $last, before: $before) {
    edges {
      cursor
      node {
        id
        ...EmployeeItemContainer_node
      }
    }
    pageInfo {
      startCursor
      endCursor
    }
    totalCount
  }
}

fragment EmployeeItemContainer_node on Employee {
  id
  uid
  checked
  name
  dept
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
      "name": "EmployeesPageQuery",
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
          "name": "EmployeeListContainer_viewer",
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
      "name": "EmployeesPageQuery",
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
                "name": "dept",
                "args": null,
                "storageKey": null
              }, {
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
      "name": "EmployeesPageQuery",
      "id": null,
      "text": "query EmployeesPageQuery(\n  $sortBy: EmployeeSortBy\n  $sortDir: EmployeeSortDir\n  $first: Int\n  $after: String\n  $last: Int\n  $before: String\n) {\n  viewer {\n    ...EmployeeListContainer_viewer_3WF44T\n  }\n}\n\nfragment EmployeeListContainer_viewer_3WF44T on Viewer {\n  employees(sortBy: $sortBy, sortDir: $sortDir, first: $first, after: $after, last: $last, before: $before) {\n    edges {\n      cursor\n      node {\n        id\n        ...EmployeeItemContainer_node\n      }\n    }\n    pageInfo {\n      startCursor\n      endCursor\n    }\n    totalCount\n  }\n}\n\nfragment EmployeeItemContainer_node on Employee {\n  id\n  uid\n  checked\n  name\n  dept\n  title\n  country {\n    id\n    name\n  }\n  salary\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '82e6c3ca4887d2d6592db4b830652cf7';
module.exports = node;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "iDDF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "iYPX":
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__("7s44"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _Radio = _interopRequireDefault(__webpack_require__("CUfL"));

var _ErrorsContainer = _interopRequireDefault(__webpack_require__("tfRR"));

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

  function MyRadio(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MyRadio);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyRadio).call(this, props));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(MyRadio, [{
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
        control: _react.default.createElement(_Radio.default, {
          id: "".concat(this.props.fieldId, "-").concat(this.props.input.value),
          name: this.props.input.name,
          value: this.props.input.value,
          autoFocus: this.props.autoFocus,
          checked: this.props.input.checked,
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
  return MyRadio;
}(_react.default.PureComponent);

var _default = MyRadio;
exports.default = _default;

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

/***/ "jRAA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var constants = __webpack_require__("o4p3");

module.exports = function isRouteAllowed(path) {
  var userRoles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var pageRoles = constants.pages[path] && constants.pages[path].roles;
  if (!pageRoles || pageRoles.length === 0) return true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(pageRoles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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
    }, _callee, this);
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

/***/ "lOiU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

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
exports.FormFieldsContext = exports.FormNameContext = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var FormNameContext = _react.default.createContext({});

exports.FormNameContext = FormNameContext;

var FormFieldsContext = _react.default.createContext({});

exports.FormFieldsContext = FormFieldsContext;

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _typeof2 = _interopRequireDefault(__webpack_require__("iZP3"));

var _construct2 = _interopRequireDefault(__webpack_require__("b3CU"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__("qxCs"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__("0Bsm");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "nuGg":
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "o4p3":
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
      page: "/"
    },
    "/dashboard": {
      page: "/dashboard",
      icon: "dashboard",
      menu: "MENU_DASHBOARD",
      title: "TITLE_DASHBOARD",
      roles: [roles.AUTHENTICATED]
    },
    "/forms": {
      page: "/forms",
      icon: "forms",
      menu: "MENU_FORMS",
      title: "TITLE_FORMS",
      roles: [roles.AUTHENTICATED]
    },
    "/charts": {
      page: "/charts",
      icon: "charts",
      menu: "MENU_CHARTS",
      title: "TITLE_CHARTS",
      roles: [roles.AUTHENTICATED]
    },
    "/tables": {
      page: "/tables",
      icon: "tables",
      menu: "MENU_TABLES",
      title: "TITLE_TABLES",
      roles: [roles.AUTHENTICATED]
    },
    "/maps": {
      page: "/maps",
      icon: "maps",
      menu: "MENU_MAPS",
      title: "TITLE_MAPS",
      roles: [roles.AUTHENTICATED]
    },
    "/notifications": {
      page: "/notifications",
      icon: "notifications",
      menu: "MENU_NOTIFICATIONS",
      title: "TITLE_NOTIFICATIONS",
      roles: [roles.AUTHENTICATED]
    },
    "/typography": {
      page: "/typography",
      icon: "typography",
      menu: "MENU_TYPOGRAPHY",
      title: "TITLE_TYPOGRAPHY",
      roles: [roles.AUTHENTICATED]
    },
    "/icons": {
      page: "/icons",
      icon: "icons",
      menu: "MENU_ICONS",
      title: "TITLE_ICONS",
      roles: [roles.AUTHENTICATED]
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

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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
exports.getUserProviders = exports.getAllProviders = exports.getRoles = exports.getEmail = exports.getName = exports.isAdmin = exports.isAuthenticated = exports.getCsrf = void 0;

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

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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
      }, this.getText()));
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
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _immutable = __webpack_require__("NFhO");

var _normalize = _interopRequireDefault(__webpack_require__("I1eL"));

var _validate2 = _interopRequireDefault(__webpack_require__("fAFH"));

var FormComponent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FormComponent, _React$Component);
  (0, _createClass2.default)(FormComponent, null, [{
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
        for (var _iterator = (0, _getIterator2.default)(_.keys(this.cachedErrors[this.formName] || {})), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
      var _doValidate = (0, _asyncToGenerator2.default)(
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
                _iterator2 = (0, _getIterator2.default)(fields);

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
      var _onValidate = (0, _asyncToGenerator2.default)(
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

                return _context2.abrupt("return", new _promise.default(function (resolve, reject) {
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

    (0, _classCallCheck2.default)(this, FormComponent);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormComponent).call(this, props));
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(FormComponent, [{
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2.default)(
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
      var _submit = (0, _asyncToGenerator2.default)(
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

(0, _defineProperty2.default)(FormComponent, "formName", "baseForm");
(0, _defineProperty2.default)(FormComponent, "fields", {
  /*
  fieldName: {
    normalize: 'rules', // happens on change
    transform: 'rules', // happens on blur
    validate: 'rules',  // happens on blur
    label: 'ID',        // translation ID
  },
   */
});
(0, _defineProperty2.default)(FormComponent, "cachedErrors", {});
var _default = FormComponent;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pbKT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aAV7");

/***/ }),

/***/ "ptAO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "styles", {
  enumerable: true,
  get: function get() {
    return _EmployeeItem.styles;
  }
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _styles = __webpack_require__("9Pu4");

var _reactRelay = __webpack_require__("iuEU");

var _state = __webpack_require__("ZKx5");

var _EmployeeItem = _interopRequireWildcard(__webpack_require__("WFUi"));

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    isSelected: _.includes(_state.employeesSelectors.getSelected(state), props.node.id)
  };
};

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

var EmployeeItem = (0, _reactRelay.createFragmentContainer)((0, _styles.withStyles)(_EmployeeItem.styles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_EmployeeItem.default)), {
  node: function node() {
    return __webpack_require__("K3IS");
  }
});
var _default = EmployeeItem;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "ra+8":
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _immutable = __webpack_require__("nuGg");

var _Select = _interopRequireDefault(__webpack_require__("OdWO"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _MenuItem = _interopRequireDefault(__webpack_require__("x54t"));

var _InputLabel = _interopRequireDefault(__webpack_require__("zOcm"));

var _FilledInput = _interopRequireDefault(__webpack_require__("4VpM"));

var _Input = _interopRequireDefault(__webpack_require__("tBFs"));

var _ErrorsContainer = _interopRequireDefault(__webpack_require__("tfRR"));

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

  function MySelect(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MySelect);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MySelect).call(this, props));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(MySelect, [{
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

/***/ "sLDs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _state = __webpack_require__("Yoxy");

var _EmployeesPage = _interopRequireDefault(__webpack_require__("MW/T"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    userRoles: _state.authSelectors.getRoles(state)
  };
};

var EmployeesPage = (0, _reactRedux.connect)(mapStateToProps)(_EmployeesPage.default);
EmployeesPage.getInitialProps = _EmployeesPage.default.getInitialProps;
var _default = EmployeesPage;
exports.default = _default;

/***/ }),

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "tfRR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _Errors = _interopRequireWildcard(__webpack_require__("F0iy"));

var Errors = (0, _styles.withStyles)(_Errors.styles)((0, _reactIntl.injectIntl)(_Errors.default));
var _default = Errors;
exports.default = _default;

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

/***/ "uQSa":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Refresh");

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

module.exports = {"MENU_DASHBOARD":"Dashboard","TITLE_DASHBOARD":"Dashboard","MENU_FORMS":"Forms","TITLE_FORMS":"Forms","MENU_CHARTS":"Charts","TITLE_CHARTS":"Charts","MENU_TABLES":"Tables","TITLE_TABLES":"Tables","MENU_MAPS":"Maps","TITLE_MAPS":"Maps","MENU_NOTIFICATIONS":"Notifications","TITLE_NOTIFICATIONS":"Notifications","MENU_TYPOGRAPHY":"Typography","TITLE_TYPOGRAPHY":"Typography","MENU_ICONS":"Icons","TITLE_ICONS":"Icons","MENU_USERS":"Users","TITLE_USERS":"Users","SIDEBAR_GITHUB_LINK":"Github","SIDEBAR_BENCHMARKS_LINK":"Benchmarks","SIDEBAR_RESPONSIVENESS_LINK":"Responsiveness Test","HEADER_INBOX_LABEL":"Inbox","HEADER_PROFILE_LABEL":"Profile","DASHBOARD_PROFIT_LABEL":"Profit","DASHBOARD_SALES_LABEL":"Sales","DASHBOARD_CLIENTS_LABEL":"Clients","DASHBOARD_AVG_TIME_LABEL":"Avg Time","DASHBOARD_WORLD_LABEL":"World","DASHBOARD_CLICK_MAP_LABEL":"Click to select","DASHBOARD_NOT_REALLY_LABEL":"(not really)","DEPT_PRODUCTION":"Production","DEPT_RD":"R&D","DEPT_PURCHASING":"Purchasing","DEPT_MARKETING":"Marketing","DEPT_HR":"HR","DEPT_ACCOUNTING":"Accounting","EMPLOYEES_MESSAGE_TITLE":"It's alive!","EMPLOYEES_MESSAGE_CONTENT":["This table is powered by GraphQL API and uses React Relay Modern. Try changing a value in another browser or tab and"," you will see it updated in all the browsers connected to this page thanks to GraphQL Subscriptions."],"EMPLOYEES_UID_COLUMN":"UID","EMPLOYEES_NAME_COLUMN":"Name","EMPLOYEES_DEPT_COLUMN":"Department","EMPLOYEES_TITLE_COLUMN":"Title","EMPLOYEES_COUNTRY_COLUMN":"Country","EMPLOYEES_SALARY_COLUMN":"Salary","EMPLOYEES_CREATE_BUTTON":"Create Employee","EMPLOYEES_EDIT_BUTTON":"Edit Employee","EMPLOYEES_DELETE_BUTTON":"Delete Employees","EDIT_EMPLOYEE_TITLE_CREATE":"Create user","EDIT_EMPLOYEE_TITLE_EDIT":"Edit user","EDIT_EMPLOYEE_UID_LABEL":"UID","EDIT_EMPLOYEE_CHECKED_LABEL":"Enabled","EDIT_EMPLOYEE_NAME_LABEL":"Name","EDIT_EMPLOYEE_DEPT_LABEL":"Department","EDIT_EMPLOYEE_TITLE_LABEL":"Title","EDIT_EMPLOYEE_COUNTRY_LABEL":"Country","EDIT_EMPLOYEE_SALARY_LABEL":"Salary","EDIT_EMPLOYEE_CANCEL":"Cancel","EDIT_EMPLOYEE_SUBMIT":"Submit","DELETE_EMPLOYEE_TITLE":"Delete users","DELETE_EMPLOYEE_TEXT":"Delete selected users?","DELETE_EMPLOYEE_CANCEL":"Cancel","DELETE_EMPLOYEE_SUBMIT":"Delete","USERS_EMAIL_COLUMN":"Email","USERS_EMAIL_VERIFIED_COLUMN":"Verified","USERS_NAME_COLUMN":"Name","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create user","EDIT_USER_TITLE_EDIT":"Edit user","EDIT_USER_NAME_LABEL":"Name","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_ANONYMOUS_LABEL":"Anonymous","EDIT_USER_AUTHENTICATED_LABEL":"Authenticated","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","DELETE_USER_TITLE":"Delete users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","FORMS_MESSAGE_TITLE":"It's alive!","FORMS_MESSAGE_CONTENT":["The form example below is fully functional, the fields normalize and validate the input using this form's"," declaration file. And the server can use the very same declaration file to revalidate the form upon submitting."],"FORMS_SUCCESS_TITLE":"Congratulations!","FORMS_SUCCESS_TEXT":"The form is finished and ready to be submitted to the backend","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Prev","WIZARD_NEXT_BUTTON":"Next","WIZARD_SUBMIT_BUTTON":"Done","WIZARD_ERROR_LABEL":"Please fill out this form","SHIPPING_STEP_TITLE":"Shipping","SHIPPING_STEP_DESCR":"Choose your shipping options","SHIPPING_FIRST_NAME_LABEL":"First name","SHIPPING_MIDDLE_NAME_LABEL":"Middle name (optional)","SHIPPING_LAST_NAME_LABEL":"Last name","SHIPPING_ADDRESS_LABEL":"Address","SHIPPING_CITY_LABEL":"City/town","SHIPPING_STATE_LABEL":"State/Province/Region (if required)","SHIPPING_CODE_LABEL":"ZIP/Postal code","SHIPPING_COUNTRY_LABEL":"Country","SHIPPING_PHONE_LABEL":"Phone number","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"What is a dog?","SHIPPING_Q2":"What kinds of dogs are there?","SHIPPING_Q3":"How do you acquire a dog?","BILLING_STEP_TITLE":"Billing","BILLING_STEP_DESCR":"Enter billing information","BILLING_CARD_NUMBER_LABEL":"Credit card number","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Billing address is the same as shipping address","BILLING_Q1":"What is Lorem Ipsum?","BILLING_Q2":"When did they start using it?","CONFIRM_STEP_TITLE":"Confirm","CONFIRM_STEP_DESCR_SUCCESS":"The form is ready to be submitted","CONFIRM_STEP_DESCR_FAILURE":"The form is not completed yet","CONFIRM_SHIPPING_LABEL":"Shipping Information","CONFIRM_BILLING_LABEL":"Billing Information","CONFIRM_FIRST_NAME_LABEL":"First name:","CONFIRM_MIDDLE_NAME_LABEL":"Middle name:","CONFIRM_LAST_NAME_LABEL":"Last name:","CONFIRM_ADDRESS_LABEL":"Address:","CONFIRM_CITY_LABEL":"City/town:","CONFIRM_STATE_LABEL":"State/Province/Region:","CONFIRM_CODE_LABEL":"ZIP/Postal code:","CONFIRM_COUNTRY_LABEL":"Country:","CONFIRM_PHONE_LABEL":"Phone number:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Credit card number:","CONFIRM_CARD_DATE_LABEL":"Credit card expires:","APP_AUTH_TITLE":"Authentication","APP_AUTH_ANONYMOUS_BUTTON":"Anonymous","APP_AUTH_CREDENTIALS_LABEL":"Sign In using Credentials","APP_AUTH_NEW_USER_LABEL":"I don't have an account yet, please create one","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SERVICE_BUTTON":"Sign In with","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","APP_AUTH_EMAIL_TAKEN":"This email is already registered","OPERATION_FAILED":"Operation failed","ERROR":"Error","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_PATTERN":"Please provide a valid value","ERROR_INVALID_EMAIL":"Please provide a valid email address","ERROR_INVALID_PHONE":"Please, provide a valid phone number","ERROR_INVALID_PHONE_COUNTRY":"This is not a valid phone number for this country","ERROR_INVALID_CREDIT_CARD_NUMBER":"Please, provide a valid credit card number","ERROR_INVALID_CREDIT_CARD_DATE":"Please, provide a valid credit card expiration date","ERROR_INVALID_CREDIT_CARD_SECRET":"Please, provide a valid credit card CVV2 code","ERROR_INVALID_PASSWORD":"Password should be at least 6 characters long","ERROR_MISMATCHED_PASSWORDS":"The two passwords typed do not match"};

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });