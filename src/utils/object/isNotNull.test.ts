import { isNotNull } from './isNotNull';

describe('object.isNotNull', () => {
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
});

export {};
