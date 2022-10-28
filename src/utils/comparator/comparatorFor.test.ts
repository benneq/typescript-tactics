import { comparatorFor } from './comparatorFor';
import { stringNaturalOrder } from './stringNaturalOrder';

describe('comparator.comparatorFor', () => {
  it('comparatorFor', () => {
    const value1 = [3, 1, 2];
    const comparator1 = comparatorFor<typeof value1[number]>((value) => value);
    expect(value1.sort(comparator1)).toEqual([1, 2, 3]);

    const value2 = [{ i: '3' }, { i: '1' }, { i: '2' }];
    const comparator2 = comparatorFor<typeof value2[number], string>(
      (value) => value.i,
      stringNaturalOrder
    );
    expect(value2.sort(comparator2)).toEqual([
      { i: '1' },
      { i: '2' },
      { i: '3' },
    ]);
  });
});

export {};
