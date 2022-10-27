export const contains =
  <T>(set: Set<T>) =>
  (value: T): boolean => {
    return set.has(value);
  };
