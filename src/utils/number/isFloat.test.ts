import { isFloat } from './isFloat';

describe('number.isFloat', () => {
  it('should return true if the given value is a float', () => {
    expect(isFloat(0)).toBe(true);
    expect(isFloat(0.1)).toBe(true);
  });

  it('should return true if the given value is not a float', () => {
    expect(isFloat(undefined)).toBe(false);
    expect(isFloat(null)).toBe(false);
    expect(isFloat(NaN)).toBe(false);
    expect(isFloat(true)).toBe(false);
    expect(isFloat({})).toBe(false);
    expect(isFloat('')).toBe(false);
    expect(isFloat([])).toBe(false);
    expect(isFloat(new Set())).toBe(false);
    expect(isFloat(new Map())).toBe(false);
    expect(isFloat(jest.fn())).toBe(false);
    expect(isFloat(Infinity)).toBe(false);
    expect(isFloat(-Infinity)).toBe(false);
  });
});

export {};
