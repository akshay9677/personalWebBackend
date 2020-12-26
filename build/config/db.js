"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDB = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var connectDB = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var uri, conn;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            uri = process.env.MONGO;
            _context.next = 4;
            return _mongoose["default"].connect(uri, {
              useNewUrlParser: true,
              useCreateIndex: true,
              useUnifiedTopology: true,
              useFindAndModify: false
            });

          case 4:
            conn = _context.sent;
            console.log("MongoDB Connected: ".concat(conn.connection.host));
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log("Error: ".concat(_context.t0.message));
            process.exit(1);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function connectDB() {
    return _ref.apply(this, arguments);
  };
}();

exports.connectDB = connectDB;
//# sourceMappingURL=db.js.map