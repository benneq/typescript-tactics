import { isTruthy } from './isTruthy';

describe('object.isTruthy', () => {
  it('should return false if the provided value is not truthy', () => {
    expect(isTruthy(false)).toBe(false);
    expect(isTruthy('')).toBe(false);
    expect(isTruthy(0)).toBe(false);
    expect(isTruthy(NaN)).toBe(false);
    expect(isTruthy(undefined)).toBe(false);
    expect(isTruthy(null)).toBe(false);
  });

  it('should return true if the provided value is truthy', () => {
    expect(isTruthy(true)).toBe(true);
    expect(isTruthy(' ')).toBe(true);
    expect(isTruthy(1)).toBe(true);
    expect(isTruthy(-1)).toBe(true);
    expect(isTruthy({})).toBe(true);
    expect(isTruthy([])).toBe(true);
  });
});

export {};
