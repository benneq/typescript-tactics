import { contains } from './contains';
import { filter } from './filter';

/**
 *
 * @example
 * intersection([], []) => []
 * intersection([1], [2]) => []
 * intersection([1,2], [2,3]) => [2]
 *
 * @param setA
 * @param setB
 * @returns
 */
export const intersection = <T>(setA: Set<T>, setB: Set<T>): Set<T> => {
  return filter(setB)(contains(setA));
};
