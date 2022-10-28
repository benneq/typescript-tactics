/**
 * Checks if the provided value is a Float
 *
 * @example
 * isInteger(NaN) => false
 * isInteger(Infinity) => false
 * isInteger(0.5) => true
 * isInteger(0) => true
 * isInteger("") => false
 *
 * @param value
 * @returns `true` if the provided value is a Float
 */
export const isFloat = (value: unknown): value is number => {
  return Number.isFinite(value);
};
