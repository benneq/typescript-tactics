import { renderHook } from '@testing-library/react';
import { useUnmountCallback } from './useUnmountCallback';

describe('useUnmountCallback', () => {
  it('initial state', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useUnmountCallback(callback));

    expect(result.current).toBeUndefined();
    expect(callback).not.toHaveBeenCalled();
  });

  it('rerender', () => {
    const callback1 = jest.fn();
    const { result, unmount, rerender } = renderHook(
      ({ callback }) => useUnmountCallback(callback),
      {
        initialProps: {
          callback: callback1,
        },
      }
    );

    rerender({ callback: callback1 });

    const callback2 = jest.fn();
    rerender({ callback: callback2 });
    expect(callback2).not.toHaveBeenCalled();

    unmount();
    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).toHaveBeenNthCalledWith(1);
    expect(callback2).toHaveBeenCalledTimes(1);
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
