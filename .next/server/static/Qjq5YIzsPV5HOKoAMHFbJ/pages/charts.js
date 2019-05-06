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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "/H0I":
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

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _theme = _interopRequireDefault(__webpack_require__("0v9p"));

var Chart2 =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Chart2, _React$Component);

  function Chart2() {
    (0, _classCallCheck2.default)(this, Chart2);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Chart2).apply(this, arguments));
  }

  (0, _createClass2.default)(Chart2, [{
    key: "getData",
    value: function getData() {
      return [{
        x: 0,
        y: 0
      }, {
        x: 1,
        y: 2
      }, {
        x: 2,
        y: 1
      }, {
        x: 3,
        y: 4
      }, {
        x: 4,
        y: 3
      }, {
        x: 5,
        y: 5
      }];
    }
  }, {
    key: "renderChart",
    value: function renderChart(width, height) {
      return _react.default.createElement("svg", {
        width: width,
        height: height
      }, _react.default.createElement(_victory.VictoryChart, {
        domainPadding: {
          x: 50
        },
        width: width,
        height: height,
        standalone: false,
        containerComponent: _react.default.createElement(_victory.VictoryContainer, {
          responsive: false
        }),
        theme: (0, _theme.default)({
          theme: this.props.theme,
          withAxis: true
        })
      }, _react.default.createElement(_victory.VictoryAxis, null), _react.default.createElement(_victory.VictoryAxis, {
        dependentAxis: true
      }), _react.default.createElement(_victory.VictoryLine, {
        interpolation: "linear",
        data: this.getData(),
        style: {
          data: {
            stroke: "#e45a51"
          }
        }
      }), _react.default.createElement(_victory.VictoryScatter, {
        data: this.getData(),
        size: 5,
        style: {
          data: {
            fill: "#c43a31"
          }
        }
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.className
      }, _react.default.createElement(_reactVirtualized.AutoSizer, {
        disableHeight: true
      }, function (_ref) {
        var width = _ref.width;
        return !!width && _this.renderChart(width, 0.8 * width);
      }));
    }
  }]);
  return Chart2;
}(_react.default.Component);

var _default = Chart2;
exports.default = _default;

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

/***/ "0v9p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _victory = __webpack_require__("wL32");

var _colorManipulator = __webpack_require__("oOPP");

var _default = function _default() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      theme = _ref.theme,
      withAxis = _ref.withAxis,
      withGrid = _ref.withGrid,
      withArea = _ref.withArea;

  return _.merge({}, _victory.VictoryTheme.material, {
    axis: {
      style: {
        axis: withAxis ? {
          stroke: theme.palette.text.primary
        } : {
          display: "none"
        },
        axisLabel: withAxis || withGrid ? {
          fill: theme.palette.text.primary
        } : {
          display: "none"
        },
        ticks: withAxis ? {
          stroke: (0, _colorManipulator.fade)(theme.palette.text.disabled, 0.25)
        } : {
          display: "none"
        },
        tickLabels: withAxis || withGrid ? {
          fill: theme.palette.text.secondary
        } : {
          display: "none"
        },
        grid: withGrid ? {
          stroke: (0, _colorManipulator.fade)(theme.palette.text.disabled, 0.25)
        } : {
          display: "none"
        }
      }
    },
    pie: {
      style: {
        data: {
          strokeWidth: 0
        },
        labels: {
          fill: theme.palette.text.primary
        }
      }
    },
    area: withArea ? {
      style: {
        data: {
          strokeWidth: 1,
          stroke: theme.palette.text.primary
        }
      }
    } : undefined,
    candlestick: {
      style: {
        data: {
          stroke: theme.palette.text.primary,
          strokeWidth: 2
        },
        labels: {
          fill: theme.palette.text.primary
        }
      },
      candleColors: {
        positive: "#e45a51",
        negative: "#5ae451"
      }
    }
  });
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "2PDY":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9KWN");


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

/***/ "9KWN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ChartsPageContainer.default;
  }
});

