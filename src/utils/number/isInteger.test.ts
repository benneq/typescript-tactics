import { isInteger } from './isInteger';

describe('number.isInteger', () => {
  it('isInteger', () => {
    expect(isInteger(undefined)).toEqual(false);
    expect(isInteger(null)).toEqual(false);
    expect(isInteger(NaN)).toEqual(false);
    expect(isInteger(0)).toEqual(true);
    expect(isInteger(true)).toEqual(false);
    expect(isInteger({})).toEqual(false);
    expect(isInteger('')).toEqual(false);
    expect(isInteger([])).toEqual(false);
    expect(isInteger(new Set())).toEqual(false);
    expect(isInteger(new Map())).toEqual(false);
    expect(isInteger(jest.fn())).toEqual(false);

    expect(isInteger(0.1)).toEqual(false);
    expect(isInteger(Infinity)).toEqual(false);
    expect(isInteger(-Infinity)).toEqual(false);
  });
});

export {};
