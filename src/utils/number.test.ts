import { info } from 'console';
import { clamp, isFloat, isInteger, isNumber, step, toNumber } from './number';

describe('number', () => {
  it('isNumber', () => {
    expect(isNumber(undefined)).toEqual(false);
    expect(isNumber(null)).toEqual(false);
    expect(isNumber(NaN)).toEqual(true);
    expect(isNumber(0)).toEqual(true);
    expect(isNumber(true)).toEqual(false);
    expect(isNumber({})).toEqual(false);
    expect(isNumber('')).toEqual(false);
    expect(isNumber([])).toEqual(false);
    expect(isNumber(new Set())).toEqual(false);
    expect(isNumber(new Map())).toEqual(false);
    expect(isNumber(jest.fn())).toEqual(false);

    expect(isNumber(0.1)).toEqual(true);
    expect(isNumber(Infinity)).toEqual(true);
    expect(isNumber(-Infinity)).toEqual(true);
  });

  it('toNumber', () => {
    expect(toNumber(0)).toEqual(0);
    expect(toNumber(NaN)).toEqual(NaN);
    expect(toNumber(Infinity)).toEqual(Infinity);
    expect(toNumber(-Infinity)).toEqual(-Infinity);
    expect(toNumber(BigInt(0))).toEqual(0);
  });

  it('isInteger', () => {
    expect(isInteger(undefined)).toEqual(false);
    expect(isInteger(null)).toEqual(false);
    expect(isInteger(NaN)).toEqual(false);
    expect(isInteger(0)).toEqual(true);
    expect(isInteger(true)).toEqual(false);
    expect(isInteger({})).toEqual(false);
    expect(isInteger('')).toEqual(false);
    expect(isInteger([])).toEqual(false);
    expect(isInteger(new Set())).toEqual(false);
    expect(isInteger(new Map())).toEqual(false);
    expect(isInteger(jest.fn())).toEqual(false);

    expect(isInteger(0.1)).toEqual(false);
    expect(isInteger(Infinity)).toEqual(false);
    expect(isInteger(-Infinity)).toEqual(false);
  });

  it('isInteger', () => {
    expect(isFloat(undefined)).toEqual(false);
    expect(isFloat(null)).toEqual(false);
    expect(isFloat(NaN)).toEqual(false);
    expect(isFloat(0)).toEqual(true);
    expect(isFloat(true)).toEqual(false);
    expect(isFloat({})).toEqual(false);
    expect(isFloat('')).toEqual(false);
    expect(isFloat([])).toEqual(false);
    expect(isFloat(new Set())).toEqual(false);
    expect(isFloat(new Map())).toEqual(false);
    expect(isFloat(jest.fn())).toEqual(false);

    expect(isFloat(0.1)).toEqual(true);
    expect(isFloat(Infinity)).toEqual(false);
    expect(isFloat(-Infinity)).toEqual(false);
  });

  it('clamp', () => {
    expect(clamp(0, 0)(0)).toEqual(0);
    expect(clamp(0, 0)(1)).toEqual(0);
    expect(clamp(0, 0)(-1)).toEqual(0);
    expect(clamp(-1, 1)(-2)).toEqual(-1);
    expect(clamp(-1, 1)(-1)).toEqual(-1);
    expect(clamp(-1, 1)(0)).toEqual(0);
    expect(clamp(-1, 1)(1)).toEqual(1);
    expect(clamp(-1, 1)(2)).toEqual(1);

    // negative range
    expect(clamp(1, -1)(0)).toEqual(1);
  });

  it('step', () => {
    const generator1 = step(0, 0);
    expect(generator1.next().value).toEqual(0);
    expect(generator1.next().value).toEqual(0);
    expect(generator1.next().value).toEqual(0);
    expect(generator1.next().done).toEqual(false);

    const generator2 = step(-2, 4);
    expect(generator2.next().value).toEqual(-2);
    expect(generator2.next().value).toEqual(2);
    expect(generator2.next().value).toEqual(6);
    expect(generator2.next().done).toEqual(false);

    const generator3 = step(1, -3);
    expect(generator3.next().value).toEqual(1);
    expect(generator3.next().value).toEqual(-2);
    expect(generator3.next().value).toEqual(-5);
    expect(generator3.next().done).toEqual(false);
  });
});

export {};
