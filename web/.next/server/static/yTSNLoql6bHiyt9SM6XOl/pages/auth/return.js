module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "+Ut7":
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
  return __webpack_require__("Q0N3");
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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("F+oH");


/***/ }),

/***/ "2x6k":
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
        fontWeight: "bold",
        textTransform: "uppercase",
        color: textPrimary
      },
      body: {
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
    MuiTooltip: {
      popper: {
        zIndex: 10000
      }
    },
    MuiButton: {
      root: {
        "&$containedPrimary": {
          background: [primaryBackground, "!important"],
          color: [primaryColor, "!important"]
        },
        "&$containedSecondary": {
          background: [secondaryBackground, "!important"],
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
        minWidth: ["32px", "!important"],
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
      track: {
        "&:not($checked)": {
          opacity: 0.25
        }
      }
    }
  }
};

/***/ }),

/***/ "3qfz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__("9Pu4"),
    createMuiTheme = _require.createMuiTheme;

var dark = __webpack_require__("2x6k");

var light = __webpack_require__("J4Ya");

module.exports = {
  defaultTheme: "dark",
  names: ["dark", "light"],
  defs: {
    dark: dark,
    light: light
  },
  themes: {
    dark: createMuiTheme(dark),
    light: createMuiTheme(light)
  }
};

/***/ }),

/***/ "4AUM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash ddf9c278b5d5c2db0d31cdc3036dd5dd
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProfileInput = {|
  name?: ?string,
  email?: ?string,
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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "7Km0":
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
  return __webpack_require__("4AUM");
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

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "BlHF":
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "Cyi7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFormErrors;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

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
      if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result._status = (result._status || []).concat([error.message]);
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
    _status: defaultMessage
  };
  return result;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "F+oH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ReturnPageContainer.default;
  }
});

var _ReturnPageContainer = _interopRequireDefault(__webpack_require__("atTa"));

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "J4Ya":
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
        fontWeight: "bold",
        textTransform: "uppercase",
        color: textPrimary
      },
      body: {
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
    MuiTooltip: {
      popper: {
        zIndex: 10000
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
        minWidth: ["32px", "!important"],
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
      track: {
        "&:not($checked)": {
          opacity: 0.25
        }
      }
    }
  }
};

/***/ }),

/***/ "JMiR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash ea845db8d8a70fd7e5f1e5a53aa977df
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
    +success: ?boolean,
    +accessToken: ?string,
    +refreshToken: ?string,
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
    accessToken
    refreshToken
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
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "accessToken",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "refreshToken",
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
      "text": "mutation VerifyEmailMutation(\n  $input: VerifyEmailInput!\n) {\n  verifyEmail(input: $input) {\n    success\n    accessToken\n    refreshToken\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '1145b01de017614387a8f7bc1405086a';
module.exports = node;

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Jr3Z":
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

