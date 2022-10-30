import { isArrayLike } from './isArrayLike';

describe('array.isArray', () => {
  it('should return true if the provided value is ArrayLike', () => {
    const value1: unknown[] = [];
    expect(isArrayLike(value1)).toBe(true);

    const value2 = { length: 0 };
    expect(isArrayLike(value2)).toBe(true);

    const value3 = '';
    expect(isArrayLike(value3)).toBe(true);

    const value4 = jest.fn();
    expect(isArrayLike(value4)).toBe(true);
  });

  it('should return false if the provided value is not ArrayLike', () => {
    expect(isArrayLike(undefined)).toBe(false);
    expect(isArrayLike(null)).toBe(false);
    expect(isArrayLike(NaN)).toBe(false);
    expect(isArrayLike(0)).toBe(false);
    expect(isArrayLike(true)).toBe(false);
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike(new Set())).toBe(false);
    expect(isArrayLike(new Map())).toBe(false);
  });
});

export {};
