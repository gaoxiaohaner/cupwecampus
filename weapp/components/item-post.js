"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    item: Object,
    showTool: {
      type: Boolean,
      "default": true
    },
    index: Number,
    showTopice: {
      type: Boolean,
      "default": true
    },
    showFollow: {
      type: Boolean,
      "default": false
    },
    isQuestions: {
      type: Boolean,
      "default": false
    }
  },
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
    goDetails: function goDetails(id) {
      wx.navigateTo({
        url: "/pages/post-details?id=".concat(id)
      }); 
    },
    goTopic: function goTopic(id) {
      wx.navigateTo({
        url: "/pages/topic?id=".concat(id)
      });
    },
    goWeb: function goWeb(url) {
      console.log(url)
      wx.navigateTo({
        url: "/pages/post-article?url="+encodeURIComponent(url)
      });
      /*
      wx.navigateTo({
        url: "/pages/post-article?url=".concat(_api.baseUrl, "/api/public/article/").concat(encodeURIComponent(url))
      });
      */ 
    },
    onMore: function onMore() {
      this.$emit('remove', {
        index: this.index,
        isSys: this.item.isSys,
        post: this.item.post,
      }); // eventHub.$emit('remove', {
      //   index: this.index,
      //   post: this.item
      // })
    },
    onFollow: function onFollow() {
      this.$emit('follow');
    },
    onCatchShare: function onCatchShare() {},
    onShare: function onShare() {
      console.log(1);
      this.$emit('share', {
        index: this.index,
        post: this.item.post
      });
      return false;
    }
  }
}, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        console.log(_vm)
        if(_vm.$evtId!="7-3")
        {
          //如果不是从帖子中进来的话
          _vm.goDetails(_vm.item.post.id)
        }
        

      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user":{"path":"item-user"}},"on":{}}, handlers: {'63-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'63-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'63-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goDetails(_vm.item.post.id)
      })();
    
  }},'63-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.post.imgs, index)
      })();
    
  }},'63-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goWeb(_vm.item.post.link)
      })();
    
  }},'63-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.post.topicId)
      })();
    
  }},'63-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCatchShare($event)
      })();
    
  }},'63-7': {"touchstart": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} });