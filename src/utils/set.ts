import { from } from './array/from';
import { every } from './iterable/every';
import { some } from './iterable/some';
import { Predicate } from './predicate/_types';

export type SetCompatible<T> = T[] | Set<T>;

export const isSet = <T>(value: unknown): value is Set<T> => {
  return value instanceof Set;
};

export const toSet = <T>(value: T | SetCompatible<T>): Set<T> => {
  if (isSet(value)) {
    return value;
  }

  return new Set(from(value));
};

export const copy = <T>(set: Set<T>): Set<T> => {
  return new Set(set);
};

export const filter =
  <T>(set: Set<T>) =>
  (predicate: Predicate<[T]>): Set<T> => {
    const res = new Set<T>();
    set.forEach((e) => predicate(e) && res.add(e));
    return res;
  };

export const isEmpty = <T>(set: Set<T>): boolean => {
  return !set.size;
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

export const isSuperset = <T>(set: Set<T>, subset: Set<T>): boolean => {
  return containsAll(set)(subset);
};

export const isSubset = <T>(set: Set<T>, superset: Set<T>): boolean => {
  return containsAll(superset)(set);
};

export const union = <T>(setA: Set<T>, setB: SetCompatible<T>): Set<T> => {
  const union = copy(setA);
  addAll(union)(setB);
  return union;
};

export const intersection = <T>(setA: Set<T>, setB: Set<T>): Set<T> => {
  return filter(setB)(contains(setA));
};

export const symmetricDifference = <T>(
  setA: Set<T>,
  setB: SetCompatible<T>
): Set<T> => {
  const difference = copy(setA);
  toggleAll(difference)(setB);
  return difference;
};

export const difference = <T>(setA: Set<T>, setB: SetCompatible<T>): Set<T> => {
  const difference = copy(setA);
  removeAll(difference)(setB);
  return difference;
};

// mutations

export const add =
  <T>(set: Set<T>) =>
  (value: T): void => {
    set.add(value);
  };

export const addAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): void => {
    value.forEach(add(set));
  };

export const remove =
  <T>(set: Set<T>) =>
  (value: T): void => {
    set.delete(value);
  };

export const removeAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): void => {
    value.forEach(remove(set));
  };

export const toggle =
  <T>(set: Set<T>) =>
  (value: T): void => {
    const action = contains(set)(value) ? remove : add;
    action(set)(value);
  };

export const toggleAll =
  <T>(set: Set<T>) =>
  (value: SetCompatible<T>): void => {
    value.forEach(toggle(set));
  };
