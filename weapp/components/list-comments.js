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
  props: {
    id: Number,
    likeType: Number
  },
  data: {
    items: [],
    pageIndex: 1,
    pageSize: 15,
    hasMore: true,
    id: null,
    isLoading: false
  },
  attached: function attached() {// eventHub.$on('like', async ({ index, item }) => {
    //   console.log(index);
    //   console.log(item);
    //   eventHub.$off('like');
    //   // const item = this.items[index];
    //   // let isUp = false;
    //   // if (item.hasLike) {
    //   //   isUp = await Post.cancelLike(item.commenType || 1, item.id);
    //   // } else {
    //   //   isUp = await Post.like(
    //   //     item.fromId,
    //   //     item.postId,
    //   //     item.id,
    //   //     item.commenType || 1
    //   //   );
    //   // }
    //   // if (isUp) {
    //   //   this.items[index].hasLike = !item.hasLike;
    //   //   if (item.hasLike) {
    //   //     this.items[index].thumbsCount++;
    //   //   } else {
    //   //     this.items[index].thumbsCount--;
    //   //   }
    //   // }
    // });
  },
  methods: {
    loadData: function loadData(id) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (id) {
                  _this.id = id;
                }

                if (!(!_this.hasMore || _this.isLoading)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _this.isLoading = true;
                _context.next = 6;
                return _api.Post.getComments({
                  likeType: _this.likeType,
                  id: _this.id,
                  pageIndex: _this.pageIndex,
                  pageSize: _this.pageSize
                });

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
    addComment: function addComment(comment) {
      this.items.unshift(comment);
    },
    onLike: function onLike(_ref) {
      var _this2 = this;

      var index = _ref.index;
      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var item, isUp;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                item = _this2.items[index];
                isUp = false;

                if (!item.hasLike) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return _api.Post.cancelLike(item.commenType || 1, item.id);

              case 5:
                isUp = _context2.sent;
                _context2.next = 11;
                break;

              case 8:
                _context2.next = 10;
                return _api.Post.like(item.fromId, item.postId, item.id, item.commenType || 1);

              case 10:
                isUp = _context2.sent;

              case 11:
                if (isUp) {
                  _this2.items[index].hasLike = !item.hasLike;

                  if (item.hasLike) {
                    _this2.items[index].thumbsCount++;
                  } else {
                    _this2.items[index].thumbsCount--;
                  }
                }

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onRemove: function onRemove(_ref2) {
      var _this3 = this;

      var index = _ref2.index,
          comment = _ref2.comment;
      wx.showModal({
        title: '删除提示',
        content: '确定要删除该评论吗?',
        confirmText: '删除',
        confirmColor: '#d81e06',
        success: function () {
          var _success = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime2["default"].mark(function _callee3(res) {
            return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!res.confirm) {
                      _context3.next = 5;
                      break;
                    }

                    _context3.next = 3;
                    return _api.Post.removeComment(comment.id);

                  case 3:
                    if (!_context3.sent) {
                      _context3.next = 5;
                      break;
                    }

                    _this3.items.splice(index, 1);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function success(_x) {
            return _success.apply(this, arguments);
          }

          return success;
        }()
      });
    },
    onSet: function onSet(_ref3) {
      var index = _ref3.index,
          comment = _ref3.comment;
      wx.showModal({
        title: comment.isHot ? '取消提示' : '设置提示',
        content: comment.isHot ? '确定要取消热评吗?' : '确定要设置为热评吗',
        confirmText: comment.isHot ? '取消热评' : '设为热评',
        confirmColor: '#d81e06',
        success: function () {
          var _success2 = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime2["default"].mark(function _callee4(res) {
            return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!res.confirm) {
                      _context4.next = 5;
                      break;
                    }

                    _context4.next = 3;
                    return _api.Post.setCommentHot(comment.id);

                  case 3:
                    if (!_context4.sent) {
                      _context4.next = 5;
                      break;
                    }

                    comment.isHot = !comment.isHot;

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function success(_x2) {
            return _success2.apply(this, arguments);
          }

          return success;
        }()
      });
    }
  }
}, {info: {"components":{"empty":{"path":"empty"},"comment-item":{"path":"item-comment"}},"on":{"65-0":["like","remove","set"]}}, handlers: {'65-0': {"like": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onLike($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }, "set": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSet($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"empty":{"path":"empty"},"comment-item":{"path":"item-comment"}},"on":{"65-0":["like","remove","set"]}}, handlers: {'65-0': {"like": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onLike($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }, "set": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSet($event)
      })();
    
  }}}, models: {} });