export const includesAll =
  <T>(shouldIncludeValues: T[]) =>
  (array: T[]) => {
    return shouldIncludeValues.every((value) => array.includes(value));
  };
