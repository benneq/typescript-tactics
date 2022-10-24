import {
  direction,
  flip,
  inRange,
  isEmpty,
  isRange,
  length,
  toArray,
  toRange,
  values,
} from './range';

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

  it('direction', () => {
    expect(direction([0, 0])).toEqual(0);
    expect(direction([1, 1])).toEqual(0);

    expect(direction([-1, 1])).toEqual(1);

    // negative range
    expect(direction([1, -1])).toEqual(-1);
  });

  it('length', () => {
    expect(length([0, 0])).toEqual(0);
    expect(length([1, 1])).toEqual(0);

    expect(length([-1, 1])).toEqual(2);

    // negative range
    expect(length([1, -1])).toEqual(2);
  });

  it('values', () => {
    const generator1 = values([0, 0]);
    expect(generator1.next().done).toEqual(true);

    const generator2 = values([-1, 1]);
    expect(generator2.next().value).toEqual(-1);
    expect(generator2.next().value).toEqual(0);
    expect(generator2.next().done).toEqual(true);

    const generator3 = values([1, -1]);
    expect(generator3.next().value).toEqual(1);
    expect(generator3.next().value).toEqual(0);
    expect(generator3.next().done).toEqual(true);
  });

  it('toArray', () => {
    expect(toArray([0, 0])).toEqual([]);
    expect(toArray([1, 1])).toEqual([]);
    expect(toArray([-1, 1])).toEqual([-1, 0]);

    // negative range
    expect(toArray([1, -1])).toEqual([1, 0]);
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

  it('flip', () => {
    expect(flip([0, 0])).toEqual([0, 0]);
    expect(flip([1, 1])).toEqual([1, 1]);
    expect(flip([-1, 1])).toEqual([0, -2]);

    // negative range
    expect(flip([1, -1])).toEqual([0, 2]);
  });
});

export {};
