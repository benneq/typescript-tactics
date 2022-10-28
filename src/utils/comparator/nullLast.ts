import { isNull } from '../object/isNull';
import { predicateComparator } from './predicateComparator';
import { Comparator } from './_types';

/**
 *
 * @example
 * nullLast(numberNaturalOrder)(null, 1) => 1
 * nullLast(numberNaturalOrder)(0, -1) => 1
 * nullLast(numberNaturalOrder)(-1, null) => -1
 * nullLast(numberNaturalOrder)(null, null) => 0
 *
 * @param comparator
 * @returns
 */
export const nullLast = <T>(
  comparator: Comparator<T>
): Comparator<T | null> => {
  return predicateComparator(comparator, isNull, false);
};
