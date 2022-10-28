import { nullLast } from './nullLast';
import { numberComparator } from './numberComparator';

describe('comparator.nullLast', () => {
  it('nullLast', () => {
    expect([null, 3, null, 1, 2].sort(nullLast(numberComparator))).toEqual([
      1,
      2,
      3,
      null,
      null,
    ]);
  });
});

export {};
