"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  props: {
    state: {
      type: Number,
      "default": 0 // 0:加载中,1:加载失败,2:加载成功,3:没数据
    },
    showLoadMore: {
      type: Boolean,
      "default": false
    },
    scrollY: {
      type: Boolean,
      "default": true
    },
    toView: {
      type: String,
      "default": ''
    },
    refresherEnabled: {
      type: Boolean,
      "default": true
    },
    showFooter: {
      type: Boolean,
      "default": true
    },
    triggered: {
      type: Boolean,
      "default": false
    },
    showBtn: {
      type: Boolean,
      "default": false
    },
    emptyBtnTxt: String,
    error: {
      type: String,
      "default": '加载失败,重试'
    },
    num: {
      type: Number,
      "default": -1
    },
    enableTips: {
      type: Boolean,
      "default": true
    }
  },
  watch: {
    num: function num(val) {
      var _this = this;

      if (val !== -1) {
        this.top = 10;
        setTimeout(function () {
          _this.top = -100;
        }, 2000);
      }
    }
  },
  data: {
    top: -100
  },
  methods: {
    onRefresherrefresh: function onRefresherrefresh() {
      this.$emit('refresherrefresh'); // this.triggered = false;
    },
    onRefresherrestore: function onRefresherrestore() {
      this.$emit('refresherrestore');
    },
    onScroll: function onScroll(res) {
      this.$emit('scroll', res.$wx.detail);
    },
    onScrolltolower: function onScrolltolower() {
      this.$emit('scrolltolower');
    },
    onRefresherpulling: function onRefresherpulling() {
      this.$emit('refresherpulling');
    },
    onReload: function onReload() {
      this.$emit('relaod');
    },
    onEmptyBtnTap: function onEmptyBtnTap() {
      this.$emit('emptyTap');
    }
  }
}, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading\\loading"}},"on":{}}, handlers: {'61-0': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'61-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReload($event)
      })();
    
  }},'61-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyBtnTap($event)
      })();
    
  }}}, models: {} });