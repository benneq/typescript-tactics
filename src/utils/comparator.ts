import { pipe } from './function';
import { dropWhile } from './iterable/dropWhile';
import { first } from './iterable/first';
import { map } from './iterable/map';
import { isNull, isUndefined } from './object';
import { Falsy, isFalsy } from './predicate/isFalsy';
import { Mapper } from './types';

export type Comparator<T> = (valueA: T, valueB: T) => number;

export const numberNaturalOrder: Comparator<number> = (a, b) => a - b;

export const stringComparator = (
  locales?: string | string[],
  options?: Intl.CollatorOptions
): Comparator<string> => {
  return (a, b) => a.localeCompare(b, locales, options);
};

export const stringNaturalOrder: Comparator<string> = stringComparator();

export const booleanNaturalOrder: Comparator<boolean> = (a, b) => {
  return a === b ? 0 : a ? 1 : -1;
};

export const reverse = <T>(comparator: Comparator<T>): Comparator<T> => {
  return (a: T, b: T) => comparator(a, b) * -1;
};

export const comparatorFor: {
  <T>(mapper: Mapper<T, number>): Comparator<T>;
  <T, R>(mapper: Mapper<T, R>, comparator: Comparator<R>): Comparator<T>;
} = <T>(
  mapper: Mapper<T, number>,
  comparator = numberNaturalOrder
): Comparator<T> => {
  return (a, b) => comparator(mapper(a), mapper(b));
};

export const chain = <T>(...comparators: Comparator<T>[]): Comparator<T> => {
  return (a, b) => {
    return pipe(
      map((comparator: Comparator<T>) => comparator(a, b)),
      dropWhile((value: number) => value === 0),
      first(0)
    )(comparators);
  };
};

export const predicateComparator = <T, U>(
  comparator: Comparator<T>,
  predicate: (value: T | U) => value is U,
  trueFirst = true
): Comparator<T | U> => {
  return (a, b) => {
    if (predicate(a)) {
      return predicate(b) ? 0 : trueFirst ? -1 : 1;
    } else if (predicate(b)) {
      return trueFirst ? 1 : -1;
    } else {
      return comparator(a, b);
    }
  };
};

export const nullFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | null> => {
  return predicateComparator(comparator, isNull);
};

export const nullLast = <T>(
  comparator: Comparator<T>
): Comparator<T | null> => {
  return predicateComparator(comparator, isNull, false);
};

export const undefinedFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | undefined> => {
  return predicateComparator(comparator, isUndefined);
};

export const undefinedLast = <T>(
  comparator: Comparator<T>
): Comparator<T | undefined> => {
  return predicateComparator(comparator, isUndefined, false);
};

export const falsyFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | Falsy> => {
  return predicateComparator(comparator, isFalsy);
};

export const falsyLast = <T>(
  comparator: Comparator<T>
): Comparator<T | Falsy> => {
  return predicateComparator(comparator, isFalsy, false);
};
