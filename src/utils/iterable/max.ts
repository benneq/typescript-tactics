import { Comparator } from '../comparator/_types';

/**
 * Get the maximum element from the provided Iterable using the given Comparator
 *
 * @example
 * max((a,b) => a-b)([]) => undefined
 * max((a,b) => a-b)([3,1,2]) => 3
 *
 * @param comparator
 * @returns the maximum element from the provided Iterable
 */
export const max =
  <T>(comparator: Comparator<T>) =>
  (iterable: Iterable<T>): T | undefined => {
    let maxValue = undefined;
    for (const value of iterable) {
      if (maxValue === undefined || comparator(maxValue, value) < 0) {
        maxValue = value;
      }
    }
    return maxValue;
  };
