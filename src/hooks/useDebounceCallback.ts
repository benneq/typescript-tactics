import { env } from 'process';
import { useRef, useCallback, useEffect } from 'react';
import { warn } from '../utils/log';
import { Callback } from '../utils/types';
import { useUpdatingRef } from './useUpdatingRef';

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

  const callbackRef = useUpdatingRef(callback);

  return useCallback((transform) => {
    timeout.current = transform(timeout.current, (...args: TArgs) =>
      callbackRef.current(...args)
    );
  }, []);
};

export const cancel = (timeout: Value): undefined => {
  timeout && clearTimeout(timeout);
  return undefined;
};

export const delay =
  <TArgs extends unknown[]>(ms: number, ...args: TArgs) =>
  <CArgs extends unknown[]>(
    timeout: Value,
    callback: CArgs extends TArgs ? Callback<CArgs> : never
  ): NodeJS.Timeout => {
    cancel(timeout);
    return setTimeout(callback, ms, ...args);
  };

export const now =
  <TArgs extends unknown[]>(...args: TArgs) =>
  <CArgs extends unknown[]>(
    timeout: Value,
    callback: CArgs extends TArgs ? Callback<CArgs> : never
  ): undefined => {
    cancel(timeout);
    callback(...args);
    return undefined;
  };
