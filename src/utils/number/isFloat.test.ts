import { isFloat } from './isFloat';

describe('number.isFloat', () => {
  it('isFloat', () => {
    expect(isFloat(undefined)).toEqual(false);
    expect(isFloat(null)).toEqual(false);
    expect(isFloat(NaN)).toEqual(false);
    expect(isFloat(0)).toEqual(true);
    expect(isFloat(true)).toEqual(false);
    expect(isFloat({})).toEqual(false);
    expect(isFloat('')).toEqual(false);
    expect(isFloat([])).toEqual(false);
    expect(isFloat(new Set())).toEqual(false);
    expect(isFloat(new Map())).toEqual(false);
    expect(isFloat(jest.fn())).toEqual(false);

    expect(isFloat(0.1)).toEqual(true);
    expect(isFloat(Infinity)).toEqual(false);
    expect(isFloat(-Infinity)).toEqual(false);
  });
});

export {};
