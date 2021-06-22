'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

/**
 * 检查localStorage item是否存在
 * @param item
 */
function isLocalStorageItemExist(item) {
  var val = localStorage.getItem(item);

  if (!val) {
    return false;
  }

  return true;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * cookie分割
 */
function splitCookie() {
  var cookie = document.cookie;
  var res = new Map();
  cookie.split(/; */).forEach(function (item) {
    var _item$split = item.split(/=/),
        _item$split2 = _slicedToArray(_item$split, 2),
        k = _item$split2[0],
        v = _item$split2[1];

    res.set(k, v);
  });
  return res;
}
/**
 * 获取所有的cookie
 */


function getAllCookie() {
  return splitCookie();
}
/**
 * 判断cookie item是否存在
 * @param item
 */


function isCookieExist(item) {
  var cookie = splitCookie();
  return cookie.has(item);
}
/**
 * 获取cookie项
 * @param item
 */


function getCookie(item) {
  var cookie = splitCookie();
  return cookie.get(item);
}
/**
 * 设置cookie
 * @param key 键
 * @param val 值
 */


function setCookie(key, val) {
  var cookie = splitCookie();
  cookie.set(key, val);
  var cookieArray = new Array();

  var _iterator = _createForOfIteratorHelper(cookie),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _key = _step.value;
      cookieArray.push("".concat(_key[0], "=").concat(_key[1]));
    } // update cookie

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  document.cookie = cookieArray.join("; ");
}

/**
 * localStorage自定义钩子
 * @param item
 */

function useLocalStorage(item) {
  var val = localStorage.getItem(item); // 状态绑定, 触发react的dispatch

  var _useState = react.useState(val),
      _useState2 = _slicedToArray(_useState, 2),
      i = _useState2[0],
      setI = _useState2[1];

  var setVal = function setVal(v) {
    localStorage.setItem(item, v);
    setI(v);
  };

  return [i, setVal];
}
/**
 * cookie自定义钩子
 * @param item
 */


function useCookie(item) {
  // 设置cookie
  var val = getCookie(item);

  var _useState3 = react.useState(val),
      _useState4 = _slicedToArray(_useState3, 2),
      i = _useState4[0],
      setI = _useState4[1];

  var setVal = function setVal(v) {
    setCookie(item, v);
    setI(v);
  };

  return [i, setVal];
}

/**
 * 获取所有的query
 */
function getLocationQueries() {
  var search = location.search.replace("?", "").split("&");
  var res = new Map();

  var _iterator = _createForOfIteratorHelper(search),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var tmp = item.split(/=/);
      res.set(tmp[0], tmp[1]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return res;
}
/**
 * 获取单个query
 * @param item
 */


function getLocationQuery(item) {
  return getLocationQueries().get(item);
}
/**
 * 获取pathname
 */


function getLocationPathname() {
  return location.pathname;
}
/**
 * 获取协议
 */


function getLocationProtocol() {
  return location.protocol;
}
/**
 * 获取完整域名
 */


function getLocationOrigin() {
  return location.origin;
}

exports.getAllCookie = getAllCookie;
exports.getCookie = getCookie;
exports.getLocationOrigin = getLocationOrigin;
exports.getLocationPathname = getLocationPathname;
exports.getLocationProtocol = getLocationProtocol;
exports.getLocationQueries = getLocationQueries;
exports.getLocationQuery = getLocationQuery;
exports.isCookieExist = isCookieExist;
exports.isLocalStorageItemExist = isLocalStorageItemExist;
exports.setCookie = setCookie;
exports.useCookie = useCookie;
exports.useLocalStorage = useLocalStorage;
