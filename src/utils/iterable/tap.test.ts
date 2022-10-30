import { tap } from './tap';

describe('iterable.tap', () => {
  it('should call the callback for each element of the Iterable', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const callback = jest.fn();

    const generator = tap(callback)([value1, value2]);

    expect(generator.next().value).toBe(value1);
    expect(generator.next().value).toBe(value2);
    expect(generator.next().done).toBe(true);

    expect(callback).toHaveBeenNthCalledWith(1, value1);
    expect(callback).toHaveBeenNthCalledWith(2, value2);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

export {};
