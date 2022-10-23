import { act, renderHook } from '@testing-library/react';
import {
  anySelected,
  clearAll,
  deselect,
  isEmpty,
  isSelected,
  notSelected,
  select,
  setSelection,
  toggle,
  useMultiSelection,
} from './useMultiSelection';

describe('useMultiSelection', () => {
  it('initial state', () => {
    const selection = new Set([Symbol()]);
    const { result } = renderHook(() => useMultiSelection(selection));
    expect(result.current[0]).toEqual(selection);
    expect(result.current[1]).toEqual(expect.any(Function));
  });

  it('transform', () => {
    const selection1 = new Set([Symbol()]);
    const { result } = renderHook(() => useMultiSelection<symbol>(selection1));

    const selection2 = new Set([Symbol()]);
    const transform = jest.fn(() => selection2);

    act(() => {
      result.current[1](transform);
    });

    expect(result.current[0]).toEqual(selection2);
    expect(transform).toHaveBeenNthCalledWith(1, selection1);
    expect(transform).toHaveBeenCalledTimes(1);
  });

  describe('', () => {
    it('clearAll', () => {
      const selection = new Set([Symbol()]);
      expect(clearAll(selection)).toEqual(new Set());
    });

    it('setSelection', () => {
      const selection = new Set([Symbol()]);
      expect(setSelection(selection)(expect.anything())).toEqual(selection);
    });

    it('toggle', () => {
      const value1 = Symbol();
      const value2 = Symbol();

      const selection1 = new Set([value1]);

      expect(toggle<symbol>([])(selection1)).toEqual(selection1);

      expect(toggle<symbol>([value1])(selection1)).toEqual(new Set());
      expect(toggle<symbol>(value1)(selection1)).toEqual(new Set());
      expect(toggle<symbol>(new Set([value1]))(selection1)).toEqual(new Set());

      expect(toggle<symbol>([value2])(selection1)).toEqual(
        new Set([value1, value2])
      );
      expect(toggle<symbol>(value2)(selection1)).toEqual(
        new Set([value1, value2])
      );
      expect(toggle<symbol>(new Set([value2]))(selection1)).toEqual(
        new Set([value1, value2])
      );
    });

    it('select', () => {
      const value1 = Symbol();
      const value2 = Symbol();

      const selection1 = new Set([value1]);

      expect(select<symbol>([])(selection1)).toEqual(selection1);

      expect(select<symbol>([value1])(selection1)).toEqual(selection1);
      expect(select<symbol>(value1)(selection1)).toEqual(selection1);
      expect(select<symbol>(new Set([value1]))(selection1)).toEqual(selection1);

      expect(select<symbol>([value2])(selection1)).toEqual(
        new Set([value1, value2])
      );
      expect(select<symbol>(value2)(selection1)).toEqual(
        new Set([value1, value2])
      );
      expect(select<symbol>(new Set([value2]))(selection1)).toEqual(
        new Set([value1, value2])
      );
    });

    it('deselect', () => {
      const value1 = Symbol();
      const value2 = Symbol();

      const selection1 = new Set([value1]);

      expect(deselect<symbol>([])(selection1)).toEqual(selection1);

      expect(deselect<symbol>([value1])(selection1)).toEqual(new Set());
      expect(deselect<symbol>(value1)(selection1)).toEqual(new Set());
      expect(deselect<symbol>(new Set([value1]))(selection1)).toEqual(
        new Set()
      );

      expect(deselect<symbol>([value2])(selection1)).toEqual(
        new Set(selection1)
      );
      expect(deselect<symbol>(value2)(selection1)).toEqual(new Set(selection1));
      expect(deselect<symbol>(new Set([value2]))(selection1)).toEqual(
        new Set(selection1)
      );
    });

    it('isEmpty', () => {
      const value1 = Symbol();

      const selection1 = new Set();
      const selection2 = new Set([value1]);

      expect(isEmpty(selection1)).toEqual(true);
      expect(isEmpty(selection2)).toEqual(false);
    });

    it('isSelected', () => {
      const value1 = Symbol();
      const value2 = Symbol();

      const selection1 = new Set([value1]);

      expect(isSelected(selection1, [])).toEqual(true);

      expect(isSelected(selection1, value1)).toEqual(true);
      expect(isSelected(selection1, [value1])).toEqual(true);
      expect(isSelected(selection1, new Set([value1]))).toEqual(true);

      expect(isSelected(selection1, value2)).toEqual(false);
      expect(isSelected(selection1, [value2])).toEqual(false);
      expect(isSelected(selection1, new Set([value2]))).toEqual(false);
    });

    it('anySelected', () => {
      const value1 = Symbol();
      const value2 = Symbol();

      const selection1 = new Set([value1]);

      expect(anySelected(selection1, [])).toEqual(false);

      expect(anySelected(selection1, value1)).toEqual(true);
      expect(anySelected(selection1, [value1])).toEqual(true);
      expect(anySelected(selection1, new Set([value1]))).toEqual(true);

      expect(anySelected(selection1, value2)).toEqual(false);
      expect(anySelected(selection1, [value2])).toEqual(false);
      expect(anySelected(selection1, new Set([value2]))).toEqual(false);

      expect(anySelected(selection1, [value1, value2])).toEqual(true);
      expect(anySelected(selection1, new Set([value1, value2]))).toEqual(true);
    });

    it('notSelected', () => {
      const value1 = Symbol();
      const value2 = Symbol();

      const selection1 = new Set([value1]);

      expect(notSelected(selection1, [])).toEqual(true);

      expect(notSelected(selection1, value1)).toEqual(false);
      expect(notSelected(selection1, [value1])).toEqual(false);
      expect(notSelected(selection1, new Set([value1]))).toEqual(false);

      expect(notSelected(selection1, value2)).toEqual(true);
      expect(notSelected(selection1, [value2])).toEqual(true);
      expect(notSelected(selection1, new Set([value2]))).toEqual(true);

      expect(notSelected(selection1, [value1, value2])).toEqual(false);
      expect(notSelected(selection1, new Set([value1, value2]))).toEqual(false);
    });
  });
});

export {};
