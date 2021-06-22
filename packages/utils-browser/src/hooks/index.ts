// react自定义钩子

import { useState } from "react"
import { setCookie, getCookie } from "../cookie/index"

/**
 * localStorage自定义钩子
 * @param item
 */
function useLocalStorage(item: string) {
    const val = localStorage.getItem(item)
    // 状态绑定, 触发react的dispatch
    const [i, setI] = useState(val)
    const setVal = (v: string) => {
        localStorage.setItem(item, v)
        setI(v)
    }
    return [i, setVal]
}

/**
 * cookie自定义钩子
 * @param item
 */
function useCookie(item: string) {
    // 设置cookie
    const val = getCookie(item)
    const [i, setI] = useState(val)
    const setVal = (v: string) => {
        setCookie(item, v)
        setI(v)
    }
    return [i, setVal]
}

export { useLocalStorage, useCookie }
