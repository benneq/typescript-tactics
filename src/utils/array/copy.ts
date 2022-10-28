/**
 * Copies the contents of the given Array into a new Array
 *
 * @example
 * copy([]) => []
 * copy([1,2,3]) => [1,2,3]
 *
 * @param array
 * @returns a new Array with the same elements as the provided Array
 */
export const copy = <T>(array: T[]): T[] => {
  return Array.from(array);
};
