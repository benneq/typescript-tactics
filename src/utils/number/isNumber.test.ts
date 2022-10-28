import { isNumber } from './isNumber';

describe('number.isNumber', () => {
  it('should return true if the given value is a Number', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(0.1)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
  });

  it('should return true if the given value is not a Number', () => {
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber('')).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(new Set())).toBe(false);
    expect(isNumber(new Map())).toBe(false);
    expect(isNumber(jest.fn())).toBe(false);
  });
});

export {};
