import { Predicate } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function* done(): Generator<never, void, unknown> {}

export function* takeUntil<T>(
  generator: Generator<T>,
  predicate: Predicate<T>
): Generator<T, void, unknown> {
  for (const value of generator) {
    if (predicate(value)) {
      return;
    }
    yield value;
  }
}

export function* map<T, R>(
  generator: Generator<T>,
  mapper: (value: T) => R
): Generator<R, void, unknown> {
  for (const value of generator) {
    yield mapper(value);
  }
}
