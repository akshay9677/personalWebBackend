"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BlogSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: [true, "Email is required"]
  },
  subject: {
    type: String,
    required: [true, "Subject is required"]
  },
  post: {
    type: Object,
    required: [true, "Post is required"]
  },
  sysCreatedTime: Number,
  likes: Number,
  tags: Array
});

var _default = _mongoose["default"].model("Blog", BlogSchema);

exports["default"] = _default;
//# sourceMappingURL=Blog.model.js.map