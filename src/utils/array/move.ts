/**
 * Moves the element of the provided Array from source index to target index
 *
 * @mutation
 *
 * @example
 * move([], 1, 2) => []
 * move([1,2,3,4], 0, 2) => [2,3,1,4]
 * move([1,2,3,4], 3, 1) => [1,4,2,3]
 *
 * @param array
 * @param sourceIndex
 * @param targetIndex
 */
export const move = <T>(
  array: T[],
  sourceIndex: number,
  targetIndex: number
): void => {
  if (sourceIndex < array.length) {
    array.splice(targetIndex, 0, array.splice(sourceIndex, 1)[0] as T);
  }
};
