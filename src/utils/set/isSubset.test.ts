import { isSubset } from './isSubset';

describe('set.isSubset', () => {
  it('should return true if setA is empty', () => {
    const value = Symbol();

    expect(isSubset(new Set(), new Set())).toBe(true);

    expect(isSubset(new Set(), new Set([value]))).toBe(true);
  });

  it('should return false if setA is not empty and setB is empty', () => {
    const value = Symbol();

    expect(isSubset(new Set([value]), new Set())).toBe(false);
  });

  it('should return true if both Sets contain the same elements', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(isSubset(new Set([value1, value2]), new Set([value1, value2]))).toBe(
      true
    );
  });

  it('should return true if setB contains all the elements of setA', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(isSubset(new Set([value1]), new Set([value1, value2]))).toBe(true);
  });

  it('should return false if setB does not contain all elements of setA', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(isSubset(new Set([value1]), new Set([value2]))).toBe(false);

    expect(isSubset(new Set([value1, value2]), new Set([value1]))).toBe(false);
  });
});

export {};
