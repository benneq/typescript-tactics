import { done } from './done';

describe('generator.done', () => {
  it('done', () => {
    const generator = done;
    expect(generator.next().done).toEqual(true);
    expect(generator.next().done).toEqual(true);
    expect(generator.next().done).toEqual(true);
  });
});

export {};
