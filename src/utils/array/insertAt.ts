/**
 * Inserts the given values into the provided Array at the specified index
 *
 * @mutation
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
