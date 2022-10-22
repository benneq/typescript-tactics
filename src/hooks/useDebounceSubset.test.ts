import { renderHook } from '@testing-library/react';
import { useDebounceSubset } from './useDebounceSubset';

const DELAY = 500;

describe('useDebounceSubset', () => {
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
    const { result } = renderHook(() =>
      useDebounceSubset(callback, DELAY, [], [])
    );

    jest.runAllTimers();
    expect(result.current).toBeDefined();
    expect(callback).not.toBeCalled();
  });

  it('callback change', () => {
    const callback1 = jest.fn();
    const deps = [Symbol()];
    const depsSubset = [Symbol()];
    const { rerender } = renderHook(
      ({ callback, ms, deps, depsSubset }) =>
        useDebounceSubset(callback, ms, deps, depsSubset),
      {
        initialProps: { callback: callback1, ms: DELAY, deps, depsSubset },
      }
    );

    rerender({ callback: callback1, ms: DELAY, deps, depsSubset });

    const callback2 = jest.fn();
    rerender({ callback: callback2, ms: DELAY, deps, depsSubset });
    rerender({ callback: callback1, ms: DELAY, deps, depsSubset });
    expect(callback1).not.toBeCalled();
    expect(callback2).not.toBeCalled();
  });

  it('ms change', () => {
    const callback = jest.fn();
    const ms1 = 500;
    const deps = [Symbol()];
    const depsSubset = [Symbol()];
    const { rerender } = renderHook(
      ({ callback, ms, deps, depsSubset }) =>
        useDebounceSubset(callback, ms, deps, depsSubset),
      {
        initialProps: { callback, ms: ms1, deps, depsSubset },
      }
    );

    rerender({ callback, ms: ms1, deps, depsSubset });

    const ms2 = 0;
    rerender({ callback, ms: ms2, deps, depsSubset });
    rerender({ callback, ms: ms1, deps, depsSubset });
    expect(callback).not.toBeCalled();
  });

  it('deps change', () => {
    const callback = jest.fn();
    const deps1 = [Symbol()];
    const depsSubset = [Symbol()];
    const { rerender } = renderHook(
      ({ callback, ms, deps, depsSubset }) =>
        useDebounceSubset(callback, ms, deps, depsSubset),
      {
        initialProps: { callback, ms: DELAY, deps: deps1, depsSubset },
      }
    );

    rerender({ callback, ms: DELAY, deps: deps1, depsSubset });
    jest.runAllTimers();
    expect(callback).not.toBeCalled();

    const deps2 = [Symbol()];
    rerender({ callback, ms: DELAY, deps: deps2, depsSubset });
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
    rerender({ callback, ms: DELAY, deps: deps1, depsSubset });
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('deps and subset change', () => {
    const value1 = { bool: true, str: '' };

    const callback = jest.fn();
    const { rerender } = renderHook(
      ({ callback, ms, deps, subset }) =>
        useDebounceSubset(callback, ms, deps, subset),
      {
        initialProps: {
          callback: callback,
          ms: DELAY,
          deps: [value1],
          subset: [value1.str],
        },
      }
    );

    const value2 = { bool: true, str: 'foo' };
    rerender({ callback, ms: DELAY, deps: [value2], subset: [value2.str] });
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);

    rerender({ callback, ms: DELAY, deps: [value2], subset: [value2.str] });
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  /**
   * A subset can never change without the full set also changing,
   * though this is wrong usage and has no effect
   */
  it('depsSubset change', () => {
    const callback = jest.fn();
    const deps = [Symbol()];
    const depsSubset1 = [Symbol()];
    const { rerender } = renderHook(
      ({ callback, ms, deps, subset }) =>
        useDebounceSubset(callback, ms, deps, subset),
      {
        initialProps: {
          callback: callback,
          ms: DELAY,
          deps,
          subset: depsSubset1,
        },
      }
    );

    const depsSubset2 = [Symbol()];
    rerender({ callback, ms: DELAY, deps, subset: depsSubset2 });
    rerender({ callback, ms: DELAY, deps, subset: depsSubset2 });
    rerender({ callback, ms: DELAY, deps, subset: depsSubset1 });
    expect(callback).not.toBeCalled();
  });

  it('return value change', () => {
    const callback = jest.fn();
    const ms = 500;
    const deps = [Symbol()];
    const depsSubset = [Symbol()];
    const { result, rerender } = renderHook(
      ({ callback, ms, deps, depsSubset }) =>
        useDebounceSubset(callback, ms, deps, depsSubset),
      {
        initialProps: { callback, ms, deps, depsSubset },
      }
    );
    const resultCurrent = result.current;

    rerender({ callback, ms, deps, depsSubset });
    expect(result.current).toBe(resultCurrent);

    rerender({ callback, ms: 0, deps: [Symbol()], depsSubset: [Symbol()] });
    expect(result.current).toBe(resultCurrent);

    rerender({ callback, ms, deps: deps, depsSubset: [Symbol()] });
    expect(result.current).toBe(resultCurrent);

    result.current(jest.fn(() => undefined));
    expect(result.current).toBe(resultCurrent);

    result.current(jest.fn(() => setTimeout(() => {}, 0)));
    expect(result.current).toBe(resultCurrent);

    rerender({ callback: jest.fn(), ms, deps, depsSubset });
    expect(result.current).toBe(resultCurrent);
  });
});

export {};
