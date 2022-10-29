import { isSuperset } from './isSuperset';

describe('set.isSuperset', () => {
  it('should return true if setB is empty', () => {
    const value = Symbol();

    expect(isSuperset(new Set(), new Set())).toBe(true);

    expect(isSuperset(new Set([value]), new Set())).toBe(true);
  });

  it('should return false if setA is empty and setB is not empty', () => {
    const value = Symbol();

    expect(isSuperset(new Set(), new Set([value]))).toBe(false);
  });

  it('should return true if both Sets contain the same elements', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(
      isSuperset(new Set([value1, value2]), new Set([value1, value2]))
    ).toBe(true);
  });

  it('should return true if setA contains all the elements of setB', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(isSuperset(new Set([value1, value2]), new Set([value1]))).toBe(true);
  });

  it('should return false if setA does not contain all elements of setB', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(isSuperset(new Set([value1]), new Set([value2]))).toBe(false);

    expect(isSuperset(new Set([value1]), new Set([value1, value2]))).toBe(
      false
    );
  });
});

export {};
