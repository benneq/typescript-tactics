/**
 * Checks if the provided value is an Integer
 *
 * @param value
 * @returns `true` if the provided value is an Integer
 */
export const isInteger = (value: unknown): value is number => {
  return Number.isInteger(value);
};
