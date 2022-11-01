import { copy } from './copy';
import { removeAll } from './removeAll';
import { SetCompatible } from './_types';

/**
 *
 * @exmple
 * difference([])([]) => []
 * difference([3])([1,2]) => [1,2]
 * difference([2,3])([1,2]) => [1]
 *
 * @param setA
 * @param setB
 * @returns
 */
export const difference =
  <T>(setB: SetCompatible<T>) =>
  (setA: Set<T>): Set<T> => {
    setA = copy(setA);
    removeAll(setA)(setB);
    return setA;
  };
