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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("C4at");


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

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "C4at":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _TypographyPageContainer.default;
  }
});

var _TypographyPageContainer = _interopRequireDefault(__webpack_require__("Zmqe"));

/***/ }),

/***/ "FDO7":
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

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var styles = function styles(theme) {
  return {
    layout: {
      width: "100%",
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      flexDirection: "column"
    },
    row: (0, _defineProperty2.default)({
      display: "flex",
      justifyContent: "stretch",
      alignItems: "center",
      margin: "2rem"
    }, theme.breakpoints.down("sm"), {
      flexDirection: "column",
      margin: "2rem 0"
    }),
    label: (0, _defineProperty2.default)({
      width: 350,
      padding: "0 2rem 1rem 2rem",
      textAlign: "right",
      fontFamily: "Roboto Mono",
      fontWeight: "bold"
    }, theme.breakpoints.down("sm"), {
      textAlign: "center"
    }),
    item: {
      padding: "2rem",
      flex: 1
    }
  };
};

exports.styles = styles;

var TypographyPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TypographyPage, _React$Component);

  function TypographyPage() {
    (0, _classCallCheck2.default)(this, TypographyPage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TypographyPage).apply(this, arguments));
  }

  (0, _createClass2.default)(TypographyPage, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"h1\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "h1",
        color: "inherit"
      }, "h1. Heading"))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"h2\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "h2",
        color: "inherit"
      }, "h2. Heading"))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"h3\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "h3",
        color: "inherit"
      }, "h3. Heading"))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"h4\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "h4",
        color: "inherit"
      }, "h4. Heading"))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"h5\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "h5",
        color: "inherit"
      }, "h5. Heading"))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"h6\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "h6",
        color: "inherit"
      }, "h6. Heading"))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"subtitle1\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "subtitle1",
        color: "inherit"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"subtitle2\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "subtitle2",
        color: "inherit"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"body1\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "body1",
        color: "inherit"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"body2\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "body2",
        color: "inherit"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"button\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "button",
        color: "inherit"
      }, "Button text"))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"caption\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "caption",
        color: "inherit"
      }, "Caption text"))), _react.default.createElement("div", {
        className: this.props.classes.row
      }, _react.default.createElement(_Typography.default, {
        className: this.props.classes.label,
        variant: "body1",
        color: "inherit"
      }, "<Typography variant=\"overline\">"), _react.default.createElement(_Paper.default, {
        className: this.props.classes.item
      }, _react.default.createElement(_Typography.default, {
        variant: "overline",
        color: "inherit"
      }, "Overline text"))));
    }
  }]);
  return TypographyPage;
}(_react.default.Component);

var _default = TypographyPage;
exports.default = _default;

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

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

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

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

/***/ "Zmqe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _TypographyPage = _interopRequireWildcard(__webpack_require__("FDO7"));

var TypographyPage = (0, _styles.withStyles)(_TypographyPage.styles)(_TypographyPage.default);
TypographyPage.getInitialProps = _TypographyPage.default.getInitialProps;
var _default = TypographyPage;
exports.default = _default;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

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

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

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

/***/ })

/******/ });