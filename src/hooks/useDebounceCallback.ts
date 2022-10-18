import { useRef, useCallback } from 'react';

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
