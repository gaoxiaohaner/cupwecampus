"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.appUpdate = exports.weibo_emojis = exports.eventHub = exports.imgUrl = exports.qiniuUrl = exports.baseImgUrl = exports.baseUrl = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _weiboEmotions = _interopRequireDefault(require('weibo-emotions.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var prefix = '/quanzi';
var baseUrl = 'https://love.gh0614.com' + prefix;
exports.baseUrl = baseUrl;
var baseImgUrl = 'https://love.gh0614.com'; // export const baseUrl = 'http://127.0.0.1:7001' + prefix

exports.baseImgUrl = baseImgUrl;
var qiniuUrl = ''; // 七牛存储自定义图片域名根据自己的配置

exports.qiniuUrl = qiniuUrl;
var imgUrl = baseImgUrl + '/public/images';
exports.imgUrl = imgUrl;
var genders = ['未知', '男', '女'];
var _height = 0;
var _statusBarHeight = 0;
var _headHeight = 0;
var weibo_icon_url = _weiboEmotions["default"].weibo_icon_url;
var emotions = _weiboEmotions["default"].emotions;
var eventHub = new _core["default"]();
exports.eventHub = eventHub;

var weibo_emojis = function () {
  var _emojis = {};

  for (var key in emotions) {
    if (emotions.hasOwnProperty(key)) {
      var ele = emotions[key];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = ele[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          _emojis[item.value] = {
            id: item.id,
            value: item.value,
            icon: item.icon.replace('/', '_'),
            url: weibo_icon_url + item.icon
          };
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }

  return _emojis;
}();

exports.weibo_emojis = weibo_emojis;

var appUpdate = function appUpdate() {
  var updateManager = wx.getUpdateManager();
  console.log(updateManager);
  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    console.log(res.hasUpdate);
  });
  updateManager.onUpdateReady(function () {
    wx.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success: function success(res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate();
        }
      }
    });
  });
  updateManager.onUpdateFailed(function () {
    // 新版本下载失败
    showToast('新版本下载失败');
  });
};

exports.appUpdate = appUpdate;

