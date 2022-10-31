import { identity } from '../func';
import { reduce } from './reduce';

describe('iterable.reduce', () => {
  it('should return the initialValue if reducerFn is identity', () => {
    expect(reduce(identity, 0)([1, 2, 3])).toBe(0);
  });

  it('should return constant if reducerFn returns constant value', () => {
    const value = Symbol();
    expect(reduce(() => value, Symbol())([1, 2, 3])).toBe(value);
  });

  it('should return the sum', () => {
    expect(reduce((acc, val: number) => acc + val, 0)([1, 2, 3])).toBe(6);
  });
});

export {};
