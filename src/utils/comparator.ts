import { Mapper } from './types';

export type Comparator<T> = (valueA: T, valueB: T) => number;

export const numberNaturalOrder: Comparator<number> = (a, b) => a - b;

export const reverse = <T>(comparator: Comparator<T>): Comparator<T> => {
  return (a: T, b: T) => comparator(a, b) * -1;
};

export const comparatorFor = <T, R>(
  mapper: Mapper<T, R>,
  comparator: Comparator<R>
): Comparator<T> => {
  return (a, b) => comparator(mapper(a), mapper(b));
};
