/**
 * Union of types that can be converted to Number
 */
export type NumberCompatible = number | bigint;

/**
 * Converts the provided value to a Number
 *
 * @param value
 * @returns the converted Number
 */
export const toNumber = (value: NumberCompatible): number => {
  return Number(value);
};
