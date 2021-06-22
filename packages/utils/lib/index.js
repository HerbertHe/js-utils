'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/**
 * 判断是否为非symbol值
 * @param val 值
 */
function isStatic(val) {
  return typeof val === "string" || typeof val === "number" || typeof val === "boolean" || typeof val === "undefined" || val === null;
}
/**
 * 判断为引用类型数据
 * @param val
 */


function isReference(val) {
  var type = _typeof(val);

  return val !== null && (type === "object" || type === "function");
}
/**
 * 判断为对象类型数据
 * @param obj
 */


function isObject(obj) {
  return Object.prototype.toString.call(obj);
}
/**
 * 判断为数组类型
 */


function isArray(arr) {
  return Array.isArray(arr);
}
/**
 * 判断正则表达式
 * @param val
 */


function isRegExp(val) {
  return Object.prototype.toString.call(val) === "[object RegExp]";
}
/**
 * 判断Date对象
 * @param val
 */


function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]";
}

/**
 * 简易版深拷贝, 不能用于含有function之类的
 * @param obj
 */
function deepCloneSimple(obj) {
  return JSON.parse(JSON.stringify(obj));
}
/**
 * 深拷贝
 * @param obj
 */


function deepClone(obj) {
  if (_typeof(obj) !== "object") {
    return obj;
  }

  var newObj = Array.isArray(obj) ? [] : {};

  for (var key in obj) {
    newObj[key] = _typeof(obj[key]) === "object" ? deepClone(obj[key]) : obj[key];
  }

  return newObj;
}
/**
 * 函数柯里化
 * @param fn
 * @param args
 */


function curry(fn, args) {
  return function () {
    var _args = [].slice.call(arguments);

    if (args !== undefined) {
      _args = _args.concat(args);
    } // 递归调用


    if (_args.length < fn.length) {
      return curry(fn, _args);
    } // 递归出口


    return fn.apply(null, _args);
  };
}

/**
 * sleep函数 promised timeout
 * @param ms 毫秒
 * @param cb 回调函数
 */
function sleep(ms, cb) {
  return new Promise(function (resolve) {
    setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return cb === null || cb === void 0 ? void 0 : cb();

            case 2:
              resolve();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), ms);
  });
}

exports.curry = curry;
exports.deepClone = deepClone;
exports.deepCloneSimple = deepCloneSimple;
exports.isArray = isArray;
exports.isDate = isDate;
exports.isObject = isObject;
exports.isReference = isReference;
exports.isRegExp = isRegExp;
exports.isStatic = isStatic;
exports.sleep = sleep;
