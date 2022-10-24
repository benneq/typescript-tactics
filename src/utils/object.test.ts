import {
  defaultIfNull,
  defaultIfUndefined,
  isNotNull,
  isNotUndefined,
} from './object';

describe('object', () => {
  it('isNotUndefined', () => {
    expect(isNotUndefined(undefined)).toEqual(false);
    expect(isNotUndefined(null)).toEqual(true);
    expect(isNotUndefined(NaN)).toEqual(true);
    expect(isNotUndefined(0)).toEqual(true);
    expect(isNotUndefined(true)).toEqual(true);
    expect(isNotUndefined({})).toEqual(true);
    expect(isNotUndefined('')).toEqual(true);
    expect(isNotUndefined([])).toEqual(true);
    expect(isNotUndefined(new Set())).toEqual(true);
    expect(isNotUndefined(new Map())).toEqual(true);
    expect(isNotUndefined(jest.fn())).toEqual(true);
  });

  it('defaultIfUndefined', () => {
    const value = Symbol();
    expect(defaultIfUndefined(undefined, value)).toEqual(value);
    expect(defaultIfUndefined<symbol>(value, Symbol())).toEqual(value);
  });

  it('isNotNull', () => {
    expect(isNotNull(undefined)).toEqual(true);
    expect(isNotNull(null)).toEqual(false);
    expect(isNotNull(NaN)).toEqual(true);
    expect(isNotNull(0)).toEqual(true);
    expect(isNotNull(true)).toEqual(true);
    expect(isNotNull({})).toEqual(true);
    expect(isNotNull('')).toEqual(true);
    expect(isNotNull([])).toEqual(true);
    expect(isNotNull(new Set())).toEqual(true);
    expect(isNotNull(new Map())).toEqual(true);
    expect(isNotNull(jest.fn())).toEqual(true);
  });

  it('defaultIfNull', () => {
    const value = Symbol();
    expect(defaultIfNull(null, value)).toEqual(value);
    expect(defaultIfNull<symbol>(value, Symbol())).toEqual(value);
  });
});

export {};