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
export const symmetricDifference = <T>(
  setA: Set<T>,
  setB: SetCompatible<T>
): Set<T> => {
  const difference = copy(setA);
  toggleAll(difference)(setB);
  return difference;
};
