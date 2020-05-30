"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  props: {
    showAction: {
      type: Boolean,
      "default": true
    },
    isLast: {
      type: Boolean,
      "default": false
    },
    showReply: {
      type: Boolean,
      "default": true
    },
    index: Number,
    item: Object
  },
  data: {},
  methods: {
    onPreview: function onPreview(imgs, index) {
      var urls = imgs.map(function (img) {
        return img.path;
      });
      wx.previewImage({
        urls: urls,
        current: urls[index]
      });
    },
    goComment: function goComment() {
      if (this.isLast) {
        _api.eventHub.$emit('showInput', this.item.from);
      } else {
        wx.navigateTo({
          url: "/pages/post-comment?id=".concat(this.item.id)
        });
      }
    },
    onLike: function onLike() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$emit('like', {
                  index: _this.index,
                  item: _this.item
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onCopy: function onCopy() {
      var _this2 = this;

      wx.showActionSheet({
        itemList: this.item.isSys ? ['复制评论', '删除', this.item.isHot ? '取消热评' : '设为热评'] : this.item.isSelf ? ['复制评论', '删除'] : ['复制评论'],
        success: function success(res) {
          if (res.tapIndex === 0) {
            wx.setClipboardData({
              data: _this2.item.baseTxt
            });
          } else if (res.tapIndex === 1) {
            _this2.$emit('remove', {
              index: _this2.index,
              comment: _this2.item
            });
          } else if (res.tapIndex === 2) {
            _this2.$emit('set', {
              index: _this2.index,
              comment: _this2.item
            });
          }
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    }
  }
}, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'69-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goComment($event)
      })();
    
  }, "longpress": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCopy($event)
      })();
    
  }},'69-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onLike($event)
      })();
    
  }},'69-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'69-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goComment($event)
      })();
    
  }, "longpress": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCopy($event)
      })();
    
  }},'69-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onLike($event)
      })();
    
  }},'69-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'69-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goComment($event)
      })();
    
  }, "longpress": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCopy($event)
      })();
    
  }},'69-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onLike($event)
      })();
    
  }},'69-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} });