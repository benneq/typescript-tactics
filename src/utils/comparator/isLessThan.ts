import { Comparator } from './_types';

export const isLessThan =
  <T>(comparator: Comparator<T>) =>
  (a: T, b: T): boolean => {
    return comparator(a, b) < 0;
  };
