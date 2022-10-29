import { isSet } from './isSet';

describe('set.isSet', () => {
  it('should return true if the provided value is a Map', () => {
    expect(isSet(new Set())).toEqual(true);
  });

  it('should return false if the provided value is not a Map', () => {
    expect(isSet(undefined)).toEqual(false);
    expect(isSet(null)).toEqual(false);
    expect(isSet(NaN)).toEqual(false);
    expect(isSet(0)).toEqual(false);
    expect(isSet(true)).toEqual(false);
    expect(isSet({})).toEqual(false);
    expect(isSet('')).toEqual(false);
    expect(isSet([])).toEqual(false);
    expect(isSet(new Map())).toEqual(false);
    expect(isSet(jest.fn())).toEqual(false);
  });
});

export {};
