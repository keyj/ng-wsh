(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WSH"] = factory();
	else
		root["WSH"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 131);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(41)('wks');
var uid = __webpack_require__(26);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(13);
var hide = __webpack_require__(11);
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
    if (own && key in exports) continue;
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(55);
var toPrimitive = __webpack_require__(37);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(80);
var defined = __webpack_require__(35);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(77)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(54)(String, 'String', function (iterated) {
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
/* 23 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(57);
var enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(35);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(109);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(111);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(79);
var enumBugKeys = __webpack_require__(42);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(36)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(58).appendChild(iframe);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys');
var uid = __webpack_require__(26);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(18);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(60);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(18);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(24);

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
/* 46 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(23);
var wksExt = __webpack_require__(47);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

var _from = __webpack_require__(120);

var _from2 = _interopRequireDefault(_from);

var _defineProperty = __webpack_require__(21);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }return arr2;
    } else {
        return (0, _from2.default)(arr);
    }
}

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Base = function () {
    function Base() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Base);

        this.debug = !!config.debug;
        this.eventHandlers = {};
    }

    _createClass(Base, [{
        key: "_log",
        value: function _log() {
            var _console;

            this.debug && (_console = console).log.apply(_console, arguments);
        }
    }, {
        key: "_trigger",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var _eventHandlers;

                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt("return", this.eventHandlers[event] && (_eventHandlers = this.eventHandlers)[event].apply(_eventHandlers, _toConsumableArray(args)));

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _trigger(_x2) {
                return _ref.apply(this, arguments);
            }

            return _trigger;
        }()
    }, {
        key: "on",
        value: function on(event, fn) {
            this.eventHandlers[event] = fn;
        }
    }]);

    return Base;
}();

exports.default = Base;

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports) {



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(23);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(56);
var hide = __webpack_require__(11);
var has = __webpack_require__(12);
var Iterators = __webpack_require__(18);
var $iterCreate = __webpack_require__(78);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(59);
var ITERATOR = __webpack_require__(3)('iterator');
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
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
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
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(36)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(14);
var arrayIndexOf = __webpack_require__(81)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(28);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(19);
var TAG = __webpack_require__(3)('toStringTag');
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(18);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(24);
var SPECIES = __webpack_require__(3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(13);
var invoke = __webpack_require__(89);
var html = __webpack_require__(58);
var cel = __webpack_require__(36);
var global = __webpack_require__(2);
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
  if (__webpack_require__(19)(process) == 'process') {
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
/* 65 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(45);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4);
var core = __webpack_require__(0);
var fails = __webpack_require__(16);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(46);
var createDesc = __webpack_require__(17);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(37);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(55);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(57);
var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(75);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(22);
__webpack_require__(43);
__webpack_require__(86);
__webpack_require__(93);
__webpack_require__(94);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(35);
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(38);
var descriptor = __webpack_require__(17);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(25);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);
var toLength = __webpack_require__(39);
var toAbsoluteIndex = __webpack_require__(82);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(84);
var step = __webpack_require__(85);
var Iterators = __webpack_require__(18);
var toIObject = __webpack_require__(14);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(54)(Array, 'Array', function (iterated, kind) {
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
/* 84 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(23);
var global = __webpack_require__(2);
var ctx = __webpack_require__(13);
var classof = __webpack_require__(60);
var $export = __webpack_require__(4);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(24);
var anInstance = __webpack_require__(87);
var forOf = __webpack_require__(88);
var speciesConstructor = __webpack_require__(63);
var task = __webpack_require__(64).set;
var microtask = __webpack_require__(90)();
var newPromiseCapabilityModule = __webpack_require__(45);
var perform = __webpack_require__(65);
var promiseResolve = __webpack_require__(66);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
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
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
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
  Internal.prototype = __webpack_require__(91)($Promise.prototype, {
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
__webpack_require__(27)($Promise, PROMISE);
__webpack_require__(92)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(67)(function (iter) {
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
/* 87 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(13);
var call = __webpack_require__(61);
var isArrayIter = __webpack_require__(62);
var anObject = __webpack_require__(5);
var toLength = __webpack_require__(39);
var getIterFn = __webpack_require__(44);
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
/* 89 */
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(64).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(19)(process) == 'process';

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
    var promise = Promise.resolve();
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(11);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(9);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(4);
var core = __webpack_require__(0);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(63);
var promiseResolve = __webpack_require__(66);

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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(45);
var perform = __webpack_require__(65);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(22);
module.exports = __webpack_require__(99);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var get = __webpack_require__(44);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(28);
var $keys = __webpack_require__(25);

__webpack_require__(70)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(28);
var $getPrototypeOf = __webpack_require__(59);

__webpack_require__(70)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(4);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(106).set });


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(8);
var anObject = __webpack_require__(5);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(13)(Function.call, __webpack_require__(71).f(Object.prototype, '__proto__').set, 2);
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(108);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(38) });


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
__webpack_require__(43);
module.exports = __webpack_require__(47).f('iterator');


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
__webpack_require__(53);
__webpack_require__(118);
__webpack_require__(119);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(56);
var META = __webpack_require__(114).KEY;
var $fails = __webpack_require__(16);
var shared = __webpack_require__(41);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(26);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(47);
var wksDefine = __webpack_require__(48);
var enumKeys = __webpack_require__(115);
var isArray = __webpack_require__(116);
var anObject = __webpack_require__(5);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(37);
var createDesc = __webpack_require__(17);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(117);
var $GOPD = __webpack_require__(71);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(25);
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
var USE_NATIVE = typeof $Symbol == 'function';
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
  __webpack_require__(73).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(46).f = $propertyIsEnumerable;
  __webpack_require__(72).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(23)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(26)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(72);
var pIE = __webpack_require__(46);
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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(19);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(14);
var gOPN = __webpack_require__(73).f;
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(121), __esModule: true };

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
__webpack_require__(122);
module.exports = __webpack_require__(0).Array.from;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(13);
var $export = __webpack_require__(4);
var toObject = __webpack_require__(28);
var call = __webpack_require__(61);
var isArrayIter = __webpack_require__(62);
var toLength = __webpack_require__(39);
var createProperty = __webpack_require__(123);
var getIterFn = __webpack_require__(44);

$export($export.S + $export.F * !__webpack_require__(67)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(17);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var templates = {
    inputCmd: function inputCmd(_ref) {
        var id = _ref.id;
        return "<div id=\"" + id + "\"><span class=\"prompt\"></span>&nbsp;<span class=\"input\"><span class=\"left\"></span><span class=\"cursor\"></span><span class=\"right\"></span></span></div>";
    },
    inputSearch: function inputSearch(_ref2) {
        var id = _ref2.id;
        return "<div id=\"" + id + "\">(reverse-i-search)`<span class=\"searchterm\"></span>':&nbsp;<span class=\"input\"><span class=\"left\"></span><span class=\"cursor\"></span><span class=\"right\"></span></span></div>";
    },
    suggest: function suggest(_ref3) {
        var suggestions = _ref3.suggestions;
        return "<div>" + suggestions.map(function (suggestion) {
            return "<div>" + suggestion + "</div>";
        }).join("") + "</div>";
    },
    prompt: function prompt(_ref4) {
        var node = _ref4.node;
        return "<span class=\"cmdPrompt\">" + node.path + " $</span>";
    }
};

exports.default = templates;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(69);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(20);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

var util = {
    escape: function escape(s) {
        return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    },
    bestMatch: function bestMatch(partial, possible) {
        var result = {
            completion: null,
            suggestions: []
        };

        if (!possible || possible.length === 0) {
            return result;
        }

        var common = "";

        if (!partial) {
            if (possible.length === 1) {
                result.completion = possible[0];
                result.suggestions = possible;
                return result;
            }

            if (!possible.every(function (x) {
                return possible[0][0] === x[0];
            })) {
                result.suggestions = possible;
                return result;
            }
        }

        for (var i = 0; i < possible.length; i++) {
            var option = possible[i];

            if (option.slice(0, partial.length) === partial) {
                result.suggestions.push(option);

                if (!common) {
                    common = option;
                } else if (option.slice(0, common.length) !== common) {
                    var j = partial.length;

                    while (j < common.length && j < option.length) {
                        if (common[j] !== option[j]) {
                            common = common.substr(0, j);
                            break;
                        }

                        j++;
                    }
                }
            }
        }

        result.completion = common.substr(partial.length);
        return result;
    },
    parseArgs: function parseArgs(rawArgs) {
        var cmdArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var cmdOpts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var argsList = rawArgs.filter(function (a) {
            return a[0] !== "-";
        });
        var optsList = rawArgs.filter(function (a) {
            return a[0] === "-";
        }).map(function (a) {
            return a.substr(1);
        });

        if (optsList.includes("h")) {
            throw new Error();
        }

        var opts = {};
        var args = {};

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (0, _getIterator3.default)(optsList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var name = _step.value;

                if (!cmdOpts[name]) {
                    throw new Error("Unknown option -" + name);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = (0, _getIterator3.default)((0, _keys2.default)(cmdOpts || {})), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _name = _step2.value;

                opts[_name] = optsList.includes(_name);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        if (cmdArgs) {
            for (var n = 0; n < cmdArgs.length; n++) {
                var rawName = cmdArgs[n];
                var optional = rawName[0] === "?";
                var _name2 = optional ? rawName.substr(1) : rawName;

                if (optional) {
                    if (argsList[n]) {
                        args[_name2] = argsList[n];
                    } else {
                        break;
                    }
                } else if (argsList[n]) {
                    args[_name2] = argsList[n];
                } else {
                    throw new Error("Missing parameter " + _name2);
                }
            }
        }

        return { opts: opts, args: args };
    }
};

exports.default = util;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CHARS;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = split;
// split.join = join


// Flags                        Characters
//             0         1         2         3         4         5
// ------------------------------------------------------------------------
//             \         '         "         normal    space     \n
//   e,sq      n/a       n/a       n/a       n/a       n/a       n/a
// 0 ue,sq     a \       suq       a "       a +       a _       EOF
// 1 e,dq      a \,ue    a \',ue   a ",ue    a \+,ue   a \_,ue   ue
// 2 ue,dq     e         a '       duq       a +       a _       EOF
// 3 e,uq      a \,ue    a \',ue   a \",ue   a \+,ue   a _,ue    ue
// 4 ue,uq     e         sq        dq        a +       tp        EOF

var MATRIX = {
  // object is more readable than multi-dim array.
  0: [a, suq, a, a, a, EOF],
  1: [eaue, aue, eaue, aue, aue, ue],
  2: [e, a, duq, a, a, EOF],
  3: [eaue, aue, aue, aue, eaue, ue],
  4: [e, sq, dq, a, tp, EOF]
};

// - a: add
// - e: turn on escape mode
// - ue: turn off escape mode
// - q: turn on quote mode
//   - sq: single quoted
//   - dq: double quoted
// - uq: turn off quote mode
// - tp: try to push if there is something in the stash
// - EOF: end of file(input)

var escaped = false; // 1
var single_quoted = false; // 2
var double_quoted = false; // 4
var ended = false;

var FLAGS = {
  2: 0,
  5: 1,
  4: 2,
  1: 3,
  0: 4
};

function y() {
  var sum = 0;

  if (escaped) {
    sum++;
  }

  if (single_quoted) {
    sum += 2;
  }

  if (double_quoted) {
    sum += 4;
  }

  return FLAGS[sum];
}

var BACK_SLASH = '\\';
var SINGLE_QUOTE = "'";
var DOUBLE_QUOTE = '"';
var WHITE_SPACE = ' ';
var CARRIAGE_RETURN = '\n';

function x() {
  return c in CHARS ? CHARS[c] : CHARS.NORMAL;
}

var CHARS = (_CHARS = {}, _defineProperty(_CHARS, BACK_SLASH, 0), _defineProperty(_CHARS, SINGLE_QUOTE, 1), _defineProperty(_CHARS, DOUBLE_QUOTE, 2), _defineProperty(_CHARS, 'NORMAL', 3), _defineProperty(_CHARS, WHITE_SPACE, 4), _defineProperty(_CHARS, CARRIAGE_RETURN, 5), _CHARS);

var c = '';
var stash = '';
var ret = [];

function reset() {
  escaped = false;
  single_quoted = false;
  double_quoted = false;
  ended = false;
  c = '';
  stash = '';
  ret.length = 0;
}

function a() {
  stash += c;
}

function sq() {
  single_quoted = true;
}

function suq() {
  single_quoted = false;
}

function dq() {
  double_quoted = true;
}

function duq() {
  double_quoted = false;
}

function e() {
  escaped = true;
}

function ue() {
  escaped = false;
}

// add a backslash and a normal char, and turn off escaping
function aue() {
  stash += BACK_SLASH + c;
  escaped = false;
}

// add a escaped char and turn off escaping
function eaue() {
  stash += c;
  escaped = false;
}

// try to push
function tp() {
  if (stash) {
    ret.push(stash);
    stash = '';
  }
}

function EOF() {
  ended = true;
}

function split(str) {
  if (typeof str !== 'string') {
    type_error('Str must be a string. Received ' + str, 'NON_STRING');
  }

  reset();

  var length = str.length;
  var i = -1;

  while (++i < length) {
    c = str[i];

    MATRIX[y()][x()]();

    if (ended) {
      break;
    }
  }

  if (single_quoted) {
    error('unmatched single quote', 'UNMATCHED_SINGLE');
  }

  if (double_quoted) {
    error('unmatched double quote', 'UNMATCHED_DOUBLE');
  }

  if (escaped) {
    error('unexpected end with \\', 'ESCAPED_EOF');
  }

  tp();

  return ret;
}

function error(message, code) {
  var err = new Error(message);
  err.code = code;
  throw err;
}

function type_error(message, code) {
  var err = new TypeError(message);
  err.code = code;
  throw err;
}

// function join (args, options = {}) {
//   const quote = options.quote || "'"

//   return args.map(function (arg) {
//     if (!arg) {
//       return
//     }

//     return /\c+/.test(arg)
//       // a b c -> 'a b c'
//       // a 'b' -> 'a \'b\''
//       ? quote + arg.replace("'", "\\'") + quote
//       : arg

//   }).join(WHITE_SPACE)
// }


/***/ }),
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(68);

var _stringify2 = _interopRequireDefault2(_stringify);

var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);

