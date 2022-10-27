import { copy } from './copy';

describe('set.copy', () => {
  it('copy', () => {
    const set1 = new Set();
    const res1 = copy(set1);
    expect(res1).toEqual(new Set());
    expect(res1).not.toBe(set1);

    const value = Symbol();
    const set2 = new Set([value]);
    const res2 = copy(set2);
    expect(res2).toEqual(new Set([value]));
    expect(res2).not.toBe(set2);
  });
});

export {};