/***/ "Jv6i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 94855897f508d7654e7012a3b1d90b5b
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RequestEmailVerificationInput = {|
  locale?: ?string,
  clientMutationId?: ?string,
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

/***/ "MLhr":
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

var types = _interopRequireWildcard(__webpack_require__("seUC"));

var _locales = _interopRequireDefault(__webpack_require__("MSzE"));

var _themes = _interopRequireDefault(__webpack_require__("3qfz"));

/* State Shape
Map({
  created: Number, // timestamp
  statusCode: Number, // current HTTP status code
  isStaticSite: Boolean,
  appServer: String,
  apiServer: String,
  googleMapsKey: null,
  locale: String,
  theme: String,
  isStarted: Boolean,
  isStopped: Boolean,
  isConnected: Boolean, // WebSocket
  isAuthModalOpen: false,
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

var statusCodeReducer = function statusCodeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (_.isFinite(action.statusCode) && action.statusCode >= 200) return action.statusCode;
      break;

    case types.SET_STATUS_CODE:
      if (_.isFinite(action.code) && action.code >= 200) return action.code;
      break;
  }

  return state;
};

var isStaticSiteReducer = function isStaticSiteReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.isStaticSite)) return action.isStaticSite;
      break;
  }

  return state;
};

var appServerReducer = function appServerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.appServer)) return action.appServer;
      break;
  }

  return state;
};

var apiServerReducer = function apiServerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.apiServer)) return action.apiServer;
      break;
  }

  return state;
};

var wsServerReducer = function wsServerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.wsServer)) return action.wsServer;
      break;
  }

  return state;
};

var googleMapsKeyReducer = function googleMapsKeyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.googleMapsKey)) return action.googleMapsKey;
      break;
  }

  return state;
};

var localeReducer = function localeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _locales.default.defaultLocale;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET_LOCALE:
      if (!_.isUndefined(action.locale)) return action.locale;
      break;
  }

  return state;
};

var themeReducer = function themeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _themes.default.defaultTheme;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET_THEME:
      if (!_.isUndefined(action.theme)) return action.theme;
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

var isAuthModalOpenReducer = function isAuthModalOpenReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_AUTH_MODAL:
      return true;

    case types.HIDE_AUTH_MODAL:
      return false;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  created: createdReducer,
  statusCode: statusCodeReducer,
  isStaticSite: isStaticSiteReducer,
  appServer: appServerReducer,
  apiServer: apiServerReducer,
  wsServer: wsServerReducer,
  locale: localeReducer,
  theme: themeReducer,
  googleMapsKey: googleMapsKeyReducer,
  isStarted: isStartedReducer,
  isStopped: isStoppedReducer,
  isConnected: isConnectedReducer,
  isAuthModalOpen: isAuthModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "MSzE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

/**
 * Convert this:
 * {
 *    "KEY": [
 *      "string",
 *      "another",
 *      "..."
 *    ]
 * }
 *
 * Into this:
 * {
 *    "KEY": "stringanother..."
 * }
 */
function parse(source) {
  const messages = {};
  for (let key of _.keys(source))
    messages[key] = _.isArray(source[key]) ? source[key].join("") : source[key];
  return messages;
}

module.exports = {
  defaultLocale: "en",
  locales: ["en", "ru"],
  flags: { en: "US", ru: "RU" },
  names: { en: "English", ru: "Русский язык" },
  messages: {
    en: parse(__webpack_require__("dxCc")),
    ru: parse(__webpack_require__("vu9h"))
  },
  getLocaleData() {
    return [
      __webpack_require__("BlHF"),
      __webpack_require__("vdyi")
    ];
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "P/y3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = exports.sendToast = exports.deleteProfile = exports.unlinkProvider = exports.finishLinkingProvider = exports.linkProvider = exports.updateProfile = exports.finishEmailVerification = exports.requestEmailVerification = exports.signOut = exports.signUp = exports.signIn = exports.stop = exports.start = exports.create = exports.hideAuthModal = exports.showAuthModal = exports.setTheme = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("kWTZ"));

var selectors = _interopRequireWildcard(__webpack_require__("VOgL"));

var _router = _interopRequireDefault(__webpack_require__("4Q3z"));

var _constants = _interopRequireDefault(__webpack_require__("QwoZ"));

var _getFormErrors = _interopRequireDefault(__webpack_require__("Cyi7"));

var _SignIn = _interopRequireDefault(__webpack_require__("xMej"));

var _SignUp = _interopRequireDefault(__webpack_require__("f5YN"));

var _SignOut = _interopRequireDefault(__webpack_require__("flba"));

var _RequestEmailVerification = _interopRequireDefault(__webpack_require__("tyBL"));

var _VerifyEmail = _interopRequireDefault(__webpack_require__("ZUHO"));

var _UpdateProfile = _interopRequireDefault(__webpack_require__("7Km0"));

var _UnlinkProvider = _interopRequireDefault(__webpack_require__("zX+l"));

var _DeleteProfile = _interopRequireDefault(__webpack_require__("n0DR"));

var _GetToken = _interopRequireDefault(__webpack_require__("+Ut7"));

var setStatusCode = actions.setStatusCode;
exports.setStatusCode = setStatusCode;
var setConnected = actions.setConnected;
exports.setConnected = setConnected;
var setLocale = actions.setLocale;
exports.setLocale = setLocale;
var setTheme = actions.setTheme;
exports.setTheme = setTheme;
var showAuthModal = actions.showAuthModal;
exports.showAuthModal = showAuthModal;
var hideAuthModal = actions.hideAuthModal; // called in App.getInitialProps()

exports.hideAuthModal = hideAuthModal;

var create = function create(_ref) {
  var statusCode = _ref.statusCode,
      isStaticSite = _ref.isStaticSite,
      locale = _ref.locale,
      theme = _ref.theme,
      appServer = _ref.appServer,
      apiServer = _ref.apiServer,
      wsServer = _ref.wsServer,
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
                return _context.abrupt("return", dispatch(actions.create({
                  statusCode: statusCode,
                  isStaticSite: isStaticSite,
                  locale: locale,
                  theme: theme,
                  appServer: appServer,
                  apiServer: apiServer,
                  wsServer: wsServer,
                  googleMapsKey: googleMapsKey
                })));

              case 1:
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
                di.singletons(); // instantiate
                // Refresh tokens client side
                // The first AUTH_UPDATE event will activate app and subscriptions websockets

                di.get("fetcher").refreshTokens().catch(console.error);
                return _context2.abrupt("return", dispatch(actions.start()));

              case 3:
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

var stop = function stop() {
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
                return _context3.abrupt("return", dispatch(actions.stop()));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.stop = stop;

var signIn = function signIn(_ref5) {
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
                return (0, _SignIn.default)(di, {
                  email: email,
                  password: password
                });

              case 2:
                data = _context4.sent;

                if (!_.get(data, "data.signIn.success", false)) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 6;
                return di.get("fetcher").setTokens(_.get(data, "data.signIn.accessToken", null), _.get(data, "data.signIn.refreshToken", null));

              case 6:
                return _context4.abrupt("return", true);

              case 7:
                return _context4.abrupt("return", (0, _getFormErrors.default)(data, "APP_AUTH_FAILED"));

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x6, _x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.signIn = signIn;

var signUp = function signUp(_ref7) {
  var email = _ref7.email,
      password = _ref7.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch, getState, di) {
        var locale, data;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                locale = selectors.getLocale(getState());
                _context5.next = 3;
                return (0, _SignUp.default)(di, {
                  email: email,
                  password: password,
                  locale: locale
                });

              case 3:
                data = _context5.sent;

                if (!_.get(data, "data.signUp.success", false)) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 7;
                return di.get("fetcher").setTokens(_.get(data, "data.signUp.accessToken", null), _.get(data, "data.signUp.refreshToken", null));

              case 7:
                return _context5.abrupt("return", true);

              case 8:
                return _context5.abrupt("return", (0, _getFormErrors.default)(data, "APP_AUTH_EMAIL_TAKEN"));

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x9, _x10, _x11) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.signUp = signUp;

var signOut = function signOut() {
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _SignOut.default)(di);

              case 2:
                data = _context6.sent;

                if (!_.get(data, "data.signOut.success", false)) {
                  _context6.next = 10;
                  break;
                }

                _context6.next = 6;
                return dispatch(stop());

              case 6:
                _context6.next = 8;
                return di.get("fetcher").setTokens(null, null);

              case 8:
                window.location.href = "/";
                return _context6.abrupt("return", true);

              case 10:
                return _context6.abrupt("return", false);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x12, _x13, _x14) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.signOut = signOut;

var requestEmailVerification = function requestEmailVerification() {
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(dispatch, getState, di) {
        var locale, data;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                locale = selectors.getLocale(getState());
                _context7.next = 3;
                return (0, _RequestEmailVerification.default)(di, {
                  locale: locale
                });

              case 3:
                data = _context7.sent;
                return _context7.abrupt("return", !!_.get(data, "data.requestEmailVerification.success", false));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x15, _x16, _x17) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
};

exports.requestEmailVerification = requestEmailVerification;

var finishEmailVerification = function finishEmailVerification(_ref11) {
  var token = _ref11.token;
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
                return di.get("fetcher").setTokens(_.get(data, "data.verifyEmail.accessToken", null), _.get(data, "data.verifyEmail.refreshToken", null));

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

      return function (_x18, _x19, _x20) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
};

exports.finishEmailVerification = finishEmailVerification;

var updateProfile = function updateProfile(_ref13) {
  var email = _ref13.email,
      name = _ref13.name,
      password = _ref13.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref14 = (0, _asyncToGenerator2.default)(
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

      return function (_x21, _x22, _x23) {
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
      var _ref16 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(dispatch, getState, di) {
        var refreshToken, data, result, oneTimeToken;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return di.get("fetcher").getRefreshToken();

              case 2:
                refreshToken = _context10.sent;
                _context10.next = 5;
                return (0, _GetToken.default)(di, {
                  type: "oneTime",
                  token: refreshToken
                });

              case 5:
                data = _context10.sent;
                result = _.get(data, "data.getToken.success", null);

                if (result === true) {
                  oneTimeToken = _.get(data, "data.getToken.token", null);
                  window.location.href = selectors.getApiServer(getState()) + _constants.default.apiBase + "/oauth/" + _.lowerCase(provider) + "?token=" + encodeURIComponent(oneTimeToken) + "&redirect=" + encodeURIComponent(window.location.href);
                }

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x24, _x25, _x26) {
        return _ref16.apply(this, arguments);
      };
    }()
  );
};

exports.linkProvider = linkProvider;

var finishLinkingProvider = function finishLinkingProvider(_ref17) {
  var token = _ref17.token,
      redirect = _ref17.redirect;
  return (
    /*#__PURE__*/
    function () {
      var _ref18 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return (0, _GetToken.default)(di, {
                  type: "access",
                  token: token
                });

              case 2:
                data = _context11.sent;

                if (!_.get(data, "data.getToken.success", false)) {
                  _context11.next = 8;
                  break;
                }

                _context11.next = 6;
                return di.get("fetcher").setTokens(_.get(data, "data.getToken.token", null), _.get(data, "data.getToken.refreshToken", null));

              case 6:
                _router.default.push(redirect || "/");

                return _context11.abrupt("return", true);

              case 8:
                return _context11.abrupt("return", false);

              case 9:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x27, _x28, _x29) {
        return _ref18.apply(this, arguments);
      };
    }()
  );
};

exports.finishLinkingProvider = finishLinkingProvider;

var unlinkProvider = function unlinkProvider(_ref19) {
  var provider = _ref19.provider;
  return (
    /*#__PURE__*/
    function () {
      var _ref20 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return (0, _UnlinkProvider.default)(di, {
                  provider: provider
                });

              case 2:
                data = _context12.sent;

                if (!_.get(data, "data.unlinkProvider.success", false)) {
                  _context12.next = 5;
                  break;
                }

                return _context12.abrupt("return", true);

              case 5:
                return _context12.abrupt("return", (0, _getFormErrors.default)(data));

              case 6:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x30, _x31, _x32) {
        return _ref20.apply(this, arguments);
      };
    }()
  );
};

exports.unlinkProvider = unlinkProvider;

var deleteProfile = function deleteProfile() {
  return (
    /*#__PURE__*/
    function () {
      var _ref21 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee13(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return (0, _DeleteProfile.default)(di);

              case 2:
                data = _context13.sent;

                if (!_.get(data, "data.deleteProfile.success", false)) {
                  _context13.next = 10;
                  break;
                }

                _context13.next = 6;
                return dispatch(stop());

              case 6:
                _context13.next = 8;
                return di.get("fetcher").setTokens(null, null);

              case 8:
                window.location.href = "/";
                return _context13.abrupt("return", true);

              case 10:
                return _context13.abrupt("return", false);

              case 11:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      return function (_x33, _x34, _x35) {
        return _ref21.apply(this, arguments);
      };
    }()
  );
};

exports.deleteProfile = deleteProfile;

var sendToast = function sendToast(_ref22) {
  var position = _ref22.position,
      title = _ref22.title,
      content = _ref22.content;
  return (
    /*#__PURE__*/
    function () {
      var _ref23 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", di.get("socket").emit(_constants.default.messages.TOAST, {
                  position: position,
                  title: title,
                  content: content
                }));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      return function (_x36, _x37, _x38) {
        return _ref23.apply(this, arguments);
      };
    }()
  );
};

exports.sendToast = sendToast;

var setCookie = function setCookie(_ref24) {
  var name = _ref24.name,
      value = _ref24.value,
      days = _ref24.days;
  return (
    /*#__PURE__*/
    function () {
      var _ref25 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee15(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", di.get("cookie").set(name, value, days));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      return function (_x39, _x40, _x41) {
        return _ref25.apply(this, arguments);
      };
    }()
  );
};

exports.setCookie = setCookie;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "Q0N3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 85fbd47a00e06d8a6321f0e9ad1ef759
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GetTokenInput = {|
  type?: ?string,
  token?: ?string,
  clientMutationId?: ?string,
|};
export type GetTokenMutationVariables = {|
  input: GetTokenInput
|};
export type GetTokenMutationResponse = {|
  +getToken: ?{|
    +success: ?boolean,
    +token: ?string,
    +refreshToken: ?string,
  |}
|};
export type GetTokenMutation = {|
  variables: GetTokenMutationVariables,
  response: GetTokenMutationResponse,
|};
*/

/*
mutation GetTokenMutation(
  $input: GetTokenInput!
) {
  getToken(input: $input) {
    success
    token
    refreshToken
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "GetTokenInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "getToken",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }],
    "concreteType": "GetTokenPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "token",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "refreshToken",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "GetTokenMutation",
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
      "name": "GetTokenMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "GetTokenMutation",
      "id": null,
      "text": "mutation GetTokenMutation(\n  $input: GetTokenInput!\n) {\n  getToken(input: $input) {\n    success\n    token\n    refreshToken\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '31309691311617f3664d552cabfdba3a';
module.exports = node;

/***/ }),

