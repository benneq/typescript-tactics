/**
 * Moves the element of the provided Array from source index to target index
 *
 * @mutation
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