var _ChartsPageContainer = _interopRequireDefault(__webpack_require__("sfCr"));

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "BtvG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("TbGu"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactVirtualized = __webpack_require__("xvxd");

var _victory = __webpack_require__("wL32");

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _theme = _interopRequireDefault(__webpack_require__("0v9p"));

var Chart3 =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Chart3, _React$Component);

  function Chart3(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Chart3);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Chart3).call(this, props));
    _this.state = {
      data: _this.processData(_this.getCharacterData()),
      maxima: _this.getMaxima(_this.getCharacterData())
    };
    return _this;
  }

  (0, _createClass2.default)(Chart3, [{
    key: "getCharacterData",
    value: function getCharacterData() {
      return [{
        strength: 1,
        intelligence: 250,
        luck: 1,
        stealth: 40,
        charisma: 50
      }, {
        strength: 2,
        intelligence: 300,
        luck: 2,
        stealth: 80,
        charisma: 90
      }, {
        strength: 5,
        intelligence: 225,
        luck: 3,
        stealth: 60,
        charisma: 120
      }];
    }
  }, {
    key: "getMaxima",
    value: function getMaxima(data) {
      var groupedData = _.reduce(_.keys(data[0]), function (memo, key) {
        memo[key] = _.map(data, function (d) {
          return d[key];
        });
        return memo;
      }, {});

      return _.reduce(_.keys(groupedData), function (memo, key) {
        memo[key] = Math.max.apply(Math, (0, _toConsumableArray2.default)(groupedData[key]));
        return memo;
      }, {});
    }
  }, {
    key: "processData",
    value: function processData(data) {
      var maxByGroup = this.getMaxima(data);

      var makeDataArray = function makeDataArray(d) {
        return _.map(_.keys(d), function (key) {
          return {
            x: key,
            y: d[key] / maxByGroup[key]
          };
        });
      };

      return _.map(data, function (datum) {
        return makeDataArray(datum);
      });
    }
  }, {
    key: "renderChart",
    value: function renderChart(width, height) {
      var _this2 = this;

      return _react.default.createElement("svg", {
        width: width,
        height: height
      }, _react.default.createElement(_victory.VictoryChart, {
        polar: true,
        domain: {
          y: [0, 1]
        },
        width: width,
        height: height,
        standalone: false,
        containerComponent: _react.default.createElement(_victory.VictoryContainer, {
          responsive: false
        }),
        theme: (0, _theme.default)({
          theme: this.props.theme,
          withGrid: true
        })
      }, _react.default.createElement(_victory.VictoryGroup, {
        colorScale: ["gold", "orange", "tomato"],
        style: {
          data: {
            fillOpacity: 0.2,
            strokeWidth: 2
          }
        }
      }, _.map(this.state.data, function (data, i) {
        return _react.default.createElement(_victory.VictoryArea, {
          key: i,
          data: data
        });
      })), _.map(_.keys(this.state.maxima), function (key, i) {
        return _react.default.createElement(_victory.VictoryPolarAxis, {
          key: i,
          dependentAxis: true,
          tickLabelComponent: _react.default.createElement(_victory.VictoryLabel, {
            labelPlacement: "vertical"
          }),
          labelPlacement: "perpendicular",
          axisValue: i + 1,
          label: key,
          tickFormat: function tickFormat(t) {
            return Math.ceil(t * _this2.state.maxima[key]);
          },
          tickValues: [0.25, 0.5, 0.75]
        });
      }), _react.default.createElement(_victory.VictoryPolarAxis, {
        labelPlacement: "parallel",
        tickFormat: _.constant("")
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.className
      }, _react.default.createElement(_reactVirtualized.AutoSizer, {
        disableHeight: true
      }, function (_ref) {
        var width = _ref.width;
        return !!width && _this3.renderChart(width, 0.8 * width);
      }));
    }
  }]);
  return Chart3;
}(_react.default.Component);

var _default = Chart3;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "IXuq":
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

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var _Grid = _interopRequireDefault(__webpack_require__("JQ2V"));

var _Chart = _interopRequireDefault(__webpack_require__("R50P"));

var _Chart2 = _interopRequireDefault(__webpack_require__("/H0I"));

var _Chart3 = _interopRequireDefault(__webpack_require__("BtvG"));

var _Chart4 = _interopRequireDefault(__webpack_require__("r0XD"));

var _Chart5 = _interopRequireDefault(__webpack_require__("ZqA/"));

var _Chart6 = _interopRequireDefault(__webpack_require__("IcIv"));

var styles = function styles(theme) {
  return {
    layout: {
      width: "100%",
      flex: 1,
      padding: theme.main.spacing
    },
    paper: {
      background: theme.main.paper
    },
    title: {
      marginTop: "3rem",
      marginBottom: "1rem"
    }
  };
};

exports.styles = styles;

var ChartsPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ChartsPage, _React$Component);

  function ChartsPage() {
    (0, _classCallCheck2.default)(this, ChartsPage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ChartsPage).apply(this, arguments));
  }

  (0, _createClass2.default)(ChartsPage, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement(_Typography.default, {
        variant: "h3",
        color: "inherit",
        className: this.props.classes.title
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "TITLE_CHARTS"
      })), _react.default.createElement(_Grid.default, {
        container: true,
        spacing: this.props.theme.main.spacing
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 6,
        lg: 4
      }, _react.default.createElement(_Chart.default, {
        theme: this.props.theme,
        className: this.props.classes.paper
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 6,
        lg: 4
      }, _react.default.createElement(_Chart2.default, {
        theme: this.props.theme,
        className: this.props.classes.paper
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 6,
        lg: 4
      }, _react.default.createElement(_Chart3.default, {
        theme: this.props.theme,
        className: this.props.classes.paper
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 6,
        lg: 4
      }, _react.default.createElement(_Chart4.default, {
        theme: this.props.theme,
        className: this.props.classes.paper
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 6,
        lg: 4
      }, _react.default.createElement(_Chart5.default, {
        theme: this.props.theme,
        className: this.props.classes.paper
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 6,
        lg: 4
      }, _react.default.createElement(_Chart6.default, {
        theme: this.props.theme,
        className: this.props.classes.paper
      }))));
    }
  }]);
  return ChartsPage;
}(_react.default.Component);

