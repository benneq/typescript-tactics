import { forEach } from './forEach';

describe('iterable.forEach', () => {
  it('should call the callback for each element of the Iterable', () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const callback = jest.fn();

    forEach([value1, value2])(callback);
    expect(callback).toHaveBeenNthCalledWith(1, value1);
    expect(callback).toHaveBeenNthCalledWith(2, value2);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

export {};
