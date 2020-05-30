"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _usePromisify = _interopRequireDefault(require('vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_usePromisify["default"]);

_core["default"].app({
  globalData: {
    userInfo: null
  },
  navigationHeight: function navigationHeight() {
    var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
        statusBarHeight = _wx$getSystemInfoSync.statusBarHeight;

    var _wx$getMenuButtonBoun = wx.getMenuButtonBoundingClientRect(),
        top = _wx$getMenuButtonBoun.top,
        bottom = _wx$getMenuButtonBoun.bottom;

    return top - statusBarHeight + bottom;
  },
  onLaunch: function onLaunch() {
    //请配置自己的环境ID
    wx.cloud.init({
      env: "test-second"
    });


 // 获取小程序更新机制兼容
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            // 新的版本下载失败
            wx.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
            })
          })
        }
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }


  }
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} });