var BaseService =
/*#__PURE__*/
function () {
  function BaseService() {
    _classCallCheck(this, BaseService);

    try {
      if (_height === 0) {
        var res = wx.getSystemInfoSync();
        var _res = res,
            screenHeight = _res.screenHeight,
            pixelRatio = _res.pixelRatio,
            statusBarHeight = _res.statusBarHeight;
        _height = screenHeight * pixelRatio;
        _statusBarHeight = statusBarHeight;
        res = wx.getMenuButtonBoundingClientRect();

        if (res) {
          var _res2 = res,
              bottom = _res2.bottom,
              top = _res2.top;
          _headHeight = bottom + top - statusBarHeight;
        }
      }

      this.db = wx.cloud.database();
    } catch (error) {
      console.log(error);
    }
  }

  _createClass(BaseService, [{
    key: "showToast",
    value: function showToast() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '操作失败,重试';
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
      wx.showToast({
        title: title,
        icon: icon,
        duration: 2000
      });
    }
  }, {
    key: "isQQ",
    value: function isQQ() {
      var sys = wx.getSystemInfoSync();

      if (sys.AppPlatform && sys.AppPlatform === 'qq') {
        return true;
      }

      return false;
    }
  }, {
    key: "getShareImg",
    value: function () {
      var _getShareImg = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(fileName) {
        var isUrl,
            token,
            res,
            _args = arguments;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isUrl = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
                token = wx.getStorageSync('token') || '';
                _context.next = 4;
                return _core["default"].wx.downloadFile({
                  url: isUrl ? fileName : "".concat(baseUrl, "/api/public/image/").concat(encodeURIComponent(qiniuUrl + fileName)),
                  header: {
                    token: token,
                    'Content-Type': 'application/json',
                    'from-wx': '16f9d417-03c3-45cc-90c7-d58e4e447ae6'
                  },
                  method: 'GET'
                });

              case 4:
                res = _context.sent;

                if (!(res.statusCode === 200)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", res.tempFilePath);

              case 7:
                return _context.abrupt("return", null);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getShareImg(_x) {
        return _getShareImg.apply(this, arguments);
      }

      return getShareImg;
    }()
  }, {
    key: "parseEmoji",
    value: function parseEmoji(txt) {
      if (!txt) {
        return '';
      }

      return txt.split(/(\[[\u4e00-\u9fff,\uff1f,\w]{1,8}\])/).filter(function (str) {
        return str.length > 0;
      }).map(function (str) {
        var obj = {};

        if (/\[([\u4e00-\u9fff,\uff1f,\w]{1,8})\]/.test(str)) {
          if (weibo_emojis[str]) {
            obj.type = 1;
            obj.src = weibo_emojis[str].url;
          } else {
            obj.type = 0;
            obj.value = str;
          }
        } else {
          obj.type = 0;
          obj.value = str;
        }

        return obj;
      });
    }
  }, {
    key: "parseTopic",
    value: function parseTopic(topic) {
      topic.id = topic._id;
      return topic;
    }
  }, {
    key: "request",
    value: function () {
      var _request = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(url, data, method) {
        var token;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                token = wx.getStorageSync('token') || '';
                wx.showNavigationBarLoading();
                _context2.next = 4;
                return _core["default"].wx.request({
                  url:baseUrl + url,
                  data: data,
                  header: {
                    token: token,
                    'Content-Type': 'application/json',
                    'from-wx': '16f9d417-03c3-45cc-90c7-d58e4e447ae6'
                  },
                  method: method
                }).then(function (res) {
                  console.log(res);
                  console.log(url);
                  wx.hideNavigationBarLoading();
                  return res.data;
                })["catch"](function () {
                  console.log(url);
                  wx.hideNavigationBarLoading();
                  return {
                    code: -1
                  };
                });

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function request(_x2, _x3, _x4) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: "callFunction",
    value: function () {
      var _callFunction = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(controller, action, data) {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(controller,action,data);
                _context3.next = 3;
                return wx.cloud.callFunction({
                  name: 'api',
                  data: {
                    controller: controller,
                    action: action,
                    data: data
                  }
                }).then(function (res) {
                  console.log(res);
                  return res.result;
                })["catch"](function (err) {
                  console.log(err);
                  return {
                    code: -1
                  };
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function callFunction(_x5, _x6, _x7) {
        return _callFunction.apply(this, arguments);
      }

      return callFunction;
    }()
  }, {
    key: "getQiniuUrl",
    value: function getQiniuUrl() {
      return qiniuUrl;
    }
  }, {
    key: "getImgUrl",
    value: function getImgUrl() {
      return imgUrl;
    }
  }, {
    key: "getUser",
    value: function getUser() {
      return wx.getStorageSync('user');
    }
  }, {
    key: "getSchool",
    value: function getSchool() {
      var user = this.getUser();

      if (user) {
        return user.school;
      }

      return null;
    }
  }, {
    key: "getUserId",
    value: function getUserId() {
      var user = this.getUser();
      console.log(user);

      if (user) {
        return user._id;
      }

      return null;
    }
  }, {
    key: "getUserType",
    value: function getUserType() {
      var user = this.getUser();

      if (user) {
        return user.userType;
      }

      return null;
    }
  }, {
    key: "isBinding",
    value: function isBinding() {
      var user = this.getUser();

      if (user) {
        return user.isBinding;
      }

      return false;
    }
  }, {
    key: "subscribe",
    value: function subscribe(fun) {
      if (this.isQQ()) {
        wx.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.appMsgSubscribed'] === undefined) {
              wx.subscribeAppMsg({
                subscribe: true,
                success: function success() {
                  wx.showToast({
                    title: '订阅成功'
                  });
                }
              });
            } else if (res.authSetting['scope.appMsgSubscribed']) {
              wx.showToast({
                title: '已订阅'
              });
            } else {
              wx.openSetting({
                success: function success(res) {
                  console.log(res);
                }
              });
            }
          },
          fail: function fail(res) {
            console.log(res);
          },
          complete: function complete() {
            if (fun) {
              fun();
            }
          }
        });
      } else {
        wx.requestSubscribeMessage({
          tmplIds: ['KmtZi7MKPvXnwgriZrs2F5w3hdEB7WTiqRjc5Bljf-c'],
          success: function success(res) {
            console.log(res);

            for (var key in res) {
              if (key != 'errMsg') {
                if (res[key] == 'reject') {
                  if (fun) {
                    fun();
                  } else {
                    wx.showModal({
                      title: '订阅消息',
                      content: '您已拒绝了订阅消息，如需重新订阅请前往设置打开。',
                      confirmText: '去设置',
                      success: function success(res) {
                        if (res.confirm) {
                          wx.openSetting({});
                        }
                      }
                    });
                  }

                  return;
                } else {
                  wx.showToast({
                    title: '成功订阅一次'
                  });
                }
              }
            }
          },
          fail: function fail(res) {
            console.log(res);
          },
          complete: function complete() {
            if (fun) {
              fun();
            }
          }
        });
      }
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(imgs, type) {
        var userId, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, img, fileName, result;

        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userId = this.getUserId();
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context4.prev = 4;
                _iterator2 = imgs[Symbol.iterator]();

              case 6:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context4.next = 29;
                  break;
                }

                img = _step2.value;
                fileName = null;
                _context4.t0 = type;
                _context4.next = _context4.t0 === 0 ? 12 : _context4.t0 === 1 ? 14 : _context4.t0 === 2 ? 16 : _context4.t0 === 3 ? 18 : 20;
                break;

              case 12:
                // 头像
                fileName = "u_".concat(userId, "_").concat(new Date().getTime());
                return _context4.abrupt("break", 21);

              case 14:
                // 话题
                fileName = "t_".concat(userId, "_").concat(new Date().getTime());
                return _context4.abrupt("break", 21);

              case 16:
                // 帖子
                fileName = "p_".concat(userId, "_").concat(new Date().getTime());
                return _context4.abrupt("break", 21);

              case 18:
                // 认证
                fileName = "a_".concat(userId, "_").concat(new Date().getTime());
                return _context4.abrupt("break", 21);

              case 20:
                return _context4.abrupt("break", 21);

              case 21:
                console.log(fileName);
                _context4.next = 24;
                return wx.cloud.uploadFile({
                  cloudPath: fileName,
                  filePath: img.path // 文件路径

                }).then(function (res) {
                  return res.fileID;
                })["catch"](function () {
                  return null;
                });

              case 24:
                result = _context4.sent;

                if (result) {
                  img.path = result;
                } else {
                  img.path = null;
                }

              case 26:
                _iteratorNormalCompletion2 = true;
                _context4.next = 6;
                break;

              case 29:
                _context4.next = 35;
                break;

              case 31:
                _context4.prev = 31;
                _context4.t1 = _context4["catch"](4);
                _didIteratorError2 = true;
                _iteratorError2 = _context4.t1;

              case 35:
                _context4.prev = 35;
                _context4.prev = 36;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 38:
                _context4.prev = 38;

                if (!_didIteratorError2) {
                  _context4.next = 41;
                  break;
                }

                throw _iteratorError2;

              case 41:
                return _context4.finish(38);

              case 42:
                return _context4.finish(35);

              case 43:
                console.log(imgs);
                return _context4.abrupt("return", type === 2 ? imgs : imgs[0].path);

              case 45:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[4, 31, 35, 43], [36,, 38, 42]]);
      }));

      function uploadFile(_x8, _x9) {
        return _uploadFile.apply(this, arguments);
      }

      return uploadFile;
    }()
  }, {
    key: "parseGender",
    value: function parseGender(gender) {
      return genders[gender];
    }
  }, {
    key: "parseUser",
    value: function parseUser(user) {
      user.id = user._id;
      user.hasFollow = user.hasFollow || false;
      user.sex = user.gender;
      user.gender = this.parseGender(user.gender);
      return user;
    }
  }, {
    key: "getHeadHeight",
    value: function getHeadHeight() {
      return _headHeight;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return _height;
    }
  }, {
    key: "getBaseUrl",
    value: function getBaseUrl() {
      return baseUrl;
    }
  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5(fuc, loadTxt, successTxt, errTxt) {
        var res, title;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                wx.showLoading({
                  title: loadTxt,
                  mask: true
                });
                _context5.next = 3;
                return fuc();

              case 3:
                res = _context5.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context5.next = 8;
                  break;
                }

                this.showToast(successTxt, 'success');
                return _context5.abrupt("return", true);

              case 8:
                title = errTxt;

                if (res.erroCode > 0) {
                  title = res.msg;
                }

                this.showToast(title);
                return _context5.abrupt("return", false);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function post(_x10, _x11, _x12, _x13) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: "getTempFileURL",
    value: function () {
      var _getTempFileURL = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6(fileID) {
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return wx.cloud.getTempFileURL({
                  fileList: [{
                    fileID: fileID,
                    maxAge: 60 * 60 // one hour

                  }]
                }).then(function (res) {
                  return res.fileList && res.fileList[0].tempFileURL || null;
                })["catch"](function (error) {
                  console.log(error);
                  return null;
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getTempFileURL(_x14) {
        return _getTempFileURL.apply(this, arguments);
      }

      return getTempFileURL;
    }()
  }]);

  return BaseService;
}();

exports["default"] = BaseService;