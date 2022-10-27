import { skip } from './skip';

describe('iterable.clamp', () => {
  it('skip', () => {
    const generator = skip(3)([0, 1, 2, 3, 4]);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().done).toEqual(true);
  });
});

export {};
