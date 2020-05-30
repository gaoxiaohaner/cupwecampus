"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

var _share = _interopRequireDefault(require('../mixins/share.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  mixins: [_share["default"]],
  data: {
    tabs: [{
      title: '最新',
      showDot: false
    }, {
      title: '热门',
      showDot: false
    }, {
      title: '图文',
      showDot: false
    }, {
      title: '文章',
      showDot: false
    }, {
      title: '问答',
      showDot: false
    }],
    action: 'listForTopic',
    init0: false,
    init1: false,
    init2: false,
    init3: false,
    init4: false,
    current: 0,
    tabIndex: 0,
    topic: null,
    state: 0,
    opacity: 0,
    isSelf: false,
    topicId: null,
    type: 0,
    background: 'transparent',
    startY: 0,
    top: 100,
    baseTop: 0,
    position: 'position:fixed',
    bottom: 0,
    scrollY: false,
    refresherEnabled: false
  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var id, _wx$getMenuButtonBoun, bottom, top, height;

      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = q.id;
              _this.topicId = id;
              _wx$getMenuButtonBoun = wx.getMenuButtonBoundingClientRect(), bottom = _wx$getMenuButtonBoun.bottom, top = _wx$getMenuButtonBoun.top, height = _wx$getMenuButtonBoun.height;
              _this.bottom = _this.$app.$options.navigationHeight();

              _this.$wx.createSelectorQuery().select('.head').boundingClientRect(function (res) {
                var _top = _this.bottom + res.height + 20;

                _this.top = _top;
                _this.baseTop = _top;
                _this.position = 'position:fixed';
              }).exec();

              _context.next = 7;
              return _api.Topic.getDetails(id);

            case 7:
              _this.topic = _context.sent;
              console.log(   _this.topic)
/*
              if (_this.topic.id === 10) {
                _this.tabs[2].title = '兼职';
              }
*/
              _api.Topic.topicAddTrack(_this.topic);

              _this.init0 = true;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    onTabChange: function onTabChange(index) {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.current = index;

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    touchmove: function touchmove(res) {
      var _pageY = res.$wx.changedTouches[0].pageY;

      if (this.startY === 0) {
        this.startY = _pageY;
      }

      var offset = _pageY - this.startY;

      if (offset < 0) {
        if (this.top > this.bottom) {
          this.startY = _pageY;

          var _top = this.top + offset;

          this.top = _top < this.bottom ? this.bottom : _top;
        }
      } else {
        if (this.top < this.baseTop) {
          this.startY = _pageY;

          var _top2 = this.top + offset;

          this.top = _top2 > this.baseTop ? this.baseTop : _top2;
        }
      }
    },
    touchend: function touchend(res) {
      var _this3 = this;

      this.startY = 0;
      this.$wx.createSelectorQuery().select('.main').boundingClientRect(function (res) {
        var _wx$getMenuButtonBoun2 = wx.getMenuButtonBoundingClientRect(),
            top = _wx$getMenuButtonBoun2.top;

        if (res.top > (_this3.baseTop - top) / 2 + top) {
          _this3.top = _this3.baseTop;
          _this3.scrollY = false;
        } else {
          _this3.top = _this3.bottom;
          _this3.scrollY = true;
        }

        _this3.transition = 'all 0.3s';
        setTimeout(function () {
          _this3.transition = 'none';
        }, 300);
      }).exec();
    },
    onChange: function onChange(res) {
      var _res$$wx$detail = res.$wx.detail,
          current = _res$$wx$detail.current,
          source = _res$$wx$detail.source;
      this.tabIndex = current;

      if (!this["init".concat(current)]) {
        this["init".concat(current)] = true;
      }
    },
    goBack: function goBack() {
      wx.navigateBack();
    },
    goSend: function goSend() {
      wx.navigateTo({
        url: "/pages/post-send?type=0&topicId=".concat(this.topicId, "&title=").concat(encodeURI(this.topic.title))
      });
    },
    onFollow: function onFollow() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this4.topic.hasFollow) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 3;
                return _api.Topic.cancel(_this4.topic.id);

              case 3:
                if (!_context3.sent) {
                  _context3.next = 5;
                  break;
                }

                _this4.topic.hasFollow = false;

              case 5:
                _context3.next = 10;
                break;

              case 7:
                _context3.next = 9;
                return _api.Topic.follow(_this4.topic.id);

              case 9:
                _this4.topic.hasFollow = _context3.sent;

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"..\\components\\navigation-bar\\navigation-bar"},"tool":{"path":"..\\components\\action-tool"},"mp-list":{"path":"..\\components\\page-list"},"tab-bar":{"path":"..\\components\\tab-bar"}},"on":{"19-5":["change"],"19-7":["share"],"19-8":["share"],"19-9":["share"],"19-10":["share"],"19-11":["share"]}}, handlers: {'19-0': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.touchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.touchend($event)
      })();
    
  }},'19-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goBack($event)
      })();
    
  }},'19-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goBack($event)
      })();
    
  }},'19-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'19-5': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTabChange($event)
      })();
    
  }},'19-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event)
      })();
    
  }},'19-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'19-8': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'19-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'19-10': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'19-11': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} });