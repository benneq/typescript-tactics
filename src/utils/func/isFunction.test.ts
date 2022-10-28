import { isFunction } from './isFunction';

describe('function.isFunction', () => {
  it('should return true if the given value is a Function', () => {
    expect(isFunction(jest.fn())).toBe(true);
  });

  it('should return false if the given value is not a Function', () => {
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(NaN)).toBe(false);
    expect(isFunction(0)).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(new Set())).toBe(false);
    expect(isFunction(new Map())).toBe(false);
  });
});

export {};
