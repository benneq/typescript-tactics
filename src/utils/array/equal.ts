/**
 * Checks if two given Arrays are equal
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
