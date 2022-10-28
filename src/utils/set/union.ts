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
  const union = copy(setA);
  addAll(union)(setB);
  return union;
};
