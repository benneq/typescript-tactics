import { Predicate } from '../predicate/_types';

/**
 * Omits the first elements from the provided Iterable until the given Predicate returns `false`
 *
 * @example
 * dropWhile(x => x < 3)([]) => []
 * dropWhile(x => x < 3)([1,2]) => []
 * dropWhile(x => x < 3)([1,3,2,4]) => [3,2,4]
 *
 * @param predicate
 * @returns a Generator that does not emit values until the given Predicate returns `false`
 */
export const dropWhile = <T>(predicate: Predicate<[T]>) =>
  function* (iterable: Iterable<T>): Generator<T, void, unknown> {
    let drop = true;

    for (const value of iterable) {
      if (!predicate(value)) {
        drop = false;
      }

      if (!drop) {
        yield value;
      }
    }
  };
