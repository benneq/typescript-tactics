/**
 * Union of types that can be converted to Number
 */
export type NumberCompatible = number | bigint;

/**
 * Converts the provided value to a Number
 *
 * @example
 * toNumber(2) => 2
 * toNumber(BigInt(2)) => 2
 * toNumber("") => false
 *
 * @param value
 * @returns the converted Number
 */
export const toNumber = (value: NumberCompatible): number => {
  return Number(value);
};
