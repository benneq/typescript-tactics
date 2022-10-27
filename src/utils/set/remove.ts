export const remove =
  <T>(set: Set<T>) =>
  (value: T): void => {
    set.delete(value);
  };
