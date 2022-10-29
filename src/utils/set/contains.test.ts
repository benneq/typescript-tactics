import { contains } from './contains';

describe('set.contains', () => {
  it('should return true if the Set contains the given value', () => {
    const value = Symbol();
    expect(contains(new Set([value]))(value)).toBe(true);
  });

  it('should return false if the Set does not contain the given value', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    expect(contains(new Set())(value1)).toBe(false);
    expect(contains(new Set([value1]))(value2)).toBe(false);
  });
});

export {};
