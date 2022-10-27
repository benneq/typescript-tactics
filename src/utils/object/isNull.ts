/**
 * Checks if the provided value is `null`
 *
 * @param value
 * @returns `true`if the provided value is `null`
 */
export const isNull = <T>(value: T | null): value is null => {
  return value === null;
};
