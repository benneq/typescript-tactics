import { copy } from './copy';

describe('map.copy', () => {
  it('copy', () => {
    const set1 = new Map();
    const res1 = copy(set1);
    expect(res1).toEqual(new Map());
    expect(res1).not.toBe(set1);

    const key = Symbol();
    const value = Symbol();
    const set2 = new Map([[key, value]]);
    const res2 = copy(set2);
    expect(res2).toEqual(new Map([[key, value]]));
    expect(res2).not.toBe(set2);
  });
});

export {};
