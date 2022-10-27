import { add } from './add';

describe('set.add', () => {
  it('add', () => {
    const set = new Set();
    const value1 = Symbol();
    add(set)(value1);
    expect(set).toEqual(new Set([value1]));

    const value2 = Symbol();
    add(set)(value2);
    expect(set).toEqual(new Set([value2, value1]));
  });
});

export {};
