import { numberNaturalOrder } from '../comparator';
import { max } from './max';

describe('iterable.max', () => {
  it('max', () => {
    expect(max(numberNaturalOrder)([])).toEqual(undefined);
    expect(max(numberNaturalOrder)([1])).toEqual(1);
    expect(max(numberNaturalOrder)([2, 3, 1, 4])).toEqual(
      [2, 3, 1, 4].sort((a, b) => a - b)[3]
    );
  });
});

export {};
