import { limit } from './limit';

describe('iterable.limit', () => {
  it('limit', () => {
    const generator = limit(3)([0, 1, 2, 3]);
    expect(generator.next().value).toEqual(0);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().done).toEqual(true);
  });
});

export {};
