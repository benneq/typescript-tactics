export const includesAll =
  <T>(array: T[]) =>
  (shouldIncludeValues: T[]) => {
    return shouldIncludeValues.every((value) => array.includes(value));
  };
