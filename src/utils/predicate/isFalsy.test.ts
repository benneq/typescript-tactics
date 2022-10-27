import { isFalsy } from './isFalsy';

describe('predicate.isFalsy', () => {
  it('isFalsy', () => {
    expect(isFalsy(true)).toEqual(false);
    expect(isFalsy(' ')).toEqual(false);
    expect(isFalsy(1)).toEqual(false);
    expect(isFalsy(-1)).toEqual(false);
    expect(isFalsy({})).toEqual(false);
    expect(isFalsy([])).toEqual(false);

    expect(isFalsy(false)).toEqual(true);
    expect(isFalsy('')).toEqual(true);
    expect(isFalsy(0)).toEqual(true);
    expect(isFalsy(NaN)).toEqual(true);
    expect(isFalsy(undefined)).toEqual(true);
    expect(isFalsy(null)).toEqual(true);
  });
});

export {};
