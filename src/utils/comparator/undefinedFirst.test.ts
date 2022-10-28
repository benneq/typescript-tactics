import { numberNaturalOrder } from './numberNaturalOrder';
import { undefinedFirst } from './undefinedFirst';

describe('comparator.undefinedFirst', () => {
  it('undefinedFirst', () => {
    // don't use Array.sort for test, becasue it ignores undefined values
    const comparator = undefinedFirst(numberNaturalOrder);
    expect(comparator(undefined, undefined)).toEqual(0);
    expect(comparator(undefined, 0)).toEqual(-1);
    expect(comparator(0, undefined)).toEqual(1);
  });
});

export {};
