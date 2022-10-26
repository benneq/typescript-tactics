import { Predicate } from './predicate';
import { toArray as iterableToArray } from './iterable';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const done = (function* done(): Generator<never, void, unknown> {})();

export const filter = <T>(predicate: Predicate<T>) =>
  function* (generator: Generator<T>): Generator<T, void, unknown> {
    for (const value of generator) {
      if (predicate(value)) {
        yield value;
      }
    }
  };

export const takeWhile = <T>(predicate: Predicate<T>) =>
  function* (generator: Generator<T>): Generator<T, void, unknown> {
    for (const value of generator) {
      if (!predicate(value)) {
        return;
      }
      yield value;
    }
  };

export const map = <T, R>(mapper: (value: T) => R) =>
  function* (generator: Generator<T>): Generator<R, void, unknown> {
    for (const value of generator) {
      yield mapper(value);
    }
  };

export const flatMap = <T, R>(mapper: (value: T) => Generator<R>) =>
  function* (generator: Generator<T>): Generator<R, void, unknown> {
    for (const value of generator) {
      for (const inner of mapper(value)) {
        yield inner;
      }
    }
  };

export const toArray = iterableToArray;
