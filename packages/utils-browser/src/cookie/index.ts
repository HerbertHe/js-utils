/**
 * cookie分割
 */
function splitCookie() {
    const cookie: string = document.cookie
    let res: Map<string, string> = new Map<string, string>()
    cookie.split(/; */).forEach((item: string) => {
        const [k, v] = item.split(/=/)
        res.set(k, v)
    })
    return res
}

/**
 * 获取所有的cookie
 */
function getAllCookie() {
    return splitCookie()
}

/**
 * 判断cookie item是否存在
 * @param item
 */
function isCookieExist(item: string) {
    const cookie = splitCookie()
    return cookie.has(item)
}

/**
 * 获取cookie项
 * @param item
 */
function getCookie(item: string) {
    const cookie = splitCookie()
    return cookie.get(item)
}

/**
 * 设置cookie
 * @param key 键
 * @param val 值
 */
function setCookie(key: string, val: string): string {
    const cookie = splitCookie()
    cookie.set(key, val)
    let cookieArray: Array<string> = new Array<string>()
    for (let key of cookie) {
        cookieArray.push(`${key[0]}=${key[1]}`)
    }
    return cookieArray.join("; ")
}

export { isCookieExist, getAllCookie, getCookie, setCookie }
