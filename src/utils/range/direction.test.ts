import { direction } from './direction';

describe('range.direction', () => {
  it('should return 1 if ascending', () => {
    expect(direction([0, 1])).toBe(1);
  });

  it('should return -1 if descending', () => {
    expect(direction([1, -1])).toBe(-1);
  });

  it('should return 0 if no direction', () => {
    expect(direction([2, 2])).toBe(0);
  });
});

export {};
