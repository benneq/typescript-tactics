import { env } from 'process';
import { useRef, useCallback } from 'react';
import { warn } from '../utils/log';
import { Callback } from '../utils/types';

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

  const timeout = useRef<Value>();

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
  (timeout: Value, callback: Callback<TArgs>): NodeJS.Timeout => {
    cancel(timeout);
    return setTimeout(callback, ms, ...args);
  };

export const now =
  <TArgs extends unknown[]>(...args: TArgs) =>
  (timeout: Value, callback: Callback<TArgs>): undefined => {
    cancel(timeout);
    callback(...args);
    return undefined;
  };