var _setPrototypeOf = __webpack_require__(30);

var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);

var _create = __webpack_require__(31);

var _create2 = _interopRequireDefault2(_create);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault2(_typeof2);

var _defineProperty = __webpack_require__(21);

var _defineProperty2 = _interopRequireDefault2(_defineProperty);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(49);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
}
/* global window */

var History = function (_Base) {
    _inherits(History, _Base);

    function History() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, History);

        var _this = _possibleConstructorReturn(this, (History.__proto__ || (0, _getPrototypeOf2.default)(History)).call(this, config));

        _this.history = config.history || [""];
        _this.cursor = config.cursor || 0;
        _this.searchCursor = _this.cursor;
        _this.lastSearchTerm = "";
        _this.storage = config.storage || window.localStorage;
        _this.key = config.key || "wsh.history";
        _this.suspended = false;

        _this._load();
        return _this;
    }

    _createClass(History, [{
        key: "_load",
        value: function _load() {
            if (!this.storage) {
                return;
            }

            try {
                var data = this.storage.getItem(this.key);

                if (data) {
                    this.history = JSON.parse(data);
                    this.searchCursor = this.cursor = this.history.length - 1;
                } else {
                    this._save();
                }
            } catch (error) {
                this._log("Error accessing storage", error);
            }
        }
    }, {
        key: "_save",
        value: function _save() {
            if (!this.storage) {
                return;
            }

            try {
                this.storage.setItem(this.key, (0, _stringify2.default)(this.history));
            } catch (error) {
                this._log("Error accessing storage", error);
            }
        }
    }, {
        key: "_setHistory",
        value: function _setHistory() {
            this.searchCursor = this.cursor;
            this.lastSearchTerm = "";

            return this.history[this.cursor];
        }
    }, {
        key: "update",
        value: function update(text) {
            this._log("updating history to " + text);
            this.history[this.cursor] = text;
            this._save();
        }
    }, {
        key: "suspend",
        value: function suspend() {
            this.suspended = true;
        }
    }, {
        key: "resume",
        value: function resume() {
            this.suspended = false;
        }
    }, {
        key: "accept",
        value: function accept(text) {
            if (this.suspended) {
                return this._log("history suspended " + text);
            }

            this._log("accepting history " + text);

            if (text) {
                var last = this.history.length - 1;

                if (this.cursor === last) {
                    this._log("we're at the end already, update last position");
                    this.history[this.cursor] = text;
                } else if (!this.history[last]) {
                    this._log("we're not at the end, but the end was blank, so update last position");
                    this.history[last] = text;
                } else {
                    this._log("appending to end");
                    this.history.push(text);
                }

                this.history.push("");
            }

            this.searchCursor = this.cursor = this.history.length - 1;
            this._save();
        }
    }, {
        key: "items",
        value: function items() {
            return this.history.slice(0, -1);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.history = [this.history[this.history.length - 1]];
            this._save();
        }
    }, {
        key: "hasNext",
        value: function hasNext() {
            return this.cursor < this.history.length - 1;
        }
    }, {
        key: "hasPrev",
        value: function hasPrev() {
            return this.cursor > 0;
        }
    }, {
        key: "prev",
        value: function prev() {
            --this.cursor;
            return this._setHistory();
        }
    }, {
        key: "next",
        value: function next() {
            ++this.cursor;
            return this._setHistory();
        }
    }, {
        key: "top",
        value: function top() {
            this.cursor = 0;
            return this._setHistory();
        }
    }, {
        key: "end",
        value: function end() {
            this.cursor = this.history.length - 1;
            return this._setHistory();
        }
    }, {
        key: "search",
        value: function search(term) {
            if (!term && !this.lastSearchTerm) {
                return null;
            }

            var iterations = this.history.length;

            if (term === this.lastSearchTerm) {
                this.searchCursor--;
                iterations--;
            } else if (!term) {
                term = this.lastSearchTerm;
            }

            this.lastSearchTerm = term;

            for (var n = 0; n < iterations; n++) {
                if (this.searchCursor < 0) {
                    this.searchCursor = this.history.length - 1;
                }

                var idx = this.history[this.searchCursor].indexOf(term);

                if (idx !== -1) {
                    return {
                        text: this.history[this.searchCursor],
                        cursoridx: idx,
                        term: term
                    };
                }

                this.searchCursor--;
            }

            return null;
        }
    }, {
        key: "applySearch",
        value: function applySearch() {
            if (!this.lastSearchTerm) {
                return null;
            }

            this._log("setting history to position " + this.searchCursor + "(" + this.cursor + "): " + this.history[this.searchCursor]);
            this.cursor = this.searchCursor;

            return this.history[this.cursor];
        }
    }]);

    return History;
}(_base2.default);

exports.default = History;

/***/ }),
/* 130 */,
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault2(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault2(_promise);

var _defineProperty = __webpack_require__(21);

var _defineProperty2 = _interopRequireDefault2(_defineProperty);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _shell2 = __webpack_require__(133);

var _shell3 = _interopRequireDefault(_shell2);

var _pathhandler = __webpack_require__(146);

var _pathhandler2 = _interopRequireDefault(_pathhandler);

var _templates = __webpack_require__(124);

var _templates2 = _interopRequireDefault(_templates);

var _util = __webpack_require__(125);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Terminal = function () {
    function Terminal(config) {
        var _this = this;

        _classCallCheck(this, Terminal);

        this.templates = _templates2.default;
        this.util = _util2.default;
        this.shell = new _shell3.default(config, this);
        this.pathhandler = new _pathhandler2.default(config, this.shell);
        this.pathhandler.current = {
            name: "",
            path: "/"
        };

        this.pathhandler.getNode = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(path) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt("return", config.getNode(path));

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();
        this.pathhandler.getChildNodes = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(node) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt("return", config.getChildNodes(node.path));

                            case 1:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this);
            }));

            return function (_x2) {
                return _ref2.apply(this, arguments);
            };
        }();
    }

    _createClass(Terminal, [{
        key: "current",
        value: function current() {
            return this.pathhandler.current;
        }
    }, {
        key: "completePath",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(path) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.pathhandler.pathCompletionHandler(null, path, null);

                            case 2:
                                return _context3.abrupt("return", _context3.sent);

                            case 3:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function completePath(_x3) {
                return _ref3.apply(this, arguments);
            }

            return completePath;
        }()
    }, {
        key: "log",
        value: function log(text) {
            this.shell.log(text);
        }
    }, {
        key: "setPrompt",
        value: function setPrompt(opts) {
            this.shell._renderPrompt(opts);
        }
    }, {
        key: "setCommandHandler",
        value: function setCommandHandler(name, cmdHandler) {
            this.shell.setCommandHandler(name, cmdHandler);
        }
    }, {
        key: "isActive",
        value: function isActive() {
            return this.shell.isActive();
        }
    }, {
        key: "activate",
        value: function activate() {
            this.shell.activate();
        }
    }, {
        key: "deactivate",
        value: function deactivate() {
            this.shell.deactivate();
        }
    }, {
        key: "on",
        value: function on() {
            var _shell;

            (_shell = this.shell).on.apply(_shell, arguments);
        }
    }]);

    return Terminal;
}();

