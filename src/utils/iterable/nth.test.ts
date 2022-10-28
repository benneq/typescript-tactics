import { nth } from './nth';

describe('iterable.nth', () => {
  it('should return undefined if the Iterable is empty and no default value was provided', () => {
    expect(nth(1)([])).toBeUndefined();
  });

  it('should return the default value if the Iterable is empty', () => {
    const defaultValue = Symbol();
    expect(nth(1, defaultValue)([])).toBe(defaultValue);
  });

  it('should return the nth value of the Iterable', () => {
    const value = Symbol();
    expect(nth<symbol>(1)([Symbol(), value])).toBe(value);
    expect(nth<symbol>(1, Symbol())([Symbol(), value])).toBe(value);
  });
});

export {};
