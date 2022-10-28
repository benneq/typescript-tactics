import { nullFirst } from './nullFirst';
import { numberNaturalOrder } from './numberNaturalOrder';

describe('comparator.nullFirst', () => {
  it('nullFirst', () => {
    expect([null, 3, null, 1, 2].sort(nullFirst(numberNaturalOrder))).toEqual([
      null,
      null,
      1,
      2,
      3,
    ]);
  });
});

export {};
