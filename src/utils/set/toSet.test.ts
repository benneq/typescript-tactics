import { toSet } from './toSet';

describe('set.toSet', () => {
  it('should return the same instance if the provided value is already a Set', () => {
    const set1 = new Set();
    expect(toSet(set1)).toBe(set1);
    expect(toSet(set1)).toEqual(new Set());

    const value = Symbol();
    const map2 = new Set([value]);
    expect(toSet(map2)).toBe(map2);
    expect(toSet(map2)).toEqual(new Set([value]));
  });

  it('should copy all key-value pairs into a new Array', () => {
    expect(toSet(null)).toEqual(new Set([null]));
    expect(toSet({})).toEqual(new Set([{}]));
    expect(toSet('')).toEqual(new Set(['']));
    expect(toSet([])).toEqual(new Set());
    expect(toSet(new Map())).toEqual(new Set([new Map()]));

    const value = Symbol();
    expect(toSet([value])).toEqual(new Set([value]));
  });
});

export {};
