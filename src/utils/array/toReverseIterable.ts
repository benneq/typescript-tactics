/**
 * Returns a Generator that yields the elements of the array in reverse order
 *
 * @example
 * toReverseIterable([1,2,3]) => [3, 2, 1]
 */
export function* toReverseIterable<T>(
  array: ArrayLike<T>
): Generator<T, void, unknown> {
  for (let i = array.length - 1; i >= 0; i--) {
    yield array[i] as T;
  }
}
