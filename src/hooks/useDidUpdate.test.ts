import { renderHook } from '@testing-library/react';
import { useDidUpdate } from './useDidUpdate';

describe('useDidUpdate', () => {
  it('initial state', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDidUpdate(callback, []));

    expect(result.current).toBeUndefined();
    expect(callback).not.toBeCalled();
  });

  it('callback change', () => {
    const callback1 = jest.fn();
    const deps = [Symbol()];
    const { rerender } = renderHook(
      ({ callback, deps }) => useDidUpdate(callback, deps),
      {
        initialProps: { callback: callback1, deps: deps },
      }
    );

    const callback2 = jest.fn();
    rerender({ callback: callback2, deps: deps });
    expect(callback2).not.toBeCalled();

    rerender({ callback: callback2, deps: [Symbol()] });
    expect(callback2).toHaveBeenCalledTimes(1);
    expect(callback1).not.toBeCalled();
  });

  it('deps change', () => {
    const callback = jest.fn();
    const deps = [Symbol()];
    const { rerender } = renderHook(
      ({ callback, deps }) => useDidUpdate(callback, deps),
      {
        initialProps: { callback: callback, deps: deps },
      }
    );

    rerender({ callback, deps: deps });
    expect(callback).not.toBeCalled();

    rerender({ callback, deps: [Symbol()] });
    expect(callback).toHaveBeenCalledTimes(1);

    rerender({ callback, deps: deps });
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('callback undefined', () => {
    const env = process.env.NODE_ENV;
    (process.env.NODE_ENV as any) = 'development';

    const logSpy = jest.spyOn(console, 'warn');
    renderHook(() => useDidUpdate(undefined!, []));
    expect(logSpy).toHaveBeenCalled();

    (process.env.NODE_ENV as any) = env;
  });

  it('deps not array', () => {
    const env = process.env.NODE_ENV;
    (process.env.NODE_ENV as any) = 'development';

    const logSpy = jest.spyOn(console, 'warn');
    renderHook(() => useDidUpdate(jest.fn(), undefined!));
    expect(logSpy).toHaveBeenCalled();

    (process.env.NODE_ENV as any) = env;
  });
});

export {};
