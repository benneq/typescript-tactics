import { Predicate } from 'utils/predicate/_types';

/**
 * Checks if any element of the provided Iterable matches the given Predicate
 *
 * @example
 * some(x => x > 0)([1,2,3,4]) => true
 * some(x => x > 3)([1,2,3,4]) => true
 * some(x => x > 5)([1,2,3,4]) => false
 *
 * @param iterable
 * @returns `true` if the given Predicate returns `true` for any element of the provided Iterable
 */
export const some =
  <T>(predicate: Predicate<[T]>) =>
  (iterable: Iterable<T>): boolean => {
    for (const e of iterable) {
      if (predicate(e)) {
        return true;
      }
    }
    return false;
  };
