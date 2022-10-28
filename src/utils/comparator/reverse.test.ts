import { numberNaturalOrder } from './numberNaturalOrder';
import { reverse } from './reverse';

describe('comparator.reverse', () => {
  it('reverse', () => {
    const value = [4, 2, 1, 3];
    expect(value.sort(reverse(numberNaturalOrder))).toEqual([4, 3, 2, 1]);
  });
});

export {};
