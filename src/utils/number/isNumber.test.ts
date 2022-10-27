import { isNumber } from './isNumber';

describe('number.isNumber', () => {
  it('isNumber', () => {
    expect(isNumber(undefined)).toEqual(false);
    expect(isNumber(null)).toEqual(false);
    expect(isNumber(NaN)).toEqual(true);
    expect(isNumber(0)).toEqual(true);
    expect(isNumber(true)).toEqual(false);
    expect(isNumber({})).toEqual(false);
    expect(isNumber('')).toEqual(false);
    expect(isNumber([])).toEqual(false);
    expect(isNumber(new Set())).toEqual(false);
    expect(isNumber(new Map())).toEqual(false);
    expect(isNumber(jest.fn())).toEqual(false);

    expect(isNumber(0.1)).toEqual(true);
    expect(isNumber(Infinity)).toEqual(true);
    expect(isNumber(-Infinity)).toEqual(true);
  });
});

export {};
