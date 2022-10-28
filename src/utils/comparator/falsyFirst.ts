import { Falsy, isFalsy } from '../predicate/isFalsy';
import { predicateComparator } from './predicateComparator';
import { Comparator } from './_types';

/**
 *
 * @example
 * falsyFirst(numberNaturalOrder)(null, 1) => -1
 * falsyFirst(numberNaturalOrder)(0, -1) => -1
 * falsyFirst(numberNaturalOrder)(2, "") => 1
 * falsyFirst(numberNaturalOrder)(0, "") => 0
 *
 * @param comparator
 * @returns
 */
export const falsyFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | Falsy> => {
  return predicateComparator(comparator, isFalsy);
};
