import { isFalsy } from './isFalsy';

describe('object.isFalsy', () => {
  it('should return true if the provided value is falsy', () => {
    expect(isFalsy(false)).toBe(true);
    expect(isFalsy('')).toBe(true);
    expect(isFalsy(0)).toBe(true);
    expect(isFalsy(NaN)).toBe(true);
    expect(isFalsy(undefined)).toBe(true);
    expect(isFalsy(null)).toBe(true);
  });

  it('should return true if the provided value is falsy', () => {
    expect(isFalsy(true)).toBe(false);
    expect(isFalsy(' ')).toBe(false);
    expect(isFalsy(1)).toBe(false);
    expect(isFalsy(-1)).toBe(false);
    expect(isFalsy({})).toBe(false);
    expect(isFalsy([])).toBe(false);
  });
});

export {};
