"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    loading: false,
    disabled: false,
    realName: '',
    src: '',
    path: '',
    user: null
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
              return _api.User.details();

            case 2:
              _this.user = _context.sent;

              if (_this.user) {
                _this.realName = _this.user.realName;
                _this.src = _this.user.authSrc;
                _this.path = _this.user.authSrc;
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    onUpload: function onUpload() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res, tempFilePaths, imgUrl;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _core["default"].wx.chooseImage({
                  count: 1,
                  sizeType: ['compressed'],
                  sourceType: ['album', 'camera']
                });

              case 2:
                res = _context2.sent;
                tempFilePaths = res.tempFilePaths;
                wx.showLoading({
                  title: '上传头像...',
                  mask: true
                });
                _context2.next = 7;
                return _api.User.uploadFile([{
                  path: tempFilePaths[0]
                }], 3);

              case 7:
                imgUrl = _context2.sent;
                _this2.path = _api.qiniuUrl + imgUrl;
                _this2.src = _this2.path;
                wx.hideLoading();

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onView: function onView() {
      wx.previewImage({
        urls: [this.src],
        current: 0
      });
    },
    onDel: function onDel() {
      this.src = '';
      this.path = '';
    },
    goCenter: function goCenter() {
      wx.switchTab({
        url: '/pages/me'
      });
    },
    onSubmit: function onSubmit() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3.realName) {
                  _context3.next = 3;
                  break;
                }

                wx.showToast({
                  title: "\u771F\u5B9E\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A",
                  icon: 'none',
                  duration: 2000
                });
                return _context3.abrupt("return");

              case 3:
                if (_this3.path) {
                  _context3.next = 6;
                  break;
                }

                wx.showToast({
                  title: "\u8BF7\u4E0A\u4F20\u5B66\u751F\u8BC1",
                  icon: 'none',
                  duration: 2000
                });
                return _context3.abrupt("return");

              case 6:
                _this3.disabled = true;
                _this3.loading = true;
                _context3.next = 10;
                return _api.User.auth(_this3.realName, _this3.path);

              case 10:
                res = _context3.sent;

                if (res) {
                  setTimeout(function () {
                    wx.switchTab({
                      url: '/pages/me'
                    });
                  }, 2000);
                }

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'17-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onView($event)
      })();
    
  }},'17-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }},'17-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onUpload($event)
      })();
    
  }},'17-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }},'17-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubmit($event)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "realName",
      handler: function set ($v) {
      var _vm=this;
        _vm.realName = $v;
      
    }
    }} });