import { Callback } from '../func';

/**
 * Calls the given Callback for each element of the provided Iterable
 *
 * @example
 * tap(x => console.log(x))([1,2,3]);
 *
 * @param iterable
 * @returns Void
 */
export const tap = <T>(
  callback: Callback<[T]>
): ((iterable: Iterable<T>) => Generator<T, void, unknown>) => {
  return function* (iterable) {
    for (const e of iterable) {
      callback(e);
      yield e;
    }
  };
};
