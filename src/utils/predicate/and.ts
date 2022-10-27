import { Predicate } from './_types';

export const and =
  <T>(...predicates: Predicate<T>[]): Predicate<T> =>
  (value) => {
    return predicates.every((predicate) => predicate(value));
  };
