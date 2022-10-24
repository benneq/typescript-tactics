import { useCallback, useState } from 'react';
import { ValueOrProvider } from '../utils/types';
import {
  isEmpty as isEmptySet,
  containsAny,
  SetCompatible,
  contains,
  difference,
  union,
  symmetricDifference,
} from '../utils/set';

type Value<T> = Set<T>;

type TransformFn<T> = (prevValue: Value<T>) => Value<T>;

type UseMultiSelectionReturn<T> = [Value<T>, (val: TransformFn<T>) => void];

export const useMultiSelection = <T>(
  initialValue: ValueOrProvider<Value<T>>
): UseMultiSelectionReturn<T> => {
  const [value, setValue] = useState(initialValue);

  const transform = useCallback((transform: TransformFn<T>) => {
    setValue((prevValue) => transform(prevValue));
  }, []);

  return [value, transform];
};

export const clear = <T>(_: Value<T>): Value<T> => {
  return new Set();
};

export const set =
  <T>(value: Value<T>) =>
  (_: Value<T>): Value<T> => {
    return value;
  };

export const toggle =
  <T>(value: SetCompatible<T>) =>
  (prevValue: Value<T>): Value<T> => {
    return symmetricDifference(prevValue, value);
  };

export const select =
  <T>(value: SetCompatible<T>) =>
  (prevValue: Value<T>): Value<T> => {
    return union(prevValue, value);
  };

export const deselect =
  <T>(value: SetCompatible<T>) =>
  (prevValue: Value<T>): Value<T> => {
    return difference(prevValue, value);
  };

export const isEmpty = <T>(multiSelectionValue: Value<T>): boolean => {
  return isEmptySet(multiSelectionValue);
};

export const isSelected = <T>(
  multiSelectionValue: Value<T>,
  value: T
): boolean => {
  return contains(multiSelectionValue)(value);
};

export const isAnySelected = <T>(
  multiSelectionValue: Value<T>,
  value: SetCompatible<T>
): boolean => {
  return containsAny(multiSelectionValue)(value);
};

export const isNotSelected = <T>(
  multiSelectionValue: Value<T>,
  value: SetCompatible<T>
): boolean => {
  return !isAnySelected(multiSelectionValue, value);
};