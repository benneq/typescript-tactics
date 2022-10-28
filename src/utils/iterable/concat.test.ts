import { concat } from './concat';

describe('iterable.concat', () => {
  it('should yield the elements of the ITerables in the given order', () => {
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
