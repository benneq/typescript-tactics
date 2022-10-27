import { ValueOrProvider, valueOrProviderResult } from './valueOrProvider';

/**
 * If the provided value matches the Predicate, the default value will be returned
 *
 * @param predicate
 * @returns the defaultValue if the Predicate matches, else the provided value
 */
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
