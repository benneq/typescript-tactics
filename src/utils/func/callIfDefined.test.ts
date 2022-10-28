import { callIfDefined } from './callIfDefined';

describe('function.callIfDefined', () => {
  it('callIfDefined', () => {
    const value = Symbol();
    const fn = jest.fn((value) => value);

    expect(callIfDefined(undefined)).toEqual(undefined);
    expect(callIfDefined(fn, value)).toEqual(value);
  });
});

export {};
