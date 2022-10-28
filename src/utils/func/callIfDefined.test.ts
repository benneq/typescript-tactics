import { callIfDefined } from './callIfDefined';

describe('function.callIfDefined', () => {
  it('should return the Function result if the provided value is a Function', () => {
    const value: symbol = Symbol();
    const fn = (value: symbol) => value;

    expect(callIfDefined(fn, value)).toBe(value);
  });

  it('should return undefined if the provided value is not a Function', () => {
    expect(callIfDefined(undefined)).toBeUndefined();
  });
});

export {};
