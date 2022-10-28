import { isNull } from '../object/isNull';
import { predicateComparator } from './predicateComparator';
import { Comparator } from './_types';

/**
 *
 * @example
 * nullFirst(numberNaturalOrder)(null, 1) => -1
 * nullFirst(numberNaturalOrder)(0, -1) => 1
 * nullFirst(numberNaturalOrder)(-1, null) => 1
 * nullFirst(numberNaturalOrder)(null, null) => 0
 *
 * @param comparator
 * @returns
 */
export const nullFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | null> => {
  return predicateComparator(comparator, isNull);
};
