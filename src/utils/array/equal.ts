/**
 * Checks if two given Arrays are equal
 *
 * @example
 * equal([])([]) => true
 * equal([1])([2]) => false
 * equal([1,2,3])([1,2,3]) => true
 *
 * @param arrayA
 * @returns `true` if both provided Arrays have the same elements in the same order
 */
export const equal =
  <T>(arrayA: T[]) =>
  (arrayB: T[]): boolean => {
    return (
      arrayA.length === arrayB.length &&
      arrayA.every((value, index) => value === arrayB[index])
    );
  };
