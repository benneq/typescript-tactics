import { isUndefined } from '../object/isUndefined';
import { predicateComparator } from './predicateComparator';
import { Comparator } from './_types';

/**
 *
 * @example
 * undefinedFirst(numberNaturalOrder)(undefined, 1) => -1
 * undefinedFirst(numberNaturalOrder)(0, -1) => 1
 * undefinedFirst(numberNaturalOrder)(-1, undefined) => 1
 * undefinedFirst(numberNaturalOrder)(undefined, undefined) => 0
 *
 * @param comparator
 * @returns
 */
export const undefinedFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | undefined> => {
  return predicateComparator(comparator, isUndefined);
};
