"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "weibo_emojis", {
  enumerable: true,
  get: function get() {
    return _baseService.weibo_emojis;
  }
});
Object.defineProperty(exports, "baseUrl", {
  enumerable: true,
  get: function get() {
    return _baseService.baseUrl;
  }
});
Object.defineProperty(exports, "eventHub", {
  enumerable: true,
  get: function get() {
    return _baseService.eventHub;
  }
});
Object.defineProperty(exports, "qiniuUrl", {
  enumerable: true,
  get: function get() {
    return _baseService.qiniuUrl;
  }
});
Object.defineProperty(exports, "imgUrl", {
  enumerable: true,
  get: function get() {
    return _baseService.imgUrl;
  }
});
Object.defineProperty(exports, "appUpdate", {
  enumerable: true,
  get: function get() {
    return _baseService.appUpdate;
  }
});
exports.Message = exports.Post = exports.Topic = exports.User = void 0;

var _userService = _interopRequireDefault(require('user-service.js'));

var _topicService = _interopRequireDefault(require('topic-service.js'));

var _postService = _interopRequireDefault(require('post-service.js'));

var _messageService = _interopRequireDefault(require('message-service.js'));

var _baseService = require('base-service.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = new _userService["default"]();
exports.User = User; 
var Topic = new _topicService["default"]();
exports.Topic = Topic;
var Post = new _postService["default"]();
exports.Post = Post;
var Message = new _messageService["default"]();
exports.Message = Message;