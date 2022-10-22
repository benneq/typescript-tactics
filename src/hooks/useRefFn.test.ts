import { renderHook } from '@testing-library/react';
import { useRefFn } from './useRefFn';

describe('useRefFn', () => {
  it('initial state', () => {
    const value = Symbol();
    const callback = jest.fn(() => value);
    const { result } = renderHook(() => useRefFn(callback));

    expect(result.current.current).toBe(value);
    expect(callback).toHaveBeenNthCalledWith(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('init change', () => {
    const value1 = Symbol();
    const callback = jest.fn(() => value1);
    const { result, rerender } = renderHook((callback) => useRefFn(callback), {
      initialProps: callback,
    });
    const resultCurrent = result.current;

    rerender(callback);
    expect(result.current).toBe(resultCurrent);
    expect(result.current.current).toBe(value1);

    const value2 = Symbol();
    const callback2 = jest.fn(() => value2);
    rerender(callback2);
    expect(result.current).toBe(resultCurrent);
    expect(result.current.current).toBe(value1);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback2).not.toHaveBeenCalled();
  });
});

export {};
