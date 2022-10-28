import { shallowEqual } from './shallowEqual';

describe('object.shallowEqual', () => {
  it('shallowEqual', () => {
    expect(shallowEqual(null, null)).toBe(true);
    expect(shallowEqual(null, undefined)).toBe(false);
    expect(shallowEqual('', null)).toBe(false);
    expect(shallowEqual(0, null)).toBe(false);
    expect(shallowEqual(NaN, NaN)).toBe(true);
    expect(shallowEqual({ a: 1 }, { a: 1 })).toBe(true);
    expect(shallowEqual({ a: 1 }, { a: 2 })).toBe(false);
    expect(shallowEqual({ a: 1 }, { b: 1 })).toBe(false);
    expect(shallowEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(shallowEqual([3, 2, 1], [1, 2, 3])).toBe(false);
    expect(shallowEqual([1, 2], [2, 3])).toBe(false);
  });
});

export {};
