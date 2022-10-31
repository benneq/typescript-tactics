import { addAll } from './addAll';
import { copy } from './copy';
import { SetCompatible } from './_types';

/**
 *
 * @example
 * union([], []) => []
 * union([1,2], [2,3]) => [1,2,3]
 *
 * @param setA
 * @param setB
 * @returns
 */
export const union = <T>(setA: Set<T>, setB: SetCompatible<T>): Set<T> => {
  setA = copy(setA);
  addAll(setA)(setB);
  return setA;
};
