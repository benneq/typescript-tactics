import { Predicate } from 'utils/predicate/_types';

/**
 * Only emits elements from the provided Iterable that match the given Predicate
 *
 * @param predicate
 * @returns a Generator that only emits values for which the given Predicate returns `true`
 */
export const filter = <T>(predicate: Predicate<[T]>) =>
  function* (iterable: Iterable<T>): Generator<T, void, unknown> {
    for (const value of iterable) {
      if (predicate(value)) {
        yield value;
      }
    }
  };
