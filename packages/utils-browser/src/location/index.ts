/**
 * 获取所有的query
 */
function getLocationQueries() {
    const search = location.search.replace("?", "").split("&")
    let res = new Map<string, string>()
    for (let item of search) {
        const tmp = item.split(/=/)
        res.set(tmp[0], tmp[1])
    }
    return res
}

/**
 * 获取单个query
 * @param item
 */
function getLocationQuery(item: string) {
    return getLocationQueries().get(item)
}

/**
 * 获取pathname
 */
function getLocationPathname() {
    return location.pathname
}

/**
 * 获取协议
 */
function getLocationProtocol() {
    return location.protocol
}

/**
 * 获取完整域名
 */
function getLocationOrigin() {
    return location.origin
}

export {
    getLocationOrigin,
    getLocationPathname,
    getLocationProtocol,
    getLocationQueries,
    getLocationQuery,
}
