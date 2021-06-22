/**
 * localStorage自定义钩子
 * @param item
 */
declare function useLocalStorage(item: string): (string | ((v: string) => void) | null)[];
/**
 * cookie自定义钩子
 * @param item
 */
declare function useCookie(item: string): (string | ((v: string) => void) | undefined)[];
export { useLocalStorage, useCookie };
