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

/***/ "+EWW":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "+Hwm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIn;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _toString = _interopRequireDefault(__webpack_require__("JvVL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isIn(str, options) {
  (0, _assertString.default)(str);
  var i;

  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];

    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString.default)(options[i]);
      }
    }

    return array.indexOf(str) >= 0;
  } else if (_typeof(options) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

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

/***/ "+lRa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("s+ck");
var step = __webpack_require__("JFuE");
var Iterators = __webpack_require__("sipE");
var toIObject = __webpack_require__("aput");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("5Kld")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


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

/***/ "/69e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString.default)(str);
  return multibyte.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

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

/***/ "/Kv2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHalfWidth;
exports.halfWidth = void 0;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.halfWidth = halfWidth;

function isHalfWidth(str) {
  (0, _assertString.default)(str);
  return halfWidth.test(str);
}

/***/ }),

/***/ "/aHj":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("G1Wo");


/***/ }),

/***/ "/ab8":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("8+AD");
module.exports = __webpack_require__("p9MR").Object.keys;


/***/ }),

/***/ "/kPW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 35361ee6822f22d12e23dc92418b8376
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LayoutContainer_viewer$ref = any;
export type ChartsPageQueryVariables = {||};
export type ChartsPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: LayoutContainer_viewer$ref
  |}
|};
export type ChartsPageQuery = {|
  variables: ChartsPageQueryVariables,
  response: ChartsPageQueryResponse,
|};
*/

/*
query ChartsPageQuery {
  viewer {
    ...LayoutContainer_viewer
  }
}

fragment LayoutContainer_viewer on Viewer {
  me {
    isAuthenticated
    userId
    name
    email
    roles
    providers {
      name
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = {
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
      "name": "ChartsPageQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "LayoutContainer_viewer",
          "args": null
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "ChartsPageQuery",
      "argumentDefinitions": [],
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
          "name": "me",
          "storageKey": null,
          "args": null,
          "concreteType": "Status",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "isAuthenticated",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "userId",
            "args": null,
            "storageKey": null
          }, v0
          /*: any*/
          , {
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
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "providers",
            "storageKey": null,
            "args": null,
            "concreteType": "ProviderStatus",
            "plural": true,
            "selections": [v0
            /*: any*/
            ]
          }]
        }]
      }]
    },
    "params": {
      "operationKind": "query",
      "name": "ChartsPageQuery",
      "id": null,
      "text": "query ChartsPageQuery {\n  viewer {\n    ...LayoutContainer_viewer\n  }\n}\n\nfragment LayoutContainer_viewer on Viewer {\n  me {\n    isAuthenticated\n    userId\n    name\n    email\n    roles\n    providers {\n      name\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'b8a0757bd55f42bc8295064f58ba24b6';
module.exports = node;

/***/ }),

/***/ "/wxW":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("Q8jq");
var toObject = __webpack_require__("AYVP");
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "04/V":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("fYqa");
var ITERATOR = __webpack_require__("G1Wo")('iterator');
var Iterators = __webpack_require__("sipE");
module.exports = __webpack_require__("p9MR").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
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

/***/ "0Sc/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("CgoH")('asyncIterator');


/***/ }),

/***/ "0T/a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var ctx = __webpack_require__("vCXk");
var hide = __webpack_require__("jOCL");
var has = __webpack_require__("Q8jq");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "0Yqw":
/***/ (function(module, exports) {

module.exports = require("relay-query-lookup-renderer");

/***/ }),

/***/ "0k/M":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("CgoH")('observable');


/***/ }),

/***/ "0lY0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("2jw7");
var has = __webpack_require__("Q8jq");
var DESCRIPTORS = __webpack_require__("fZVS");
var $export = __webpack_require__("0T/a");
var redefine = __webpack_require__("IxLI");
var META = __webpack_require__("YndH").KEY;
var $fails = __webpack_require__("14Ie");
var shared = __webpack_require__("d3Kl");
var setToStringTag = __webpack_require__("wNhr");
var uid = __webpack_require__("ewAR");
var wks = __webpack_require__("G1Wo");
var wksExt = __webpack_require__("/aHj");
var wksDefine = __webpack_require__("CgoH");
var enumKeys = __webpack_require__("0tY/");
var isArray = __webpack_require__("taoM");
var anObject = __webpack_require__("D4ny");
var isObject = __webpack_require__("b4pn");
var toObject = __webpack_require__("AYVP");
var toIObject = __webpack_require__("aput");
var toPrimitive = __webpack_require__("LqFA");
var createDesc = __webpack_require__("+EWW");
var _create = __webpack_require__("cQhG");
var gOPNExt = __webpack_require__("Vl3p");
var $GOPD = __webpack_require__("Ym6j");
var $GOPS = __webpack_require__("McIs");
var $DP = __webpack_require__("OtwA");
var $keys = __webpack_require__("djPm");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("2HZK").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("1077").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("tFdt")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("jOCL")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "0tY/":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("djPm");
var gOPS = __webpack_require__("McIs");
var pIE = __webpack_require__("1077");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "0u7J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _toDate = _interopRequireDefault(__webpack_require__("z3MP"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
  (0, _assertString.default)(str);
  var comparison = (0, _toDate.default)(date);
  var original = (0, _toDate.default)(str);
  return !!(original && comparison && original > comparison);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "1077":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "14Ie":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "1FOm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

const tokenize = __webpack_require__("YXwE");
const validator = __webpack_require__("2bKT");
//let allCountries, iso2Lookup;
const { allCountries, iso2Lookup } = __webpack_require__("c4tK");

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
  let rules = {};
  for (let rule of tokenize(options, "\\", "|")) {
    let params = tokenize(rule, "\\", ":");
    if (!params.length) continue;
    let command = params.shift();
    rules[command] = params;
  }

  let result = _.isUndefined(value) ? "" : _.toString(value);

  for (let command of _.keys(rules)) {
    let i;
    let tmp;
    let search;
    let isLongBreak = !!result.match(/\r\n/);
    switch (command) {
      case "trim":
        // trims the input, no params
        tmp = [];
        for (let line of _.split(_.trim(result), /\r\n?|\n/g))
          tmp.push(_.trim(line));
        result = tmp.join(isLongBreak ? "\r\n" : "\n");
        break;
      case "compact":
        // with "spaces" param compacts spaces into single space preserving new lines
        if (_.includes(rules[command], "spaces")) {
          tmp = [];
          for (let line of _.split(result, /\r\n?|\n/g))
            tmp.push(_.replace(line, /\s+/g, " "));
          result = tmp.join(isLongBreak ? "\r\n" : "\n");
        }
        break;
      case "remove":
        // with "spaces" param removes spaces inside the line preveserving new lines
        if (_.includes(rules[command], "spaces")) {
          tmp = [];
          for (let line of _.split(result, /\r\n?|\n/g))
            tmp.push(_.replace(line, /\s+/g, ""));
          result = tmp.join(isLongBreak ? "\r\n" : "\n");
        }
        break;
      case "rows":
        // first param is the number of rows in the result (defaults to 1)
        tmp = _.split(result, /\r\n?|\n/g);
        result = "";
        for (i = 0; i < tmp.length; i++) {
          if (
            i > 0 &&
            i < (rules[command].length ? parseInt(rules[command][0]) : 1)
          )
            result += isLongBreak ? "\r\n" : "\n";
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
        search =
          allCountries &&
          iso2Lookup &&
          allCountries[iso2Lookup[allValues.country]];
        if (search && search.dialCode && _.startsWith(tmp, search.dialCode)) {
          result +=
            search.dialCode + (search.dialCode.length < tmp.length ? " " : "");
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
        switch (rules[command].length && rules[command][0]) {
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

  return result;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "1Kbk":
/***/ (function(module, exports) {

module.exports = require("react-flags");

/***/ }),

/***/ "1YkF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _alpha = __webpack_require__("ZPM+");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlpha(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  (0, _assertString.default)(str);

  if (locale in _alpha.alpha) {
    return _alpha.alpha[locale].test(str);
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(_alpha.alpha);
exports.locales = locales;

/***/ }),

/***/ "1b+X":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString.default)(str);
  return ascii.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "1cKw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _assertString.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');

  if (!testIssn.test(str)) {
    return false;
  }

  var digits = str.replace('-', '').toUpperCase();
  var checksum = 0;

  for (var i = 0; i < digits.length; i++) {
    var digit = digits[i];
    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
  }

  return checksum % 11 === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "1gQu":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("GTiD");
module.exports = __webpack_require__("p9MR").Array.isArray;


/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "2HZK":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("JpU4");
var hiddenKeys = __webpack_require__("ACkF").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "2PDY":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "2bKT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toDate = _interopRequireDefault(__webpack_require__("z3MP"));

var _toFloat = _interopRequireDefault(__webpack_require__("DBSy"));

var _toInt = _interopRequireDefault(__webpack_require__("KSoU"));

var _toBoolean = _interopRequireDefault(__webpack_require__("Nr6a"));

var _equals = _interopRequireDefault(__webpack_require__("oCqu"));

var _contains = _interopRequireDefault(__webpack_require__("tLFn"));

var _matches = _interopRequireDefault(__webpack_require__("p+Qh"));

var _isEmail = _interopRequireDefault(__webpack_require__("ij9E"));

var _isURL = _interopRequireDefault(__webpack_require__("wc8t"));

var _isMACAddress = _interopRequireDefault(__webpack_require__("pKoH"));

var _isIP = _interopRequireDefault(__webpack_require__("M+nr"));

var _isIPRange = _interopRequireDefault(__webpack_require__("9jP9"));

var _isFQDN = _interopRequireDefault(__webpack_require__("meT0"));

var _isBoolean = _interopRequireDefault(__webpack_require__("5PW+"));

var _isAlpha = _interopRequireWildcard(__webpack_require__("1YkF"));

var _isAlphanumeric = _interopRequireWildcard(__webpack_require__("G3hc"));

var _isNumeric = _interopRequireDefault(__webpack_require__("sgzX"));

var _isPort = _interopRequireDefault(__webpack_require__("Wl3u"));

var _isLowercase = _interopRequireDefault(__webpack_require__("HrT2"));

var _isUppercase = _interopRequireDefault(__webpack_require__("m4he"));

var _isAscii = _interopRequireDefault(__webpack_require__("1b+X"));

var _isFullWidth = _interopRequireDefault(__webpack_require__("ZNca"));

var _isHalfWidth = _interopRequireDefault(__webpack_require__("/Kv2"));

var _isVariableWidth = _interopRequireDefault(__webpack_require__("zAiC"));

var _isMultibyte = _interopRequireDefault(__webpack_require__("/69e"));

var _isSurrogatePair = _interopRequireDefault(__webpack_require__("5kmR"));

var _isInt = _interopRequireDefault(__webpack_require__("yboX"));

var _isFloat = _interopRequireWildcard(__webpack_require__("4N2y"));

var _isDecimal = _interopRequireDefault(__webpack_require__("z8Sm"));

var _isHexadecimal = _interopRequireDefault(__webpack_require__("UjK5"));

var _isDivisibleBy = _interopRequireDefault(__webpack_require__("6+sw"));

var _isHexColor = _interopRequireDefault(__webpack_require__("X1ix"));

var _isISRC = _interopRequireDefault(__webpack_require__("35oZ"));

var _isMD = _interopRequireDefault(__webpack_require__("i1k1"));

var _isHash = _interopRequireDefault(__webpack_require__("w+rH"));

var _isJWT = _interopRequireDefault(__webpack_require__("ZRkS"));

var _isJSON = _interopRequireDefault(__webpack_require__("LxY0"));

var _isEmpty = _interopRequireDefault(__webpack_require__("IZAv"));

var _isLength = _interopRequireDefault(__webpack_require__("ZhsM"));

var _isByteLength = _interopRequireDefault(__webpack_require__("qire"));

var _isUUID = _interopRequireDefault(__webpack_require__("WQhj"));

var _isMongoId = _interopRequireDefault(__webpack_require__("lL+F"));

var _isAfter = _interopRequireDefault(__webpack_require__("0u7J"));

var _isBefore = _interopRequireDefault(__webpack_require__("IM81"));

var _isIn = _interopRequireDefault(__webpack_require__("+Hwm"));

var _isCreditCard = _interopRequireDefault(__webpack_require__("o4Of"));

var _isIdentityCard = _interopRequireDefault(__webpack_require__("p1nR"));

var _isISIN = _interopRequireDefault(__webpack_require__("eU76"));

var _isISBN = _interopRequireDefault(__webpack_require__("Qbfd"));

var _isISSN = _interopRequireDefault(__webpack_require__("1cKw"));

var _isMobilePhone = _interopRequireWildcard(__webpack_require__("p31C"));

var _isCurrency = _interopRequireDefault(__webpack_require__("fVnE"));

var _isISO = _interopRequireDefault(__webpack_require__("rWH8"));

var _isRFC = _interopRequireDefault(__webpack_require__("cSEY"));

var _isISO31661Alpha = _interopRequireDefault(__webpack_require__("NAKw"));

var _isISO31661Alpha2 = _interopRequireDefault(__webpack_require__("sMvg"));

var _isBase = _interopRequireDefault(__webpack_require__("RByD"));

var _isBase2 = _interopRequireDefault(__webpack_require__("is7w"));

var _isDataURI = _interopRequireDefault(__webpack_require__("WkEw"));

var _isMagnetURI = _interopRequireDefault(__webpack_require__("wmuC"));

var _isMimeType = _interopRequireDefault(__webpack_require__("HBlD"));

var _isLatLong = _interopRequireDefault(__webpack_require__("RWau"));

var _isPostalCode = _interopRequireWildcard(__webpack_require__("e1JF"));

var _ltrim = _interopRequireDefault(__webpack_require__("9dOb"));

var _rtrim = _interopRequireDefault(__webpack_require__("jLZ4"));

var _trim = _interopRequireDefault(__webpack_require__("6bmC"));

var _escape = _interopRequireDefault(__webpack_require__("vAff"));

var _unescape = _interopRequireDefault(__webpack_require__("QduH"));

var _stripLow = _interopRequireDefault(__webpack_require__("UM4E"));

var _whitelist = _interopRequireDefault(__webpack_require__("Ha4Q"));

var _blacklist = _interopRequireDefault(__webpack_require__("Sozg"));

var _isWhitelisted = _interopRequireDefault(__webpack_require__("3ZXo"));

var _normalizeEmail = _interopRequireDefault(__webpack_require__("bMah"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '11.0.0';
var validator = {
  version: version,
  toDate: _toDate.default,
  toFloat: _toFloat.default,
  toInt: _toInt.default,
  toBoolean: _toBoolean.default,
  equals: _equals.default,
  contains: _contains.default,
  matches: _matches.default,
  isEmail: _isEmail.default,
  isURL: _isURL.default,
  isMACAddress: _isMACAddress.default,
  isIP: _isIP.default,
  isIPRange: _isIPRange.default,
  isFQDN: _isFQDN.default,
  isBoolean: _isBoolean.default,
  isAlpha: _isAlpha.default,
  isAlphaLocales: _isAlpha.locales,
  isAlphanumeric: _isAlphanumeric.default,
  isAlphanumericLocales: _isAlphanumeric.locales,
  isNumeric: _isNumeric.default,
  isPort: _isPort.default,
  isLowercase: _isLowercase.default,
  isUppercase: _isUppercase.default,
  isAscii: _isAscii.default,
  isFullWidth: _isFullWidth.default,
  isHalfWidth: _isHalfWidth.default,
  isVariableWidth: _isVariableWidth.default,
  isMultibyte: _isMultibyte.default,
  isSurrogatePair: _isSurrogatePair.default,
  isInt: _isInt.default,
  isFloat: _isFloat.default,
  isFloatLocales: _isFloat.locales,
  isDecimal: _isDecimal.default,
  isHexadecimal: _isHexadecimal.default,
  isDivisibleBy: _isDivisibleBy.default,
  isHexColor: _isHexColor.default,
  isISRC: _isISRC.default,
  isMD5: _isMD.default,
  isHash: _isHash.default,
  isJWT: _isJWT.default,
  isJSON: _isJSON.default,
  isEmpty: _isEmpty.default,
  isLength: _isLength.default,
  isByteLength: _isByteLength.default,
  isUUID: _isUUID.default,
  isMongoId: _isMongoId.default,
  isAfter: _isAfter.default,
  isBefore: _isBefore.default,
  isIn: _isIn.default,
  isCreditCard: _isCreditCard.default,
  isIdentityCard: _isIdentityCard.default,
  isISIN: _isISIN.default,
  isISBN: _isISBN.default,
  isISSN: _isISSN.default,
  isMobilePhone: _isMobilePhone.default,
  isMobilePhoneLocales: _isMobilePhone.locales,
  isPostalCode: _isPostalCode.default,
  isPostalCodeLocales: _isPostalCode.locales,
  isCurrency: _isCurrency.default,
  isISO8601: _isISO.default,
  isRFC3339: _isRFC.default,
  isISO31661Alpha2: _isISO31661Alpha.default,
  isISO31661Alpha3: _isISO31661Alpha2.default,
  isBase32: _isBase.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI.default,
  isMagnetURI: _isMagnetURI.default,
  isMimeType: _isMimeType.default,
  isLatLong: _isLatLong.default,
  ltrim: _ltrim.default,
  rtrim: _rtrim.default,
  trim: _trim.default,
  escape: _escape.default,
  unescape: _unescape.default,
  stripLow: _stripLow.default,
  whitelist: _whitelist.default,
  blacklist: _blacklist.default,
  isWhitelisted: _isWhitelisted.default,
  normalizeEmail: _normalizeEmail.default,
  toString: toString
};
var _default = validator;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "2jw7":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9KWN");


/***/ }),

/***/ "31Yn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "35oZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISRC;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
  (0, _assertString.default)(str);
  return isrc.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "3AO0":
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

/***/ "3QTP":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Ev2V");
__webpack_require__("k8Q4");
__webpack_require__("tCzM");
__webpack_require__("W1+3");
__webpack_require__("tgSc");
__webpack_require__("xglJ");
module.exports = __webpack_require__("p9MR").Promise;


/***/ }),

/***/ "3ZXo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWhitelisted(str, chars) {
  (0, _assertString.default)(str);

  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

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

/***/ "3s9C":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("D4ny");
var isObject = __webpack_require__("b4pn");
var newPromiseCapability = __webpack_require__("A8op");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "3wqb":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("vCXk");
var invoke = __webpack_require__("GWyB");
var html = __webpack_require__("EDr4");
var cel = __webpack_require__("Ev2A");
var global = __webpack_require__("2jw7");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("bh8V")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "40Gw":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("fZVS"), 'Object', { defineProperty: __webpack_require__("OtwA").f });


/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

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

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4N2y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _alpha = __webpack_require__("ZPM+");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFloat(str, options) {
  (0, _assertString.default)(str);
  options = options || {};
  var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));

  if (str === '' || str === '.' || str === '-' || str === '+') {
    return false;
  }

  var value = parseFloat(str.replace(',', '.'));
  return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
}

var locales = Object.keys(_alpha.decimal);
exports.locales = locales;

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

module.exports = __webpack_require__("Vphk");

/***/ }),

/***/ "59gi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InfoOutlined");

/***/ }),

/***/ "5Kld":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("tFdt");
var $export = __webpack_require__("0T/a");
var redefine = __webpack_require__("IxLI");
var hide = __webpack_require__("jOCL");
var Iterators = __webpack_require__("sipE");
var $iterCreate = __webpack_require__("XOdh");
var setToStringTag = __webpack_require__("wNhr");
var getPrototypeOf = __webpack_require__("/wxW");
var ITERATOR = __webpack_require__("G1Wo")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "5PW+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBoolean(str) {
  (0, _assertString.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

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

/***/ "5foh":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "5kmR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString.default)(str);
  return surrogatePair.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "5upH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = exports.QueryRenderer = exports.RelayProvider = exports.fetchQuery = exports.RelayContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

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

var fetchQuery = function fetchQuery(environment) {
  return function (query, variables) {
    return (0, _relayRuntime.fetchQuery)(environment, query, variables);
  };
};

exports.fetchQuery = fetchQuery;

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
      var _this$props = this.props,
          environment = _this$props.environment,
          children = _this$props.children;
      return _react.default.createElement(RelayContext.Provider, {
        value: environment
      }, children);
    }
  }]);
  return RelayProvider;
}(_react.default.Component);

exports.RelayProvider = RelayProvider;

var QueryRenderer =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(QueryRenderer, _React$Component2);

  function QueryRenderer() {
    (0, _classCallCheck2.default)(this, QueryRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(QueryRenderer).apply(this, arguments));
  }

  (0, _createClass2.default)(QueryRenderer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["children"]);
      return _react.default.createElement(_relayQueryLookupRenderer.default, (0, _extends2.default)({
        lookup: true,
        environment: this.context
      }, props), children);
    }
  }]);
  return QueryRenderer;
}(_react.default.Component);

exports.QueryRenderer = QueryRenderer;
(0, _defineProperty2.default)(QueryRenderer, "contextType", RelayContext);

var Subscription =
/*#__PURE__*/
function (_React$Component3) {
  (0, _inherits2.default)(Subscription, _React$Component3);

  function Subscription() {
    (0, _classCallCheck2.default)(this, Subscription);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Subscription).apply(this, arguments));
  }

  (0, _createClass2.default)(Subscription, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.request = _reactRelay.default.requestSubscription(this.context, this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.request) {
        this.request.dispose();
        this.request = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null);
    }
  }]);
  return Subscription;
}(_react.default.Component);

exports.Subscription = Subscription;
(0, _defineProperty2.default)(Subscription, "defaultProps", {
  variables: {}
});
(0, _defineProperty2.default)(Subscription, "contextType", RelayContext);

/***/ }),

/***/ "6+sw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _toFloat = _interopRequireDefault(__webpack_require__("DBSy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDivisibleBy(str, num) {
  (0, _assertString.default)(str);
  return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "6bmC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = _interopRequireDefault(__webpack_require__("jLZ4"));

var _ltrim = _interopRequireDefault(__webpack_require__("9dOb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str, chars) {
  return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "7FvJ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("40Gw");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


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

/***/ "7nhY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PowerSettingsNew");

/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "8+AD":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("AYVP");
var $keys = __webpack_require__("djPm");

__webpack_require__("wWUK")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "8Vlj":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("fYqa");
var ITERATOR = __webpack_require__("G1Wo")('iterator');
var Iterators = __webpack_require__("sipE");
module.exports = __webpack_require__("p9MR").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "8v5W":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


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
    return _ChartsPage.default;
  }
});

