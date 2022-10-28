import { Comparator } from '../comparator/_types';

/**
 * Get the minimum element from the provided Iterable using the given Comparator
 *
 * @example
 * min((a,b) => a-b)([]) => undefined
 * min((a,b) => a-b)([3,1,2]) => 1
 *
 * @param comparator
 * @returns the minimum element from the provided Iterable
 */
export const min =
  <T>(comparator: Comparator<T>) =>
  (iterable: Iterable<T>): T | undefined => {
    let minValue = undefined;
    for (const value of iterable) {
      if (minValue === undefined || comparator(minValue, value) > 0) {
        minValue = value;
      }
    }
    return minValue;
  };
