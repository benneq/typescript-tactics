import { renderHook } from '@testing-library/react';
import { useEffectOnce } from './useEffectOnce';

describe('useEffectOnce', () => {
  it('initial state', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useEffectOnce(callback));

    expect(result.current).toBeUndefined();
    expect(callback).toHaveBeenNthCalledWith(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('called once', () => {
    const effect1 = jest.fn();
    const { rerender, unmount } = renderHook(() => useEffectOnce(effect1));
    rerender(effect1);

    const effect2 = jest.fn();
    rerender(effect2);

    unmount();

    expect(effect1).toHaveBeenNthCalledWith(1);
    expect(effect1).toHaveBeenCalledTimes(1);
    expect(effect2).not.toBeCalled();
  });

  it('destructor', () => {
    const destructor1 = jest.fn();
    const effect1 = jest.fn(() => destructor1);
    const { rerender, unmount } = renderHook(() => useEffectOnce(effect1));
    rerender(effect1);

    const destructor2 = jest.fn();
    const effect2 = jest.fn(() => destructor2);
    rerender(effect2);

    unmount();

    expect(destructor1).toHaveBeenNthCalledWith(1);
    expect(destructor1).toHaveBeenCalledTimes(1);
    expect(destructor2).not.toBeCalled();
  });
});

export {};
