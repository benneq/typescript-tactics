import { takeWhile } from './takeWhile';

describe('iterable.takeWhile', () => {
  it('takeWhile', () => {
    const generator = takeWhile((value: number) => value < 3)([0, 1, 2]);
    expect(generator.next().value).toEqual(0);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().done).toEqual(true);
  });
});

export {};
