import { isNull } from '../object/isNull';
import { numberNaturalOrder } from './numberNaturalOrder';
import { predicateComparator } from './predicateComparator';

describe('comparator.predicateComparator', () => {
  it('predicateComparator', () => {
    const comparator = predicateComparator(numberNaturalOrder, isNull, true);
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
