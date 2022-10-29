import { toDescending } from './toDescending';

describe('range.isEmpty', () => {
  it('should return a ascending Range', () => {
    expect(toDescending([0, 0])).toEqual([0, 0]);
    expect(toDescending([-1, 1])).toEqual([0, -2]);
    expect(toDescending([1, -1])).toEqual([1, -1]);
  });
});

export {};
