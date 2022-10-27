import { Predicate } from './_types';

export const not = <T>(predicate: Predicate<T>): Predicate<T> => {
  return (value: T) => !predicate(value);
};