var _ChartsPage = _interopRequireDefault(__webpack_require__("ON+m"));

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9Wj7":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("OtwA");
var anObject = __webpack_require__("D4ny");
var getKeys = __webpack_require__("djPm");

module.exports = __webpack_require__("fZVS") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "9XDq":
/***/ (function(module, exports) {

module.exports = require("memoize-one");

/***/ }),

/***/ "9dOb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ltrim(str, chars) {
  (0, _assertString.default)(str);
  var pattern = chars ? new RegExp("^[".concat(chars, "]+"), 'g') : /^\s+/g;
  return str.replace(pattern, '');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "9fqU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("Bjmp");

var _state = __webpack_require__("XiiD");

var _Themes = _interopRequireWildcard(__webpack_require__("XIVt"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    apiServer: _state.appSelectors.getApiServer(state)
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
    onSetTheme: function onSetTheme(theme) {
      return dispatch(_state.appOperations.setTheme({
        theme: theme
      }));
    }
  };
};

var Themes = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(_Themes.styles)((0, _reactIntl.injectIntl)(_Themes.default)));
var _default = Themes;
exports.default = _default;

/***/ }),

/***/ "9jP9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIPRange;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _isIP = _interopRequireDefault(__webpack_require__("M+nr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subnetMaybe = /^\d{1,2}$/;

function isIPRange(str) {
  (0, _assertString.default)(str);
  var parts = str.split('/'); // parts[0] -> ip, parts[1] -> subnet

  if (parts.length !== 2) {
    return false;
  }

  if (!subnetMaybe.test(parts[1])) {
    return false;
  } // Disallow preceding 0 i.e. 01, 02, ...


  if (parts[1].length > 1 && parts[1].startsWith('0')) {
    return false;
  }

  return (0, _isIP.default)(parts[0], 4) && parts[1] <= 32 && parts[1] >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "A8op":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("8v5W");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "ACkF":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "ARk6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "AV/6":
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ }),

/***/ "AYVP":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("5foh");
module.exports = function (it) {
  return Object(defined(it));
};


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

/***/ "B8g0":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("0T/a");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("ZJRo").set });


/***/ }),

/***/ "BfLe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

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

var _constants = _interopRequireDefault(__webpack_require__("QwoZ"));

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
        width: 160,
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
        src: this.props.isAuthenticated ? this.props.apiServer + _constants.default.apiBase + "/avatars/self?size=large&t=" + (0, _now.default)() : "/static/img/anonymous.png"
      }), _react.default.createElement(_Typography.default, {
        variant: "subtitle1",
        color: "inherit"
      }, this.props.isAuthenticated && (this.props.user.name || this.props.user.email) || "Anonymous"), !this.props.isAuthenticated && _react.default.createElement(_Button.default, {
        variant: "contained",
        onClick: this.props.onLoginClick
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "SIDEBAR_LOGIN_BUTTON"
      })));
    }
  }, {
    key: "renderItem",
    value: function renderItem(path) {
      var _this = this;

      var _constants$pages$path = _constants.default.pages[path],
          icon = _constants$pages$path.icon,
          menu = _constants$pages$path.menu,
          isAllowed = _constants$pages$path.isAllowed;
      if (!icon || !menu) return null;
      if (isAllowed && !isAllowed(this.props.user)) return null;
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
      }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_react.default.Fragment, null, icon === "dashboard" && _react.default.createElement(_Dashboard.default, null), icon === "forms" && _react.default.createElement(_Ballot.default, null), icon === "charts" && _react.default.createElement(_InsertChart.default, null), icon === "tables" && _react.default.createElement(_TableChart.default, null), icon === "maps" && _react.default.createElement(_Map.default, null), icon === "notifications" && _react.default.createElement(_SpeakerNotes.default, null), icon === "typography" && _react.default.createElement(_BrightnessAuto.default, null), icon === "icons" && _react.default.createElement(_Pets.default, null), icon === "users" && _react.default.createElement(_People.default, null))), _react.default.createElement(_ListItemText.default, {
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
          return window.open(_this2.props.apiServer + _constants.default.apiBase + "/redirect/github");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "SIDEBAR_GITHUB_LINK"
      })), _react.default.createElement("a", {
        href: "javascript:void(0)",
        className: this.props.classes.link,
        onClick: function onClick() {
          return window.open(_this2.props.apiServer + _constants.default.apiBase + "/redirect/benchmarks");
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "SIDEBAR_BENCHMARKS_LINK"
      })), _react.default.createElement("a", {
        href: "javascript:void(0)",
        className: this.props.classes.link,
        onClick: function onClick() {
          return window.open(_this2.props.apiServer + _constants.default.apiBase + "/redirect/responsiveness");
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

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cBdl");

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "BlHF":
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),

/***/ "Blge":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InsertChart");

/***/ }),

/***/ "CLtn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash c72254a083b16980216dbcd3843afe32
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LayoutContainer_viewer$ref = any;
export type LayoutContainerQueryVariables = {||};
export type LayoutContainerQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: LayoutContainer_viewer$ref
  |}
|};
export type LayoutContainerQuery = {|
  variables: LayoutContainerQueryVariables,
  response: LayoutContainerQueryResponse,
|};
*/

/*
query LayoutContainerQuery {
  viewer {
    ...LayoutContainer_viewer
  }
}

fragment LayoutContainer_viewer on Viewer {
  me {
    isAuthenticated
    userId
    name
    email
    roles
    providers {
      name
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = {
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
      "name": "LayoutContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "LayoutContainer_viewer",
          "args": null
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "LayoutContainerQuery",
      "argumentDefinitions": [],
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
          "name": "me",
          "storageKey": null,
          "args": null,
          "concreteType": "Status",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "isAuthenticated",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "userId",
            "args": null,
            "storageKey": null
          }, v0
          /*: any*/
          , {
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
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "providers",
            "storageKey": null,
            "args": null,
            "concreteType": "ProviderStatus",
            "plural": true,
            "selections": [v0
            /*: any*/
            ]
          }]
        }]
      }]
    },
    "params": {
      "operationKind": "query",
      "name": "LayoutContainerQuery",
      "id": null,
      "text": "query LayoutContainerQuery {\n  viewer {\n    ...LayoutContainer_viewer\n  }\n}\n\nfragment LayoutContainer_viewer on Viewer {\n  me {\n    isAuthenticated\n    userId\n    name\n    email\n    roles\n    providers {\n      name\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'cfc4b54e6bed891540b4a72dba18f87c';
module.exports = node;

/***/ }),

/***/ "CUfL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("guND");

/***/ }),

/***/ "CgoH":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var LIBRARY = __webpack_require__("tFdt");
var wksExt = __webpack_require__("/aHj");
var defineProperty = __webpack_require__("OtwA").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "Ckg0":
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

var _theme = _interopRequireDefault(__webpack_require__("3AO0"));

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

/***/ "CpH4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("tCzM");
__webpack_require__("k8Q4");
module.exports = __webpack_require__("t39F");


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

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "D4ny":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "DBSy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFloat(str) {
  (0, _assertString.default)(str);
  return parseFloat(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "DBn5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("Bjmp");

var _FieldMessages = _interopRequireWildcard(__webpack_require__("sVnQ"));

var FieldMessages = (0, _styles.withStyles)(_FieldMessages.styles)((0, _reactIntl.injectIntl)(_FieldMessages.default));
var _default = FieldMessages;
exports.default = _default;

/***/ }),

/***/ "Djzu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _formik = __webpack_require__("QxnH");

var _memoizeOne = _interopRequireDefault(__webpack_require__("9XDq"));

var _validate = _interopRequireDefault(__webpack_require__("yIg3"));

var _context = _interopRequireDefault(__webpack_require__("lLKY"));

var areEqualFields = (0, _memoizeOne.default)(function (a, b) {
  return !!a && !!b && _.isEqual(a, b);
});

var FormComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(FormComponent, _React$PureComponent);
  (0, _createClass2.default)(FormComponent, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (areEqualFields(nextProps.fields, prevState.fields)) return null;
      return {
        fields: nextProps.fields
      };
    }
  }]);

  function FormComponent(props) {
    var _this;

    (0, _classCallCheck2.default)(this, FormComponent);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormComponent).call(this, props));
    _this.state = {};
    _this.doValidate = _this.doValidate.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(FormComponent, [{
    key: "doValidate",
    value: function doValidate(values) {
      var errors = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator2.default)(_.keys(this.props.fields)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;
          var field = this.props.fields[key];

          if (field && field.validate) {
            var fieldError = (0, _validate.default)(field.validate, values[key], values);
            if (fieldError && fieldError.length) _.assign(errors, (0, _defineProperty2.default)({}, key, fieldError));
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

      if (this.props.validate) errors = this.props.validate(errors, values);
      return errors;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          fields = _this$props.fields,
          _render = _this$props.render,
          formProps = (0, _objectWithoutProperties2.default)(_this$props, ["fields", "render"]);
      return _react.default.createElement(_formik.Formik, (0, _extends2.default)({
        validateOnBlur: true,
        validateOnChange: false
      }, formProps, {
        validate: this.doValidate,
        onSubmit: this.props.onSubmit,
        render: function render(props) {
          var handleSubmit = function handleSubmit() {
            setTimeout(function () {
              var touched = _.assign({}, props.touched);

              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = (0, _getIterator2.default)(_.keys(fields)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var field = _step2.value;
                  touched[field] = true;
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

              props.setTouched(touched);
            });
            return props.handleSubmit();
          };

          return _react.default.createElement(_context.default.Provider, {
            value: _this2.state
          }, _react.default.createElement("form", {
            noValidate: true,
            autoComplete: "off",
            onSubmit: handleSubmit,
            onReset: props.handleReset
          }, _render((0, _objectSpread2.default)({}, props, {
            handleSubmit: handleSubmit
          }))));
        }
      }));
    }
  }]);
  return FormComponent;
}(_react.default.PureComponent);

var _default = FormComponent;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "EDr4":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("2jw7").document;
module.exports = document && document.documentElement;


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

/***/ "Ev2A":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
var document = __webpack_require__("2jw7").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "Ev2V":
/***/ (function(module, exports) {



/***/ }),

/***/ "FsgU":
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

var _Chart = _interopRequireDefault(__webpack_require__("aN8n"));

var _Chart2 = _interopRequireDefault(__webpack_require__("OG1x"));

var _Chart3 = _interopRequireDefault(__webpack_require__("cz0s"));

var _Chart4 = _interopRequireDefault(__webpack_require__("Ckg0"));

var _Chart5 = _interopRequireDefault(__webpack_require__("uCCn"));

var _Chart6 = _interopRequireDefault(__webpack_require__("t7Ei"));

var styles = function styles(theme) {
  return {
    layout: {
      width: "100%",
      flex: 1,
      padding: theme.spacing(2)
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

var ChartsDemo =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ChartsDemo, _React$Component);

  function ChartsDemo() {
    (0, _classCallCheck2.default)(this, ChartsDemo);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ChartsDemo).apply(this, arguments));
  }

  (0, _createClass2.default)(ChartsDemo, [{
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
        spacing: 2
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
  return ChartsDemo;
}(_react.default.Component);

var _default = ChartsDemo;
exports.default = _default;

/***/ }),

/***/ "G+Sp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var dP = __webpack_require__("OtwA");
var DESCRIPTORS = __webpack_require__("fZVS");
var SPECIES = __webpack_require__("G1Wo")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "G1Wo":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("d3Kl")('wks');
var uid = __webpack_require__("ewAR");
var Symbol = __webpack_require__("2jw7").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "G3hc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _alpha = __webpack_require__("ZPM+");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  (0, _assertString.default)(str);

  if (locale in _alpha.alphanumeric) {
    return _alpha.alphanumeric[locale].test(str);
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(_alpha.alphanumeric);
exports.locales = locales;

/***/ }),

/***/ "G492":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("qBJy");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "GCOt":
/***/ (function(module, exports) {



/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "GTiD":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("0T/a");

$export($export.S, 'Array', { isArray: __webpack_require__("taoM") });


/***/ }),

/***/ "GWyB":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "GYHf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "H7v7":
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

var _Hidden = _interopRequireDefault(__webpack_require__("Y8uC"));

var _HeaderBarContainer = _interopRequireDefault(__webpack_require__("p5qD"));

var styles = function styles() {
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
      height: 10
    },
    smallWrapper: {
      zIndex: 1400,
      alignSelf: "stretch"
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
      isVisible: false
    };
    _this.isDestroyed = false;
    _this.handleWrapperMouseEnter = _this.handleWrapperMouseEnter.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleWrapperMouseLeave = _this.handleWrapperMouseLeave.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleClose = _this.handleClose.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Header, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isDestroyed = true;
    }
  }, {
    key: "handleWrapperMouseEnter",
    value: function handleWrapperMouseEnter() {
      if (!this.state.isVisible) this.setState({
        isVisible: true
      });
    }
  }, {
    key: "handleWrapperMouseLeave",
    value: function handleWrapperMouseLeave() {
      if (this.state.isVisible) this.setState({
        isVisible: false
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      if (this.state.isVisible) this.setState({
        isVisible: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Hidden.default, {
        smUp: true,
        initialWidth: "lg"
      }, _react.default.createElement("div", {
        className: this.props.classes.smallWrapper
      }, _react.default.createElement(_HeaderBarContainer.default, {
        isVisible: true,
        withShadow: false,
        isAuthenticated: this.props.isAuthenticated,
        onSidebarToggle: this.props.onSidebarToggle,
        onClose: this.handleClose
      }))), _react.default.createElement(_Hidden.default, {
        xsDown: true,
        initialWidth: "lg"
      }, _react.default.createElement("div", {
        className: this.props.classes.wrapper,
        onMouseEnter: this.handleWrapperMouseEnter,
        onMouseLeave: this.handleWrapperMouseLeave
      }, _react.default.createElement(_HeaderBarContainer.default, {
        isVisible: this.state.isVisible,
        withShadow: true,
        isAuthenticated: this.props.isAuthenticated,
        onSidebarToggle: this.props.onSidebarToggle,
        onClose: this.handleClose
      })), _react.default.createElement("div", {
        className: this.props.classes.spacer
      })));
    }
  }]);
  return Header;
}(_react.default.Component);

var _default = Header;
exports.default = _default;

/***/ }),

/***/ "HBlD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMimeType;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Checks if the provided string matches to a correct Media type format (MIME type)

  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).

  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.

  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/
// Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len
// Handle "charset" in "text/*"

var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len
// Handle "boundary" in "multipart/*"

var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

function isMimeType(str) {
  (0, _assertString.default)(str);
  return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "Ha4Q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whitelist(str, chars) {
  (0, _assertString.default)(str);
  return str.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "HaHp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ColorLens");

/***/ }),

/***/ "HoHC":
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

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__("7s44"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _Checkbox = _interopRequireDefault(__webpack_require__("r6Lb"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("DBn5"));

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
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(MyCheckbox, [{
    key: "handleChange",
    value: function handleChange(evt) {
      evt.target.value = evt.target.checked;
      this.props.onChange(evt);
      this.props.field.onChange(evt);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      this.props.onBlur(evt);
      return this.props.field.onBlur(evt);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errors = !!this.props.form.touched[this.props.name] && this.props.form.errors[this.props.name];
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
          name: this.props.name,
          value: "on",
          autoFocus: this.props.autoFocus,
          checked: !!this.props.field.value,
          disabled: this.props.form.isSubmitting || this.props.disabled,
          color: this.props.color || "primary",
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          inputProps: {
            onKeyDown: function onKeyDown(evt) {
              if (evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();

                _this2.props.handleSubmit();
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
        messages: this.props.messages || null,
        errors: errors || null
      })));
    }
  }]);
  return MyCheckbox;
}(_react.default.PureComponent);

var _default = MyCheckbox;
exports.default = _default;

/***/ }),

/***/ "Hqih":
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

var _ClickAwayListener = _interopRequireDefault(__webpack_require__("31Yn"));

var _Tooltip = _interopRequireDefault(__webpack_require__("vF8F"));

var _Hidden = _interopRequireDefault(__webpack_require__("Y8uC"));

var _AppBar = _interopRequireDefault(__webpack_require__("4151"));

var _Toolbar = _interopRequireDefault(__webpack_require__("Ms0O"));

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var _IconButton = _interopRequireDefault(__webpack_require__("EmCc"));

var _InputBase = _interopRequireDefault(__webpack_require__("ynsX"));

var _Badge = _interopRequireDefault(__webpack_require__("IfcR"));

var _Menu = _interopRequireDefault(__webpack_require__("4D1s"));

var _Search = _interopRequireDefault(__webpack_require__("iSPQ"));

var _Mail = _interopRequireDefault(__webpack_require__("Q6gG"));

var _AccountBox = _interopRequireDefault(__webpack_require__("j4BW"));

var _ColorLens = _interopRequireDefault(__webpack_require__("HaHp"));

var _PowerSettingsNew = _interopRequireDefault(__webpack_require__("7nhY"));

var _reactFlags = _interopRequireDefault(__webpack_require__("1Kbk"));

var _locales = _interopRequireDefault(__webpack_require__("MSzE"));

var _InboxContainer = _interopRequireDefault(__webpack_require__("vnTJ"));

var _LocalesContainer = _interopRequireDefault(__webpack_require__("uspL"));

var _ThemesContainer = _interopRequireDefault(__webpack_require__("9fqU"));

var _ShadowContainer = _interopRequireDefault(__webpack_require__("oBHA"));

var styles = function styles(theme) {
  var _inputInput;

  return {
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
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1)
    },
    searchIcon: (0, _defineProperty2.default)({
      width: theme.spacing(5),
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
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(5),
      transition: theme.transitions.create("width"),
      width: 300
    }, (0, _defineProperty2.default)(_inputInput, theme.breakpoints.down("md"), {
      width: "100%"
    }), (0, _defineProperty2.default)(_inputInput, theme.breakpoints.down("xs"), {
      paddingLeft: theme.spacing(1)
    }), _inputInput),
    tooltip: {
      fontSize: ["1em", "!important"]
    }
  };
};

exports.styles = styles;

var HeaderBar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(HeaderBar, _React$Component);

  function HeaderBar(props) {
    var _this;

    (0, _classCallCheck2.default)(this, HeaderBar);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HeaderBar).call(this, props));
    _this.state = {
      barHeight: 0,
      barWidth: 0,
      anchorInbox: null,
      anchorLocales: null,
      anchorThemes: null
    };
    _this.isDestroyed = false;
    _this.bar = _react.default.createRef();
    _this.onResize = _this.onResize.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleInboxOpen = _this.handleInboxOpen.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleLocalesOpen = _this.handleLocalesOpen.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleThemesOpen = _this.handleThemesOpen.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleProfile = _this.handleProfile.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSignOut = _this.handleSignOut.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(HeaderBar, [{
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
          if (!_this2.isDestroyed && _this2.bar.current) {
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
    key: "handleThemesOpen",
    value: function handleThemesOpen(event) {
      this.setState({
        anchorThemes: event.currentTarget
      });
    }
  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorInbox: null,
        anchorLocales: null,
        anchorThemes: null
      });
      this.props.onClose();
    }
  }, {
    key: "handleProfile",
    value: function handleProfile() {
      _router.default.push("/auth/profile");

      this.handleMenuClose();
    }
  }, {
    key: "handleSignOut",
    value: function handleSignOut() {
      this.props.onSignOut();
      this.handleMenuClose();
    }
  }, {
    key: "render",
    value: function render() {
      var isVisible = this.props.isVisible || this.state.anchorInbox || this.state.anchorLocales || this.state.anchorThemes;
      return _react.default.createElement(_ClickAwayListener.default, {
        onClickAway: this.handleMenuClose
      }, _react.default.createElement("div", {
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
        color: "primary"
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
      })), !this.props.isAuthenticated && _react.default.createElement(_Tooltip.default, {
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
      }))), this.props.isAuthenticated && _react.default.createElement(_Button.default, {
        color: "inherit",
        className: this.props.classes.barItem,
        onClick: this.handleProfile
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
        basePath: "/static/img/flags"
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
      }), this.props.isAuthenticated && _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleSignOut
      }, _react.default.createElement(_PowerSettingsNew.default, null))), _react.default.createElement(_Hidden.default, {
        smUp: true
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.props.onSidebarToggle
      }, _react.default.createElement(_Menu.default, null)), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleInboxOpen
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 4,
        color: "secondary"
      }, _react.default.createElement(_Mail.default, null))), !this.props.isAuthenticated && _react.default.createElement(_Tooltip.default, {
        title: this.props.intl.formatMessage({
          id: "HEADER_PROFILE_TOOLTIP"
        }),
        classes: {
          tooltip: this.props.classes.tooltip
        }
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit"
      }, _react.default.createElement(_AccountBox.default, null))), this.props.isAuthenticated && _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleProfile
      }, _react.default.createElement(_AccountBox.default, null)), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleLocalesOpen
      }, _react.default.createElement(_reactFlags.default, {
        name: _locales.default.flags[this.props.locale],
        format: "png",
        pngSize: 24,
        basePath: "/static/img/flags"
      })), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleThemesOpen
      }, _react.default.createElement(_ColorLens.default, null)), _react.default.createElement("div", {
        className: this.props.classes.grow
      }), this.props.isAuthenticated && _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleSignOut
      }, _react.default.createElement(_PowerSettingsNew.default, null)))), _react.default.createElement(_InboxContainer.default, {
        anchor: this.state.anchorInbox,
        onClose: this.handleMenuClose
      }), _react.default.createElement(_LocalesContainer.default, {
        anchor: this.state.anchorLocales,
        onClose: this.handleMenuClose
      }), _react.default.createElement(_ThemesContainer.default, {
        anchor: this.state.anchorThemes,
        onClose: this.handleMenuClose
      }))), this.props.withShadow && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Hidden.default, {
        mdDown: true,
        initialWidth: "lg"
      }, _react.default.createElement(_ShadowContainer.default, {
        isDesktop: true,
        width: this.state.barWidth
      })), _react.default.createElement(_Hidden.default, {
        lgUp: true,
        initialWidth: "lg"
      }, _react.default.createElement(_ShadowContainer.default, {
        isDesktop: false,
        width: this.state.barWidth
      })))));
    }
  }]);
  return HeaderBar;
}(_react.default.Component);

