"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    hasBinding: true,
    user: null,
    isqq: false,
    assets: '0.00'
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.loadData();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onLoad: function onLoad() {
    var _this2 = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee3() {
      return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this2.isqq = _api.User.isQQ();
              wx.setNavigationBarTitle({
                title: ''
              });

              _api.eventHub.$on('binding',
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              _regeneratorRuntime2["default"].mark(function _callee2() {
                return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _this2.loadData();

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })));

              _context3.next = 5;
              return _this2.loadData();

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  methods: {
    loadData: function loadData() {
      var _this3 = this;
      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _api.User.newData();

              case 2:
                res = _context4.sent;

                if (res) {
                  _this3.user = res;
                  _this3.assets = ((_this3.user.shell + _this3.user.drill) / 100).toFixed(2);
                }

                wx.stopPullDownRefresh();

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    gokefu:function goAssets() {
      return _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime2["default"].mark(function _callee6() {
          return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return _api.User.kefu();
                case 2:
                  if (!_context6.sent) {
                    _context6.next = 5;
                    break;
                  }
                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }))();

    },
    goHomPage: function goHomPage() {
      wx.navigateTo({
        url: "/pages/user-home?id=".concat(this.user.id)
      });
    },
    goAuth: function goAuth() {
      wx.navigateTo({
        url: "/pages/user-auth"
      });
    },
    goEdit: function goEdit() {
      wx.navigateTo({
        url: "/pages/user-seting"
      });
    },
    goPlane: function goPlane() {
      wx.navigateTo({
        url: '/plugin/plane/index'
      });
    },
    goComments: function goComments() {
      wx.navigateTo({
        url: "/pages/user-comments"
      });
    },
    goLikes: function goLikes() {
      wx.navigateTo({
        url: "/pages/user-likes"
      });
    },
    goGender: function goGender() {
      wx.navigateTo({
        url: '/pages/gender'
      });
    },
    goAssets: function goAssets() {
      wx.navigateTo({
        url: '/plugin/tip/assets'
      });
    },

  }
}, {info: {"components":{},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goHomPage($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goGender($event)
      })();
    
  }},'6-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goAssets($event)
      })();
    
  }},'6-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goPlane($event)
      })();
    
  }},'6-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goHomPage($event)
      })();
    
  }},'6-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goComments($event)
      })();
    
  }},'6-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goLikes($event)
      })();
    
  }},'6-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goEdit($event)
      })();
    
  }},'6-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goAuth($event)
      })();
    
  }},'6-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gokefu($event)
      })();
    
  }}}, models: {} });