import { act, renderHook } from '@testing-library/react';
import {
  clear,
  deselect,
  isSelected,
  isNotSelected,
  select,
  toggle,
  useSingleSelection,
} from './useSingleSelection';

describe('useSingleSelection', () => {
  it('initial state', () => {
    const selection = Symbol();
    const empty = Symbol();
    const { result } = renderHook(() => useSingleSelection(selection, empty));
    expect(result.current[0]).toEqual(selection);
    expect(result.current[1]).toEqual(expect.any(Function));
  });

  it('transform', () => {
    const selection1 = Symbol();
    const empty = Symbol();
    const { result } = renderHook(() =>
      useSingleSelection<symbol, symbol>(selection1, empty)
    );

    const selection2 = Symbol();
    const transform = jest.fn(() => selection2);

    act(() => {
      result.current[1](transform);
    });

    expect(result.current[0]).toEqual(selection2);
    expect(transform).toHaveBeenNthCalledWith(1, selection1, empty);
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

    it('isNotSelected', () => {
      const value1 = Symbol();
      const value2 = Symbol();
      const empty = Symbol();

      expect(isNotSelected(empty, empty)).toEqual(false);
      expect(isNotSelected<symbol>(value1, empty)).toEqual(true);
      expect(isNotSelected<symbol>(empty, value1)).toEqual(true);
      expect(isNotSelected(value1, value1)).toEqual(false);
      expect(isNotSelected<symbol>(value1, value2)).toEqual(true);
    });
  });
});

export {};
