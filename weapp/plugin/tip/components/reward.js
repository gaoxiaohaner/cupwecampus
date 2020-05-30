"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../../../vendor.js')(3));

var _core = _interopRequireDefault(require('../../../vendor.js')(0));

var _api = require('../api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    isSelf: {
      type: Boolean,
      "default": true
    },
    postId: Number,
    toId: Number,
    shell: {
      type: Number,
      "default": 0
    }
  },
  data: {
    rewardDialog: false,
    btnDisabled: false,
    btnLoading: false,
    active: 0,
    drill: '',
    choiceDrill: 2,
    user: null,
    items: [2, 5, 10, 20, 50, -1]
  },
  attached: function attached() {
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

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    onChoice: function onChoice(active, drill) {
      this.active = active;
      this.choiceDrill = drill;

      if (active < 5) {
        this.disabled = !this.user || this.user.drill < drill;
      }
    },
    onInput: function onInput(e) {
      var value = e.$wx.detail.value;
      this.drill = parseInt(value);
      this.disabled = !this.user || this.user.drill < this.drill;
    },
    onReward: function onReward() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var drill, isReward;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _api.Tip.subscribe();

                _this2.btnDisabled = true;
                _this2.btnLoading = true;
                drill = _this2.active === 5 ? _this2.drill : _this2.choiceDrill;
                console.log(drill);
                _context2.next = 7;
                return _api.Tip.reward(_this2.toId, _this2.postId, drill);

              case 7:
                isReward = _context2.sent;

                if (isReward) {
                  _this2.user.drill -= drill;
                  _this2.rewardDialog = false;
                }

                _this2.btnDisabled = false;
                _this2.btnLoading = false;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
}, {info: {"components":{"screen-dialog":{"path":"..\\..\\..\\components\\half-screen-dialog\\half-screen-dialog"}},"on":{"68-1":["close"]}}, handlers: {'68-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.rewardDialog = true
      })();
    
  }},'68-1': {"close": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.rewardDialog = false
      })();
    
  }},'68-2': {"tap": function proxy (index, item) {
    
    var _vm=this;
      return (function () {
        _vm.onChoice(index, item)
      })();
    
  }},'68-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onChoice(index)
      })();
    
  }},'68-4': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInput($event)
      })();
    
  }},'68-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReward($event)
      })();
    
  }}}, models: {'11': {
      type: "input",
      expr: "drill",
      handler: function set ($v) {
      var _vm=this;
        _vm.drill = $v;
      
    }
    }} });