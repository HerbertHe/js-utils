/**
 * 元素全屏
 * @param el HTMLElement
 */
function openFullScreen(el: HTMLElement) {
    el.requestFullscreen()
}

/**
 * 退出全屏
 */
function exitFullScreen() {
    document.exitFullscreen()
}

export { openFullScreen, exitFullScreen }
