import { renderHook } from '@testing-library/react';
import { useDidSubsetUpdate } from './useDidSubsetUpdate';

describe('useDidSubsetUpdate', () => {
  it('initial state', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDidSubsetUpdate(callback, [], []));

    expect(result.current).toBeUndefined();
    expect(callback).not.toBeCalled();
  });

  it('callback change', () => {
    const callback1 = jest.fn();
    const deps = [Symbol()];
    const depsSubset = [Symbol()];
    const { rerender } = renderHook(
      ({ callback, deps, subset }) =>
        useDidSubsetUpdate(callback, deps, subset),
      {
        initialProps: { callback: callback1, deps: deps, subset: depsSubset },
      }
    );

    const callback2 = jest.fn();
    rerender({ callback: callback2, deps, subset: depsSubset });
    expect(callback2).not.toBeCalled();

    rerender({ callback: callback2, deps: [Symbol()], subset: depsSubset });
    expect(callback2).toHaveBeenNthCalledWith(1, false);
    expect(callback2).toHaveBeenCalledTimes(1);
    expect(callback1).not.toBeCalled();
  });

  it('deps change', () => {
    const callback = jest.fn();
    const deps1 = [Symbol()];
    const depsSubset = [Symbol()];
    const { rerender } = renderHook(
      ({ callback, deps, subset }) =>
        useDidSubsetUpdate(callback, deps, subset),
      {
        initialProps: { callback: callback, deps: deps1, subset: depsSubset },
      }
    );

    const deps2 = [Symbol()];
    rerender({ callback, deps: deps2, subset: depsSubset });
    expect(callback).toHaveBeenNthCalledWith(1, false);

    rerender({ callback, deps: deps2, subset: depsSubset });
    expect(callback).toHaveBeenCalledTimes(1);

    rerender({ callback, deps: deps1, subset: depsSubset });
    expect(callback).toHaveBeenNthCalledWith(2, false);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('deps change after subset change', () => {
    const callback = jest.fn();
    const deps1 = [Symbol()];
    const depsSubset1 = [Symbol()];
    const { rerender } = renderHook(
      ({ callback, deps, subset }) =>
        useDidSubsetUpdate(callback, deps, subset),
      {
        initialProps: { callback: callback, deps: deps1, subset: depsSubset1 },
      }
    );

    const depsSubset2 = [Symbol()];
    rerender({ callback, deps: [Symbol()], subset: depsSubset2 });
    expect(callback).toHaveBeenNthCalledWith(1, true);

    rerender({ callback, deps: deps1, subset: depsSubset2 });
    expect(callback).toHaveBeenNthCalledWith(2, false);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('deps and subset change', () => {
    const value1 = { bool: true, str: '' };

    const callback = jest.fn();
    const { rerender } = renderHook(
      ({ callback, deps, subset }) =>
        useDidSubsetUpdate(callback, deps, subset),
      {
        initialProps: {
          callback: callback,
          deps: [value1],
          subset: [value1.str],
        },
      }
    );

    const value2 = { bool: true, str: 'foo' };
    rerender({ callback, deps: [value2], subset: [value2.str] });
    expect(callback).toHaveBeenNthCalledWith(1, true);

    rerender({ callback, deps: [value2], subset: [value2.str] });
    expect(callback).toHaveBeenCalledTimes(1);
  });

  /**
   * A subset can never change without the full set also changing,
   * though this is wrong usage and has no effect
   */
  it('subset change', () => {
    const callback = jest.fn();
    const deps = [Symbol()];
    const depsSubset1 = [Symbol()];
    const { rerender } = renderHook(
      ({ callback, deps, subset }) =>
        useDidSubsetUpdate(callback, deps, subset),
      {
        initialProps: { callback: callback, deps, subset: depsSubset1 },
      }
    );

    const depsSubset2 = [Symbol()];
    rerender({ callback, deps, subset: depsSubset2 });
    rerender({ callback, deps, subset: depsSubset2 });
    rerender({ callback, deps, subset: depsSubset1 });
    expect(callback).not.toBeCalled();
  });

  it('callback undefined', () => {
    const env = process.env.NODE_ENV;
    (process.env.NODE_ENV as any) = 'development';

    const logSpy = jest.spyOn(console, 'warn');

    const callback = jest.fn();
    const deps = [Symbol()];
    const { rerender } = renderHook(
      ({ callback, deps, subset }) =>
        useDidSubsetUpdate(callback, deps, subset),
      {
        initialProps: { callback: callback, deps, subset: [Symbol()] },
      }
    );

    rerender({ callback, deps, subset: [Symbol()] });

    expect(logSpy).toHaveBeenCalled();

    (process.env.NODE_ENV as any) = env;
  });
});

export {};
