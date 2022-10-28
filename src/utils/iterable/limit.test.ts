import { limit } from './limit';

describe('iterable.limit', () => {
  it('should yield only the first 3 elements of the Iterable', () => {
    const generator = limit(3)([0, 1, 2, 3]);
    expect(generator.next().value).toBe(0);
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(2);
    expect(generator.next().done).toBe(true);
  });
});

export {};
