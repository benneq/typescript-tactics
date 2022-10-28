/**
 * Checks if the provided value is `undefined`
 *
 * @example
 * isUndefined(undefined) => true
 * isUndefined(0) => false
 *
 * @param value
 * @returns `true`if the provided value is `undefined`
 */
export const isUndefined = <T>(value: T | undefined): value is undefined => {
  return value === undefined;
};
