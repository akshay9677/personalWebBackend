"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var likeSchema = new _mongoose["default"].Schema({
  likes: {
    type: Number,
    required: [true, "Likes is required"]
  },
  sysModifiedTime: Number,
  id: String
});

var _default = _mongoose["default"].model("Likes", likeSchema);

exports["default"] = _default;
//# sourceMappingURL=Likes.model.js.map