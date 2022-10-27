import { toIterable } from './toIterable';

describe('iterable.toIterable', () => {
  it('toIterable', () => {
    const value = Symbol();
    expect(toIterable(null)).toEqual([null]);
    expect(toIterable({})).toEqual([{}]);
    expect(toIterable(value)).toEqual([value]);
    expect(toIterable('')).toEqual('');
    expect(toIterable([])).toEqual([]);
    expect(toIterable(new Set())).toEqual(new Set());
    expect(toIterable(new Map())).toEqual(new Map());

    expect(toIterable([value])).toEqual([value]);
    expect(toIterable(new Set([value]))).toEqual(new Set([value]));
    expect(toIterable(new Map([[value, value]]))).toEqual(
      new Map([[value, value]])
    );
  });
});

export {};
