"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    btntext: '开始体验',
    items: [{
      title: '记录校园',
      des: '记录校园生活，分享大学故事',
      icon: 'http://love.gh0614.com/quanziimage/guide_1.svg'
    }, {
      title: '真实的TA',
      des: '全国各高校真实学生，学生实名认证',
      icon: 'http://love.gh0614.com/quanziimage/guide_2.svg'
    }, {
      title: '拓展圈子',
      des: '认识志趣相同的同学,拓展人脉',
      icon: 'http://love.gh0614.com/quanziimage/guide_3.svg'
    }, {
      title: '校园网红',
      des: '施展你的才华,成为校园里耀眼的星',
      icon: 'http://love.gh0614.com/quanziimage/guide_4.svg'
    }],
    loading: false,
    disabled: false
  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var scene, room, mode, id, postId, commentId, obj, params, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, p, arr;

      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              scene = decodeURIComponent(q.scene);
              room = q.room, mode = q.mode, id = q.id, postId = q.postId, commentId = q.commentId;

              if (!scene) {
                _context.next = 27;
                break;
              }

              obj = {};
              params = scene.split('&');
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 8;

              for (_iterator = params[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                p = _step.value;
                arr = p.split('=');

                if (arr.length === 2) {
                  obj[arr[0]] = arr[1];
                }
              }

              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](8);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 16:
              _context.prev = 16;
              _context.prev = 17;

              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }

            case 19:
              _context.prev = 19;

              if (!_didIteratorError) {
                _context.next = 22;
                break;
              }

              throw _iteratorError;

            case 22:
              return _context.finish(19);

            case 23:
              return _context.finish(16);

            case 24:
              _this.shareId = obj.id || id;
              _this.$app.$options.globalData.postId = obj.postId || postId;
              _this.$app.$options.globalData.commentId = obj.commentId || commentId;

            case 27:
              if (!_api.User.getUserId()) {
                _context.next = 30;
                break;
              }

              _context.next = 30;
              return _this.login();

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 12, 16, 24], [17,, 19, 23]]);
    }))();
  },
  methods: {
    login: function login() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var isLogin;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                _this2.disabled = true;
                _this2.btntext = '开启中..';
                _context2.next = 5;
                return _api.User.login(_this2.shareId);

              case 5:
                isLogin = _context2.sent;

                if (isLogin) {
                  wx.switchTab({
                    url: '/pages/home'
                  });
                } else {
                  _this2.btntext = '重试';
                }

                _this2.loading = false;
                _this2.disabled = false;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'3-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.login($event)
      })();
    
  }}}, models: {} });