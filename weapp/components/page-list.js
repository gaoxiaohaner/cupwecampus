"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

var _api2 = require('../plugin/tip/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var self = null;

_core["default"].component({
  props: {
    dataType: {
      type: Number,
      "default": 0
    },
    objId: {
      type: String,
      "default": 0
    },
    action: {
      type: String,
      "default": 'recommend'
    },
    controller: {
      type: String,
      "default": 'post'
    },
    isInit: {
      type: Boolean,
      "default": false
    },
    showTip: {
      type: Boolean,
      "default": false
    },
    enableTips: {
      type: Boolean,
      "default": true
    },
    scrollY: {
      type: Boolean,
      "default": true
    },
    refresherEnabled: {
      type: Boolean,
      "default": true
    },
    emptyBtnTxt: String,
    pageSize: {
      type: Number,
      "default": 6
    }
  },
  data: {
    state: 0,
    items: [],
    num: -1,
    begin: new Date().getTime(),
    pageIndex: 1,
    top: -100,
    triggered: false,
    hasMore: true,
    isLoading: false
  },
  watch: {
    isInit: function isInit(val) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!val) {
                  _context.next = 9;
                  break;
                }

                _this.hasMore = true;
                _context.next = 4;
                return _this.loadData();

              case 4:
                if (!_context.sent) {
                  _context.next = 8;
                  break;
                }

                if (_this.items.length) {
                  _this.state = 2;
                } else {
                  _this.state = 3;
                }

                _context.next = 9;
                break;

              case 8:
                _this.state = 1;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  methods: {
    loadData: function loadData(isRefresh) {
      var _this2 = this;

      var keyword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(_this2)
                if (!(!_this2.hasMore && !isRefresh || _this2.isLoading)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _this2.isLoading = true;
                items = null;

                if (!(_this2.controller === 'post')) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 7;
                return _api.Post[_this2.action]({
                  isRefresh: isRefresh,
                  id: _this2.objId,
                  begin: isRefresh ? _this2.begin : null,
                  pageIndex: isRefresh ? 1 : _this2.pageIndex,
                  pageSize: _this2.pageSize,
                  type: _this2.dataType
                });

              case 7:
                items = _context2.sent;
                _context2.next = 33;
                break;

              case 10:
                if (!(_this2.controller === 'topic')) {
                  _context2.next = 17;
                  break;
                }

                if (isRefresh) {
                  _this2.items = [];
                }

                _context2.next = 14;
                return _api.Topic[_this2.action]({
                  isRefresh: isRefresh,
                  keyword: keyword,
                  userId: _this2.objId,
                  begin: isRefresh ? _this2.begin : null,
                  pageIndex: isRefresh ? 1 : _this2.pageIndex,
                  pageSize: _this2.pageSize
                });

              case 14:
                items = _context2.sent;
                _context2.next = 33;
                break;

              case 17:
                if (!(_this2.controller === 'message')) {
                  _context2.next = 23;
                  break;
                }

                _context2.next = 20;
                return _api.Message[_this2.action]({
                  isRefresh: isRefresh,
                  begin: isRefresh ? _this2.begin : null,
                  pageIndex: isRefresh ? 1 : _this2.pageIndex,
                  pageSize: _this2.pageSize
                });

              case 20:
                items = _context2.sent;
                _context2.next = 33;
                break;

              case 23:
                if (!(_this2.controller === 'user')) {
                  _context2.next = 29;
                  break;
                }

                _context2.next = 26;
                return _api.User[_this2.action]({
                  type: _this2.dataType,
                  userId: _this2.objId,
                  pageIndex: isRefresh ? 1 : _this2.pageIndex,
                  pageSize: _this2.pageSize
                });

              case 26:
                items = _context2.sent;
             
                _context2.next = 33;
                break;

              case 29:
                if (!(_this2.controller === 'tip')) {
                  _context2.next = 33;
                  break;
                }

                _context2.next = 32;
                return _api2.Tip[_this2.action]({
                  pageIndex: isRefresh ? 1 : _this2.pageIndex,
                  pageSize: _this2.pageSize
                });

              case 32:
                items = _context2.sent;

              case 33:
                if (!items) {
                  _context2.next = 55;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 37;

                for (_iterator = items[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  _this2.items[isRefresh ? 'unshift' : 'push'](item);
                }
         
                console.log(items)

                _context2.next = 45;
                break;

              case 41:
                _context2.prev = 41;
                _context2.t0 = _context2["catch"](37);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 45:
                _context2.prev = 45;
                _context2.prev = 46;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
          
              case 48:
                _context2.prev = 48;

                if (!_didIteratorError) {
                  _context2.next = 51;
                  break;
                }

                throw _iteratorError;

              case 51:
                return _context2.finish(48);

              case 52:
                return _context2.finish(45);

              case 53:
                console.log(_this2.items)
                console.log(isRefresh)

            //    _this2.begin =_this2.items[0].post.senDate //new Date().getTime();
                if (isRefresh) {
                 _this2.begin =new Date().getTime();
                  _this2.num = items.length;
                } else {
                  _this2.pageIndex++;
                }
                if(items.length==_this2.pageSize){
                  _this2.hasMore==true
                }
                else{
                  _this2.hasMore=false
                }

              case 55:
                _this2.isLoading = false;
                return _context2.abrupt("return", items);

              case 57:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[37, 41, 45, 53], [46,, 48, 52]]);
      }))();
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
                console.log(1);
                _context3.next = 3;
                return _this3.loadData();

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onRefresherpulling: function onRefresherpulling() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.triggered = true;

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onRefresherrefresh: function onRefresherrefresh() {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.loadData(true);

              case 2:
                setTimeout(function () {
                  _this5.num = -1;
                }, 2000);
                _this5.triggered = false;

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    onRefresherrestore: function onRefresherrestore() {
      this.triggered = false;
    },
    onSubscribe: function onSubscribe() {
      _api.Post.subscribe(); // wx.navigateTo({
      //   url: '/pages/post-article?url=0'
      // });

    },
    onRemove: function onRemove(_ref) {
      var _this6 = this;

      var index = _ref.index,
          post = _ref.post,
          isSys = _ref.isSys;
      wx.showActionSheet({
        itemList: isSys ? ['删除', post.isRecommend ? '取消推荐' : '设为推荐'] : ['删除'],
        itemColor: '#d81e06',
        success: function success(res) {
          if (res.tapIndex === 0) {
            wx.showModal({
              title: '删除提示',
              content: '确定要删除该贴吗?',
              confirmText: '删除',
              confirmColor: '#d81e06',
              success: function () {
                var _success = _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee6(res) {
                  return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          if (!res.confirm) {
                            _context6.next = 5;
                            break;
                          }

                          _context6.next = 3;
                          return _api.Post.removePost(post.id);

                        case 3:
                          if (!_context6.sent) {
                            _context6.next = 5;
                            break;
                          }

                          _this6.items.splice(index, 1);

                        case 5:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                function success(_x) {
                  return _success.apply(this, arguments);
                }

                return success;
              }()
            });
          } else if (res.tapIndex === 1) {
            wx.showModal({
              title: '推荐设置提示',
              content: post.isRecommend ? '确定要取消推荐吗?' : '确定要推荐该贴吗',
              confirmText: post.isRecommend ? '取消推荐' : '设为推荐',
              confirmColor: '#d81e06',
              success: function () {
                var _success2 = _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee7(res) {
                  return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          if (!res.confirm) {
                            _context7.next = 5;
                            break;
                          }

                          _context7.next = 3;
                          return _api.Post.setPostRecommend(post.id);

                        case 3:
                          if (!_context7.sent) {
                            _context7.next = 5;
                            break;
                          }

                          if (post.isRecommend) {
                            _this6.items.splice(index, 1);
                          }

                        case 5:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                function success(_x2) {
                  return _success2.apply(this, arguments);
                }

                return success;
              }()
            });
          }
        }
      });
    },
    onShare: function onShare(_ref2) {
      var index = _ref2.index,
          post = _ref2.post;
      this.$emit('share', post);
    },
    onEmptyTap: function onEmptyTap() {
      this.$emit('emptyTap');
    },
    onRelaod: function onRelaod() {
      var _this7 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee8() {
        return _regeneratorRuntime2["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this7.state = 0;
                _context8.next = 3;
                return _this7.loadData(true);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    }
  }
}, {info: {"components":{"item-post":{"path":"item-post"},"mp-page":{"path":"mp-page"},"item-topic":{"path":"item-topic"},"item-comment":{"path":"item-user-comment"},"item-notice":{"path":"item-notice"},"item-user":{"path":"item-user"},"item-sys-notice":{"path":"item-sys-notice"},"item-trade":{"path":"..\\plugin\\tip\\components\\item-trade"}},"on":{"57-0":["emptyTap","relaod","scrolltolower","refresherrefresh","refresherrestore","refresherpulling"],"57-7":["share","remove"],"57-9":["share","remove"]}}, handlers: {'57-0': {"emptyTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyTap($event)
      })();
    
  }, "relaod": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRelaod($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'57-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubscribe($event)
      })();
    
  }},'57-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }},'57-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"item-post":{"path":"item-post"},"mp-page":{"path":"mp-page"},"item-topic":{"path":"item-topic"},"item-comment":{"path":"item-user-comment"},"item-notice":{"path":"item-notice"},"item-user":{"path":"item-user"},"item-sys-notice":{"path":"item-sys-notice"},"item-trade":{"path":"..\\plugin\\tip\\components\\item-trade"}},"on":{"57-0":["emptyTap","relaod","scrolltolower","refresherrefresh","refresherrestore","refresherpulling"],"57-7":["share","remove"],"57-9":["share","remove"]}}, handlers: {'57-0': {"emptyTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyTap($event)
      })();
    
  }, "relaod": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRelaod($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'57-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubscribe($event)
      })();
    
  }},'57-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }},'57-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"item-post":{"path":"item-post"},"mp-page":{"path":"mp-page"},"item-topic":{"path":"item-topic"},"item-comment":{"path":"item-user-comment"},"item-notice":{"path":"item-notice"},"item-user":{"path":"item-user"},"item-sys-notice":{"path":"item-sys-notice"},"item-trade":{"path":"..\\plugin\\tip\\components\\item-trade"}},"on":{"57-0":["emptyTap","relaod","scrolltolower","refresherrefresh","refresherrestore","refresherpulling"],"57-7":["share","remove"],"57-9":["share","remove"]}}, handlers: {'57-0': {"emptyTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyTap($event)
      })();
    
  }, "relaod": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRelaod($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'57-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubscribe($event)
      })();
    
  }},'57-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }},'57-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"item-post":{"path":"item-post"},"mp-page":{"path":"mp-page"},"item-topic":{"path":"item-topic"},"item-comment":{"path":"item-user-comment"},"item-notice":{"path":"item-notice"},"item-user":{"path":"item-user"},"item-sys-notice":{"path":"item-sys-notice"},"item-trade":{"path":"..\\plugin\\tip\\components\\item-trade"}},"on":{"57-0":["emptyTap","relaod","scrolltolower","refresherrefresh","refresherrestore","refresherpulling"],"57-7":["share","remove"],"57-9":["share","remove"]}}, handlers: {'57-0': {"emptyTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyTap($event)
      })();
    
  }, "relaod": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRelaod($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'57-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubscribe($event)
      })();
    
  }},'57-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }},'57-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"item-post":{"path":"item-post"},"mp-page":{"path":"mp-page"},"item-topic":{"path":"item-topic"},"item-comment":{"path":"item-user-comment"},"item-notice":{"path":"item-notice"},"item-user":{"path":"item-user"},"item-sys-notice":{"path":"item-sys-notice"},"item-trade":{"path":"..\\plugin\\tip\\components\\item-trade"}},"on":{"57-0":["emptyTap","relaod","scrolltolower","refresherrefresh","refresherrestore","refresherpulling"],"57-7":["share","remove"],"57-9":["share","remove"]}}, handlers: {'57-0': {"emptyTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyTap($event)
      })();
    
  }, "relaod": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRelaod($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'57-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubscribe($event)
      })();
    
  }},'57-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }},'57-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"item-post":{"path":"item-post"},"mp-page":{"path":"mp-page"},"item-topic":{"path":"item-topic"},"item-comment":{"path":"item-user-comment"},"item-notice":{"path":"item-notice"},"item-user":{"path":"item-user"},"item-sys-notice":{"path":"item-sys-notice"},"item-trade":{"path":"..\\plugin\\tip\\components\\item-trade"}},"on":{"57-0":["emptyTap","relaod","scrolltolower","refresherrefresh","refresherrestore","refresherpulling"],"57-7":["share","remove"],"57-9":["share","remove"]}}, handlers: {'57-0': {"emptyTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyTap($event)
      })();
    
  }, "relaod": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRelaod($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'57-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubscribe($event)
      })();
    
  }},'57-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }},'57-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"item-post":{"path":"item-post"},"mp-page":{"path":"mp-page"},"item-topic":{"path":"item-topic"},"item-comment":{"path":"item-user-comment"},"item-notice":{"path":"item-notice"},"item-user":{"path":"item-user"},"item-sys-notice":{"path":"item-sys-notice"},"item-trade":{"path":"..\\plugin\\tip\\components\\item-trade"}},"on":{"57-0":["emptyTap","relaod","scrolltolower","refresherrefresh","refresherrestore","refresherpulling"],"57-7":["share","remove"],"57-9":["share","remove"]}}, handlers: {'57-0': {"emptyTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyTap($event)
      })();
    
  }, "relaod": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRelaod($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'57-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubscribe($event)
      })();
    
  }},'57-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }},'57-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"item-post":{"path":"item-post"},"mp-page":{"path":"mp-page"},"item-topic":{"path":"item-topic"},"item-comment":{"path":"item-user-comment"},"item-notice":{"path":"item-notice"},"item-user":{"path":"item-user"},"item-sys-notice":{"path":"item-sys-notice"},"item-trade":{"path":"..\\plugin\\tip\\components\\item-trade"}},"on":{"57-0":["emptyTap","relaod","scrolltolower","refresherrefresh","refresherrestore","refresherpulling"],"57-7":["share","remove"],"57-9":["share","remove"]}}, handlers: {'57-0': {"emptyTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyTap($event)
      })();
    
  }, "relaod": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRelaod($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'57-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubscribe($event)
      })();
    
  }},'57-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }},'57-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"item-post":{"path":"item-post"},"mp-page":{"path":"mp-page"},"item-topic":{"path":"item-topic"},"item-comment":{"path":"item-user-comment"},"item-notice":{"path":"item-notice"},"item-user":{"path":"item-user"},"item-sys-notice":{"path":"item-sys-notice"},"item-trade":{"path":"..\\plugin\\tip\\components\\item-trade"}},"on":{"57-0":["emptyTap","relaod","scrolltolower","refresherrefresh","refresherrestore","refresherpulling"],"57-7":["share","remove"],"57-9":["share","remove"]}}, handlers: {'57-0': {"emptyTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyTap($event)
      })();
    
  }, "relaod": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRelaod($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'57-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubscribe($event)
      })();
    
  }},'57-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }},'57-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"item-post":{"path":"item-post"},"mp-page":{"path":"mp-page"},"item-topic":{"path":"item-topic"},"item-comment":{"path":"item-user-comment"},"item-notice":{"path":"item-notice"},"item-user":{"path":"item-user"},"item-sys-notice":{"path":"item-sys-notice"},"item-trade":{"path":"..\\plugin\\tip\\components\\item-trade"}},"on":{"57-0":["emptyTap","relaod","scrolltolower","refresherrefresh","refresherrestore","refresherpulling"],"57-7":["share","remove"],"57-9":["share","remove"]}}, handlers: {'57-0': {"emptyTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onEmptyTap($event)
      })();
    
  }, "relaod": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRelaod($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "refresherrefresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrefresh($event)
      })();
    
  }, "refresherrestore": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherrestore($event)
      })();
    
  }, "refresherpulling": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresherpulling($event)
      })();
    
  }},'57-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubscribe($event)
      })();
    
  }},'57-7': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }},'57-9': {"share": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }, "remove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRemove($event)
      })();
    
  }}}, models: {} });