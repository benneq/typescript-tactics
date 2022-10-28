import { isEmpty } from './isEmpty';

describe('map.isEmpty', () => {
  it('should return true if the Map has no elements', () => {
    expect(isEmpty(new Map())).toEqual(true);
  });

  it('should return false if the Map has elements', () => {
    expect(isEmpty(new Map([[Symbol(), Symbol()]]))).toEqual(false);
  });
});

export {};
