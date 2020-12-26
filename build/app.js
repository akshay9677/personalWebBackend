"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _db = require("./config/db");

var _Users = _interopRequireDefault(require("./models/Users.model"));

var _Likes = _interopRequireDefault(require("./models/Likes.model"));

var _Blog = _interopRequireDefault(require("./models/Blog.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config({
  path: "./src/config/config.env"
});

(0, _db.connectDB)();
var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000;
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.post("/api/v1/users", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, name, email, description, params, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, email = _req$body.email, description = _req$body.description;
            params = {
              name: name,
              email: email,
              description: description
            };
            _context.next = 5;
            return _Users["default"].create(params);

          case 5:
            user = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              data: "Added user to newsletter",
              error: null
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message,
              data: null
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
app.post("/api/v1/likes", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var likeData, _id, like;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Likes["default"].find({
              id: "#akshay.personal.web"
            });

          case 3:
            likeData = _context2.sent;
            _id = likeData[0]._id;
            likeData[0].likes = likeData[0].likes + 1;
            likeData[0].sysModifiedTime = new Date().getTime();
            _context2.next = 9;
            return _Likes["default"].findOneAndUpdate({
              _id: _id
            }, likeData[0]);

          case 9:
            like = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              data: "Updated Likes",
              error: null
            }));

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              error: _context2.t0.message,
              data: null
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
app.get("/api/v1/likes", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var likeData;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Likes["default"].find({
              id: "#akshay.personal.web"
            });

          case 3:
            likeData = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              data: likeData,
              error: null
            }));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              error: _context3.t0.message,
              data: null
            }));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
app.get("/api/v1/blog", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var blogPosts;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Blog["default"].find();

          case 3:
            blogPosts = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              data: blogPosts,
              error: null
            }));

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).json({
              error: _context4.t0.message,
              data: null
            }));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
app.post("/api/v1/blog", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var _req$body2, email, subject, post, tags, newPost;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, subject = _req$body2.subject, post = _req$body2.post, tags = _req$body2.tags;
            newPost = {
              email: email,
              subject: subject,
              post: post,
              tags: tags
            };
            newPost.sysCreatedTime = new Date().getTime();
            newPost.likes = 0;
            newPost.tags = newPost.tags ? newPost.tags : [];
            _context5.next = 8;
            return _Blog["default"].create(newPost);

          case 8:
            return _context5.abrupt("return", res.status(200).json({
              data: newPost,
              error: null
            }));

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).json({
              error: _context5.t0.message,
              data: null
            }));

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}());
app.post("/api/v1/blog/summary", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var _id, blogPost;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _id = req.body._id;
            _context6.next = 4;
            return _Blog["default"].find({
              _id: _id
            });

          case 4:
            blogPost = _context6.sent;
            return _context6.abrupt("return", res.status(200).json({
              data: blogPost[0],
              error: null
            }));

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.status(500).json({
              error: _context6.t0.message,
              data: null
            }));

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function (_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}());
app.put("/api/v1/blog/like", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var blog, _id, editPost;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            blog = req.body;
            _id = blog._id;
            blog.likes += 1;
            _context7.next = 6;
            return _Blog["default"].findOneAndUpdate({
              _id: _id
            }, blog);

          case 6:
            editPost = _context7.sent;
            return _context7.abrupt("return", res.status(200).json({
              data: blog,
              error: null
            }));

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](0);
            return _context7.abrupt("return", res.status(500).json({
              error: _context7.t0.message,
              data: null
            }));

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 10]]);
  }));

  return function (_x19, _x20) {
    return _ref7.apply(this, arguments);
  };
}());
app.listen(PORT, function () {
  console.log("Server started at port ".concat(PORT));
});
//# sourceMappingURL=app.js.map