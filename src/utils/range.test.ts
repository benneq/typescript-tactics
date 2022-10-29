import {
  direction,
  flipDirection,
  contains,
  isAscending,
  overlap,
  toArray,
  toAscending,
  values,
  encloses,
} from './range';

describe('range', () => {
  it('isAscending', () => {
    expect(isAscending([0, 0])).toEqual(false);
    expect(isAscending([1, 1])).toEqual(false);
    expect(isAscending([-1, 1])).toEqual(true);
    expect(isAscending([1, -1])).toEqual(false);
  });

  it('direction', () => {
    expect(direction([0, 0])).toEqual(0);
    expect(direction([1, 1])).toEqual(0);

    expect(direction([-1, 1])).toEqual(1);

    // negative range
    expect(direction([1, -1])).toEqual(-1);
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

    const generator4 = values([-1, -6], 4);
    expect(generator4.next().value).toEqual(-1);
    expect(generator4.next().value).toEqual(-5);
    expect(generator4.next().done).toEqual(true);

    // negative stepSize
    const generator5 = values([-1, -6], 0);
    expect(generator5.next().done).toEqual(true);

    const generator6 = values([-1, -6], -1);
    expect(generator6.next().done).toEqual(true);
  });

  it('toArray', () => {
    expect(toArray([0, 0])).toEqual([]);
    expect(toArray([1, 1])).toEqual([]);
    expect(toArray([-1, 1])).toEqual([-1, 0]);

    // negative range
    expect(toArray([1, -1])).toEqual([1, 0]);

    // negative stepSize
    expect(toArray([-1, 1], 0)).toEqual([]);
    expect(toArray([1, -1], -1)).toEqual([]);
  });

  it('toAscending', () => {
    expect(toAscending([0, 0])).toEqual([0, 0]);
    expect(toAscending([-1, 1])).toEqual([-1, 1]);
    expect(toAscending([1, -1])).toEqual([0, 2]);
  });

  it('contains', () => {
    expect(contains([0, 0])(0)).toEqual(false);
    expect(contains([0, 0])(1)).toEqual(false);
    expect(contains([0, 0])(-1)).toEqual(false);
    expect(contains([-1, 1])(-2)).toEqual(false);
    expect(contains([-1, 1])(-1)).toEqual(true);
    expect(contains([-1, 1])(0)).toEqual(true);
    expect(contains([-1, 1])(1)).toEqual(false);
    expect(contains([-1, 1])(2)).toEqual(false);

    // negative range
    expect(contains([1, -1])(0)).toEqual(true);
  });

  it('flipDirection', () => {
    expect(flipDirection([0, 0])).toEqual([0, 0]);
    expect(flipDirection([1, 1])).toEqual([1, 1]);
    expect(flipDirection([-1, 1])).toEqual([0, -2]);

    // negative range
    expect(flipDirection([1, -1])).toEqual([0, 2]);
  });

  it('encloses', () => {
    expect(encloses([0, 0], [0, 0])).toEqual(true);
    expect(encloses([0, 1], [0, 0])).toEqual(true);
    expect(encloses([0, 0], [0, 1])).toEqual(false);
    expect(encloses([0, 1], [1, 1])).toEqual(true);
    expect(encloses([1, 1], [0, 1])).toEqual(false);
    expect(encloses([0, 1], [-1, -1])).toEqual(false);
    expect(encloses([-1, -1], [0, 1])).toEqual(false);
    expect(encloses([1, 2], [2, 1])).toEqual(false);
    expect(encloses([2, 1], [1, 2])).toEqual(false);
    expect(encloses([1, 2], [1, 0])).toEqual(true);
    expect(encloses([-1, 2], [-1, -3])).toEqual(false);
    expect(encloses([-1, -3], [-2, -1])).toEqual(true);
  });

  it('overlap', () => {
    expect(overlap([0, 0], [0, 0])).toEqual(false);
    expect(overlap([0, 1], [0, 0])).toEqual(false);
    expect(overlap([0, 0], [0, 1])).toEqual(false);
    expect(overlap([0, 1], [1, 1])).toEqual(false);
    expect(overlap([1, 1], [0, 1])).toEqual(false);
    expect(overlap([0, 1], [-1, -1])).toEqual(false);
    expect(overlap([-1, -1], [0, 1])).toEqual(false);
    expect(overlap([1, 2], [2, 1])).toEqual(false);
    expect(overlap([2, 1], [1, 2])).toEqual(false);
    expect(overlap([1, 2], [1, 0])).toEqual(true);
    expect(overlap([-1, 2], [-1, -3])).toEqual(true);
    expect(overlap([-1, -3], [-2, -1])).toEqual(true);
  });
});

export {};
