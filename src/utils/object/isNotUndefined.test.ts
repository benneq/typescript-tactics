import { isNotUndefined } from './isNotUndefined';

describe('object.isNotUndefined', () => {
  it('should return true if the provided value is not undefined', () => {
    expect(isNotUndefined(null)).toBe(true);
    expect(isNotUndefined(NaN)).toBe(true);
    expect(isNotUndefined(0)).toBe(true);
    expect(isNotUndefined(true)).toBe(true);
    expect(isNotUndefined({})).toBe(true);
    expect(isNotUndefined('')).toBe(true);
    expect(isNotUndefined([])).toBe(true);
    expect(isNotUndefined(new Set())).toBe(true);
    expect(isNotUndefined(new Map())).toBe(true);
    expect(isNotUndefined(jest.fn())).toBe(true);
  });

  it('should return false if the provided value is undefined', () => {
    expect(isNotUndefined(undefined)).toBe(false);
  });
});

export {};
