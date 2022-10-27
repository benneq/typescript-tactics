/**
 * Gets the nth element of the provided Array
 *
 * @param array
 * @param index
 * @returns the element at the given index of the provided Array
 */
export const nth = <T extends unknown[], I extends number = 0>(
  array: T,
  index: I = 0 as I
): T[I] => {
  return array.at(index);
};
