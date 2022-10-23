import { useCallback, useState } from 'react';
import { ValueOrProvider } from '../utils/types';

type TransformFn<T, E> = (prevValue: T | E, empty: E) => T | E;

type UseSingleSelectionReturn<T, E> = [T | E, (val: TransformFn<T, E>) => void];

export const useSingleSelection = <T, E>(
  initialValue: ValueOrProvider<T>,
  empty: E
): UseSingleSelectionReturn<T, E> => {
  const [value, setValue] = useState<T | E>(initialValue);

  const transform = useCallback(
    (transform: TransformFn<T, E>) => {
      setValue((prevValue) => transform(prevValue, empty));
    },
    [empty]
  );

  return [value, transform];
};

export const toggle =
  <T, E>(value: T) =>
  (prevValue: T | E, empty: E): T | E => {
    if (value === prevValue) {
      return empty;
    } else {
      return value;
    }
  };

export const select =
  <T>(value: T) =>
  (): T => {
    return value;
  };

export const deselect =
  <T, E>(value: T) =>
  (prevValue: T | E, empty: E): T | E => {
    if (value === prevValue) {
      return empty;
    } else {
      return prevValue;
    }
  };

export const clear = <T, E>(_: T | E, empty: E): E => {
  return empty;
};

export const isSelected = <T>(singleSelectionValue: T, value: T): boolean => {
  return singleSelectionValue === value;
};

export const isNotSelected = <T>(
  singleSelectionValue: T,
  value: T
): boolean => {
  return !isSelected(singleSelectionValue, value);
};
