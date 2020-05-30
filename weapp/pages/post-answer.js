"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    loading: false,
    disabled: false,
    showBox: false,
    opacity: 0,
    id: null,
    topicId: null,
    title: ''
  },
  onLoad: function onLoad(q) {
    var id = q.id,
        title = q.title,
        topicId = q.topicId;
    console.log(q);
    this.title = decodeURI(title);
    this.id = id;
    this.topicId = topicId;
  },
  methods: {
    showAction: function showAction() {
      var _this = this;

      this.showBox = true;
      setTimeout(function () {
        _this.opacity = 1;
      }, 100);
    },
    hideBox: function hideBox() {
      var _this2 = this;

      this.opacity = 0;
      setTimeout(function () {
        _this2.showBox = false;
      }, 300);
    },
    onClose: function onClose() {
      wx.navigateBack();
    },
    submit: function submit(res) {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var imgs, images, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, path, _ref, height, width, type, _res, url, post;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(res.text.html < 20)) {
                  _context.next = 3;
                  break;
                }

                _api.Post.showToast('回答的内容太少');

                return _context.abrupt("return");

              case 3:
                _api.Post.subscribe();

                _this3.loading = true;
                _this3.disabled = true;
                imgs = [];
                images = [];
                wx.showLoading({
                  title: '上传图片...',
                  mask: true
                });
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 12;
                _iterator = res.delta.ops[Symbol.iterator]();

              case 14:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 34;
                  break;
                }

                item = _step.value;
                path = item.insert.image;

                if (!(path && path.indexOf(_api.Post.getQiniuUrl()) === -1)) {
                  _context.next = 31;
                  break;
                }

                _context.next = 20;
                return _core["default"].wx.getImageInfo({
                  src: path
                });

              case 20:
                _ref = _context.sent;
                height = _ref.height;
                width = _ref.width;
                type = _ref.type;
                _context.next = 26;
                return _api.Post.uploadFile([{
                  height: height,
                  width: width,
                  type: type,
                  path: path
                }], 2);

              case 26:
                _res = _context.sent;
                url = _api.Post.getQiniuUrl() + _res[0].path;
                item.insert.image = url;
                res.html = res.html.replace(path, url);

                if (_res[0].path) {
                  images.push({
                    height: height,
                    width: width,
                    type: type,
                    isQiniu: true,
                    path: _res[0].path
                  });
                }

              case 31:
                _iteratorNormalCompletion = true;
                _context.next = 14;
                break;

              case 34:
                _context.next = 40;
                break;

              case 36:
                _context.prev = 36;
                _context.t0 = _context["catch"](12);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 40:
                _context.prev = 40;
                _context.prev = 41;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 43:
                _context.prev = 43;

                if (!_didIteratorError) {
                  _context.next = 46;
                  break;
                }

                throw _iteratorError;

              case 46:
                return _context.finish(43);

              case 47:
                return _context.finish(40);

              case 48:
                wx.hideLoading();
                post = {
                  questionId: _this3.id,
                  topicId: _this3.topicId,
                  articleTitle: _this3.title,
                  articleHtml: res.html,
                  articleDelta: res.delta.ops,
                  introduction: res.text.substring(0, 200),
                  imgs: images.length ? images : null,
                  posType: 4
                };
                _context.next = 52;
                return _api.Post.release(post);

              case 52:
                if (!_context.sent) {
                  _context.next = 55;
                  break;
                }

                try {
                  wx.removeStorageSync('editor');
                } catch (e) {
                  console.log(e);
                }

                wx.navigateBack();

              case 55:
                _this3.loading = false;
                _this3.disabled = false;

              case 57:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[12, 36, 40, 48], [41,, 43, 47]]);
      }))();
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"..\\components\\navigation-bar\\navigation-bar"},"input-editor":{"path":"..\\components\\input-editor"}},"on":{"11-0":["back"],"11-2":["submit"]}}, handlers: {'11-0': {"back": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.showAction($event)
      })();
    
  }},'11-2': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.submit($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.hideBox($event)
      })();
    
  }}}, models: {} });