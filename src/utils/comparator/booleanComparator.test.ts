import { booleanComparator } from './booleanComparator';

describe('comparator.booleanComparator', () => {
  it('booleanComparator', () => {
    const value = [false, true];
    expect(value.sort(booleanComparator)).toEqual([false, true]);
  });
});

export {};
