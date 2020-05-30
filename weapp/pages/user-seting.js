"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _province = _interopRequireDefault(require('../common/province.js'));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var provinces = [];
var citys = _province["default"]['北京'];

for (var p in _province["default"]) {
  if (_province["default"].hasOwnProperty(p)) {
    provinces.push(p);
  }
}

var years = [];
var months = [];
var days = [];

for (var i = 1; i <= 31; i++) {
  days.push(i);
}

for (var _i = 1; _i <= 12; _i++) {
  months.push(_i);
}

for (var _i2 = 1980; _i2 <= new Date().getFullYear(); _i2++) {
  years.push(_i2);
}

_core["default"].page({
  data: {
    showSchool: false,
    dialogShow: false,
    dialogSignShow: false,
    screenBirthDayDialog: false,
    homeTownDialog: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    showActionsheet: false,
    years: years,
    months: months,
    days: days,
    provinces: provinces,
    citys: citys,
    birthday: [16, 6, 2],
    hometown: [0, 0],
    user: null,
    groups: [{
      text: '单身',
      value: 0
    }, {
      text: '热恋',
      value: 1
    }, {
      text: '保密',
      value: 2
    }],
    info: {
      nick: {
        title: '昵称',
        des: '填写昵称',
        value: '一叶知秋'
      },
      signature: {
        title: '个性签名',
        des: '一句话让别人记住你',
        value: ''
      },
      birthday: {
        title: '生日',
        des: '选择日期',
        value: ''
      },
      hometown: {
        title: '城市',
        des: '选择所在城市',
        value: ''
      }
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var user, key, date;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api.User.details(_api.User.getUserId());

            case 2:
              _this.user = _context.sent;

              if (!_this.user) {
                _context.next = 24;
                break;
              }

              user = _this.user;
              _context.t0 = _regeneratorRuntime2["default"].keys(_this.info);

            case 6:
              if ((_context.t1 = _context.t0()).done) {
                _context.next = 24;
                break;
              }

              key = _context.t1.value;

              if (!_this.info.hasOwnProperty(key)) {
                _context.next = 22;
                break;
              }

              _context.t2 = key;
              _context.next = _context.t2 === 'feeling' ? 12 : _context.t2 === 'birthday' ? 14 : _context.t2 === 'hometown' ? 16 : 20;
              break;

            case 12:
              _this.info[key].value = _this.groups[user[key]].text;
              return _context.abrupt("break", 22);

            case 14:
              if (user[key]) {
                date = new Date(user[key]);
                _this.birthday = [date.getFullYear() - 1980, date.getMonth(), date.getDate() - 1];
                _this.info[key].value = user[key];
              }

              return _context.abrupt("break", 22);

            case 16:
              _this.citys = _province["default"][user.province];
              _this.hometown = [_this.provinces.indexOf(user.province), _province["default"][user.province].indexOf(user.city)];
              _this.info[key].value = "".concat(user.province, " ").concat(user.city);
              return _context.abrupt("break", 22);

            case 20:
              _this.info[key].value = user[key];
              return _context.abrupt("break", 22);

            case 22:
              _context.next = 6;
              break;

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    goAuth: function goAuth() {
      wx.navigateTo({
        url: '/pages/user-auth'
      });
    },
    onClose: function onClose() {
      this.showActionsheet = false;
    },
    onDialogClose: function onDialogClose() {
      this.dialogShow = false;
    },
    onDialogSignClose: function onDialogSignClose() {
      this.dialogSignShow = false;
    },
    onActiontap: function onActiontap(res) {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var _res$$wx$detail, value, index;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _res$$wx$detail = res.$wx.detail, value = _res$$wx$detail.value, index = _res$$wx$detail.index;
                _this2.info.feeling.value = _this2.groups[index].text;

                _this2.onClose();

                _context2.next = 5;
                return _api.User.change('feeling', _this2.groups[index].value);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onNickTap: function onNickTap(res) {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var index;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.dialogShow = false;
                index = res.$wx.detail.index;

                if (!(index === 1)) {
                  _context3.next = 6;
                  break;
                }

                if (!_this3.info.nick.value) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 6;
                return _api.User.change('nick', _this3.info.nick.value);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onSignButtontap: function onSignButtontap(res) {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        var index;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.dialogSignShow = false;
                index = res.$wx.detail.index;

                if (!(index === 1)) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 5;
                return _api.User.change('signature', _this4.info.signature.value);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onBirthDayChange: function onBirthDayChange(e) {
      var res = e.$wx.detail.value;
      this.birthday[0] = res[0];
      this.birthday[1] = res[1];
      this.birthday[2] = res[2];
    },
    onBirthDayCancel: function onBirthDayCancel() {
      this.screenBirthDayDialog = false;
    },
    onBirthDayConfirm: function onBirthDayConfirm() {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.onBirthDayCancel();

                _this5.info.birthday.value = "".concat(_this5.years[_this5.birthday[0]], "-").concat(_this5.months[_this5.birthday[1]], "-").concat(_this5.days[_this5.birthday[2]]);
                _context5.next = 4;
                return _api.User.change('birthday', _this5.info.birthday.value);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    onHomeTownChange: function onHomeTownChange(e) {
      var res = e.$wx.detail.value;

      if (this.hometown[0] !== res[0]) {
        this.hometown[0] = res[0];
        this.citys = _province["default"][provinces[res[0]]];
        this.hometown[1] = 0;
      } else {
        this.hometown[1] = res[1];
      }
    },
    onHomeTownCancel: function onHomeTownCancel() {
      this.homeTownDialog = false;
    },
    onHomeTownConfirm: function onHomeTownConfirm() {
      var _this6 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.onHomeTownCancel();

                _this6.info.hometown.value = "".concat(provinces[_this6.hometown[0]], " ").concat(_this6.citys[_this6.hometown[1]]);
                _context6.next = 4;
                return _api.User.change('hometown', _this6.info.hometown.value);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    onTap: function onTap(item, filed) {
      switch (filed) {
        case 'nick':
          this.dialogShow = true;
          break;

        case 'feeling':
          this.showActionsheet = true;
          break;

        case 'signature':
          this.dialogSignShow = true;
          break;

        case 'birthday':
          this.screenBirthDayDialog = true;
          break;

        case 'hometown':
          this.homeTownDialog = true;
          break;

        default:
          break;
      }
    },
    onSchoolSelect: function onSchoolSelect(school) {
      var _this7 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee7() {
        return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.showSchool = false;
                _context7.next = 3;
                return _api.User.change('school', school.name);

              case 3:
                if (!_context7.sent) {
                  _context7.next = 5;
                  break;
                }

                _this7.user.school = school.name;

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    onSchoolClose: function onSchoolClose() {
      this.showSchool = false;
    },
    onShowSchool: function onShowSchool() {
      if (!this.user.isAuth) {
        this.showSchool = true;
      }
    },
    onUpload: function onUpload() {
      var _this8 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee8() {
        var res, tempFilePaths, imgUrl, avtater;
        return _regeneratorRuntime2["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _core["default"].wx.chooseImage({
                  count: 1,
                  sizeType: ['compressed'],
                  sourceType: ['album', 'camera']
                });

              case 2:
                res = _context8.sent;
                tempFilePaths = res.tempFilePaths;
                wx.showLoading({
                  title: '上传头像...',
                  mask: true
                });
                _context8.next = 7;
                return _api.User.uploadFile([{
                  path: tempFilePaths[0]
                }], 0);

              case 7:
                imgUrl = _context8.sent;
                wx.hideLoading();
                avtater = imgUrl;
                _context8.next = 12;
                return _api.User.change('avtater', avtater);

              case 12:
                if (!_context8.sent) {
                  _context8.next = 14;
                  break;
                }

                _this8.user.avtater = avtater;

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    }
  }
}, {info: {"components":{"dialog":{"path":"..\\components\\dialog\\dialog"},"screen-dialog":{"path":"..\\components\\half-screen-dialog\\half-screen-dialog"},"school-input":{"path":"..\\components\\input-school"}},"on":{"14-4":["close","buttontap"],"14-6":["close","buttontap"],"14-8":["close"],"14-12":["close"],"14-16":["close"],"14-20":["result","close"]}}, handlers: {'14-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onUpload($event)
      })();
    
  }},'14-1': {"tap": function proxy (item, filed) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(item, filed)
      })();
    
  }},'14-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShowSchool($event)
      })();
    
  }},'14-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goAuth($event)
      })();
    
  }},'14-4': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDialogClose($event)
      })();
    
  }, "buttontap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onNickTap($event)
      })();
    
  }},'14-6': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDialogSignClose($event)
      })();
    
  }, "buttontap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSignButtontap($event)
      })();
    
  }},'14-8': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBirthDayCancel($event)
      })();
    
  }},'14-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBirthDayCancel($event)
      })();
    
  }},'14-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBirthDayConfirm($event)
      })();
    
  }},'14-11': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBirthDayChange($event)
      })();
    
  }},'14-12': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHomeTownCancel($event)
      })();
    
  }},'14-13': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHomeTownCancel($event)
      })();
    
  }},'14-14': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHomeTownConfirm($event)
      })();
    
  }},'14-15': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHomeTownChange($event)
      })();
    
  }},'14-16': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }},'14-17': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }},'14-18': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onConfirm($event)
      })();
    
  }},'14-19': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event)
      })();
    
  }},'14-20': {"result": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSchoolSelect($event)
      })();
    
  }, "close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSchoolClose($event)
      })();
    
  }}}, models: {'7': {
      type: "input",
      expr: "info.nick.value",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.info.nick, "value", $v);
      
    }
    },'8': {
      type: "input",
      expr: "info.signature.value",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.info.signature, "value", $v);
      
    }
    }} });