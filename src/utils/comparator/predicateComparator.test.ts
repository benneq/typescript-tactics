import { isNull } from '../object/isNull';
import { numberComparator } from './numberComparator';
import { predicateComparator } from './predicateComparator';

describe('comparator.predicateComparator', () => {
  it('predicateComparator', () => {
    const comparator = predicateComparator(numberComparator, isNull, true);
    expect([null, 3, null, 1, 2].sort(comparator)).toEqual([
      null,
      null,
      1,
      2,
      3,
    ]);
  });
});

export {};
