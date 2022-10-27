/**
 * Checks if the provided value is an Iterable
 *
 * @example
 * isIterable(null) => false
 * isIterable("") => true
 * isIterable([]) => true
 *
 * @param value
 * @returns `true` if the provided value is an Iterable
 */
export const isIterable = <T>(value: unknown): value is Iterable<T> => {
  return Symbol.iterator in Object(value);
};