var _default = HeaderBar;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "HrT2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowercase(str) {
  (0, _assertString.default)(str);
  return str === str.toLowerCase();
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "I584":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

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

var _forms = __webpack_require__("KH7Z");

var _constants = _interopRequireDefault(__webpack_require__("QwoZ"));

var _facebook = _interopRequireDefault(__webpack_require__("MmNR"));

var _google = _interopRequireDefault(__webpack_require__("yh8l"));

var _twitter = _interopRequireDefault(__webpack_require__("w1vu"));

var _auth = _interopRequireDefault(__webpack_require__("ShHm"));

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
      width: "100%",
      marginBottom: ["1rem", "!important"]
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
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(AppAuthModal, [{
    key: "submit",
    value: function () {
      var _submit = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref, _ref2) {
        var isNewUser, email, password, setSubmitting, setErrors, setStatus, result, _status, errors;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isNewUser = _ref.isNewUser, email = _ref.email, password = _ref.password;
                setSubmitting = _ref2.setSubmitting, setErrors = _ref2.setErrors, setStatus = _ref2.setStatus;

                if (!isNewUser) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return this.props.onSignUp(email, password);

              case 5:
                _context.t0 = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return this.props.onSignIn(email, password);

              case 10:
                _context.t0 = _context.sent;

              case 11:
                result = _context.t0;

                if (result === true) {
                  setSubmitting(false);
                  this.props.onClose();
                } else {
                  _status = result._status, errors = (0, _objectWithoutProperties2.default)(result, ["_status"]);
                  setSubmitting(false);
                  setErrors(errors);
                  setStatus(_status);
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit(_x, _x2) {
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
          return _this2.props.onLink(provider);
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

      return _react.default.createElement(_forms.Form, {
        fields: _auth.default,
        initialValues: {
          isNewUser: false
        },
        onSubmit: this.submit,
        render: function render(_ref3) {
          var isSubmitting = _ref3.isSubmitting,
              status = _ref3.status,
              handleSubmit = _ref3.handleSubmit;
          return _react.default.createElement(_Dialog.default, {
            maxWidth: "sm",
            open: true,
            onClose: _this3.props.onClose
          }, _react.default.createElement(_DialogTitle.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "APP_AUTH_TITLE"
          })), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_Grid.default, {
            container: true,
            spacing: 1,
            justify: "space-evenly"
          }, _react.default.createElement(_Grid.default, {
            container: true,
            spacing: 1,
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
            disabled: isSubmitting,
            onClick: _this3.props.onClose
          }, _react.default.createElement(_VisibilityOff.default, null), "\xA0\xA0", _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "APP_AUTH_ANONYMOUS_BUTTON"
          }))), _react.default.createElement(_Grid.default, {
            item: true
          }, _this3.renderButton(_constants.default.oauthProviders.FACEBOOK, isSubmitting)), _react.default.createElement(_Grid.default, {
            item: true
          }, _this3.renderButton(_constants.default.oauthProviders.GOOGLE, isSubmitting)), _react.default.createElement(_Grid.default, {
            item: true
          }, _this3.renderButton(_constants.default.oauthProviders.TWITTER, isSubmitting))), _react.default.createElement(_Grid.default, {
            item: true,
            xs: 12,
            sm: 6
          }, _react.default.createElement(_Paper.default, {
            className: _this3.props.classes.credentialsPaper
          }, _react.default.createElement(_Grid.default, {
            container: true,
            spacing: 1,
            direction: "column"
          }, _react.default.createElement(_Grid.default, {
            item: true
          }, _react.default.createElement(_Typography.default, {
            variant: "h5",
            className: _this3.props.classes.credentialsLabel
          }, _react.default.createElement(_reactIntl.FormattedMessage, {
            id: "APP_AUTH_CREDENTIALS_LABEL"
          }))), !!status && _react.default.createElement(_Grid.default, {
            item: true
          }, _.map(_.isArray(status) ? status : [status], function (error, index) {
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
            disabled: isSubmitting,
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

/***/ "IM81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _toDate = _interopRequireDefault(__webpack_require__("z3MP"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
  (0, _assertString.default)(str);
  var comparison = (0, _toDate.default)(date);
  var original = (0, _toDate.default)(str);
  return !!(original && comparison && original < comparison);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "IZAv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _merge = _interopRequireDefault(__webpack_require__("ARk6"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_is_empty_options = {
  ignore_whitespace: false
};

function isEmpty(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_is_empty_options);
  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "IfcR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "IxLI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jOCL");


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

/***/ "JBiz":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("aput");
var toLength = __webpack_require__("pasi");
var toAbsoluteIndex = __webpack_require__("G492");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "JFuE":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
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

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Jhmf":
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

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("DBn5"));

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
      var errors = !!this.props.form.touched[this.props.name] && this.props.form.errors[this.props.name];
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

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KgSv");

/***/ }),

/***/ "JpU4":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("Q8jq");
var toIObject = __webpack_require__("aput");
var arrayIndexOf = __webpack_require__("JBiz")(false);
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


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

/***/ "JvVL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toString;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function toString(input) {
  if (_typeof(input) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }

  return String(input);
}

module.exports = exports.default;
module.exports.default = exports.default;

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

/***/ "KH7Z":
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

var _context = _interopRequireDefault(__webpack_require__("lLKY"));

var _Form = _interopRequireDefault(__webpack_require__("Djzu"));

var _FieldContainer = _interopRequireDefault(__webpack_require__("jEar"));

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

/***/ "KSoU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(str, radix) {
  (0, _assertString.default)(str);
  return parseInt(str, radix || 10);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "KgSv":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("STjA");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "Kk5c":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("qBJy");
var defined = __webpack_require__("5foh");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "KqIO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("Bjmp");

var _Checkbox = _interopRequireWildcard(__webpack_require__("HoHC"));

var Checkbox = (0, _styles.withStyles)(_Checkbox.styles)(_Checkbox.default);
var _default = Checkbox;
exports.default = _default;

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

/***/ "LZqe":
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),

/***/ "LqFA":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("b4pn");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "LxY0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJSON;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isJSON(str) {
  (0, _assertString.default)(str);

  try {
    var obj = JSON.parse(str);
    return !!obj && _typeof(obj) === 'object';
  } catch (e) {
    /* ignore */
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "M+nr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }

    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::
    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.

    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    } // initial or final ::


    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }

        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {// it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }

    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }

    return blocks.length === expectedNumberOfBlocks;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "MC82":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("D4ny");
var aFunction = __webpack_require__("8v5W");
var SPECIES = __webpack_require__("G1Wo")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


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
  mapboxToken: null,
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

var mapboxTokenReducer = function mapboxTokenReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.mapboxToken)) return action.mapboxToken;
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
  mapboxToken: mapboxTokenReducer,
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

/***/ "McIs":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "MmNR":
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 3.998v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h-3v-7h-2v-3h2v-2.5a3.5 3.5 0 0 1 3.5-3.5H19zm1-2H4c-1.105 0-1.99.895-1.99 2l-.01 16c0 1.104.895 2 2 2h16c1.103 0 2-.896 2-2v-16a2 2 0 0 0-2-2z\"></path></svg>"

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

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

/***/ "NAKw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha2;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _includes = _interopRequireDefault(__webpack_require__("n1Tu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

function isISO31661Alpha2(str) {
  (0, _assertString.default)(str);
  return (0, _includes.default)(validISO31661Alpha2CountriesCodes, str.toUpperCase());
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "NV0Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("Rkej");

__webpack_require__("jDDT");

__webpack_require__("GCOt");

__webpack_require__("rG3h");

/***/ }),

/***/ "Nr6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBoolean(str, strict) {
  (0, _assertString.default)(str);

  if (strict) {
    return str === '1' || str === 'true';
  }

  return str !== '0' && str !== 'false' && str !== '';
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "NtxZ":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var macrotask = __webpack_require__("3wqb").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("bh8V")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "OFRV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ErrorOutlined");

/***/ }),

/***/ "OG1x":
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

var _theme = _interopRequireDefault(__webpack_require__("3AO0"));

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

/***/ "ON+m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _Relay = __webpack_require__("5upH");

var _ChartsDemoContainer = _interopRequireDefault(__webpack_require__("t7Ea"));

var _LayoutContainer = _interopRequireDefault(__webpack_require__("hl3i"));

var _SpinnerContainer = _interopRequireDefault(__webpack_require__("wkow"));

var defaultVariables = {};

var query = function query() {
  return __webpack_require__("/kPW");
};

exports.query = query;

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
      return _react.default.createElement(_Relay.QueryRenderer, {
        query: query,
        variables: defaultVariables,
        render: function render(_ref) {
          var error = _ref.error,
              props = _ref.props;
          return _react.default.createElement(_LayoutContainer.default, {
            page: "/charts",
            viewer: props ? props.viewer : null,
            error: error
          }, !error && !props && _react.default.createElement(_SpinnerContainer.default, null), !error && props && _react.default.createElement(_ChartsDemoContainer.default, {
            viewer: props.viewer
          }));
        }
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref2) {
        var fetchQuery;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchQuery = _ref2.fetchQuery;
                _context.next = 3;
                return fetchQuery(query, defaultVariables);

              case 3:
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
  return ChartsPage;
}(_react.default.Component);

var _default = ChartsPage;
exports.default = _default;

/***/ }),

/***/ "OQSD":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("jOCL");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "OtwA":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("D4ny");
var IE8_DOM_DEFINE = __webpack_require__("pH/F");
var toPrimitive = __webpack_require__("LqFA");
var dP = Object.defineProperty;

exports.f = __webpack_require__("fZVS") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


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
exports.fetchCities = exports.setCookie = exports.sendToast = exports.deleteProfile = exports.unlinkProvider = exports.finishLinkingProvider = exports.linkProvider = exports.updateProfile = exports.finishEmailVerification = exports.requestEmailVerification = exports.signOut = exports.signUp = exports.signIn = exports.stop = exports.start = exports.create = exports.hideAuthModal = exports.showAuthModal = exports.setTheme = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

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
      mapboxToken = _ref.mapboxToken;
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
                  mapboxToken: mapboxToken
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
        var refreshToken, oneTimeToken, data, result;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return di.get("fetcher").getRefreshToken();

              case 2:
                refreshToken = _context10.sent;

                if (!refreshToken) {
                  _context10.next = 9;
                  break;
                }

                _context10.next = 6;
                return (0, _GetToken.default)(di, {
                  type: "oneTime",
                  token: refreshToken
                });

              case 6:
                data = _context10.sent;
                result = _.get(data, "data.getToken.success", null);
                if (result === true) oneTimeToken = _.get(data, "data.getToken.token", null);

              case 9:
                window.location.href = selectors.getApiServer(getState()) + _constants.default.apiBase + "/oauth/" + _.lowerCase(provider) + "?redirect=" + encodeURIComponent(window.location.href) + (oneTimeToken ? "?token=" + encodeURIComponent(oneTimeToken) : "");
                return _context10.abrupt("return", refreshToken ? !!oneTimeToken : true);

              case 11:
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

var fetchCities = function fetchCities() {
  return (
    /*#__PURE__*/
    function () {
      var _ref26 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee16(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", di.get("fetcher").fetch({
                  method: "GET",
                  resource: selectors.getApiServer(getState()) + _constants.default.apiBase + "/data/us-cities"
                }));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }));

      return function (_x42, _x43, _x44) {
        return _ref26.apply(this, arguments);
      };
    }()
  );
};

exports.fetchCities = fetchCities;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "PczM":
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__("0T/a");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

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

/***/ "Q2zc":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("G1Wo")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "Q6gG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "Q8jq":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "QEhy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "Qa/D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("Bjmp");

var _state = __webpack_require__("XiiD");

var _AppAuthModal = _interopRequireWildcard(__webpack_require__("I584"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    apiServer: _state.appSelectors.getApiServer(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLink: function onLink(provider) {
      return dispatch(_state.appOperations.linkProvider({
        provider: provider
      }));
    },
    onSignIn: function onSignIn(email, password) {
      return dispatch(_state.appOperations.signIn({
        email: email,
        password: password
      }));
    },
    onSignUp: function onSignUp(email, password) {
      return dispatch(_state.appOperations.signUp({
        email: email,
        password: password
      }));
    },
    onClose: function onClose() {
      return dispatch(_state.appOperations.hideAuthModal());
    }
  };
};

var AppAuthModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(_AppAuthModal.styles)((0, _reactIntl.injectIntl)(_AppAuthModal.default)));
var _default = AppAuthModal;
exports.default = _default;

/***/ }),

/***/ "Qbfd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }

  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i;

  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }

    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }

    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }

    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }

    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }

    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "QduH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unescape;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unescape(str) {
  (0, _assertString.default)(str);
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "QneH":
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

var _colorManipulator = __webpack_require__("oOPP");

var _Menu = _interopRequireDefault(__webpack_require__("GYHf"));

var _MenuItem = _interopRequireDefault(__webpack_require__("x54t"));

var _ListItemText = _interopRequireDefault(__webpack_require__("W+03"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("GLYF"));

var _reactFlags = _interopRequireDefault(__webpack_require__("1Kbk"));

var _locales = _interopRequireDefault(__webpack_require__("MSzE"));

var styles = function styles(theme) {
  return {
    menu: (0, _defineProperty2.default)({
      width: "100%",
      maxWidth: theme.spacing(45),
      background: (0, _colorManipulator.lighten)(theme.palette.background.paper, 0.1),
      "& svg": {
        color: [theme.palette.text.primary, "!important"]
      }
    }, theme.breakpoints.down("xs"), {
      width: "90%",
      maxWidth: "90%"
    })
  };
};

exports.styles = styles;

var Locales =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Locales, _React$Component);

  function Locales() {
    (0, _classCallCheck2.default)(this, Locales);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Locales).apply(this, arguments));
  }

  (0, _createClass2.default)(Locales, [{
    key: "handleLocaleSwitch",
    value: function handleLocaleSwitch(locale) {
      this.props.onClose();
      this.props.onSetCookie("locale", locale);
      this.props.onSetLocale(locale);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_Menu.default, {
        classes: {
          paper: this.props.classes.menu
        },
        anchorEl: this.props.anchor,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        open: !!this.props.anchor,
        onClose: this.props.onClose
      }, _.map(_locales.default.locales, function (locale) {
        return _react.default.createElement(_MenuItem.default, {
          key: "locale-".concat(locale),
          onClick: function onClick() {
            return _this.handleLocaleSwitch(locale);
          }
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_reactFlags.default, {
          name: _locales.default.flags[locale],
          format: "png",
          pngSize: 24,
          basePath: "/static/img/flags"
        })), _react.default.createElement(_ListItemText.default, null, _locales.default.names[locale]));
      }));
    }
  }]);
  return Locales;
}(_react.default.Component);

var _default = Locales;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

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

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "RByD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase32;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base32 = /^[A-Z2-7]+=*$/;

function isBase32(str) {
  (0, _assertString.default)(str);
  var len = str.length;

  if (len > 0 && len % 8 === 0 && base32.test(str)) {
    return true;
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "RGyf":
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),

/***/ "RWau":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

function _default(str) {
  (0, _assertString.default)(str);
  if (!str.includes(',')) return false;
  var pair = str.split(',');
  return lat.test(pair[0]) && long.test(pair[1]);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "Rkej":
/***/ (function(module, exports) {



/***/ }),

/***/ "STjA":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("aput");
var $getOwnPropertyDescriptor = __webpack_require__("Ym6j").f;

__webpack_require__("wWUK")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "ShHm":
/***/ (function(module, exports) {

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

/***/ "Sozg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function blacklist(str, chars) {
  (0, _assertString.default)(str);
  return str.replace(new RegExp("[".concat(chars, "]+"), 'g'), '');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r36L");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("pDh1");

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

/***/ "UM4E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _blacklist = _interopRequireDefault(__webpack_require__("Sozg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist.default)(str, chars);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "UOkd":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("cQhG") });


/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ge64");

/***/ }),

/***/ "UjK5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString.default)(str);
  return hexadecimal.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "V/f9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("k8Q4");
__webpack_require__("YQlv");
module.exports = __webpack_require__("p9MR").Array.from;


/***/ }),

/***/ "VBpv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("Bjmp");

var _Header = _interopRequireWildcard(__webpack_require__("H7v7"));

var Header = (0, _styles.withStyles)(_Header.styles)(_Header.default);
var _default = Header;
exports.default = _default;

/***/ }),

/***/ "VOgL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthModalOpen = exports.isStaticSite = exports.isConnected = exports.isStopped = exports.isStarted = exports.getMapboxToken = exports.getTheme = exports.getLocale = exports.getWsServer = exports.getApiServer = exports.getAppServer = exports.getStatusCode = exports.getCreated = void 0;

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

var getMapboxToken = function getMapboxToken(state) {
  return state.getIn(["app", "mapboxToken"]);
};

exports.getMapboxToken = getMapboxToken;

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

/***/ "VgtN":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("vCXk");
var call = __webpack_require__("nJOo");
var isArrayIter = __webpack_require__("widk");
var anObject = __webpack_require__("D4ny");
var toLength = __webpack_require__("pasi");
var getIterFn = __webpack_require__("8Vlj");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "Vl3p":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("aput");
var gOPN = __webpack_require__("2HZK").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "Vphk":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0lY0");
module.exports = __webpack_require__("p9MR").Object.getOwnPropertySymbols;


/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "W1+3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("tFdt");
var global = __webpack_require__("2jw7");
var ctx = __webpack_require__("vCXk");
var classof = __webpack_require__("fYqa");
var $export = __webpack_require__("0T/a");
var isObject = __webpack_require__("b4pn");
var aFunction = __webpack_require__("8v5W");
var anInstance = __webpack_require__("sLxe");
var forOf = __webpack_require__("VgtN");
var speciesConstructor = __webpack_require__("MC82");
var task = __webpack_require__("3wqb").set;
var microtask = __webpack_require__("NtxZ")();
var newPromiseCapabilityModule = __webpack_require__("A8op");
var perform = __webpack_require__("dcnA");
var userAgent = __webpack_require__("ihIJ");
var promiseResolve = __webpack_require__("3s9C");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("G1Wo")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("OQSD")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("wNhr")($Promise, PROMISE);
__webpack_require__("G+Sp")(PROMISE);
Wrapper = __webpack_require__("p9MR")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("Q2zc")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "WQhj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
  (0, _assertString.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "WSfB":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("k8Q4");
__webpack_require__("tCzM");
module.exports = __webpack_require__("/aHj").f('iterator');


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

/***/ "WkEw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

function isDataURI(str) {
  (0, _assertString.default)(str);
  var data = str.split(',');

  if (data.length < 2) {
    return false;
  }

  var attributes = data.shift().trim().split(';');
  var schemeAndMediaType = attributes.shift();

  if (schemeAndMediaType.substr(0, 5) !== 'data:') {
    return false;
  }

  var mediaType = schemeAndMediaType.substr(5);

  if (mediaType !== '' && !validMediaType.test(mediaType)) {
    return false;
  }

  for (var i = 0; i < attributes.length; i++) {
    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {// ok
    } else if (!validAttribute.test(attributes[i])) {
      return false;
    }
  }

  for (var _i = 0; _i < data.length; _i++) {
    if (!validData.test(data[_i])) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "Wl3u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPort;

var _isInt = _interopRequireDefault(__webpack_require__("yboX"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPort(str) {
  return (0, _isInt.default)(str, {
    min: 0,
    max: 65535
  });
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "X1ix":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

function isHexColor(str) {
  (0, _assertString.default)(str);
  return hexcolor.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "XIVt":
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

var _reactIntl = __webpack_require__("k004");

var _colorManipulator = __webpack_require__("oOPP");

var _Menu = _interopRequireDefault(__webpack_require__("GYHf"));

var _MenuItem = _interopRequireDefault(__webpack_require__("x54t"));

var _ListItemText = _interopRequireDefault(__webpack_require__("W+03"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__("GLYF"));

var _ColorLens = _interopRequireDefault(__webpack_require__("HaHp"));

var _themes = _interopRequireDefault(__webpack_require__("3qfz"));

var styles = function styles(theme) {
  return {
    menu: (0, _defineProperty2.default)({
      width: "100%",
      maxWidth: theme.spacing(45),
      background: (0, _colorManipulator.lighten)(theme.palette.background.paper, 0.1),
      "& svg": {
        color: [theme.palette.text.primary, "!important"]
      }
    }, theme.breakpoints.down("xs"), {
      width: "90%",
      maxWidth: "90%"
    })
  };
};

exports.styles = styles;

var Themes =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Themes, _React$Component);

  function Themes() {
    (0, _classCallCheck2.default)(this, Themes);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Themes).apply(this, arguments));
  }

  (0, _createClass2.default)(Themes, [{
    key: "handleThemeSwitch",
    value: function handleThemeSwitch(theme) {
      this.props.onClose();
      this.props.onSetCookie("theme", theme);
      this.props.onSetTheme(theme);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_Menu.default, {
        classes: {
          paper: this.props.classes.menu
        },
        anchorEl: this.props.anchor,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        open: !!this.props.anchor,
        onClose: this.props.onClose
      }, _.map(_themes.default.names, function (theme) {
        return _react.default.createElement(_MenuItem.default, {
          key: "theme-".concat(theme),
          onClick: function onClick() {
            return _this.handleThemeSwitch(theme);
          }
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_ColorLens.default, null)), _react.default.createElement(_ListItemText.default, null, _react.default.createElement(_reactIntl.FormattedMessage, {
          id: "THEME_" + _.upperCase(theme) + "_LABEL"
        })));
      }));
    }
  }]);
  return Themes;
}(_react.default.Component);

var _default = Themes;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "XOdh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("cQhG");
var descriptor = __webpack_require__("+EWW");
var setToStringTag = __webpack_require__("wNhr");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("jOCL")(IteratorPrototype, __webpack_require__("G1Wo")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WSfB");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CpH4");

/***/ }),

/***/ "XY+j":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("d3Kl")('keys');
var uid = __webpack_require__("ewAR");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "XgGr":
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

