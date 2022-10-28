import { isEmpty } from './isEmpty';

describe('map.isEmpty', () => {
  it('isEmpty', () => {
    expect(isEmpty(new Map())).toEqual(true);
    expect(isEmpty(new Map([[Symbol(), Symbol()]]))).toEqual(false);
  });
});

export {};
