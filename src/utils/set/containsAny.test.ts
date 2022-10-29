import { containsAny } from './containsAny';

describe('set.containsAny', () => {
  it('should return true if the Set contains any of the given values', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(containsAny(new Set([value1]))([value1])).toBe(true);
    expect(containsAny(new Set([value1]))(new Set([value1]))).toBe(true);
    expect(containsAny(new Set([value1]))([value2, value1])).toBe(true);
    expect(containsAny(new Set([value1]))(new Set([value2, value1]))).toBe(
      true
    );

    expect(containsAny(new Set([value1, value2]))(new Set([value1]))).toBe(
      true
    );
    expect(containsAny(new Set([value1, value2]))(new Set([value2]))).toBe(
      true
    );
    expect(
      containsAny(new Set([value1, value2]))(new Set([value2, value1]))
    ).toBe(true);
  });

  it('should return false if the Set contains none of the given values', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(containsAny(new Set())([])).toBe(false);
    expect(containsAny(new Set())(new Set())).toBe(false);
    expect(containsAny(new Set())([value1])).toBe(false);
    expect(containsAny(new Set())(new Set([value1]))).toBe(false);
    expect(containsAny(new Set([value1]))([])).toBe(false);
    expect(containsAny(new Set([value1]))(new Set())).toBe(false);
    expect(containsAny(new Set([value1]))([value2])).toBe(false);
    expect(containsAny(new Set([value1]))(new Set([value2]))).toBe(false);
  });
});

export {};
