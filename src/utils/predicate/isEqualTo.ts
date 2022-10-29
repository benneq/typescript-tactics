import { Predicate } from 'utils/predicate/_types';

/**
 * Checks if the two given values are equal
 *
 * @example
 * isEqualTo(1)(1) => true
 * isEqualTo("")(" ") => false
 * isEqualTo(null)(undefined) => false
 *
 * @param valueA
 * @returns true if both values are equal, else false
 */
export const isEqualTo = <T>(valueA: T): Predicate<[T]> => {
  return (valueB) => valueA === valueB;
};