var _styles = __webpack_require__("Bjmp");

var _Sidebar = _interopRequireWildcard(__webpack_require__("BfLe"));

var _state = __webpack_require__("XiiD");

var mapStateToProps = function mapStateToProps(state) {
  return {
    apiServer: _state.appSelectors.getApiServer(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLoginClick: function onLoginClick() {
      return dispatch(_state.appOperations.showAuthModal());
    }
  };
};

var Sidebar = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _router.withRouter)((0, _styles.withStyles)(_Sidebar.styles)((0, _reactIntl.injectIntl)(_Sidebar.default))));
var _default = Sidebar;
exports.default = _default;

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

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YQlv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("vCXk");
var $export = __webpack_require__("0T/a");
var toObject = __webpack_require__("AYVP");
var call = __webpack_require__("nJOo");
var isArrayIter = __webpack_require__("widk");
var toLength = __webpack_require__("pasi");
var createProperty = __webpack_require__("s+zB");
var getIterFn = __webpack_require__("8Vlj");

$export($export.S + $export.F * !__webpack_require__("Q2zc")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "YXwE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function tokenize(str, esc, sep) {
  const result = [];
  let tmp = "";
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
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

/***/ "Ym6j":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("1077");
var createDesc = __webpack_require__("+EWW");
var toIObject = __webpack_require__("aput");
var toPrimitive = __webpack_require__("LqFA");
var has = __webpack_require__("Q8jq");
var IE8_DOM_DEFINE = __webpack_require__("pH/F");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("fZVS") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "YndH":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ewAR")('meta');
var isObject = __webpack_require__("b4pn");
var has = __webpack_require__("Q8jq");
var setDesc = __webpack_require__("OtwA").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("14Ie")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


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

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sli4");

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

/***/ "ZJRo":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("b4pn");
var anObject = __webpack_require__("D4ny");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("vCXk")(Function.call, __webpack_require__("Ym6j").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "ZNca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFullWidth;
exports.fullWidth = void 0;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.fullWidth = fullWidth;

function isFullWidth(str) {
  (0, _assertString.default)(str);
  return fullWidth.test(str);
}

/***/ }),

/***/ "ZPM+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commaDecimal = exports.dotDecimal = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
var alpha = {
  'en-US': /^[A-Z]+$/i,
  'bg-BG': /^[А-Я]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'el-GR': /^[Α-ω]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'nb-NO': /^[A-ZÆØÅ]+$/i,
  'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[A-ZÆØÅ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,
  'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[A-ZÅÄÖ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};
exports.alpha = alpha;
var alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'bg-BG': /^[0-9А-Я]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]+$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'el-GR': /^[0-9Α-ω]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
  'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,
  'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};
exports.alphanumeric = alphanumeric;
var decimal = {
  'en-US': '.',
  ar: '٫'
};
exports.decimal = decimal;
var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];
exports.englishLocales = englishLocales;

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = "en-".concat(englishLocales[i]);
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
  decimal[locale] = decimal['en-US'];
} // Source: http://www.localeplanet.com/java/


var arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];
exports.arabicLocales = arabicLocales;

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = "ar-".concat(arabicLocales[_i]);
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
  decimal[_locale] = decimal.ar;
} // Source: https://en.wikipedia.org/wiki/Decimal_mark


var dotDecimal = [];
exports.dotDecimal = dotDecimal;
var commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'es-ES', 'fr-FR', 'it-IT', 'ku-IQ', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];
exports.commaDecimal = commaDecimal;

for (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {
  decimal[dotDecimal[_i2]] = decimal['en-US'];
}

for (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {
  decimal[commaDecimal[_i3]] = ',';
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
decimal['pt-BR'] = decimal['pt-PT']; // see #862

alpha['pl-Pl'] = alpha['pl-PL'];
alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
decimal['pl-Pl'] = decimal['pl-PL'];

/***/ }),

/***/ "ZRkS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJWT;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;

function isJWT(str) {
  (0, _assertString.default)(str);
  return jwt.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

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

/***/ "ZhsM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLength;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "aN8n":
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

var _theme = _interopRequireDefault(__webpack_require__("3AO0"));

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

/***/ "aput":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("i6sE");
var defined = __webpack_require__("5foh");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "b4pn":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "bMah":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _merge = _interopRequireDefault(__webpack_require__("ARk6"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,
  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,
  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,
  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,
  // The following conversions are specific to Yandex
  // Lowercases the local part of the Yandex address (known to be case-insensitive)
  yandex_lowercase: true,
  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
}; // List of domains used by iCloud

var icloud_domains = ['icloud.com', 'me.com']; // List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/

var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com']; // List of domains used by Yahoo Mail
// This list is likely incomplete

var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com']; // List of domains used by yandex.ru

var yandex_domains = ['yandex.ru', 'yandex.ua', 'yandex.kz', 'yandex.com', 'yandex.by', 'ya.ru']; // replace single dots, but not multiple consecutive dots

function dotsReplacer(match) {
  if (match.length > 1) {
    return match;
  }

  return '';
}

function normalizeEmail(email, options) {
  options = (0, _merge.default)(options, default_normalize_email_options);
  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain]; // The domain is always lowercased, as it's case-insensitive per RFC 1035

  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (options.gmail_remove_dots) {
      // this does not replace consecutive dots like example..email@gmail.com
      parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }

    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (icloud_domains.indexOf(parts[1]) >= 0) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }

    if (!parts[0].length) {
      return false;
    }

    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yandex_domains.indexOf(parts[1]) >= 0) {
    if (options.all_lowercase || options.yandex_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }

    parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preffered
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }

  return parts.join('@');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "bh8V":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "brtW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("Bjmp");

var _ErrorMessage = _interopRequireWildcard(__webpack_require__("liMu"));

var _state = __webpack_require__("XiiD");

var mapDispathToProps = function mapDispathToProps(dispatch) {
  return {
    onSignIn: function onSignIn() {
      return dispatch(_state.appOperations.showAuthModal());
    }
  };
};

var ErrorMessage = (0, _reactRedux.connect)(null, mapDispathToProps)((0, _styles.withStyles)(_ErrorMessage.styles)((0, _reactIntl.injectIntl)(_ErrorMessage.default)));
var _default = ErrorMessage;
exports.default = _default;

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "c4tK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var allCountries = [
       [
          'Afghanistan (‫افغانستان‬‎)',
          'af',
          '93',
          '+..-..-...-....'
       ],
       [
          'Åland Islands',
          'ax',
          '358',
          ''
       ],       
       [
          'Albania (Shqipëri)',
          'al',
          '355',
          '+...(...)...-...'
       ],
       [
          'Algeria (‫الجزائر‬‎)',
          'dz',
          '213',
          '+...-..-...-....'
       ],
       [
          'American Samoa',
          'as',
          '1684',
          '+.(...)...-....'
       ],
       [
          'Andorra',
          'ad',
          '376',
          '+...-...-...'
       ],
       [
          'Angola',
          'ao',
          '244',
          '+...(...)...-...'
       ],
       [
          'Anguilla',
          'ai',
          '1264',
          '+.(...)...-....'
       ],
       [
          'Antarctica',
          'aq',
          '672',
          ''
       ],
       [
          'Antigua and Barbuda',
          'ag',
          '1268',
          '+.(...)...-....'
       ],
       [
          'Argentina',
          'ar',
          '54',
          '+..(...)...-....'
       ],
       [
          'Armenia (Հայաստան)',
          'am',
          '374',
          '+...-..-...-...'
       ],
       [
          'Aruba',
          'aw',
          '297',
          '+...-...-....'
       ],
       [
          'Australia',
          'au',
          '61',
          '+.. ... ... ...'
       ],
       [
          'Austria (Österreich)',
          'at',
          '43',
          '+..(...)...-....'
       ],
       [
          'Azerbaijan (Azərbaycan)',
          'az',
          '994',
          '+...-..-...-..-..'
       ],
       [
          'Bahamas',
          'bs',
          '1242',
          '+.(...)...-....'
       ],
       [
          'Bahrain (‫البحرين‬‎)',
          'bh',
          '973',
          '+...-....-....'
       ],
       [
          'Bangladesh (বাংলাদেশ)',
          'bd',
          '880',
          '+...-..-...-...'
       ],
       [
          'Barbados',
          'bb',
          '1246',
          '+.(...)...-....'
       ],
       [
          'Belarus (Беларусь)',
          'by',
          '375',
          '+...(..)...-..-..'
       ],
       [
          'Belgium (België)',
          'be',
          '32',
          '+.. ... .. .. ..'
       ],
       [
          'Belize',
          'bz',
          '501',
          '+...-...-....'
       ],
       [
          'Benin (Bénin)',
          'bj',
          '229',
          '+...-..-..-....'
       ],
       [
          'Bermuda',
          'bm',
          '1441',
          '+.(...)...-....'
       ],
       [
          'Bhutan (འབྲུག)',
          'bt',
          '975',
          '+...-.-...-...'
       ],
       [
          'Bolivia',
          'bo',
          '591',
          '+...-.-...-....'
       ],
       [
          'Bosnia and Herzegovina (Босна и Херцеговина)',
          'ba',
          '387',
          '+...-..-....'
       ],
       [
          'Botswana',
          'bw',
          '267',
          '+...-..-...-...'
       ],
       [
          'Bouvet Island',
          'bv',
          '47',
          ''
       ],
       [
          'Brazil (Brasil)',
          'br',
          '55',
          '+..-..-....-....'
       ],
       [
          'British Indian Ocean Territory',
          'io',
          '246',
          '+...-...-....'
       ],
       [
          'British Virgin Islands',
          'vg',
          '1284',
          '+.(...)...-....'
       ],
       [
          'Brunei',
          'bn',
          '673',
          '+...-...-....'
       ],
       [
          'Bulgaria (България)',
          'bg',
          '359',
          '+...(...)...-...'
       ],
       [
          'Burkina Faso',
          'bf',
          '226',
          '+...-..-..-....'
       ],
       [
          'Burundi (Uburundi)',
          'bi',
          '257',
          '+...-..-..-....'
       ],
       [
          'Cambodia (កម្ពុជា)',
          'kh',
          '855',
          '+...-..-...-...'
       ],
       [
          'Cameroon (Cameroun)',
          'cm',
          '237',
          '+...-....-....'
       ],
       [
          'Canada',
          'ca',
          '1',
          '+. (...) ...-....',
          1,
          [
             '204',
             '236',
             '249',
             '250',
             '289',
             '306',
             '343',
             '365',
             '387',
             '403',
             '416',
             '418',
             '431',
             '437',
             '438',
             '450',
             '506',
             '514',
             '519',
             '548',
             '579',
             '581',
             '587',
             '604',
             '613',
             '639',
             '647',
             '672',
             '705',
             '709',
             '742',
             '778',
             '780',
             '782',
             '807',
             '819',
             '825',
             '867',
             '873',
             '902',
             '905'
          ]
       ],
       [
          'Cape Verde (Kabu Verdi)',
          'cv',
          '238',
          '+...(...)..-..'
       ],
       [
          'Caribbean Netherlands',
          'bq',
          '599',
          '+...-...-....',
          1
       ],
       [
          'Cayman Islands',
          'ky',
          '1345',
          '+.(...)...-....'
       ],
       [
          'Central African Republic (République centrafricaine)',
          'cf',
          '236',
          '+...-..-..-....'
       ],
       [
          'Chad (Tchad)',
          'td',
          '235',
          '+...-..-..-..-..'
       ],
       [
          'Chile',
          'cl',
          '56',
          '+..-.-....-....'
       ],
       [
          'China (中国)',
          'cn',
          '86',
          '+.. ..-........'
       ],
       [
          'Christmas Island',
          'cx',
          '61',
          ''
       ],
       [
          'Cocos (Keeling) Islands',
          'cc',
          '61',
          ''
       ],
       [
          'Colombia',
          'co',
          '57',
          '+..(...)...-....'
       ],
       [
          'Comoros (‫جزر القمر‬‎)',
          'km',
          '269',
          '+...-..-.....'
       ],
       [
          'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
          'cd',
          '243',
          '+...(...)...-...'
       ],
       [
          'Congo (Republic) (Congo-Brazzaville)',
          'cg',
          '242',
          '+...-..-...-....'
       ],
       [
          'Cook Islands',
          'ck',
          '682',
          '+...-..-...'
       ],
       [
          'Costa Rica',
          'cr',
          '506',
          '+... ....-....'
       ],
       [
          'Côte d’Ivoire',
          'ci',
          '225',
          '+...-..-...-...'
       ],
       [
          'Croatia (Hrvatska)',
          'hr',
          '385',
          '+...-..-...-...'
       ],
       [
          'Cuba',
          'cu',
          '53',
          '+..-.-...-....'
       ],
       [
          'Curaçao',
          'cw',
          '599',
          '+...-...-....',
          0
       ],
       [
          'Cyprus (Κύπρος)',
          'cy',
          '357',
          '+...-..-...-...'
       ],
       [
          'Czech Republic (Česká republika)',
          'cz',
          '420',
          '+...(...)...-...'
       ],
       [
          'Denmark (Danmark)',
          'dk',
          '45',
          '+.. .. .. .. ..'
       ],
       [
          'Djibouti',
          'dj',
          '253',
          '+...-..-..-..-..'
       ],
       [
          'Dominica',
          'dm',
          '1767',
          '+.(...)...-....'
       ],
       [
          'Dominican Republic (República Dominicana)',
          'do',
          '1',
          '+.(...)...-....',
          2,
          [
             '809',
             '829',
             '849'
          ]
       ],
       [
          'Ecuador',
          'ec',
          '593',
          '+...-.-...-....'
       ],
       [
          'Egypt (‫مصر‬‎)',
          'eg',
          '20',
          '+..(...)...-....'
       ],
       [
          'El Salvador',
          'sv',
          '503',
          '+... ....-....'
       ],
       [
          'Equatorial Guinea (Guinea Ecuatorial)',
          'gq',
          '240',
          '+...-..-...-....'
       ],
       [
          'Eritrea',
          'er',
          '291',
          '+...-.-...-...'
       ],
       [
          'Estonia (Eesti)',
          'ee',
          '372',
          '+...-...-....'
       ],
       [
          'Ethiopia',
          'et',
          '251',
          '+...-..-...-....'
       ],
       [
          'Falkland Islands (Islas Malvinas)',
          'fk',
          '500',
          '+...-.....'
       ],
       [
          'Faroe Islands (Føroyar)',
          'fo',
          '298',
          '+...-...-...'
       ],
       [
          'Fiji',
          'fj',
          '679',
          '+...-..-.....'
       ],
       [
          'Finland (Suomi)',
          'fi',
          '358',
          '+... .. .... ....'
       ],
       [
          'France',
          'fr',
          '33',
          '+.. . .. .. .. ..'
       ],
       [
          'French Guiana (Guyane française)',
          'gf',
          '594',
          '+...-.....-....'
       ],
       [
          'French Polynesia (Polynésie française)',
          'pf',
          '689',
          '+...-..-..-..'
       ],
       [
          'French Southern and Antarctic Lands',
          'tf',
          '262',
          ''
       ],
       [
          'Gabon',
          'ga',
          '241',
          '+...-.-..-..-..'
       ],
       [
          'Gambia',
          'gm',
          '220',
          '+...(...)..-..'
       ],
       [
          'Georgia (საქართველო)',
          'ge',
          '995',
          '+...(...)...-...'
       ],
       [
          'Germany (Deutschland)',
          'de',
          '49',
          '+.. ... .......'
       ],
       [
          'Ghana (Gaana)',
          'gh',
          '233',
          '+...(...)...-...'
       ],
       [
          'Gibraltar',
          'gi',
          '350',
          '+...-...-.....'
       ],
       [
          'Greece (Ελλάδα)',
          'gr',
          '30',
          '+..(...)...-....'
       ],
       [
          'Greenland (Kalaallit Nunaat)',
          'gl',
          '299',
          '+...-..-..-..'
       ],
       [
          'Grenada',
          'gd',
          '1473',
          '+.(...)...-....'
       ],
       [
          'Guadeloupe',
          'gp',
          '590',
          '',
          0
       ],
       [
          'Guam',
          'gu',
          '1671',
          '+.(...)...-....'
       ],
       [
          'Guatemala',
          'gt',
          '502',
          '+... ....-....'
       ],
       [
          'Guernsey',
          'gg',
          '44',
          ''
       ],
       [
          'Guinea (Guinée)',
          'gn',
          '224',
          '+...-..-...-...'
       ],
       [
          'Guinea-Bissau (Guiné Bissau)',
          'gw',
          '245',
          '+...-.-......'
       ],
       [
          'Guyana',
          'gy',
          '592',
          '+...-...-....'
       ],
       [
          'Haiti',
          'ht',
          '509',
          '+... ....-....'
       ],
       [
          'Heard Island and McDonald Islands',
          'hm',
          '672',
          ''
       ],       
       [
          'Honduras',
          'hn',
          '504',
          '+...-....-....'
       ],
       [
          'Hong Kong (香港)',
          'hk',
          '852',
          '+... .... ....'
       ],
       [
          'Hungary (Magyarország)',
          'hu',
          '36',
          '+..(...)...-...'
       ],
       [
          'Iceland (Ísland)',
          'is',
          '354',
          '+... ... ....'
       ],
       [
          'India (भारत)',
          'in',
          '91',
          '+.. .....-.....'
       ],
       [
          'Indonesia',
          'id',
          '62',
          '+..-..-...-..'
       ],
       [
          'Iran (‫ایران‬‎)',
          'ir',
          '98',
          '+..(...)...-....'
       ],
       [
          'Iraq (‫العراق‬‎)',
          'iq',
          '964',
          '+...(...)...-....'
       ],
       [
          'Ireland',
          'ie',
          '353',
          '+... .. .......'
       ],
       [
          'Isle of Man',
          'im',
          '44',
          ''
       ],
       [
          'Israel (‫ישראל‬‎)',
          'il',
          '972',
          '+...-.-...-....'
       ],
       [
          'Italy (Italia)',
          'it',
          '39',
          '+.. ... ......',
          0
       ],
       [
          'Jamaica',
          'jm',
          '1876',
          '+.(...)...-....'
       ],
       [
          'Japan (日本)',
          'jp',
          '81',
          '+.. ... .. ....'
       ],
       [
          'Jersey',
          'je',
          '44',
          ''
       ],
       [
          'Jordan (‫الأردن‬‎)',
          'jo',
          '962',
          '+...-.-....-....'
       ],
       [
          'Kazakhstan (Казахстан)',
          'kz',
          '7',
          '+. ... ...-..-..',
          1
       ],
       [
          'Kenya',
          'ke',
          '254',
          '+...-...-......'
       ],
       [
          'Kiribati',
          'ki',
          '686',
          '+...-..-...'
       ],
       [
          'Kosovo',
          'xk',
          '383',
          ''
       ],
       [
          'Kuwait (‫الكويت‬‎)',
          'kw',
          '965',
          '+...-....-....'
       ],
       [
          'Kyrgyzstan (Кыргызстан)',
          'kg',
          '996',
          '+...(...)...-...'
       ],
       [
          'Laos (ລາວ)',
          'la',
          '856',
          '+...-..-...-...'
       ],
       [
          'Latvia (Latvija)',
          'lv',
          '371',
          '+...-..-...-...'
       ],
       [
          'Lebanon (‫لبنان‬‎)',
          'lb',
          '961',
          '+...-.-...-...'
       ],
       [
          'Lesotho',
          'ls',
          '266',
          '+...-.-...-....'
       ],
       [
          'Liberia',
          'lr',
          '231',
          '+...-..-...-...'
       ],
       [
          'Libya (‫ليبيا‬‎)',
          'ly',
          '218',
          '+...-..-...-...'
       ],
       [
          'Liechtenstein',
          'li',
          '423',
          '+...(...)...-....'
       ],
       [
          'Lithuania (Lietuva)',
          'lt',
          '370',
          '+...(...)..-...'
       ],
       [
          'Luxembourg',
          'lu',
          '352',
          '+...(...)...-...'
       ],
       [
          'Macau (澳門)',
          'mo',
          '853',
          '+...-....-....'
       ],
       [
          'Macedonia (FYROM) (Македонија)',
          'mk',
          '389',
          '+...-..-...-...'
       ],
       [
          'Madagascar (Madagasikara)',
          'mg',
          '261',
          '+...-..-..-.....'
       ],
       [
          'Malawi',
          'mw',
          '265',
          '+...-.-....-....'
       ],
       [
          'Malaysia',
          'my',
          '60',
          '+.. ..-....-....'
       ],
       [
          'Maldives',
          'mv',
          '960',
          '+...-...-....'
       ],
       [
          'Mali',
          'ml',
          '223',
          '+...-..-..-....'
       ],
       [
          'Malta',
          'mt',
          '356',
          '+...-....-....'
       ],
       [
          'Marshall Islands',
          'mh',
          '692',
          '+...-...-....'
       ],
       [
          'Martinique',
          'mq',
          '596',
          '+...(...)..-..-..'
       ],
       [
          'Mauritania (‫موريتانيا‬‎)',
          'mr',
          '222',
          '+...-..-..-....'
       ],
       [
          'Mauritius (Moris)',
          'mu',
          '230',
          '+...-...-....'
       ],
       [
          'Mayotte',
          'yt',
          '262',
          ''
       ],
       [
          'Mexico (México)',
          'mx',
          '52',
          '+..-..-..-....'
       ],
       [
          'Micronesia',
          'fm',
          '691',
          '+...-...-....'
       ],
       [
          'Moldova (Republica Moldova)',
          'md',
          '373',
          '+...-....-....'
       ],
       [
          'Monaco',
          'mc',
          '377',
          '+...-..-...-...'
       ],
       [
          'Mongolia (Монгол)',
          'mn',
          '976',
          '+...-..-..-....'
       ],
       [
          'Montenegro (Crna Gora)',
          'me',
          '382',
          '+...-..-...-...'
       ],
       [
          'Montserrat',
          'ms',
          '1664',
          '+.(...)...-....'
       ],
       [
          'Morocco (‫المغرب‬‎)',
          'ma',
          '212',
          '+...-..-....-...'
       ],
       [
          'Mozambique (Moçambique)',
          'mz',
          '258',
          '+...-..-...-...'
       ],
       [
          'Myanmar (Burma) (မြန်မာ)',
          'mm',
          '95',
          '+..-...-...'
       ],
       [
          'Namibia (Namibië)',
          'na',
          '264',
          '+...-..-...-....'
       ],
       [
          'Nauru',
          'nr',
          '674',
          '+...-...-....'
       ],
       [
          'Nepal (नेपाल)',
          'np',
          '977',
          '+...-..-...-...'
       ],
       [
          'Netherlands (Nederland)',
          'nl',
          '31',
          '+.. .. ........'
       ],
       [
          'New Caledonia (Nouvelle-Calédonie)',
          'nc',
          '687',
          '+...-..-....'
       ],
       [
          'New Zealand',
          'nz',
          '64',
          '+.. ...-...-....'
       ],
       [
          'Nicaragua',
          'ni',
          '505',
          '+...-....-....'
       ],
       [
          'Niger (Nijar)',
          'ne',
          '227',
          '+...-..-..-....'
       ],
       [
          'Nigeria',
          'ng',
          '234',
          '+...-..-...-..'
       ],
       [
          'Niue',
          'nu',
          '683',
          '+...-....'
       ],
       [
          'Norfolk Island',
          'nf',
          '672',
          '+...-...-...'
       ],
       [
          'North Korea (조선 민주주의 인민 공화국)',
          'kp',
          '850',
          '+...-...-...'
       ],
       [
          'Northern Mariana Islands',
          'mp',
          '1670',
          '+.(...)...-....'
       ],
       [
          'Norway (Norge)',
          'no',
          '47',
          '+.. ... .. ...'
       ],
       [
          'Oman (‫عُمان‬‎)',
          'om',
          '968',
          '+...-..-...-...'
       ],
       [
          'Pakistan (‫پاکستان‬‎)',
          'pk',
          '92',
          '+.. ...-.......'
       ],
       [
          'Palau',
          'pw',
          '680',
          '+...-...-....'
       ],
       [
          'Palestine (‫فلسطين‬‎)',
          'ps',
          '970',
          '+...-..-...-....'
       ],
       [
          'Panama (Panamá)',
          'pa',
          '507',
          '+...-...-....'
       ],
       [
          'Papua New Guinea',
          'pg',
          '675',
          '+...(...)..-...'
       ],
       [
          'Paraguay',
          'py',
          '595',
          '+...(...)...-...'
       ],
       [
          'Peru (Perú)',
          'pe',
          '51',
          '+..(...)...-...'
       ],
       [
          'Philippines',
          'ph',
          '63',
          '+.. ... ....'
       ],
       [
          'Pitcairn Islands',
          'pn',
          '64',
          ''
       ],
       [
          'Poland (Polska)',
          'pl',
          '48',
          '+.. ...-...-...'
       ],
       [
          'Portugal',
          'pt',
          '351',
          '+...-..-...-....'
       ],
       [
          'Puerto Rico',
          'pr',
          '1',
          '+. (...) ...-....',
          3,
          [
             '787',
             '939'
          ]
       ],
       [
          'Qatar (‫قطر‬‎)',
          'qa',
          '974',
          '+...-....-....'
       ],
       [
          'Réunion (La Réunion)',
          're',
          '262',
          '+...-.....-....'
       ],
       [
          'Romania (România)',
          'ro',
          '40',
          '+..-..-...-....'
       ],
       [
          'Russia (Россия)',
          'ru',
          '7',
          '+. ... ...-..-..',
          0
       ],
       [
          'Rwanda',
          'rw',
          '250',
          '+...(...)...-...'
       ],
       [
          'Saint Barthélemy (Saint-Barthélemy)',
          'bl',
          '590',
          '',
          1
       ],
       [
          'Saint Helena',
          'sh',
          '290'
       ],
       [
          'Saint Kitts and Nevis',
          'kn',
          '1869',
          '+.(...)...-....'
       ],
       [
          'Saint Lucia',
          'lc',
          '1758',
          '+.(...)...-....'
       ],
       [
          'Saint Martin (Saint-Martin (partie française))',
          'mf',
          '590',
          '',
          2
       ],
       [
          'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
          'pm',
          '508'
       ],
       [
          'Saint Vincent and the Grenadines',
          'vc',
          '1784',
          '+.(...)...-....'
       ],
       [
          'Samoa',
          'ws',
          '685',
          '+...-..-....'
       ],
       [
          'San Marino',
          'sm',
          '378',
          '+...-....-......'
       ],
       [
          'São Tomé and Príncipe (São Tomé e Príncipe)',
          'st',
          '239',
          '+...-..-.....'
       ],
       [
          'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
          'sa',
          '966',
          '+...-.-...-....'
       ],
       [
          'Senegal (Sénégal)',
          'sn',
          '221',
          '+...-..-...-....'
       ],
       [
          'Serbia (Србија)',
          'rs',
          '381',
          '+...-..-...-....'
       ],
       [
          'Seychelles',
          'sc',
          '248',
          '+...-.-...-...'
       ],
       [
          'Sierra Leone',
          'sl',
          '232',
          '+...-..-......'
       ],
       [
          'Singapore',
          'sg',
          '65',
          '+.. ....-....'
       ],
       [
          'Sint Maarten',
          'sx',
          '1721',
          '+.(...)...-....'
       ],
       [
          'Slovakia (Slovensko)',
          'sk',
          '421',
          '+...(...)...-...'
       ],
       [
          'Slovenia (Slovenija)',
          'si',
          '386',
          '+...-..-...-...'
       ],
       [
          'Solomon Islands',
          'sb',
          '677',
          '+...-.....'
       ],
       [
          'Somalia (Soomaaliya)',
          'so',
          '252',
          '+...-.-...-...'
       ],
       [
          'South Africa',
          'za',
          '27',
          '+..-..-...-....'
       ],
       [
          'South Georgia and the South Sandwich Islands',
          'gs',
          '500',
          ''
       ],
       [
          'South Korea (대한민국)',
          'kr',
          '82',
          '+..-..-...-....'
       ],
       [
          'South Sudan (‫جنوب السودان‬‎)',
          'ss',
          '211',
          '+...-..-...-....'
       ],
       [
          'Spain (España)',
          'es',
          '34',
          '+.. ... ... ...'
       ],
       [
          'Sri Lanka (ශ්‍රී ලංකාව)',
          'lk',
          '94',
          '+..-..-...-....'
       ],
       [
          'Sudan (‫السودان‬‎)',
          'sd',
          '249',
          '+...-..-...-....'
       ],
       [
          'Suriname',
          'sr',
          '597',
          '+...-...-...'
       ],
       [
          'Svalbard and Jan Mayen',
          'sj',
          '47',
          ''
       ],
       [
          'Swaziland',
          'sz',
          '268',
          '+...-..-..-....'
       ],
       [
          'Sweden (Sverige)',
          'se',
          '46',
          '+.. .. ... .. ..'
       ],
       [
          'Switzerland (Schweiz)',
          'ch',
          '41',
          '+.. .. ... .. ..'
       ],
       [
          'Syria (‫سوريا‬‎)',
          'sy',
          '963',
          '+...-..-....-...'
       ],
       [
          'Taiwan (台灣)',
          'tw',
          '886',
          '+...-....-....'
       ],
       [
          'Tajikistan',
          'tj',
          '992',
          '+...-..-...-....'
       ],
       [
          'Tanzania',
          'tz',
          '255',
          '+...-..-...-....'
       ],
       [
          'Thailand (ไทย)',
          'th',
          '66',
          '+..-..-...-...'
       ],
       [
          'Timor-Leste',
          'tl',
          '670',
          '+...-...-....'
       ],
       [
          'Togo',
          'tg',
          '228',
          '+...-..-...-...'
       ],
       [
          'Tokelau',
          'tk',
          '690',
          '+...-....'
       ],
       [
          'Tonga',
          'to',
          '676',
          '+...-.....'
       ],
       [
          'Trinidad and Tobago',
          'tt',
          '1868',
          '+.(...)...-....'
       ],
       [
          'Tunisia (‫تونس‬‎)',
          'tn',
          '216',
          '+...-..-...-...'
       ],
       [
          'Turkey (Türkiye)',
          'tr',
          '90',
          '+.. ... ... .. ..'
       ],
       [
          'Turkmenistan',
          'tm',
          '993',
          '+...-.-...-....'
       ],
       [
          'Turks and Caicos Islands',
          'tc',
          '1649',
          '+.(...)...-....'
       ],
       [
          'Tuvalu',
          'tv',
          '688',
          '+...-.....'
       ],
       [
          'U.S. Virgin Islands',
          'vi',
          '1340',
          '+.(...)...-....'
       ],
       [
          'Uganda',
          'ug',
          '256',
          '+...(...)...-...'
       ],
       [
          'Ukraine (Україна)',
          'ua',
          '380',
          '+...(..)...-..-..'
       ],
       [
          'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
          'ae',
          '971',
          '+...-.-...-....'
       ],
       [
          'United Kingdom',
          'gb',
          '44',
          '+.. .... ......'
       ],
       [
          'United States',
          'us',
          '1',
          '+. (...) ...-....',
          0
       ],
       [
          'United States Minor Outlying Islands',
          'um',
          '1',
          ''
       ],
       [
          'Uruguay',
          'uy',
          '598',
          '+...-.-...-..-..'
       ],
       [
          'Uzbekistan (Oʻzbekiston)',
          'uz',
          '998',
          '+...-..-...-....'
       ],
       [
          'Vanuatu',
          'vu',
          '678',
          '+...-.....'
       ],
       [
          'Vatican City (Città del Vaticano)',
          'va',
          '39',
          '+.. .. .... ....',
          1
       ],
       [
          'Venezuela',
          've',
          '58',
          '+..(...)...-....'
       ],
       [
          'Vietnam (Việt Nam)',
          'vn',
          '84',
          '+..-..-....-...'
       ],
       [
          'Wallis and Futuna',
          'wf',
          '681',
          '+...-..-....'
       ],
       [
          'Western Sahara',
          'eh',
          '212',
          '+...-..-....'
       ],
       [
          'Yemen (‫اليمن‬‎)',
          'ye',
          '967',
          '+...-.-...-...'
       ],
       [
          'Zambia',
          'zm',
          '260',
          '+...-..-...-....'
       ],
       [
          'Zimbabwe',
          'zw',
          '263',
          '+...-.-......'
       ]
   ];

