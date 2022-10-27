/**
 * Get the first element of the provided Iterable, or the given default value if the Iterable is empty
 *
 * @param defaultValue
 * @returns the first element of the provided Iterable, or the given defaultValue
 */
export const first: {
  <T>(): (iterable: Iterable<T>) => T | undefined;
  <T>(defaultValue: T): (iterable: Iterable<T>) => T;
} =
  <T>(defaultValue?: T) =>
  (iterable: Iterable<T>): T | undefined => {
    for (const value of iterable) {
      return value;
    }
    return defaultValue;
  };
