import { useCallback, useState } from 'react';
import { ValueOrProvider } from '../utils/object/valueOrProvider';
import { difference } from '../utils/set/difference';
import { symmetricDifference } from '../utils/set/symmetricDifference';
import { union } from '../utils/set/union';
import { SetCompatible } from '../utils/set/_types';
import { isEmpty as isEmptySet } from '../utils/set/isEmpty';
import { contains } from '../utils/set/contains';
import { containsAny } from '../utils/set/containsAny';

type Value<T> = Set<T>;

type TransformFn<T> = (prevValue: Value<T>) => Value<T>;

type UseMultiSelectionReturn<T> = [Value<T>, (val: TransformFn<T>) => void];

export const useMultiSelection = <T>(
  initialValue: ValueOrProvider<Value<T>>
): UseMultiSelectionReturn<T> => {
  const [value, setValue] = useState(initialValue);

  const transform = useCallback((transform: TransformFn<T>) => {
    setValue(transform);
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

export const toggle = <T>(
  value: SetCompatible<T>
): ((prevValue: Value<T>) => Value<T>) => {
  return symmetricDifference(value);
};

export const select = <T>(
  value: SetCompatible<T>
): ((prevValue: Value<T>) => Value<T>) => {
  return union(value);
};

export const deselect = <T>(
  value: SetCompatible<T>
): ((prevValue: Value<T>) => Value<T>) => {
  return difference(value);
};

export const isEmpty = isEmptySet;

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
