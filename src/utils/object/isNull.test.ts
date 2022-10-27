import { isNull } from './isNull';

describe('object.isNull', () => {
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
});

export {};