exports.default = Terminal;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(68);

var _stringify2 = _interopRequireDefault2(_stringify);

var _getIterator2 = __webpack_require__(20);

var _getIterator3 = _interopRequireDefault2(_getIterator2);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault2(_regenerator);

var _keys = __webpack_require__(69);

var _keys2 = _interopRequireDefault2(_keys);

var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);

var _setPrototypeOf = __webpack_require__(30);

var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);

var _create = __webpack_require__(31);

var _create2 = _interopRequireDefault2(_create);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault2(_typeof2);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault2(_promise);

var _defineProperty = __webpack_require__(21);

var _defineProperty2 = _interopRequireDefault2(_defineProperty);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(49);

var _base2 = _interopRequireDefault(_base);

var _history = __webpack_require__(129);

var _history2 = _interopRequireDefault(_history);

var _readline = __webpack_require__(134);

var _readline2 = _interopRequireDefault(_readline);

var _stream = __webpack_require__(137);

var _stream2 = _interopRequireDefault(_stream);

var _templates = __webpack_require__(124);

var _templates2 = _interopRequireDefault(_templates);

var _util = __webpack_require__(125);

var _util2 = _interopRequireDefault(_util);

var _argvSplit = __webpack_require__(126);

var _argvSplit2 = _interopRequireDefault(_argvSplit);

var _clear = __webpack_require__(138);

var _clear2 = _interopRequireDefault(_clear);

var _help = __webpack_require__(139);

var _help2 = _interopRequireDefault(_help);

var _history3 = __webpack_require__(140);

var _history4 = _interopRequireDefault(_history3);

var _grep = __webpack_require__(141);

var _grep2 = _interopRequireDefault(_grep);

var _echo = __webpack_require__(142);

var _echo2 = _interopRequireDefault(_echo);

var _tail = __webpack_require__(143);

var _tail2 = _interopRequireDefault(_tail);

var _head = __webpack_require__(144);

var _head2 = _interopRequireDefault(_head);

var _default = __webpack_require__(145);

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
}
/* global document */

