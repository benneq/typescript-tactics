import { Predicate } from 'utils/predicate/_types';

/**
 * Checks if all elements of the provided Iterable match the given Predicate
 *
 * @param iterable
 * @returns `true` if the given Predicate returns `true` for all elements of the provided Iterable
 */
export const every =
  <T>(iterable: Iterable<T>) =>
  (predicate: Predicate<[T]>): boolean => {
    for (const e of iterable) {
      if (!predicate(e)) {
        return false;
      }
    }
    return true;
  };
