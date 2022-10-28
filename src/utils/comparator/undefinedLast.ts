import { isUndefined } from '../object/isUndefined';
import { predicateComparator } from './predicateComparator';
import { Comparator } from './_types';

/**
 *
 * @example
 * undefinedLast(numberNaturalOrder)(undefined, 1) => 1
 * undefinedLast(numberNaturalOrder)(0, -1) => 1
 * undefinedLast(numberNaturalOrder)(-1, undefined) => -1
 * undefinedLast(numberNaturalOrder)(undefined, undefined) => 0
 *
 * @param comparator
 * @returns
 */
export const undefinedLast = <T>(
  comparator: Comparator<T>
): Comparator<T | undefined> => {
  return predicateComparator(comparator, isUndefined, false);
};
