import { isEqualTo } from './isEqualTo';

describe('predicate.isEqualTo', () => {
  it('should return true if both values are equal', () => {
    const value = Symbol();

    expect(isEqualTo(value)(value)).toBe(true);
  });

  it('should return false if both values are not equal', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(isEqualTo<symbol>(value1)(value2)).toBe(false);
  });
});

export {};
