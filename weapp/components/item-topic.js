"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    item: Object,
    index: Number,
    isLink: {
      type: Boolean,
      "default": true
    },
    showBtn: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    goTopic: function goTopic(id) {
      if (this.isLink) {
        wx.navigateTo({
          url: "/pages/topic?id=".concat(id)
        });
      }
    },
    onFollow: function onFollow(topic, index) {
      this.$emit('follow', {
        topic: topic,
        index: index
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'74-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.id)
      })();
    
  }},'74-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(_vm.item, _vm.index)
      })();
    
  }}}, models: {} });