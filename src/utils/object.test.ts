import {
  defaultIf,
  defaultIfNull,
  defaultIfUndefined,
  isNotNull,
  isNotUndefined,
  isNull,
  isUndefined,
} from './object';

describe('object', () => {
  it('defaultIf', () => {
    const defaultValue = Symbol();
    const value = Symbol();
    expect(
      defaultIf((value): value is unknown => true)(defaultValue)(value)
    ).toEqual(defaultValue);
    expect(
      defaultIf((value): value is unknown => false)(defaultValue)(value)
    ).toEqual(value);
  });

  it('isUndefined', () => {
    expect(isUndefined(undefined)).toEqual(true);
    expect(isUndefined(null)).toEqual(false);
    expect(isUndefined(NaN)).toEqual(false);
    expect(isUndefined(0)).toEqual(false);
    expect(isUndefined(true)).toEqual(false);
    expect(isUndefined({})).toEqual(false);
    expect(isUndefined('')).toEqual(false);
    expect(isUndefined([])).toEqual(false);
    expect(isUndefined(new Set())).toEqual(false);
    expect(isUndefined(new Map())).toEqual(false);
    expect(isUndefined(jest.fn())).toEqual(false);
  });

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
    expect(defaultIfUndefined(value)(undefined)).toEqual(value);
    expect(defaultIfUndefined(Symbol())(value)).toEqual(value);

    expect(defaultIfUndefined(() => value)(undefined)).toEqual(value);
    expect(defaultIfUndefined(() => Symbol())(value)).toEqual(value);
  });

  it('isNull', () => {
    expect(isNull(undefined)).toEqual(false);
    expect(isNull(null)).toEqual(true);
    expect(isNull(NaN)).toEqual(false);
    expect(isNull(0)).toEqual(false);
    expect(isNull(true)).toEqual(false);
    expect(isNull({})).toEqual(false);
    expect(isNull('')).toEqual(false);
    expect(isNull([])).toEqual(false);
    expect(isNull(new Set())).toEqual(false);
    expect(isNull(new Map())).toEqual(false);
    expect(isNull(jest.fn())).toEqual(false);
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
    expect(defaultIfNull(value)(null)).toEqual(value);
    expect(defaultIfNull(Symbol())(value)).toEqual(value);

    expect(defaultIfNull(() => value)(null)).toEqual(value);
    expect(defaultIfNull(() => Symbol())(value)).toEqual(value);
  });
});

export {};
