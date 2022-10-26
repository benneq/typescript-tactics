import { Predicate } from './predicate';
import { Callback } from './types';

export type IterableCompabile<T> = Iterable<T>;

export const isIterable = <T>(value: unknown): value is Iterable<T> => {
  return Symbol.iterator in Object(value);
};

export const toIterable = <T>(value: T | IterableCompabile<T>): Iterable<T> => {
  return isIterable(value) ? value : [value];
};

export const forEach =
  <T>(iterable: Iterable<T>) =>
  (callback: Callback<[T]>) => {
    for (const e of iterable) {
      callback(e);
    }
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

export const isEmpty = <T>(iterable: Iterable<T>): boolean => {
  for (const _ of iterable) {
    return false;
  }
  return true;
};

export const toArray = <T>(iterable: Iterable<T>): T[] => {
  return Array.from(iterable);
};