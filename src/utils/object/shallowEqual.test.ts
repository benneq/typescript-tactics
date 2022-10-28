import { shallowEqual } from './shallowEqual';

describe('object.shallowEqual', () => {
  it('should return true if both primitive values are equal', () => {
    expect(shallowEqual(null, null)).toBe(true);
    expect(shallowEqual(NaN, NaN)).toBe(true);
    expect(shallowEqual('', '')).toBe(true);
    expect(shallowEqual(1, 1)).toBe(true);
  });

  it('should return true if both values are objects with equal properties and values', () => {
    expect(shallowEqual({}, {})).toBe(true);
    expect(shallowEqual({ a: 1 }, { a: 1 })).toBe(true);
    expect(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  });

  it('should return true if both values are arrays with equal length and elements', () => {
    expect(shallowEqual([], [])).toBe(true);
    expect(shallowEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it('should return true for object-like values with same keys and values', () => {
    expect(shallowEqual({}, [])).toBe(true);
    expect(shallowEqual({ 0: 1, 1: 2 }, [1, 2])).toBe(true);
  });

  it('should return false if values are of different types', () => {
    expect(shallowEqual(null, undefined)).toBe(false);
    expect(shallowEqual(NaN, 0)).toBe(false);
    expect(shallowEqual('', false)).toBe(false);
  });

  it('should return false if both primitive values are not equal', () => {
    expect(shallowEqual(1, 2)).toBe(false);
    expect(shallowEqual(true, false)).toBe(false);
  });

  it('should return false if both values are objects with different properties or values', () => {
    expect(shallowEqual({ a: 1 }, {})).toBe(false);
    expect(shallowEqual({ a: 1 }, { a: 2 })).toBe(false);
    expect(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 1 })).toBe(false);
  });

  it('should return false if both values are arrays with different length or elements', () => {
    expect(shallowEqual([], [0])).toBe(false);
    expect(shallowEqual([1, 2, 3], [3, 2, 1])).toBe(false);
  });
});

export {};
