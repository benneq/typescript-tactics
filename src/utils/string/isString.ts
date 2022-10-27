/**
 * Checks if the provided value is a String
 *
 * @param value
 * @returns `true` if the provided value is a String
 */
export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};
