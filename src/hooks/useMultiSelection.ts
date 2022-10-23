import { useCallback, useState } from 'react';
import { toIterable } from '../utils/iterable';
import { ValueOrProvider } from '../utils/types';
import { toggle as toggleSet } from '../utils/set';

type TransformFn<T> = (prevValue: Set<T>) => Set<T>;

type UseMultiSelectionReturn<T> = [Set<T>, (val: TransformFn<T>) => void];

export const useMultiSelection = <T>(
  initialValue: ValueOrProvider<Set<T>>
): UseMultiSelectionReturn<T> => {
  const [value, setValue] = useState(initialValue);

  const transform = useCallback((transform: TransformFn<T>) => {
    const ref = { current: new Set<T>() };
    setValue((prevValue) => {
      const res = transform(prevValue);
      ref.current = res;
      return res;
    });
  }, []);

  return [value, transform];
};

export const clearAll = <T>(_: Set<T>): Set<T> => {
  return new Set();
};

export const setSelection =
  <T>(value: Set<T>) =>
  (_: Set<T>) => {
    return value;
  };

export const toggle =
  <T>(value: T | T[] | Set<T>) =>
  (prevValue: Set<T>): Set<T> => {
    const selection = new Set(prevValue);
    for (const e of toIterable(value)) {
      toggleSet(selection)(e);
    }
    return selection;
  };

export const select =
  <T>(value: T | T[] | Set<T>) =>
  (prevValue: Set<T>): Set<T> => {
    const selection = new Set(prevValue);
    for (const e of toIterable(value)) {
      selection.add(e);
    }
    return selection;
  };

export const deselect =
  <T>(value: T | T[] | Set<T>) =>
  (prevValue: Set<T>): Set<T> => {
    const selection = new Set(prevValue);
    for (const e of toIterable(value)) {
      selection.delete(e);
    }
    return selection;
  };

export const isSelected = <T>(
  multiSelectionValue: Set<T>,
  value: T | T[] | Set<T>
): boolean => {
  for (const e of toIterable(value)) {
    if (!multiSelectionValue.has(e)) {
      return false;
    }
  }
  return true;
};

export const anySelected = <T>(
  multiSelectionValue: Set<T>,
  value: T | T[] | Set<T>
): boolean => {
  for (const e of toIterable(value)) {
    if (multiSelectionValue.has(e)) {
      return true;
    }
  }
  return false;
};

export const notSelected = <T>(
  multiSelectionValue: Set<T>,
  value: T | T[] | Set<T>
): boolean => {
  return !anySelected(multiSelectionValue, value);
};