/***/ "QwoZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

const roles = {
  AUTHENTICATED: "AUTHENTICATED", // every one logged in has this
  ADMIN: "ADMIN"
};

module.exports = {
  apiBase: "/v1",
  socketsBase: "/ws",
  graphqlBase: "/graphql",
  roles,
  oauthProviders: {
    GOOGLE: "GOOGLE",
    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER"
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
      isAllowed: user => !!user
    },
    "/auth/verify": {
      page: "/auth/verify",
      title: "TITLE_VERIFY"
    },
    "/auth/return": {
      page: "/auth/return"
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
      isAllowed: user => !!user && _.includes(user.roles, roles.ADMIN)
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
  messages: {
    HELLO: "HELLO",
    AUTH: "AUTH",
    TOAST: "TOAST"
  },
  events: {
    FONTS_LOADED: "FONTS_LOADED",
    AUTH_UPDATED: "AUTH_UPDATED",
    UPDATE_READY: "UPDATE_READY",
    TOAST: "TOAST"
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "RGyf":
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

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

/***/ "VOgL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthModalOpen = exports.isStaticSite = exports.isConnected = exports.isStopped = exports.isStarted = exports.getGoogleMapsKey = exports.getTheme = exports.getLocale = exports.getWsServer = exports.getApiServer = exports.getAppServer = exports.getStatusCode = exports.getCreated = void 0;

var getCreated = function getCreated(state) {
  return state.getIn(["app", "created"]);
};

exports.getCreated = getCreated;

var getStatusCode = function getStatusCode(state) {
  return state.getIn(["app", "statusCode"]);
};

exports.getStatusCode = getStatusCode;

var getAppServer = function getAppServer(state) {
  return state.getIn(["app", "appServer"]);
};

exports.getAppServer = getAppServer;

var getApiServer = function getApiServer(state) {
  return state.getIn(["app", "apiServer"]);
};

exports.getApiServer = getApiServer;

var getWsServer = function getWsServer(state) {
  return state.getIn(["app", "wsServer"]);
};

exports.getWsServer = getWsServer;

var getLocale = function getLocale(state) {
  return state.getIn(["app", "locale"]);
};

exports.getLocale = getLocale;

var getTheme = function getTheme(state) {
  return state.getIn(["app", "theme"]);
};

exports.getTheme = getTheme;

var getGoogleMapsKey = function getGoogleMapsKey(state) {
  return state.getIn(["app", "googleMapsKey"]);
};

exports.getGoogleMapsKey = getGoogleMapsKey;

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

var isStaticSite = function isStaticSite(state) {
  return state.getIn(["app", "isStaticSite"]);
};

exports.isStaticSite = isStaticSite;

var isAuthModalOpen = function isAuthModalOpen(state) {
  return state.getIn(["app", "isAuthModalOpen"]);
};

exports.isAuthModalOpen = isAuthModalOpen;

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

/***/ "XiiD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("MLhr"));

var appTypes = _interopRequireWildcard(__webpack_require__("seUC"));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__("P/y3"));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__("VOgL"));

exports.appSelectors = appSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z15E":
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

/***/ "ZUHO":
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
  return __webpack_require__("JMiR");
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

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "atTa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _state = __webpack_require__("XiiD");

var _ReturnPage = _interopRequireDefault(__webpack_require__("wNor"));

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onReturn: function onReturn(token, redirect) {
      return dispatch(_state.appOperations.finishLinkingProvider({
        token: token,
        redirect: redirect
      }));
    }
  };
};

