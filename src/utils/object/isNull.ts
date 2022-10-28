/**
 * Checks if the provided value is `null`
 *
 * @example
 * isNull(null) => true
 * isNull(0) => false
 *
 * @param value
 * @returns `true`if the provided value is `null`
 */
export const isNull = (value: unknown): value is null => {
  return value === null;
};
