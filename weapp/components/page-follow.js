"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  props: {
    isInit: {
      type: Boolean,
      "default": false
    }
  }, 
  data: {
    count: 0,
    state: 0,
    pageIndex: 1,
    pageSize: 5,
    items: [],
    triggered: false,
    num: -1,
    recommentds: [],
    isLoading: false,
    hasMore: true,
    begin: new Date().getTime()
  },
  watch: {
    isInit: function isInit(val) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var items;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('hah')
                if (!val) {
                  _context.next = 15;
                  break;
                }
           
                _context.next = 3;
                return _this.loadData();

              case 3:
                if (!_context.sent) {
                  _context.next = 14;
                  break;
                }

                if (!_this.items.length) {
                  _context.next = 8;
                  break;
                }

                _this.state = 2;
                _context.next = 12;
                break;

              case 8:
                _context.next = 10;
                return _api.Post.recommendForNew();

              case 10:
                items = _context.sent;

                if (items) {
                  if (items.length) {
                    _this.recommentds = items;
                    _this.state = 2;
                  } else {
                    _this.state = 3;
                  }
                } else {
                  _this.state = 1;
                }

              case 12:
                _context.next = 15;
                break;

              case 14:
                _this.state = 1;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  methods: {
    loadData: function loadData(isRefresh) {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!_this2.hasMore && !isRefresh || _this2.isLoading)) {
                  _context2.next = 2;
               //   _this2.state =2;
                  break;
                }
          
                console.log('h111ah')
     
                return _context2.abrupt("return");

              case 2:
                _this2.isLoading = true;
                _context2.next = 5;
                return _api.Post.follow({
                  isRefresh: isRefresh,
                  begin: isRefresh ? _this2.begin : null,
                  pageIndex: _this2.pageIndex,
                  pageSize: _this2.pageSize
                });

              case 5:
                items = _context2.sent;

                if (!items) {
                  _context2.next = 28;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 10;

                for (_iterator = items[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  _this2.items[isRefresh ? 'unshift' : 'push'](item);
                }

                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](10);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 18:
                _context2.prev = 18;
                _context2.prev = 19;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 21:
                _context2.prev = 21;

                if (!_didIteratorError) {
                  _context2.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context2.finish(21);

              case 25:
                return _context2.finish(18);

              case 26:
                if (isRefresh) {
                  _this2.begin = new Date().getTime();
                  _this2.num = items.length;
                } else {
                  _this2.pageIndex++;
                }
                if(items.length==_this2.pageSize){
                  _this2.hasMore==true
                }
                else{
                  _this2.hasMore=false
                }


              case 28:
                _this2.isLoading = false;
                return _context2.abrupt("return", items);

              case 30:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[10, 14, 18, 26], [19,, 21, 25]]);
      }))();
    },
    onScrolltolower: function onScrolltolower() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.loadData();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onRefresherpulling: function onRefresherpulling() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.triggered = true;

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onRefresherrefresh: function onRefresherrefresh() {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.loadData(true);

              case 2:
                setTimeout(function () {
                  _this5.num = -1;
                }, 2000);
                _this5.triggered = false;

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    onRefresherrestore: function onRefresherrestore() {
      this.triggered = false;
    }
  }
}, {info: {"components":{"mp-page":{"path":"mp-page"},"post-item":{"path":"item-post"},"user-recommend":{"path":"user-recommend"}},"on":{"60-0":["scrolltolower","refresherrefresh","refresherrestore","refresherpulling"]}}, handlers: {'60-0': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }}}, models: {} });