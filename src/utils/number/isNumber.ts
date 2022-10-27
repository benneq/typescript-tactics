/**
 * Checks if the provided value is a Number
 *
 * @param value
 * @returns `true` if the provided value is a Number
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number';
};
