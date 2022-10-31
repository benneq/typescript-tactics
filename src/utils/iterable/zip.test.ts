import { zip } from './zip';

describe('iterable.zip', () => {
  it('should be done immediatly if no Iterable was provided', () => {
    const generator = zip();
    expect(generator.next().done).toBe(true);
  });

  it('should be done immediatly if all provided Iterables are empty', () => {
    const generator = zip([], [], []);
    expect(generator.next().done).toBe(true);
  });

  it('should yield the nth element of each iterable in order', () => {
    const generator = zip([], [1], [2, 3]);
    expect(generator.next().value).toEqual([undefined, 1, 2]);
    expect(generator.next().value).toEqual([undefined, undefined, 3]);
    expect(generator.next().done).toBe(true);
  });
});

export {};
