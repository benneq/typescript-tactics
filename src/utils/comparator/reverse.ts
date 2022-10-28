import { Comparator } from './_types';

export const reverse = <T>(comparator: Comparator<T>): Comparator<T> => {
  return (a: T, b: T) => comparator(a, b) * -1;
};
