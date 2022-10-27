import { isNotUndefined } from './isNotUndefined';

describe('object.isNotUndefined', () => {
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
});

export {};
