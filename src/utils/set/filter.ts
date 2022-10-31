import { Predicate } from '../predicate/_types';
import { filter as iterableFilter } from '../iterable/filter';

/**
 *
 * @example
 * filter([1,2,3])(x => x < 3) => [1,2]
 *
 * @param set
 * @returns
 */
export const filter =
  <T>(predicate: Predicate<[T]>) =>
  (set: Set<T>): Set<T> => {
    return new Set<T>(iterableFilter(predicate)(set));
  };
