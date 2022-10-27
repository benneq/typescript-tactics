/**
 * Checks if the provided value is `undefined`
 *
 * @param value
 * @returns `true`if the provided value is `undefined`
 */
export const isUndefined = <T>(value: T | undefined): value is undefined => {
  return value === undefined;
};
