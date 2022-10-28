import { isIterable } from './isIterable';

describe('iterable.isIterable', () => {
  it('should return true if the provided value is an Iterable', () => {
    expect(isIterable('')).toBe(true);
    expect(isIterable([])).toBe(true);
    expect(isIterable(new Set())).toBe(true);
    expect(isIterable(new Map())).toBe(true);
  });

  it('should return false if the provided value is not an Iterable', () => {
    expect(isIterable(undefined)).toBe(false);
    expect(isIterable(null)).toBe(false);
    expect(isIterable(NaN)).toBe(false);
    expect(isIterable(0)).toBe(false);
    expect(isIterable(true)).toBe(false);
    expect(isIterable(Symbol())).toBe(false);
    expect(isIterable({})).toBe(false);
    expect(isIterable(jest.fn())).toBe(false);
  });
});

export {};
