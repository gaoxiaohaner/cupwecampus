"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    init: false
  },
  methods: {
    onSearch: function onSearch(e) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var value;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = e.$wx.detail.value;

                _this.$refs.list.loadData(true, value);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onCancel: function onCancel() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$refs.list.loadData(true);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    goAdd: function goAdd() {
      wx.navigateTo({
        url: "/pages/topic-add"
      });
    }
  }
}, {info: {"components":{"searchbar":{"path":"..\\components\\searchbar\\searchbar"},"list":{"path":"..\\components\\page-list"}},"on":{"20-0":["input","cancel"]}}, handlers: {'20-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event)
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }},'20-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goAdd($event)
      })();
    
  }}}, models: {} });