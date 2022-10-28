import { Comparator } from './_types';

/**
 * Orders `boolean` values by their natural order, i.e. `false` < `true`
 *
 * @exmaple
 * booleanComparator(true, true) => 0
 * booleanComparator(false, true) => -1
 * booleanComparator(true, false) => 1
 *
 * @param a
 * @param b
 * @returns a Comparator for boolean values
 */
export const booleanComparator: Comparator<boolean> = (a, b) => {
  return a === b ? 0 : a ? 1 : -1;
};
