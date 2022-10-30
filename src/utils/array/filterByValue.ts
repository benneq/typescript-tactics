export const filterByValue =
  <T>(allowedValues: T[]) =>
  (array: T[]): T[] => {
    return array.filter((value) => allowedValues.includes(value));
  };
