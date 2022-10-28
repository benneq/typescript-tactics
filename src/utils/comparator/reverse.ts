import { Comparator } from './_types';

/**
 *
 * @example
 * reverse(numberNaturalOrder)(1, 2) => 1
 * reverse(numberNaturalOrder)(1, -1) => -1
 * reverse(numberNaturalOrder)(1, 1) => 0
 *
 * @param comparator
 * @returns
 */
export const reverse = <T>(comparator: Comparator<T>): Comparator<T> => {
  return (a: T, b: T) => comparator(a, b) * -1;
};
