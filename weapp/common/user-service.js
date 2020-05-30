"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _baseService = _interopRequireDefault(require('base-service.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UserService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(UserService, _BaseService);

  function UserService() {
    _classCallCheck(this, UserService);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserService).call(this));
  }

  _createClass(UserService, [{
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(shareId) {
        var openid, user;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                openid = this.getUserId();
                _context.next = 3;
                return this.callFunction('user', 'login', {
                  openid: openid,
                  shareId: shareId
                });

              case 3:
                user = _context.sent;

                if (!user) {
                  _context.next = 9;
                  break;
                }

                user.id = user._id;
                wx.setStorageSync('user', user);
                wx.setStorageSync('school', user.school);
                return _context.abrupt("return", true);

              case 9:
                return _context.abrupt("return", false);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "bindInfo",
    value: function () {
      var _bindInfo = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(_ref) {
        var nickName, avatarUrl, gender, province, city, res, user;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                nickName = _ref.nickName, avatarUrl = _ref.avatarUrl, gender = _ref.gender, province = _ref.province, city = _ref.city;
                _context2.next = 3;
                return this.callFunction('user', 'bindInfo', {
                  nick: nickName,
                  avtater: avatarUrl,
                  gender: gender,
                  province: province,
                  city: city
                });

              case 3:
                res = _context2.sent;

                if (!(res.code === 0)) {
                  _context2.next = 9;
                  break;
                }

                this.showToast('绑定成功', 'success');
                user = this.getUser();

                if (user) {
                  user = Object.assign(user, {
                    nick: nickName,
                    avtater: avatarUrl,
                    isBinding: 1,
                    gender: gender,
                    province: province,
                    city: city
                  });
                  wx.setStorageSync('user', user);
                }

                return _context2.abrupt("return", true);

              case 9:
                this.showToast('绑定失败,重试');
                return _context2.abrupt("return", false);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function bindInfo(_x2) {
        return _bindInfo.apply(this, arguments);
      }

      return bindInfo;
    }()
  }, {
    key: "details",
    value: function () {
      var _details = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!id) {
                  id = this.getUserId();
                }

                _context3.next = 3;
                return this.callFunction('user', 'details', {
                  id: id
                });

              case 3:
                res = _context3.sent;

                if (!(res.code === 0)) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", this.parseUser(res.data));

              case 6:
                return _context3.abrupt("return", null);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function details(_x3) {
        return _details.apply(this, arguments);
      }

      return details;
    }()
  }, {
    key: "follow",
    value: function () {
      var _follow = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.isBinding()) {
                  _context4.next = 3;
                  break;
                }

                wx.navigateTo({
                  url: '/pages/gender'
                });
                return _context4.abrupt("return");

              case 3:
                _context4.next = 5;
                return this.callFunction('user', 'follow', {
                  toId: id
                });

              case 5:
                res = _context4.sent;

                if (!(res.code === 0)) {
                  _context4.next = 9;
                  break;
                }

                this.showToast('已关注', 'success');
                return _context4.abrupt("return", true);

              case 9:
                this.showToast('关注失败,重试');
                return _context4.abrupt("return", false);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function follow(_x4) {
        return _follow.apply(this, arguments);
      }

      return follow;
    }()
  }, {
    key: "cancel",
    value: function () {
      var _cancel = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.callFunction('user', 'cancelFollow', {
                  id: id
                });

              case 2:
                res = _context5.sent;

                if (!(res.code === 0)) {
                  _context5.next = 6;
                  break;
                }

                this.showToast('取消成功', 'success');
                return _context5.abrupt("return", true);

              case 6:
                this.showToast('操作失败,重试');
                return _context5.abrupt("return", false);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function cancel(_x5) {
        return _cancel.apply(this, arguments);
      }

      return cancel;
    }()
  }, {
    key: "newData",
    value: function () {
      var _newData = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.callFunction('user', 'newData', {});

              case 2:
                res = _context6.sent;

                if (!(res.code === 0)) {
                  _context6.next = 6;
                  break;
                }

                res.data.id = res.data._id;
                return _context6.abrupt("return", res.data);

              case 6:
                return _context6.abrupt("return", null);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function newData() {
        return _newData.apply(this, arguments);
      }

      return newData;
    }()
  }, {
    key: "searchSchool",
    value: function () {
      var _searchSchool = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee7(keyword, pageIndex, pageSize) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.callFunction('user', 'searchSchool', {
                  keyword: keyword,
                  pageIndex: pageIndex,
                  pageSize: pageSize
                });

              case 2:
                res = _context7.sent;

                if (!(res.code === 0)) {
                  _context7.next = 5;
                  break;
                }

                return _context7.abrupt("return", res.data);

              case 5:
                return _context7.abrupt("return", null);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function searchSchool(_x6, _x7, _x8) {
        return _searchSchool.apply(this, arguments);
      }

      return searchSchool;
    }()
  }, {
    key: "change",
    value: function () {
      var _change = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee8(filed, value) {
        var res, user;
        return _regeneratorRuntime2["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                wx.showLoading({
                  title: '保存中...',
                  mask: true
                });
                _context8.next = 3;
                return this.callFunction('user', 'change', {
                  filed: filed,
                  value: value
                });

              case 3:
                res = _context8.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context8.next = 10;
                  break;
                }

                user = this.getUser();

                if (user) {
                  user[filed] = value;
                }

                this.showToast('设置成功', 'success');
                return _context8.abrupt("return", true);

              case 10:
                this.showToast('操作失败,重试');
                return _context8.abrupt("return", false);

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function change(_x9, _x10) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "auth",
    value: function () {
      var _auth = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee9(realName, authSrc) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                wx.showLoading({
                  title: '提交中...',
                  mask: true
                });
                _context9.next = 3;
                return this.callFunction('user', 'auth', {
                  realName: realName,
                  authSrc: authSrc
                });

              case 3:
                res = _context9.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context9.next = 8;
                  break;
                }

                this.showToast('提交成功', 'success');
                return _context9.abrupt("return", true);

              case 8:
                this.showToast('操作失败,重试');
                return _context9.abrupt("return", false);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function auth(_x11, _x12) {
        return _auth.apply(this, arguments);
      }

      return auth;
    }()
  }, {
    key: "fans",
    value: function () {
      var _fans = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee10(_ref2) {
        var pageIndex, pageSize, type, userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                pageIndex = _ref2.pageIndex, pageSize = _ref2.pageSize, type = _ref2.type, userId = _ref2.userId;
                _context10.next = 3;
                return this.callFunction('user', 'followList', {
                  pageIndex: pageIndex,
                  pageSize: pageSize,
                  type: type,
                  userId: userId
                });

              case 3:
                res = _context10.sent;

                if (!(res.code === 0)) {
                  _context10.next = 6;
                  break;
                }

                return _context10.abrupt("return", res.data.map(this.parseUser.bind(this)));

              case 6:
                return _context10.abrupt("return", null);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function fans(_x13) {
        return _fans.apply(this, arguments);
      }

      return fans;
    }()
  }, {
    key: "qrCode",
    value: function () {
      var _qrCode = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee11(postId, commentId) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.callFunction('user', 'qrCode', {
                  postId: postId,
                  commentId: commentId
                });

              case 2:
                res = _context11.sent;

                if (!(res.code === 0)) {
                  _context11.next = 5;
                  break;
                }

                return _context11.abrupt("return", res.data);

              case 5:
                return _context11.abrupt("return", null);

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function qrCode(_x14, _x15) {
        return _qrCode.apply(this, arguments);
      }

      return qrCode;
    }()
  }, {
    key: "kefu",
    value: function () {
      var _auth = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee9(realName, authSrc) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:

                _context9.next = 3;
                return this.callFunction('user', 'kefu', {
                  realName: realName,
                  authSrc: authSrc
                });

              case 3:
                res = _context9.sent;


                if (!(res.code === 0)) {
                  _context9.next = 8;
                  break;
                }

                this.showToast('您先发消息,小石才能回复哦', 'success');
                return _context9.abrupt("return", true);

              case 8:
                this.showToast('重新进入就好了');
                return _context9.abrupt("return", false);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function auth(_x11, _x12) {
        return _auth.apply(this, arguments);
      }

      return auth;
    }()
  }, {
    key: "pay",
    value: function () {
      var _pay = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee10(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 3;
                return this.callFunction('user', 'pay', {
                });

              case 3:
                res = _context10.sent;
                console.log(res)
                if (!(res)) {
                  console.log('哈哈哈')
                  _context10.next =8;
                  break;
                }
                let that=this
                wx.requestPayment({
                  timeStamp: res.timeStamp,
                  nonceStr: res.nonceStr,
                  package: res.package, //统一下单接口返回的 prepay_id 格式如：prepay_id=***
                  signType: 'MD5',
                  paySign: res.paySign, //签名
                  success(e) {
                    console.log(e)
                    if(e){
                      that.showToast('修改身份中', 'success');
                      that.callFunction('user', 'payvipvoer', {
                       payresult: _context10.sent,//支付的结果
                      });
                      var user = wx.getStorageSync('user');
                      user.userType = 1;
                      wx.setStorageSync('user', user);
                      _context10.next = 10;
                    }
                    that.showToast('VIP', 'success');
                   
                  },
                  fail(e){
                    console.log(e)
                    _context10.next = 8;
                  
                  }
                 })


            case 8:
            //    this.showToast('支付失败，或联系客服');
                return _context10.abrupt("return", false);
              
              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function pay(_x11) {
        return _pay.apply(this, arguments);
      }

      return _pay;
    }()
  }]);

  return UserService;
}(_baseService["default"]);

exports["default"] = UserService;