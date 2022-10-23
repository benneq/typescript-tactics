import { Predicate } from './types';

export const isIterable = <T>(value: unknown): value is Iterable<T> => {
  return typeof (value as Iterable<T>)[Symbol.iterator] === 'function';
};

export const toIterable = <T>(value: T | Iterable<T>): Iterable<T> => {
  return isIterable(value) ? value : [value];
};

export const every =
  <T>(iterable: Iterable<T>) =>
  (predicate: Predicate<T>): boolean => {
    for (const e of iterable) {
      if (!predicate(e)) {
        return false;
      }
    }
    return true;
  };

export const some =
  <T>(iterable: Iterable<T>) =>
  (predicate: Predicate<T>): boolean => {
    for (const e of iterable) {
      if (predicate(e)) {
        return true;
      }
    }
    return false;
  };
