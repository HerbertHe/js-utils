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

export { deepCloneSimple, deepClone }
