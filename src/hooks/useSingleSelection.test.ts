import { act, renderHook } from '@testing-library/react';
import {
  clear,
  deselect,
  isSelected,
  notSelected,
  select,
  toggle,
  useSingleSelection,
} from './useSingleSelection';

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

    it('select', () => {
      const value1 = Symbol();
      expect(select(value1)()).toEqual(value1);
    });

    it('deselect', () => {
      const value1 = Symbol();
      const value2 = Symbol();
      const empty = Symbol();

      expect(deselect(value1)(value1, empty)).toEqual(empty);
      expect(deselect(value2)(value1, empty)).toEqual(value1);

      expect(deselect(value1)(empty, empty)).toEqual(empty);
      expect(deselect(value2)(empty, empty)).toEqual(empty);
    });

    it('clear', () => {
      const value = Symbol();
      const empty = Symbol();

      expect(clear(empty, empty)).toEqual(empty);
      expect(clear(value, empty)).toEqual(empty);
    });

    it('isSelected', () => {
      const value1 = Symbol();
      const value2 = Symbol();
      const empty = Symbol();

      expect(isSelected(empty, empty)).toEqual(true);
      expect(isSelected<symbol>(value1, empty)).toEqual(false);
      expect(isSelected<symbol>(empty, value1)).toEqual(false);
      expect(isSelected(value1, value1)).toEqual(true);
      expect(isSelected<symbol>(value1, value2)).toEqual(false);
    });

    it('notSelected', () => {
      const value1 = Symbol();
      const value2 = Symbol();
      const empty = Symbol();

      expect(notSelected(empty, empty)).toEqual(false);
      expect(notSelected<symbol>(value1, empty)).toEqual(true);
      expect(notSelected<symbol>(empty, value1)).toEqual(true);
      expect(notSelected(value1, value1)).toEqual(false);
      expect(notSelected<symbol>(value1, value2)).toEqual(true);
    });
  });
});

export {};
