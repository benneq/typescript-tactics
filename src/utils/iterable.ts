import { Comparator } from './comparator';
import { identity } from './function';
import { Predicate } from './predicate';
import { Callback, Mapper } from './types';

export type IterableCompabile<T> = Iterable<T>;

export const isIterable = <T>(value: unknown): value is Iterable<T> => {
  return Symbol.iterator in Object(value);
};

export const toIterable = <T>(value: T | IterableCompabile<T>): Iterable<T> => {
  return isIterable(value) ? value : [value];
};

export const first: {
  <T>(iterable: Iterable<T>): T | undefined;
  <T>(iterable: Iterable<T>, defaultValue: T): T;
} = <T>(iterable: Iterable<T>, defaultValue?: T): T | undefined => {
  for (const value of iterable) {
    return value;
  }
  return defaultValue;
};

export const forEach =
  <T>(iterable: Iterable<T>) =>
  (callback: Callback<[T]>) => {
    for (const e of iterable) {
      callback(e);
    }
  };

export const filter = <T>(predicate: Predicate<T>) =>
  function* (iterable: Iterable<T>): Generator<T, void, unknown> {
    for (const value of iterable) {
      if (predicate(value)) {
        yield value;
      }
    }
  };

export const dropWhile = <T>(predicate: Predicate<T>) =>
  function* (iterable: Iterable<T>): Generator<T, void, unknown> {
    for (const value of iterable) {
      if (!predicate(value)) {
        yield value;
      }
    }
  };

export const takeWhile = <T>(predicate: Predicate<T>) =>
  function* (iterable: Iterable<T>): Generator<T, void, unknown> {
    for (const value of iterable) {
      if (!predicate(value)) {
        return;
      }
      yield value;
    }
  };

export const limit = <T>(
  maxSize: number
): ((iterable: Iterable<T>) => Generator<T, void, unknown>) => {
  let i = 0;
  return takeWhile(() => {
    return maxSize > i++;
  });
};

export const skip = <T>(
  toSkip: number
): ((iterable: Iterable<T>) => Generator<T, void, unknown>) => {
  let i = 0;
  return dropWhile(() => {
    return toSkip > i++;
  });
};

export const map = <T, R>(mapper: Mapper<T, R>) =>
  function* (iterable: Iterable<T>): Generator<R, void, unknown> {
    for (const value of iterable) {
      yield mapper(value);
    }
  };

export const flatMap = <T, R>(mapper: Mapper<T, Iterable<R>>) =>
  function* (iterable: Iterable<T>): Generator<R, void, unknown> {
    for (const value of iterable) {
      for (const inner of mapper(value)) {
        yield inner;
      }
    }
  };

type Concat = <T>(
  iterable: Iterable<Iterable<T>>
) => Generator<T, void, unknown>;

export const concat: Concat = flatMap(identity);

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

export const min =
  <T>(comparator: Comparator<T>) =>
  (iterable: Iterable<T>): T | undefined => {
    let minValue = undefined;
    for (const value of iterable) {
      if (minValue === undefined || comparator(minValue, value) > 0) {
        minValue = value;
      }
    }
    return minValue;
  };

export const max =
  <T>(comparator: Comparator<T>) =>
  (iterable: Iterable<T>): T | undefined => {
    let maxValue = undefined;
    for (const value of iterable) {
      if (maxValue === undefined || comparator(maxValue, value) < 0) {
        maxValue = value;
      }
    }
    return maxValue;
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
