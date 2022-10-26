import { numberNaturalOrder, reverse } from './comparator';

describe('comparator', () => {
  it('numberNaturalOrder', () => {
    const value = [4, 2, 1, 3];
    expect(value.sort(numberNaturalOrder)).toEqual([1, 2, 3, 4]);
  });

  it('reverse', () => {
    const value = [4, 2, 1, 3];
    expect(value.sort(reverse(numberNaturalOrder))).toEqual([4, 3, 2, 1]);
  });
});

export {};
