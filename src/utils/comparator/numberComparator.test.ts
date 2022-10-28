import { numberComparator } from './numberComparator';

describe('comparator.numberComparator', () => {
  it('numberComparator', () => {
    const value = [4, 2, 1, 3];
    expect(value.sort(numberComparator)).toEqual([1, 2, 3, 4]);
  });
});

export {};
