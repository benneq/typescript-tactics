import { pipe } from '../function';
import { dropWhile } from '../iterable/dropWhile';
import { first } from '../iterable/first';
import { map } from '../iterable/map';
import { Comparator } from './_types';

export const chain = <T>(...comparators: Comparator<T>[]): Comparator<T> => {
  return (a, b) => {
    return pipe(
      map((comparator: Comparator<T>) => comparator(a, b)),
      dropWhile((value: number) => value === 0),
      first(0)
    )(comparators);
  };
};