// we will build this in the loop below
var allCountryCodes = {};
var iso2Lookup = {};
var addCountryCode = function (iso2, dialCode, priority) {
    if (!(dialCode in allCountryCodes)) {
        allCountryCodes[dialCode] = [];
    }
    var index = priority || 0;
    allCountryCodes[dialCode][index] = iso2;
};

for (var i = 0; i < allCountries.length; i++) {
   // countries
   var c = allCountries[i];
   allCountries[i] = {
       name: c[0],
       iso2: c[1],
       dialCode: c[2],
       priority: c[4] || 0
   };

   // format
   if (c[3]) {
       allCountries[i].format = c[3];
   }

   // area codes
   if (c[5]) {
       allCountries[i].hasAreaCodes = true;
       for (var j = 0; j < c[5].length; j++) {
           // full dial code is country code + dial code
           var dialCode = c[2] + c[5][j];
           addCountryCode(c[1], dialCode);
       }
   }
   iso2Lookup[allCountries[i].iso2] = i;

   // dial codes
   addCountryCode(c[1], c[2], c[4]);
}

module.exports = {
           allCountries: allCountries,
           iso2Lookup: iso2Lookup,
           allCountryCodes: allCountryCodes
       };


/***/ }),

/***/ "cBdl":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("hc2F");
module.exports = __webpack_require__("p9MR").Object.getPrototypeOf;


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cQhG":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("D4ny");
var dPs = __webpack_require__("9Wj7");
var enumBugKeys = __webpack_require__("ACkF");
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("Ev2A")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("EDr4").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "cSEY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRFC3339;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */
var dateFullYear = /[0-9]{4}/;
var dateMonth = /(0[1-9]|1[0-2])/;
var dateMDay = /([12]\d|0[1-9]|3[01])/;
var timeHour = /([01][0-9]|2[0-3])/;
var timeMinute = /[0-5][0-9]/;
var timeSecond = /([0-5][0-9]|60)/;
var timeSecFrac = /(\.[0-9]+)?/;
var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
var rfc3339 = new RegExp("".concat(fullDate.source, "[ tT]").concat(fullTime.source));

function isRFC3339(str) {
  (0, _assertString.default)(str);
  return rfc3339.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

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

/***/ "cz0s":
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

var _theme = _interopRequireDefault(__webpack_require__("3AO0"));

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

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("V/f9");

/***/ }),

/***/ "d3Kl":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("p9MR");
var global = __webpack_require__("2jw7");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("tFdt") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dcnA":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "djPm":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("JpU4");
var enumBugKeys = __webpack_require__("ACkF");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "dxCc":
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Dashboard","TITLE_DASHBOARD":"Dashboard","MENU_FORMS":"Forms","TITLE_FORMS":"Forms","MENU_CHARTS":"Charts","TITLE_CHARTS":"Charts","MENU_TABLES":"Tables","TITLE_TABLES":"Tables","MENU_MAPS":"Maps","TITLE_MAPS":"Maps","MENU_NOTIFICATIONS":"Notifications","TITLE_NOTIFICATIONS":"Notifications","MENU_TYPOGRAPHY":"Typography","TITLE_TYPOGRAPHY":"Typography","MENU_ICONS":"Icons","TITLE_ICONS":"Icons","MENU_USERS":"Users","TITLE_USERS":"Users","TITLE_PROFILE":"Profile","TITLE_VERIFY":"Email verification","TITLE_OAUTH_ERROR":"Authentication error","THEME_DARK_MENU":"Dark","THEME_DARK_LABEL":"Dark Theme","THEME_LIGHT_MENU":"Light","THEME_LIGHT_LABEL":"Light Theme","LAYOUT_UPDATE_READY_MESSAGE":"An update is available. Click here to reload the page.","LAYOUT_NOT_CONNECTED_MESSAGE":"Connecting...","SIDEBAR_LOGIN_BUTTON":"Sign Up / Login","SIDEBAR_GITHUB_LINK":"Github","SIDEBAR_BENCHMARKS_LINK":"Benchmarks","SIDEBAR_RESPONSIVENESS_LINK":"Responsiveness Test","HEADER_INBOX_LABEL":"Inbox","HEADER_PROFILE_LABEL":"Profile","HEADER_PROFILE_TOOLTIP":"As an anoymous user you don't have a profile.","PROFILE_NAME_LABEL":"Display name","PROFILE_EMAIL_LABEL":"Email","PROFILE_PASSWORD1_LABEL":"New password","PROFILE_PASSWORD2_LABEL":"Retype password","PROFILE_SAVE_BUTTON":"Save","PROFILE_DESTROY_BUTTON":"Self-destruct","PROFILE_VERIFY_BUTTON":"Verify Email","PROFILE_LINK_BUTTON":"Link","PROFILE_UNLINK_BUTTON":"Unlink","PROFILE_SAVE_SUCCESS":"Profile has been updated","PROFILE_VERIFY_SUCCESS":"Please check your mailbox for the verification email","PROFILE_LINK_SUCCESS":"Linking the service provider...","PROFILE_UNLINK_SUCCESS":"The service is no longer linked to your account","VERIFY_EMAIL_SUBJECT":"Next Dashboard - Verify your email","VERIFY_EMAIL_TEXT":"Use the link below to verify your email address:\n\n{url}\n\n","VERIFY_EMAIL_HTML":"<p>Use the link below to verify your email address:</p><p>{url}</p>","VERIFY_INTRO_MESSAGE":"Please use the button below to verify your email address","VERIFY_FAILED_MESSAGE":"This link is no longer valid","VERIFY_ACTION_BUTTON":"Verify Email","DELETE_PROFILE_TITLE":"Delete profile","DELETE_PROFILE_TEXT":"Are you sure you want to delete your profile?","DELETE_PROFILE_CANCEL":"Cancel","DELETE_PROFILE_SUBMIT":"Delete","OAUTH_ERROR_GENERIC":"An error occured","OAUTH_ERROR_ACCOUNT_EXISTS":"An account associated with your email address already exists","OAUTH_ERROR_ACCOUNT_EXISTS_TITLE1":"Why am I seeing this?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE1":["It looks like you might have already signed up using another service.\n","To protect your account, if you have perviously signed up using another service you must"," link accounts before you can use a different service to sign in."],"OAUTH_ERROR_ACCOUNT_EXISTS_TITLE2":"How do I fix this?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE2":["To sign in using another service, first sign in using your email address or the previous"," service then link accounts in your profile page."],"DASHBOARD_PROFIT_LABEL":"Profit","DASHBOARD_SALES_LABEL":"Sales","DASHBOARD_CLIENTS_LABEL":"Clients","DASHBOARD_AVG_TIME_LABEL":"Avg Time","DASHBOARD_CLICK_MAP_LABEL":"Click to select","DASHBOARD_US_SALES_LABEL":"US Sales","DASHBOARD_OTHER_LABEL":"Other","DEPT_PRODUCTION":"Production","DEPT_RD":"R&D","DEPT_PURCHASING":"Purchasing","DEPT_MARKETING":"Marketing","DEPT_HR":"HR","DEPT_ACCOUNTING":"Accounting","EMPLOYEES_MESSAGE_TITLE":"It's alive!","EMPLOYEES_MESSAGE_CONTENT":["This table is powered by GraphQL API and uses React Relay Modern. Try changing a value in another browser or tab and"," you will see it updated in all the browsers connected to this page thanks to GraphQL Subscriptions."],"EMPLOYEES_UID_COLUMN":"UID","EMPLOYEES_NAME_COLUMN":"Name","EMPLOYEES_DEPT_COLUMN":"Department","EMPLOYEES_TITLE_COLUMN":"Title","EMPLOYEES_COUNTRY_COLUMN":"Country","EMPLOYEES_SALARY_COLUMN":"Salary","EMPLOYEES_CREATE_BUTTON":"Create Employee","EMPLOYEES_EDIT_BUTTON":"Edit Employee","EMPLOYEES_DELETE_BUTTON":"Delete Employees","EDIT_EMPLOYEE_TITLE_CREATE":"Create employee","EDIT_EMPLOYEE_TITLE_EDIT":"Edit employee","EDIT_EMPLOYEE_UID_LABEL":"UID","EDIT_EMPLOYEE_UID_HINT":"Digits only","EDIT_EMPLOYEE_CHECKED_LABEL":"Enabled","EDIT_EMPLOYEE_NAME_LABEL":"Name","EDIT_EMPLOYEE_DEPT_LABEL":"Department","EDIT_EMPLOYEE_TITLE_LABEL":"Title","EDIT_EMPLOYEE_COUNTRY_LABEL":"Country","EDIT_EMPLOYEE_SALARY_LABEL":"Salary","EDIT_EMPLOYEE_CANCEL":"Cancel","EDIT_EMPLOYEE_SUBMIT":"Submit","DELETE_EMPLOYEE_TITLE":"Delete employees","DELETE_EMPLOYEE_TEXT":"Delete selected employees?","DELETE_EMPLOYEE_CANCEL":"Cancel","DELETE_EMPLOYEE_SUBMIT":"Delete","USERS_EMAIL_COLUMN":"Email","USERS_EMAIL_VERIFIED_COLUMN":"Verified","USERS_NAME_COLUMN":"Name","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create user","EDIT_USER_TITLE_EDIT":"Edit user","EDIT_USER_NAME_LABEL":"Name","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_ANONYMOUS_LABEL":"Anonymous","EDIT_USER_AUTHENTICATED_LABEL":"Authenticated","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","DELETE_USER_TITLE":"Delete users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","FORMS_MESSAGE_TITLE":"It's alive!","FORMS_MESSAGE_CONTENT":["The form example below is fully functional, the fields normalize and validate the input using this form's"," declaration file. And the server can use the very same declaration file to revalidate the form upon submitting."],"FORMS_SUCCESS_TITLE":"Congratulations!","FORMS_SUCCESS_TEXT":"The form is finished and ready to be submitted to the backend","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Prev","WIZARD_NEXT_BUTTON":"Next","WIZARD_SUBMIT_BUTTON":"Done","WIZARD_ERROR_LABEL":"Please fill out this form","SHIPPING_STEP_TITLE":"Shipping","SHIPPING_STEP_DESCR":"Choose your shipping options","SHIPPING_FIRST_NAME_LABEL":"First name","SHIPPING_MIDDLE_NAME_LABEL":"Middle name (optional)","SHIPPING_LAST_NAME_LABEL":"Last name","SHIPPING_ADDRESS_LABEL":"Address","SHIPPING_CITY_LABEL":"City/town","SHIPPING_STATE_LABEL":"State/Province/Region (if required)","SHIPPING_CODE_LABEL":"ZIP/Postal code","SHIPPING_COUNTRY_LABEL":"Country","SHIPPING_PHONE_LABEL":"Phone number","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"What is a dog?","SHIPPING_Q2":"What kinds of dogs are there?","SHIPPING_Q3":"How do you acquire a dog?","BILLING_STEP_TITLE":"Billing","BILLING_STEP_DESCR":"Enter billing information","BILLING_CARD_NUMBER_LABEL":"Credit card number","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Billing address is the same as shipping address","BILLING_Q1":"What is Lorem Ipsum?","BILLING_Q2":"When did they start using it?","CONFIRM_STEP_TITLE":"Confirm","CONFIRM_STEP_DESCR_SUCCESS":"The form is ready to be submitted","CONFIRM_STEP_DESCR_FAILURE":"The form is not completed yet","CONFIRM_SHIPPING_LABEL":"Shipping Information","CONFIRM_BILLING_LABEL":"Billing Information","CONFIRM_FIRST_NAME_LABEL":"First name:","CONFIRM_MIDDLE_NAME_LABEL":"Middle name:","CONFIRM_LAST_NAME_LABEL":"Last name:","CONFIRM_ADDRESS_LABEL":"Address:","CONFIRM_CITY_LABEL":"City/town:","CONFIRM_STATE_LABEL":"State/Province/Region:","CONFIRM_CODE_LABEL":"ZIP/Postal code:","CONFIRM_COUNTRY_LABEL":"Country:","CONFIRM_PHONE_LABEL":"Phone number:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Credit card number:","CONFIRM_CARD_DATE_LABEL":"Credit card expires:","NOTIFICATIONS_LABEL":"Notifications","NOTIFICATIONS_TITLE":"Styled Popup!","ICONS_FILTER_LABEL":"Filter","APP_AUTH_TITLE":"Authentication","APP_AUTH_ANONYMOUS_BUTTON":"Anonymous","APP_AUTH_CREDENTIALS_LABEL":"Sign In using Credentials","APP_AUTH_NEW_USER_LABEL":"I don't have an account yet, please create one","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SERVICE_BUTTON":"Sign In with","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","APP_AUTH_EMAIL_TAKEN":"This email is already registered","OPERATION_FAILED":"Operation failed","ERROR":"Error","ERROR_GO_HOME_LINK":"Go to the start page","ERROR_TRY_AUTH_LINK":"Sign in and try again","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_PATTERN":"Please provide a valid value","ERROR_INVALID_EMAIL":"Please provide a valid email address","ERROR_INVALID_PHONE":"Please, provide a valid phone number","ERROR_INVALID_PHONE_COUNTRY":"This is not a valid phone number for this country","ERROR_INVALID_CREDIT_CARD_NUMBER":"Please, provide a valid credit card number","ERROR_INVALID_CREDIT_CARD_DATE":"Please, provide a valid credit card expiration date","ERROR_INVALID_CREDIT_CARD_SECRET":"Please, provide a valid credit card CVV2 code","ERROR_INVALID_PASSWORD":"Password should be at least 6 characters long","ERROR_MISMATCHED_VALUES":"The two values you entered do not match"};

