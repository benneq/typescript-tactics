import { toIterable } from './iterable';

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

export const every =
  <T>(set: Set<T>) =>
  (value: T | Iterable<T>): boolean => {
    for (const e of toIterable(value)) {
      if (!set.has(e)) {
        return false;
      }
    }
    return true;
  };

export const some =
  <T>(set: Set<T>) =>
  (value: T | Iterable<T>): boolean => {
    for (const e of toIterable(value)) {
      if (set.has(e)) {
        return true;
      }
    }
    return false;
  };
