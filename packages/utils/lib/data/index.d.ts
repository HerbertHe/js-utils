/**
 * 判断是否为非symbol值
 * @param val 值
 */
declare function isStatic(val: any): boolean;
/**
 * 判断为引用类型数据
 * @param val
 */
declare function isReference(val: any): boolean;
/**
 * 判断为对象类型数据
 * @param obj
 */
declare function isObject(obj: any): string;
/**
 * 判断为数组类型
 */
declare function isArray(arr: any): boolean;
