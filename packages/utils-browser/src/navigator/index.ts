/**
 * 获取UA信息
 */
function getUserAgent() {
    return navigator.userAgent
}

/**
 * 获取本地语言
 */
function getLanguage() {
    return navigator.language
}

export { getUserAgent, getLanguage }
