import { renderHook } from '@testing-library/react';
import { useUnmountCallback } from './useUnmountCallback';

describe('useUnmountCallback', () => {
  it('initial state', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useUnmountCallback(callback));

    expect(result.current).toBeUndefined();
    expect(callback).not.toHaveBeenCalled();
  });

  it('unmount', () => {
    const callback = jest.fn();
    const { result, unmount } = renderHook(() => useUnmountCallback(callback));

    unmount();
    expect(callback).toHaveBeenNthCalledWith(1);

    expect(result.current).toBeUndefined();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

export {};
