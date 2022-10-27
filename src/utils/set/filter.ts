import { Predicate } from '../predicate/_types';
import { filter as iterableFilter } from '../iterable/filter';

export const filter =
  <T>(set: Set<T>) =>
  (predicate: Predicate<[T]>): Set<T> => {
    return new Set<T>(iterableFilter(predicate)(set));
  };
