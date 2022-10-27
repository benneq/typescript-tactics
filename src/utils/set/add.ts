export const add =
  <T>(set: Set<T>) =>
  (value: T): void => {
    set.add(value);
  };
