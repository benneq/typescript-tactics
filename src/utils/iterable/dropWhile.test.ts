import { dropWhile } from './dropWhile';

describe('iterable.dropWhile', () => {
  it('should drop the first elements until the predicate becomes true', () => {
    const generator = dropWhile((value: number) => value < 3)([1, 3, 2, 4]);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().done).toEqual(true);
  });
});

export {};
