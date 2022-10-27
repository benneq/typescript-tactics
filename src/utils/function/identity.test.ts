import { identity } from './identity';

describe('function.identity', () => {
  it('identity', () => {
    expect(identity).toEqual(expect.any(Function));

    const value = Symbol();
    expect(identity(value)).toEqual(value);
  });
});

export {};
