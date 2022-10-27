import { isString } from './isString';

describe('string.isString', () => {
  it('isString', () => {
    expect(isString(undefined)).toEqual(false);
    expect(isString(null)).toEqual(false);
    expect(isString(NaN)).toEqual(false);
    expect(isString(0)).toEqual(false);
    expect(isString(true)).toEqual(false);
    expect(isString({})).toEqual(false);
    expect(isString('')).toEqual(true);
    expect(isString([])).toEqual(false);
    expect(isString(new Set())).toEqual(false);
    expect(isString(new Map())).toEqual(false);
    expect(isString(jest.fn())).toEqual(false);
  });
});

export {};
