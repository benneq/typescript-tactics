import { defaultIfUndefined } from './defaultIfUndefined';

describe('object.defaultIfUndefined', () => {
  it('defaultIfUndefined', () => {
    const value = Symbol();
    expect(defaultIfUndefined(value)(undefined)).toEqual(value);
    expect(defaultIfUndefined(Symbol())(value)).toEqual(value);

    expect(defaultIfUndefined(() => value)(undefined)).toEqual(value);
    expect(defaultIfUndefined(() => Symbol())(value)).toEqual(value);
  });
});

export {};
