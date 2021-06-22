/**
 * 获取所有的query
 */
declare function getLocationQueries(): Map<string, string>;
/**
 * 获取单个query
 * @param item
 */
declare function getLocationQuery(item: string): string | undefined;
/**
 * 获取pathname
 */
declare function getLocationPathname(): string;
/**
 * 获取协议
 */
declare function getLocationProtocol(): string;
/**
 * 获取完整域名
 */
declare function getLocationOrigin(): string;
export { getLocationOrigin, getLocationPathname, getLocationProtocol, getLocationQueries, getLocationQuery, };
