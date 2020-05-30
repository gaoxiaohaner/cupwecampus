"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    link: ''
  },
  onLoad: function onLoad(q) {
    var url =decodeURIComponent(q.url);
    console.log(url)
   // this.link = url

    if (url == '0') {
      var token = wx.getStorageSync('token') || '';
      //www.wutuobangxinyougou
      this.link = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx62dc167282faba35&redirect_uri=".concat(encodeURIComponent('https://love.gh0614.com/public/binding.html?token=' + token), "&response_type=code&scope=snsapi_base&state=0#wechat_redirect");
    } else {
      this.link = url;
    }

  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} });