import { Predicate } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function* done() {}

export function* takeUntil<T>(
  generator: Generator<T>,
  predicate: Predicate<T>
) {
  for (const value of generator) {
    if (predicate(value)) {
      return;
    }
    yield value;
  }
}
