import { DependencyList } from 'react';
import { Callback } from 'utils/func/_types';
import {
  delay,
  now,
  useDebounceCallback,
  UseDebounceCallbackReturn,
} from './useDebounceCallback';
import { useDidSubsetUpdate } from './useDidSubsetUpdate';

export type UseDebounceSubsetReturn = UseDebounceCallbackReturn<[]>;

export const useDebounceSubset = (
  callback: Callback,
  ms: number,
  deps: DependencyList,
  depsSubset: DependencyList
): UseDebounceSubsetReturn => {
  const setDebounce = useDebounceCallback(callback);

  // no useCallback, because useDidSubsetUpdate does not need it
  const handleUpdate = (debounce: boolean) => {
    setDebounce(debounce ? delay(ms) : now());
  };

  useDidSubsetUpdate(handleUpdate, deps, depsSubset);

  return setDebounce;
};
