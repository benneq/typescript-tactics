import { dropWhile } from './dropWhile';

describe('iterable.clamp', () => {
  it('dropWhile', () => {
    const generator = dropWhile((value: number) => value < 3)([2, 3, 4, 5]);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().value).toEqual(5);
    expect(generator.next().done).toEqual(true);
  });
});

export {};
