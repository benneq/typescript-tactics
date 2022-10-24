import { isFunction } from './function';

export type Callback<TArgs extends readonly unknown[] = []> = (
  ...args: TArgs
) => void;

export type Provider<T, TArgs extends unknown[] = []> = (...args: TArgs) => T;

export type ValueOrProvider<T, TArgs extends unknown[] = []> =
  | T
  | Provider<T, TArgs>;

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
