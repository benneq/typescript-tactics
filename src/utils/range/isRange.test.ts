import { isRange } from './isRange';

describe('range.isRange', () => {
  it('should return true if the provided value is a Range', () => {
    const value: [number, number] = [-1, 0];
    expect(isRange(value)).toBe(true);
  });

  it('should return false if the provided value is not a Range', () => {
    expect(isRange(undefined)).toBe(false);
    expect(isRange(null)).toBe(false);
    expect(isRange(NaN)).toBe(false);
    expect(isRange(0)).toBe(false);
    expect(isRange(true)).toBe(false);
    expect(isRange({})).toBe(false);
    expect(isRange('')).toBe(false);
    expect(isRange(new Set())).toBe(false);
    expect(isRange(new Map())).toBe(false);
    expect(isRange(jest.fn())).toBe(false);
    expect(isRange([1])).toBe(false);
  });
});

export {};
