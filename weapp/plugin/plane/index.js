"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../../vendor.js')(3));

var _api = require('api.js');

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    disabled: true,
    loading: false,
    showInput: false,
    showReplyInput: false,
    showDialog: false,
    pageIndex: 1,
    pageSize: 12,
    placeholder: '回复TA',
    itemPlane: null,
    items: [],
    isLoadData: false,
    hasMore: true,
    plane: null
  },
  onLoad: function onLoad() {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api.Plane.details(null, true);

            case 2:
              _this.plane = _context.sent;
              _context.next = 5;
              return _this.loadData();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    loadData: function loadData() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!_this2.hasMore || _this2.isLoadData)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _this2.isLoadData = true;
                _context2.next = 5;
                return _api.Plane.list(_this2.pageIndex, _this2.pageSize);

              case 5:
                res = _context2.sent;

                if (res && res.length) {
                  _this2.items.push(res.slice(0, 6));

                  _this2.items.push(res.slice(6));

                  _this2.pageIndex++;
                  _this2.hasMore = res.length === _this2.pageSize;
                }

                _this2.isLoadData = false;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onShow: function onShow() {
      this.showInput = true;
    },
    onHide: function onHide() {
      this.showInput = false;
    },
    onReplyHide: function onReplyHide() {
      this.showReplyInput = false;
    },
    onItem: function onItem(plane, i, j) {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(plane);
                _this3.placeholder = "\u56DE\u590D".concat(plane.user.nick, ":");

                if (plane.hasSeen) {
                  _context3.next = 6;
                  break;
                }

                _this3.items[i][j].hasSeen = true;
                _context3.next = 6;
                return _api.Plane.read(plane.id);

              case 6:
                _this3.itemPlane = plane;
                _this3.showDialog = true;

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onScrolltolower: function onScrolltolower() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this4.loadData();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onCancel: function onCancel() {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _api.Plane.remove();

              case 2:
                if (!_context5.sent) {
                  _context5.next = 4;
                  break;
                }

                _this5.plane = null;

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    onThrow: function onThrow(content) {
      var _this6 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(!content || content.length < 5)) {
                  _context6.next = 3;
                  break;
                }

                _api.Plane.showToast('内容不能少于5个字符');

                return _context6.abrupt("return");

              case 3:
                _this6.onHide();

                _context6.next = 6;
                return _api.Plane.edit(content);

              case 6:
                _this6.plane = _context6.sent;

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  }
}, {info: {"components":{"dialog":{"path":"..\\..\\components\\dialog\\dialog"},"comment-input":{"path":"..\\..\\components\\input-comment"},"plane-add":{"path":"..\\..\\components\\input-comment"},"user-item":{"path":"..\\..\\components\\item-user"}},"on":{"23-3":["close"],"23-6":["hide","cancel","throw"],"23-9":["hide","comment"]}}, handlers: {'23-0': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }},'23-1': {"tap": function proxy (plane, index, j) {
    
    var _vm=this;
      return (function () {
        _vm.onItem(plane, index, j)
      })();
    
  }},'23-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShow($event)
      })();
    
  }},'23-3': {"close": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showDialog=_vm.flase
      })();
    
  }},'23-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showReplyInput=true
      })();
    
  }},'23-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showDialog=false
      })();
    
  }},'23-6': {"hide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHide($event)
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }, "throw": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onThrow($event)
      })();
    
  }},'23-9': {"hide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReplyHide($event)
      })();
    
  }, "comment": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showReplyInput = false
      })();
    
  }}}, models: {} });