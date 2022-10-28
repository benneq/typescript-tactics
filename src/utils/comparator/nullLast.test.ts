import { nullLast } from './nullLast';
import { numberNaturalOrder } from './numberNaturalOrder';

describe('comparator.nullLast', () => {
  it('nullLast', () => {
    expect([null, 3, null, 1, 2].sort(nullLast(numberNaturalOrder))).toEqual([
      1,
      2,
      3,
      null,
      null,
    ]);
  });
});

export {};
