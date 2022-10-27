import { isSet } from './isSet';

describe('set.isSet', () => {
  it('isSet', () => {
    expect(isSet(undefined)).toEqual(false);
    expect(isSet(null)).toEqual(false);
    expect(isSet(NaN)).toEqual(false);
    expect(isSet(0)).toEqual(false);
    expect(isSet(true)).toEqual(false);
    expect(isSet({})).toEqual(false);
    expect(isSet('')).toEqual(false);
    expect(isSet([])).toEqual(false);
    expect(isSet(new Set())).toEqual(true);
    expect(isSet(new Map())).toEqual(false);
    expect(isSet(jest.fn())).toEqual(false);
  });
});

export {};
