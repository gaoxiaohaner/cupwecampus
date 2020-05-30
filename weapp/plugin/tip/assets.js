"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../../vendor.js')(3));

var _api = require('api.js');
var pay= require('../../common/api.js');

var _core = _interopRequireDefault(require('../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    user: null,
    assets: 0
  },
  onLoad: function onLoad(q) {
    var _this = this;
    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api.Tip.getAssets();

            case 2:
              _this.user = _context.sent;
              _this.assets = ((_this.user.drill + _this.user.shell) / 100).toFixed(2);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
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
              return _api.Tip.getAssets();

            case 2:
              _this.user = _context.sent;
              _this.assets = ((_this.user.drill + _this.user.shell) / 100).toFixed(2);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    goTrade: function goTrade() {
      wx.navigateTo({
        url: '/plugin/tip/trade'
      });
    },
    goTransform: function goTransform() {
      wx.navigateTo({
        url: '/plugin/tip/transform'
      });
    },
    goMonetize: function goMonetize() {
      wx.navigateTo({
        url: '/plugin/tip/monetize'
      });
    },
    vipcharge:function vipcharge(){
      var _this2 = this;
      console.log(_this2)
      console.log(
       pay.User.pay({})
      )
    },
  }
}, {info: {"components":{},"on":{}}, handlers: {'24-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goTransform($event)
      })();
    
  }},'24-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goMonetize($event)
      })();
    
  }},'24-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goTrade($event)
      })();
    
  }}}, models: {} });