"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  data: {
    items: [],
    pageIndex: 1,
    pageSize: 20,
    hasMore: true,
    post: null,
    isLoading: false
  },
  attached: function attached() {},
  methods: {
    loadData: function loadData(post) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (post) {
                  _this.post = post;
                }

                if (!(!_this.hasMore || _this.isLoading)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _this.isLoading = true;
                _context.next = 6;
                return _api.Post.answers(_this.post.id, _this.pageIndex, _this.pageSize);

              case 6:
                res = _context.sent;

                if (!res) {
                  _context.next = 29;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 11;

                for (_iterator = res[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  _this.items.push(item);
                }

                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](11);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 19:
                _context.prev = 19;
                _context.prev = 20;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 22:
                _context.prev = 22;

                if (!_didIteratorError) {
                  _context.next = 25;
                  break;
                }

                throw _iteratorError;

              case 25:
                return _context.finish(22);

              case 26:
                return _context.finish(19);

              case 27:
                _this.pageIndex++;
                _this.hasMore = _this.pageSize === res.length;

              case 29:
                _this.isLoading = false;

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[11, 15, 19, 27], [20,, 22, 26]]);
      }))();
    },
    onAction: function onAction() {
      wx.navigateTo({
        url: "/pages/post-answer?id=".concat(this.post.id, "&topicId=").concat(this.post.topicId, "&title=").concat(encodeURI(this.post.content))
      });
    },
    onRemove: function onRemove(_ref) {
      var _this2 = this;

      var index = _ref.index,
          post = _ref.post;
      wx.showActionSheet({
        itemList: ['删除'],
        itemColor: '#d81e06',
        success: function success(res) {
          if (res.tapIndex === 0) {
            wx.showModal({
              title: '删除提示',
              content: '确定要删除该贴吗?',
              confirmText: '删除',
              confirmColor: '#d81e06',
              success: function () {
                var _success = _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee2(res) {
                  return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!res.confirm) {
                            _context2.next = 5;
                            break;
                          }

                          _context2.next = 3;
                          return _api.Post.removePost(post.id);

                        case 3:
                          if (!_context2.sent) {
                            _context2.next = 5;
                            break;
                          }

                          _this2.items.splice(index, 1);

                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                function success(_x) {
                  return _success.apply(this, arguments);
                }

                return success;
              }()
            });
          }
        }
      });
    }
  }
}, {info: {"components":{"empty":{"path":"empty"},"post-item":{"path":"item-post"}},"on":{"64-0":["remove"],"64-1":["action"]}}, handlers: {'64-0': {"remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }},'64-1': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAction($event)
      })();
    
  }}}, models: {} });