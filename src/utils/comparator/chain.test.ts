import { booleanComparator } from './booleanComparator';
import { chain } from './chain';
import { comparatorFor } from './comparatorFor';

describe('comparator.chain', () => {
  it('chain', () => {
    const value1 = [
      { b: true, i: 3 },
      { b: true, i: 1 },
      { b: false, i: 2 },
    ];
    expect(value1.sort(chain())).toEqual(value1);

    const comparator = chain<typeof value1[number]>(
      comparatorFor((value) => value.b, booleanComparator),
      comparatorFor((value) => value.i)
    );

    expect(value1.sort(comparator)).toEqual([
      { b: false, i: 2 },
      { b: true, i: 1 },
      { b: true, i: 3 },
    ]);
  });
});

export {};
