/**
 * 检查localStorage item是否存在
 * @param item
 */
function isLocalStorageItemExist(item: string) {
    const val = localStorage.getItem(item)
    if (!val) {
        return false
    }
    return true
}

export { isLocalStorageItemExist }
