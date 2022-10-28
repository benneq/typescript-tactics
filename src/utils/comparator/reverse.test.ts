import { numberComparator } from './numberComparator';
import { reverse } from './reverse';

describe('comparator.reverse', () => {
  it('reverse', () => {
    const value = [4, 2, 1, 3];
    expect(value.sort(reverse(numberComparator))).toEqual([4, 3, 2, 1]);
  });
});

export {};
