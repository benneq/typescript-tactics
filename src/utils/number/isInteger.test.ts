import { isInteger } from './isInteger';

describe('number.isInteger', () => {
  it('should return true if the given value is an integer', () => {
    expect(isInteger(0)).toBe(true);
  });

  it('should return true if the given value is not an integer', () => {
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger('')).toBe(false);
    expect(isInteger([])).toBe(false);
    expect(isInteger(new Set())).toBe(false);
    expect(isInteger(new Map())).toBe(false);
    expect(isInteger(jest.fn())).toBe(false);
    expect(isInteger(0.1)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
  });
});

export {};
