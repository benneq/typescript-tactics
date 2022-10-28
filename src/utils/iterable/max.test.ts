import { numberComparator } from '../comparator/numberComparator';
import { max } from './max';

describe('iterable.max', () => {
  it('max', () => {
    expect(max(numberComparator)([])).toEqual(undefined);
    expect(max(numberComparator)([1])).toEqual(1);
    expect(max(numberComparator)([2, 3, 1, 4])).toEqual(
      [2, 3, 1, 4].sort((a, b) => a - b)[3]
    );
  });
});

export {};
