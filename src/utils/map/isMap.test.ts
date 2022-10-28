import { isMap } from './isMap';

describe('map.isMap', () => {
  it('should return true if the provided value is a Map', () => {
    expect(isMap(new Map())).toEqual(true);
  });

  it('should return false if the provided value is not a Map', () => {
    expect(isMap(undefined)).toEqual(false);
    expect(isMap(null)).toEqual(false);
    expect(isMap(NaN)).toEqual(false);
    expect(isMap(0)).toEqual(false);
    expect(isMap(true)).toEqual(false);
    expect(isMap({})).toEqual(false);
    expect(isMap('')).toEqual(false);
    expect(isMap([])).toEqual(false);
    expect(isMap(new Set())).toEqual(false);
    expect(isMap(jest.fn())).toEqual(false);
  });
});

export {};
