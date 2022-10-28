import { stringNaturalOrder } from './stringNaturalOrder';

describe('comparator.stringNaturalOrder', () => {
  it('stringNaturalOrder', () => {
    const value = ['ab', 'aa', 'ba', 'bb'];
    expect(value.sort(stringNaturalOrder)).toEqual(['aa', 'ab', 'ba', 'bb']);
  });
});

export {};
