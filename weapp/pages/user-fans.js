"use strict";
 
var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    labels: [{
      title: '关注',
      showDot: false
    }, {
      title: '粉丝',
      showDot: false
    }],
    current: 0,
    tabIndex: 0,
    navigationHeight: 0,
    userId: null,
    init0: false,
    init1: false
  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var id, type;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = q.id, type = q.type;
              _this.userId = id;
              _this.navigationHeight = _this.$app.$options.navigationHeight();
              _this.tabIndex = parseInt(type);
              _this.current = _this.tabIndex;
              _this["init".concat(type)] = true;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"..\\components\\navigation-bar\\navigation-bar"},"tabs":{"path":"..\\components\\tab-bar"},"list":{"path":"..\\components\\page-list"}},"on":{"18-0":["change"]}}, handlers: {'18-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTabChange($event)
      })();
    
  }},'18-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event)
      })();
    
  }}}, models: {} });