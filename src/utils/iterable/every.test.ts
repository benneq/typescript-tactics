import { every } from './every';

describe('iterable.every', () => {
  it('should return true if the given Iterable is empty', () => {
    expect(every(() => true)([])).toBe(true);
    expect(every(() => false)([])).toBe(true);
  });

  it('should return true if every element of the given Iterable matches the Predicate', () => {
    const value = Symbol();
    const predicate = (val: symbol) => val === value;
    expect(every(predicate)([value, value])).toBe(true);
  });

  it('should return false if any element of the given Iterable does not match the Predicate', () => {
    const value = Symbol();
    const predicate = (val: symbol) => val === value;
    expect(every(predicate)([Symbol()])).toBe(false);
  });
});

export {};
