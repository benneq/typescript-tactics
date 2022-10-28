import { stringComparator } from './stringComparator';

describe('comparator.stringComparator', () => {
  it('stringComparator', () => {
    const value = ['ab', 'aa', 'ba', 'bb'];

    expect(value.sort(stringComparator())).toEqual(['aa', 'ab', 'ba', 'bb']);

    expect(value.sort(stringComparator('de'))).toEqual([
      'aa',
      'ab',
      'ba',
      'bb',
    ]);
  });
});

export {};
