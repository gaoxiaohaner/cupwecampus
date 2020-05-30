"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    labels: [{
      title: '消息',
      showDot: false
    }, {
      title: '通知',
      showDot: false
    }],
    current: 0,
    tabIndex: 0,
    navigationHeight: 0,
    user: null,
    init0: true,
    init1: false
  },
  onLoad: function onLoad() {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee4() {
      var _user;

      return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this.navigationHeight = _this.$app.$options.navigationHeight();
              _user = _api.User.getUser();

              if (_user) {
                _this.showTip = !_user.subscribe;
              }

              _api.eventHub.$on('follow',
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee(item) {
                  return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!item.hasFollow) {
                            _context.next = 7;
                            break;
                           }

                          _context.next = 3;
                          return _api.User.cancel(item.fromId);

                        case 3:
                          if (!_context.sent) {
                            _context.next = 5;
                            break;
                          }

                          item.hasFollow = false;

                        case 5:
                          _context.next = 10;
                          break;

                        case 7:
                          _context.next = 9;
                          return _api.User.follow(item.fromId);

                        case 9:
                          item.hasFollow = _context.sent;

                        case 10:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());

              _api.eventHub.$on('read',
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee2(item) {
                  return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _api.Message.read(item.id);

                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }());

              _api.eventHub.$on('sysread',
              /*#__PURE__*/
              function () {
                var _ref3 = _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee3(item) {
                  return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0: 
                          _context3.next = 2;
                          console.log(item)
                          return _api.Message.read(item._id, true);

                        case 2:
                          if (!_context3.sent) {
                            _context3.next = 6;
                            break;
                          }

                          item.isRead = true;
                          _context3.next = 7;
                          break;

                        case 6:
                          _api.Message.showToast('标记失败');

                        case 7:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }());

              wx.removeTabBarBadge({
                index: 1
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  onShow: function onShow() {
    var _this2 = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee5() {
      var _this2$user, noticeCount, sysMsgCount;

      return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _api.Message.notice();
 
            case 2:
              _this2.user = _context5.sent;

              if (_this2.user) {
                _this2$user = _this2.user, noticeCount = _this2$user.noticeCount, sysMsgCount = _this2$user.sysMsgCount;
                _this2.labels[0].showDot = noticeCount > 0;
                _this2.labels[1].showDot = sysMsgCount > 0;
              }

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },

  methods: {
    onTabChange: function onTabChange(index) {
      this.current = index;
    },
    onChange: function onChange(res) {
      var _res$$wx$detail = res.$wx.detail,
          current = _res$$wx$detail.current,
          source = _res$$wx$detail.source;
      this.tabIndex = current;
      this.current = current;

      if (!this["init".concat(current)]) {
        this["init".concat(current)] = true;
      }
    },
    onClean: function onClean() {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _api.Message.read();

              case 2:
                if (!_context6.sent) {
                  _context6.next = 5;
                  break;
                }

                _api.Message.showToast('全部已读', 'success');

                _api.eventHub.$emit('allRead');

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"..\\components\\navigation-bar\\navigation-bar"},"tabs":{"path":"..\\components\\tab-bar"},"list":{"path":"..\\components\\page-list"}},"on":{"5-0":["change"]}}, handlers: {'5-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTabChange($event)
      })();
    
  }},'5-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event)
      })();
    
  }},'5-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClean($event)
      })();
    
  }}}, models: {} });