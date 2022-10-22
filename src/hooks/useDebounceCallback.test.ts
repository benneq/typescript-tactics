import { renderHook } from '@testing-library/react';
import { Callback } from 'utils/types';
import {
  cancel,
  delay,
  isPending,
  now,
  useDebounceCallback,
} from './useDebounceCallback';

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

    const value = setTimeout(jest.fn());
    const transform = jest.fn(() => value);
    const res = result.current(transform);

    expect(res).toEqual(value);
    expect(callback).not.toBeCalled();
    expect(transform).toHaveBeenNthCalledWith(
      1,
      undefined,
      expect.any(Function)
    );
    expect(transform).toHaveBeenCalledTimes(1);
  });

  it('callback call', () => {
    const callback = jest.fn();
    const arg = Symbol();
    const { result } = renderHook(() => useDebounceCallback(callback));

    result.current((_, cb) => {
      cb(arg);
      return undefined;
    });

    expect(callback).toHaveBeenNthCalledWith(1, arg);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('callback change', () => {
    const callback1 = jest.fn();
    const { result, rerender } = renderHook(
      (callback: Callback) => useDebounceCallback(callback),
      {
        initialProps: callback1,
      }
    );

    const callback2 = jest.fn();
    rerender(callback2);

    result.current((_, cb) => {
      cb();
      return undefined;
    });

    expect(callback1).not.toBeCalled();
    expect(callback2).toHaveBeenNthCalledWith(1);
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  it('callback change while pending', () => {
    const callback1 = jest.fn();
    const { result, rerender } = renderHook(
      (callback) => useDebounceCallback(callback),
      {
        initialProps: callback1,
      }
    );

    const arg = Symbol();
    result.current((_, cb) => {
      setTimeout(cb, 0, arg);
      return undefined;
    });

    const callback2 = jest.fn();
    rerender(callback2);

    jest.runAllTimers();

    expect(callback1).not.toBeCalled();
    expect(callback2).toHaveBeenNthCalledWith(1, arg);
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  it('callback undefined', () => {
    const env = process.env.NODE_ENV;
    (process.env.NODE_ENV as any) = 'development';

    const logSpy = jest.spyOn(console, 'warn');
    renderHook(() => useDebounceCallback(undefined!));
    expect(logSpy).toHaveBeenCalled();

    (process.env.NODE_ENV as any) = env;
  });

  it('value change', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useDebounceCallback(callback));

    const value1 = setTimeout(jest.fn());
    const res1 = result.current(() => value1);

    const value2 = setTimeout(jest.fn());
    const transform2 = jest.fn(() => value2);
    const res2 = result.current(transform2);

    expect(value1).not.toEqual(value2);
    expect(res1).toEqual(value1);
    expect(res2).toEqual(value2);
    expect(transform2).toHaveBeenNthCalledWith(1, value1, expect.any(Function));
    expect(transform2).toHaveBeenCalledTimes(1);
  });

  describe('transform', () => {
    it('cancel undefined', () => {
      const res = cancel(undefined);
      expect(res).toBeUndefined();
    });

    it('cancel timeout', () => {
      const callback = jest.fn();
      const timeout = setTimeout(callback, DELAY);

      const res = cancel(timeout);
      expect(res).toBeUndefined();

      jest.runAllTimers();
      expect(callback).not.toBeCalled();
    });

    it('delay new', () => {
      const arg = Symbol();
      const callback = jest.fn();
      const res = delay(DELAY, arg)(undefined, callback);
      expect(res).toBeDefined();
      expect(callback).not.toHaveBeenCalled();

      jest.runAllTimers();
      expect(callback).toHaveBeenNthCalledWith(1, arg);
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('delay override', () => {
      const arg = Symbol();
      const callback1 = jest.fn();
      const timeout = setTimeout(callback1, DELAY);

      const callback2 = jest.fn();
      const res = delay(DELAY, arg)(timeout, callback2);
      expect(res).toBeDefined();
      expect(callback2).not.toBeCalled();

      jest.runAllTimers();
      expect(callback1).not.toBeCalled();
      expect(callback2).toHaveBeenNthCalledWith(1, arg);
      expect(callback2).toHaveBeenCalledTimes(1);
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
      const callback1 = jest.fn();
      const timeout = setTimeout(callback1, DELAY);

      const callback2 = jest.fn();
      const res = now(arg)(timeout, callback2);
      expect(res).toBeUndefined();
      expect(callback2).toHaveBeenNthCalledWith(1, arg);

      jest.runAllTimers();
      expect(callback1).not.toBeCalled();
      expect(callback2).toHaveBeenCalledTimes(1);
    });

    it('isPending', () => {
      const callback = jest.fn();
      const { result, rerender } = renderHook(() =>
        useDebounceCallback(callback)
      );
      expect(isPending(result.current)).toEqual(false);
      rerender(jest.fn());
      expect(isPending(result.current)).toEqual(false);

      result.current(delay(DELAY));
      expect(isPending(result.current)).toEqual(true);
      rerender(jest.fn());
      expect(isPending(result.current)).toEqual(true);

      jest.runAllTimers();
      expect(isPending(result.current)).toEqual(false);
      rerender(jest.fn());
      expect(isPending(result.current)).toEqual(false);
    });
  });
});

export {};
