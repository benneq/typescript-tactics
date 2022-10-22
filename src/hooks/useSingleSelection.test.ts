import { act, renderHook } from '@testing-library/react';
import { clear, set, toggle, useSingleSelection } from './useSingleSelection';

describe('useSingleSelection', () => {
  it('initial state', () => {
    const value = Symbol();
    const empty = Symbol();
    const { result } = renderHook(() => useSingleSelection(value, empty));
    expect(result.current[0]).toEqual(value);
    expect(result.current[1]).toEqual(expect.any(Function));
  });

  it('transform', () => {
    const value1 = Symbol();
    const empty = Symbol();
    const { result } = renderHook(() =>
      useSingleSelection<symbol, symbol>(value1, empty)
    );

    const value2 = Symbol();
    const transform = jest.fn(() => value2);

    act(() => {
      result.current[1](transform);
    });

    expect(result.current[0]).toEqual(value2);
    expect(transform).toHaveBeenNthCalledWith(1, value1, empty);
    expect(transform).toHaveBeenCalledTimes(1);
  });

  describe('', () => {
    it('toggle', () => {
      const value1 = Symbol();
      const value2 = Symbol();
      const empty = Symbol();

      expect(toggle(value1)(empty, empty)).toEqual(value1);
      expect(toggle(value1)(value1, empty)).toEqual(empty);
      expect(toggle(value2)(value1, empty)).toEqual(value2);
      expect(toggle(empty)(empty, empty)).toEqual(empty);
      expect(toggle(empty)(value1, empty)).toEqual(empty);
    });

    it('set', () => {
      const value1 = Symbol();
      const res = set(value1)();

      expect(res).toEqual(value1);
    });

    it('clear', () => {
      const value = Symbol();
      const empty = Symbol();

      const res = clear(value, empty);

      expect(res).toEqual(empty);
    });
  });
});

export {};
