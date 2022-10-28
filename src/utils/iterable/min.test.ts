import { numberComparator } from '../comparator/numberComparator';
import { min } from './min';

describe('iterable.min', () => {
  it('min', () => {
    expect(min(numberComparator)([])).toEqual(undefined);
    expect(min(numberComparator)([1])).toEqual(1);
    expect(min(numberComparator)([2, 3, 1, 4])).toEqual(
      [2, 3, 1, 4].sort((a, b) => a - b)[0]
    );
  });
});

export {};
