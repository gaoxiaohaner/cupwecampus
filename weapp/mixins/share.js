"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require('../common/api.js');

var _default = {
  data: {
    post: null
  },
  onShareAppMessage: function onShareAppMessage() {
    if (this.post.posType === 1) {
      return {
        title: this.post.articleTitle,
        imageUrl: this.post.articleImg,
        path: "/pages/index?id=".concat(_api.Post.getUserId(), "&postId=").concat(this.post.id)
      };
    } else {
      var imageUrl = this.post.imgs && this.post.imgs.length ? this.post.imgs[0].path : "".concat(_api.imgUrl, "/share.png");
      return {
        title: this.post.baseTxt || this.post.articleTitle || this.post.content,
        imageUrl: imageUrl,
        path: "/pages/index?id=".concat(_api.Post.getUserId(), "&postId=").concat(this.post.id)
      };
    }
  },
  methods: {
    onShare: function onShare(post) {
      this.post = post;
    }
  }
};
exports["default"] = _default;