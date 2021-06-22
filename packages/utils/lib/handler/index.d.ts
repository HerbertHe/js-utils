/**
 * 简易版深拷贝, 不能用于含有function之类的
 * @param obj
 */
declare function deepCloneSimple(obj: any): any;
/**
 * 深拷贝
 * @param obj
 */
declare function deepClone(obj: any): any;
export { deepCloneSimple, deepClone };
