import { nth } from './nth';

describe('array.nth', () => {
  it('should return the first Array element if no index is provided', () => {
    const value = Symbol();

    expect(nth([value, Symbol()])).toBe(value);
  });

  it('should return the Array element at the given index', () => {
    const value = Symbol();

    expect(nth([])).toEqual(undefined);
    expect(nth([Symbol(), value], 1)).toBe(value);
  });

  it('should return the Array element from the end if the given index is negative', () => {
    const value = Symbol();

    expect(nth([value, Symbol()], -2)).toBe(value);
  });

  it('should return undefined if the Array is empty', () => {
    expect(nth([], 0)).toBeUndefined();
  });

  it('should return undefined if the given index is out of bounds of the Array', () => {
    expect(nth([1, 2, 3], 3)).toBeUndefined();
  });
});

export {};
