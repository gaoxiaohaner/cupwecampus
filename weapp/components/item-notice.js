"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    item: Object
  },
  data: {
    labels: ['评论:', '回复:', '回复:', '点赞了你的帖子', '点赞了你的评论', '点赞了你的回复', '关注了你', '回答了你的问题', '回复了你的吐槽:', '打赏你']
  },
  attached: function attached() {
    var _this = this;
   // console.log(_this.item)

    _api.eventHub.$on('allRead', function () {
      _this.item.isRead = true;
    });
  },
  methods: {
    onFollow: function onFollow() {
      _api.eventHub.$emit('follow', this.item);
    },
    goInfo: function goInfo() {
      if (!this.item.isRead) {
        _api.eventHub.$emit('read', this.item);

        this.item.isRead = true;
      }

      if (this.item.noticeType === 8) {
        wx.navigateTo({
          url: "/pages/post-comment?id=".concat(this.item.commentId)
        });
      } else {
        if (this.item.replyId) {
          wx.navigateTo({
            url: "/pages/post-comment?id=".concat(this.item.replyId)
          });
        } else if (this.item.postId) {
          wx.navigateTo({
            url: "/pages/post-details?id=".concat(this.item.postId)
          });
        }
      }
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'85-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goInfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }}}, models: {} });