import { filter } from './filter';

describe('iterable.clamp', () => {
  it('filter', () => {
    const generator = filter((value: number) => value > 3)([2, 3, 4, 5]);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().value).toEqual(5);
    expect(generator.next().done).toEqual(true);
  });
});

export {};