var Shell = function (_Base) {
    _inherits(Shell, _Base);

    function Shell(config, terminal) {
        _classCallCheck(this, Shell);

        var _this = _possibleConstructorReturn(this, (Shell.__proto__ || (0, _getPrototypeOf2.default)(Shell)).call(this, config));

        _this.terminal = terminal;
        _this.prompt = config.prompt || "wsh $";
        _this.shellViewId = config.shellViewId || "shell-view";
        _this.shellPanelId = config.shellPanelId || "shell-panel";
        _this.inputId = config.inputId || "shell-cli";
        _this.blinktime = config.blinktime || 500;
        _this.history = config.history || new _history2.default(config);
        _this.readline = config.readline || new _readline2.default({ debug: config.debug, history: _this.history });
        _this.active = false;
        _this.cursorVisible = false;
        _this.cmdHandlers = {};
        _this.line = {
            text: "",
            cursor: 0
        };
        _this.searchMatch = "";
        _this.view = null;
        _this.panel = null;
        _this.initialized = null;
        _this.obscure = null;
        _this.executing = [];
        _this.stdout = new _stream2.default(false);
        _this.stderr = new _stream2.default(false);
        _this.stdin = new _stream2.default(false);
        _this.promptRenderer = function () {
            return _this.prompt;
        };

        _this.setCommandHandler("clear", _clear2.default);
        _this.setCommandHandler("help", _help2.default);
        _this.setCommandHandler("history", _history4.default);
        _this.setCommandHandler("grep", _grep2.default);
        _this.setCommandHandler("echo", _echo2.default);
        _this.setCommandHandler("tail", _tail2.default);
        _this.setCommandHandler("head", _head2.default);
        _this.setCommandHandler("_default", _default2.default);

        _this._load();
        _this._readStdout();
        _this._readStderr();
        return _this;
    }

    _createClass(Shell, [{
        key: "_readStdout",
        value: function _readStdout() {
            var _this2 = this;

            this.stdout.on("data", function (data) {
                _this2.log(data);
            });
        }
    }, {
        key: "_readStderr",
        value: function _readStderr() {
            var _this3 = this;

            this.stderr.on("data", function (data) {
                _this3.log(data);
            });
        }
    }, {
        key: "isActive",
        value: function isActive() {
            return this.readline.isActive();
        }
    }, {
        key: "activate",
        value: function activate() {
            this.readline.activate();
        }
    }, {
        key: "deactivate",
        value: function deactivate() {
            this._log("deactivating");
            this.active = false;
            this.readline.deactivate();
        }
    }, {
        key: "setCommandHandler",
        value: function setCommandHandler(cmd, cmdHandler) {
            this.cmdHandlers[cmd] = cmdHandler;
        }
    }, {
        key: "getCommandHandler",
        value: function getCommandHandler(cmd) {
            return this.cmdHandlers[cmd];
        }
    }, {
        key: "setDefaultPromptRenderer",
        value: function setDefaultPromptRenderer(renderFn) {
            this.promptRenderer = renderFn;
        }
    }, {
        key: "setPrompt",
        value: function setPrompt(prompt) {
            this.prompt = prompt;

            if (!this.active) {
                return;
            }

            this.refresh();
        }
    }, {
        key: "render",
        value: function render() {
            var text = this.line.text || "";
            var cursorIdx = this.line.cursor || 0;

            if (this.searchMatch) {
                cursorIdx = this.searchMatch.cursoridx || 0;
                text = this.searchMatch.text || "";
                document.querySelector("#" + this.inputId + " .searchterm").textContent = this.searchMatch.term;
            }

            var left = _util2.default.escape(text.substr(0, cursorIdx)).replace(/ /g, "&nbsp;");
            var cursor = text.substr(cursorIdx, 1);
            var right = _util2.default.escape(text.substr(cursorIdx + 1)).replace(/ /g, "&nbsp;");

            var elCursor = document.querySelector("#" + this.inputId + " .input .cursor");
            var elPrompt = document.querySelector("#" + this.inputId + " .prompt");
            var elLeft = document.querySelector("#" + this.inputId + " .input .left");
            var elRight = document.querySelector("#" + this.inputId + " .input .right");

            elPrompt && (elPrompt.innerHTML = this.prompt);
            elLeft && (elLeft.innerHTML = left);
            if (elCursor) {
                if (!cursor) {
                    elCursor.innerHTML = "&nbsp;";
                    elCursor.style.textDecoration = "underline";
                } else {
                    elCursor.textContent = cursor;
                    elCursor.style.textDecoration = "underline";
                }
            }

            elRight && (elRight.innerHTML = right);
            this.cursorVisible = true;
            this.scrollToBottom();
            this._blinkCursor();
            this._log("rendered '" + text + "' w/ cursor at " + cursorIdx);
        }
    }, {
        key: "refresh",
        value: function refresh() {
            document.getElementById(this.inputId).outerHTML = _templates2.default.inputCmd({ id: this.inputId });
            this.render();
            this._log("refreshed " + this.inputId);
        }
    }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
            this.panel.scrollTop = this.view.offsetHeight;
        }
    }, {
        key: "_createElement",
        value: function _createElement(html) {
            var el = document.createElement("span");
            el.innerHTML = html;

            if (el.childNodes.length > 1) {
                return el;
            }

            return el.firstChild;
        }
    }, {
        key: "_commands",
        value: function _commands() {
            return (0, _keys2.default)(this.cmdHandlers).filter(function (x) {
                return x[0] !== "_";
            });
        }
    }, {
        key: "_blinkCursor",
        value: function _blinkCursor() {
            var _this4 = this;

            if (!this.active || this.blinkTimer) {
                return;
            }

            this.blinkTimer = setTimeout(function () {
                _this4.blinkTimer = null;

                if (!_this4.active) {
                    return;
                }

                _this4.cursorVisible = !_this4.cursorVisible;

                var elCursor = document.querySelector("#" + _this4.inputId + " .input .cursor");

                if (elCursor) {
                    if (_this4.cursorVisible) {
                        elCursor.style.textDecoration = "underline";
                    } else {
                        elCursor.style.textDecoration = "";
                    }

                    _this4._blinkCursor();
                }
            }, this.blinktime);
        }
    }, {
        key: "_stopBlinkCursor",
        value: function _stopBlinkCursor() {
            var elCursor = document.querySelector("#" + this.inputId + " .input .cursor");
            elCursor && (elCursor.style.textDecoration = "");
            clearTimeout(this.blinkTimer);
            this.blinkTimer = null;
        }
    }, {
        key: "_getHandler",
        value: function _getHandler(cmd) {
            return this.cmdHandlers[cmd] || this.cmdHandlers._default;
        }
    }, {
        key: "log",
        value: function log(output) {
            if (output) {
                document.getElementById(this.shellViewId).appendChild(this._createElement(output));
                this.scrollToBottom();
            }
        }
    }, {
        key: "_renderHelp",
        value: function _renderHelp(cmd, cmdArgs, cmdOpts, cmdDescription) {
            var error = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            var args = (cmdArgs || []).map(function (a) {
                return a[0] === "?" ? "[" + a.substr(1) + "]" : "&lt;" + a + "&gt;";
            });
            var opts = (0, _keys2.default)(cmdOpts || {}).map(function (o) {
                return "  -" + o + "  " + cmdOpts[o];
            });
            var err = error && error.message ? "<span class=\"error\">" + error + "</span>\n" : "";

            return err + "\nUsage: " + cmd + " [options] " + args.join(" ") + "\n\n" + cmdDescription + "\n\nOptions:\n  -h  Print help\n" + opts.join("\n");
        }
    }, {
        key: "_freezePrompt",
        value: function _freezePrompt() {
            this._stopBlinkCursor();

            var elCursor = document.querySelector("#" + this.inputId + " .input .cursor");
            var elInput = document.getElementById(this.inputId);

            elCursor && (elCursor.style.textDecoration = "");
            elInput && elInput.removeAttribute("id");
        }
    }, {
        key: "_renderPrompt",
        value: function _renderPrompt() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this._freezePrompt();
            this.obscure = !!opts.obscure;

            var elShellView = document.getElementById(this.shellViewId);

            elShellView.appendChild(this._createElement(_templates2.default.inputCmd({ id: this.inputId })));

            this.setPrompt(opts.prompt || this.promptRenderer());

            this._blinkCursor();
        }
    }, {
        key: "_renderOutput",
        value: function _renderOutput(output) {
            this._freezePrompt();

            this.log(output);

            this._renderPrompt();
        }
    }, {
        key: "_activateShell",
        value: function _activateShell() {
            this._log("activating shell");

            if (!this.view) {
                this.view = document.getElementById(this.shellViewId);
            }

            if (!this.panel) {
                this.panel = document.getElementById(this.shellPanelId);
            }

            this._trigger("activating");

            this._renderPrompt();

            this.refresh();
            this.active = true;

            this._trigger("activate");
        }
    }, {
        key: "clear",
        value: function clear() {
            document.getElementById(this.shellViewId).innerHTML = "";
        }
    }, {
        key: "_parseCommandLine",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(cmdline) {
                var cmdtexts, cmds, pipe, n, isLast, cmdtext, parts, cmdName, cmdArgs, handler, streams, parsed, help;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                cmdtexts = cmdline.split("|");
                                cmds = [];
                                pipe = this.stdin;
                                n = 0;

                            case 4:
                                if (!(n < cmdtexts.length)) {
                                    _context.next = 37;
                                    break;
                                }

                                isLast = n === cmdtexts.length - 1;
                                cmdtext = cmdtexts[n];
                                parts = [];
                                _context.prev = 8;

                                parts = (0, _argvSplit2.default)(cmdtext);
                                _context.next = 17;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context["catch"](8);
                                _context.next = 16;
                                return this.stderr.write("Unable to parse command: " + _context.t0.message);

                            case 16:
                                return _context.abrupt("return", []);

                            case 17:
                                cmdName = parts[0];
                                cmdArgs = parts.slice(1);
                                handler = this._getHandler(cmdName);
                                streams = {
                                    stdout: this.stdout,
                                    stdin: pipe,
                                    stderr: this.stderr
                                };

                                if (!isLast) {
                                    pipe = streams.stdout = new _stream2.default();
                                }

                                parsed = {};
                                _context.prev = 23;

                                parsed = _util2.default.parseArgs(cmdArgs, handler.args || [], handler.opts || {});
                                _context.next = 33;
                                break;

                            case 27:
                                _context.prev = 27;
                                _context.t1 = _context["catch"](23);
                                help = this._renderHelp(cmdName, handler.args || [], handler.opts || {}, handler.desc || "", _context.t1);
                                _context.next = 32;
                                return this.stderr.write(help);

                            case 32:
                                return _context.abrupt("return", []);

                            case 33:

                                cmds.push({
                                    cmdtext: cmdtext,
                                    cmdName: cmdName,
                                    streams: streams,
                                    handler: handler,
                                    opts: parsed.opts,
                                    args: parsed.args
                                });

                            case 34:
                                n++;
                                _context.next = 4;
                                break;

                            case 37:
                                return _context.abrupt("return", cmds);

                            case 38:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[8, 12], [23, 27]]);
            }));

            function _parseCommandLine(_x3) {
                return _ref.apply(this, arguments);
            }

            return _parseCommandLine;
        }()
    }, {
        key: "_load",
        value: function _load() {
            var _this5 = this;

            this.readline.on("eot", function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                _this5._trigger.apply(_this5, ["eot"].concat(args));
            });

            this.readline.on("activate", function () {
                if (_this5.initialized) {
                    _this5.initialized = true;
                    _this5._trigger("initialize", _this5._activateShell.bind(_this5));
                }

                return _this5._activateShell();
            });

            this.readline.on("deactivate", function () {
                _this5._trigger("deactivate");
            });

            this.readline.on("change", function (line) {
                _this5.line = line;

                if (_this5.obscure) {
                    _this5.line.text = _this5.line.text.replace(/./g, "*");
                }

                _this5.render();
            });

            this.readline.on("clear", function () {
                _this5.clear();
                _this5._renderOutput();
            });

            this.readline.on("searchStart", function () {
                document.getElementById(_this5.inputId).outerHTML = _templates2.default.inputSearch({ id: _this5.inputId });
                _this5._log("started search");
            });

            this.readline.on("searchEnd", function () {
                document.getElementById(_this5.inputId).outerHTML = _templates2.default.inputSearch({ id: _this5.inputId });
                _this5.searchMatch = null;
                _this5.render();
                _this5._log("ended search");
            });

            this.readline.on("searchChange", function (match) {
                _this5.searchMatch = match;
                _this5.render();
            });

            this.readline.on("enter", function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(cmdtext) {
                    var promises;
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (!(_this5.executing.length > 0)) {
                                        _context2.next = 3;
                                        break;
                                    }

                                    _this5._freezePrompt();
                                    return _context2.abrupt("return", _this5.stdin.write(cmdtext));

                                case 3:

                                    _this5._log("got command: " + cmdtext);

                                    if (cmdtext) {
                                        _context2.next = 7;
                                        break;
                                    }

                                    _this5._renderOutput();
                                    return _context2.abrupt("return");

                                case 7:

                                    _this5._freezePrompt();
                                    _this5.history.suspend();

                                    _context2.next = 11;
                                    return _this5._parseCommandLine(cmdtext);

                                case 11:
                                    _this5.executing = _context2.sent;

                                    if (!(_this5.executing.length === 0)) {
                                        _context2.next = 15;
                                        break;
                                    }

                                    _this5.history.resume();
                                    return _context2.abrupt("return", _this5._renderPrompt());

                                case 15:

                                    _this5.executing = _this5.executing.reverse();

                                    promises = _this5.executing.map(function (cmd) {
                                        return cmd.handler.exec(_this5.terminal, cmd.streams, cmd.cmdName, cmd.opts, cmd.args).then(function () {
                                            cmd.streams.stdout.isPipe() && cmd.streams.stdout.close();
                                            return null;
                                        }).catch(function (error) {
                                            cmd.streams.stdout.isPipe() && cmd.streams.stdout.close();
                                            return _this5.stderr.write("Command failed: " + error.message + "\n");
                                        });
                                    });

                                    _promise2.default.all(promises).then(function () {
                                        _this5.executing.length = 0;
                                        _this5.history.resume();
                                        _this5._renderPrompt();
                                    }).catch(function (error) {
                                        _this5.executing.length = 0;
                                        console.error(error);
                                        _this5.history.resume();
                                        _this5._renderPrompt();
                                    });

                                case 18:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this5);
                }));

                return function (_x4) {
                    return _ref2.apply(this, arguments);
                };
            }());

            this.readline.on("cancel", _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, cmd;

                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context3.prev = 3;

                                for (_iterator = (0, _getIterator3.default)(_this5.executing); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    cmd = _step.value;

                                    cmd.streams.stdin.abort();
                                }
                                _context3.next = 11;
                                break;

                            case 7:
                                _context3.prev = 7;
                                _context3.t0 = _context3["catch"](3);
                                _didIteratorError = true;
                                _iteratorError = _context3.t0;

                            case 11:
                                _context3.prev = 11;
                                _context3.prev = 12;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 14:
                                _context3.prev = 14;

                                if (!_didIteratorError) {
                                    _context3.next = 17;
                                    break;
                                }

                                throw _iteratorError;

                            case 17:
                                return _context3.finish(14);

                            case 18:
                                return _context3.finish(11);

                            case 19:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this5, [[3, 7, 11, 19], [12,, 14, 18]]);
            })));

            this.readline.on("completion", function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(line) {
                    var text, parts, cmdName, handler, argName, args, match;
                    return _regenerator2.default.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    if (line) {
                                        _context4.next = 2;
                                        break;
                                    }

                                    return _context4.abrupt("return");

                                case 2:
                                    text = line.text.substr(0, line.cursor).split("|").pop().replace(/^\s+/g, "");
                                    parts = void 0;
                                    _context4.prev = 4;

                                    parts = (0, _argvSplit2.default)(text);
                                    _context4.next = 11;
                                    break;

                                case 8:
                                    _context4.prev = 8;
                                    _context4.t0 = _context4["catch"](4);
                                    return _context4.abrupt("return");

                                case 11:
                                    cmdName = parts.shift() || "";

                                    _this5._log("getting completion handler for " + cmdName);
                                    handler = _this5._getHandler(cmdName);

                                    if (!(handler !== _this5.cmdHandlers._default && cmdName && cmdName === text)) {
                                        _context4.next = 17;
                                        break;
                                    }

                                    _this5._log("valid cmd, no args: append space");
                                    // the text to complete is just a valid command, append a space
                                    return _context4.abrupt("return", " ");

                                case 17:
                                    if (handler.completion) {
                                        _context4.next = 20;
                                        break;
                                    }

                                    _this5._log("no completion method");
                                    // handler has no completion function, so we can't complete
                                    return _context4.abrupt("return");

                                case 20:
                                    argName = null;

                                    if (!(handler !== _this5.cmdHandlers._default)) {
                                        _context4.next = 29;
                                        break;
                                    }

                                    args = parts.filter(function (a) {
                                        return a[0] !== "-";
                                    }); // Remove flags

                                    _this5._log("args", args);

                                    argName = handler.args[Math.max(0, args.length - 1)];

                                    _this5._log("argName", argName);

                                    if (argName) {
                                        _context4.next = 28;
                                        break;
                                    }

                                    return _context4.abrupt("return");

                                case 28:

                                    argName = argName[0] === "?" ? argName.substr(1) : argName;

                                case 29:

                                    _this5._log("calling completion handler for " + cmdName);

                                    _context4.prev = 30;
                                    _context4.next = 33;
                                    return handler.completion(_this5.terminal, cmdName, argName, parts.pop(), line);

                                case 33:
                                    match = _context4.sent;

                                    _this5._log("completion: " + (0, _stringify2.default)(match));

                                    if (match) {
                                        _context4.next = 37;
                                        break;
                                    }

                                    return _context4.abrupt("return");

                                case 37:

                                    if (match.suggestions && match.suggestions.length > 1) {
                                        _this5._renderOutput(_templates2.default.suggest({ suggestions: match.suggestions }));
                                    }

                                    return _context4.abrupt("return", match.completion);

                                case 41:
                                    _context4.prev = 41;
                                    _context4.t1 = _context4["catch"](30);

                                    _this5._log(_context4.t1);

                                case 44:
                                    return _context4.abrupt("return", []);

                                case 45:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, _this5, [[4, 8], [30, 41]]);
                }));

                return function (_x5) {
                    return _ref4.apply(this, arguments);
                };
            }());
        }
    }]);

    return Shell;
}(_base2.default);

