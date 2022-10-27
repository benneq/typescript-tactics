import { Predicate } from 'utils/predicate/_types';

/**
 * Checks if any element of the provided Iterable matches the given Predicate
 *
 * @param iterable
 * @returns `true` if the given Predicate returns `true` for any element of the provided Iterable
 */
export const some =
  <T>(iterable: Iterable<T>) =>
  (predicate: Predicate<[T]>): boolean => {
    for (const e of iterable) {
      if (predicate(e)) {
        return true;
      }
    }
    return false;
  };
