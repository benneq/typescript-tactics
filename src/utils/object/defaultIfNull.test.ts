import { defaultIfNull } from './defaultIfNull';

describe('object.defaultIfNull', () => {
  it('should return the default value if the provided value is null', () => {
    const value = Symbol();
    expect(defaultIfNull(value)(null)).toBe(value);
    expect(defaultIfNull(() => value)(null)).toBe(value);
  });

  it('it should return the provided value if it is not null', () => {
    const value = Symbol();
    expect(defaultIfNull(Symbol())(value)).toBe(value);
    expect(defaultIfNull(() => Symbol())(value)).toBe(value);
  });
});

export {};
