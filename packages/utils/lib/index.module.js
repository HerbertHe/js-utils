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

export { deepClone, deepCloneSimple, isArray, isDate, isObject, isReference, isRegExp, isStatic };
