import { Comparator } from 'utils/comparator';

/**
 * Get the minimum element from the provided Iterable using the given Comparator
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
