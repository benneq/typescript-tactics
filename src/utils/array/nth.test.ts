import { nth } from './nth';

describe('array.nth', () => {
  it('nth', () => {
    expect(nth([])).toEqual(undefined);
    expect(nth([0])).toEqual(0);
    expect(nth([0, 1])).toEqual(0);

    expect(nth([], 1)).toEqual(undefined);
    expect(nth([0], 1)).toEqual(undefined);
    expect(nth([0, 1], 1)).toEqual(1);
  });
});

export {};
