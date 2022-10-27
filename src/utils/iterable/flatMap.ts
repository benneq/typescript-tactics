import { Mapper } from '../function/_types';

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
export const flatMap = <T, R>(mapper: Mapper<T, Iterable<R>>) =>
  function* (iterable: Iterable<T>): Generator<R, void, unknown> {
    for (const value of iterable) {
      for (const inner of mapper(value)) {
        yield inner;
      }
    }
  };
