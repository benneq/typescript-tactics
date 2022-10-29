import { shift } from './shift';

describe('predicate.isEqualTo', () => {
  it('should return the same range if shift is 0', () => {
    expect(shift([0, 0], 0)).toEqual([0, 0]);
  });

  it('should return the shifted Range', () => {
    expect(shift([1, 2], 1)).toEqual([2, 3]);
    expect(shift([3, 2], -1)).toEqual([4, 3]);
    expect(shift([-1, 2], 1)).toEqual([0, 3]);
    expect(shift([-1, 2], -1)).toEqual([-2, 1]);
    expect(shift([-1, -2], 1)).toEqual([-2, -3]);
    expect(shift([-1, -2], -1)).toEqual([0, -1]);
  });
});

export {};
