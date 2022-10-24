import { inRange, isEmpty, isRange, length, toArray, toRange } from './range';

describe('range', () => {
  it('isRange', () => {
    expect(isRange(undefined)).toEqual(false);
    expect(isRange(null)).toEqual(false);
    expect(isRange(NaN)).toEqual(false);
    expect(isRange(0)).toEqual(false);
    expect(isRange(true)).toEqual(false);
    expect(isRange({})).toEqual(false);
    expect(isRange('')).toEqual(false);
    expect(isRange([])).toEqual(false);
    expect(isRange(new Set())).toEqual(false);
    expect(isRange(new Map())).toEqual(false);
    expect(isRange(jest.fn())).toEqual(false);

    expect(isRange([0, 0])).toEqual(true);
    expect(isRange([Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER])).toEqual(
      true
    );
    expect(isRange([Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER])).toEqual(
      true
    );

    expect(isRange([0, '0'])).toEqual(false);
    expect(isRange(['0', 0])).toEqual(false);
  });

  it('toRange', () => {
    expect(toRange(1, 2)).toEqual([1, 2]);
  });

  it('isEmpty', () => {
    expect(isEmpty([0, 0])).toEqual(true);
    expect(isEmpty([1, 1])).toEqual(true);

    expect(isEmpty([-1, 1])).toEqual(false);
    expect(isEmpty([1, -1])).toEqual(false);
  });

  it('length', () => {
    expect(length([0, 0])).toEqual(1);
    expect(length([1, 1])).toEqual(1);

    expect(length([-1, 1])).toEqual(3);

    // negative range
    // expect(length([1, -1])).toEqual(3);
  });

  it('toArray', () => {
    expect(toArray([0, 0])).toEqual([0]);
    expect(toArray([1, 1])).toEqual([1]);
    expect(toArray([-1, 1])).toEqual([-1, 0, 1]);

    // negative range
    // expect(toArray([1, -1])).toEqual([-1, 0, 1]);
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
