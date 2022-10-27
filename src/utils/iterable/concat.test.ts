import { concat } from './concat';

describe('iterable.clamp', () => {
  it('concat', () => {
    const generator = concat([
      [2, 1],
      [3, 4],
    ]);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().done).toEqual(true);
  });
});

export {};
