import { isFunction } from './isFunction';

describe('function.isFunction', () => {
  it('isFunction', () => {
    expect(isFunction(undefined)).toEqual(false);
    expect(isFunction(null)).toEqual(false);
    expect(isFunction(NaN)).toEqual(false);
    expect(isFunction(0)).toEqual(false);
    expect(isFunction(true)).toEqual(false);
    expect(isFunction({})).toEqual(false);
    expect(isFunction('')).toEqual(false);
    expect(isFunction([])).toEqual(false);
    expect(isFunction(new Set())).toEqual(false);
    expect(isFunction(new Map())).toEqual(false);
    expect(isFunction(jest.fn())).toEqual(true);
  });
});

export {};
