import { nullFirst } from './nullFirst';
import { numberComparator } from './numberComparator';

describe('comparator.nullFirst', () => {
  it('nullFirst', () => {
    expect([null, 3, null, 1, 2].sort(nullFirst(numberComparator))).toEqual([
      null,
      null,
      1,
      2,
      3,
    ]);
  });
});

export {};
