/**
 * Checks if the provided value is an Array
 *
 * @param value
 * @returns `true` if the provided value is an Array
 */
export const isArray = <T>(value: unknown): value is Array<T> => {
  return Array.isArray(value);
};
