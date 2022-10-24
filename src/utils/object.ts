import { ValueOrProvider, valueOrProviderResult } from './types';

export const isNotUndefined = <T>(value: T): value is Exclude<T, undefined> => {
  return value !== undefined;
};

export const defaultIfUndefined =
  <T>(defaultValue: ValueOrProvider<T>) =>
  (value: T | undefined): T => {
    return isNotUndefined(value) ? value : valueOrProviderResult(defaultValue);
  };

export const isNotNull = <T>(value: T): value is Exclude<T, null> => {
  return value !== null;
};

export const defaultIfNull =
  <T>(defaultValue: ValueOrProvider<T>) =>
  (value: T | null): T => {
    return isNotNull(value) ? value : valueOrProviderResult(defaultValue);
  };
