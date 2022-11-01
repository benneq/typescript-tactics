import { copy } from './copy';
import { toggleAll } from './toggleAll';
import { SetCompatible } from './_types';

/**
 *
 * @example
 * symmetricDifference([], []) => []
 * symmetricDifference([1,2], [3]) => [1,2,3]
 * symmetricDifference([1,2], [2,3]) => [1,3]
 *
 * @param setA
 * @param setB
 * @returns
 */
export const symmetricDifference =
  <T>(setB: SetCompatible<T>) =>
  (setA: Set<T>): Set<T> => {
    setA = copy(setA);
    toggleAll(setA)(setB);
    return setA;
  };
