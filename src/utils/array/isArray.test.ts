import { isArray } from './isArray';

describe('array.isArray', () => {
  it('should return true if the provided value is an Array', () => {
    const value: unknown[] = [];
    expect(isArray(value)).toEqual(true);
  });

  it('should return false if the provided value is not an Array', () => {
    expect(isArray(undefined)).toEqual(false);
    expect(isArray(null)).toEqual(false);
    expect(isArray(NaN)).toEqual(false);
    expect(isArray(0)).toEqual(false);
    expect(isArray(true)).toEqual(false);
    expect(isArray({})).toEqual(false);
    expect(isArray('')).toEqual(false);
    expect(isArray(new Set())).toEqual(false);
    expect(isArray(new Map())).toEqual(false);
    expect(isArray(jest.fn())).toEqual(false);
  });
});

export {};
