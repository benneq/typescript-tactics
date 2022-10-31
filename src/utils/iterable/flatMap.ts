import { identity, Mapper } from '../func';

/**
 * Maps an iterable to a flat representation of the mapped Iterables
 *
 * @example
 * flatMap(x => [1,x])([]) => []
 * flatMap(x => [1,x])([1,2,3]) => [1,1,1,2,1,3]
 *
 * @param mapper
 * @returns a Generator that emits all elements of all mapped Iterables
 */
export const flatMap: {
  <T>(): (iterable: Iterable<Iterable<T>>) => Generator<T>;
  <T, R>(mapper: Mapper<T, Iterable<R>>): (
    iterable: Iterable<T>
  ) => Generator<R>;
} = <X, T extends Iterable<X>>(mapper: Mapper<T, T> = identity) =>
  function* (iterable: Iterable<T>): Generator<X, void, unknown> {
    for (const value of iterable) {
      for (const inner of mapper(value)) {
        yield inner;
      }
    }
  };
