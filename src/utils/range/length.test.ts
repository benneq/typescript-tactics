import { length } from './length';

describe('direction.', () => {
  it('should return 0 if Range is empty', () => {
    expect(length([0, 0])).toBe(0);
  });

  it('should return the length of an ascending Range', () => {
    expect(length([-2, 3])).toBe(5);
  });

  it('should return the length of a descending Range', () => {
    expect(length([2, -1])).toBe(3);
  });
});

export {};
