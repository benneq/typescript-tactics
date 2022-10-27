/**
 * Checks if the provided value is a Float
 *
 * @param value
 * @returns `true` if the provided value is a Float
 */
export const isFloat = (value: unknown): value is number => {
  return Number.isFinite(value);
};
