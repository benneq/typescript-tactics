import { toAscending } from './toAscending';

describe('range.isEmpty', () => {
  it('should return a ascending Range', () => {
    expect(toAscending([0, 0])).toEqual([0, 0]);
    expect(toAscending([-1, 1])).toEqual([-1, 1]);
    expect(toAscending([1, -1])).toEqual([0, 2]);
  });
});

export {};
