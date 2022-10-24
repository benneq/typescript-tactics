import { inRange, isInteger } from './number';

describe('number', () => {
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

  it('inRange', () => {
    expect(inRange(0, 0)(0)).toEqual(false);
    expect(inRange(0, 0)(1)).toEqual(false);
    expect(inRange(0, 0)(-1)).toEqual(false);
    expect(inRange(-1, 1)(-2)).toEqual(false);
    expect(inRange(-1, 1)(-1)).toEqual(true);
    expect(inRange(-1, 1)(0)).toEqual(true);
    expect(inRange(-1, 1)(1)).toEqual(false);
    expect(inRange(-1, 1)(2)).toEqual(false);

    // negative range
    expect(inRange(1, -1)(0)).toEqual(false);
  });
});

export {};
