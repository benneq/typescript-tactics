import { containsAll } from './containsAll';

describe('set.containsAll', () => {
  it('should return true if the Set contains all given values', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(containsAll(new Set())([])).toBe(true);
    expect(containsAll(new Set())(new Set())).toBe(true);
    expect(containsAll(new Set([value1]))([])).toBe(true);
    expect(containsAll(new Set([value1]))(new Set())).toBe(true);
    expect(containsAll(new Set([value1]))([value1])).toBe(true);
    expect(containsAll(new Set([value1]))(new Set([value1]))).toBe(true);

    expect(containsAll(new Set([value1, value2]))(new Set([value1]))).toBe(
      true
    );
    expect(containsAll(new Set([value1, value2]))(new Set([value2]))).toBe(
      true
    );
    expect(
      containsAll(new Set([value1, value2]))(new Set([value2, value1]))
    ).toBe(true);
  });

  it('should return false if the Set does not contain all given values', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(containsAll(new Set())([value1])).toBe(false);
    expect(containsAll(new Set())(new Set([value1]))).toBe(false);
    expect(containsAll(new Set([value1]))([value2])).toBe(false);
    expect(containsAll(new Set([value1]))(new Set([value2]))).toBe(false);
  });
});

export {};
