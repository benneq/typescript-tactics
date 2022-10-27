import { forEach } from './forEach';

describe('iterable.clamp', () => {
  it('forEach', () => {
    const value = Symbol();
    const callback = jest.fn();

    forEach([value, value])(callback);
    expect(callback).toHaveBeenNthCalledWith(1, value);
    expect(callback).toHaveBeenNthCalledWith(2, value);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

export {};
