import { numberNaturalOrder } from './numberNaturalOrder';

describe('comparator.numberNaturalOrder', () => {
  it('numberNaturalOrder', () => {
    const value = [4, 2, 1, 3];
    expect(value.sort(numberNaturalOrder)).toEqual([1, 2, 3, 4]);
  });
});

export {};
