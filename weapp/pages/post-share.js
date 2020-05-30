"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    template: null,
    qrUrl: null,
    imgUrl: null,
    avtater: null
  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var id, _post;

      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              wx.setNavigationBarTitle({
                title: ""
              });
              id = q.id;
              _this.id = id;
              wx.showLoading({
                title: "海报生成中...",
                mask: true
              });
              _context.next = 6;
              return _api.Post.details(id);
 
            case 6:
              _this.post = _context.sent;

              if (!_this.post) {
                _context.next = 24;
                break;
              }

              _post = _this.post.post;

              if (!(_post.imgs && _post.imgs.length)) {
                _context.next = 13;
                break;
              }

              _context.next = 12;
              return _api.Post.getTempFileURL(_post.imgs[0].path);

            case 12:
              _this.imgUrl = _context.sent;

            case 13:
              if (!(_this.post.user.avtater.indexOf('cloud') === 0)) {
                _context.next = 19;
                break;
              }

              _context.next = 16;
              return _api.Post.getTempFileURL(_this.post.user.avtater);
 
            case 16:
              _this.avtater = _context.sent;
              _context.next = 20;
              break;

            case 19:
              _this.avtater = _this.post.user.avtater;

            case 20:
              _context.next = 22;
              return _api.User.qrCode(id, null);

            case 22:
              _this.qrUrl = _context.sent;

              if (_this.qrUrl) {
                _this.creatPoster(_this.post);
              } else {
                wx.hideLoading();
                wx.showToast({
                  title: "海报生成失败,重试"
                });
              }

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getUrl: function getUrl(path) {
      return "".concat(_api.baseUrl, "/api/public/image/").concat(encodeURIComponent(path));
    },
    creatPoster: function creatPoster(post) {
      var self = this;

      if (post) {
        var drawUser = function drawUser() {
          template.views.push({
            type: "image",
            url: self.avtater,
            css: {
              top: "56rpx",
              left: "56rpx",
              width: "96rpx",
              height: "96rpx",
              borderRadius: "96rpx"
            }
          }, {
            type: "text",
            text: _user.nick,
            css: {
              fontSize: "32rpx",
              fontWeight: "bold",
              top: "64rpx",
              left: "172rpx"
            }
          }, {
            type: "text",
            text: _user.title || _user.school || "记录真实的校园生活",
            css: {
              fontSize: "28rpx",
              color: "#b2b2b2",
              top: "114rpx",
              left: "172rpx"
            }
          });
          return 180;
        };

        var drawTitle = function drawTitle(top, title) {
          var height = computeHeight(title, 34) * 50;
          template.views.push({
            type: "text",
            text: title,
            css: {
              fontSize: "34rpx",
              lineHeight: "50rpx",
              fontWeight: "bold",
              color: "#353535",
              width: "600rpx",
              height: height,
              top: "".concat(top, "rpx"),
              left: "75rpx"
            }
          });
          return top + height + 20;
        };

        var drawContent = function drawContent(content, top) {
          var isDes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var lines = computeHeight(content, isDes ? 26 : 34);
          var lineHeight = isDes ? 40 : 50;
          height = lines > 5 ? 250 : lines * 50;
          template.views.push({
            type: "text",
            text: content,
            css: {
              fontSize: "".concat(isDes ? 26 : 34, "rpx"),
              lineHeight: "".concat(lineHeight, "rpx"),
              maxLines: 5,
              color: "#".concat(isDes ? "b2b2b2" : "353535"),
              width: "600rpx",
              height: height,
              top: "".concat(top, "rpx"),
              left: "75rpx"
            }
          });
          return top + height + 20;
        };

        var drawContentImg = function drawContentImg(img, top, imgUrl) {
          template.views.push({
            type: "image",
            url: imgUrl,
            css: {
              top: "".concat(top, "rpx"),
              left: "65rpx",
              width: "600rpx",
              height: "".concat(600 / img.height * img.height, "rpx")
            }
          });
          return top + 600 / img.height * img.height;
        };

        var dreawArticle = function dreawArticle(top, title, imgPath) {
          template.views.push({
            type: "rect",
            css: {
              width: "640rpx",
              height: "120rpx",
              color: "#f4f4f4",
              borderRadius: "8rpx",
              top: "".concat(top, "rpx"),
              left: "65rpx"
            }
          }, {
            type: "text",
            text: title,
            css: {
              fontSize: "32rpx",
              color: "#353535",
              width: "500rpx",
              lineHeight: "50rpx",
              top: "".concat(top + 20, "rpx"),
              left: "85rpx"
            }
          }, {
            type: "image",
            url: self.getUrl(imgPath),
            css: {
              top: "".concat(top + 20, "rpx"),
              left: "600rpx",
              width: "84rpx",
              height: "84rpx",
              borderRadius: "8rpx"
            }
          });
          return top + 120;
        };

        var drawQR = function drawQR(top, url) {
          template.views.push({
            type: "rect",
            css: {
              width: "750rpx",
              height: "400rpx",
              color: "#f8f8f8",
              top: "".concat(top + 30, "rpx"),
              left: "0rpx"
            }
          }, {
            type: "image",
            url: url,
            css: {
              top: "".concat(top + 70, "rpx"),
              left: "275rpx",
              width: "200rpx",
              height: "200rpx",
              borderRadius: "200rpx"
            }
          }, {
            type: "text",
            text: "长按识别小程序码，查看更多内容",
            css: {
              fontSize: "26rpx",
              color: "#b2b2b2",
              align: "center",
              width: "750rpx",
              top: "".concat(top + 300, "rpx"),
              right: "200rpx"
            }
          });
          return top + 400;
        };

        var computeHeight = function computeHeight(content, fontSize) {
          if (content) {
            return Math.ceil(content.length * fontSize / 600);
          }

          return 0;
        };

        var _user = this.post.user;
        var _post = this.post.post;
        var template = {
          background: "#ffffff",
          width: "750rpx",
          height: "1080rpx",
          views: []
        };
        var height = 800;
        var posType = _post.posType;

        if (posType === 1) {
          height = drawQR(dreawArticle(drawContent(_post.baseTxt, drawUser()), _post.articleTitle, _post.articleImg), this.qrUrl);
        } else {
          var top = drawUser();

          if (posType === 2 || posType === 4) {
            top = drawTitle(top, _post.articleTitle);
          }

          top = drawContent(_post.baseTxt || _post.introduction || _post.content, top, posType === 2 || posType === 4);

          if (this.imgUrl) {
            top = drawContentImg(_post.imgs[0], top, this.imgUrl);
          }

          height = drawQR(top, this.qrUrl);
        }

        console.log(height);
        template.height = "".concat(height, "rpx");
        this.template = template;
      }
    },
    onClose: function onClose() {
      wx.navigateBack();
    },
    onImgErr: function onImgErr() {
      wx.hideLoading();
      wx.showToast({
        title: "海报生成失败"
      });
    },
    onImgOK: function onImgOK(res) {
      wx.hideLoading();
      var path = res.$wx.detail.path;
      wx.saveImageToPhotosAlbum({
        filePath: path,
        success: function success() {
          wx.showToast({
            title: "已保存海报",
            icon: "success"
          });
        },
        fail: function fail() {
          wx.showToast({
            title: "保存失败"
          });
        }
      });
    }
  }
}, {info: {"components":{"painter":{"path":"..\\components\\painter\\painter"}},"on":{"12-0":["imgOK","imgErr"]}}, handlers: {'12-0': {"imgOK": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onImgOK($event)
      })();
    
  }, "imgErr": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onImgErr($event)
      })();
    
  }},'12-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event)
      })();
    
  }}}, models: {} });