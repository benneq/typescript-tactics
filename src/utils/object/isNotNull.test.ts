import { isNotNull } from './isNotNull';

describe('object.isNotNull', () => {
  it('should return true if the provided value is not null', () => {
    expect(isNotNull(undefined)).toBe(true);
    expect(isNotNull(NaN)).toBe(true);
    expect(isNotNull(0)).toBe(true);
    expect(isNotNull(true)).toBe(true);
    expect(isNotNull({})).toBe(true);
    expect(isNotNull('')).toBe(true);
    expect(isNotNull([])).toBe(true);
    expect(isNotNull(new Set())).toBe(true);
    expect(isNotNull(new Map())).toBe(true);
    expect(isNotNull(jest.fn())).toBe(true);
  });

  it('should return false if the provided value is null', () => {
    expect(isNotNull(null)).toBe(false);
  });
});

export {};
