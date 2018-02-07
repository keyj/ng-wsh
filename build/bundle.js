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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
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
        return Array.from(arr);
    }
}

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
                var _eventHandlers;

                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                return regeneratorRuntime.wrap(function _callee$(_context) {
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
            for (var _iterator = optsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
            for (var _iterator2 = Object.keys(cmdOpts || {})[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(0);

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
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/* global window */

var History = function (_Base) {
    _inherits(History, _Base);

    function History() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, History);

        var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, config));

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
                this.storage.setItem(this.key, JSON.stringify(this.history));
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _shell2 = __webpack_require__(6);

var _shell3 = _interopRequireDefault(_shell2);

var _pathhandler = __webpack_require__(20);

var _pathhandler2 = _interopRequireDefault(_pathhandler);

var _templates = __webpack_require__(1);

var _templates2 = _interopRequireDefault(_templates);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
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
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(node) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(path) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _history = __webpack_require__(3);

var _history2 = _interopRequireDefault(_history);

var _readline = __webpack_require__(7);

var _readline2 = _interopRequireDefault(_readline);

var _stream = __webpack_require__(10);

var _stream2 = _interopRequireDefault(_stream);

var _templates = __webpack_require__(1);

var _templates2 = _interopRequireDefault(_templates);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

var _argvSplit = __webpack_require__(11);

var _argvSplit2 = _interopRequireDefault(_argvSplit);

var _clear = __webpack_require__(12);

var _clear2 = _interopRequireDefault(_clear);

var _help = __webpack_require__(13);

var _help2 = _interopRequireDefault(_help);

var _history3 = __webpack_require__(14);

var _history4 = _interopRequireDefault(_history3);

var _grep = __webpack_require__(15);

var _grep2 = _interopRequireDefault(_grep);

var _echo = __webpack_require__(16);

var _echo2 = _interopRequireDefault(_echo);

var _tail = __webpack_require__(17);

var _tail2 = _interopRequireDefault(_tail);

var _head = __webpack_require__(18);

var _head2 = _interopRequireDefault(_head);

var _default = __webpack_require__(19);

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/* global document */

var Shell = function (_Base) {
    _inherits(Shell, _Base);

    function Shell(config, terminal) {
        _classCallCheck(this, Shell);

        var _this = _possibleConstructorReturn(this, (Shell.__proto__ || Object.getPrototypeOf(Shell)).call(this, config));

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
            return Object.keys(this.cmdHandlers).filter(function (x) {
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
            var opts = Object.keys(cmdOpts || {}).map(function (o) {
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
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cmdline) {
                var cmdtexts, cmds, pipe, n, isLast, cmdtext, parts, cmdName, cmdArgs, handler, streams, parsed, help;
                return regeneratorRuntime.wrap(function _callee$(_context) {
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
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(cmdtext) {
                    var promises;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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

                                    Promise.all(promises).then(function () {
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

            this.readline.on("cancel", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, cmd;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context3.prev = 3;

                                for (_iterator = _this5.executing[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(line) {
                    var text, parts, cmdName, handler, argName, args, match;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
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

                                    _this5._log("completion: " + JSON.stringify(match));

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _history = __webpack_require__(3);

var _history2 = _interopRequireDefault(_history);

var _killring = __webpack_require__(8);

var _killring2 = _interopRequireDefault(_killring);

var _keys = __webpack_require__(9);

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
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/* global window */

var ReadLine = function (_Base) {
    _inherits(ReadLine, _Base);

    function ReadLine() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ReadLine);

        var _this = _possibleConstructorReturn(this, (ReadLine.__proto__ || Object.getPrototypeOf(ReadLine)).call(this, config));

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(0);

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
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var KillRing = function (_Base) {
    _inherits(KillRing, _Base);

    function KillRing() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, KillRing);

        var _this = _possibleConstructorReturn(this, (KillRing.__proto__ || Object.getPrototypeOf(KillRing)).call(this, config));

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Deferred = function Deferred() {
    var _this = this;

    _classCallCheck(this, Deferred);

    this.promise = new Promise(function (resolve, reject) {
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

        var _this2 = _possibleConstructorReturn(this, (Stream.__proto__ || Object.getPrototypeOf(Stream)).call(this));

        _this2.pipe = pipe;
        _this2.readDeferred = new Deferred();
        _this2.buffer = [];
        _this2.aborted = false;

        _this2.on("data", function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var deferred;
                return regeneratorRuntime.wrap(function _callee$(_context) {
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
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term /* , streams, cmd, opts, args */) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term, streams /* , cmd, opts, args */) {
            var items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            items = term.shell._commands();
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 4;
                            _iterator = items[Symbol.iterator]();

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term, streams, cmd, opts /* , args */) {
            var items, n;
            return regeneratorRuntime.wrap(function _callee$(_context) {
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term, streams, cmd, opts, args) {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term, streams, cmd, opts, args) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term, streams, cmd, opts, args) {
            var data, count, buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _data;

            return regeneratorRuntime.wrap(function _callee$(_context) {
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
                            _iterator = buffer[Symbol.iterator]();

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term, streams, cmd, opts, args) {
            var data, count;
            return regeneratorRuntime.wrap(function _callee$(_context) {
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term, streams, cmd /* , opts, args */) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
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
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(term, cmd, name, value) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _templates = __webpack_require__(1);

var _templates2 = _interopRequireDefault(_templates);

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

var _cd = __webpack_require__(21);

var _cd2 = _interopRequireDefault(_cd);

var _ls = __webpack_require__(22);

var _ls2 = _interopRequireDefault(_ls);

var _pwd = __webpack_require__(23);

var _pwd2 = _interopRequireDefault(_pwd);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PathHandler = function (_Base) {
    _inherits(PathHandler, _Base);

    function PathHandler(config, shell) {
        _classCallCheck(this, PathHandler);

        var _this = _possibleConstructorReturn(this, (PathHandler.__proto__ || Object.getPrototypeOf(PathHandler)).call(this, config));

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
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
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
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(cmd, arg /* , line */) {
                var _node, lastPathSeparator, parent, partial, node, completion;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(node, partial) {
                var childNodes;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term, streams, cmd, opts, args) {
            var node, error;
            return regeneratorRuntime.wrap(function _callee$(_context) {
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
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(term, cmd, name, value) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term, streams, cmd, opts, args) {
            var node, separator, error, children, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child;

            return regeneratorRuntime.wrap(function _callee$(_context) {
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
                            _iterator = children[Symbol.iterator]();

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
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(term, cmd, name, value) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term, streams /* , cmd, opts, args */) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
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