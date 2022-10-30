/**
 * Removes the element of the provided Array at the specified index
 *
 * @mutation
 *
 * @example
 * removeAt([], 1) => []
 * removeAt([1,2,3], 1) => [1,3]
 *
 * @param array
 * @param index
 */
export const removeAt = <T>(
  array: T[],
  index: number,
  deleteCount = 1
): void => {
  array.splice(index, deleteCount);
};
