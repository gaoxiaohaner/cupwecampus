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

var MessageService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(MessageService, _BaseService);

  function MessageService() {
    _classCallCheck(this, MessageService);

    return _possibleConstructorReturn(this, _getPrototypeOf(MessageService).call(this));
  }

  _createClass(MessageService, [{
    key: "notice",
    value: function () {
      var _notice = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2; 
                return this.callFunction('message', 'notice', {});

              case 2:
                res = _context.sent;

                if (!(res.code === 0)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", res.data);

              case 5:
                return _context.abrupt("return", null);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function notice() {
        return _notice.apply(this, arguments);
      }

      return notice;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(options) {
        var _this = this;

        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.callFunction('message', 'list', options);

              case 2:
                res = _context2.sent;
                console.log(res)
                if (!(res.code === 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.data.map(function (item) {
                  if (item.post && item.post.imgs) {
                    item.post.imgs = item.post.imgs.map(function (img) {
                      var path = img.path;
                      img.path = _this.getQiniuUrl() + path;
                      img.thumbPath = _this.getQiniuUrl()  + path;
                      return img;
                    });
                  }

                  return item;
                }));

              case 5:
                return _context2.abrupt("return", null);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function list(_x) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "sysList",
    value: function () {
      var _sysList = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(options) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.callFunction('message', 'sysList', options);

              case 2:
                res = _context3.sent;

                if (!(res.code === 0)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", res.data);

              case 5:
                return _context3.abrupt("return");

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function sysList(_x2) {
        return _sysList.apply(this, arguments);
      }

      return sysList;
    }()
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(id) {
        var isSys,
            res,
            _args4 = arguments;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0: 
                isSys = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : false;
                _context4.next = 3;
                return this.callFunction('message', 'read', {
                  id: id,
                  isSys: isSys
                });

              case 3:
                res = _context4.sent;

                if (!(res.code === 0)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", true);

              case 6:
                return _context4.abrupt("return", false);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function read(_x3) {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }]);

  return MessageService;
}(_baseService["default"]);

exports["default"] = MessageService;