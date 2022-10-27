import { Predicate } from './_types';

export const or =
  <T>(...predicates: Predicate<T>[]): Predicate<T> =>
  (value) => {
    return predicates.some((predicate) => predicate(value));
  };
