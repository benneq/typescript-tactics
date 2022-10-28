import { concat } from './concat';

describe('iterable.concat', () => {
  it('should yield the elements of the ITerables in the given order', () => {
    const generator = concat([
      [2, 1],
      [3, 4],
    ]);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(3);
    expect(generator.next().value).toBe(4);
    expect(generator.next().done).toBe(true);
  });
});

export {};
