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
    tabIndex: 0,
    current: 0,
    action: 'listForUser',
    tabs: [{
      title: '动弹',
      showDot: false
    }, {
      title: '文章',
      showDot: false
    }, {
      title: '问答',
      showDot: false
    }, {
      title: '话题',
      showDot: false
    }],
    startY: 0,
    top: 400,
    baseTop: 0,
    position: 'position:fixed',
    bottom: 0,
    scrollY: false,
    transition: 'none',
    isSelf: false,
    loadPhotos: false,
    loadTag: false,
    isgz: false,
    user: null,
    userId: 0,
    init0: false,
    init1: false,
    init2: false,
    init3: false
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
              _this.userId = id;
              console.log(_this.userId);
              _wx$getMenuButtonBoun = wx.getMenuButtonBoundingClientRect(), bottom = _wx$getMenuButtonBoun.bottom, top = _wx$getMenuButtonBoun.top, height = _wx$getMenuButtonBoun.height;
              _this.bottom = _this.$app.$options.navigationHeight();

              _this.$wx.createSelectorQuery().select('.head').boundingClientRect(function (res) {
                var _top = res.top + res.height;

                _this.top = _top;
                _this.baseTop = _top;
                _this.position = 'position:fixed';
              }).exec();

              _context.next = 8;
              console.log(id)
              return _api.User.details(id);

            case 8:
              _this.user = _context.sent;
              _this.init0 = true;

            case 10:
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

      if (!this["init".concat(current)]) {
        this["init".concat(current)] = true;
      }
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
      var _this2 = this;

      this.startY = 0;
      this.$wx.createSelectorQuery().select('.content').boundingClientRect(function (res) {
        var _wx$getMenuButtonBoun2 = wx.getMenuButtonBoundingClientRect(),
            top = _wx$getMenuButtonBoun2.top;

        if (res.top > (_this2.baseTop - top) / 2 + top) {
          _this2.top = _this2.baseTop;
          _this2.scrollY = false;
        } else {
          _this2.top = _this2.bottom;
          _this2.scrollY = true;
        }

        _this2.transition = 'all 0.3s';
        setTimeout(function () {
          _this2.transition = 'none';
        }, 300);
      }).exec();
    },
    onFollow: function onFollow() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this3.user.hasFollow) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 3;
                return _api.User.cancel(_this3.user.id);

              case 3:
                if (!_context2.sent) {
                  _context2.next = 5;
                  break;
                }

                _this3.user.hasFollow = false;

              case 5:
                _context2.next = 10;
                break;

              case 7:
                _context2.next = 9;
           //     console.log(_this3.user.id)
                return _api.User.follow(_this3.user.id);

              case 9:
                _this3.user.hasFollow = _context2.sent;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    goEdit: function goEdit() {
      wx.navigateTo({
        url: "/pages/user-seting"
      });
    },
    goFans: function goFans(type) {
      wx.navigateTo({
        url: "/pages/user-fans?id=".concat(this.user.id, "&type=").concat(type)
      });
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"..\\components\\navigation-bar\\navigation-bar"},"tabs":{"path":"..\\components\\tab-bar"},"mp-list":{"path":"..\\components\\page-list"},"topic-list":{"path":"..\\components\\page-list"},"item-topic":{"path":"..\\components\\item-topic"}},"on":{"13-6":["change"],"13-8":["share"],"13-9":["share"],"13-10":["share"]}}, handlers: {'13-0': {"touchmove": function proxy () {
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
    
  }},'13-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goEdit($event)
      })();
    
  }},'13-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'13-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goFans(0)
      })();
    
  }},'13-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goFans(1)
      })();
    
  }},'13-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTabChange($event)
      })();
    
  }},'13-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event)
      })();
    
  }},'13-8': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'13-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'13-10': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} });