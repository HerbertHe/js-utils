/**
 * sleep函数 promised timeout
 * @param ms 毫秒
 * @param cb 回调函数
 */
function sleep(ms: number, cb?: any) {
    return new Promise<void>((resolve) => {
        setTimeout(async () => {
            await cb?.()
            resolve()
        }, ms)
    })
}

export { sleep }
