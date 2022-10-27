import { defaultIfNull } from './defaultIfNull';

describe('object.defaultIfNull', () => {
  it('defaultIfNull', () => {
    const value = Symbol();
    expect(defaultIfNull(value)(null)).toEqual(value);
    expect(defaultIfNull(Symbol())(value)).toEqual(value);

    expect(defaultIfNull(() => value)(null)).toEqual(value);
    expect(defaultIfNull(() => Symbol())(value)).toEqual(value);
  });
});

export {};
