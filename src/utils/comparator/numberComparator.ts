import { Comparator } from './_types';

/**
 * Orders `number` values by their natural order, i.e. `-1` < `0` < `1`
 *
 * @exmaple
 * numberComparator(1, 1) => 0
 * numberComparator(-2, 0) => -1
 * numberComparator(1, -1) => 1
 *
 * @param a
 * @param b
 * @returns a Comparator for number values
 */
export const numberComparator: Comparator<number> = (a, b) => a - b;
