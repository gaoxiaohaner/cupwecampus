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
  methods: { 
    onRead: function onRead() {
      _api.eventHub.$emit('sysread', this.item);
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'86-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRead($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'86-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRead($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'86-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRead($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'86-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRead($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'86-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRead($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'86-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRead($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'86-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRead($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'86-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRead($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'86-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRead($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'86-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRead($event)
      })();
    
  }}}, models: {} });