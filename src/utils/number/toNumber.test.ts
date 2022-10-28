import { toNumber } from './toNumber';

describe('number.toNumber', () => {
  it('should return the same Number if the given value is already a Number', () => {
    expect(toNumber(0)).toBe(0);
    expect(toNumber(NaN)).toBe(NaN);
    expect(toNumber(Infinity)).toBe(Infinity);
    expect(toNumber(-Infinity)).toBe(-Infinity);
  });

  it('should return a Number with the same value if the given value is a BigInt', () => {
    expect(toNumber(BigInt(0))).toBe(0);
  });
});

export {};
