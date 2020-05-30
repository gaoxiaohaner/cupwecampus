"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    state: 0,
    commenType: 1,
    toId: null,
    comment: null,
    placeholder: '',
    showInput: false
  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var id;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = q.id;

              if (!id) {
                _context.next = 11;
                break;
              }
 
              _context.next = 4;
              return _api.Post.getCommentDetail(id);

            case 4:
              _this.comment = _context.sent;

              if (!_this.comment) {
                _context.next = 10;
                break;
              }

              _this.placeholder = "\u56DE\u590D".concat(_this.comment.from.nick);
              _this.toId = _this.comment.from.id;
              _context.next = 10;
              return _this.$refs.list.loadData(_this.comment.id);

            case 10:
              _this.state = _this.comment ? 2 : 1;

            case 11:
              _api.eventHub.$on('showInput', function (user) {
                _this.placeholder = "\u56DE\u590D".concat(user.nick);
                _this.commenType = 2;
                _this.toId = user.id;
                _this.showInput = true;
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    loadData: function loadData() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!_this2.hasMore || _this2.isLoading)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _this2.isLoading = true;
                _context2.next = 5;
                return _api.Post.getComments({
                  likeType: 1,
                  id: _this2.comment.id,
                  pageIndex: _this2.pageIndex,
                  pageSize: _this2.pageSize
                });

              case 5:
                res = _context2.sent;

                if (!res) {
                  _context2.next = 28;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 10;

                for (_iterator = res[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  _this2.items.push(item);
                }

                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](10);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 18:
                _context2.prev = 18;
                _context2.prev = 19;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 21:
                _context2.prev = 21;

                if (!_didIteratorError) {
                  _context2.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context2.finish(21);

              case 25:
                return _context2.finish(18);

              case 26:
                _this2.pageIndex++;
                _this2.hasMore = _this2.pageSize === res.length;

              case 28:
                _this2.isLoading = false;

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[10, 14, 18, 26], [19,, 21, 25]]);
      }))();
    },
    onComment: function onComment(comment) {
      this.$refs.list.addComment(comment);
      this.showInput = false;
      this.comment.replyCount++;
    },
    onInputHide: function onInputHide() {
      this.commenType = 1;
      this.toId = this.comment.from.id;
      this.showInput = false;
    },
    onLike: function onLike(isLike) {
      this.comment.hasLike = isLike;

      if (isLike) {
        this.comment.thumbsCount++;
      } else {
        this.comment.thumbsCount--;
      }
    }
  }
}, {info: {"components":{"mp-page":{"path":"..\\components\\mp-page"},"list-comments":{"path":"..\\components\\list-comments"},"comment-action":{"path":"..\\components\\comment-action"},"comment-item":{"path":"..\\components\\item-comment"},"comment-input":{"path":"..\\components\\input-comment"}},"on":{"8-0":["showInput"],"8-1":["showInput","like"],"8-3":["hide","comment"]}}, handlers: {'8-0': {"showInput": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShowInput($event)
      })();
    
  }},'8-1': {"showInput": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showInput = true
      })();
    
  }, "like": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onLike($event)
      })();
    
  }},'8-3': {"hide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInputHide($event)
      })();
    
  }, "comment": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onComment($event)
      })();
    
  }}}, models: {} });