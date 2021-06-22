/**
 * 简易版深拷贝, 不能用于含有function之类的
 * @param obj
 */
function deepCloneSimple(obj: any) {
    return JSON.parse(JSON.stringify(obj))
}

/**
 * 深拷贝
 * @param obj
 */
function deepClone(obj: any) {
    if (typeof obj !== "object") {
        return obj
    }

    let newObj: any = Array.isArray(obj) ? [] : {}

    for (let key in obj) {
        newObj[key] =
            typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key]
    }
    return newObj
}

/**
 * 函数柯里化
 * @param fn
 * @param args
 */
function curry(fn: any, args: any) {
    return function () {
        let _args = [].slice.call(arguments)

        if (args !== undefined) {
            _args = _args.concat(args)
        }

        // 递归调用
        if (_args.length < fn.length) {
            return curry(fn, _args)
        }

        // 递归出口
        return fn.apply(null, _args)
    }
}

export { deepCloneSimple, deepClone, curry }
