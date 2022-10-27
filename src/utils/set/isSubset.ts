import { containsAll } from './containsAll';

export const isSubset = <T>(set: Set<T>, superset: Set<T>): boolean => {
  return containsAll(superset)(set);
};
