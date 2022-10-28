import { skip } from './skip';

describe('iterable.skip', () => {
  it('should not yield the first 3 elements of the Iterable', () => {
    const generator = skip(3)([0, 1, 2, 3, 4]);
    expect(generator.next().value).toBe(3);
    expect(generator.next().value).toBe(4);
    expect(generator.next().done).toBe(true);
  });
});

export {};