var ReturnPage = (0, _reactRedux.connect)(null, mapDispatchToProps)(_ReturnPage.default);
ReturnPage.getInitialProps = _ReturnPage.default.getInitialProps;
var _default = ReturnPage;
exports.default = _default;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "chYl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 45d34ce684066df95331f1e5da5be638
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpInput = {|
  email?: ?string,
  password?: ?string,
  locale?: ?string,
  clientMutationId?: ?string,
|};
export type SignUpMutationVariables = {|
  input: SignUpInput
|};
export type SignUpMutationResponse = {|
  +signUp: ?{|
    +success: ?boolean,
    +accessToken: ?string,
    +refreshToken: ?string,
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
    accessToken
    refreshToken
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
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "accessToken",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "refreshToken",
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
      "text": "mutation SignUpMutation(\n  $input: SignUpInput!\n) {\n  signUp(input: $input) {\n    success\n    accessToken\n    refreshToken\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '7196bfb966526dde69288ffdd3b223aa';
module.exports = node;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dxCc":
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Dashboard","TITLE_DASHBOARD":"Dashboard","MENU_FORMS":"Forms","TITLE_FORMS":"Forms","MENU_CHARTS":"Charts","TITLE_CHARTS":"Charts","MENU_TABLES":"Tables","TITLE_TABLES":"Tables","MENU_MAPS":"Maps","TITLE_MAPS":"Maps","MENU_NOTIFICATIONS":"Notifications","TITLE_NOTIFICATIONS":"Notifications","MENU_TYPOGRAPHY":"Typography","TITLE_TYPOGRAPHY":"Typography","MENU_ICONS":"Icons","TITLE_ICONS":"Icons","MENU_USERS":"Users","TITLE_USERS":"Users","TITLE_PROFILE":"Profile","TITLE_VERIFY":"Email verification","TITLE_OAUTH_ERROR":"Authentication error","THEME_DARK_MENU":"Dark","THEME_DARK_LABEL":"Dark Theme","THEME_LIGHT_MENU":"Light","THEME_LIGHT_LABEL":"Light Theme","LAYOUT_UPDATE_READY_MESSAGE":"An update is available. Click here to reload the page.","LAYOUT_NOT_CONNECTED_MESSAGE":"Connecting...","SIDEBAR_LOGIN_BUTTON":"Sign Up / Login","SIDEBAR_GITHUB_LINK":"Github","SIDEBAR_BENCHMARKS_LINK":"Benchmarks","SIDEBAR_RESPONSIVENESS_LINK":"Responsiveness Test","HEADER_INBOX_LABEL":"Inbox","HEADER_PROFILE_LABEL":"Profile","HEADER_PROFILE_TOOLTIP":"As an anoymous user you don't have a profile.","PROFILE_NAME_LABEL":"Display name","PROFILE_EMAIL_LABEL":"Email","PROFILE_PASSWORD1_LABEL":"New password","PROFILE_PASSWORD2_LABEL":"Retype password","PROFILE_SAVE_BUTTON":"Save","PROFILE_DESTROY_BUTTON":"Self-destruct","PROFILE_VERIFY_BUTTON":"Verify Email","PROFILE_LINK_BUTTON":"Link","PROFILE_UNLINK_BUTTON":"Unlink","PROFILE_SAVE_SUCCESS":"Profile has been updated","PROFILE_VERIFY_SUCCESS":"Please check your mailbox for the verification email","PROFILE_LINK_SUCCESS":"Linking the service provider...","PROFILE_UNLINK_SUCCESS":"The service is no longer linked to your account","VERIFY_EMAIL_SUBJECT":"Next Dashboard - Verify your email","VERIFY_EMAIL_TEXT":"Use the link below to verify your email address:\n\n{url}\n\n","VERIFY_EMAIL_HTML":"<p>Use the link below to verify your email address:</p><p>{url}</p>","VERIFY_INTRO_MESSAGE":"Please use the button below to verify your email address","VERIFY_FAILED_MESSAGE":"This link is no longer valid","VERIFY_ACTION_BUTTON":"Verify Email","DELETE_PROFILE_TITLE":"Delete profile","DELETE_PROFILE_TEXT":"Are you sure you want to delete your profile?","DELETE_PROFILE_CANCEL":"Cancel","DELETE_PROFILE_SUBMIT":"Delete","OAUTH_ERROR_GENERIC":"An error occured","OAUTH_ERROR_ACCOUNT_EXISTS":"An account associated with your email address already exists","OAUTH_ERROR_ACCOUNT_EXISTS_TITLE1":"Why am I seeing this?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE1":["It looks like you might have already signed up using another service.\n","To protect your account, if you have perviously signed up using another service you must"," link accounts before you can use a different service to sign in."],"OAUTH_ERROR_ACCOUNT_EXISTS_TITLE2":"How do I fix this?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE2":["To sign in using another service, first sign in using your email address or the previous"," service then link accounts in your profile page."],"DASHBOARD_PROFIT_LABEL":"Profit","DASHBOARD_SALES_LABEL":"Sales","DASHBOARD_CLIENTS_LABEL":"Clients","DASHBOARD_AVG_TIME_LABEL":"Avg Time","DASHBOARD_WORLD_LABEL":"World","DASHBOARD_CLICK_MAP_LABEL":"Click to select","DASHBOARD_NOT_REALLY_LABEL":"(not really)","DEPT_PRODUCTION":"Production","DEPT_RD":"R&D","DEPT_PURCHASING":"Purchasing","DEPT_MARKETING":"Marketing","DEPT_HR":"HR","DEPT_ACCOUNTING":"Accounting","EMPLOYEES_MESSAGE_TITLE":"It's alive!","EMPLOYEES_MESSAGE_CONTENT":["This table is powered by GraphQL API and uses React Relay Modern. Try changing a value in another browser or tab and"," you will see it updated in all the browsers connected to this page thanks to GraphQL Subscriptions."],"EMPLOYEES_UID_COLUMN":"UID","EMPLOYEES_NAME_COLUMN":"Name","EMPLOYEES_DEPT_COLUMN":"Department","EMPLOYEES_TITLE_COLUMN":"Title","EMPLOYEES_COUNTRY_COLUMN":"Country","EMPLOYEES_SALARY_COLUMN":"Salary","EMPLOYEES_CREATE_BUTTON":"Create Employee","EMPLOYEES_EDIT_BUTTON":"Edit Employee","EMPLOYEES_DELETE_BUTTON":"Delete Employees","EDIT_EMPLOYEE_TITLE_CREATE":"Create employee","EDIT_EMPLOYEE_TITLE_EDIT":"Edit employee","EDIT_EMPLOYEE_UID_LABEL":"UID","EDIT_EMPLOYEE_UID_HINT":"Digits only","EDIT_EMPLOYEE_CHECKED_LABEL":"Enabled","EDIT_EMPLOYEE_NAME_LABEL":"Name","EDIT_EMPLOYEE_DEPT_LABEL":"Department","EDIT_EMPLOYEE_TITLE_LABEL":"Title","EDIT_EMPLOYEE_COUNTRY_LABEL":"Country","EDIT_EMPLOYEE_SALARY_LABEL":"Salary","EDIT_EMPLOYEE_CANCEL":"Cancel","EDIT_EMPLOYEE_SUBMIT":"Submit","DELETE_EMPLOYEE_TITLE":"Delete employees","DELETE_EMPLOYEE_TEXT":"Delete selected employees?","DELETE_EMPLOYEE_CANCEL":"Cancel","DELETE_EMPLOYEE_SUBMIT":"Delete","USERS_EMAIL_COLUMN":"Email","USERS_EMAIL_VERIFIED_COLUMN":"Verified","USERS_NAME_COLUMN":"Name","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create user","EDIT_USER_TITLE_EDIT":"Edit user","EDIT_USER_NAME_LABEL":"Name","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_ANONYMOUS_LABEL":"Anonymous","EDIT_USER_AUTHENTICATED_LABEL":"Authenticated","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","DELETE_USER_TITLE":"Delete users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","FORMS_MESSAGE_TITLE":"It's alive!","FORMS_MESSAGE_CONTENT":["The form example below is fully functional, the fields normalize and validate the input using this form's"," declaration file. And the server can use the very same declaration file to revalidate the form upon submitting."],"FORMS_SUCCESS_TITLE":"Congratulations!","FORMS_SUCCESS_TEXT":"The form is finished and ready to be submitted to the backend","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Prev","WIZARD_NEXT_BUTTON":"Next","WIZARD_SUBMIT_BUTTON":"Done","WIZARD_ERROR_LABEL":"Please fill out this form","SHIPPING_STEP_TITLE":"Shipping","SHIPPING_STEP_DESCR":"Choose your shipping options","SHIPPING_FIRST_NAME_LABEL":"First name","SHIPPING_MIDDLE_NAME_LABEL":"Middle name (optional)","SHIPPING_LAST_NAME_LABEL":"Last name","SHIPPING_ADDRESS_LABEL":"Address","SHIPPING_CITY_LABEL":"City/town","SHIPPING_STATE_LABEL":"State/Province/Region (if required)","SHIPPING_CODE_LABEL":"ZIP/Postal code","SHIPPING_COUNTRY_LABEL":"Country","SHIPPING_PHONE_LABEL":"Phone number","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"What is a dog?","SHIPPING_Q2":"What kinds of dogs are there?","SHIPPING_Q3":"How do you acquire a dog?","BILLING_STEP_TITLE":"Billing","BILLING_STEP_DESCR":"Enter billing information","BILLING_CARD_NUMBER_LABEL":"Credit card number","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Billing address is the same as shipping address","BILLING_Q1":"What is Lorem Ipsum?","BILLING_Q2":"When did they start using it?","CONFIRM_STEP_TITLE":"Confirm","CONFIRM_STEP_DESCR_SUCCESS":"The form is ready to be submitted","CONFIRM_STEP_DESCR_FAILURE":"The form is not completed yet","CONFIRM_SHIPPING_LABEL":"Shipping Information","CONFIRM_BILLING_LABEL":"Billing Information","CONFIRM_FIRST_NAME_LABEL":"First name:","CONFIRM_MIDDLE_NAME_LABEL":"Middle name:","CONFIRM_LAST_NAME_LABEL":"Last name:","CONFIRM_ADDRESS_LABEL":"Address:","CONFIRM_CITY_LABEL":"City/town:","CONFIRM_STATE_LABEL":"State/Province/Region:","CONFIRM_CODE_LABEL":"ZIP/Postal code:","CONFIRM_COUNTRY_LABEL":"Country:","CONFIRM_PHONE_LABEL":"Phone number:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Credit card number:","CONFIRM_CARD_DATE_LABEL":"Credit card expires:","NOTIFICATIONS_LABEL":"Notifications","NOTIFICATIONS_TITLE":"Styled Popup!","ICONS_FILTER_LABEL":"Filter","APP_AUTH_TITLE":"Authentication","APP_AUTH_ANONYMOUS_BUTTON":"Anonymous","APP_AUTH_CREDENTIALS_LABEL":"Sign In using Credentials","APP_AUTH_NEW_USER_LABEL":"I don't have an account yet, please create one","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SERVICE_BUTTON":"Sign In with","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","APP_AUTH_EMAIL_TAKEN":"This email is already registered","OPERATION_FAILED":"Operation failed","ERROR":"Error","ERROR_GO_HOME_LINK":"Go the start page","ERROR_TRY_AUTH_LINK":"Sign in and retry","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_PATTERN":"Please provide a valid value","ERROR_INVALID_EMAIL":"Please provide a valid email address","ERROR_INVALID_PHONE":"Please, provide a valid phone number","ERROR_INVALID_PHONE_COUNTRY":"This is not a valid phone number for this country","ERROR_INVALID_CREDIT_CARD_NUMBER":"Please, provide a valid credit card number","ERROR_INVALID_CREDIT_CARD_DATE":"Please, provide a valid credit card expiration date","ERROR_INVALID_CREDIT_CARD_SECRET":"Please, provide a valid credit card CVV2 code","ERROR_INVALID_PASSWORD":"Password should be at least 6 characters long","ERROR_MISMATCHED_VALUES":"The two values you entered do not match"};

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "f5YN":
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
  return __webpack_require__("chYl");
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

/***/ "fXmL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash f4b32eaa7eadc44edc44da4b517c746d
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
    +success: ?boolean,
    +accessToken: ?string,
    +refreshToken: ?string,
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
    accessToken
    refreshToken
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
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "accessToken",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "refreshToken",
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
      "text": "mutation SignInMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    success\n    accessToken\n    refreshToken\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'eb8bf52c0ccf7e65f3586bd8d368f9c6';
module.exports = node;

/***/ }),

