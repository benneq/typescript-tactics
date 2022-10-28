import { isUndefined } from './isUndefined';

/**
 * Checks if the provided value is not `undefined`
 *
 * @example
 * isNotUndefined(0) => true
 * isNotUndefined(undefined) => false
 *
 * @param value
 * @returns `true`if the provided value is not `undefined`
 */
export const isNotUndefined = <T>(value: T): value is Exclude<T, undefined> => {
  return !isUndefined(value);
};
