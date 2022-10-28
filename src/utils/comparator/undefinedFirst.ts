import { isUndefined } from '../object/isUndefined';
import { predicateComparator } from './predicateComparator';
import { Comparator } from './_types';

export const undefinedFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | undefined> => {
  return predicateComparator(comparator, isUndefined);
};
