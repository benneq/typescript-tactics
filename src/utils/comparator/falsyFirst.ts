import { Falsy, isFalsy } from '../predicate/isFalsy';
import { predicateComparator } from './predicateComparator';
import { Comparator } from './_types';

export const falsyFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | Falsy> => {
  return predicateComparator(comparator, isFalsy);
};
