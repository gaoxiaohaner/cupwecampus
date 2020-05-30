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
    toId: Number,
    postId: Number,
    commentId: Number,
    commenType: Number,
    isPlane: {
      type: Boolean,
      "default": false
    },
    showImg: {
      type: Boolean,
      "default": true
    },
    showCancel: {
      type: Boolean,
      "default": false
    },
    content: {
      type: String,
      "default": ''
    },
    replyType: {
      type: Number,
      "default": 0
    },
    show: {
      type: Boolean,
      "default": false
    },
    btnTxt: {
      type: String,
      "default": '发表'
    },
    btnCancelTxt: {
      type: String,
      "default": '取消'
    },
    placeholder: {
      type: String,
      "default": '来,神评是你的'
    }
  },
  data: {
    focus: false,
    disabled: true,
    loading: false,
    // btnTxt: '发表',
    user: null,
    cursor: -1,
    boardheight: 0,
    bottom: 0,
    imgs: [],
    inputType: 0,
    content: ''
  },
  watch: {
    show: function show(val) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.focus = val;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  methods: {
    onTouchmove: function onTouchmove() {},
    onFocus: function onFocus(res) {
      var _wx$getStorageSync = wx.getStorageSync('user'),
          isBinding = _wx$getStorageSync.isBinding;

      if (isBinding === 0) {
        wx.navigateTo({
          url: '/pages/gender'
        });
      } else {
        var height = res.$wx.detail.height;

        if (height) {
          this.bottom = height;
          this.boardheight = height;
          this.inputType = 0;
        }

        this.focus = true;
      }
    },
    onBlur: function onBlur(res) {
      var cursor = res.$wx.detail.cursor;

      if (cursor) {
        this.cursor = cursor;
      }

      this.cursor = cursor;

      if (this.inputType === 0) {
        this.focus = false;
        this.bottom = 0;
      }
    },
    onEmoji: function onEmoji(type) {
      if (type === 0) {
        wx.hideKeyboard();
        this.bottom = this.boardheight;
        this.focus = false;
      } else {
        this.focus = true;
      }

      this.inputType = type === 0 ? 1 : 0;
    },
    onInputEmoji: function onInputEmoji(val) {
      var str = this.content.split('');
      str.splice(this.cursor, 0, val);
      this.content = str.join('');

      if (this.cursor === -1) {
        this.cursor += val.length + 1;
      } else {
        this.cursor += val.length;
      }
    },
    onDelEmoji: function onDelEmoji() {
      var str = this.content.split('');
      var leftStr = this.content.substring(0, this.cursor);
      var leftLen = leftStr.length;
      var rightStr = this.content.substring(this.cursor);
      var left_left_Index = leftStr.lastIndexOf('[');
      var left_right_Index = leftStr.lastIndexOf(']');
      var right_right_Index = rightStr.indexOf(']');
      var right_left_Index = rightStr.indexOf('[');

      if (left_right_Index === leftLen - 1 && leftLen - left_left_Index <= 8 && left_left_Index > -1) {
        var len = left_right_Index - left_left_Index + 1;
        str.splice(this.cursor - len, len);
        this.cursor -= len;
      } else if (left_left_Index > -1 && right_right_Index > -1 && left_right_Index < left_left_Index && right_right_Index <= 6) {
        var _len = right_right_Index + 1 + (leftLen - left_left_Index);

        if (_len <= 10) {
          str.splice(this.cursor - (leftLen - left_left_Index), _len);
          this.cursor -= leftLen - left_left_Index;
        } else {
          str.splice(this.cursor, 1);
          this.cursor -= 1;
        }
      } else {
        str.splice(this.cursor, 1);
        this.cursor -= 1;
      }

      this.content = str.join('');
    },
    onkeyboardheightchange: function onkeyboardheightchange(e) {
      var height = e.$wx.detail.height;

      if (height > 0) {
        this.inputType = 0;
        this.bottom = height;
        this.boardheight = height;
      }
    },
    onHide: function onHide() {
      this.bottom = 0;
      this.focus = false;
      this.inputType = 0;
      this.$emit('hide');
    },
    chooseImage: function chooseImage() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res, tempFilePaths, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, info, height, width, type;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _core["default"].wx.chooseImage({
                  count: 9 - _this2.imgs.length,
                  sizeType: ['compressed'],
                  sourceType: ['album', 'camera']
                });

              case 2:
                res = _context2.sent;
                tempFilePaths = res.tempFilePaths;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 7;
                _iterator = tempFilePaths[Symbol.iterator]();

              case 9:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context2.next = 19;
                  break;
                }

                file = _step.value;
                _context2.next = 13;
                return _core["default"].wx.getImageInfo({
                  src: file
                });

              case 13:
                info = _context2.sent;
                height = info.height, width = info.width, type = info.type;

                _this2.imgs.push({
                  height: height,
                  width: width,
                  type: type,
                  path: file
                });

              case 16:
                _iteratorNormalCompletion = true;
                _context2.next = 9;
                break;

              case 19:
                _context2.next = 25;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 25:
                _context2.prev = 25;
                _context2.prev = 26;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 28:
                _context2.prev = 28;

                if (!_didIteratorError) {
                  _context2.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context2.finish(28);

              case 32:
                return _context2.finish(25);

              case 33:
                _this2.focus = true;

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[7, 21, 25, 33], [26,, 28, 32]]);
      }))();
    },
    onRemove: function onRemove(index) {
      this.imgs.splice(index, 1);
    },
    onSend: function onSend() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var comment;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wx.hideKeyboard();

                _api.Post.subscribe();

                if (!_this3.isPlane) {
                  _context3.next = 5;
                  break;
                }

                _this3.$emit('throw', _this3.content);

                return _context3.abrupt("return");

              case 5:
                wx.showLoading({
                  title: '发表中...',
                  mask: true
                });
                _this3.loading = true;
                _this3.btnTxt = '发表中...';
                _context3.next = 10;
                return _api.Post.uploadFile(_this3.imgs, 2);

              case 10:
                _this3.imgs = _context3.sent;
                _context3.next = 13;
                return _api.Post.comment({
                  toId: _this3.toId,
                  postId: _this3.postId,
                  commentId: _this3.commentId,
                  commenType: _this3.commenType,
                  content: _this3.content,
                  imgs: _this3.imgs
                });

              case 13:
                comment = _context3.sent;
                _this3.btnTxt = '发表';
                _this3.disabled = false;
                _this3.loading = false;
                _this3.content = '';
                _this3.imgs = [];

                _this3.$emit('comment', comment);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    }
  }
}, {info: {"components":{"emoji-input":{"path":"input-emoji"}},"on":{"67-2":["emoji","del"]}}, handlers: {'67-0': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }},'67-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHide($event)
      })();
    
  }},'67-2': {"emoji": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInputEmoji($event)
      })();
    
  }, "del": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDelEmoji($event)
      })();
    
  }},'67-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onRemove(index)
      })();
    
  }},'67-5': {"keyboardheightchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onkeyboardheightchange($event)
      })();
    
  }, "focus": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFocus($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBlur($event)
      })();
    
  }},'67-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(0)
      })();
    
  }},'67-9': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(1)
      })();
    
  }},'67-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'67-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }},'67-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSend($event)
      })();
    
  }}}, models: {'12': {
      type: "input",
      expr: "content",
      handler: function set ($v) {
      var _vm=this;
        _vm.content = $v;
      
    }
    }} }, {info: {"components":{"emoji-input":{"path":"input-emoji"}},"on":{"67-2":["emoji","del"]}}, handlers: {'67-0': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }},'67-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHide($event)
      })();
    
  }},'67-2': {"emoji": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInputEmoji($event)
      })();
    
  }, "del": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDelEmoji($event)
      })();
    
  }},'67-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onRemove(index)
      })();
    
  }},'67-5': {"keyboardheightchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onkeyboardheightchange($event)
      })();
    
  }, "focus": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFocus($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBlur($event)
      })();
    
  }},'67-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(0)
      })();
    
  }},'67-9': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(1)
      })();
    
  }},'67-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'67-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }},'67-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSend($event)
      })();
    
  }}}, models: {'12': {
      type: "input",
      expr: "content",
      handler: function set ($v) {
      var _vm=this;
        _vm.content = $v;
      
    }
    }} }, {info: {"components":{"emoji-input":{"path":"input-emoji"}},"on":{"67-2":["emoji","del"]}}, handlers: {'67-0': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }},'67-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHide($event)
      })();
    
  }},'67-2': {"emoji": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInputEmoji($event)
      })();
    
  }, "del": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDelEmoji($event)
      })();
    
  }},'67-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onRemove(index)
      })();
    
  }},'67-5': {"keyboardheightchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onkeyboardheightchange($event)
      })();
    
  }, "focus": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFocus($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBlur($event)
      })();
    
  }},'67-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(0)
      })();
    
  }},'67-9': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(1)
      })();
    
  }},'67-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'67-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }},'67-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSend($event)
      })();
    
  }}}, models: {'12': {
      type: "input",
      expr: "content",
      handler: function set ($v) {
      var _vm=this;
        _vm.content = $v;
      
    }
    }} }, {info: {"components":{"emoji-input":{"path":"input-emoji"}},"on":{"67-2":["emoji","del"]}}, handlers: {'67-0': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }},'67-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHide($event)
      })();
    
  }},'67-2': {"emoji": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInputEmoji($event)
      })();
    
  }, "del": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDelEmoji($event)
      })();
    
  }},'67-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onRemove(index)
      })();
    
  }},'67-5': {"keyboardheightchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onkeyboardheightchange($event)
      })();
    
  }, "focus": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFocus($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBlur($event)
      })();
    
  }},'67-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(0)
      })();
    
  }},'67-9': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(1)
      })();
    
  }},'67-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'67-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }},'67-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSend($event)
      })();
    
  }}}, models: {'12': {
      type: "input",
      expr: "content",
      handler: function set ($v) {
      var _vm=this;
        _vm.content = $v;
      
    }
    }} });