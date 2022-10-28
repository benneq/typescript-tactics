import { isFunction, Provider } from '../func';

export type ValueOrProvider<T, TArgs extends unknown[] = []> =
  | T
  | Provider<T, TArgs>;

/**
 * If the provided value is a function return its result, else return the value
 *
 * @example
 * valueOrProviderResult(1) => 1
 * valueOrProviderResult(() => 2) => 2
 * valueOrProviderResult(x => x + 1, 3) => 4
 *
 * @returns the resulting value
 */
export const valueOrProviderResult = <T, TArgs extends unknown[] = []>(
  value: ValueOrProvider<T, TArgs>,
  ...args: TArgs
): T => {
  if (isFunction(value)) {
    return value(...args);
  } else {
    return value;
  }
};
