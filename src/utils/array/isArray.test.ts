import { isArray } from './isArray';

describe('array.isArray', () => {
  it('should return true if the provided value is an Array', () => {
    const value: unknown[] = [];
    expect(isArray(value)).toBe(true);
  });

  it('should return false if the provided value is not an Array', () => {
    expect(isArray(undefined)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(NaN)).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray(new Set())).toBe(false);
    expect(isArray(new Map())).toBe(false);
    expect(isArray(jest.fn())).toBe(false);
  });
});

export {};
