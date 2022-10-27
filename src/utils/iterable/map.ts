import { Mapper } from 'utils/function/_types';

/**
 * Maps every element of the provided Iterable using the given Mapper
 *
 * @param mapper
 * @returns a Generator that emits all mapped elements from the provided Iterable
 */
export const map = <T, R>(mapper: Mapper<T, R>) =>
  function* (iterable: Iterable<T>): Generator<R, void, unknown> {
    for (const value of iterable) {
      yield mapper(value);
    }
  };
