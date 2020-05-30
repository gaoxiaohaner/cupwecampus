"use strict";
 
var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

var _share = _interopRequireDefault(require('../mixins/share.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_share["default"]],
  data: {
    labels: [{
      title: '关注',
      showDot: false
    }, {
      title: '话题',
      showDot: false
    }, {
      title: '推荐',
      showDot: false
    }, {
      title: '同校',
      showDot: false
    }, {
      title: '图文',
      showDot: false
    }, {
      title: '文章',
      showDot: false
    }, {
      title: '问答',
      showDot: false
    }],
    init0: false,
    init1: false,
    init2: true,
    init3: false,
    init4: false,
    init5: false,
    init6: false,
    current: 2,
    tabIndex: 2,
    triggered: true,
    emptyBtnTxt: null,
    navigationHeight: 0
  },
  onLoad: function onLoad() {
    var _Post$getUser = _api.Post.getUser(),
        sysMsgCount = _Post$getUser.sysMsgCount,
        noticeCount = _Post$getUser.noticeCount;

    if (noticeCount || sysMsgCount) {
      wx.setTabBarBadge({
        index: 1,
        text: "".concat(sysMsgCount + noticeCount)
      });
    }

    (0, _api.appUpdate)();
    this.navigationHeight = this.$app.$options.navigationHeight();

    if (this.$app.$options.globalData.postId) {
      wx.navigateTo({
        url: '/pages/post-details?id=' + this.$app.$options.globalData.postId
      });
    }

    if (this.$app.$options.globalData.commentId) {
      wx.navigateTo({
        url: '/pages/post-comment?id=' + this.$app.$options.globalData.commentId
      });
    }

    this.emptyBtnTxt = _api.Post.getSchool() ? null : '选择学校';
  },
  methods: {
    onTabChange: function onTabChange(index) {
      this.current = index;
    },
    onChange: function onChange(res) {
      var _res$$wx$detail = res.$wx.detail,
          current = _res$$wx$detail.current,
          source = _res$$wx$detail.source;
      this.tabIndex = current;
      this.current = current;

      if (!this["init".concat(current)]) {
        this["init".concat(current)] = true;
      }
    },
    onEmptyTap: function onEmptyTap() {
      wx.navigateTo({
        url: "/pages/user-seting"
      });
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"..\\components\\navigation-bar\\navigation-bar"},"tabs":{"path":"..\\components\\tab-bar"},"list":{"path":"..\\components\\page-list"},"tool":{"path":"..\\components\\action-tool"},"page-topic":{"path":"..\\components\\page-topic"},"page-follow":{"path":"..\\components\\page-follow"}},"on":{"4-0":["change"],"4-2":["share"],"4-3":["emptyTap","share"],"4-5":["share"],"4-6":["share"],"4-7":["share"]}}, handlers: {'4-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTabChange($event)
      })();
    
  }},'4-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event)
      })();
    
  }},'4-2': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'4-3': {"emptyTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyTap($event)
      })();
    
  }, "share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'4-5': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'4-6': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event) 
      })();
    
  }},'4-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} });