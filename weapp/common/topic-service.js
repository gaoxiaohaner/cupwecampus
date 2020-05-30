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

var KEY_TOPIC_TRACK = 'TOPIC_TRACK';

var TopicService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(TopicService, _BaseService);

  function TopicService() {
    _classCallCheck(this, TopicService);

    return _possibleConstructorReturn(this, _getPrototypeOf(TopicService).call(this));
  }

  _createClass(TopicService, [{
    key: "searchTopic",
    value: function () {
      var _searchTopic = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(_ref) {
        var _this = this;

        var keyword, pageIndex, pageSize, res;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                keyword = _ref.keyword, pageIndex = _ref.pageIndex, pageSize = _ref.pageSize;
                _context.next = 3;
                return this.callFunction('topic', 'list', {
                  keyword: keyword,
                  pageIndex: pageIndex,
                  pageSize: pageSize
                });

              case 3:
                res = _context.sent;

                if (!(res.code === 0)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.data.map(function (topic) {
                  return _this.parseTopic(topic);
                }));

              case 6:
                return _context.abrupt("return", []);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function searchTopic(_x) {
        return _searchTopic.apply(this, arguments);
      }

      return searchTopic;
    }()
  }, {
    key: "getListForUser",
    value: function () {
      var _getListForUser = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(_ref2) {
        var pageIndex, pageSize, _ref2$userId, userId, res;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pageIndex = _ref2.pageIndex, pageSize = _ref2.pageSize, _ref2$userId = _ref2.userId, userId = _ref2$userId === void 0 ? null : _ref2$userId;

                if (!userId) {
                  userId = this.getUserId();
                }

                _context2.next = 4;
                return this.callFunction('topic', 'listForUser', {
                  pageIndex: pageIndex,
                  pageSize: pageSize,
                  userId: userId
                });

              case 4:
                res = _context2.sent;

                if (!(res.code === 0)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", res.data.map(this.parseTopic.bind(this)));

              case 7:
                return _context2.abrupt("return", null);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getListForUser(_x2) {
        return _getListForUser.apply(this, arguments);
      }

      return getListForUser;
    }()
  }, {
    key: "getDetails",
    value: function () {
      var _getDetails = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(id) {
        var res, bg;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.callFunction('topic', 'details', {
                  id: id
                });

              case 2:
                res = _context3.sent;

                if (!(res.code === 0 && res.data)) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 6;
                return this.getTempFileURL(res.data.iconSrc);

              case 6:
                bg = _context3.sent;
                res.data.bg = bg;
                return _context3.abrupt("return", this.parseTopic(res.data));

              case 9:
                return _context3.abrupt("return", null);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getDetails(_x3) {
        return _getDetails.apply(this, arguments);
      }

      return getDetails;
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
                return this.callFunction('topic', 'follow', {
                  id: id
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
                return this.callFunction('topic', 'cancelFollow', {
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
    key: "users",
    value: function () {
      var _users = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6(_ref3) {
        var topicId, pageIndex, pageSize;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                topicId = _ref3.topicId, pageIndex = _ref3.pageIndex, pageSize = _ref3.pageSize;

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function users(_x6) {
        return _users.apply(this, arguments);
      }

      return users;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee7(_ref4) {
        var title, des, iconSrc, nickName, res;
        return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                title = _ref4.title, des = _ref4.des, iconSrc = _ref4.iconSrc, nickName = _ref4.nickName;
                wx.showLoading({
                  title: '创建中...',
                  mask: true
                });
                _context7.next = 4;
                return this.callFunction('topic', 'add', {
                  title: title,
                  des: des,
                  iconSrc: iconSrc,
                  nickName: nickName
                });

              case 4:
                res = _context7.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context7.next = 9;
                  break;
                }

                this.showToast('已创建成功', 'success');
                return _context7.abrupt("return", res.data);

              case 9:
                this.showToast('创建失败,重试');
                return _context7.abrupt("return", null);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function add(_x7) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "topicAddTrack",
    value: function topicAddTrack(topic) {
      try {
        var items = wx.getStorageSync(KEY_TOPIC_TRACK);

        if (items) {
          items = items.filter(function (item) {
            return item.id !== topic.id;
          });
          items.unshift(topic);

          if (items.length > 15) {
            items = items.slice(0, 15);
          }
        } else {
          items = [topic];
        }

        try {
          wx.setStorageSync(KEY_TOPIC_TRACK, items);
        } catch (e) {}
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "getTopicTrack",
    value: function getTopicTrack() {
      try {
        var items = wx.getStorageSync(KEY_TOPIC_TRACK);
        return items || null;
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "cleanTopicTrack",
    value: function cleanTopicTrack() {
      try {
        wx.removeStorageSync(KEY_TOPIC_TRACK);
        return true;
      } catch (e) {
        showToast('清空数据失败,重试');
        return false;
      }
    }
  }]);

  return TopicService;
}(_baseService["default"]);

exports["default"] = TopicService;