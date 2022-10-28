import { done } from './done';

describe('generator.done', () => {
  it('should be done immediatly and have no value', () => {
    const generator = done;
    const next = generator.next();
    expect(next.value).toBeUndefined();
    expect(next.done).toBe(true);
  });
});

export {};
