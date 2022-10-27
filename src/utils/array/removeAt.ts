/**
 * Removes the element of the provided Array at the specified index
 *
 * @mutation
 *
 * @param array
 * @param index
 */
export const removeAt = <T>(array: T[], index: number): void => {
  array.splice(index, 1);
};
