import { undefinedLast } from '../comparator/undefinedLast';
import { isGreaterThan } from '../comparator/isGreaterThan';
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
export const min = <T>(
  comparator: Comparator<T>
): ((iterable: Iterable<T>) => T | undefined) => {
  const minValueIsGreaterOrUndefined = isGreaterThan(undefinedLast(comparator));

  return (iterable) => {
    let minValue: T | undefined;
    for (const value of iterable) {
      if (minValueIsGreaterOrUndefined(minValue, value)) {
        minValue = value;
      }
    }
    return minValue;
  };
};