exports.default = Shell;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);

var _setPrototypeOf = __webpack_require__(30);

var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);

var _create = __webpack_require__(31);

var _create2 = _interopRequireDefault2(_create);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault2(_typeof2);

var _defineProperty = __webpack_require__(21);

var _defineProperty2 = _interopRequireDefault2(_defineProperty);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(49);

var _base2 = _interopRequireDefault(_base);

var _history = __webpack_require__(129);

var _history2 = _interopRequireDefault(_history);

var _killring = __webpack_require__(135);

var _killring2 = _interopRequireDefault(_killring);

var _keys = __webpack_require__(136);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
}
/* global window */

var ReadLine = function (_Base) {
    _inherits(ReadLine, _Base);

    function ReadLine() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ReadLine);

        var _this = _possibleConstructorReturn(this, (ReadLine.__proto__ || (0, _getPrototypeOf2.default)(ReadLine)).call(this, config));

        _this.history = config.history || new _history2.default(config);
        _this.killring = config.killring || new _killring2.default(config);
        _this.cursor = 0;
        _this.boundToElement = !!config.element;
        _this.element = config.element || window;
        _this.active = false;
        _this.inSearch = false;
        _this.searchMatch;
        _this.lastSearchText = "";
        _this.text = "";
        _this.cursor = 0;
        _this.lastCmd;
        _this.completionActive;
        _this.cmdQueue = [];
        _this.suspended = false;
        _this.cmdMap = {
            complete: _this._cmdComplete.bind(_this),
            done: _this._cmdDone.bind(_this),
            noop: _this._cmdNoOp.bind(_this),
            historyTop: _this._cmdHistoryTop.bind(_this),
            historyEnd: _this._cmdHistoryEnd.bind(_this),
            historyNext: _this._cmdHistoryNext.bind(_this),
            historyPrevious: _this._cmdHistoryPrev.bind(_this),
            end: _this._cmdEnd.bind(_this),
            home: _this._cmdHome.bind(_this),
            left: _this._cmdLeft.bind(_this),
            right: _this._cmdRight.bind(_this),
            cancel: _this._cmdCancel.bind(_this),
            "delete": _this._cmdDeleteChar.bind(_this),
            backspace: _this._cmdBackspace.bind(_this),
            killEof: _this._cmdKillToEOF.bind(_this),
            killWordback: _this._cmdKillWordBackward.bind(_this),
            killWordForward: _this._cmdKillWordForward.bind(_this),
            yank: _this._cmdYank.bind(_this),
            clear: _this._cmdClear.bind(_this),
            search: _this._cmdReverseSearch.bind(_this),
            wordBack: _this._cmdBackwardWord.bind(_this),
            wordForward: _this._cmdForwardWord.bind(_this),
            yankRotate: _this._cmdRotate.bind(_this),
            esc: _this._cmdEsc.bind(_this)
        };
        _this.keyMap = {
            "default": {},
            "control": {},
            "meta": {}
        };

        _this.bind(_keys2.default.Backspace, "default", "backspace");
        _this.bind(_keys2.default.Tab, "default", "complete");
        _this.bind(_keys2.default.Enter, "default", "done");
        _this.bind(_keys2.default.Escape, "default", "esc");
        _this.bind(_keys2.default.PageUp, "default", "historyTop");
        _this.bind(_keys2.default.PageDown, "default", "historyEnd");
        _this.bind(_keys2.default.End, "default", "end");
        _this.bind(_keys2.default.Home, "default", "home");
        _this.bind(_keys2.default.Left, "default", "left");
        _this.bind(_keys2.default.Up, "default", "historyPrevious");
        _this.bind(_keys2.default.Right, "default", "right");
        _this.bind(_keys2.default.Down, "default", "historyNext");
        _this.bind(_keys2.default.Delete, "default", "delete");
        _this.bind(_keys2.default.CapsLock, "default", "noop");
        _this.bind(_keys2.default.Pause, "default", "noop");
        _this.bind(_keys2.default.Insert, "default", "noop");

        _this.bind("A", "control", "home");
        _this.bind("B", "control", "left");
        _this.bind("C", "control", "cancel");
        _this.bind("D", "control", "delete");
        _this.bind("E", "control", "end");
        _this.bind("F", "control", "right");
        _this.bind("P", "control", "historyPrevious");
        _this.bind("N", "control", "historyNext");
        _this.bind("K", "control", "killEof");
        _this.bind("Y", "control", "yank");
        _this.bind("L", "control", "clear");
        _this.bind("R", "control", "search");

        _this.bind(_keys2.default.Backspace, "meta", "killWordback");
        _this.bind("B", "meta", "wordBack");
        _this.bind("D", "meta", "killWordForward");
        _this.bind("F", "meta", "wordForward");
        _this.bind("Y", "meta", "yankRotate");

        if (_this.boundToElement) {
            _this.attach(_this.element);
        } else {
            _this._subscribeToKeys();
        }
        return _this;
    }

    _createClass(ReadLine, [{
        key: "isActive",
        value: function isActive() {
            return this.active;
        }
    }, {
        key: "activate",
        value: function activate() {
            this.active = true;
            this._trigger("activate");
        }
    }, {
        key: "deactivate",
        value: function deactivate() {
            this.active = false;
            this._trigger("deactivate");
        }
    }, {
        key: "bind",
        value: function bind(key, modifier, action) {
            var cmd = this.cmdMap[action];

            this._log("Bind key " + key + " with modifier " + modifier + " to action " + action);

            if (!cmd) {
                return;
            }

            if (typeof key === "number") {
                this.keyMap[modifier || "default"][key] = cmd;
            } else {
                this.keyMap[modifier || "default"][key.charCodeAt()] = cmd;
                this.keyMap[modifier || "default"][key.toLowerCase().charCodeAt()] = cmd;
            }
        }
    }, {
        key: "unbind",
        value: function unbind(key) {
            var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";

            this._log("Unbind key " + key + " with modifier " + modifier);

            var code = typeof key === "number" ? key : key.charCodeAt();
            delete this.keyMap[modifier][code];
        }
    }, {
        key: "attach",
        value: function attach(el) {
            if (this.element) {
                this.detach();
            }

            this._log("attaching", el);

            this.element = el;
            this.boundToElement = true;

            this._addEvent(this.element, "focus", this.activate.bind(this));
            this._addEvent(this.element, "blur", this.deactivate.bind(this));
            this._subscribeToKeys();
        }
    }, {
        key: "detach",
        value: function detach() {
            this._this._removeEvent(this.element, "focus", this.activate.bind(this));
            this._this._removeEvent(this.element, "blur", this.deactivate.bind(this));

            this.element = null;
            this.boundToElement = false;
        }
    }, {
        key: "getLine",
        value: function getLine() {
            return {
                text: this.text,
                cursor: this.cursor
            };
        }
    }, {
        key: "setLine",
        value: function setLine(line) {
            this.text = line.text;
            this.cursor = line.cursor;
            this._refresh();
        }
    }, {
        key: "_addEvent",
        value: function _addEvent(element, name, callback) {
            if (element.addEventListener) {
                element.addEventListener(name, callback, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + name, callback);
            }
        }
    }, {
        key: "_removeEvent",
        value: function _removeEvent(element, name, callback) {
            if (element.removeEventListener) {
                element.removeEventListener(name, callback, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + name, callback);
            }
        }
    }, {
        key: "_getKeyInfo",
        value: function _getKeyInfo(e) {
            var code = e.keyCode || e.charCode;
            var c = String.fromCharCode(code);

            return {
                code: code,
                character: c,
                shift: e.shiftKey,
                ctrl: e.ctrlKey && !e.altKey,
                alt: e.altKey && !e.ctrlKey,
                meta: e.metaKey,
                isChar: true
            };
        }
    }, {
        key: "_queue",
        value: function _queue(cmd) {
            if (this.suspended) {
                this.cmdQueue.push(cmd);
                return;
            }

            this._call(cmd);
        }
    }, {
        key: "_call",
        value: function _call(cmd) {
            this._log("calling: " + cmd.name + ", previous: " + this.lastCmd);

            if (this.inSearch && cmd.name !== "cmdKeyPress" && cmd.name !== "cmdReverseSearch") {
                this.inSearch = false;

                if (cmd.name === "cmdEsc") {
                    this.searchMatch = null;
                }

                if (this.searchMatch) {
                    if (this.searchMatch.text) {
                        this.cursor = this.searchMatch.cursoridx;
                        this.text = this.searchMatch.text;
                        this.history.applySearch();
                    }

                    this.searchMatch = null;
                }

                this._trigger("searchEnd");
            }
            if (!this.inSearch && this.killring.isinkill() && cmd.name.substr(0, 7) !== "cmdKill") {
                this.killring.commit();
            }
            this.lastCmd = cmd.name;
            cmd();
        }
    }, {
        key: "_suspend",
        value: function _suspend(asyncCall) {
            this.suspended = true;
            asyncCall(this._resume.bind(this));
        }
    }, {
        key: "_resume",
        value: function _resume() {
            var cmd = this.cmdQueue.shift();

            if (!cmd) {
                this.suspended = false;
                return;
            }

            this._call(cmd);
            this._resume();
        }
    }, {
        key: "_cmdNoOp",
        value: function _cmdNoOp() {
            // no-op, used for keys we capture and ignore
        }
    }, {
        key: "_cmdEsc",
        value: function _cmdEsc() {
            // no-op, only has an effect on reverse search and that action was taken in this._call()
        }
    }, {
        key: "_cmdBackspace",
        value: function _cmdBackspace() {
            if (this.cursor === 0) {
                return;
            }

            --this.cursor;
            this.text = this._remove(this.text, this.cursor, this.cursor + 1);
            this._refresh();
        }
    }, {
        key: "_cmdComplete",
        value: function _cmdComplete() {
            var _this2 = this;

            if (!this.eventHandlers.completion) {
                return;
            }

            this._suspend(function (resumeCallback) {
                _this2._trigger("completion", _this2.getLine()).then(function (completion) {
                    if (completion) {
                        _this2.text = _this2._insert(_this2.text, _this2.cursor, completion);
                        _this2._updateCursor(_this2.cursor + completion.length);
                    }

                    _this2.completionActive = true;
                    resumeCallback();
                });
            });
        }
    }, {
        key: "_cmdDone",
        value: function _cmdDone() {
            var _this3 = this;

            var text = this.text;

            this.history.accept(text);
            this.text = "";
            this.cursor = 0;

            if (!this.eventHandlers.enter) {
                return;
            }

            this._suspend(function (resumeCallback) {
                _this3._trigger("enter", text).then(function (text) {
                    if (text) {
                        _this3.text = text;
                        _this3.cursor = _this3.text.length;
                    }

                    _this3._trigger("change", _this3.getLine());

                    resumeCallback();
                });
            });
        }
    }, {
        key: "_cmdEnd",
        value: function _cmdEnd() {
            this._updateCursor(this.text.length);
        }
    }, {
        key: "_cmdHome",
        value: function _cmdHome() {
            this._updateCursor(0);
        }
    }, {
        key: "_cmdLeft",
        value: function _cmdLeft() {
            if (this.cursor === 0) {
                return;
            }

            this._updateCursor(this.cursor - 1);
        }
    }, {
        key: "_cmdRight",
        value: function _cmdRight() {
            if (this.cursor === this.text.length) {
                return;
            }

            this._updateCursor(this.cursor + 1);
        }
    }, {
        key: "_cmdBackwardWord",
        value: function _cmdBackwardWord() {
            if (this.cursor === 0) {
                return;
            }

            this._updateCursor(this._findBeginningOfPreviousWord());
        }
    }, {
        key: "_cmdForwardWord",
        value: function _cmdForwardWord() {
            if (this.cursor === this.text.length) {
                return;
            }

            this._updateCursor(this._findEndOfCurrentWord());
        }
    }, {
        key: "_cmdHistoryPrev",
        value: function _cmdHistoryPrev() {
            if (!this.history.hasPrev()) {
                return;
            }

            this._getHistory(this.history.prev.bind(this.history));
        }
    }, {
        key: "_cmdHistoryNext",
        value: function _cmdHistoryNext() {
            if (!this.history.hasNext()) {
                return;
            }

            this._getHistory(this.history.next.bind(this.history));
        }
    }, {
        key: "_cmdHistoryTop",
        value: function _cmdHistoryTop() {
            this._getHistory(this.history.top.bind(this.history));
        }
    }, {
        key: "_cmdHistoryEnd",
        value: function _cmdHistoryEnd() {
            this._getHistory(this.history.end.bind(this.history));
        }
    }, {
        key: "_cmdDeleteChar",
        value: function _cmdDeleteChar() {
            if (this.text.length === 0) {
                if (this.eventHandlers.eot) {
                    return this._trigger("eot");
                }
            }

            if (this.cursor === this.text.length) {
                return;
            }

            this.text = this._remove(this.text, this.cursor, this.cursor + 1);
            this._refresh();
        }
    }, {
        key: "_cmdCancel",
        value: function _cmdCancel() {
            this._trigger("cancel");
        }
    }, {
        key: "_cmdKillToEOF",
        value: function _cmdKillToEOF() {
            this.killring.append(this.text.substr(this.cursor));
            this.text = this.text.substr(0, this.cursor);
            this._refresh();
        }
    }, {
        key: "_cmdKillWordForward",
        value: function _cmdKillWordForward() {
            if (this.text.length === 0) {
                return;
            }

            if (this.cursor === this.text.length) {
                return;
            }

            var end = this._findEndOfCurrentWord();
            if (end === this.text.length - 1) {
                return this._cmdKillToEOF();
            }

            this.killring.append(this.text.substring(this.cursor, end));
            this.text = this._remove(this.text, this.cursor, end);
            this._refresh();
        }
    }, {
        key: "_cmdKillWordBackward",
        value: function _cmdKillWordBackward() {
            if (this.cursor === 0) {
                return;
            }

            var oldCursor = this.cursor;
            this.cursor = this._findBeginningOfPreviousWord();
            this.killring.prepend(this.text.substring(this.cursor, oldCursor));
            this.text = this._remove(this.text, this.cursor, oldCursor);
            this._refresh();
        }
    }, {
        key: "_cmdYank",
        value: function _cmdYank() {
            var yank = this.killring.yank();

            if (!yank) {
                return;
            }

            this.text = this._insert(this.text, this.cursor, yank);
            this._updateCursor(this.cursor + yank.length);
        }
    }, {
        key: "_cmdRotate",
        value: function _cmdRotate() {
            var lastyanklength = this.killring.lastyanklength();

            if (!lastyanklength) {
                return;
            }

            var yank = this.killring.rotate();

            if (!yank) {
                return;
            }

            var oldCursor = this.cursor;
            this.cursor = this.cursor - lastyanklength;
            this.text = this._remove(this.text, this.cursor, oldCursor);
            this.text = this._insert(this.text, this.cursor, yank);
            this._updateCursor(this.cursor + yank.length);
        }
    }, {
        key: "_cmdClear",
        value: function _cmdClear() {
            if (this.eventHandlers.clear) {
                this._trigger("clear");
            } else {
                this._refresh();
            }
        }
    }, {
        key: "_cmdReverseSearch",
        value: function _cmdReverseSearch() {
            if (!this.inSearch) {
                this.inSearch = true;
                this._trigger("searchStart");
                this._trigger("searchChange", {});
            } else {
                if (!this.searchMatch) {
                    this.searchMatch = { term: "" };
                }

                this._search();
            }
        }
    }, {
        key: "_updateCursor",
        value: function _updateCursor(position) {
            this.cursor = position;
            this._refresh();
        }
    }, {
        key: "_addText",
        value: function _addText(text) {
            this.text = this._insert(this.text, this.cursor, text);
            this.cursor += text.length;
            this._refresh();
        }
    }, {
        key: "_addSearchText",
        value: function _addSearchText(text) {
            if (!this.searchMatch) {
                this.searchMatch = { term: "" };
            }
            this.searchMatch.term += text;
            this._search();
        }
    }, {
        key: "_search",
        value: function _search() {
            this._log("searchtext: " + this.searchMatch.term);

            var match = this.history.search(this.searchMatch.term);

            if (match !== null) {
                this.searchMatch = match;

                this._log("match: " + match);

                this._trigger("searchChange", match);
            }
        }
    }, {
        key: "_refresh",
        value: function _refresh() {
            this._trigger("change", this.getLine());
        }
    }, {
        key: "_getHistory",
        value: function _getHistory(historyCall) {
            this.history.update(this.text);
            this.text = historyCall();
            this._updateCursor(this.text.length);
        }
    }, {
        key: "_findBeginningOfPreviousWord",
        value: function _findBeginningOfPreviousWord() {
            var position = this.cursor - 1;

            if (position < 0) {
                return 0;
            }

            var word = false;
            for (var i = position; i > 0; i--) {
                var word2 = this._isWordChar(this.text[i]);

                if (word && !word2) {
                    return i + 1;
                }

                word = word2;
            }

            return 0;
        }
    }, {
        key: "_findEndOfCurrentWord",
        value: function _findEndOfCurrentWord() {
            if (this.text.length === 0) {
                return 0;
            }

            var position = this.cursor + 1;

            if (position >= this.text.length) {
                return this.text.length - 1;
            }

            var word = false;
            for (var i = position; i < this.text.length; i++) {
                var word2 = this._isWordChar(this.text[i]);

                if (word && !word2) {
                    return i;
                }

                word = word2;
            }

            return this.text.length - 1;
        }
    }, {
        key: "_isWordChar",
        value: function _isWordChar(c) {
            if (!c) {
                return false;
            }

            var code = c.charCodeAt(0);
            return code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
        }
    }, {
        key: "_remove",
        value: function _remove(text, from, to) {
            if (text.length <= 1 || text.length <= to - from) {
                return "";
            }

            if (from === 0) {
                // delete leading characters
                return text.substr(to);
            }

            var left = text.substr(0, from);
            var right = text.substr(to);

            return left + right;
        }
    }, {
        key: "_insert",
        value: function _insert(text, idx, ins) {
            if (idx === 0) {
                return ins + text;
            }

            if (idx >= text.length) {
                return text + ins;
            }

            var left = text.substr(0, idx);
            var right = text.substr(idx);

            return left + ins + right;
        }
    }, {
        key: "_subscribeToKeys",
        value: function _subscribeToKeys() {
            var _this4 = this;

            // set up key capture
            this._addEvent(this.element, "keydown", function (e) {
                var key = _this4._getKeyInfo(e);

                // return as unhandled if we're not active or the key is just a modifier key
                if (!_this4.active || key.code === _keys2.default.Shift || key.code === _keys2.default.Ctrl || key.code === _keys2.default.Alt || key.code === _keys2.default.LeftWindowKey) {
                    return true;
                }

                // check for some special first keys, regardless of modifiers
                _this4._log("key: " + key.code);
                var cmd = _this4.keyMap.default[key.code];

                // intercept ctrl- and meta- sequences (may override the non-modifier cmd captured above
                var mod = void 0;
                if (key.ctrl && !key.shift && !key.alt && !key.meta) {
                    mod = _this4.keyMap.control[key.code];

                    if (mod) {
                        cmd = mod;
                    }
                } else if ((key.alt || key.meta) && !key.ctrl && !key.shift) {
                    mod = _this4.keyMap.meta[key.code];

                    if (mod) {
                        cmd = mod;
                    }
                }

                if (!cmd) {
                    return true;
                }

                _this4._queue(cmd);
                e.preventDefault();
                e.stopPropagation();
                e.cancelBubble = true;

                return false;
            });

            this._addEvent(this.element, "keypress", function (e) {
                if (!_this4.active) {
                    return true;
                }

                var key = _this4._getKeyInfo(e);
                if (key.code === 0 || e.defaultPrevented || key.meta || key.alt || key.ctrl) {
                    return false;
                }

                _this4._queue(function () {
                    if (_this4.inSearch) {
                        _this4._addSearchText(key.character);
                    } else {
                        _this4._addText(key.character);
                    }
                });

                e.preventDefault();
                e.stopPropagation();
                e.cancelBubble = true;

                return false;
            });

            this._addEvent(this.element, "paste", function (e) {
                if (!_this4.active) {
                    return true;
                }

                var pastedText = "";

                if (window.clipboardData && window.clipboardData.getData) {
                    pastedText = window.clipboardData.getData("Text");
                } else if (e.clipboardData && e.clipboardData.getData) {
                    pastedText = e.clipboardData.getData("text/plain");
                }

                _this4._queue(function () {
                    if (_this4.inSearch) {
                        _this4._addSearchText(pastedText);
                    } else {
                        _this4._addText(pastedText);
                    }
                });

                e.preventDefault();
                e.stopPropagation();
                e.cancelBubble = true;

                return false;
            });
        }
    }]);

    return ReadLine;
}(_base2.default);

