import { toIterable } from './toIterable';

describe('iterable.toIterable', () => {
  it('should return the same instance if the provided value is already an Iterable', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    const array = [value1, value2];
    expect(toIterable(array)).toBe(array);
    expect(toIterable(array)).toEqual([value1, value2]);

    const set = new Set([value1, value2]);
    expect(toIterable(set)).toBe(set);
    expect(toIterable(set)).toEqual(new Set([value1, value2]));

    const map = new Map([[value1, value2]]);
    expect(toIterable(map)).toBe(map);
    expect(toIterable(map)).toEqual(new Map([[value1, value2]]));
  });

  it('should create a new Iterable with the provided value', () => {
    const value = Symbol();
    expect(toIterable(null)).toEqual([null]);
    expect(toIterable({})).toEqual([{}]);
    expect(toIterable(value)).toEqual([value]);
    expect(toIterable('')).toEqual('');
    expect(toIterable([])).toEqual([]);
    expect(toIterable(new Set())).toEqual(new Set());
    expect(toIterable(new Map())).toEqual(new Map());
  });
});

export {};
