"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plane = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../../vendor.js')(3));

var _baseService = _interopRequireDefault(require('../../common/base-service.js'));

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

var PlaneService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(PlaneService, _BaseService);

  function PlaneService() {
    _classCallCheck(this, PlaneService);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlaneService).apply(this, arguments));
  }

  _createClass(PlaneService, [{
    key: "list",
    value: function () {
      var _list = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(pageIndex, pageSize) {
        var _this = this;

        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.callFunction('plane', 'list', {
                  pageIndex: pageIndex,
                  pageSize: pageSize
                });

              case 2:
                res = _context.sent;

                if (!(res.code === 0)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", res.data.map(function (item) {
                  item.user = _this.parseUser(item.user);
                  item.content = _this.parseEmoji(item.content);
                  item.id = item._id;
                  item.hasSeen = false;
                  return item;
                }));

              case 5:
                return _context.abrupt("return", null);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function list(_x, _x2) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(id) {
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.callFunction('plane', 'read', {
                  id: id
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read(_x3) {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "edit",
    value: function () {
      var _edit = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(content) {
        var res, title;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.isBinding()) {
                  _context3.next = 3;
                  break;
                }

                wx.navigateTo({
                  url: '/pages/gender'
                });
                return _context3.abrupt("return");

              case 3:
                wx.showLoading({
                  title: '发送中...',
                  mask: true
                });
                _context3.next = 6;
                return this.callFunction('plane', 'addOrUp', {
                  content: content
                });

              case 6:
                res = _context3.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context3.next = 13;
                  break;
                }

                this.showToast('已扔出', 'success');
                return _context3.abrupt("return", res.data);

              case 13:
                title = '发布失败,重试';

                if (res.erroCode > 0) {
                  title = res.msg;
                }

                this.showToast(title);

              case 16:
                return _context3.abrupt("return", null);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function edit(_x4) {
        return _edit.apply(this, arguments);
      }

      return edit;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                wx.showLoading({
                  title: '撤销中...',
                  mask: true
                });
                _context4.next = 3;
                return this.callFunction('plane', 'remove');

              case 3:
                res = _context4.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context4.next = 8;
                  break;
                }

                this.showToast('已撤销', 'success');
                return _context4.abrupt("return", true);

              case 8:
                this.showToast('撤销失败,重试');
                return _context4.abrupt("return", false);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function remove() {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }, {
    key: "details",
    value: function () {
      var _details = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5(id, isSelf) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.callFunction('plane', 'getPlane', {
                  id: id,
                  isSelf: isSelf
                });

              case 2:
                res = _context5.sent;

                if (!(res.code === 0)) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", res.data);

              case 5:
                return _context5.abrupt("return", null);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function details(_x5, _x6) {
        return _details.apply(this, arguments);
      }

      return details;
    }()
  }]);

  return PlaneService;
}(_baseService["default"]);

var Plane = new PlaneService();
exports.Plane = Plane;