/**
 *
 * @example
 * reduce((acc, val) => acc + val, 0)([1,2,3])
 *
 * @param reducerFn
 * @param initialValue
 * @returns
 */
export const reduce =
  <T, U>(
    reducerFn: (previousValue: U, currentValue: T) => U,
    initialValue: U
  ) =>
  (iterable: Iterable<T>): U => {
    for (const value of iterable) {
      initialValue = reducerFn(initialValue, value);
    }
    return initialValue;
  };
