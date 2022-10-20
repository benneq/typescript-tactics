import { env } from 'process';
import { useRef, useCallback } from 'react';
import { warn } from 'utils/log';

type Callback<TArgs extends unknown[]> = (...args: TArgs) => void;

type Value = NodeJS.Timeout | undefined;

type TransformFn<TArgs extends unknown[]> = (
  value: Value,
  callback: Callback<TArgs>
) => Value;

type UseDebounceCallbackReturn<TArgs extends unknown[]> = (
  transform: TransformFn<TArgs>
) => void;

export const useDebounceCallback = <TArgs extends unknown[]>(
  callback: Callback<TArgs>
): UseDebounceCallbackReturn<TArgs> => {
  if (env.NODE_ENV === 'development') {
    warn('callback should be defined', !callback);
  }

  const timeout = useRef<NodeJS.Timeout | undefined>();

  return useCallback(
    (transform) => {
      timeout.current = transform(timeout.current, callback);
    },
    [callback]
  );
};

export const cancel = (timeout: Value): undefined => {
  timeout && clearTimeout(timeout);
  return undefined;
};

export const delay =
  <TArgs extends unknown[]>(ms: number, ...args: TArgs) =>
  (timeout: Value, callback: Callback<TArgs>) => {
    cancel(timeout);
    return setTimeout(callback, ms, ...args);
  };

export const now =
  <TArgs extends unknown[]>(...args: TArgs) =>
  (timeout: Value, callback: Callback<TArgs>) => {
    cancel(timeout);
    callback(...args);
    return undefined;
  };
