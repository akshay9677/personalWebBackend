"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usersSchema = new _mongoose["default"].Schema({
  name: String,
  email: String,
  description: String
});

var _default = _mongoose["default"].model("Users", usersSchema);

exports["default"] = _default;
//# sourceMappingURL=Users.model.js.map