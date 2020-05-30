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
    offset: {
      type: Number,
      "default": 0
    },
    placeholder: {
      type: String,
      "default": '正文'
    },
    loading: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: {
    formats: {},
    isA: false,
    isColor: false,
    canUse: true,
    editorCtx: null,
    navigationHeight: 0,
    boardHeight: 0,
    timer: null,
    isIOS: false,
    h: [1, 2, 3, 4, 5, 6]
  },
  attached: function attached() {
    var _this = this;

    console.log(wx.getSystemInfoSync());

    var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
        SDKVersion = _wx$getSystemInfoSync.SDKVersion,
        system = _wx$getSystemInfoSync.system;

    this.isIOS = !!(system.toLowerCase().search('ios') + 1);
    this.navigationHeight = this.$app.$options.navigationHeight();

    if (!_api.Post.isQQ()) {
      if (this.compareVersion(SDKVersion, '2.7.0') >= 0) {//
      } else {
        this.canUse = false; // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示

        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        });
      }
    }

    wx.onKeyboardHeightChange(function (res) {
      var height = res.height;

      if (height) {
        _this.boardHeight = height;
      }
    });
  },
  detached: function detached() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    compareVersion: function compareVersion(v1, v2) {
      v1 = v1.split('.');
      v2 = v2.split('.');
      var len = Math.max(v1.length, v2.length);

      while (v1.length < len) {
        v1.push('0');
      }

      while (v2.length < len) {
        v2.push('0');
      }

      for (var i = 0; i < len; i++) {
        var num1 = parseInt(v1[i]);
        var num2 = parseInt(v2[i]);

        if (num1 > num2) {
          return 1;
        } else if (num1 < num2) {
          return -1;
        }
      }

      return 0;
    },
    onBlur: function onBlur() {
      this.boardHeight = 0;
    },
    submit: function submit() {
      var _this2 = this;

      this.editorCtx.getContents({
        success: function () {
          var _success = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime2["default"].mark(function _callee(res) {
            return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this2.$emit('submit', res);

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function success(_x) {
            return _success.apply(this, arguments);
          }

          return success;
        }()
      });
    },
    onReady: function onReady() {
      var _this3 = this;

      this.$wx.createSelectorQuery().select('#editor').context(function (res) {
        _this3.editorCtx = res.context;

        if (_this3.editorCtx) {
          var obj = wx.getStorageSync('editor');

          if (obj) {
            var html = obj.html,
                delta = obj.delta;

            _this3.editorCtx.setContents({
              html: html,
              delta: delta
            });
          }
        }

        _this3.timer = setInterval(function () {
          if (_this3.editorCtx) {
            _this3.editorCtx.getContents({
              success: function success(res) {
                var html = res.html,
                    delta = res.delta;
                wx.setStorageSync('editor', {
                  html: html,
                  delta: delta
                });
              }
            });
          }
        }, 5 * 1000);
      }).exec();
    },
    onFormat: function onFormat(e) {
      if (!this.canUse) return;
      var _e$target$dataset = e.target.dataset,
          name = _e$target$dataset.name,
          value = _e$target$dataset.value;
      if (!name) return;
      this.editorCtx.format(name, value);
    },
    format: function format(e) {},
    onStatuschange: function onStatuschange(e) {
      this.formats = e.$wx.detail;
      console.log(this.formats);
    },
    chooseImage: function chooseImage() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res, tempFilePaths, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _core["default"].wx.chooseImage({
                  count: 9,
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

                for (_iterator = tempFilePaths[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  file = _step.value;

                  _this4.editorCtx.insertImage({
                    src: file
                  });
                }

                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 15:
                _context2.prev = 15;
                _context2.prev = 16;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 18:
                _context2.prev = 18;

                if (!_didIteratorError) {
                  _context2.next = 21;
                  break;
                }

                throw _iteratorError;

              case 21:
                return _context2.finish(18);

              case 22:
                return _context2.finish(15);

              case 23:
                _this4.focus = true;

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[7, 11, 15, 23], [16,, 18, 22]]);
      }))();
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'72-0': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBlur($event)
      })();
    
  }, "ready": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReady($event)
      })();
    
  }, "statuschange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onStatuschange($event)
      })();
    
  }},'72-3': {"touchend": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.isA = !_vm.isA
      })();
    
  }},'72-4': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-6': {"touchend": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.isColor = !_vm.isColor
      })();
    
  }},'72-7': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-9': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-11': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-13': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-15': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-17': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-19': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'72-21': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-23': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-25': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-27': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-29': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-31': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.submit($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'72-0': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBlur($event)
      })();
    
  }, "ready": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReady($event)
      })();
    
  }, "statuschange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onStatuschange($event)
      })();
    
  }},'72-3': {"touchend": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.isA = !_vm.isA
      })();
    
  }},'72-4': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-6': {"touchend": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.isColor = !_vm.isColor
      })();
    
  }},'72-7': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-9': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-11': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-13': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-15': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-17': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-19': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'72-21': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-23': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-25': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-27': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-29': {"touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.format($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFormat($event)
      })();
    
  }},'72-31': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.submit($event)
      })();
    
  }}}, models: {} });