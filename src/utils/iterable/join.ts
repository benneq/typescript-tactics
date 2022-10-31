import {
  ValueOrProvider,
  valueOrProviderResult,
} from '../object/valueOrProvider';

export const join = <T>(separator: ValueOrProvider<T, [number]>) =>
  function* (iterable: Iterable<T>): Generator<T, void, unknown> {
    const it = iterable[Symbol.iterator]();

    const next = it.next();
    if (next.done) {
      return;
    }

    let currValue = next.value;
    let i = 0;

    while (true) {
      yield currValue;

      const next = it.next();
      if (next.done) {
        return;
      }

      yield valueOrProviderResult(separator, i++);
      currValue = next.value;
    }
  };
