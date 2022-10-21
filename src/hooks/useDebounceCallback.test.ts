import { renderHook } from '@testing-library/react';
import { cancel, delay, now, useDebounceCallback } from './useDebounceCallback';

const DELAY = 500;

describe('useDebounceCallback', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('initial state', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebounceCallback(callback));

    jest.runAllTimers();
    expect(result.current).toBeDefined();
    expect(callback).not.toBeCalled();
  });

  it('first setValue', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebounceCallback(callback));

    const mockFn = jest.fn();
    result.current(mockFn);
    expect(mockFn).toHaveBeenNthCalledWith(1, undefined, callback);

    jest.runAllTimers();
    expect(callback).not.toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('second setValue undefined', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebounceCallback(callback));

    result.current(() => undefined);

    const mockFn = jest.fn();
    result.current(mockFn);
    expect(callback).not.toBeCalled();
    expect(mockFn).toHaveBeenNthCalledWith(1, undefined, callback);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('second setValue timeout', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebounceCallback(callback));

    const timeout = setTimeout(() => {}, DELAY);
    result.current(() => timeout);

    const mockFn = jest.fn();
    result.current(mockFn);
    expect(callback).not.toBeCalled();
    expect(mockFn).toHaveBeenNthCalledWith(1, timeout, callback);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('callback change', () => {
    const prevCallback = jest.fn();
    const { result, rerender } = renderHook(
      (callback: any) => useDebounceCallback(callback),
      {
        initialProps: prevCallback,
      }
    );

    const callback = jest.fn();
    rerender(callback);

    const mockFn = jest.fn();
    result.current(mockFn);
    expect(prevCallback).not.toBeCalled();
    expect(callback).not.toBeCalled();
    expect(mockFn).toHaveBeenNthCalledWith(1, undefined, callback);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('callback undefined', () => {
    const env = process.env.NODE_ENV;
    (process.env.NODE_ENV as any) = 'development';

    const logSpy = jest.spyOn(console, 'warn');
    renderHook(() => useDebounceCallback(undefined!));
    expect(logSpy).toHaveBeenCalled();

    (process.env.NODE_ENV as any) = env;
  });

  it('return value change', () => {
    const prevCallback = jest.fn();
    const { result, rerender } = renderHook(
      (callback: any) => useDebounceCallback(callback),
      {
        initialProps: prevCallback,
      }
    );
    const prevResultCurrent = result.current;

    result.current(() => setTimeout(() => {}, DELAY));
    expect(result.current).toBe(prevResultCurrent);

    result.current(() => undefined);
    expect(result.current).toBe(prevResultCurrent);

    rerender(jest.fn());
    expect(result.current).not.toBe(prevResultCurrent);
  });

  describe('mutations', () => {
    it('cancel undefined', () => {
      const res = cancel(undefined);
      expect(res).toBeUndefined();
    });

    it('cancel timeout', () => {
      const prevCallback = jest.fn();
      const timeout = setTimeout(prevCallback, DELAY);

      const res = cancel(timeout);
      expect(res).toBeUndefined();

      jest.runAllTimers();
      expect(prevCallback).not.toBeCalled();
    });

    it('delay new', () => {
      const arg = Symbol();
      const callback = jest.fn();
      const res = delay(DELAY, arg)(undefined, callback);
      expect(res).toBeDefined();

      jest.runAllTimers();
      expect(callback).toHaveBeenNthCalledWith(1, arg);
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('delay override', () => {
      const arg = Symbol();
      const prevCallback = jest.fn();
      const timeout = setTimeout(prevCallback, DELAY);

      const callback = jest.fn();
      const res = delay(DELAY, arg)(timeout, callback);
      expect(res).toBeDefined();

      jest.runAllTimers();
      expect(prevCallback).not.toBeCalled();
      expect(callback).toHaveBeenNthCalledWith(1, arg);
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('now new', () => {
      const arg = Symbol();
      const callback = jest.fn();
      const res = now(arg)(undefined, callback);
      expect(res).toBeUndefined();

      expect(callback).toHaveBeenNthCalledWith(1, arg);
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('now override', () => {
      const arg = Symbol();
      const prevCallback = jest.fn();
      const timeout = setTimeout(prevCallback, DELAY);

      const callback = jest.fn();
      const res = now(arg)(timeout, callback);
      expect(res).toBeUndefined();

      jest.runAllTimers();
      expect(prevCallback).not.toBeCalled();
      expect(callback).toHaveBeenNthCalledWith(1, arg);
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});

export {};
