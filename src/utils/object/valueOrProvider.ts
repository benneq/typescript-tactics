import { isFunction } from '../function/isFunction';
import { Provider } from '../function/_types';

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
