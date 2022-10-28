/**
 * Inserts the given values into the provided Array at the specified index
 *
 * @mutation
 *
 * @example
 * insertAt([], 2, 1, 2) => [1,2]
 * insertAt([1,2,3], 1, 4) => [1,4,2,3]
 *
 * @param array
 * @param index
 * @param values
 */
export const insertAt = <T>(
  array: T[],
  index: number,
  ...values: T[]
): void => {
  array.splice(index, 0, ...values);
};
