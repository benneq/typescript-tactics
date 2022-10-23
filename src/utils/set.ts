import { toArray } from './array';
import { every, some } from './iterable';

export type SetCompatible<T> = T[] | Set<T>;

export const isSet = <T>(value: unknown): value is Set<T> => {
  return value instanceof Set;
};

export const toSet = <T>(value: T | SetCompatible<T>): Set<T> => {
  if (isSet(value)) {
    return value;
  }

  return new Set(toArray(value));
};

export const add =
  <T>(set: Set<T>) =>
  (value: T) => {
    set.add(value);
  };

export const addAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>) => {
    value.forEach(add(set));
  };

export const remove =
  <T>(set: Set<T>) =>
  (value: T) => {
    set.delete(value);
  };

export const removeAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>) => {
    value.forEach(remove(set));
  };

export const toggle =
  <T>(set: Set<T>) =>
  (value: T): void => {
    if (set.has(value)) {
      set.delete(value);
    } else {
      set.add(value);
    }
  };

export const toggleAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): void => {
    value.forEach(toggle(set));
  };

export const isEmpty = <T>(set: Set<T>): boolean => {
  return set.size === 0;
};

export const contains =
  <T>(set: Set<T>) =>
  (value: T): boolean => {
    return set.has(value);
  };

export const containsAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): boolean => {
    return every(value)(contains(set));
  };

export const containsAny =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): boolean => {
    return some(value)(contains(set));
  };
