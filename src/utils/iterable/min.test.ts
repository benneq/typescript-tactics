import { numberNaturalOrder } from '../comparator';
import { min } from './min';

describe('iterable.clamp', () => {
  it('min', () => {
    expect(min(numberNaturalOrder)([])).toEqual(undefined);
    expect(min(numberNaturalOrder)([1])).toEqual(1);
    expect(min(numberNaturalOrder)([2, 3, 1, 4])).toEqual(
      [2, 3, 1, 4].sort((a, b) => a - b)[0]
    );
  });
});

export {};
