import { isEmpty } from './isEmpty';

describe('array.isEmpty', () => {
  it('isEmpty', () => {
    expect(isEmpty([])).toEqual(true);
    expect(isEmpty([0])).toEqual(false);
  });
});

export {};
