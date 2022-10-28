import { isEmpty } from './isEmpty';

describe('array.isEmpty', () => {
  it('should return true if the given Array is empty', () => {
    expect(isEmpty([])).toEqual(true);
  });

  it('should return false if the given Array is not empty', () => {
    expect(isEmpty([0])).toEqual(false);
  });
});

export {};