/***/ "flba":
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
  return __webpack_require__("Z15E");
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

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

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

/***/ "kWTZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideAuthModal = exports.showAuthModal = exports.setConnected = exports.setTheme = exports.setLocale = exports.setStatusCode = exports.stop = exports.start = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__("s/BC"));

var types = _interopRequireWildcard(__webpack_require__("seUC"));

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

var setLocale = function setLocale(_ref2) {
  var locale = _ref2.locale;

  _moment.default.locale(locale);

  return {
    type: types.SET_LOCALE,
    locale: locale
  };
};

exports.setLocale = setLocale;

var setTheme = function setTheme(_ref3) {
  var theme = _ref3.theme;
  return {
    type: types.SET_THEME,
    theme: theme
  };
};

exports.setTheme = setTheme;

var setConnected = function setConnected(_ref4) {
  var isConnected = _ref4.isConnected;
  return {
    type: types.SET_CONNECTED,
    isConnected: isConnected
  };
};

exports.setConnected = setConnected;

var showAuthModal = function showAuthModal() {
  return {
    type: types.SHOW_AUTH_MODAL
  };
};

exports.showAuthModal = showAuthModal;

var hideAuthModal = function hideAuthModal() {
  return {
    type: types.HIDE_AUTH_MODAL
  };
};

