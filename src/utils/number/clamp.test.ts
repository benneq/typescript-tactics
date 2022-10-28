import { clamp } from './clamp';

describe('number.clamp', () => {
  it('should return the given number if it is already in range', () => {
    expect(clamp(-5, 5)(-2)).toBe(-2);
  });

  it('should return the max value if the given number is greater than the range', () => {
    expect(clamp(-5, 5)(10)).toBe(5);
  });

  it('should return the min value if the given number is less than the range', () => {
    expect(clamp(-5, 5)(-10)).toBe(-5);
  });

  it('should behave the same with negative range', () => {
    expect(clamp(1, -1)(0)).toBe(1);
  });
});

export {};
