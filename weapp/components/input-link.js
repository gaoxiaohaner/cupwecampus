"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    show: {
      type: Boolean,
      "default": false
    }
  },
  data: {
    disabled: true,
    focus: true,
    link: null,
    url: '',
    isError: false,
    urlReg: /(https):\/\/([mp.weixin.qq.com|zhuanlan.zhihu.com|www.jianshu.com])[-A-Za-z0-9+&@#/%=~_|]*/,
    bottom: 0
  },
  attached: function attached() {
    var _this = this;

    wx.getClipboardData({
      success: function success(res) {
        if (_this.urlReg.test(res.data)) {
          _this.link = res.data;
        }
      }
    });
  },
  methods: {
    onFocus: function onFocus(res) {
      this.focus = true;
      var height = res.$wx.detail.height;

      if (height) {
        this.bottom = height;
      }
    },
    onSelect: function onSelect() {
      this.url = this.link;
      this.link = null;
    },
    onBlur: function onBlur() {
      this.bottom = 0;
      this.focus = false;
    },
    onAdd: function onAdd() {
      if (this.urlReg.test(this.url)) {
        this.isError = false;
        this.$emit('add', this.url);
      } else {
        this.isError = true;
      }
    },
    onClose: function onClose() {
      this.$emit('close');
    }
  }
}, {info: {"components":{"screen-dialog":{"path":"half-screen-dialog\\half-screen-dialog"}},"on":{"71-0":["close"]}}, handlers: {'71-0': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event)
      })();
    
  }},'71-1': {"focus": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFocus($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBlur($event)
      })();
    
  }},'71-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSelect($event)
      })();
    
  }},'71-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAdd($event)
      })();
    
  }}}, models: {'9': {
      type: "input",
      expr: "url",
      handler: function set ($v) {
      var _vm=this;
        _vm.url = $v;
      
    }
    }} });