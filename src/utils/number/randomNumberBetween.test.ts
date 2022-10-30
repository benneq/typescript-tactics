import { randomNumberBetween } from './randomNumberBetween';

describe('number.randomNumberBetween', () => {
  it('should return a number between min and max', () => {
    const min = -5;
    const max = 5;

    const result = randomNumberBetween(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('should return a number between min and max for descending range', () => {
    const min = -5;
    const max = 0;

    const result = randomNumberBetween(max, min);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});

export {};
