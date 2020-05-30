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

var PostService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(PostService, _BaseService);

  function PostService() {
    var _this;

    _classCallCheck(this, PostService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostService).call(this));
    _this.userId = _this.getUserId();
    _this.userType = _this.getUserType();
    return _this;
  }

  _createClass(PostService, [{
    key: "release",
    value: function () {
      var _release = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(post) {
        var res, title;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.callFunction('post', 'release', post);

              case 2:
                res = _context.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context.next = 9;
                  break;
                }

                this.showToast('成功发布', 'success');
                return _context.abrupt("return", true);

              case 9:
                title = '发布失败,重试';

                if (res.erroCode > 0) {
                  title = res.msg;
                }

                this.showToast(title);

              case 12:
                return _context.abrupt("return", false);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function release(_x) {
        return _release.apply(this, arguments);
      }

      return release;
    }()
  }, {
    key: "analyse",
    value: function () {
      var _analyse = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(url) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (url) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return this.callFunction('post', 'analyseUrl', {
                  url: url
                });

              case 4:
                res = _context2.sent;

                if (!(res.code === 0)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", res.data);

              case 7:
                return _context2.abrupt("return", null);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function analyse(_x2) {
        return _analyse.apply(this, arguments);
      }

      return analyse;
    }()
    /**
     * 推荐
     * @param {pageIndex, pageSize, begin, isRefresh, type} options 
     * type: 0:推荐,1:动弹,2:文章,3:问答
     */

  }, {
    key: "recommend",
    value: function () {
      var _recommend = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(options) {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._list('recommend', options);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function recommend(_x3) {
        return _recommend.apply(this, arguments);
      }

      return recommend;
    }()
  }, {
    key: "listForTopic",
    value: function () {
      var _listForTopic = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(options) {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._list('listForTopic', options);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function listForTopic(_x4) {
        return _listForTopic.apply(this, arguments);
      }

      return listForTopic;
    }()
  }, {
    key: "listForUser",
    value: function () {
      var _listForUser = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5(options) {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log(options);
                _context5.next = 3;
                return this._list('listForUser', options);

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function listForUser(_x5) {
        return _listForUser.apply(this, arguments);
      }

      return listForUser;
    }()
  }, {
    key: "listForSchool",
    value: function () {
      var _listForSchool = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6(options) {
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                options.school = this.getSchool();
                _context6.next = 3;
                return this._list('listForSchool', options);

              case 3:
                return _context6.abrupt("return", _context6.sent);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function listForSchool(_x6) {
        return _listForSchool.apply(this, arguments);
      }

      return listForSchool;
    }()
    /**
     * 关注动态
     * @param {pageIndex, pageSize, begin, isRefresh} options 
     */

  }, {
    key: "follow",
    value: function () {
      var _follow = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee7(options) {
        return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._list('follow', options);

              case 2:
                return _context7.abrupt("return", _context7.sent);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function follow(_x7) {
        return _follow.apply(this, arguments);
      }

      return follow;
    }()
  }, {
    key: "recommendForNew",
    value: function () {
      var _recommendForNew = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee8() {
        return _regeneratorRuntime2["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this._list('recommendForNew', null, 'GET');

              case 2:
                return _context8.abrupt("return", _context8.sent);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function recommendForNew() {
        return _recommendForNew.apply(this, arguments);
      }

      return recommendForNew;
    }()
  }, {
    key: "answers",
    value: function () {
      var _answers = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee9(id, pageIndex, pageSize) {
        return _regeneratorRuntime2["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this._list('answers', {
                  id: id,
                  pageIndex: pageIndex,
                  pageSize: pageSize
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function answers(_x8, _x9, _x10) {
        return _answers.apply(this, arguments);
      }

      return answers;
    }()
  }, {
    key: "details",
    value: function () {
      var _details = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee10(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.callFunction('post', 'details', {
                  id: id
                });

              case 2:
                res = _context10.sent;

                if (!(res.code === 0)) {
                  _context10.next = 5;
                  break;
                }

                return _context10.abrupt("return", this._parsePost(res.data));

              case 5:
                return _context10.abrupt("return", null);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function details(_x11) {
        return _details.apply(this, arguments);
      }

      return details;
    }()
    /**
     * 
     * @param {commenType:0:帖子,1:评论,2:回复} param0 
     */

  }, {
    key: "comment",
    value: function () {
      var _comment = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee11(_ref) {
        var toId, postId, commentId, commenType, content, imgs, res;
        return _regeneratorRuntime2["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                toId = _ref.toId, postId = _ref.postId, commentId = _ref.commentId, commenType = _ref.commenType, content = _ref.content, imgs = _ref.imgs;
                _context11.next = 3;
                return this.callFunction('post', 'comment', {
                  toId: toId,
                  postId: postId,
                  commentId: commentId,
                  commenType: commenType,
                  content: content,
                  imgs: imgs
                });

              case 3:
                res = _context11.sent;
                wx.hideLoading();

                if (!(res.code === 0 && res.data)) {
                  _context11.next = 8;
                  break;
                }

                this.showToast('成功发表', 'success');
                return _context11.abrupt("return", this._parseComment(res.data));

              case 8:
                this.showToast('发表失败,重试');
                return _context11.abrupt("return", null);

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function comment(_x12) {
        return _comment.apply(this, arguments);
      }

      return comment;
    }()
  }, {
    key: "like",
    value: function () {
      var _like = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee12(toId, postId, commentId, likeType) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                wx.showLoading({
                  title: '点赞中...',
                  mask: true
                });
                _context12.next = 3;
                return this.callFunction('post', 'like', {
                  toId: toId,
                  postId: postId,
                  commentId: commentId,
                  likeType: likeType
                });

              case 3:
                res = _context12.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context12.next = 8;
                  break;
                }

                this.showToast('点赞成功', 'success');
                return _context12.abrupt("return", true);

              case 8:
                this.showToast('操作失败,重试');
                return _context12.abrupt("return", false);

              case 10:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function like(_x13, _x14, _x15, _x16) {
        return _like.apply(this, arguments);
      }

      return like;
    }()
  }, {
    key: "cancelLike",
    value: function () {
      var _cancelLike = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee13(likeType, id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                wx.showLoading({
                  title: '取消中...',
                  mask: true
                });
                _context13.next = 3;
                return this.callFunction('post', 'cancelLike', {
                  likeType: likeType,
                  id: id
                });

              case 3:
                res = _context13.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context13.next = 8;
                  break;
                }

                this.showToast('取消成功', 'success');
                return _context13.abrupt("return", true);

              case 8:
                this.showToast('操作失败,重试');
                return _context13.abrupt("return", false);

              case 10:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function cancelLike(_x17, _x18) {
        return _cancelLike.apply(this, arguments);
      }

      return cancelLike;
    }()
  }, {
    key: "getComments",
    value: function () {
      var _getComments = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee14(_ref2) {
        var likeType, id, pageIndex, pageSize, res;
        return _regeneratorRuntime2["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                likeType = _ref2.likeType, id = _ref2.id, pageIndex = _ref2.pageIndex, pageSize = _ref2.pageSize;
                _context14.next = 3;
                return this.callFunction('post', 'getComments', {
                  likeType: likeType,
                  id: id,
                  pageIndex: pageIndex,
                  pageSize: pageSize
                });

              case 3:
                res = _context14.sent;

                if (!(res.code === 0)) {
                  _context14.next = 6;
                  break;
                }

                return _context14.abrupt("return", res.data.map(this._parseComment.bind(this)));

              case 6:
                return _context14.abrupt("return", null);

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getComments(_x19) {
        return _getComments.apply(this, arguments);
      }

      return getComments;
    }()
  }, {
    key: "getCommentDetail",
    value: function () {
      var _getCommentDetail = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee15(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.callFunction('post', 'getCommentDetails', {
                  id: id
                });

              case 2:
                res = _context15.sent;

                if (!(res.code === 0 && res.data)) {
                  _context15.next = 5;
                  break;
                }

                return _context15.abrupt("return", this._parseComment(res.data));

              case 5:
                return _context15.abrupt("return", null);

              case 6:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getCommentDetail(_x20) {
        return _getCommentDetail.apply(this, arguments);
      }

      return getCommentDetail;
    }()
  }, {
    key: "removePost",
    value: function () {
      var _removePost = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee16(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                wx.showLoading({
                  title: '删除中...',
                  mask: true
                });
                _context16.next = 3;
                return this.callFunction('post', 'removePost', {
                  id: id,
                  userType: this.getUserType()
                });

              case 3:
                res = _context16.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context16.next = 8;
                  break;
                }

                this.showToast('已删除', 'success');
                return _context16.abrupt("return", true);

              case 8:
                this.showToast('操作失败,重试');
                return _context16.abrupt("return", false);

              case 10:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function removePost(_x21) {
        return _removePost.apply(this, arguments);
      }

      return removePost;
    }()
  }, {
    key: "removeComment",
    value: function () {
      var _removeComment = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee17(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                wx.showLoading({
                  title: '删除中...',
                  mask: true
                });
                _context17.next = 3;
                return this.callFunction('post', 'removeComment', {
                  id: id,
                  userType: this.getUserType()
                });

              case 3:
                res = _context17.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context17.next = 8;
                  break;
                }

                this.showToast('已删除', 'success');
                return _context17.abrupt("return", true);

              case 8:
                this.showToast('操作失败,重试');
                return _context17.abrupt("return", false);

              case 10:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function removeComment(_x22) {
        return _removeComment.apply(this, arguments);
      }

      return removeComment;
    }()
  }, {
    key: "commentsForUser",
    value: function () {
      var _commentsForUser = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee18(_ref3) {
        var _this2 = this;

        var pageIndex, pageSize, res;
        return _regeneratorRuntime2["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                pageIndex = _ref3.pageIndex, pageSize = _ref3.pageSize;
                _context18.next = 3;
                return this.callFunction('post', 'commentForUser', {
                  pageIndex: pageIndex,
                  pageSize: pageSize
                });

              case 3:
                res = _context18.sent;

                if (!(res.code === 0)) {
                  _context18.next = 6;
                  break;
                }

                return _context18.abrupt("return", res.data.map(function (item) {
                  if (item.user) {
                    item.user = _this2.parseUser(item.user);
                  }

                  if (item.originComment) {
                    item.originComment = _this2._parseComment(item.originComment);
                  }

                  if (item.post && item.post.imgs) {
                    item.post.imgs = item.post.imgs.map(function (img) {
                      var path = img.path;
                      img.path = _this2.getQiniuUrl() + path;
                      img.thumbPath = _this2.getQiniuUrl() + 'thumb_' + path;
                      return img;
                    });
                  }

                  if (item.comment) {
                    item.comment = _this2._parseComment(item.comment);
                  }

                  return item;
                }));

              case 6:
                return _context18.abrupt("return", null);

              case 7:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function commentsForUser(_x23) {
        return _commentsForUser.apply(this, arguments);
      }

      return commentsForUser;
    }()
  }, {
    key: "setPostRecommend",
    value: function () {
      var _setPostRecommend = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee19(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                wx.showLoading({
                  title: '设置中...',
                  mask: true
                });
                _context19.next = 3;
                return this.callFunction('post', 'recommendPost', {
                  id: id,
                  userType: this.getUserType()
                });

              case 3:
                res = _context19.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context19.next = 8;
                  break;
                }

                this.showToast('成功', 'success');
                return _context19.abrupt("return", true);

              case 8:
                this.showToast('操作失败,重试');
                return _context19.abrupt("return", false);

              case 10:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function setPostRecommend(_x24) {
        return _setPostRecommend.apply(this, arguments);
      }

      return setPostRecommend;
    }()
  }, {
    key: "setCommentHot",
    value: function () {
      var _setCommentHot = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee20(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                wx.showLoading({
                  title: '设置中...',
                  mask: true
                });
                _context20.next = 3;
                return this.callFunction('post', 'hotComment', {
                  id: id,
                  userType: this.getUserType()
                });

              case 3:
                res = _context20.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context20.next = 8;
                  break;
                }

                this.showToast('成功', 'success');
                return _context20.abrupt("return", true);

              case 8:
                this.showToast('操作失败,重试');
                return _context20.abrupt("return", false);

              case 10:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function setCommentHot(_x25) {
        return _setCommentHot.apply(this, arguments);
      }

      return setCommentHot;
    }()
  }, {
    key: "likesForUser",
    value: function () {
      var _likesForUser = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee21(_ref4) {
        var _this3 = this;

        var pageIndex, pageSize, res;
        return _regeneratorRuntime2["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                pageIndex = _ref4.pageIndex, pageSize = _ref4.pageSize;
                _context21.next = 3;
                return this.callFunction('post', 'likeForUser', {
                  pageIndex: pageIndex,
                  pageSize: pageSize
                });

              case 3:
                res = _context21.sent;

                if (!(res.code === 0)) {
                  _context21.next = 6;
                  break;
                }

                return _context21.abrupt("return", res.data.map(function (item) {
                  if (item.dataType === 1) {
                    item = _this3._parseComment(item);
                  } else {
                    item = _this3._parsePost(item);
                  }

                  return item;
                }));

              case 6:
                return _context21.abrupt("return", null);

              case 7:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function likesForUser(_x26) {
        return _likesForUser.apply(this, arguments);
      }

      return likesForUser;
    }()
  }, {
    key: "_list",
    value: function () {
      var _list2 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee22(action, options) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return this.callFunction('post', action, options);

              case 2:
                res = _context22.sent;

                if (!(res.code === 0)) {
                  _context22.next = 5;
                  break;
                }

                return _context22.abrupt("return", res.data.map(this._parsePost.bind(this)));

              case 5:
                return _context22.abrupt("return", null);

              case 6:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function _list(_x27, _x28) {
        return _list2.apply(this, arguments);
      }

      return _list;
    }()
  }, {
    key: "_parseComment",
    value: function _parseComment(item) {
      // item.userType = this.getUserType()
      item.id = item._id;
      item.isSys = this.userType === 1;

      if (item.from) {
        item.from = this.parseUser(item.from);
        item.isSelf = item.from.id === this.userId;
      }


      if (item.content) {
        item.baseTxt = item.content;
        item.content = this.parseEmoji(item.content);
      }

      if (item.imgs) {
        item.imgs = item.imgs.map(function (img) {
          img.thumbPath = img.path;
          return img;
        });
      }

      return item;
    }
  }, {
    key: "_parsePost",
    value: function _parsePost(item) {
   //   console.log(item)
   //   console.log(this)
   
      // item.userType = this.getUserType()
      item.isSys = this.userType === 1;

      if (item.user) {
        item.isSelf = this.userId === item.user._id;
        item.user = this.parseUser(item.user);
        //检查是不是话题广场的拥有者
        item.isTopicOwnerId = this.userId ===item.post.TopicownerId;
      }

      if (item.post && item.post.content && item.post.posType !== 3) {
        item.post.baseTxt = item.post.content;
        item.post.content = this.parseEmoji(item.post.content);

      }

      if (item.topic) {
        item.topic = this.parseTopic(item.topic);
      }

      if (item.post) {
        item.post.id = item.post._id;
      }

      if (item.post && item.post.imgs) {
        item.post.imgs = item.post.imgs.map(function (img) {
          var path = img.path;
          img.thumbPath = img.path;
          return img;
        });
      }

      return item;
    }
  }]);

  return PostService;
}(_baseService["default"]);

exports["default"] = PostService;