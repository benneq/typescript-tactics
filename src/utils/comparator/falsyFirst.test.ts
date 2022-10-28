import { falsyFirst } from './falsyFirst';
import { numberComparator } from './numberComparator';

describe('comparator.falsyFirst', () => {
  it('falsyFirst', () => {
    // don't use Array.sort for test, becasue it ignores undefined values
    const comparator = falsyFirst(numberComparator);
    expect(comparator(undefined, undefined)).toEqual(0);
    expect(comparator(undefined, 0)).toEqual(0);
    expect(comparator(null, '')).toEqual(0);
    expect(comparator(NaN, 1)).toEqual(-1);
    expect(comparator(1, null)).toEqual(1);
  });
});

export {};
