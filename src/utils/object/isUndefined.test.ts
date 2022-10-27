import { isUndefined } from './isUndefined';

describe('object.isUndefined', () => {
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
});

export {};
