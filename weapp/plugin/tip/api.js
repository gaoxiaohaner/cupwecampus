"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tip = void 0;

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

var TipService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(TipService, _BaseService);

  function TipService() {
    _classCallCheck(this, TipService);

    return _possibleConstructorReturn(this, _getPrototypeOf(TipService).apply(this, arguments));
  }

  _createClass(TipService, [{
    key: "reward",
    value: function () {
      var _reward = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(toId, postId, num) {
        var _this = this;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.post(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee() {
                  return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this.callFunction('tip', 'reward', {
                            toId: toId,
                            postId: postId,
                            num: num
                          });

                        case 2:
                          return _context.abrupt("return", _context.sent);

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })), '打赏中...', '已打赏', '打赏失败,重试');

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function reward(_x, _x2, _x3) {
        return _reward.apply(this, arguments);
      }

      return reward;
    }()
  }, {
    key: "convert",
    value: function () {
      var _convert = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(num) {
        var _this2 = this;

        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.post(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee3() {
                  return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return _this2.callFunction('tip', 'convert', {
                            num: num
                          });

                        case 2:
                          return _context3.abrupt("return", _context3.sent);

                        case 3:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                })), '转换中...', '已转换', '转换失败,重试');

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function convert(_x4) {
        return _convert.apply(this, arguments);
      }

      return convert;
    }()
  }, {
    key: "trade",
    value: function () {
      var _trade = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5(_ref3) {
        var pageIndex, pageSize, res;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                pageIndex = _ref3.pageIndex, pageSize = _ref3.pageSize;
                _context5.next = 3;
                return this.callFunction('tip', 'tradeLogs', {
                  pageIndex: pageIndex,
                  pageSize: pageSize
                });

              case 3:
                res = _context5.sent;

                if (!(res.code === 0)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", res.data);

              case 6:
                return _context5.abrupt("return", null);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function trade(_x5) {
        return _trade.apply(this, arguments);
      }

      return trade;
    }()
  }, {
    key: "getAssets",
    value: function () {
      var _getAssets = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.callFunction('tip', 'getAssets', {});

              case 2:
                res = _context6.sent;

                if (!(res.code === 0)) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return", res.data);

              case 5:
                return _context6.abrupt("return", null);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getAssets() {
        return _getAssets.apply(this, arguments);
      }

      return getAssets;
    }()
  }, {
    key: "monetize",
    value: function () {
      var _monetize = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee8(num) {
        var _this3 = this;

        return _regeneratorRuntime2["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.post(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee7() {
                  return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return _this3.callFunction('tip', 'monetize', {
                            num: num 
                          });

                        case 2:
                          return _context7.abrupt("return", _context7.sent);

                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                })), '申请中...', '已申请', '申请失败,重试');

              case 2:
                return _context8.abrupt("return", _context8.sent);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function monetize(_x6) {
        return _monetize.apply(this, arguments);
      }

      return monetize;
    }()
  }]);

  return TipService;
}(_baseService["default"]);

var Tip = new TipService();
exports.Tip = Tip;