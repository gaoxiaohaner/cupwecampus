"use strict";

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    height: Number,
    hide: Boolean
  },
  data: {
    emojis: _api.weibo_emojis
  },
  methods: {
    onTap: function onTap(val) {
      this.$emit('emoji', val);
    },
    onDel: function onDel() {
      this.$emit('del');
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'70-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'70-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'70-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'70-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'70-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} });