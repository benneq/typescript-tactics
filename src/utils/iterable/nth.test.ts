import { nth } from './nth';

describe('iterable.nth', () => {
  it('nth', () => {
    expect(nth(1)([])).toEqual(undefined);

    const defaultValue = Symbol();
    expect(nth(1, defaultValue)([])).toEqual(defaultValue);

    const value = Symbol();
    expect(nth<symbol>(1)([Symbol(), value])).toEqual(value);
    expect(nth<symbol>(1, defaultValue)([Symbol(), value])).toEqual(value);
  });
});

export {};
