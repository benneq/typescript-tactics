import { every, some, toIterable } from './iterable';

export const toggle =
  <T>(set: Set<T>) =>
  (value: T): void => {
    if (set.has(value)) {
      set.delete(value);
    } else {
      set.add(value);
    }
  };

export const isEmpty = <T>(set: Set<T>): boolean => {
  return set.size === 0;
};

export const toSet = <T>(value: T | Iterable<T>): Set<T> => {
  return new Set(toIterable(value));
};

export const isSet = <T>(value: unknown): value is Set<T> => {
  return value instanceof Set;
};

export const containsAll =
  <T>(set: Set<T>) =>
  (value: T | Iterable<T>): boolean => {
    return every(toIterable(value))((e) => set.has(e));
  };

export const containsAny =
  <T>(set: Set<T>) =>
  (value: T | Iterable<T>): boolean => {
    return some(toIterable(value))((e) => set.has(e));
  };
