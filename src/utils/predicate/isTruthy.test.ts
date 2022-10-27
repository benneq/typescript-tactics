import { isTruthy } from './isTruthy';

describe('predicate.isTruthy', () => {
  it('isTruthy', () => {
    expect(isTruthy(true)).toEqual(true);
    expect(isTruthy(' ')).toEqual(true);
    expect(isTruthy(1)).toEqual(true);
    expect(isTruthy(-1)).toEqual(true);
    expect(isTruthy({})).toEqual(true);
    expect(isTruthy([])).toEqual(true);

    expect(isTruthy(false)).toEqual(false);
    expect(isTruthy('')).toEqual(false);
    expect(isTruthy(0)).toEqual(false);
    expect(isTruthy(NaN)).toEqual(false);
    expect(isTruthy(undefined)).toEqual(false);
    expect(isTruthy(null)).toEqual(false);
  });
});

export {};
