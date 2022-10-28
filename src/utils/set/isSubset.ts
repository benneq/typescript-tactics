import { containsAll } from './containsAll';

/**
 *
 * @example
 * isSubset([], []) => true
 * isSubset([1], [1,2]) => true
 * isSubset([1,2], [1]) => false
 *
 * @param set
 * @param superset
 * @returns
 */
export const isSubset = <T>(set: Set<T>, superset: Set<T>): boolean => {
  return containsAll(superset)(set);
};
