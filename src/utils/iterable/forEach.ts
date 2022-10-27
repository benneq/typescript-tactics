import { Callback } from '../function/_types';

/**
 * Calls the given Callback for each element of the provided Iterable
 *
 * @example
 * forEach([1,2,3])(x => console.log(x));
 *
 * @param iterable
 * @returns Void
 */
export const forEach =
  <T>(iterable: Iterable<T>) =>
  (callback: Callback<[T]>): void => {
    for (const e of iterable) {
      callback(e);
    }
  };
