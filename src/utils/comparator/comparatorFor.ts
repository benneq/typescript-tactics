import { Mapper } from 'utils/function/_types';
import { numberNaturalOrder } from './numberNaturalOrder';
import { Comparator } from './_types';

export const comparatorFor: {
  <T>(mapper: Mapper<T, number>): Comparator<T>;
  <T, R>(mapper: Mapper<T, R>, comparator: Comparator<R>): Comparator<T>;
} = <T>(
  mapper: Mapper<T, number>,
  comparator = numberNaturalOrder
): Comparator<T> => {
  return (a, b) => comparator(mapper(a), mapper(b));
};
