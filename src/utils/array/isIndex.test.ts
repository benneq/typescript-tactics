import { isIndex } from './isIndex';

describe('array.isIndex', () => {
  it('should return true if the given index is in bounds of the Array', () => {
    const array = [1, 2, 3];

    expect(isIndex(array)(0)).toBe(true);
    expect(isIndex(array)(1)).toBe(true);
    expect(isIndex(array)(2)).toBe(true);
  });

  it('should return false if the Array is empty', () => {
    const array: unknown[] = [];

    expect(isIndex(array)(-1)).toBe(false);
    expect(isIndex(array)(0)).toBe(false);
    expect(isIndex(array)(1)).toBe(false);
  });

  it('should return false if the given index is out of bounds of the Array', () => {
    const array = [1, 2, 3];

    expect(isIndex(array)(-1)).toBe(false);
    expect(isIndex(array)(3)).toBe(false);
  });

  it('should work with Strings', () => {
    expect(isIndex('')(-1)).toBe(false);
    expect(isIndex('')(1)).toBe(false);
    expect(isIndex('abc')(-1)).toBe(false);
    expect(isIndex('abc')(1)).toBe(true);
  });
});

export {};
