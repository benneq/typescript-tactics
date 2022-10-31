import { booleanComparator } from './booleanComparator';
import { chain } from './chain';
import { comparing } from './comparing';
import { numberComparator } from './numberComparator';

describe('comparator.chain', () => {
  it('chain', () => {
    const value = [
      { b: true, i: 3 },
      { b: true, i: 1 },
      { b: false, i: 2 },
    ];
    expect(value.sort(chain())).toEqual(value);

    const comparator = chain<typeof value[number]>(
      comparing((value) => value.b, booleanComparator),
      comparing((value) => value.i, numberComparator)
    );

    expect(value.sort(comparator)).toEqual([
      { b: false, i: 2 },
      { b: true, i: 1 },
      { b: true, i: 3 },
    ]);
  });
});

export {};