exports.default = ReadLine;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);

var _setPrototypeOf = __webpack_require__(30);

var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);

var _create = __webpack_require__(31);

var _create2 = _interopRequireDefault2(_create);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault2(_typeof2);

var _defineProperty = __webpack_require__(21);

var _defineProperty2 = _interopRequireDefault2(_defineProperty);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(49);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
}

var KillRing = function (_Base) {
    _inherits(KillRing, _Base);

    function KillRing() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, KillRing);

        var _this = _possibleConstructorReturn(this, (KillRing.__proto__ || (0, _getPrototypeOf2.default)(KillRing)).call(this, config));

        _this.ring = config.ring || [];
        _this.cursor = config.cursor || 0;
        _this.uncommitted = false;
        _this.yanking = false;

        if (_this.ring.length === 0) {
            _this.cursor = -1;
        } else if (_this.cursor >= _this.ring.length) {
            _this.cursor = _this.ring.length - 1;
        }
        return _this;
    }

    _createClass(KillRing, [{
        key: "isinkill",
        value: function isinkill() {
            return this.uncommitted;
        }
    }, {
        key: "lastyanklength",
        value: function lastyanklength() {
            if (!this.yanking) {
                return 0;
            }

            return this.ring[this.cursor].length;
        }
    }, {
        key: "append",
        value: function append(value) {
            this.yanking = false;

            if (!value) {
                return;
            }

            if (this.ring.length === 0 || !this.uncommitted) {
                this.ring.push("");
            }

            this.cursor = this.ring.length - 1;
            this._log("appending: " + value);
            this.uncommitted = true;
            this.ring[this.cursor] += value;
        }
    }, {
        key: "prepend",
        value: function prepend(value) {
            this.yanking = false;

            if (!value) {
                return;
            }

            if (this.ring.length === 0 || !this.uncommitted) {
                this.ring.push("");
            }

            this.cursor = this.ring.length - 1;
            this._log("prepending: " + value);
            this.uncommitted = true;
            this.ring[this.cursor] = value + this.ring[this.cursor];
        }
    }, {
        key: "commit",
        value: function commit() {
            this._log("committing");
            this.yanking = false;
            this.uncommitted = false;
        }
    }, {
        key: "yank",
        value: function yank() {
            this.commit();

            if (this.ring.length === 0) {
                return null;
            }

            this.yanking = true;

            return this.ring[this.cursor];
        }
    }, {
        key: "rotate",
        value: function rotate() {
            if (!this.yanking || this.ring.length === 0) {
                return null;
            }

            --this.cursor;
            if (this.cursor < 0) {
                this.cursor = this.ring.length - 1;
            }

            return this.yank();
        }
    }, {
        key: "items",
        value: function items() {
            return this.ring.slice(0);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.ring = [];
            this.cursor = -1;
            this.yanking = false;
            this.uncommited = false;
        }
    }]);

    return KillRing;
}(_base2.default);

