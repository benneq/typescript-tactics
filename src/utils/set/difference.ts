import { copy } from './copy';
import { removeAll } from './removeAll';
import { SetCompatible } from './_types';

/**
 *
 * @exmple
 * difference([], []) => []
 * difference([1,2], [3]) => [1,2]
 * difference([1,2], [2,3]) => [1]
 *
 * @param setA
 * @param setB
 * @returns
 */
export const difference = <T>(setA: Set<T>, setB: SetCompatible<T>): Set<T> => {
  const difference = copy(setA);
  removeAll(difference)(setB);
  return difference;
};
