import { toRange } from './toRange';

describe('direction.', () => {
  it('should return a new Range', () => {
    expect(toRange(3, 4)).toEqual([3, 4]);
  });
});

export {};
