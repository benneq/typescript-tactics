import { empty } from './empty';

describe('function.empty', () => {
  it('empty', () => {
    expect(empty).toEqual(expect.any(Function));
  });
});

export {};
