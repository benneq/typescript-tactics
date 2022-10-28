import { DependencyList, useEffect, useRef } from 'react';
import { shallowEquals } from '../utils/react';
import { Callback } from '../utils/func/_types';
import { warn } from '../utils/log';

export const useDidUpdate = (
  callback: Callback,
  deps: DependencyList
): void => {
  const cachedDeps = useRef<DependencyList | undefined>(deps);

  useEffect(() => {
    if (shallowEquals(cachedDeps.current, deps)) {
      return;
    }

    cachedDeps.current = deps;

    callback();
  }, deps); // does not include callback, because only deps should trigger the effect

  if (process.env.NODE_ENV === 'development') {
    warn('callback must be defined', !callback);
    warn('deps must be an array', !Array.isArray(deps));
  }
};