/***/ }),

/***/ "e1JF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;
var patterns = {
  AD: /^AD\d{3}$/,
  AT: fourDigit,
  AU: fourDigit,
  BE: fourDigit,
  BG: fourDigit,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: fourDigit,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DZ: fiveDigit,
  EE: fiveDigit,
  ES: fiveDigit,
  FI: fiveDigit,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  HR: /^([1-5]\d{4}$)/,
  HU: fourDigit,
  ID: fiveDigit,
  IL: fiveDigit,
  IN: sixDigit,
  IS: threeDigit,
  IT: fiveDigit,
  JP: /^\d{3}\-\d{4}$/,
  KE: fiveDigit,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^LT\-\d{5}$/,
  LU: fourDigit,
  LV: /^LV\-\d{4}$/,
  MX: fiveDigit,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^\d{3}\s?\d{2}$/,
  SI: fourDigit,
  SK: /^\d{3}\s?\d{2}$/,
  TN: fourDigit,
  TW: /^\d{3}(\d{2})?$/,
  UA: fiveDigit,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
};
var locales = Object.keys(patterns);
exports.locales = locales;

function _default(str, locale) {
  (0, _assertString.default)(str);

  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (var key in patterns) {
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];

        if (pattern.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

/***/ }),

/***/ "eU76":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString.default)(str);

  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });
  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble = true;

  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3QTP");

/***/ }),

/***/ "ewAR":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


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

/***/ "fVnE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = _interopRequireDefault(__webpack_require__("ARk6"));

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currencyRegex(options) {
  var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
  options.digits_after_decimal.forEach(function (digit, index) {
    if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
  });
  var symbol = "(\\".concat(options.symbol.replace(/\./g, '\\.'), ")").concat(options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"),
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join('|'), ")?"),
      decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? '' : '?');
  var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : ''); // default is negative sign before symbol, but there are two other options (besides parens)

  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  } // South African Rand, for example, uses R 123 (space) and R-123 (no space)


  if (options.allow_negative_sign_placeholder) {
    pattern = "( (?!\\-))?".concat(pattern);
  } else if (options.allow_space_after_symbol) {
    pattern = " ?".concat(pattern);
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  } // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space


  return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_decimal: true,
  require_decimal: false,
  digits_after_decimal: [2],
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

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

/***/ "fYqa":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("bh8V");
var TAG = __webpack_require__("G1Wo")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "fZVS":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("14Ie")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


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

/***/ "gGTQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "ge64":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mlGW");
module.exports = __webpack_require__("p9MR").Object.assign;


/***/ }),

/***/ "gehi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("Bjmp");

var _Select = _interopRequireWildcard(__webpack_require__("kbM8"));

var Select = (0, _styles.withStyles)(_Select.styles)(_Select.default);
var _default = Select;
exports.default = _default;

/***/ }),

/***/ "guND":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("PczM");
module.exports = __webpack_require__("p9MR").Date.now;


/***/ }),

/***/ "h+QY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType;

    if (input === null) {
      invalidType = 'null';
    } else {
      invalidType = _typeof(input);

      if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
        invalidType = input.constructor.name;
      } else {
        invalidType = "a ".concat(invalidType);
      }
    }

    throw new TypeError("Expected string but received ".concat(invalidType, "."));
  }
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hHPb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("Bjmp");

var _Radio = _interopRequireWildcard(__webpack_require__("n2np"));

var Radio = (0, _styles.withStyles)(_Radio.styles)(_Radio.default);
var _default = Radio;
exports.default = _default;

/***/ }),

/***/ "hbHv":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "hc2F":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("AYVP");
var $getPrototypeOf = __webpack_require__("/wxW");

__webpack_require__("wWUK")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7FvJ");

/***/ }),

/***/ "hl3i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactRelay = __webpack_require__("iuEU");

var _reactIntl = __webpack_require__("k004");

var _router = __webpack_require__("4Q3z");

var _styles = __webpack_require__("Bjmp");

var _state = __webpack_require__("XiiD");

var _Layout = _interopRequireWildcard(__webpack_require__("xcBP"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    statusCode: _state.appSelectors.getStatusCode(state),
    isStopped: _state.appSelectors.isStopped(state),
    isDisconnected: _state.appSelectors.isStarted(state) && !_state.appSelectors.isStopped(state) && !_state.appSelectors.isConnected(state),
    isAuthModalOpen: _state.appSelectors.isAuthModalOpen(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetStatusCode: function onSetStatusCode(code) {
      return dispatch(_state.appOperations.setStatusCode({
        code: code
      }));
    }
  };
};

var Layout = (0, _reactRelay.createRefetchContainer)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})((0, _router.withRouter)((0, _styles.withStyles)(_Layout.styles)((0, _reactIntl.injectIntl)(_Layout.default)))), {
  viewer: function viewer() {
    return __webpack_require__("ve3Z");
  }
}, function () {
  return __webpack_require__("CLtn");
});
var _default = Layout;
exports.default = _default;

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

/***/ "i1k1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString.default)(str);
  return md5.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "i6sE":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("bh8V");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

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

/***/ "icr7":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("tCzM");
__webpack_require__("k8Q4");
module.exports = __webpack_require__("04/V");


/***/ }),

/***/ "ihIJ":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "ij9E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _merge = _interopRequireDefault(__webpack_require__("ARk6"));

var _isByteLength = _interopRequireDefault(__webpack_require__("qire"));

var _isFQDN = _interopRequireDefault(__webpack_require__("meT0"));

var _isIP = _interopRequireDefault(__webpack_require__("M+nr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};
/* eslint-disable max-len */

/* eslint-disable no-control-regex */

var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
var defaultMaxEmailLength = 254;
/* eslint-enable max-len */

/* eslint-enable no-control-regex */

/**
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 * @param {String} display_name
 */

function validateDisplayName(display_name) {
  var trim_quotes = display_name.match(/^"(.+)"$/i);
  var display_name_without_quotes = trim_quotes ? trim_quotes[1] : display_name; // display name with only spaces is not valid

  if (!display_name_without_quotes.trim()) {
    return false;
  } // check whether display name contains illegal character


  var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);

  if (contains_illegal) {
    // if contains illegal characters,
    // must to be enclosed in double-quotes, otherwise it's not a valid display name
    if (!trim_quotes) {
      return false;
    } // the quotes in display name must start with character symbol \


    var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;

    if (!all_start_with_back_slash) {
      return false;
    }
  }

  return true;
}

function isEmail(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(splitNameAddress);

    if (display_email) {
      var display_name;

      var _display_email = _slicedToArray(display_email, 3);

      display_name = _display_email[1];
      str = _display_email[2];

      // sometimes need to trim the last space to get the display name
      // because there may be a space between display name and email address
      // eg. myname <address@gmail.com>
      // the display name is `myname` instead of `myname `, so need to trim the last space
      if (display_name.endsWith(' ')) {
        display_name = display_name.substr(0, display_name.length - 1);
      }

      if (!validateDisplayName(display_name)) {
        return false;
      }
    } else if (options.require_display_name) {
      return false;
    }
  }

  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
    return false;
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');
  var lower_domain = domain.toLowerCase();

  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */
    user = user.toLowerCase(); // Removing sub-address from username before gmail validation

    var username = user.split('+')[0]; // Dots are not included in gmail length restriction

    if (!(0, _isByteLength.default)(username.replace('.', ''), {
      min: 6,
      max: 30
    })) {
      return false;
    }

    var _user_parts = username.split('.');

    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }

  if (!(0, _isByteLength.default)(user, {
    max: 64
  }) || !(0, _isByteLength.default)(domain, {
    max: 254
  })) {
    return false;
  }

  if (!(0, _isFQDN.default)(domain, {
    require_tld: options.require_tld
  })) {
    if (!options.allow_ip_domain) {
      return false;
    }

    if (!(0, _isIP.default)(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }

      var noBracketdomain = domain.substr(1, domain.length - 2);

      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
        return false;
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
  var user_parts = user.split('.');

  for (var _i2 = 0; _i2 < user_parts.length; _i2++) {
    if (!pattern.test(user_parts[_i2])) {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "is7w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  (0, _assertString.default)(str);
  var len = str.length;

  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }

  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}

module.exports = exports.default;
module.exports.default = exports.default;

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

/***/ "jEar":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = __webpack_require__("k004");

var _formik = __webpack_require__("QxnH");

var _Field = _interopRequireDefault(__webpack_require__("lXSN"));

var Field = (0, _reactIntl.injectIntl)((0, _formik.connect)(_Field.default));
var _default = Field;
exports.default = _default;

/***/ }),

/***/ "jLZ4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString.default)(str);
  var pattern = chars ? new RegExp("[".concat(chars, "]")) : /\s/;
  var idx = str.length - 1;

  for (; idx >= 0 && pattern.test(str[idx]); idx--) {
    ;
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "jOCL":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("OtwA");
var createDesc = __webpack_require__("+EWW");
module.exports = __webpack_require__("fZVS") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "jWBx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SpeakerNotes");

/***/ }),

/***/ "jhpx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("Bjmp");

var _Text = _interopRequireWildcard(__webpack_require__("ok4n"));

var Text = (0, _styles.withStyles)(_Text.styles)(_Text.default);
var _default = Text;
exports.default = _default;

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "k8Q4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("Kk5c")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("5Kld")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "kPkA":
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
      width: "".concat(theme.spacing(1), "px"),
      height: "".concat(theme.spacing(1), "px")
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

/***/ "kbM8":
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

var _Select = _interopRequireDefault(__webpack_require__("OdWO"));

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _MenuItem = _interopRequireDefault(__webpack_require__("x54t"));

var _InputLabel = _interopRequireDefault(__webpack_require__("zOcm"));

var _FilledInput = _interopRequireDefault(__webpack_require__("4VpM"));

var _Input = _interopRequireDefault(__webpack_require__("tBFs"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("DBn5"));

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
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(MySelect, [{
    key: "handleChange",
    value: function handleChange(evt) {
      this.props.onChange(evt);
      return this.props.field.onChange(evt);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      this.props.onBlur(evt);
      return this.props.field.onBlur(evt);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errors = !!this.props.form.touched[this.props.name] && this.props.form.errors[this.props.name];
      var SelectInput = this.props.variant === "filled" ? _FilledInput.default : _Input.default;
      return _react.default.createElement(_FormControl.default, {
        className: this.props.className,
        variant: this.props.variant || "standard",
        fullWidth: true,
        error: !!errors
      }, _react.default.createElement(_InputLabel.default, null, this.props.label), _react.default.createElement(_Select.default, {
        name: this.props.field.name,
        value: this.props.field.value ? this.props.field.value.toString() : "",
        native: this.props.native,
        autoFocus: this.props.autoFocus,
        disabled: this.props.form.isSubmitting || this.props.disabled,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        input: _react.default.createElement(SelectInput, {
          inputProps: {
            onKeyDown: function onKeyDown(evt) {
              if (evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();

                _this2.props.handleSubmit();
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
        messages: this.props.messages || null,
        errors: errors || null
      })));
    }
  }]);
  return MySelect;
}(_react.default.PureComponent);

var _default = MySelect;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "lG5Z":
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

var Shadow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Shadow, _React$Component);

  function Shadow() {
    (0, _classCallCheck2.default)(this, Shadow);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Shadow).apply(this, arguments));
  }

  (0, _createClass2.default)(Shadow, [{
    key: "render",
    value: function render() {
      var boundary = this.props.theme.spacing(this.props.isDesktop ? this.props.theme.sidebar.computerWidth : this.props.theme.sidebar.tabletWidth);
      return _react.default.createElement("svg", {
        key: "shadow-".concat(this.props.width),
        xmlns: "http://www.w3.org/2000/svg",
        width: this.props.width,
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
        width: this.props.width + 20,
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
        width: this.props.width - boundary,
        height: "30"
      })), _react.default.createElement("filter", {
        id: "appBarShadowRight",
        x: "-10",
        y: "-10",
        width: this.props.width + 20,
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
        width: this.props.width - boundary + 20,
        height: "20",
        fill: this.props.theme.palette.secondary.main,
        filter: "url(#appBarShadowRight)"
      })));
    }
  }]);
  return Shadow;
}(_react.default.Component);

var _default = Shadow;
exports.default = _default;

/***/ }),

/***/ "lL+F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _isHexadecimal = _interopRequireDefault(__webpack_require__("UjK5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMongoId(str) {
  (0, _assertString.default)(str);
  return (0, _isHexadecimal.default)(str) && str.length === 24;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "lLKY":
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

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lXSN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _formik = __webpack_require__("QxnH");

var _context = _interopRequireDefault(__webpack_require__("lLKY"));

var _normalize = _interopRequireDefault(__webpack_require__("1FOm"));

var _TextContainer = _interopRequireDefault(__webpack_require__("jhpx"));

var _SelectContainer = _interopRequireDefault(__webpack_require__("gehi"));

var _CheckboxContainer = _interopRequireDefault(__webpack_require__("KqIO"));

var _RadioContainer = _interopRequireDefault(__webpack_require__("hHPb"));

var _ErrorContainer = _interopRequireDefault(__webpack_require__("p5R8"));

var FormField =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(FormField, _React$PureComponent);

  function FormField(props) {
    var _this;

    (0, _classCallCheck2.default)(this, FormField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormField).call(this, props));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(FormField, [{
    key: "handleChange",
    value: function handleChange(evt) {
      var fields = this.context.fields;

      if (fields[this.props.name]) {
        var normalizeOptions = fields[this.props.name].normalize;

        if (normalizeOptions) {
          evt.target.value = (0, _normalize.default)(normalizeOptions, evt.target.value, this.props.formik.values);
        }
      }

      if (this.props.onChange) this.props.onChange(evt, this.props.formik);
      this.props.formik.setFieldError(this.props.name, undefined);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      var fields = this.context.fields;
      var initialValue = evt.target.value;

      if (fields[this.props.name]) {
        var transformOptions = fields[this.props.name].transform;

        if (transformOptions) {
          evt.target.value = (0, _normalize.default)(transformOptions, evt.target.value, this.props.formik.values);
        }
      }

      if (this.props.onBlur) this.props.onBlur(evt, this.props.formik);
      if (evt.target.value !== initialValue) this.props.formik.setFieldValue(this.props.name, evt.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          name = _this$props.name,
          type = _this$props.type,
          label = _this$props.label,
          fieldProps = (0, _objectWithoutProperties2.default)(_this$props, ["name", "type", "label"]);
      var fields = this.context.fields;
      if (!label && fields[name] && fields[name].label) label = this.props.intl.formatMessage({
        id: fields[name].label
      });
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

      return _react.default.createElement(_formik.Field, {
        name: name,
        render: function render(props) {
          var handleSubmit = function handleSubmit() {
            setTimeout(function () {
              var touched = _.assign({}, props.form.touched);

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = (0, _getIterator2.default)(_.keys(fields)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var field = _step.value;
                  touched[field] = true;
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

              props.form.setTouched(touched);
            });
            return props.form.handleSubmit();
          };

          return _react.default.createElement(Component, (0, _extends2.default)({}, fieldProps, props, {
            name: name,
            type: type,
            label: label,
            onChange: _this2.handleChange,
            onBlur: _this2.handleBlur,
            handleSubmit: handleSubmit
          }));
        }
      });
    }
  }]);
  return FormField;
}(_react.default.PureComponent);

(0, _defineProperty2.default)(FormField, "contextType", _context.default);
var _default = FormField;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "liMu":
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
      maxWidth: 1300 + theme.spacing(2),
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(1)
    }, theme.breakpoints.down("md"), {
      flexDirection: "column",
      padding: theme.spacing(1) / 2,
      maxWidth: 1300 + theme.spacing(1)
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
    text: (0, _defineProperty2.default)({
      fontSize: "200%",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      padding: "0.5rem 2rem",
      color: "1px solid ".concat(theme.palette.text.secondary)
    }, theme.breakpoints.down("md"), {
      textAlign: "center"
    }),
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
      }, _react.default.createElement("div", null, ">\xA0\xA0", _react.default.createElement("a", {
        href: "/",
        className: this.props.classes.link
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "ERROR_GO_HOME_LINK"
      }))), this.getCode() === 401 && _react.default.createElement("div", null, ">\xA0\xA0", _react.default.createElement("a", {
        href: "javascript:void(0)",
        className: this.props.classes.link,
        onClick: this.props.onSignIn
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "ERROR_TRY_AUTH_LINK"
      }))))));
    }
  }]);
  return ErrorMessage;
}(_react.default.Component);

var _default = ErrorMessage;
exports.default = _default;

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "m4he":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUppercase(str) {
  (0, _assertString.default)(str);
  return str === str.toUpperCase();
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "meT0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _merge = _interopRequireDefault(__webpack_require__("ARk6"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_fqdn_options);
  /* Remove the optional trailing dot before checking validity */

  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }

  var parts = str.split('.');

  for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 63) {
      return false;
    }
  }

  if (options.require_tld) {
    var tld = parts.pop();

    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    } // disallow spaces


    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }

  for (var part, _i = 0; _i < parts.length; _i++) {
    part = parts[_i];

    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }

    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }

    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "mlGW":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("0T/a");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("nkTw") });


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

/***/ "n1Tu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var includes = function includes(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
};

var _default = includes;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "n2np":
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

var _FormControl = _interopRequireDefault(__webpack_require__("lWoh"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__("7s44"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("hbHv"));

var _Radio = _interopRequireDefault(__webpack_require__("CUfL"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("DBn5"));

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
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(MyRadio, [{
    key: "handleChange",
    value: function handleChange(evt) {
      this.props.onChange(evt);
      return this.props.field.onChange(evt);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      this.props.onBlur(evt);
      return this.props.field.onBlur(evt);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errors = !!this.props.form.touched[this.props.name] && this.props.form.errors[this.props.name];
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
          name: this.props.field.name,
          value: this.props.value,
          autoFocus: this.props.autoFocus,
          checked: this.props.field.value === this.props.value,
          disabled: this.props.form.isSubmitting || this.props.disabled,
          color: this.props.color || "primary",
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          inputProps: {
            onKeyDown: function onKeyDown(evt) {
              if (evt.keyCode === 13) {
                evt.preventDefault();
                evt.stopPropagation();

                _this2.props.handleSubmit();
              }
            }
          }
        })
      }), !!this.props.messages && _react.default.createElement(_FormHelperText.default, {
        component: "div",
        classes: {
          root: this.props.classes.formHelper
        }
      }, _react.default.createElement(_FieldMessagesContainer.default, {
        messages: this.props.messages || null,
        errors: null
      })));
    }
  }]);
  return MyRadio;
}(_react.default.PureComponent);

var _default = MyRadio;
exports.default = _default;

/***/ }),

/***/ "nJOo":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("D4ny");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "nkTw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("fZVS");
var getKeys = __webpack_require__("djPm");
var gOPS = __webpack_require__("McIs");
var pIE = __webpack_require__("1077");
var toObject = __webpack_require__("AYVP");
var IObject = __webpack_require__("i6sE");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("14Ie")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "nz5+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BrightnessAuto");

/***/ }),

/***/ "o4Of":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');

  if (!creditCard.test(sanitized)) {
    return false;
  }

  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble;

  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return !!(sum % 10 === 0 ? sanitized : false);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "oBHA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("Bjmp");

var _Shadow = _interopRequireDefault(__webpack_require__("lG5Z"));

var Shadow = (0, _styles.withTheme)(_Shadow.default);
var _default = Shadow;
exports.default = _default;

/***/ }),

/***/ "oCqu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(str, comparison) {
  (0, _assertString.default)(str);
  return str === comparison;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "ok4n":
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

var _TextField = _interopRequireDefault(__webpack_require__("IbbU"));

