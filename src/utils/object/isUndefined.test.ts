import { isUndefined } from './isUndefined';

describe('object.isUndefined', () => {
  it('should return false if the provided value is not undefined', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(NaN)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined(new Set())).toBe(false);
    expect(isUndefined(new Map())).toBe(false);
    expect(isUndefined(jest.fn())).toBe(false);
  });

  it('should return true if the provided value is undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });
});

export {};
