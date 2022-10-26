import { comparatorFor, numberNaturalOrder, reverse } from './comparator';

describe('comparator', () => {
  it('numberNaturalOrder', () => {
    const value = [4, 2, 1, 3];
    expect(value.sort(numberNaturalOrder)).toEqual([1, 2, 3, 4]);
  });

  it('reverse', () => {
    const value = [4, 2, 1, 3];
    expect(value.sort(reverse(numberNaturalOrder))).toEqual([4, 3, 2, 1]);
  });

  it('comparatorFor', () => {
    const value = [{ i: 3 }, { i: 1 }, { i: 2 }];
    const comparator = comparatorFor<typeof value[number], number>(
      (value) => value.i,
      numberNaturalOrder
    );
    expect(value.sort(comparator)).toEqual([{ i: 1 }, { i: 2 }, { i: 3 }]);
  });
});

export {};
