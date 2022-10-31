import { defaultIfNullish } from './defaultIfNullish';

describe('object.defaultIfUndefined', () => {
  it('should return the default value if the provided value is undefined', () => {
    const value = Symbol();
    expect(defaultIfNullish(value)(null)).toBe(value);
    expect(defaultIfNullish(() => value)(null)).toBe(value);
    expect(defaultIfNullish(value)(undefined)).toBe(value);
    expect(defaultIfNullish(() => value)(undefined)).toBe(value);
  });

  it('it should return the provided value if it is not undefined', () => {
    const value = Symbol();
    expect(defaultIfNullish(Symbol())(value)).toBe(value);
    expect(defaultIfNullish(() => Symbol())(value)).toBe(value);
  });
});

export {};
