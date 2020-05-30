"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    innerWidth: '',
    content: '',
    show: true,
    showBox: false,
    analyseState: 0,
    opacity: 0,
    showMap: false,
    showLink: false,
    isPrivate: false,
    uplaodFile: null,
    loading: false,
    disabled: true,
    hasChoose: false,
    focus: true,
    cursor: -1,
    topic: null,
    placeholder: '记录真实的校园生活...',
    title: '写动弹',
    tips: null,
    btntext: '发布',
    types: [{
      title: '写问题',
      type: 3,
      icon: 'questions'
    }, {
      title: '发图文',
      type: 0,
      icon: 'xiezuo'
    }, {
      title: '写文章',
      type: 2,
      icon: 'write'
    }, {
      title: '分享文章',
      type: 1,
      icon: 'share-article'
    }],
    posType: 0,
    // 0:动弹,1:文章-分享链接,2:文章-富文本,3:问答-问题,
    bottom: 0,
    articleTitle: null,
    article: null,
    articleHtml: '',
    link: null,
    isGet: false,
    showTopic: false,
    images: [],
    choiceType: 0,
    inputType: 0,
    // 输入类型0文字1表情
    userId: null,
    user: null,
    hasUpload: false,
    isAuth: true,
    boardheight: 0,
    location: null
  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var type, id, topicId, title, index, rect, sys;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = q.type, id = q.id, topicId = q.topicId, title = q.title;

              index = parseInt(type) || 0;
              _this.onChoicePostType(_this.types[index - 1]);

              _this.userId = q.id;

              if (topicId) {
                _this.topic = {
                  id: topicId,
                  title: decodeURI(title)
                };
              }

              rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
              _this.innerWidth = rect ? 'width:' + rect.left + 'px' : '';
              sys = wx.getSystemInfoSync();
              _this.showMap = !sys.AppPlatform || sys.AppPlatform !== 'qq';

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    showAction: function showAction() {
      var _this2 = this;

      this.showBox = true;
      setTimeout(function () {
        _this2.opacity = 1;
      }, 100);
    },
    hideBox: function hideBox() {
      var _this3 = this;

      this.opacity = 0;
      setTimeout(function () {
        _this3.showBox = false;
      }, 300);
    },
    onClose: function onClose() {
      wx.navigateBack();
    },
    onChoicePostType: function onChoicePostType(item) {
      this.posType = item.type;
      this.title = item.title;
      this.hideBox();

      if (this.posType === 3) {
        this.placeholder = '请输入问题(5-30个字)问号结尾';
      } else if (this.posType === 1) {
        this.placeholder = '此时对文章的看法...';
        this.showLink = true;
      } else if (this.posType === 0) {
        this.placeholder = '记录真实的校园生活...';
      }
    },
    submit: function submit(res) {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var _post, imgs, images, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, path, _ref, height, width, type, _res, url;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.hideKeyboard();

                _api.Post.subscribe();

                if (_this4.topic) {
                  _context2.next = 5;
                  break;
                }

                _this4.onTopic();

                return _context2.abrupt("return");

              case 5:
                wx.showLoading({
                  title: '发布中...',
                  mask: true
                });
                _this4.btntext = '发布中';

                if (_this4.posType === 2) {
                  _this4.articleHtml = res.delta.ops;
                }

                if (!(_this4.posType === 0 && _this4.content.length < 5 && !_this4.images.length)) {
                  _context2.next = 13;
                  break;
                }

                _api.Post.showToast('动弹内容太少');

                return _context2.abrupt("return");

              case 13:
                if (!(_this4.posType === 3 && _this4.content.length < 5)) {
                  _context2.next = 18;
                  break;
                }

                _api.Post.showToast('问题标题太短');

                return _context2.abrupt("return");

              case 18:
                if (!(_this4.posType === 1 && !_this4.article)) {
                  _context2.next = 23;
                  break;
                }

                _this4.showLink = true;
                return _context2.abrupt("return");

              case 23:
                if (!(_this4.posType === 2 && _this4.articleTitle.length < 5)) {
                  _context2.next = 26;
                  break;
                }

                _api.Post.showToast('文章标题太短或内容太少');

                return _context2.abrupt("return");

              case 26:
                _this4.loading = true;
                _this4.disabled = true;
                _post = null;

                if (!(_this4.posType === 0)) {
                  _context2.next = 38;
                  break;
                }

                if (_this4.hasUpload) {
                  _context2.next = 34;
                  break;
                }

                _context2.next = 33;
                return _api.Post.uploadFile(_this4.images, 2);

              case 33:
                _this4.images = _context2.sent;

              case 34:
                _this4.hasUpload = true;
                _post = {
                  content: _this4.content,
                  imgs: _this4.images.filter(function (img) {
                    return img.path != null;
                  }),
                  posType: _this4.posType,
                  topicId: _this4.topic.id,
                  topicTitle: _this4.topic.title,
                  latitude: _this4.location.latitude,
                  longitude: _this4.location.longitude,
                  address: _this4.location.address
                };
                _context2.next = 90;
                break;

              case 38:
                if (!(_this4.posType === 1)) {
                  _context2.next = 42;
                  break;
                }

                _post = {
                  content: _this4.content,
                  link: _this4.link,
                  articleTitle: _this4.article.title,
                  articleImg: _this4.article.imageSrc,
                  posType: _this4.posType,
                  topicId: _this4.topic.id,
                  topicTitle: _this4.topic.title
                };
                _context2.next = 90;
                break;

              case 42:
                if (!(_this4.posType === 2)) {
                  _context2.next = 89;
                  break;
                }

                imgs = [];
                images = [];
                wx.showLoading({
                  title: '上传图片...',
                  mask: true
                });
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 49;
                _iterator = res.delta.ops[Symbol.iterator]();

              case 51:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context2.next = 71;
                  break;
                }

                item = _step.value;
                path = item.insert.image;

                if (!(path && path.indexOf(_api.Post.getQiniuUrl()) === -1)) {
                  _context2.next = 68;
                  break;
                }

                _context2.next = 57;
                return _core["default"].wx.getImageInfo({
                  src: path
                });

              case 57:
                _ref = _context2.sent;
                height = _ref.height;
                width = _ref.width;
                type = _ref.type;
                _context2.next = 63;
                return _api.Post.uploadFile([{
                  height: height,
                  width: width,
                  path: path
                }], 2);

              case 63:
                _res = _context2.sent;
                url = _api.Post.getQiniuUrl() + _res[0].path;
                item.insert.image = url;
                res.html = res.html.replace(path, url);

                if (_res[0].path) {
                  images.push({
                    height: height,
                    width: width,
                    path: _res[0].path
                  });
                }

              case 68:
                _iteratorNormalCompletion = true;
                _context2.next = 51;
                break;

              case 71:
                _context2.next = 77;
                break;

              case 73:
                _context2.prev = 73;
                _context2.t0 = _context2["catch"](49);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 77:
                _context2.prev = 77;
                _context2.prev = 78;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 80:
                _context2.prev = 80;

                if (!_didIteratorError) {
                  _context2.next = 83;
                  break;
                }

                throw _iteratorError;

              case 83:
                return _context2.finish(80);

              case 84:
                return _context2.finish(77);

              case 85:
                wx.hideLoading();
                _post = {
                  articleTitle: _this4.articleTitle,
                  articleHtml: res.html,
                  articleDelta: res.delta.ops,
                  introduction: res.text.substring(0, 140),
                  imgs: images.length ? images : null,
                  posType: _this4.posType,
                  topicId: _this4.topic.id,
                  topicTitle: _this4.topic.title
                };
                _context2.next = 90;
                break;

              case 89:
                if (_this4.posType === 3) {
                  _post = {
                    content: _this4.content,
                    posType: _this4.posType,
                    topicId: _this4.topic.id,
                    topicTitle: _this4.topic.title
                  };
                }

              case 90:
                _context2.next = 92;
                return _api.Post.release(_post);

              case 92:
                if (!_context2.sent) {
                  _context2.next = 95;
                  break;
                }

                try {
                  wx.removeStorageSync('editor');
                } catch (e) {
                  console.log(e);
                }

                _api.Post.subscribe(function () {
                  wx.navigateBack();
                });

              case 95:
                _this4.loading = false;
                _this4.disabled = false;

              case 97:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[49, 73, 77, 85], [78,, 80, 84]]);
      }))();
    },
    onLinkAdd: function onLinkAdd(url) {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this5.showLink = false;
                _this5.link = url;
                _context3.next = 4;
                return _api.Post.analyse(url);

              case 4:
                res = _context3.sent;

                if (res) {
                  _this5.article = res;
                } else {
                  _this5.analyseState = 1;
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onInput: function onInput() {
      this.canSend();
    },
    chooseImage: function chooseImage() {
      var _this6 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        var res, tempFilePaths, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, file, info, height, width;

        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(_this6.posType === 1 || _this6.posType === 3)) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.next = 4;
                return _core["default"].wx.chooseImage({
                  count: 9 - _this6.images.length,
                  sizeType: ['compressed'],
                  sourceType: ['album', 'camera']
                });

              case 4:
                res = _context4.sent;
                tempFilePaths = res.tempFilePaths;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context4.prev = 9;
                _iterator2 = tempFilePaths[Symbol.iterator]();

              case 11:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context4.next = 21;
                  break;
                }

                file = _step2.value;
                _context4.next = 15;
                return _core["default"].wx.getImageInfo({
                  src: file
                });

              case 15:
                info = _context4.sent;
                height = info.height, width = info.width;

                _this6.images.push({
                  height: height,
                  width: width,
                  path: file
                });

              case 18:
                _iteratorNormalCompletion2 = true;
                _context4.next = 11;
                break;

              case 21:
                _context4.next = 27;
                break;

              case 23:
                _context4.prev = 23;
                _context4.t0 = _context4["catch"](9);
                _didIteratorError2 = true;
                _iteratorError2 = _context4.t0;

              case 27:
                _context4.prev = 27;
                _context4.prev = 28;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 30:
                _context4.prev = 30;

                if (!_didIteratorError2) {
                  _context4.next = 33;
                  break;
                }

                throw _iteratorError2;

              case 33:
                return _context4.finish(30);

              case 34:
                return _context4.finish(27);

              case 35:
                _this6.focus = true;

                _this6.canSend();

              case 37:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[9, 23, 27, 35], [28,, 30, 34]]);
      }))();
    },
    onPreview: function onPreview(imgs, index) {
      var urls = imgs.map(function (img) {
        return img.path;
      });
      wx.previewImage({
        urls: urls,
        current: urls[index]
      });
    },
    onRemove: function onRemove(index) {
      this.images.splice(index, 1);
    },
    canSend: function canSend() {
      if (this.images.length > 0 || this.content.length >= 5) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    onkeyboardheightchange: function onkeyboardheightchange(e) {
      var height = e.$wx.detail.height;

      if (!this.isGet && height > 0) {
        this.inputType = 0;
        this.bottom = height;
        this.boardheight = height;
        this.isGet = true;
      }
    },
    onFocus: function onFocus(res) {
      var height = res.$wx.detail.height;

      if (height) {
        this.inputType = 0;
        this.bottom = height;
        this.boardheight = height;
        this.isGet = true;
      }
    },
    onBlur: function onBlur(res) {
      var cursor = res.$wx.detail.cursor;
      this.cursor = cursor;

      if (this.inputType === 0) {
        this.bottom = 0;
      }

      this.isGet = false;
      this.focus = false;
    },
    onEmoji: function onEmoji(type) {
      if (this.posType === 3) {
        return;
      }

      if (type === 0) {
        wx.hideKeyboard();
        this.bottom = this.boardheight;
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

      this.canSend();
    },

    /**
     * 
     */
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
        // "111[不简单]|23[33]"left_left_Index=3,left_right_Index=7,leftLen=8
        var len = left_right_Index - left_left_Index + 1;
        str.splice(this.cursor - len, len);
        this.cursor -= len;
      } else if (left_left_Index > -1 && right_right_Index > -1 && left_right_Index < left_left_Index && right_right_Index <= 6) {
        // left_left_Index:4,left_right_Index:3,right_right_Index:1,right_left_Index:2
        // "111[666][不简|单]"right_right_Index=1,left_left_Index=3,leftLen=6
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
    goAuth: function goAuth() {
      wx.navigateTo({
        url: '/pages/user-school'
      });
    },
    onDelLocation: function onDelLocation(type) {
      if (type === 0) {
        this.location = null;
      } else {
        this.topic = null;
      }
    },
    onMap: function onMap() {
      var _this7 = this;

      if (this.posType === 1 || this.posType === 3) {
        return;
      }

      this.bottom = 0;
      this.inputType = 0;
      wx.hideKeyboard();
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userLocation']) {
            _this7._openMap();
          } else {
            var auth = res.authSetting['scope.userLocation'];

            if (auth === undefined) {
              wx.authorize({
                scope: 'scope.userLocation',
                success: function success() {
                  _this7._openMap();
                },
                fail: function fail() {
                  wx.showToast({
                    title: '授权后才可以打开地图',
                    icon: 'none'
                  });
                }
              });
            } else {
              wx.openSetting({
                success: function success(res) {
                  if (res.authSetting['scope.userLocation']) {
                    _this7._openMap();
                  } else {
                    wx.showToast({
                      title: '授权后才可以打开地图',
                      icon: 'none'
                    });
                  }
                },
                fail: function fail() {
                  wx.showToast({
                    title: '授权后才可以打开地图',
                    icon: 'none'
                  });
                }
              });
            }
          }
        }
      });
    },
    _openMap: function _openMap() {
      var _this8 = this;

      wx.showLoading({
        title: '加载中'
      });
      wx.getLocation({
        altitude: true,
        isHighAccuracy: true,
        success: function success(res) {
          var latitude = res.latitude,
              longitude = res.longitude;
          wx.chooseLocation({
            latitude: latitude,
            longitude: longitude,
            success: function success(obj) {
              console.log(obj)
              wx.hideLoading();
              _this8.location = obj;
            },
            fail: function fail(err) {
              wx.hideLoading();
            }
          });
        },
        fail: function fail(err) {
          wx.hideLoading();
          console.log(err);
        }
      });
    },
    onTopic: function onTopic() {
      this.show = false;
      this.bottom = 0;
      this.focus = false;
      this.showTopic = true;
    },
    onSelect: function onSelect(topic) {
      this.topic = topic;
      this.onTopicClose();
    },
    onTopicClose: function onTopicClose() {
      var _this9 = this;

      this.showTopic = false;
      this.show = true;
      this.inputType = 0;
      var time = setTimeout(function () {
        _this9.focus = true;
        clearTimeout(time);
      }, 300);
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"..\\components\\navigation-bar\\navigation-bar"},"emoji-input":{"path":"..\\components\\input-emoji"},"link-input":{"path":"..\\components\\input-link"},"input-editor":{"path":"..\\components\\input-editor"},"topic-input":{"path":"..\\components\\input-topic"}},"on":{"9-11":["submit"],"9-12":["emoji","del"],"9-25":["result","close"],"9-27":["close","add"]}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event)
      })();
    
  }},'9-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.showAction($event)
      })();
    
  }},'9-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTopic($event)
      })();
    
  }},'9-3': {"keyboardheightchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onkeyboardheightchange($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBlur($event)
      })();
    
  }, "input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInput($event)
      })();
    
  }, "focus": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFocus($event)
      })();
    
  }},'9-7': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.images, index)
      })();
    
  }},'9-8': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onRemove(index)
      })();
    
  }},'9-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'9-10': {"input": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.disabled = _vm.articleTitle.length < 5
      })();
    
  }},'9-11': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.submit($event)
      })();
    
  }},'9-12': {"emoji": function proxy () {
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
    
  }},'9-14': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onDelLocation(0)
      })();
    
  }},'9-15': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'9-16': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(0)
      })();
    
  }},'9-17': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(1)
      })();
    
  }},'9-18': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMap($event)
      })();
    
  }},'9-19': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTopic($event)
      })();
    
  }},'9-20': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.posType !== 1 ? _vm.showLink = false : _vm.showLink = true
      })();
    
  }},'9-21': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.submit($event)
      })();
    
  }},'9-22': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goAuth($event)
      })();
    
  }},'9-23': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.hideBox($event)
      })();
    
  }},'9-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onChoicePostType(item)
      })();
    
  }},'9-25': {"result": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSelect($event)
      })();
    
  }, "close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTopicClose($event)
      })();
    
  }},'9-27': {"close": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showLink = false
      })();
    
  }, "add": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onLinkAdd($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "content",
      handler: function set ($v) {
      var _vm=this;
        _vm.content = $v;
      
    }
    },'6': {
      type: "input",
      expr: "articleTitle",
      handler: function set ($v) {
      var _vm=this;
        _vm.articleTitle = $v;
      
    }
    }} });