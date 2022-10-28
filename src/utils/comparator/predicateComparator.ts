import { Comparator } from './_types';

/**
 *
 * @example
 * predicateComparator(numberNaturalOrder, isNull)(0, null) => 1
 * predicateComparator(numberNaturalOrder, isNull)(null, -1) => -1
 * predicateComparator(numberNaturalOrder, isNull)(null, null) => 0
 *
 * @param comparator
 * @param predicate
 * @param trueFirst
 * @returns
 */
export const predicateComparator = <T, U>(
  comparator: Comparator<T>,
  predicate: (value: T | U) => value is U,
  trueFirst = true
): Comparator<T | U> => {
  return (a, b) => {
    if (predicate(a)) {
      return predicate(b) ? 0 : trueFirst ? -1 : 1;
    } else if (predicate(b)) {
      return trueFirst ? 1 : -1;
    } else {
      return comparator(a, b);
    }
  };
};
