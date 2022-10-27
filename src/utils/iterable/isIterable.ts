/**
 * Checks if the provided value is an Iterable
 *
 * @param value
 * @returns `true` if the provided value is an Iterable
 */
export const isIterable = <T>(value: unknown): value is Iterable<T> => {
  return Symbol.iterator in Object(value);
};
