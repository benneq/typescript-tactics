/**
 * Checks if the provided value is a Function
 *
 * @param value
 * @returns `true` if the provided value is a Function
 */
export const isFunction = <T, TArgs extends unknown[] = []>(
  value: unknown
): value is (...args: TArgs) => T => {
  return typeof value === 'function';
};