exports.default = KillRing;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var keys = {
    Backspace: 8,
    Tab: 9,
    Enter: 13,
    Shift: 16,
    Ctrl: 17,
    Alt: 18,
    LeftWindowKey: 91,
    Pause: 19,
    CapsLock: 20,
    Escape: 27,
    Space: 32,
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Insert: 45,
    Delete: 46
};

exports.default = keys;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault2(_regenerator);

var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);

var _setPrototypeOf = __webpack_require__(30);

var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);

var _create = __webpack_require__(31);

var _create2 = _interopRequireDefault2(_create);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault2(_typeof2);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault2(_promise);

var _defineProperty = __webpack_require__(21);

var _defineProperty2 = _interopRequireDefault2(_defineProperty);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(49);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Deferred = function Deferred() {
    var _this = this;

    _classCallCheck(this, Deferred);

    this.promise = new _promise2.default(function (resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
    });
};

var Stream = function (_Base) {
    _inherits(Stream, _Base);

    function Stream() {
        var _this3 = this;

        var pipe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _classCallCheck(this, Stream);

        var _this2 = _possibleConstructorReturn(this, (Stream.__proto__ || (0, _getPrototypeOf2.default)(Stream)).call(this));

        _this2.pipe = pipe;
        _this2.readDeferred = new Deferred();
        _this2.buffer = [];
        _this2.aborted = false;

        _this2.on("data", function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
                var deferred;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this2.buffer.push(data);

                                deferred = _this2.readDeferred;

                                _this2.readDeferred = new Deferred();
                                deferred.resolve();

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this3);
            }));

            return function (_x2) {
                return _ref.apply(this, arguments);
            };
        }());
        return _this2;
    }

    _createClass(Stream, [{
        key: "read",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!this.aborted) {
                                    _context2.next = 4;
                                    break;
                                }

                                this.aborted = false;
                                this.buffer.length = 0;
                                throw new Error("Command aborted");

                            case 4:
                                if (!(this.buffer.length > 0)) {
                                    _context2.next = 6;
                                    break;
                                }

                                return _context2.abrupt("return", this.buffer.shift());

                            case 6:
                                _context2.next = 8;
                                return this.readDeferred.promise;

                            case 8:
                                return _context2.abrupt("return", this.read());

                            case 9:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function read() {
                return _ref2.apply(this, arguments);
            }

            return read;
        }()
    }, {
        key: "write",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(data) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (!(typeof data !== "string")) {
                                    _context3.next = 2;
                                    break;
                                }

                                throw new Error("data must be of type string");

                            case 2:
                                _context3.next = 4;
                                return this._trigger("data", data);

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function write(_x3) {
                return _ref3.apply(this, arguments);
            }

            return write;
        }()
    }, {
        key: "close",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this._trigger("data", false);

                            case 2:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function close() {
                return _ref4.apply(this, arguments);
            }

            return close;
        }()
    }, {
        key: "abort",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                this.aborted = true;
                                _context5.next = 3;
                                return this._trigger("data", false);

                            case 3:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function abort() {
                return _ref5.apply(this, arguments);
            }

            return abort;
        }()
    }, {
        key: "isPipe",
        value: function isPipe() {
            return this.pipe;
        }
    }]);

    return Stream;
}(_base2.default);

exports.default = Stream;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

exports.default = {
    desc: "Clear output",
    exec: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term /* , streams, cmd, opts, args */) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            term.shell.clear();

                        case 1:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function exec(_x) {
            return _ref.apply(this, arguments);
        }

        return exec;
    }()
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(20);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

exports.default = {
    desc: "Print help",
    exec: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term, streams /* , cmd, opts, args */) {
            var items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            items = term.shell._commands();
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 4;
                            _iterator = (0, _getIterator3.default)(items);

                        case 6:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 13;
                                break;
                            }

                            item = _step.value;
                            _context.next = 10;
                            return streams.stdout.write(" " + item + "\n");

                        case 10:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 13:
                            _context.next = 19;
                            break;

                        case 15:
                            _context.prev = 15;
                            _context.t0 = _context["catch"](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 19:
                            _context.prev = 19;
                            _context.prev = 20;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 22:
                            _context.prev = 22;

                            if (!_didIteratorError) {
                                _context.next = 25;
                                break;
                            }

                            throw _iteratorError;

                        case 25:
                            return _context.finish(22);

                        case 26:
                            return _context.finish(19);

                        case 27:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[4, 15, 19, 27], [20,, 22, 26]]);
        }));

        function exec(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return exec;
    }()
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

exports.default = {
    desc: "Show history",
    exec: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term, streams, cmd, opts /* , args */) {
            var items, n;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!opts.c) {
                                _context.next = 3;
                                break;
                            }

                            term.shell.history.clear();
                            return _context.abrupt("return");

                        case 3:
                            items = term.shell.history.items();
                            n = 0;

                        case 5:
                            if (!(n < items.length)) {
                                _context.next = 11;
                                break;
                            }

                            _context.next = 8;
                            return streams.stdout.write(" " + n + " " + items[n] + "\n");

                        case 8:
                            n++;
                            _context.next = 5;
                            break;

                        case 11:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function exec(_x, _x2, _x3, _x4) {
            return _ref.apply(this, arguments);
        }

        return exec;
    }()
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

exports.default = {
    desc: "Grep lines",
    args: ["match"],
    exec: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term, streams, cmd, opts, args) {
            var data;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            data = void 0;

                        case 1:
                            _context.next = 3;
                            return streams.stdin.read();

                        case 3:
                            _context.t0 = data = _context.sent;

                            if (!(_context.t0 !== false)) {
                                _context.next = 10;
                                break;
                            }

                            if (!data.includes(args.match)) {
                                _context.next = 8;
                                break;
                            }

                            _context.next = 8;
                            return streams.stdout.write(data);

                        case 8:
                            _context.next = 1;
                            break;

                        case 10:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function exec(_x, _x2, _x3, _x4, _x5) {
            return _ref.apply(this, arguments);
        }

        return exec;
    }()
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

exports.default = {
    desc: "Echo string",
    args: ["string"],
    exec: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term, streams, cmd, opts, args) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return streams.stdout.write(args.string);

                        case 2:
                            return _context.abrupt("return", _context.sent);

                        case 3:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function exec(_x, _x2, _x3, _x4, _x5) {
            return _ref.apply(this, arguments);
        }

        return exec;
    }()
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(20);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

exports.default = {
    desc: "Show last lines",
    args: ["?count"],
    exec: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term, streams, cmd, opts, args) {
            var data, count, buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _data;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            data = void 0;
                            count = args.count || 10;
                            buffer = [];

                        case 3:
                            _context.next = 5;
                            return streams.stdin.read();

                        case 5:
                            _context.t0 = data = _context.sent;

                            if (!(_context.t0 !== false)) {
                                _context.next = 11;
                                break;
                            }

                            buffer.push(data);

                            if (buffer.length > count) {
                                buffer.shift();
                            }
                            _context.next = 3;
                            break;

                        case 11:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 14;
                            _iterator = (0, _getIterator3.default)(buffer);

                        case 16:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 23;
                                break;
                            }

                            _data = _step.value;
                            _context.next = 20;
                            return streams.stdout.write(_data);

                        case 20:
                            _iteratorNormalCompletion = true;
                            _context.next = 16;
                            break;

                        case 23:
                            _context.next = 29;
                            break;

                        case 25:
                            _context.prev = 25;
                            _context.t1 = _context["catch"](14);
                            _didIteratorError = true;
                            _iteratorError = _context.t1;

                        case 29:
                            _context.prev = 29;
                            _context.prev = 30;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 32:
                            _context.prev = 32;

                            if (!_didIteratorError) {
                                _context.next = 35;
                                break;
                            }

                            throw _iteratorError;

                        case 35:
                            return _context.finish(32);

                        case 36:
                            return _context.finish(29);

                        case 37:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[14, 25, 29, 37], [30,, 32, 36]]);
        }));

        function exec(_x, _x2, _x3, _x4, _x5) {
            return _ref.apply(this, arguments);
        }

        return exec;
    }()
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

