"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    gender: -1,
    btntext: '微信授权',
    loading: false,
    disabled: false
  },
  onLoad: function onLoad() {
   // this.btntext = true ? 'QQ授权' : '微信授权';
  },
  methods: {
    choice: function choice(gender) {
      this.gender = gender;
    },
    getuserinfo: function getuserinfo(res) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var info, _res;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                info = res.$wx.detail.userInfo;

                if (!(_this.gender === -1)) {
                  _context.next = 4;
                  break;
                }

                wx.showToast({
                  title: '请选择性别',
                  icon: 'none',
                  duration: 2000
                });
                return _context.abrupt("return");

              case 4:
                if (!info) {
                  _context.next = 16;
                  break;
                }

                _this.loading = true;
                _this.disabled = true;
                _this.btntext = '绑定中..';
                _context.next = 10;
                return _api.User.bindInfo(info);

              case 10:
                _res = _context.sent;

                if (!_res) {
                  _this.btntext = '重试';
                } else {
                  _api.eventHub.$emit('binding');

                  setTimeout(function () {
                    wx.navigateBack();
                  }, 1000);
                }

                _this.loading = false;
                _this.disabled = false;
                _context.next = 17;
                break;

              case 16:
                wx.showToast({
                  title: '已取消授权',
                  icon: 'none',
                  duration: 2000
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'22-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.choice(1)
      })();
    
  }},'22-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.choice(2)
      })();
    
  }},'22-2': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuserinfo($event)
      })();
    
  }},'22-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.desTap($event)
      })();
    
  }}}, models: {} });