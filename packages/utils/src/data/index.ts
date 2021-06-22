/**
 * 判断是否为非symbol值
 * @param val 值
 */
function isStatic(val: any) {
    return (
        typeof val === "string" ||
        typeof val === "number" ||
        typeof val === "boolean" ||
        typeof val === "undefined" ||
        val === null
    )
}

/**
 * 判断为引用类型数据
 * @param val
 */
function isReference(val: any) {
    let type = typeof val
    return val !== null && (type === "object" || type === "function")
}

/**
 * 判断为对象类型数据
 * @param obj
 */
function isObject(obj: any) {
    return Object.prototype.toString.call(obj)
}

/**
 * 判断为数组类型
 */
function isArray(arr: any) {
    return Array.isArray(arr)
}

/**
 * 判断正则表达式
 * @param val
 */
function isRegExp(val: any) {
    return Object.prototype.toString.call(val) === "[object RegExp]"
}

/**
 * 判断Date对象
 * @param val
 */
function isDate(val: any) {
    return Object.prototype.toString.call(val) === "[object Date]"
}

export { isStatic, isReference, isObject, isArray, isRegExp, isDate }
