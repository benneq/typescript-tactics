/**
 * Converts all elements of the provided Iterable to an Array
 *
 * @param iterable
 * @returns an Array consisting of all elements of the provided Iterable
 */
export const toArray = <T>(iterable: Iterable<T>): T[] => {
  return Array.from(iterable);
};
