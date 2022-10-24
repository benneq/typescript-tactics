import { ValueOrProvider, valueOrProviderResult } from './types';

export const defaultIf =
  <T, S extends T>(predicate: (value: T) => value is S) =>
  <D>(defaultValue: ValueOrProvider<D>) =>
  <V extends T>(value: V): Exclude<V, S> | D => {
    if (predicate(value)) {
      return valueOrProviderResult(defaultValue);
    } else {
      return value as Exclude<V, S>;
    }
  };

export const isUndefined = <T>(value: T | undefined): value is undefined => {
  return value === undefined;
};

export const isNotUndefined = <T>(value: T): value is Exclude<T, undefined> => {
  return !isUndefined(value);
};

export const defaultIfUndefined = defaultIf(isUndefined);

export const isNull = <T>(value: T | null): value is null => {
  return value === null;
};

export const isNotNull = <T>(value: T): value is Exclude<T, null> => {
  return !isNull(value);
};

export const defaultIfNull = defaultIf(isNull);
