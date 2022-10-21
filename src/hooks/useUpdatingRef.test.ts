import { renderHook } from '@testing-library/react';
import { useUpdatingRef } from './useUpdatingRef';

describe('useUpdatingRef', () => {
  it('initial state', () => {
    const value = Symbol();
    const { result } = renderHook(() => useUpdatingRef(value));
    expect(result.current.current).toEqual(value);
  });

  it('deps change', () => {
    const prevValue = Symbol();
    const { result, rerender } = renderHook(
      (value: {}) => useUpdatingRef(value),
      {
        initialProps: prevValue,
      }
    );
    const prevResultCurrent = result.current;

    const value = Symbol();
    rerender(value);
    expect(result.current.current).toEqual(value);
    expect(result.current).toEqual(prevResultCurrent);
  });
});

export {};
