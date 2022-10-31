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
    let acc = initialValue;
    for (const value of iterable) {
      acc = reducerFn(acc, value);
    }
    return acc;
  };
