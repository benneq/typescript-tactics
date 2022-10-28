import { Falsy, isFalsy } from '../predicate/isFalsy';
import { predicateComparator } from './predicateComparator';
import { Comparator } from './_types';

/**
 *
 * @example
 * falsyLast(numberNaturalOrder)(null, 1) => 1
 * falsyLast(numberNaturalOrder)(0, -1) => 1
 * falsyLast(numberNaturalOrder)(2, "") => -1
 * falsyLast(numberNaturalOrder)(0, "") => 0
 *
 * @param comparator
 * @returns
 */
export const falsyLast = <T>(
  comparator: Comparator<T>
): Comparator<T | Falsy> => {
  return predicateComparator(comparator, isFalsy, false);
};
