import { remove } from './remove';

describe('set.remove', () => {
  it('remove', () => {
    const value1 = Symbol();
    const value2 = Symbol();

    const set = new Set([value1, value2]);
    remove(set)(value1);
    expect(set).toEqual(new Set([value2]));
  });
});

export {};
