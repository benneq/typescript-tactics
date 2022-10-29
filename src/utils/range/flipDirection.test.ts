import { flipDirection } from './flipDirection';

describe('range.flipDirection', () => {
  it('should swap start and end', () => {
    expect(flipDirection([0, 0])).toEqual([0, 0]);
    expect(flipDirection([1, 1])).toEqual([1, 1]);
    expect(flipDirection([-1, 1])).toEqual([0, -2]);

    // negative range
    expect(flipDirection([1, -1])).toEqual([0, 2]);
  });
});

export {};
