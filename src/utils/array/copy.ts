/**
 * Copies the contents of the given Array into a new Array
 *
 * @param array
 * @returns a new Array with the same elements as the provided Array
 */
export const copy = <T>(array: T[]): T[] => {
  return Array.from(array);
};
