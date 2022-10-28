import { isNull } from './isNull';

describe('object.isNull', () => {
  it('should return false if the provided value is not null', () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull(NaN)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull('')).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull(new Set())).toBe(false);
    expect(isNull(new Map())).toBe(false);
    expect(isNull(jest.fn())).toBe(false);
  });

  it('should return true if the provided value is null', () => {
    expect(isNull(null)).toBe(true);
  });
});

export {};
