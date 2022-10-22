import { DependencyList, EffectCallback, useCallback, useRef } from 'react';
import { warn } from '../utils/log';
import { shallowEquals } from '../utils/react';
import { useDidUpdate } from './useDidUpdate';

export const useDidSubsetUpdate = (
  callback: (changed: boolean) => ReturnType<EffectCallback>,
  deps: DependencyList,
  depsSubset: DependencyList
): void => {
  const cachedSubset = useRef(depsSubset);

  const handleUpdate = useCallback(() => {
    const changed = !shallowEquals(depsSubset, cachedSubset.current);
    cachedSubset.current = depsSubset;
    callback(changed);
  }, [callback, ...deps]); // only depend on deps, because subset change implies deps change

  useDidUpdate(handleUpdate, deps);

  // warn if subset change but not deps
  if (process.env.NODE_ENV === 'development') {
    const cachedDeps = useRef(deps);

    const handleUpdate = useCallback(() => {
      const unchanged = shallowEquals(deps, cachedDeps.current);
      warn('depsSubset must be subset of deps', unchanged);
    }, [...depsSubset]);

    useDidUpdate(handleUpdate, depsSubset);
  }
};
