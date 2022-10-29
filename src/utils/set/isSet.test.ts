import { isSet } from './isSet';

describe('set.isSet', () => {
  it('should return true if the provided value is a Map', () => {
    expect(isSet(new Set())).toBe(true);
  });

  it('should return false if the provided value is not a Map', () => {
    expect(isSet(undefined)).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(NaN)).toBe(false);
    expect(isSet(0)).toBe(false);
    expect(isSet(true)).toBe(false);
    expect(isSet({})).toBe(false);
    expect(isSet('')).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet(new Map())).toBe(false);
    expect(isSet(jest.fn())).toBe(false);
  });
});

export {};
