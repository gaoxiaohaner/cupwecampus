"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    commentCount: Number,
    thumbsCount: Number,
    toId: Number,
    postId: Number,
    commentId: Number,
    likeType: Number,
    showShare: {
      type: Boolean,
      "default": true
    },
    isLike: {
      type: Boolean,
      "default": false
    },
    des: {
      type: String,
      "default": '来,神评是你的'
    }
  },
  methods: {
    onShowInput: function onShowInput() {
      this.$emit('showInput');
    },
    onShare: function onShare() {
      wx.navigateTo({
        url: '/pages/post-share?id=' + this.postId
      });
    },
    onCommentTap: function onCommentTap() {
      this.$emit('commentTap');
    },
    onLike: function onLike() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var isUp;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isUp = false;

                if (!_this.isLike) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return _api.Post.cancelLike(_this.likeType, _this.likeType === 0 ? _this.postId : _this.commentId);

              case 4:
                isUp = _context.sent;
                _context.next = 11;
                break;

              case 7:
                _api.Post.subscribe();

                _context.next = 10;
                return _api.Post.like(_this.toId, _this.postId, _this.commentId, _this.likeType);

              case 10:
                isUp = _context.sent;

              case 11:
                if (isUp) {
                  _this.$emit('like', !_this.isLike);
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'66-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShowInput($event)
      })();
    
  }},'66-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCommentTap($event)
      })();
    
  }},'66-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onLike($event)
      })();
    
  }},'66-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'66-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShowInput($event)
      })();
    
  }},'66-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCommentTap($event)
      })();
    
  }},'66-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onLike($event)
      })();
    
  }},'66-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} });