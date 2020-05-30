"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    topic: Object
  },
  data: {
    items: [{
      title: '吐槽机',
      icon: 'tucaohover',
      type: -1
    }, {
      title: '写问答',
      icon: 'questions',
      type: 3
    }, {
      title: '发图文',
      icon: 'xiezuo',
      type: 0
    }, {
      title: '写文章',
      icon: 'write',
      type: 2
    }, {
      title: '分享文章',
      icon: 'share-article',
      type: 1
    }],
    showMore: false
  },
  methods: {
    goSend: function goSend(index) {
      this.showMore = false;

      if (index === 0) {
        wx.navigateTo({
          url: '/plugin/plane/index'
        });
        return;
      }

      if (this.topic) {
        wx.navigateTo({
          url: "/pages/post-send?type=".concat(index, "&topicId=").concat(this.topic.id, "&title=")
          .concat(encodeURI(this.topic.title),"&TopicownerId=").concat(this.topic.ownerId)
        });
      } else {
        wx.navigateTo({
          url: "/pages/post-send?type=".concat(index)
        });
      }
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'58-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showMore = !_vm.showMore
      })();
    
  }},'58-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.goSend(index)
      })();
    
  }},'58-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showMore = !_vm.showMore
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'58-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showMore = !_vm.showMore
      })();
    
  }},'58-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.goSend(index)
      })();
    
  }},'58-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showMore = !_vm.showMore
      })();
    
  }}}, models: {} });