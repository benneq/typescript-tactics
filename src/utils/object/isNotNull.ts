import { isNull } from './isNull';

/**
 * Checks if the provided value is not `null`
 *
 * @param value
 * @returns `true`if the provided value is not `null`
 */
export const isNotNull = <T>(value: T): value is Exclude<T, null> => {
  return !isNull(value);
};
