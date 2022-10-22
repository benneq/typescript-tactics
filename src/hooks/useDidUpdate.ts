import { DependencyList, useEffect, useRef } from 'react';
import { Callback } from 'utils/types';
import { warn } from '../utils/log';

export const useDidUpdate = (
  callback: Callback,
  deps: DependencyList
): void => {
  const cachedDeps = useRef<DependencyList | undefined>(deps);

  useEffect(() => {
    if (cachedDeps.current !== undefined || cachedDeps.current === deps) {
      cachedDeps.current = undefined;
      return;
    }

    callback();
  }, deps); // does not include callback, because only deps should trigger the effect

  if (process.env.NODE_ENV === 'development') {
    warn('callback must be defined', !callback);
    warn('deps must be an array', !Array.isArray(deps));
  }
};