exports.default = {
    desc: "Show first lines",
    args: ["?count"],
    exec: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term, streams, cmd, opts, args) {
            var data, count;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            data = void 0;
                            count = args.count || 10;

                        case 2:
                            _context.next = 4;
                            return streams.stdin.read();

                        case 4:
                            _context.t1 = data = _context.sent;
                            _context.t0 = _context.t1 !== false;

                            if (!_context.t0) {
                                _context.next = 8;
                                break;
                            }

                            _context.t0 = count > 0;

                        case 8:
                            if (!_context.t0) {
                                _context.next = 14;
                                break;
                            }

                            _context.next = 11;
                            return streams.stdout.write(data);

                        case 11:
                            count--;
                            _context.next = 2;
                            break;

                        case 14:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function exec(_x, _x2, _x3, _x4, _x5) {
            return _ref.apply(this, arguments);
        }

        return exec;
    }()
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

exports.default = {
    exec: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term, streams, cmd /* , opts, args */) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return streams.stderr.write("Unrecognized command: " + cmd + "\n");

                        case 2:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function exec(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        }

        return exec;
    }(),
    completion: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(term, cmd, name, value) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!value) {
                                value = cmd;
                            }

                            return _context2.abrupt("return", term.util.bestMatch(value, term.shell._commands()));

                        case 2:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        function completion(_x4, _x5, _x6, _x7) {
            return _ref2.apply(this, arguments);
        }

        return completion;
    }()
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault2(_regenerator);

var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);

var _setPrototypeOf = __webpack_require__(30);

var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);

var _create = __webpack_require__(31);

var _create2 = _interopRequireDefault2(_create);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault2(_typeof2);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault2(_promise);

var _defineProperty = __webpack_require__(21);

var _defineProperty2 = _interopRequireDefault2(_defineProperty);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(49);

var _base2 = _interopRequireDefault(_base);

var _templates = __webpack_require__(124);

var _templates2 = _interopRequireDefault(_templates);

var _util = __webpack_require__(125);

var _util2 = _interopRequireDefault(_util);

var _cd = __webpack_require__(147);

var _cd2 = _interopRequireDefault(_cd);

var _ls = __webpack_require__(148);

var _ls2 = _interopRequireDefault(_ls);

var _pwd = __webpack_require__(149);

var _pwd2 = _interopRequireDefault(_pwd);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
}

var PathHandler = function (_Base) {
    _inherits(PathHandler, _Base);

    function PathHandler(config, shell) {
        _classCallCheck(this, PathHandler);

        var _this = _possibleConstructorReturn(this, (PathHandler.__proto__ || (0, _getPrototypeOf2.default)(PathHandler)).call(this, config));

        _this.shell = shell;
        _this.current = null;

        _this.shell.setCommandHandler("cd", _cd2.default);
        _this.shell.setCommandHandler("ls", _ls2.default);
        _this.shell.setCommandHandler("pwd", _pwd2.default);

        _this.shell.setDefaultPromptRenderer(function () {
            return _this.getPrompt();
        });
        return _this;
    }

    _createClass(PathHandler, [{
        key: "getNode",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getNode() {
                return _ref.apply(this, arguments);
            }

            return getNode;
        }()
    }, {
        key: "getChildNodes",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getChildNodes() {
                return _ref2.apply(this, arguments);
            }

            return getChildNodes;
        }()
    }, {
        key: "getPrompt",
        value: function getPrompt() {
            return _templates2.default.prompt({ node: this.current });
        }
    }, {
        key: "pathCompletionHandler",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(cmd, arg /* , line */) {
                var _node, lastPathSeparator, parent, partial, node, completion;

                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                this._log("completing '" + arg + "'");

                                if (arg) {
                                    _context3.next = 6;
                                    break;
                                }

                                this._log("completing on current");

                                _context3.next = 5;
                                return this._completeChildren(this.current, "");

                            case 5:
                                return _context3.abrupt("return", _context3.sent);

                            case 6:
                                if (!(arg[arg.length - 1] === "/")) {
                                    _context3.next = 17;
                                    break;
                                }

                                this._log("completing children w/o partial");

                                _context3.next = 10;
                                return this.getNode(arg);

                            case 10:
                                _node = _context3.sent;

                                if (_node) {
                                    _context3.next = 14;
                                    break;
                                }

                                this._log("no node for path");
                                return _context3.abrupt("return");

                            case 14:
                                _context3.next = 16;
                                return this._completeChildren(_node, "");

                            case 16:
                                return _context3.abrupt("return", _context3.sent);

                            case 17:
                                lastPathSeparator = arg.lastIndexOf("/");
                                parent = arg.substr(0, lastPathSeparator + 1);
                                partial = arg.substr(lastPathSeparator + 1);

                                if (!(partial === ".." || partial === ".")) {
                                    _context3.next = 22;
                                    break;
                                }

                                return _context3.abrupt("return", {
                                    completion: "/",
                                    suggestions: []
                                });

                            case 22:

                                this._log("completing children via parent '" + parent + "'  w/ partial '" + partial + "'");

                                _context3.next = 25;
                                return this.getNode(parent);

                            case 25:
                                node = _context3.sent;

                                if (node) {
                                    _context3.next = 29;
                                    break;
                                }

                                this._log("no node for parent path");

                                return _context3.abrupt("return");

                            case 29:
                                _context3.next = 31;
                                return this._completeChildren(node, partial);

                            case 31:
                                completion = _context3.sent;

                                if (!(completion && completion.completion === "" && completion.suggestions.length === 1)) {
                                    _context3.next = 34;
                                    break;
                                }

                                return _context3.abrupt("return", {
                                    completion: "/",
                                    suggestions: []
                                });

                            case 34:
                                return _context3.abrupt("return", completion);

                            case 35:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function pathCompletionHandler(_x, _x2) {
                return _ref3.apply(this, arguments);
            }

            return pathCompletionHandler;
        }()
    }, {
        key: "_completeChildren",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(node, partial) {
                var childNodes;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.getChildNodes(node);

                            case 2:
                                childNodes = _context4.sent;
                                return _context4.abrupt("return", _util2.default.bestMatch(partial, childNodes.map(function (x) {
                                    return x.name;
                                })));

                            case 4:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function _completeChildren(_x3, _x4) {
                return _ref4.apply(this, arguments);
            }

            return _completeChildren;
        }()
    }]);

    return PathHandler;
}(_base2.default);

exports.default = PathHandler;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

exports.default = {
    desc: "Change location",
    args: ["path"],
    exec: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term, streams, cmd, opts, args) {
            var node, error;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return term.pathhandler.getNode(args.path);

                        case 2:
                            node = _context.sent;

                            if (node) {
                                _context.next = 8;
                                break;
                            }

                            error = cmd + ": " + args.path + ": No such file or directory\n";
                            _context.next = 7;
                            return streams.stderr.write(error);

                        case 7:
                            return _context.abrupt("return", _context.sent);

                        case 8:

                            term.pathhandler.current = node;

                        case 9:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function exec(_x, _x2, _x3, _x4, _x5) {
            return _ref.apply(this, arguments);
        }

        return exec;
    }(),
    completion: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(term, cmd, name, value) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!(name === "path")) {
                                _context2.next = 4;
                                break;
                            }

                            _context2.next = 3;
                            return term.completePath(value);

                        case 3:
                            return _context2.abrupt("return", _context2.sent);

                        case 4:
                            return _context2.abrupt("return", []);

                        case 5:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        function completion(_x6, _x7, _x8, _x9) {
            return _ref2.apply(this, arguments);
        }

        return completion;
    }()
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(20);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

exports.default = {
    desc: "List items",
    args: ["?path"],
    opts: {
        1: "Show as list"
    },
    exec: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term, streams, cmd, opts, args) {
            var node, separator, error, children, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!args.path) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 3;
                            return term.pathhandler.getNode(args.path);

                        case 3:
                            _context.t0 = _context.sent;
                            _context.next = 7;
                            break;

                        case 6:
                            _context.t0 = term.current();

                        case 7:
                            node = _context.t0;
                            separator = !streams.stdout.isPipe() && !opts[1] ? " " : "\n";

                            if (node) {
                                _context.next = 14;
                                break;
                            }

                            error = "ls: " + args.path + ": No such file or directory\n";
                            _context.next = 13;
                            return streams.stderr.write(error);

                        case 13:
                            return _context.abrupt("return", _context.sent);

                        case 14:
                            _context.next = 16;
                            return term.pathhandler.getChildNodes(node);

                        case 16:
                            children = _context.sent;
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 20;
                            _iterator = (0, _getIterator3.default)(children);

                        case 22:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 29;
                                break;
                            }

                            child = _step.value;
                            _context.next = 26;
                            return streams.stdout.write("" + child.name + separator);

                        case 26:
                            _iteratorNormalCompletion = true;
                            _context.next = 22;
                            break;

                        case 29:
                            _context.next = 35;
                            break;

                        case 31:
                            _context.prev = 31;
                            _context.t1 = _context["catch"](20);
                            _didIteratorError = true;
                            _iteratorError = _context.t1;

                        case 35:
                            _context.prev = 35;
                            _context.prev = 36;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 38:
                            _context.prev = 38;

                            if (!_didIteratorError) {
                                _context.next = 41;
                                break;
                            }

                            throw _iteratorError;

                        case 41:
                            return _context.finish(38);

                        case 42:
                            return _context.finish(35);

                        case 43:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[20, 31, 35, 43], [36,, 38, 42]]);
        }));

        function exec(_x, _x2, _x3, _x4, _x5) {
            return _ref.apply(this, arguments);
        }

        return exec;
    }(),
    completion: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(term, cmd, name, value) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!(name === "path")) {
                                _context2.next = 4;
                                break;
                            }

                            _context2.next = 3;
                            return term.completePath(value);

                        case 3:
                            return _context2.abrupt("return", _context2.sent);

                        case 4:
                            return _context2.abrupt("return", []);

                        case 5:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        function completion(_x6, _x7, _x8, _x9) {
            return _ref2.apply(this, arguments);
        }

        return completion;
    }()
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return _promise2.default.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

exports.default = {
    desc: "Print current location",
    exec: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(term, streams /* , cmd, opts, args */) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return streams.stdout.write(term.current().path + "\n");

                        case 2:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function exec(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return exec;
    }()
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map