import { Predicate } from 'utils/predicate/_types';

/**
 * Omits all elements from the provided Iterable that match the given Predicate
 *
 * @example
 * dropWhile(x => x < 3)([1,2,3,4]) => [3,4]
 *
 * @param predicate
 * @returns a Generator that does not emit values until the given Predicate returns `false`
 */
export const dropWhile = <T>(predicate: Predicate<[T]>) =>
  function* (iterable: Iterable<T>): Generator<T, void, unknown> {
    for (const value of iterable) {
      if (!predicate(value)) {
        yield value;
      }
    }
  };
