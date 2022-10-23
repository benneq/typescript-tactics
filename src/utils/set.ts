export const toggle =
  <T>(set: Set<T>) =>
  (value: T): void => {
    if (set.has(value)) {
      set.delete(value);
    } else {
      set.add(value);
    }
  };

export const isEmpty = <T>(set: Set<T>): boolean => {
  return set.size === 0;
};
