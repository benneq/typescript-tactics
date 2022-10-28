import { defaultIfUndefined } from './defaultIfUndefined';

describe('object.defaultIfUndefined', () => {
  it('should return the default value if the provided value is undefined', () => {
    const value = Symbol();
    expect(defaultIfUndefined(value)(undefined)).toBe(value);
    expect(defaultIfUndefined(() => value)(undefined)).toBe(value);
  });

  it('it should return the provided value if it is not undefined', () => {
    const value = Symbol();
    expect(defaultIfUndefined(Symbol())(value)).toBe(value);
    expect(defaultIfUndefined(() => Symbol())(value)).toBe(value);
  });
});

export {};
