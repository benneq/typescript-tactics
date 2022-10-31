type ExtractValue<T extends ReadonlyArray<Iterable<unknown>>> = {
  [K in keyof T]: T[K] extends Iterable<infer V> ? V : never;
};

export function* zip<RArgs extends Iterable<unknown>[]>(
  ...iterables: RArgs
): Generator<ExtractValue<RArgs>, void, unknown> {
  const iterators = iterables.map((iterable) => iterable[Symbol.iterator]());

  while (true) {
    const iteratorResults = iterators.map((iterator) => iterator.next());

    if (iteratorResults.every((result) => result.done)) {
      return;
    }

    yield iteratorResults.map((result) => result.value) as ExtractValue<RArgs>;
  }
}
