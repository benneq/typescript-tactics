import { numberComparator } from '../comparator/numberComparator';
import { min } from './min';

describe('iterable.min', () => {
  it('should return undefined if the provided Iterable is empty', () => {
    expect(min(numberComparator)([])).toBeUndefined();
  });

  it('should return the min element according to the given Comparator', () => {
    expect(min(numberComparator)([1])).toBe(1);
    expect(min(numberComparator)([2, 3, 1, 4])).toEqual(
      [2, 3, 1, 4].sort((a, b) => a - b)[0]
    );
  });
});

export {};
