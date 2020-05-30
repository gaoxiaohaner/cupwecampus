"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  props: {
    item: Object
  },
  methods: {
    goInfo: function goInfo() {
      if (this.item.comment.commentId) {
        wx.navigateTo({
          url: "/pages/post-comment?id=".concat(this.item.comment.commentId)
        });
      } else {
        wx.navigateTo({
          url: "/pages/post-details?id=".concat(this.item.comment.postId)
        });
      }
    }
  }
}, {info: {"components":{"user-item":{"path":"item-user"}},"on":{}}, handlers: {'84-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'84-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"item-user"}},"on":{}}, handlers: {'84-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'84-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"item-user"}},"on":{}}, handlers: {'84-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'84-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"item-user"}},"on":{}}, handlers: {'84-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'84-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"item-user"}},"on":{}}, handlers: {'84-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'84-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"item-user"}},"on":{}}, handlers: {'84-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'84-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"item-user"}},"on":{}}, handlers: {'84-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'84-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"item-user"}},"on":{}}, handlers: {'84-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'84-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"item-user"}},"on":{}}, handlers: {'84-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'84-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"item-user"}},"on":{}}, handlers: {'84-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'84-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} });