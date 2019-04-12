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
/******/ 	return __webpack_require__(__webpack_require__.s = "e7ba");
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

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

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

/***/ "6i86":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _IconsPageContainer.default;
  }
});

var _IconsPageContainer = _interopRequireDefault(__webpack_require__("cEBe"));

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

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

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

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

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cEBe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("9Pu4");

var _IconsPage = _interopRequireWildcard(__webpack_require__("kc/f"));

var IconsPage = (0, _styles.withStyles)(_IconsPage.styles, {
  withTheme: true
})((0, _reactIntl.injectIntl)(_IconsPage.default));
IconsPage.getInitialProps = _IconsPage.default.getInitialProps;
var _default = IconsPage;
exports.default = _default;

/***/ }),

/***/ "e7ba":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6i86");


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

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kc/f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

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

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _classnames = _interopRequireDefault(__webpack_require__("K2gz"));

var _reactIntl = __webpack_require__("k004");

var _reactVirtualized = __webpack_require__("xvxd");

var _colorManipulator = __webpack_require__("oOPP");

var _Grid = _interopRequireDefault(__webpack_require__("JQ2V"));

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var _TextField = _interopRequireDefault(__webpack_require__("IbbU"));

var source = _interopRequireWildcard(__webpack_require__("2kat"));

var _styledScroll = _interopRequireDefault(__webpack_require__("00Dt"));

var icons = {};

_.forEach(_.keys(source), function (name) {
  var icon = source[name];
  if (!icon || icon.muiName !== "SvgIcon") return;
  var match;
  match = /^(.+)Outlined$/.exec(name);

  if (match) {
    if (!icons[match[1]]) icons[match[1]] = {};
    icons[match[1]].Outlined = icon;
    return;
  }

  match = /^(.+)Rounded$/.exec(name);

  if (match) {
    if (!icons[match[1]]) icons[match[1]] = {};
    icons[match[1]].Rounded = icon;
    return;
  }

  match = /^(.+)Sharp$/.exec(name);

  if (match) {
    if (!icons[match[1]]) icons[match[1]] = {};
    icons[match[1]].Sharp = icon;
    return;
  }

  match = /^(.+)TwoTone$/.exec(name);

  if (match) {
    if (!icons[match[1]]) icons[match[1]] = {};
    icons[match[1]].TwoTone = icon;
    return;
  }

  if (!icons[name]) icons[name] = {};
  icons[name].Main = icon;
});

var list = _.reduce(_.keys(icons), function (acc, cur) {
  acc.push((0, _objectSpread2.default)({
    name: _.replace(cur, /([A-Z])/g, " $1")
  }, icons[cur]));
  return acc;
}, []);

var styles = function styles(theme) {
  return {
    layout: {
      width: "100%",
      flex: 1,
      display: "flex",
      flexDirection: "column"
    },
    header: {
      marginTop: "1rem",
      padding: theme.main.spacing
    },
    wrapper: {
      flex: 1
    },
    list: (0, _styledScroll.default)(theme),
    row: (0, _defineProperty2.default)({
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      overflowX: "auto"
    }, theme.breakpoints.down("sm"), {
      justifyContent: "unset"
    }),
    odd: {
      background: (0, _colorManipulator.lighten)(theme.palette.background.paper, 0.1)
    },
    even: {
      background: (0, _colorManipulator.lighten)(theme.palette.background.paper, 0.05)
    },
    item: {
      width: "20%",
      minWidth: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: theme.palette.text.primary
    },
    text: {
      lineHeight: "1rem",
      textAlign: "center"
    }
  };
};

exports.styles = styles;

var IconsPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(IconsPage, _React$Component);

  function IconsPage(props) {
    var _this;

    (0, _classCallCheck2.default)(this, IconsPage);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IconsPage).call(this, props));
    _this.state = {
      filter: "",
      list: list
    };
    _this.renderIcon = _this.renderIcon.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleInput = _this.handleInput.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(IconsPage, [{
    key: "renderIcon",
    value: function renderIcon(Icon, name) {
      if (!Icon) return null;
      return _react.default.createElement("div", {
        className: this.props.classes.item
      }, _react.default.createElement(Icon, {
        fontSize: "large",
        color: "inherit"
      }), _react.default.createElement("div", null, _react.default.createElement(_Typography.default, {
        variant: "overline",
        className: this.props.classes.text
      }, name)));
    }
  }, {
    key: "renderRow",
    value: function renderRow(_ref) {
      var index = _ref.index,
          key = _ref.key,
          style = _ref.style;
      var item = this.state.list[index];
      var name = item.name;
      var Main = item.Main;
      var Outlined = item.Outlined;
      var Rounded = item.Rounded;
      var Sharp = item.Sharp;
      var TwoTone = item.TwoTone;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(this.props.classes.row, index % 2 ? this.props.classes.odd : this.props.classes.even),
        key: key,
        style: style
      }, this.renderIcon(Main, name), this.renderIcon(Outlined, name + " Outlined"), this.renderIcon(Rounded, name + " Rounded"), this.renderIcon(Sharp, name + " Sharp"), this.renderIcon(TwoTone, name + "Two Tone"));
    }
  }, {
    key: "handleInput",
    value: function handleInput(evt) {
      var filter = evt.target.value;
      this.setState({
        filter: filter,
        list: _.filter(list, function (item) {
          return _.includes(_.toLower(item.name), _.toLower(filter));
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement("div", {
        className: this.props.classes.header
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: this.props.theme.main.spacing,
        alignItems: "center"
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6,
        md: 8
      }, _react.default.createElement(_Typography.default, {
        variant: "h3"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "TITLE_ICONS"
      }))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6,
        md: 4
      }, _react.default.createElement("form", {
        className: this.props.classes.form,
        noValidate: true,
        autoComplete: "off"
      }, _react.default.createElement(_TextField.default, {
        id: "iconsFilter",
        fullWidth: true,
        label: this.props.intl.formatMessage({
          id: "ICONS_FILTER_LABEL"
        }),
        value: this.state.filter,
        onChange: this.handleInput
      }))))), _react.default.createElement("div", {
        className: this.props.classes.wrapper
      }, _react.default.createElement(_reactVirtualized.AutoSizer, null, function (_ref2) {
        var width = _ref2.width,
            height = _ref2.height;
        if (height < 300) height = 300;
        return _react.default.createElement(_reactVirtualized.List, {
          className: _this2.props.classes.list,
          width: width,
          height: height,
          rowCount: _this2.state.list.length,
          rowHeight: 100,
          rowRenderer: _this2.renderRow
        });
      })));
    }
  }]);
  return IconsPage;
}(_react.default.Component);

var _default = IconsPage;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ }),

/***/ "xvxd":
/***/ (function(module, exports) {

module.exports = require("react-virtualized");

/***/ })

/******/ });