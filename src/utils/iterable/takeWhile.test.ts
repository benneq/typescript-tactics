import { takeWhile } from './takeWhile';

describe('iterable.takeWhile', () => {
  it('should yield all elements until the predicate becomes false', () => {
    const generator = takeWhile((value: number) => value < 3)([0, 1, 3, 2]);
    expect(generator.next().value).toBe(0);
    expect(generator.next().value).toBe(1);
    expect(generator.next().done).toBe(true);
  });
});

export {};
