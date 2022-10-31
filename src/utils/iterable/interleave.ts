import { concat } from './concat';
import { zip } from './zip';

type ExtractValue<T extends ReadonlyArray<Iterable<unknown>>> = {
  [K in keyof T]: T[K] extends Iterable<infer V> ? V | undefined : never;
};

export const interleave = <RArgs extends Iterable<unknown>[]>(
  ...iterables: RArgs
): Generator<ExtractValue<RArgs>, void, unknown> => {
  return concat<any>(zip(...iterables));
};
