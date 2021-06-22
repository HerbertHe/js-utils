/**
 * 获取所有的cookie
 */
declare function getAllCookie(): Map<string, string>;
/**
 * 判断cookie item是否存在
 * @param item
 */
declare function isCookieExist(item: string): boolean;
/**
 * 获取cookie项
 * @param item
 */
declare function getCookie(item: string): string | undefined;
/**
 * 设置cookie
 * @param key 键
 * @param val 值
 */
declare function setCookie(key: string, val: string): void;
export { isCookieExist, getAllCookie, getCookie, setCookie };
