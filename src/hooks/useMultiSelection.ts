import { useCallback, useState } from 'react';
import { ValueOrProvider } from '../utils/types';
import {
  toggle as toggleSet,
  isEmpty as isEmptySet,
  toSet,
  every,
  some,
} from '../utils/set';

type Value<T> = Set<T>;

type TransformFn<T> = (prevValue: Value<T>) => Value<T>;

type UseMultiSelectionReturn<T> = [Value<T>, (val: TransformFn<T>) => void];

export const useMultiSelection = <T>(
  initialValue: ValueOrProvider<Value<T>>
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

export const clearAll = <T>(_: Value<T>): Value<T> => {
  return new Set();
};

export const setSelection =
  <T>(value: Value<T>) =>
  (_: Value<T>): Value<T> => {
    return value;
  };

export const toggle =
  <T>(value: T | Iterable<T>) =>
  (prevValue: Value<T>): Value<T> => {
    const selection = new Set(prevValue);
    toSet(value).forEach(toggleSet(selection));
    return selection;
  };

export const select =
  <T>(value: T | Iterable<T>) =>
  (prevValue: Value<T>): Value<T> => {
    const selection = new Set(prevValue);
    toSet(value).forEach((e) => selection.add(e));
    return selection;
  };

export const deselect =
  <T>(value: T | Iterable<T>) =>
  (prevValue: Value<T>): Value<T> => {
    const selection = new Set(prevValue);
    toSet(value).forEach((e) => selection.delete(e));
    return selection;
  };

export const isEmpty = <T>(multiSelectionValue: Value<T>): boolean => {
  return isEmptySet(multiSelectionValue);
};

export const isSelected = <T>(
  multiSelectionValue: Value<T>,
  value: T | Iterable<T>
): boolean => {
  return every(multiSelectionValue)(value);
};

export const anySelected = <T>(
  multiSelectionValue: Value<T>,
  value: T | Iterable<T>
): boolean => {
  return some(multiSelectionValue)(value);
};

export const notSelected = <T>(
  multiSelectionValue: Value<T>,
  value: T | Iterable<T>
): boolean => {
  return !anySelected(multiSelectionValue, value);
};
