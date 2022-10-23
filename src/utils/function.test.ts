import { identity } from './function';

describe('function', () => {
  it('identity', () => {
    expect(identity).toEqual(expect.any(Function));

    const value = Symbol();
    expect(identity(value)).toEqual(value);
  });
});

export {};
