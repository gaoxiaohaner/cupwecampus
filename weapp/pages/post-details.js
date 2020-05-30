"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    showUser: false,
    isqq: false,
    showInput: false,
    navigationHeight: 0,
    post: null,
    toView: '',
    template: null,
    state: 0,
    editorCtx: null
  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee2() {
      var id;
      return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = q.id;
              _this.isqq = _api.Post.isQQ();
              _this.navigationHeight = _this.$app.$options.navigationHeight();

              if (!id) {
                _context2.next = 8;
                break;
              }

              _context2.next = 6;
              return _api.Post.details(id);

            case 6:
              _this.post = _context2.sent;

              if (_this.post) {
                setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee() {
                  return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!(_this.post.post.posType === 3)) {
                            _context.next = 5;
                            break;
                          }

                          _context.next = 3;
                          return _this.$refs.answers.loadData(_this.post.post);

                        case 3:
                          _context.next = 7;
                          break;

                        case 5:
                          _context.next = 7;
                          return _this.$refs.list.loadData(_this.post.post.id);

                        case 7:
                          _this.state = _this.post ? 2 : 1;

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })), 300);
              } else {
                _this.state = 1;
              }

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  onShareAppMessage: function onShareAppMessage() {
    var imageUrl = this.post.post.imgs && this.post.post.imgs.length ? this.post.post.imgs[0].path : "".concat(_api.imgUrl, "/share.png");
    return {
      title: this.post.post.baseTxt || this.post.post.articleTitle || this.post.post.content,
      imageUrl: imageUrl,
      path: "/pages/index?id=".concat(_api.Post.getUserId(), "&postId=").concat(this.post.post.id)
    };
  },
  methods: {
    onScroll: function onScroll(res) {
      this.toView = '';
      this.showUser = res.scrollTop > this.navigationHeight;
    },
    onCommentTap: function onCommentTap() {
      console.log(1);
      this.toView = 'other';
    },
    onEditorReady: function onEditorReady() {
      var _this2 = this;

      wx.createSelectorQuery().select('#editor').context(function (res) {
        if (res) {
          _this2.editorCtx = res.context;

          if (_this2.post) {
            _this2.editorCtx.setContents({
              html: _this2.post.post.articleHtml,
              delta: _this2.post.post.articleDelta
            });
          }
        }
      }).exec();
    },
    onScrolltolower: function onScrolltolower() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.post.post.posType === 3)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return _this3.$refs.answers.loadData();

              case 3:
                _context3.next = 7;
                break;

              case 5:
                _context3.next = 7;
                return _this3.$refs.list.loadData();

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onComment: function onComment(comment) {
      this.$refs.list.addComment(comment);
      this.showInput = false;
      this.post.post.commentCount++;
    },
    goBack: function goBack() {
      wx.navigateBack();
    },
    goTopic: function goTopic(id) {
      wx.navigateTo({
        url: "/pages/topic?id=".concat(this.post.post.topicId)
      });
    },
    goQustion: function goQustion() {
      wx.navigateTo({
        url: "/pages/post-details?id=".concat(this.post.post.questionId)
      });
    },
    onLike: function onLike(isLike) {
      this.post.hasLike = isLike;

      if (isLike) {
        this.post.post.thumbsCount++;
      } else {
        this.post.post.thumbsCount--;
      }
    },
    onAnswer: function onAnswer(isQuestion) {
      console.log("/pages/post-answer?id=".concat(this.post.post.questionId, "&title=").concat(encodeURI(this.post.post.articleTitle), "&topicId=").concat(this.post.post.topicId));

      if (isQuestion) {
        wx.navigateTo({
          url: "/pages/post-answer?id=".concat(this.post.post.questionId, "&topicId=").concat(this.post.post.topicId, "&title=").concat(encodeURI(this.post.post.articleTitle))
        });
      } else {
        wx.navigateTo({
          url: "/pages/post-answer?id=".concat(this.post.post.id, "&topicId=").concat(this.post.post.topicId, "&title=").concat(encodeURI(this.post.post.content))
        });
      }
    },
    onFollow: function onFollow() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4.post.hasFollow) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 3;
                return _api.User.cancel(_this4.post.user.id);

              case 3:
                if (!_context4.sent) {
                  _context4.next = 5;
                  break;
                }

                _this4.post.hasFollow = false;

              case 5:
                _context4.next = 11;
                break;

              case 7:
                _context4.next = 9;
                return _api.User.follow(_this4.post.user.id);

              case 9:
                _this4.post.hasFollow = _context4.sent;

                _api.User.subscribe();

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onShare: function onShare() {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        var imageUrl, path, goShare, title, id;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this5.isqq) {
                  _context5.next = 9;
                  break;
                }

                if (!wx.openQzonePublish) {
                  _context5.next = 7;
                  break;
                }

                imageUrl = _this5.post.post.imgs && _this5.post.post.imgs.length ? _this5.post.post.imgs[0].path : "".concat(_api.imgUrl, "/share.png");
                _context5.next = 5;
                return _api.Post.getShareImg(imageUrl, true);

              case 5:
                path = _context5.sent;
                wx.openQzonePublish({
                  text: _this5.post.post.baseTxt || _this5.post.post.articleTitle || _this5.post.post.content,
                  media: [{
                    type: 'photo',
                    path: path
                  }]
                });

              case 7:
                _context5.next = 13;
                break;

              case 9:
                goShare = function goShare() {
                  wx.navigateTo({
                    url: '/pages/post-share?id=' + id
                  });
                };

                title = '授权后才可以分享图片';
                id = _this5.post.post.id;
                wx.getSetting({
                  success: function success(res) {
                    if (res.authSetting['scope.writePhotosAlbum']) {
                      goShare();
                    } else {
                      var auth = res.authSetting['scope.writePhotosAlbum'];

                      if (auth === undefined) {
                        wx.authorize({
                          scope: 'scope.writePhotosAlbum',
                          success: function success() {
                            goShare();
                          },
                          fail: function fail() {
                            wx.showToast({
                              title: title,
                              icon: 'none'
                            });
                          }
                        });
                      } else {
                        wx.openSetting({
                          success: function success(res) {
                            if (res.authSetting['scope.writePhotosAlbum']) {
                              goShare();
                            } else {
                              wx.showToast({
                                title: title,
                                icon: 'none'
                              });
                            }
                          },
                          fail: function fail() {
                            wx.showToast({
                              title: title,
                              icon: 'none'
                            });
                          }
                        });
                      }
                    }
                  }
                });

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"..\\components\\navigation-bar\\navigation-bar"},"mp-page":{"path":"..\\components\\mp-page"},"user":{"path":"..\\components\\item-user"},"post-item":{"path":"..\\components\\item-post"},"list-answers":{"path":"..\\components\\list-answers"},"list-comments":{"path":"..\\components\\list-comments"},"comment-action":{"path":"..\\components\\comment-action"},"comment-input":{"path":"..\\components\\input-comment"},"reward":{"path":"..\\plugin\\tip\\components\\reward"}},"on":{"7-1":["scroll","scrolltolower"],"7-3":["follow"],"7-11":["showInput","like","commentTap"],"7-14":["hide","comment"]}}, handlers: {'7-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goBack($event)
      })();
    
  }},'7-1': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }},'7-3': {"follow": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onAnswer(true)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goQustion($event)
      })();
    
  }},'7-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'7-7': {"ready": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEditorReady($event)
      })();
    
  }},'7-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onAnswer(false)
      })();
    
  }},'7-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'7-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goTopic($event)
      })();
    
  }},'7-11': {"showInput": function proxy () {
    
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
    
  }, "commentTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCommentTap($event)
      })();
    
  }},'7-14': {"hide": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showInput = false
      })();
    
  }, "comment": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onComment($event)
      })();
    
  }},'7-16': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onAnswer(false)
      })();
    
  }}}, models: {} });