var _default = ChartsPage;
exports.default = _default;

/***/ }),

/***/ "IcIv":
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

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _theme = _interopRequireDefault(__webpack_require__("0v9p"));

var Chart6 =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Chart6, _React$Component);

  function Chart6() {
    (0, _classCallCheck2.default)(this, Chart6);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Chart6).apply(this, arguments));
  }

  (0, _createClass2.default)(Chart6, [{
    key: "getData",
    value: function getData() {
      return [{
        x: new Date(2016, 6, 1),
        open: 9,
        close: 30,
        high: 56,
        low: 7
      }, {
        x: new Date(2016, 6, 2),
        open: 80,
        close: 40,
        high: 120,
        low: 10
      }, {
        x: new Date(2016, 6, 3),
        open: 50,
        close: 80,
        high: 90,
        low: 20
      }, {
        x: new Date(2016, 6, 4),
        open: 70,
        close: 22,
        high: 70,
        low: 5
      }, {
        x: new Date(2016, 6, 5),
        open: 20,
        close: 35,
        high: 50,
        low: 10
      }, {
        x: new Date(2016, 6, 6),
        open: 35,
        close: 30,
        high: 40,
        low: 3
      }, {
        x: new Date(2016, 6, 7),
        open: 30,
        close: 90,
        high: 95,
        low: 30
      }, {
        x: new Date(2016, 6, 8),
        open: 50,
        close: 81,
        high: 83,
        low: 45
      }];
    }
  }, {
    key: "renderChart",
    value: function renderChart(width, height) {
      return _react.default.createElement("svg", {
        width: width,
        height: height
      }, _react.default.createElement(_victory.VictoryChart, {
        width: width,
        height: height,
        standalone: false,
        scale: {
          x: "time"
        },
        containerComponent: _react.default.createElement(_victory.VictoryContainer, {
          responsive: false
        }),
        theme: (0, _theme.default)({
          theme: this.props.theme,
          withGrid: true
        })
      }, _react.default.createElement(_victory.VictoryAxis, {
        tickFormat: function tickFormat(t) {
          return "".concat(t.getDate(), "/").concat(t.getMonth());
        }
      }), _react.default.createElement(_victory.VictoryAxis, {
        dependentAxis: true
      }), _react.default.createElement(_victory.VictoryCandlestick, {
        data: this.getData(),
        size: 8
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.className
      }, _react.default.createElement(_reactVirtualized.AutoSizer, {
        disableHeight: true
      }, function (_ref) {
        var width = _ref.width;
        return !!width && _this.renderChart(width, 0.8 * width);
      }));
    }
  }]);
  return Chart6;
}(_react.default.Component);

var _default = Chart6;
exports.default = _default;

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

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

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

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

/***/ "PQJW":
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__("d04V");

var _isIterable = __webpack_require__("yLu3");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "R50P":
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

var _reactVirtualized = __webpack_require__("xvxd");

var _victory = __webpack_require__("wL32");

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _theme = _interopRequireDefault(__webpack_require__("0v9p"));

var Chart1 =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Chart1, _React$Component);

  function Chart1() {
    (0, _classCallCheck2.default)(this, Chart1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Chart1).apply(this, arguments));
  }

  (0, _createClass2.default)(Chart1, [{
    key: "getData",
    value: function getData() {
      return _.times(5, function () {
        return [{
          x: 1,
          y: Math.random()
        }, {
          x: 2,
          y: Math.random()
        }, {
          x: 3,
          y: Math.random()
        }];
      });
    }
  }, {
    key: "renderChart",
    value: function renderChart(width, height) {
      return _react.default.createElement("svg", {
        width: width,
        height: height
      }, _react.default.createElement(_victory.VictoryChart, {
        domainPadding: {
          x: 50
        },
        width: width,
        height: height,
        standalone: false,
        containerComponent: _react.default.createElement(_victory.VictoryContainer, {
          responsive: false
        }),
        theme: (0, _theme.default)({
          theme: this.props.theme,
          withAxis: true
        })
      }, _react.default.createElement(_victory.VictoryGroup, {
        offset: 20,
        style: {
          data: {
            width: 15
          }
        }
      }, _react.default.createElement(_victory.VictoryStack, {
        colorScale: "red"
      }, _.map(this.getData(), function (data, index) {
        return _react.default.createElement(_victory.VictoryBar, {
          key: index,
          data: data
        });
      })), _react.default.createElement(_victory.VictoryStack, {
        colorScale: "green"
      }, _.map(this.getData(), function (data, index) {
        return _react.default.createElement(_victory.VictoryBar, {
          key: index,
          data: data
        });
      })), _react.default.createElement(_victory.VictoryStack, {
        colorScale: "blue"
      }, _.map(this.getData(), function (data, index) {
        return _react.default.createElement(_victory.VictoryBar, {
          key: index,
          data: data
        });
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.className
      }, _react.default.createElement(_reactVirtualized.AutoSizer, {
        disableHeight: true
      }, function (_ref) {
        var width = _ref.width;
        return !!width && _this.renderChart(width, 0.8 * width);
      }));
    }
  }]);
  return Chart1;
}(_react.default.Component);

var _default = Chart1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "ZqA/":
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

var _reactVirtualized = __webpack_require__("xvxd");

var _victory = __webpack_require__("wL32");

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _theme = _interopRequireDefault(__webpack_require__("0v9p"));

var Chart5 =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Chart5, _React$Component);

  function Chart5() {
    (0, _classCallCheck2.default)(this, Chart5);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Chart5).apply(this, arguments));
  }

  (0, _createClass2.default)(Chart5, [{
    key: "getData",
    value: function getData() {
      return _.times(7, function () {
        return [{
          x: 1,
          y: _.random(1, 5)
        }, {
          x: 2,
          y: _.random(1, 10)
        }, {
          x: 3,
          y: _.random(2, 10)
        }, {
          x: 4,
          y: _.random(2, 10)
        }, {
          x: 5,
          y: _.random(2, 15)
        }];
      });
    }
  }, {
    key: "renderChart",
    value: function renderChart(width, height) {
      return _react.default.createElement("svg", {
        width: width,
        height: height
      }, _react.default.createElement(_victory.VictoryChart, {
        width: width,
        height: height,
        standalone: false,
        containerComponent: _react.default.createElement(_victory.VictoryContainer, {
          responsive: false
        }),
        theme: (0, _theme.default)({
          theme: this.props.theme,
          withGrid: true,
          withAxis: true,
          withArea: true
        })
      }, _react.default.createElement(_victory.VictoryStack, {
        colorScale: "blue"
      }, _.map(this.getData(), function (data, i) {
        return _react.default.createElement(_victory.VictoryArea, {
          key: i,
          data: data,
          interpolation: "basis"
        });
      })), _react.default.createElement(_victory.VictoryAxis, null), _react.default.createElement(_victory.VictoryAxis, {
        dependentAxis: true
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.className
      }, _react.default.createElement(_reactVirtualized.AutoSizer, {
        disableHeight: true
      }, function (_ref) {
        var width = _ref.width;
        return !!width && _this.renderChart(width, 0.8 * width);
      }));
    }
  }]);
  return Chart5;
}(_react.default.Component);

var _default = Chart5;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

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

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r0XD":
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

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _theme = _interopRequireDefault(__webpack_require__("0v9p"));

var Chart4 =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Chart4, _React$Component);

  function Chart4() {
    (0, _classCallCheck2.default)(this, Chart4);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Chart4).apply(this, arguments));
  }

  (0, _createClass2.default)(Chart4, [{
    key: "getData",
    value: function getData() {
      return [{
        x: "Cats",
        y: 35
      }, {
        x: "Dogs",
        y: 40
      }, {
        x: "Birds",
        y: 55
      }];
    }
  }, {
    key: "renderChart",
    value: function renderChart(width, height) {
      return _react.default.createElement("svg", {
        width: width,
        height: height
      }, _react.default.createElement(_victory.VictoryChart, {
        domainPadding: {
          x: 50
        },
        width: width,
        height: height,
        standalone: false,
        containerComponent: _react.default.createElement(_victory.VictoryContainer, {
          responsive: false
        }),
        theme: (0, _theme.default)({
          theme: this.props.theme
        })
      }, _react.default.createElement(_victory.VictoryAxis, null), _react.default.createElement(_victory.VictoryAxis, {
        dependentAxis: true
      }), _react.default.createElement(_victory.VictoryPie, {
        data: this.getData()
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.className
      }, _react.default.createElement(_reactVirtualized.AutoSizer, {
        disableHeight: true
      }, function (_ref) {
        var width = _ref.width;
        return !!width && _this.renderChart(width, 0.8 * width);
      }));
    }
  }]);
  return Chart4;
}(_react.default.Component);

var _default = Chart4;
exports.default = _default;

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "sfCr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _ChartsPage = _interopRequireWildcard(__webpack_require__("IXuq"));

var ChartsPage = (0, _styles.withStyles)(_ChartsPage.styles, {
  withTheme: true
})(_ChartsPage.default);
ChartsPage.getInitialProps = _ChartsPage.default.getInitialProps;
var _default = ChartsPage;
exports.default = _default;

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

/***/ "wL32":
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ }),

/***/ "xvxd":
/***/ (function(module, exports) {

module.exports = require("react-virtualized");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ })

/******/ });