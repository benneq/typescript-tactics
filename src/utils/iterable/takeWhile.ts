import { Predicate } from 'utils/predicate/_types';

/**
 * Emits all elements from the provided Iterable until the given Predicate does not match
 *
 * @example
 * takeWhile(x => x < 3)([1,2,3,4]) => [1,2]
 *
 * @param predicate
 * @returns a Generator that emits values until the given Predicate returns `false`
 */
export const takeWhile = <T>(predicate: Predicate<[T]>) =>
  function* (iterable: Iterable<T>): Generator<T, void, unknown> {
    for (const value of iterable) {
      if (!predicate(value)) {
        return;
      }
      yield value;
    }
  };
