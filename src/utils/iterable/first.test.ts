import { first } from './first';

describe('iterable.clamp', () => {
  it('first', () => {
    expect(first()([])).toEqual(undefined);

    const defaultValue = Symbol();
    expect(first(defaultValue)([])).toEqual(defaultValue);

    const value = Symbol();
    expect(first<symbol>()([value, Symbol()])).toEqual(value);
    expect(first<symbol>(defaultValue)([value, Symbol()])).toEqual(value);
  });
});

export {};