var _FieldMessagesContainer = _interopRequireDefault(__webpack_require__("DBn5"));

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
    _this.cachedValue = props.field.value;
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
        // because of that cursor sometimes jumps to the end of input.
        var cur = this.props.field.value || "";
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
      this.props.onChange(evt);
      return this.props.field.onChange(evt);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(evt) {
      this.cachedPosition = evt.target.value.length;

      if (this.input.current) {
        this.input.current.setSelectionRange(this.cachedPosition, this.cachedPosition);
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(evt) {
      this.props.onBlur(evt);
      return this.props.field.onBlur(evt);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errors = !!this.props.form.touched[this.props.name] && this.props.form.errors[this.props.name];
      return _react.default.createElement(_TextField.default, {
        className: this.props.className,
        autoComplete: "off",
        autoFocus: this.props.autoFocus,
        fullWidth: true,
        variant: this.props.variant || (this.props.type === "textarea" ? "outlined" : "standard"),
        type: this.props.type,
        multiline: this.props.type === "textarea",
        rows: this.props.rows,
        name: this.props.name,
        value: this.props.field.value ? this.props.field.value.toString() : "",
        label: this.props.label,
        disabled: this.props.form.isSubmitting || this.props.disabled,
        error: !!errors,
        FormHelperTextProps: {
          component: this.props.messages || errors ? "div" : undefined,
          classes: {
            root: this.props.classes.formHelper
          }
        },
        helperText: this.props.messages || errors ? _react.default.createElement(_FieldMessagesContainer.default, {
          messages: this.props.messages || null,
          errors: errors || null
        }) : undefined,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        inputRef: this.input,
        inputProps: {
          onKeyDown: function onKeyDown(evt) {
            if (_this2.props.type !== "textarea" && evt.keyCode === 13) {
              evt.preventDefault();
              evt.stopPropagation();

              _this2.props.handleSubmit();
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

/***/ "p+Qh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matches(str, pattern, modifiers) {
  (0, _assertString.default)(str);

  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }

  return pattern.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1gQu");

/***/ }),

/***/ "p1nR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIdentityCard;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validators = {
  ES: function ES(str) {
    (0, _assertString.default)(str);
    var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    var charsValue = {
      X: 0,
      Y: 1,
      Z: 2
    };
    var controlDigits = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; // sanitize user input

    var sanitized = str.trim().toUpperCase(); // validate the data structure

    if (!DNI.test(sanitized)) {
      return false;
    } // validate the control digit


    var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function (char) {
      return charsValue[char];
    });
    return sanitized.endsWith(controlDigits[number % 23]);
  }
};

function isIdentityCard(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'any';
  (0, _assertString.default)(str);

  if (locale in validators) {
    return validators[locale](str);
  } else if (locale === 'any') {
    for (var key in validators) {
      if (validators.hasOwnProperty(key)) {
        var validator = validators[key];

        if (validator(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "p31C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;
exports.locales = void 0;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-EG': /^((\+?20)|0)?1[0125]\d{8}$/,
  'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
  'ar-KW': /^(\+?965)[569]\d{7}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'ar-TN': /^(\+?216)?[2459]\d{7}$/,
  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
  'bn-BD': /^(\+?880|0)1[1356789][0-9]{8}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'de-DE': /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
  'el-GR': /^(\+?30|0)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
  'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
  'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
  'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
  'en-KE': /^(\+?254|0)?[7]\d{8}$/,
  'en-MU': /^(\+?230|0)?\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-SG': /^(\+65)?[89]\d{7}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
  'es-PY': /^(\+?595|0)9[9876]\d{7}$/,
  'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ja-JP': /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  'th-TH': /^(\+66|66|0)\d{9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'uk-UA': /^(\+?38|8)?0\d{9}$/,
  'vi-VN': /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
  'zh-CN': /^((\+|00)86)?1([358][0-9]|4[579]|6[67]|7[0135678]|9[189])[0-9]{8}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */
// aliases

phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale, options) {
  (0, _assertString.default)(str);

  if (options && options.strictMode && !str.startsWith('+')) {
    return false;
  }

  if (Array.isArray(locale)) {
    return locale.some(function (key) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];

        if (phone.test(str)) {
          return true;
        }
      }

      return false;
    });
  } else if (locale in phones) {
    return phones[locale].test(str); // alias falsey locale as 'any'
  } else if (!locale || locale === 'any') {
    for (var key in phones) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];

        if (phone.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}

var locales = Object.keys(phones);
exports.locales = locales;

/***/ }),

/***/ "p5R8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("Bjmp");

var _Error = _interopRequireWildcard(__webpack_require__("Jhmf"));

var MyError = (0, _styles.withStyles)(_Error.styles)(_Error.default);
var _default = MyError;
exports.default = _default;

/***/ }),

/***/ "p5qD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("Bjmp");

var _HeaderBar = _interopRequireWildcard(__webpack_require__("Hqih"));

var _state = __webpack_require__("XiiD");

var mapStateToProps = function mapStateToProps(state) {
  return {
    locale: _state.appSelectors.getLocale(state),
    apiServer: _state.appSelectors.getApiServer(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSignOut: function onSignOut() {
      return dispatch(_state.appOperations.signOut());
    }
  };
};

var HeaderBar = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(_HeaderBar.styles)((0, _styles.withTheme)((0, _reactIntl.injectIntl)(_HeaderBar.default))));
var _default = HeaderBar;
exports.default = _default;

/***/ }),

/***/ "p9MR":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "pDh1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("B8g0");
module.exports = __webpack_require__("p9MR").Object.setPrototypeOf;


/***/ }),

/***/ "pH/F":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("fZVS") && !__webpack_require__("14Ie")(function () {
  return Object.defineProperty(__webpack_require__("Ev2A")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "pKoH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
var macAddressNoColons = /^([0-9a-fA-F]){12}$/;

function isMACAddress(str, options) {
  (0, _assertString.default)(str);

  if (options && options.no_colons) {
    return macAddressNoColons.test(str);
  }

  return macAddress.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/ab8");

/***/ }),

/***/ "pN9Q":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),

/***/ "pasi":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("qBJy");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "qBJy":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "qS1M":
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

var _CircularProgress = _interopRequireDefault(__webpack_require__("1imS"));

var styles = function styles(theme) {
  return {
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
    }
  };
};

exports.styles = styles;

var Spinner =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Spinner, _React$Component);

  function Spinner() {
    (0, _classCallCheck2.default)(this, Spinner);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Spinner).apply(this, arguments));
  }

  (0, _createClass2.default)(Spinner, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.classes.backdrop
      }, _react.default.createElement("div", {
        className: this.props.classes.spinner
      }, _react.default.createElement(_CircularProgress.default, {
        color: "inherit",
        size: 60
      })));
    }
  }]);
  return Spinner;
}(_react.default.Component);

var _default = Spinner;
exports.default = _default;

/***/ }),

/***/ "qire":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isByteLength;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString.default)(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r36L":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("UOkd");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "rG3h":
/***/ (function(module, exports) {



/***/ }),

/***/ "rWH8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO8601;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

var isValidDate = function isValidDate(str) {
  // str must have passed the ISO8601 check
  // this check is meant to catch invalid dates
  // like 2009-02-31
  // first check for ordinal dates
  var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);

  if (ordinalMatch) {
    var oYear = Number(ordinalMatch[1]);
    var oDay = Number(ordinalMatch[2]); // if is leap year

    if (oYear % 4 === 0 && oYear % 100 !== 0) return oDay <= 366;
    return oDay <= 365;
  }

  var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
  var year = match[1];
  var month = match[2];
  var day = match[3];
  var monthString = month ? "0".concat(month).slice(-2) : month;
  var dayString = day ? "0".concat(day).slice(-2) : day; // create a date object and compare

  var d = new Date("".concat(year, "-").concat(monthString || '01', "-").concat(dayString || '01'));
  if (isNaN(d.getUTCFullYear())) return false;

  if (month && day) {
    return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
  }

  return true;
};

function isISO8601(str, options) {
  (0, _assertString.default)(str);
  var check = iso8601.test(str);
  if (!options) return check;
  if (check && options.strict) return isValidDate(str);
  return check;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "s+ck":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "s+zB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("OtwA");
var createDesc = __webpack_require__("+EWW");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "s/BC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//const moment = require("moment-timezone");
const moment = __webpack_require__("wy2R");
__webpack_require__("N72Q"); // en is already there

module.exports = moment;


/***/ }),

/***/ "sLxe":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "sMvg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO31661Alpha3;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _includes = _interopRequireDefault(__webpack_require__("n1Tu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
var validISO31661Alpha3CountriesCodes = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];

function isISO31661Alpha3(str) {
  (0, _assertString.default)(str);
  return (0, _includes.default)(validISO31661Alpha3CountriesCodes, str.toUpperCase());
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "sVnQ":
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

/***/ "sgzX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
var numericNoSymbols = /^[0-9]+$/;

function isNumeric(str, options) {
  (0, _assertString.default)(str);

  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }

  return numeric.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "sipE":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "sli4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0lY0");
__webpack_require__("Ev2V");
__webpack_require__("0Sc/");
__webpack_require__("0k/M");
module.exports = __webpack_require__("p9MR").Symbol;


/***/ }),

/***/ "t39F":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("D4ny");
var get = __webpack_require__("8Vlj");
module.exports = __webpack_require__("p9MR").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "t7Ea":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("Bjmp");

var _ChartsDemo = _interopRequireWildcard(__webpack_require__("FsgU"));

var ChartsDemo = (0, _styles.withStyles)(_ChartsDemo.styles)((0, _styles.withTheme)(_ChartsDemo.default));
var _default = ChartsDemo;
exports.default = _default;

/***/ }),

/***/ "t7Ei":
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

var _theme = _interopRequireDefault(__webpack_require__("3AO0"));

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

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "tCzM":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+lRa");
var global = __webpack_require__("2jw7");
var hide = __webpack_require__("jOCL");
var Iterators = __webpack_require__("sipE");
var TO_STRING_TAG = __webpack_require__("G1Wo")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "tFdt":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "tLFn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _toString = _interopRequireDefault(__webpack_require__("JvVL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(str, elem) {
  (0, _assertString.default)(str);
  return str.indexOf((0, _toString.default)(elem)) >= 0;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "taoM":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("bh8V");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "tgSc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("0T/a");
var core = __webpack_require__("p9MR");
var global = __webpack_require__("2jw7");
var speciesConstructor = __webpack_require__("MC82");
var promiseResolve = __webpack_require__("3s9C");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


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

/***/ "uCCn":
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

var _theme = _interopRequireDefault(__webpack_require__("3AO0"));

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

/***/ "uXag":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactIntl = __webpack_require__("k004");

var _colorManipulator = __webpack_require__("oOPP");

var _Menu = _interopRequireDefault(__webpack_require__("GYHf"));

var _MenuItem = _interopRequireDefault(__webpack_require__("x54t"));

var _ListItemText = _interopRequireDefault(__webpack_require__("W+03"));

var _ListItemAvatar = _interopRequireDefault(__webpack_require__("QEhy"));

var _Avatar = _interopRequireDefault(__webpack_require__("4ZJ9"));

var _constants = _interopRequireDefault(__webpack_require__("QwoZ"));

var _moment = _interopRequireDefault(__webpack_require__("s/BC"));

var styles = function styles(theme) {
  return {
    menu: (0, _defineProperty2.default)({
      width: "100%",
      maxWidth: theme.spacing(45),
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
      height: 60,
      marginRight: "1rem"
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

var Inbox =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Inbox, _React$Component);

  function Inbox() {
    (0, _classCallCheck2.default)(this, Inbox);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Inbox).apply(this, arguments));
  }

  (0, _createClass2.default)(Inbox, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Menu.default, {
        classes: {
          paper: this.props.classes.menu
        },
        anchorEl: this.props.anchor,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        open: !!this.props.anchor,
        onClose: this.props.onClose
      }, _react.default.createElement(_MenuItem.default, {
        className: this.props.classes.menuItem,
        onClick: this.props.onClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Mitch Stigall",
        src: this.props.apiServer + _constants.default.apiBase + "/avatars/1?t=" + (0, _now.default)()
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
        onClick: this.props.onClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Marie Wineinger",
        src: this.props.apiServer + _constants.default.apiBase + "/avatars/2?t=" + (0, _now.default)()
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
        onClick: this.props.onClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Ted Eriksson",
        src: this.props.apiServer + _constants.default.apiBase + "/avatars/3?t=" + (0, _now.default)()
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
        onClick: this.props.onClose
      }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
        className: this.props.classes.inboxAvatar,
        alt: "Martin Murry",
        src: this.props.apiServer + _constants.default.apiBase + "/avatars/4?t=" + (0, _now.default)()
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
  }]);
  return Inbox;
}(_react.default.Component);

var _default = Inbox;
exports.default = _default;

/***/ }),

/***/ "uspL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("Bjmp");

var _state = __webpack_require__("XiiD");

var _Locales = _interopRequireWildcard(__webpack_require__("QneH"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    apiServer: _state.appSelectors.getApiServer(state)
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
    }
  };
};

var Locales = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(_Locales.styles)((0, _reactIntl.injectIntl)(_Locales.default)));
var _default = Locales;
exports.default = _default;

/***/ }),

/***/ "v5c1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Pets");

/***/ }),

/***/ "vAff":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
  (0, _assertString.default)(str);
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "vCXk":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("8v5W");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


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

/***/ "ve3Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ReaderFragment } from 'relay-runtime';
export type UserRole = "ADMIN" | "AUTHENTICATED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type LayoutContainer_viewer$ref: FragmentReference;
declare export opaque type LayoutContainer_viewer$fragmentType: LayoutContainer_viewer$ref;
export type LayoutContainer_viewer = {|
  +me: ?{|
    +isAuthenticated: boolean,
    +userId: ?string,
    +name: ?string,
    +email: ?string,
    +roles: $ReadOnlyArray<?UserRole>,
    +providers: $ReadOnlyArray<?{|
      +name: string
    |}>,
  |},
  +$refType: LayoutContainer_viewer$ref,
|};
export type LayoutContainer_viewer$data = LayoutContainer_viewer;
export type LayoutContainer_viewer$key = {
  +$data?: LayoutContainer_viewer$data,
  +$fragmentRefs: LayoutContainer_viewer$ref,
};
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
    "name": "LayoutContainer_viewer",
    "type": "Viewer",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "me",
      "storageKey": null,
      "args": null,
      "concreteType": "Status",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "isAuthenticated",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "userId",
        "args": null,
        "storageKey": null
      }, v0
      /*: any*/
      , {
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
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "providers",
        "storageKey": null,
        "args": null,
        "concreteType": "ProviderStatus",
        "plural": true,
        "selections": [v0
        /*: any*/
        ]
      }]
    }]
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '85ee9d805fc54e613072b1e69f00c53d';
module.exports = node;

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

/***/ "vnTJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _reactIntl = __webpack_require__("k004");

var _styles = __webpack_require__("Bjmp");

var _state = __webpack_require__("XiiD");

var _Inbox = _interopRequireWildcard(__webpack_require__("uXag"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    apiServer: _state.appSelectors.getApiServer(state)
  };
};

var Inbox = (0, _styles.withStyles)(_Inbox.styles)((0, _reactIntl.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(_Inbox.default)));
var _default = Inbox;
exports.default = _default;

/***/ }),

/***/ "vu9h":
/***/ (function(module) {

module.exports = {"MENU_DASHBOARD":"Дашборд","TITLE_DASHBOARD":"Дашборд","MENU_FORMS":"Формы","TITLE_FORMS":"Формы","MENU_CHARTS":"Графики","TITLE_CHARTS":"Графики","MENU_TABLES":"Таблицы","TITLE_TABLES":"Таблицы","MENU_MAPS":"Карты","TITLE_MAPS":"Карты","MENU_NOTIFICATIONS":"Уведомления","TITLE_NOTIFICATIONS":"Уведомления","MENU_TYPOGRAPHY":"Типографика","TITLE_TYPOGRAPHY":"Типографика","MENU_ICONS":"Иконки","TITLE_ICONS":"Иконки","MENU_USERS":"Пользователи","TITLE_USERS":"Пользователи","TITLE_PROFILE":"Профиль","TITLE_VERIFY":"Верификация email","TITLE_OAUTH_ERROR":"Ошибка авторизации","THEME_DARK_MENU":"Темная","THEME_DARK_LABEL":"Темная тема","THEME_LIGHT_MENU":"Светлая","THEME_LIGHT_LABEL":"Светлая тема","LAYOUT_UPDATE_READY_MESSAGE":"Доступно обновление. Кликните здесь, чтобы перезагрузить страницу.","LAYOUT_NOT_CONNECTED_MESSAGE":"Подключение...","SIDEBAR_LOGIN_BUTTON":"Вход / Регистрация","SIDEBAR_GITHUB_LINK":"Github","SIDEBAR_BENCHMARKS_LINK":"Сравнительный тест","SIDEBAR_RESPONSIVENESS_LINK":"Тест реактивности","HEADER_INBOX_LABEL":"Входяшие","HEADER_PROFILE_LABEL":"Профиль","HEADER_PROFILE_TOOLTIP":"Как у анонимный пользователя, у вас нет профиля.","PROFILE_NAME_LABEL":"Отображаемое имя","PROFILE_EMAIL_LABEL":"Email","PROFILE_PASSWORD1_LABEL":"Новый пароль","PROFILE_PASSWORD2_LABEL":"Повторите пароль","PROFILE_SAVE_BUTTON":"Сохранить","PROFILE_DESTROY_BUTTON":"Самоуничтожение","PROFILE_VERIFY_BUTTON":"Верифицировать email","PROFILE_LINK_BUTTON":"Привязать","PROFILE_UNLINK_BUTTON":"Отвязать","PROFILE_SAVE_SUCCESS":"Профиль был обновлен","PROFILE_VERIFY_SUCCESS":"Пожалуйста, проверьте вашу почту по поводу верификацонного сообщения","PROFILE_LINK_SUCCESS":"Привязываем провайдера...","PROFILE_UNLINK_SUCCESS":"Сервис более не привязан к вашему аккаунту","VERIFY_EMAIL_SUBJECT":"Next Dashboard - Верифицируйте ваш email","VERIFY_EMAIL_TEXT":"Используйте ссылку ниже для верификации вашего email:\n\n{url}\n\n","VERIFY_EMAIL_HTML":"<p>Используйте ссылку ниже для верификации вашего email:</p><p>{url}</p>","VERIFY_INTRO_MESSAGE":"Пожалуйста, используйте кнопку ниже для верификации вашего email","VERIFY_FAILED_MESSAGE":"Эта ссылка больше не работает","VERIFY_ACTION_BUTTON":"Верифицировать email","DELETE_PROFILE_TITLE":"Удалить профиль","DELETE_PROFILE_TEXT":"Вы уверены, что хотите удалить ваш профиль?","DELETE_PROFILE_CANCEL":"Отменить","DELETE_PROFILE_SUBMIT":"Удалить","OAUTH_ERROR_GENERIC":"Произошла ошибка","OAUTH_ERROR_ACCOUNT_EXISTS":"Аккаунт, связанный с вашим email, уже существует","OAUTH_ERROR_ACCOUNT_EXISTS_TITLE1":"Почему я это вижу?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE1":["Похоже, что вы уже входили, используя другой сервис.\n","Чтобы защитить ваш аккаунт, если вы уже входили, используя другой сервис, вам"," необходимо связать ваши аккануты, прежде чем вы сможете войти, используя другой сервис."],"OAUTH_ERROR_ACCOUNT_EXISTS_TITLE2":"Как это починить?","OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE2":["Чтобы войти, используя другой сервис, сначала войдите, используя email или предыдущий"," сервис, затем свяжите ваши аккаунты на странице профиля."],"DASHBOARD_PROFIT_LABEL":"Прибыль","DASHBOARD_SALES_LABEL":"Продажи","DASHBOARD_CLIENTS_LABEL":"Клиенты","DASHBOARD_AVG_TIME_LABEL":"Сред. время","DASHBOARD_CLICK_MAP_LABEL":"Кликните, чтобы выбрать","DASHBOARD_US_SALES_LABEL":"Продажи в США","DASHBOARD_OTHER_LABEL":"Другие","DEPT_PRODUCTION":"Производство","DEPT_RD":"R&D","DEPT_PURCHASING":"Закупки","DEPT_MARKETING":"Маркетинг","DEPT_HR":"HR","DEPT_ACCOUNTING":"Бухгалтерия","EMPLOYEES_MESSAGE_TITLE":"Оно живое!","EMPLOYEES_MESSAGE_CONTENT":["Эта таблица работает благодаря GraphQL API и использует React Relay Modern. Попробуйте изменить значение в"," другом броузере или вкладке и вы увидите, что оно обновилось во всех броузерах, подключенных к данной странице,"," благодаря GraphQL Subscriptions."],"EMPLOYEES_UID_COLUMN":"UID","EMPLOYEES_NAME_COLUMN":"Имя","EMPLOYEES_DEPT_COLUMN":"Отдел","EMPLOYEES_TITLE_COLUMN":"Должность","EMPLOYEES_COUNTRY_COLUMN":"Страна","EMPLOYEES_SALARY_COLUMN":"Оклад","EMPLOYEES_CREATE_BUTTON":"Создать сотрудника","EMPLOYEES_EDIT_BUTTON":"Изменить сотрудника","EMPLOYEES_DELETE_BUTTON":"Удалить сотрудников","EDIT_EMPLOYEE_TITLE_CREATE":"Создать сотрудника","EDIT_EMPLOYEE_TITLE_EDIT":"Изменить сотрудника","EDIT_EMPLOYEE_UID_LABEL":"UID","EDIT_EMPLOYEE_UID_HINT":"Только цифры","EDIT_EMPLOYEE_CHECKED_LABEL":"Включен","EDIT_EMPLOYEE_NAME_LABEL":"Имя","EDIT_EMPLOYEE_DEPT_LABEL":"Отдел","EDIT_EMPLOYEE_TITLE_LABEL":"Должность","EDIT_EMPLOYEE_COUNTRY_LABEL":"Страна","EDIT_EMPLOYEE_SALARY_LABEL":"Оклад","EDIT_EMPLOYEE_CANCEL":"Отменить","EDIT_EMPLOYEE_SUBMIT":"Отправить","DELETE_EMPLOYEE_TITLE":"Удалить сотрудников","DELETE_EMPLOYEE_TEXT":"Удалить выбранных сотрудников?","DELETE_EMPLOYEE_CANCEL":"Отменить","DELETE_EMPLOYEE_SUBMIT":"Удалить","USERS_EMAIL_COLUMN":"Email","USERS_EMAIL_VERIFIED_COLUMN":"Преверен","USERS_NAME_COLUMN":"Имя","USERS_ROLES_COLUMN":"Роли","USERS_CREATE_BUTTON":"Создать пользователя","USERS_EDIT_BUTTON":"Изменить пользователя","USERS_DELETE_BUTTON":"Удалить пользователей","EDIT_USER_TITLE_CREATE":"Создать пользователя","EDIT_USER_TITLE_EDIT":"Изменить пользователя","EDIT_USER_NAME_LABEL":"Имя","EDIT_USER_EMAIL_LABEL":"Email","EDIT_USER_PASSWORD_LABEL":"Пароль","EDIT_USER_ANONYMOUS_LABEL":"Аноним","EDIT_USER_AUTHENTICATED_LABEL":"Авторизованный","EDIT_USER_ADMIN_LABEL":"Администратор","EDIT_USER_CANCEL":"Отменить","EDIT_USER_SUBMIT":"Отправить","DELETE_USER_TITLE":"Удалить пользователей","DELETE_USER_TEXT":"Удалить выбранных пользователей?","DELETE_USER_CANCEL":"Отменить","DELETE_USER_SUBMIT":"Удалить","FORMS_MESSAGE_TITLE":"Оно живое!","FORMS_MESSAGE_CONTENT":["Пример формы ниже полностью фукциональный, поля нормализуют и проверяют ввод, используя файл описания данной "," формы. А сервер может перепроверить форму, испольуя тот же самый файл описания формы после отправки."],"FORMS_SUCCESS_TITLE":"Поздравляем!","FORMS_SUCCESS_TEXT":"Форма закончена и готова к отправке на сервер","FORMS_SUCCESS_SUBMIT":"OK","WIZARD_PREV_BUTTON":"Пред","WIZARD_NEXT_BUTTON":"След","WIZARD_SUBMIT_BUTTON":"Готово","WIZARD_ERROR_LABEL":"Пожалуйста, заполните эту форму","SHIPPING_STEP_TITLE":"Доставка","SHIPPING_STEP_DESCR":"Укажите параметры доставки","SHIPPING_FIRST_NAME_LABEL":"Имя","SHIPPING_MIDDLE_NAME_LABEL":"Отчество (не обязательно)","SHIPPING_LAST_NAME_LABEL":"Фамилия","SHIPPING_ADDRESS_LABEL":"Адрес","SHIPPING_CITY_LABEL":"Город/Поселок","SHIPPING_STATE_LABEL":"Штат/Провинция/Регион (если требуется)","SHIPPING_CODE_LABEL":"ZIP/Почтовый индекс","SHIPPING_COUNTRY_LABEL":"Страна","SHIPPING_PHONE_LABEL":"Номер телефона","SHIPPING_EMAIL_LABEL":"Email","SHIPPING_Q1":"Что такое собака?","SHIPPING_Q2":"Какие виды собак бывают?","SHIPPING_Q3":"Как завести собаку?","BILLING_STEP_TITLE":"Оплата","BILLING_STEP_DESCR":"Укажите параметры оплаты","BILLING_CARD_NUMBER_LABEL":"Номер кредитной карты","BILLING_CARD_DATE_LABEL":"MM / YY","BILLING_CARD_SECRET_LABEL":"CVV2","BILLING_SAME_ADDRESS_LABEL":"Адрес плательщика совпадает с адресом доставки","BILLING_Q1":"Что такое Lorem Ipsum?","BILLING_Q2":"Когда это начали применять?","CONFIRM_STEP_TITLE":"Готово","CONFIRM_STEP_DESCR_SUCCESS":"Форма готова к отправке","CONFIRM_STEP_DESCR_FAILURE":"Форма еще не закончена","CONFIRM_SHIPPING_LABEL":"Параметры доставки","CONFIRM_BILLING_LABEL":"Параметры оплаты","CONFIRM_FIRST_NAME_LABEL":"Имя:","CONFIRM_MIDDLE_NAME_LABEL":"Отчество:","CONFIRM_LAST_NAME_LABEL":"Фамилия:","CONFIRM_ADDRESS_LABEL":"Адрес:","CONFIRM_CITY_LABEL":"Город/Поселок:","CONFIRM_STATE_LABEL":"Штат/Привинция/Регион:","CONFIRM_CODE_LABEL":"ZIP/Почтовый индекс:","CONFIRM_COUNTRY_LABEL":"Страна:","CONFIRM_PHONE_LABEL":"Номер телефона:","CONFIRM_EMAIL_LABEL":"Email:","CONFIRM_CARD_NUMBER_LABEL":"Номер кредитной карты:","CONFIRM_CARD_DATE_LABEL":"Срок карты истекает:","NOTIFICATIONS_LABEL":"Уведомления","NOTIFICATIONS_TITLE":"Стилизованный попап!","ICONS_FILTER_LABEL":"Фильтр","APP_AUTH_TITLE":"Авторизация","APP_AUTH_ANONYMOUS_BUTTON":"Аноним","APP_AUTH_CREDENTIALS_LABEL":"Войти, используя логин/пароль","APP_AUTH_NEW_USER_LABEL":"У меня еще нет аккаунт. Пожалуйста, создайте его","APP_AUTH_EMAIL_LABEL":"Email","APP_AUTH_PASSWORD_LABEL":"Пароль","APP_AUTH_SERVICE_BUTTON":"Войти с","APP_AUTH_SUBMIT":"Войти","APP_AUTH_FAILED":"Неправильный логин/пароль","APP_AUTH_EMAIL_TAKEN":"Этот email уже зарегистрирован","OPERATION_FAILED":"Операция завершилась ошибкой","ERROR":"Ошибка","ERROR_GO_HOME_LINK":"Открыть стартовую страницу","ERROR_TRY_AUTH_LINK":"Авторизоваться и попробовать еще раз","ERROR_FIELD_REQUIRED":"Это поле обязательно","ERROR_INVALID_PATTERN":"Пожалуйста, укажите правильное значение","ERROR_INVALID_EMAIL":"Пожалуйста, укажите правильный email","ERROR_INVALID_PHONE":"Пожалуйста, укажите правильный номер телефона","ERROR_INVALID_PHONE_COUNTRY":"Это неправильный номер телефона для указанной страны","ERROR_INVALID_CREDIT_CARD_NUMBER":"Пожалуйста, укажите правильный номер кредитной карты","ERROR_INVALID_CREDIT_CARD_DATE":"Пожалуйста, укажите правильный срок действия кредитной карты","ERROR_INVALID_CREDIT_CARD_SECRET":"Пожалуйста, укажите правильный код CVV2","ERROR_INVALID_PASSWORD":"Длина пароля должна быть не меньше 6 символов","ERROR_MISMATCHED_VALUES":"Два, введенные вами значения, не совпадают"};

/***/ }),

