export type Callback<TArgs extends readonly unknown[] = []> = (
  ...args: TArgs
) => void;

export type Provider<T, TArgs extends unknown[] = []> = (...args: TArgs) => T;

export type Mapper<T, S> = (value: T) => S;

export type Brand<K, T> = K & { __brand: T };
