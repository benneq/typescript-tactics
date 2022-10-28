import { booleanNaturalOrder } from './booleanNaturalOrder';

describe('comparator.booleanNaturalOrder', () => {
  it('booleanNaturalOrder', () => {
    const value = [false, true];
    expect(value.sort(booleanNaturalOrder)).toEqual([false, true]);
  });
});

export {};
