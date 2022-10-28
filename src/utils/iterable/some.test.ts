import { some } from './some';

describe('iterable.some', () => {
  it('should return false if the given Iterable is empty', () => {
    expect(some([])(() => true)).toBe(false);
    expect(some([])(() => false)).toBe(false);
  });

  it('should return true if any element of the given Iterable matches the Predicate', () => {
    const value = Symbol();
    const predicate = (val: symbol) => val === value;
    expect(some([Symbol(), value])(predicate)).toBe(true);
  });

  it('should return false if no element of the given Iterable matches the Predicate', () => {
    const value = Symbol();
    const predicate = (val: symbol) => val === value;
    expect(some([Symbol()])(predicate)).toBe(false);
  });
});

export {};
