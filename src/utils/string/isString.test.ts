import { isString } from './isString';

describe('string.isString', () => {
  it('should return true if the given value is a String', () => {
    expect(isString('')).toBe(true);
  });

  it('should return false if the given value is not a String', () => {
    expect(isString(undefined)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(NaN)).toBe(false);
    expect(isString(0)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(new Set())).toBe(false);
    expect(isString(new Map())).toBe(false);
    expect(isString(jest.fn())).toBe(false);
  });
});

export {};
