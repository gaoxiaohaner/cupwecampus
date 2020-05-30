"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    title: '',
    des: '',
    imgPath: null,
    iconPath: null,
    nickName: '',
    disabled: true,
    isAuth: false,
    isVip: false
  },
  onShow: function onLoad() {
    var _wx$getStorageSync = wx.getStorageSync('user'),
        isAuth = _wx$getStorageSync.isAuth,
        isBinding = _wx$getStorageSync.isBinding,
        userType = _wx$getStorageSync.userType,
        grade = _wx$getStorageSync.grade;

    this.isAuth = isAuth > 0;
    this.isVip = userType === 1 || grade === 3;
    this.disabled = !this.isAuth || !this.isVip;
  },
  methods: {
    chooseImage: function chooseImage() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var res, tempFilePaths;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.iconPath = null;
                _context.next = 3;
                return _core["default"].wx.chooseImage({
                  count: 1,
                  sizeType: ['compressed'],
                  sourceType: ['album', 'camera']
                });

              case 3:
                res = _context.sent;
                tempFilePaths = res.tempFilePaths;

                if (tempFilePaths) {
                  _this.imgPath = tempFilePaths[0];
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onAdd: function onAdd() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var topic;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.imgPath) {
                  _context2.next = 3;
                  break;
                }

                _api.Topic.showToast('请选择话题头像');

                return _context2.abrupt("return");

              case 3:
                if (_this2.iconPath) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return _api.Topic.uploadFile([{
                  path: _this2.imgPath
                }], 1);

              case 6:
                _this2.iconPath = _context2.sent;

              case 7:
                if (_this2.iconPath) {
                  _context2.next = 10;
                  break;
                }

                _api.Topic.showToast('上传头像失败');

                return _context2.abrupt("return");

              case 10:
                if (/[\u4e00-\u9fa5a-zA-Z]{2,10}/.test(_this2.title)) {
                  _context2.next = 13;
                  break;
                }

                _api.Topic.showToast('话题标题格式不对');

                return _context2.abrupt("return");

              case 13:
                if (_this2.nickName) {
                  _context2.next = 16;
                  break;
                }

                _api.Topic.showToast('输入关注者称号');

                return _context2.abrupt("return");

              case 16:
                if (_this2.des) {
                  _context2.next = 19;
                  break;
                }

                _api.Topic.showToast('输入话题描述');

                return _context2.abrupt("return");

              case 19:
                _context2.next = 21;
                return _api.Topic.add({
                  title: _this2.title,
                  des: _this2.des,
                  iconSrc: _this2.iconPath,
                  nickName: _this2.nickName
                });

              case 21:
                topic = _context2.sent;
                console.log(topic)

                if (topic) {
                  
                  wx.redirectTo({
                    url: '/pages/topic?id=' + topic._id
                  });
                }

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    userauth:function userauth(){
      console.log('hah')
      wx.navigateTo({
        url: "/pages/user-auth",
      })
    },
    vipcharge:function vipcharge(){

      wx.navigateTo({
        url: "/plugin/tip/assets",
      })

    },

  }
}, {info: {"components":{},"on":{}}, handlers: {'21-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'21-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'21-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAdd($event)
      })();
    
  }}}, models: {'1': {
      type: "input",
      expr: "title",
      handler: function set ($v) {
      var _vm=this;
        _vm.title = $v;
      
    }
    },'2': {
      type: "input",
      expr: "nickName",
      handler: function set ($v) {
      var _vm=this;
        _vm.nickName = $v;
      
    }
    },'3': {
      type: "input",
      expr: "des",
      handler: function set ($v) {
      var _vm=this;
        _vm.des = $v;
      
    }
    }} });