exports.hideAuthModal = hideAuthModal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "n0DR":
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
  return __webpack_require__("Jr3Z");
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

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "s/BC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//const moment = require("moment-timezone");
const moment = __webpack_require__("wy2R");
__webpack_require__("N72Q"); // en is already there

module.exports = moment;


/***/ }),

/***/ "seUC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_AUTH_MODAL = exports.SHOW_AUTH_MODAL = exports.SET_THEME = exports.SET_LOCALE = exports.SET_CONNECTED = exports.SET_STATUS_CODE = exports.STOP = exports.START = exports.CREATE = void 0;
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
var SET_THEME = "app/app/SET_THEME";
exports.SET_THEME = SET_THEME;
var SHOW_AUTH_MODAL = "app/app/SHOW_AUTH_MODAL";
exports.SHOW_AUTH_MODAL = SHOW_AUTH_MODAL;
var HIDE_AUTH_MODAL = "app/app/HIDE_AUTH_MODAL";
exports.HIDE_AUTH_MODAL = HIDE_AUTH_MODAL;

/***/ }),

/***/ "tyBL":
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
  return __webpack_require__("Jv6i");
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

/***/ "vdyi":
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/ru.js");

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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "vu9h":
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Дашборд","TITLE_DASHBOARD":"Дашборд","MENU_FORMS":"Формы","TITLE_FORMS":"Формы","MENU_CHARTS":"Графики","TITLE_CHARTS":"Графики","MENU_TABLES":"Таблицы","TITLE_TABLES":"Таблицы","MENU_MAPS":"Карты","TITLE_MAPS":"Карты","MENU_NOTIFICATIONS":"Уведомления","TITLE_NOTIFICATIONS":"Уведомления","MENU_TYPOGRAPHY":"Типографика","TITLE_TYPOGRAPHY":"Типографика","MENU_ICONS":"Иконки","TITLE_ICONS":"Иконки","MENU_USERS":"Пользователи","TITLE_USERS":"Пользователи","TITLE_PROFILE":"Профиль","TITLE_VERIFY":"Верификация email","TITLE_OAUTH_ERROR":"Ошибка авторизации","THEME_DARK_MENU":"Темная","THEME_DARK_LABEL":"Темная тема","THEME_LIGHT_MENU":"Светлая","THEME_LIGHT_LABEL":"Светлая тема","LAYOUT_UPDATE_READY_MESSAGE":"Доступно обновление. Кликните здесь, чтобы перезагрузить страницу.","LAYOUT_NOT_CONNECTED_MESSAGE":"Подключение...","SIDEBAR_LOGIN_BUTTON":"Вход / Регистрация","SIDEBAR_GITHUB_LINK":"Github","SIDEBAR_BENCHMARKS_LINK":"Сравнительный тест","SIDEBAR_RESPONSIVENESS_LINK":"Тест реактивности","HEADER_INBOX_LABEL":"Входяшие","HEADER_PROFILE_LABEL":"Профиль","HEADER_PROFILE_TOOLTIP":"Как у анонимный пользователя, у вас нет профиля.","PROFILE_NAME_LABEL":"Отображаемое имя","PROFILE_EMAIL_LABEL":"Email","PROFILE_PASSWORD1_LABEL":"Новый пароль","PROFILE_PASSWORD2_LABEL":"Повторите пароль","PROFILE_SAVE_BUTTON":"Сохранить","PROFILE_DESTROY_BUTTON":"Самоуничтожение","PROFILE_VERIFY_BUTTON":"Верифицировать email","PROFILE_LINK_BUTTON":"Привязать","PROFILE_UNLINK_BUTTON":"Отвязать","PROFILE_SAVE_SUCCESS":"Профиль был обновлен","PROFILE_VERIFY_SUCCESS":"Пожалуйста, проверьте вашу почту по поводу верификацонного сообщения","PROFILE_LINK_SUCCESS":"Привязываем провайдера...","PROFILE_UNLINK_SUCCESS":"Сервис более не привязан к вашему аккаунту","VERIFY_EMAIL_SUBJECT":"Next Dashboard - Верифицируйте ваш email","VERIFY_EMAIL_TEXT":"Используйте ссылку ниже для верификации вашего email:\n\n{url}\n\n","VERIFY_EMAIL_HTML":"<p>Используйте ссылку ниже для верификации вашего email:</p><p>{url}</p>","VERIFY_INTRO_MESSAGE":"Пожалуйста, используйте кнопку ниже для верификации вашего email","VERIFY_FAILED_MESSAGE":"Эта ссылка больше не работает","VERIFY_ACTION_BUTTON":"Верифицировать email","DELETE_PROFILE_TITLE":"Удалить профиль","DELETE_PROFILE_TEXT":"Вы уверены, что хотите удалить ваш профиль?","DELETE_PROFILE_CANCEL":"Отменить","DELETE_PROFILE_SUBMIT":"Удалить","OAUTH_ERROR_GENERIC":"Произошла ошибка","OAUTH_ERROR_ACCOUNT_EXISTS":"Аккаунт, связанный с вашим email, уже существует","OAUTH_ERROR_ACCOUNT_EXISTS_TITLE1":"Почему я это вижу?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE1":["Похоже, что вы уже входили, используя другой сервис.\n","Чтобы защитить ваш аккаунт, если вы уже входили, используя другой сервис, вам"," необходимо связать ваши аккануты, прежде чем вы сможете войти, используя другой сервис."],"OAUTH_ERROR_ACCOUNT_EXISTS_TITLE2":"Как это починить?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE2":["Чтобы войти, используя другой сервис, сначала войдите, используя email или предыдущий"," сервис, затем свяжите ваши аккаунты на странице профиля."],"DASHBOARD_PROFIT_LABEL":"Прибыль","DASHBOARD_SALES_LABEL":"Продажи","DASHBOARD_CLIENTS_LABEL":"Клиенты","DASHBOARD_AVG_TIME_LABEL":"Сред. время","DASHBOARD_WORLD_LABEL":"Мир","DASHBOARD_CLICK_MAP_LABEL":"Кликните, чтобы выбрать","DASHBOARD_NOT_REALLY_LABEL":"(на самом деле нет)","DEPT_PRODUCTION":"Производство","DEPT_RD":"R&D","DEPT_PURCHASING":"Закупки","DEPT_MARKETING":"Маркетинг","DEPT_HR":"HR","DEPT_ACCOUNTING":"Бухгалтерия","EMPLOYEES_MESSAGE_TITLE":"Оно живое!","EMPLOYEES_MESSAGE_CONTENT":["Эта таблица работает благодаря GraphQL API и использует React Relay Modern. Попробуйте изменить значение в"," другом броузере или вкладке и вы увидите, что оно обновилось во всех броузерах, подключенных к данной странице,"," благодаря GraphQL Subscriptions."],"EMPLOYEES_UID_COLUMN":"UID","EMPLOYEES_NAME_COLUMN":"Имя","EMPLOYEES_DEPT_COLUMN":"Отдел","EMPLOYEES_TITLE_COLUMN":"Должность","EMPLOYEES_COUNTRY_COLUMN":"Страна","EMPLOYEES_SALARY_COLUMN":"Оклад","EMPLOYEES_CREATE_BUTTON":"Создать сотрудника","EMPLOYEES_EDIT_BUTTON":"Изменить сотрудника","EMPLOYEES_DELETE_BUTTON":"Удалить сотрудников","EDIT_EMPLOYEE_TITLE_CREATE":"Создать сотрудника","EDIT_EMPLOYEE_TITLE_EDIT":"Изменить сотрудника","EDIT_EMPLOYEE_UID_LABEL":"UID","EDIT_EMPLOYEE_UID_HINT":"Только цифры","EDIT_EMPLOYEE_CHECKED_LABEL":"Включен","EDIT_EMPLOYEE_NAME_LABEL":"Имя","EDIT_EMPLOYEE_DEPT_LABEL":"Отдел","EDIT_EMPLOYEE_TITLE_LABEL":"Должность","EDIT_EMPLOYEE_COUNTRY_LABEL":"Страна","EDIT_EMPLOYEE_SALARY_LABEL":"Оклад","EDIT_EMPLOYEE_CANCEL":"Отменить","EDIT_EMPLOYEE_SUBMIT":"Отправить","DELETE_EMPLOYEE_TITLE":"Удалить сотрудников","DELETE_EMPLOYEE_TEXT":"Удалить выбранных сотрудников?","DELETE_EMPLOYEE_CANCEL":"Отменить","DELETE_EMPLOYEE_SUBMIT":"Удалить","USERS_EMAIL_COLUMN":"Email","USERS_EMAIL_VERIFIED_COLUMN":"Преверен","USERS_NAME_COLUMN":"Имя","USERS_ROLES_COLUMN":"Роли","USERS_CREATE_BUTTON":"Создать пользователя","USERS_EDIT_BUTTON":"Изменить пользователя","USERS_DELETE_BUTTON":"Удалить пользователей","EDIT_USER_TITLE_CREATE":"Создать пользователя","EDIT_USER_TITLE_EDIT":"Изменить пользователя","EDIT_USER_NAME_LABEL":"Имя","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Пароль","EDIT_USER_ANONYMOUS_LABEL":"Аноним","EDIT_USER_AUTHENTICATED_LABEL":"Авторизованный","EDIT_USER_ADMIN_LABEL":"Администратор","EDIT_USER_CANCEL":"Отменить","EDIT_USER_SUBMIT":"Отправить","DELETE_USER_TITLE":"Удалить пользователей","DELETE_USER_TEXT":"Удалить выбранных пользователей?","DELETE_USER_CANCEL":"Отменить","DELETE_USER_SUBMIT":"Удалить","FORMS_MESSAGE_TITLE":"Оно живое!","FORMS_MESSAGE_CONTENT":["Пример формы ниже полностью фукциональный, поля нормализуют и проверяют ввод, используя файл описания данной "," формы. А сервер может перепроверить форму, испольуя тот же самый файл описания формы после отправки."],"FORMS_SUCCESS_TITLE":"Поздравляем!","FORMS_SUCCESS_TEXT":"Форма закончена и готова к отправке на сервер","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Пред","WIZARD_NEXT_BUTTON":"След","WIZARD_SUBMIT_BUTTON":"Готово","WIZARD_ERROR_LABEL":"Пожалуйста, заполните эту форму","SHIPPING_STEP_TITLE":"Доставка","SHIPPING_STEP_DESCR":"Укажите параметры доставки","SHIPPING_FIRST_NAME_LABEL":"Имя","SHIPPING_MIDDLE_NAME_LABEL":"Отчество (не обязательно)","SHIPPING_LAST_NAME_LABEL":"Фамилия","SHIPPING_ADDRESS_LABEL":"Адрес","SHIPPING_CITY_LABEL":"Город/Поселок","SHIPPING_STATE_LABEL":"Штат/Провинция/Регион (если требуется)","SHIPPING_CODE_LABEL":"ZIP/Почтовый индекс","SHIPPING_COUNTRY_LABEL":"Страна","SHIPPING_PHONE_LABEL":"Номер телефона","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"Что такое собака?","SHIPPING_Q2":"Какие виды собак бывают?","SHIPPING_Q3":"Как завести собаку?","BILLING_STEP_TITLE":"Оплата","BILLING_STEP_DESCR":"Укажите параметры оплаты","BILLING_CARD_NUMBER_LABEL":"Номер кредитной карты","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Адрес плательщика совпадает с адресом доставки","BILLING_Q1":"Что такое Lorem Ipsum?","BILLING_Q2":"Когда это начали применять?","CONFIRM_STEP_TITLE":"Готово","CONFIRM_STEP_DESCR_SUCCESS":"Форма готова к отправке","CONFIRM_STEP_DESCR_FAILURE":"Форма еще не закончена","CONFIRM_SHIPPING_LABEL":"Параметры доставки","CONFIRM_BILLING_LABEL":"Параметры оплаты","CONFIRM_FIRST_NAME_LABEL":"Имя:","CONFIRM_MIDDLE_NAME_LABEL":"Отчество:","CONFIRM_LAST_NAME_LABEL":"Фамилия:","CONFIRM_ADDRESS_LABEL":"Адрес:","CONFIRM_CITY_LABEL":"Город/Поселок:","CONFIRM_STATE_LABEL":"Штат/Привинция/Регион:","CONFIRM_CODE_LABEL":"ZIP/Почтовый индекс:","CONFIRM_COUNTRY_LABEL":"Страна:","CONFIRM_PHONE_LABEL":"Номер телефона:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Номер кредитной карты:","CONFIRM_CARD_DATE_LABEL":"Срок карты истекает:","NOTIFICATIONS_LABEL":"Уведомления","NOTIFICATIONS_TITLE":"Стилизованный попап!","ICONS_FILTER_LABEL":"Фильтр","APP_AUTH_TITLE":"Авторизация","APP_AUTH_ANONYMOUS_BUTTON":"Аноним","APP_AUTH_CREDENTIALS_LABEL":"Войти, используя логин/пароль","APP_AUTH_NEW_USER_LABEL":"У меня еще нет аккаунт. Пожалуйста, создайте его","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Пароль","APP_AUTH_SERVICE_BUTTON":"Войти с","APP_AUTH_SUBMIT":"Войти","APP_AUTH_FAILED":"Неправильный логин/пароль","APP_AUTH_EMAIL_TAKEN":"Этот email уже зарегистрирован","OPERATION_FAILED":"Операция завершилась ошибкой","ERROR":"Ошибка","ERROR_GO_HOME_LINK":"Открыть стартовую страницу","ERROR_TRY_AUTH_LINK":"Авторизоваться и попробовать еще раз","ERROR_FIELD_REQUIRED":"Это поле обязательно","ERROR_INVALID_PATTERN":"Пожалуйста, укажите правильное значение","ERROR_INVALID_EMAIL":"Пожалуйста, укажите правильный email","ERROR_INVALID_PHONE":"Пожалуйста, укажите правильный номер телефона","ERROR_INVALID_PHONE_COUNTRY":"Это неправильный номер телефона для указанной страны","ERROR_INVALID_CREDIT_CARD_NUMBER":"Пожалуйста, укажите правильный номер кредитной карты","ERROR_INVALID_CREDIT_CARD_DATE":"Пожалуйста, укажите правильный срок действия кредитной карты","ERROR_INVALID_CREDIT_CARD_SECRET":"Пожалуйста, укажите правильный код CVV2","ERROR_INVALID_PASSWORD":"Длина пароля должна быть не меньше 6 символов","ERROR_MISMATCHED_VALUES":"Два, введенные вами значения, не совпадают"};

/***/ }),

/***/ "wNor":
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

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var ReturnPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ReturnPage, _React$Component);

  function ReturnPage() {
    (0, _classCallCheck2.default)(this, ReturnPage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ReturnPage).apply(this, arguments));
  }

  (0, _createClass2.default)(ReturnPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onReturn(this.props.token, this.props.redirect);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var urlQuery;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                urlQuery = _ref.query;
                return _context.abrupt("return", {
                  token: urlQuery.token,
                  redirect: urlQuery.redirect
                });

              case 2:
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
  return ReturnPage;
}(_react.default.Component);

var _default = ReturnPage;
exports.default = _default;

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xMej":
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
  return __webpack_require__("fXmL");
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

/***/ "xTjR":
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

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "zX+l":
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
  return __webpack_require__("xTjR");
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

/***/ })

/******/ });