/***/ "w+rH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHash;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lengths = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8
};

function isHash(str, algorithm) {
  (0, _assertString.default)(str);
  var hash = new RegExp("^[a-f0-9]{".concat(lengths[algorithm], "}$"));
  return hash.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "w1vu":
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 5.894a8.304 8.304 0 0 1-2.357.636 4.064 4.064 0 0 0 1.804-2.235c-.792.463-1.67.8-2.605.98A4.128 4.128 0 0 0 15.847 4c-2.266 0-4.104 1.808-4.104 4.04 0 .316.037.624.107.92a11.711 11.711 0 0 1-8.458-4.22 3.972 3.972 0 0 0-.555 2.03c0 1.401.724 2.638 1.825 3.362a4.138 4.138 0 0 1-1.858-.505v.05c0 1.958 1.414 3.59 3.29 3.961a4.169 4.169 0 0 1-1.852.07c.522 1.604 2.037 2.772 3.833 2.804a8.315 8.315 0 0 1-5.096 1.73c-.331 0-.658-.02-.979-.057A11.748 11.748 0 0 0 8.29 20c7.547 0 11.674-6.155 11.674-11.493 0-.175-.004-.349-.011-.522A8.265 8.265 0 0 0 22 5.894z\"></path></svg>"

/***/ }),

/***/ "wL32":
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ }),

/***/ "wNhr":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("OtwA").f;
var has = __webpack_require__("Q8jq");
var TAG = __webpack_require__("G1Wo")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "wWUK":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("0T/a");
var core = __webpack_require__("p9MR");
var fails = __webpack_require__("14Ie");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "wc8t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _isFQDN = _interopRequireDefault(__webpack_require__("meT0"));

var _isIP = _interopRequireDefault(__webpack_require__("M+nr"));

var _merge = _interopRequireDefault(__webpack_require__("ARk6"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];

    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }

  return false;
}

function isURL(url, options) {
  (0, _assertString.default)(url);

  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }

  if (url.indexOf('mailto:') === 0) {
    return false;
  }

  options = (0, _merge.default)(options, default_url_options);
  var protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();
  split = url.split('://');

  if (split.length > 1) {
    protocol = split.shift().toLowerCase();

    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }

    split[0] = url.substr(2);
  }

  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');

  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }

    auth = split.shift();

    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }

  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);

  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();

    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);

    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }

  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "widk":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("sipE");
var ITERATOR = __webpack_require__("G1Wo")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "wkow":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("Bjmp");

var _Spinner = _interopRequireWildcard(__webpack_require__("qS1M"));

var Spinner = (0, _styles.withStyles)(_Spinner.styles)(_Spinner.default);
var _default = Spinner;
exports.default = _default;

/***/ }),

/***/ "wmuC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMagnetURI;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

function isMagnetURI(url) {
  (0, _assertString.default)(url);
  return magnetURI.test(url.trim());
}

module.exports = exports.default;
module.exports.default = exports.default;

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

/***/ "xcBP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("xnum"));

var _reactIntl = __webpack_require__("k004");

var _reactToastify = __webpack_require__("oAEb");

var _Button = _interopRequireDefault(__webpack_require__("Wh1t"));

var _Hidden = _interopRequireDefault(__webpack_require__("Y8uC"));

var _Snackbar = _interopRequireDefault(__webpack_require__("D4mc"));

var _Drawer = _interopRequireDefault(__webpack_require__("Q01v"));

var _SwipeableDrawer = _interopRequireDefault(__webpack_require__("pN9Q"));

var _SidebarContainer = _interopRequireDefault(__webpack_require__("XgGr"));

var _HeaderContainer = _interopRequireDefault(__webpack_require__("VBpv"));

var _AppAuthModalContainer = _interopRequireDefault(__webpack_require__("Qa/D"));

var _ErrorMessageContainer = _interopRequireDefault(__webpack_require__("brtW"));

var _constants = _interopRequireDefault(__webpack_require__("QwoZ"));

__webpack_require__("NV0Y");

var _styledScroll = _interopRequireDefault(__webpack_require__("kPkA"));

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
    update: {
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
    sidebar: _.merge((_$merge = {
      background: theme.sidebar.background,
      border: "none",
      overflowX: "hidden",
      width: theme.spacing(theme.sidebar.computerWidth)
    }, (0, _defineProperty2.default)(_$merge, theme.breakpoints.between("sm", "md"), {
      width: theme.spacing(theme.sidebar.tabletWidth)
    }), (0, _defineProperty2.default)(_$merge, theme.breakpoints.down("xs"), {
      width: theme.spacing(theme.sidebar.phoneWidth)
    }), _$merge), (0, _styledScroll.default)(theme)),
    main: (_main = {
      position: "relative",
      boxShadow: "-2px -2px 8px rgba(0, 0, 0, 0.3)",
      background: theme.main.background,
      color: theme.main.color,
      zIndex: 1200,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "stretch",
      marginLeft: theme.spacing(theme.sidebar.computerWidth)
    }, (0, _defineProperty2.default)(_main, theme.breakpoints.between("sm", "md"), {
      marginLeft: theme.spacing(theme.sidebar.tabletWidth)
    }), (0, _defineProperty2.default)(_main, theme.breakpoints.down("xs"), {
      marginLeft: 0
    }), _main),
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
  (0, _createClass2.default)(Layout, null, [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        error: error
      };
    }
  }]);

  function Layout(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Layout);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Layout).call(this, props));
    _this.state = {
      isLoaded: false,
      isUpdateNeeded: !!global.__updateReady,
      isSidebarOpen: false
    };
    _this.handleSidebarToggle = _this.handleSidebarToggle.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSidebarOpen = _this.handleSidebarOpen.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSidebarClose = _this.handleSidebarClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleAuthUpdated = _this.handleAuthUpdated.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleUpdateMessage = _this.handleUpdateMessage.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleToastMessage = _this.handleToastMessage.bind((0, _assertThisInitialized2.default)(_this));
    _this.doUpdate = _this.doUpdate.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener(_constants.default.events.AUTH_UPDATED, this.handleAuthUpdated);
      window.addEventListener(_constants.default.events.UPDATE_READY, this.handleUpdateMessage);
      window.addEventListener(_constants.default.events.TOAST, this.handleToastMessage);
      this.setState({
        isLoaded: true
      });
      this.checkAuth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.checkAuth();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener(_constants.default.events.AUTH_UPDATED, this.handleAuthUpdated);
      window.removeEventListener(_constants.default.events.UPDATE_READY, this.handleUpdateMessage);
      window.removeEventListener(_constants.default.events.TOAST, this.handleToastMessage);
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      return !!_.get(this.props.viewer, "me.isAuthenticated");
    }
  }, {
    key: "getUser",
    value: function getUser() {
      return this.isAuthenticated() ? _.get(this.props.viewer, "me") : null;
    }
  }, {
    key: "getProviders",
    value: function getProviders() {
      var providers = _.get(this.props.viewer, "me.providers", []);

      return _.map(providers, "name");
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var page = _constants.default.pages[this.props.page] || {};
      return page.title;
    }
  }, {
    key: "checkAuth",
    value: function checkAuth() {
      var page = _constants.default.pages[this.props.page];
      var isAllowed = page && page.isAllowed;

      if (this.props.statusCode === 200 && isAllowed && !isAllowed(this.getUser())) {
        this.props.onSetStatusCode(this.isAuthenticated() ? 403 : 401);
      } else if (_.includes([401, 403], this.props.statusCode) && (!isAllowed || isAllowed(this.getUser()))) {
        this.props.onSetStatusCode(200);
      }
    }
  }, {
    key: "handleAuthUpdated",
    value: function handleAuthUpdated() {
      this.props.relay.refetch(null, null, null, {
        force: true
      });
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
    key: "handleUpdateMessage",
    value: function handleUpdateMessage() {
      this.setState({
        isUpdateNeeded: true
      });
    }
  }, {
    key: "handleToastMessage",
    value: function handleToastMessage(evt) {
      (0, _reactToastify.toast)(_react.default.createElement("div", null, _react.default.createElement("h3", null, evt.detail.title), _react.default.createElement("p", null, evt.detail.content)), {
        position: evt.detail.position,
        className: this.props.classes.toastBox,
        progressClassName: this.props.classes.toastProgress
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
    key: "render",
    value: function render() {
      if (this.props.isStopped) return null;
      var title = this.getTitle();
      var isError = this.state.error || this.props.error || this.props.statusCode !== 200;
      return _react.default.createElement("div", {
        className: "app"
      }, title && _react.default.createElement(_head.default, null, _react.default.createElement("title", null, this.props.intl.formatMessage({
        id: title
      }))), this.state.isLoaded && this.state.isUpdateNeeded && _react.default.createElement("div", {
        className: this.props.classes.update
      }, _react.default.createElement(_Button.default, {
        variant: "text",
        color: "inherit",
        onClick: this.doUpdate
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "LAYOUT_UPDATE_READY_MESSAGE"
      }))), this.state.isLoaded && this.props.isDisconnected && _react.default.createElement(_Snackbar.default, {
        open: true,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        message: _react.default.createElement(_reactIntl.FormattedMessage, {
          id: "LAYOUT_NOT_CONNECTED_MESSAGE"
        })
      }), _react.default.createElement(_Hidden.default, {
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
        isAuthenticated: this.isAuthenticated(),
        user: this.getUser(),
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
        isAuthenticated: this.isAuthenticated(),
        user: this.getUser(),
        onMenuClick: this.handleSidebarClose
      }))), _react.default.createElement("main", {
        className: this.props.classes.main
      }, isError && _react.default.createElement(_ErrorMessageContainer.default, {
        statusCode: this.props.statusCode,
        error: this.state.error || this.props.error
      }), !isError && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_HeaderContainer.default, {
        isAuthenticated: this.isAuthenticated(),
        onSidebarToggle: this.handleSidebarToggle
      }), this.props.children)), this.props.isAuthModalOpen && _react.default.createElement(_AppAuthModalContainer.default, {
        providers: this.getProviders()
      }), _react.default.createElement(_reactToastify.ToastContainer, null));
    }
  }]);
  return Layout;
}(_react.default.Component);

var _default = Layout;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "xglJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("0T/a");
var newPromiseCapability = __webpack_require__("A8op");
var perform = __webpack_require__("dcnA");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "xmQw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xvxd":
/***/ (function(module, exports) {

module.exports = require("react-virtualized");

/***/ }),

/***/ "yFMe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "yIg3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

const tokenize = __webpack_require__("YXwE");
const validator = __webpack_require__("2bKT");
//let allCountries, iso2Lookup;
const { allCountries, iso2Lookup } = __webpack_require__("c4tK");

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
  let rules = {};
  for (let rule of tokenize(options, "\\", "|")) {
    let params = tokenize(rule, "\\", ":");
    if (!params.length) continue;
    let msg;
    if (params[0][0] === "!") msg = params.shift().slice(1);
    let command = params.shift();
    rules[command] = {
      msg,
      params
    };
  }

  value = _.isUndefined(value) ? "" : _.toString(value);

  let commands = _.keys(rules);
  let errors = [];
  if (validator.isEmpty(value)) {
    // when string is empty only "required" command is triggered
    if (_.includes(commands, "required")) {
      // optional first param is the name of other field that should
      // be non-empty for this to be triggered, always triggered otherwise
      let failed = true;
      if (
        allValues &&
        rules.required.params.length &&
        rules.required.params[0]
      ) {
        let other = allValues[rules.required.params[0]];
        if (!other || !other.length) failed = false;
      }
      if (failed) errors.push("ERROR_FIELD_REQUIRED");
    }
  } else {
    // all the other rules only apply to non-empty value
    for (let command of commands) {
      let success;
      let tmp;
      let search;
      let normalized;
      switch (command) {
        case "re":
          tmp = new RegExp(
            rules[command].params[0],
            rules[command].params[1] || undefined
          );
          success = value.match(tmp);
          if (!success)
            errors.push(rules[command].msg || "ERROR_INVALID_PATTERN");
          break;
        case "phone":
          // validate phone number in international format
          if (!validator.isEmpty(value)) {
            normalized = _.replace(value, /[^0-9]+/g, "");
            if (normalized.length !== 12) {
              errors.push(rules[command].msg || "ERROR_INVALID_PHONE");
            } else {
              search =
                allCountries &&
                iso2Lookup &&
                allCountries[iso2Lookup[allValues.country]];
              if (search && search.dialCode)
                success = _.startsWith(normalized, search.dialCode);
              else success = true;
              if (!success) {
                errors.push(
                  rules[command].msg || "ERROR_INVALID_PHONE_COUNTRY"
                );
              }
            }
          }
          break;
        case "email":
          // validate email
          if (!validator.isEmail(value))
            errors.push(rules[command].msg || "ERROR_INVALID_EMAIL");
          break;
        case "password":
          // validate password, first param is password length (6 by default)
          tmp = (rules[command].params.length && rules[command].params[0]) || 6;
          if (value.length < tmp)
            errors.push(rules[command].msg || "ERROR_INVALID_PASSWORD");
          break;
        case "credit_card":
          // validate credit card attribute set by first param ("number", "date" or "secret")
          normalized = _.replace(value, /[^0-9]+/g, "");
          switch (rules[command].params.length && rules[command].params[0]) {
            case "number":
              if (
                normalized.length !== 16 ||
                !validator.isCreditCard(normalized)
              ) {
                errors.push(
                  rules[command].msg || "ERROR_INVALID_CREDIT_CARD_NUMBER"
                );
              }
              break;
            case "date":
              if (normalized.length !== 4) {
                errors.push(
                  rules[command].msg || "ERROR_INVALID_CREDIT_CARD_DATE"
                );
              } else {
                tmp = [
                  parseInt(normalized.slice(0, 2)),
                  parseInt(normalized.slice(2))
                ];
                if (
                  tmp[0] < 1 ||
                  tmp[0] > 12 ||
                  tmp[1] < new Date().getFullYear() - 2000
                ) {
                  errors.push(
                    rules[command].msg || "ERROR_INVALID_CREDIT_CARD_DATE"
                  );
                }
              }
              break;
            case "secret":
              if (normalized.length !== 3) {
                errors.push(
                  rules[command].msg || "ERROR_INVALID_CREDIT_CARD_SECRET"
                );
              }
              break;
          }
          break;
        case "match":
          // this rule is triggered when field set by first param has other value than this one
          tmp = rules[command].params.length && rules[command].params[0];
          if (tmp && allValues && allValues[tmp] !== value)
            errors.push(rules[command].msg || "ERROR_MISMATCHED_VALUES");
          break;
      }
    }
  }

  return errors;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("icr7");

/***/ }),

/***/ "yboX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString.default)(str);
  options = options || {}; // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.

  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt

  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;
  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "yh8l":
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 11h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zm-13.869.143V13.2h3.504c-.175.857-1.051 2.571-3.504 2.571A3.771 3.771 0 0 1 4.365 12a3.771 3.771 0 0 1 3.766-3.771c1.227 0 2.015.514 2.453.942l1.664-1.542C11.198 6.6 9.796 6 8.131 6 4.715 6 2 8.657 2 12s2.715 6 6.131 6C11.635 18 14 15.6 14 12.171c0-.428 0-.685-.088-1.028h-5.78z\"></path></svg>"

/***/ }),

/***/ "ynsX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "z3MP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(date) {
  (0, _assertString.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "z8Sm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _merge = _interopRequireDefault(__webpack_require__("ARk6"));

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _includes = _interopRequireDefault(__webpack_require__("n1Tu"));

var _alpha = __webpack_require__("ZPM+");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decimalRegExp(options) {
  var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
  return regExp;
}

var default_decimal_options = {
  force_decimal: false,
  decimal_digits: '1,',
  locale: 'en-US'
};
var blacklist = ['', '-', '+'];

function isDecimal(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_decimal_options);

  if (options.locale in _alpha.decimal) {
    return !(0, _includes.default)(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
  }

  throw new Error("Invalid locale '".concat(options.locale, "'"));
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "zAiC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = _interopRequireDefault(__webpack_require__("h+QY"));

var _isFullWidth = __webpack_require__("ZNca");

var _isHalfWidth = __webpack_require__("/Kv2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

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

/***/ }),

/***/ "zmJW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Map");

/***/ })

/******/ });