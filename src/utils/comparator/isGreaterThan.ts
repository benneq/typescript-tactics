import { Comparator } from './_types';

export const isGreaterThan =
  <T>(comparator: Comparator<T>) =>
  (a: T, b: T): boolean => {
    return comparator(a, b) > 0;
  };
