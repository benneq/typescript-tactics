import { numberComparator } from '../comparator/numberComparator';
import { max } from './max';

describe('iterable.max', () => {
  it('should return undefined if the provided Iterable is empty', () => {
    expect(max(numberComparator)([])).toBeUndefined();
  });

  it('should return the max element according to the given Comparator', () => {
    expect(max(numberComparator)([1])).toBe(1);
    expect(max(numberComparator)([2, 3, 1, 4])).toEqual(
      [2, 3, 1, 4].sort((a, b) => a - b)[3]
    );
  });
});

export {};
