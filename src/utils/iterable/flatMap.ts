import { Mapper } from '../function/_types';

/**
 * Maps an iterable to a flat representation of the mapped Iterables
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
