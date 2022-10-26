import { done } from './generator';

describe('generator', () => {
  it('done', () => {
    const generator = done;
    expect(generator.next().done).toEqual(true);
    expect(generator.next().done).toEqual(true);
    expect(generator.next().done).toEqual(true);
  });
});

export {};
