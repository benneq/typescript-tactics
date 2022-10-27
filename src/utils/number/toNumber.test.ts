import { toNumber } from './toNumber';

describe('number.toNumber', () => {
  it('toNumber', () => {
    expect(toNumber(0)).toEqual(0);
    expect(toNumber(NaN)).toEqual(NaN);
    expect(toNumber(Infinity)).toEqual(Infinity);
    expect(toNumber(-Infinity)).toEqual(-Infinity);
    expect(toNumber(BigInt(0))).toEqual(0);
  });
});

export {};
