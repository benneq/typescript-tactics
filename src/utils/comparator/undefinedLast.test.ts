import { numberComparator } from './numberComparator';
import { undefinedLast } from './undefinedLast';

describe('comparator.undefinedLast', () => {
  it('undefinedLast', () => {
    // don't use Array.sort for test, becasue it ignores undefined values
    const comparator = undefinedLast(numberComparator);
    expect(comparator(undefined, undefined)).toEqual(0);
    expect(comparator(undefined, 0)).toEqual(1);
    expect(comparator(0, undefined)).toEqual(-1);
  });
});

export {};
