import { isNull } from '../object/isNull';
import { predicateComparator } from './predicateComparator';
import { Comparator } from './_types';

export const nullFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | null> => {
  return predicateComparator(comparator, isNull);
};
