import { DependencyList, EffectCallback, useRef } from 'react';
import { warn } from '../utils/log';
import { shallowEquals } from '../utils/react';
import { useDidUpdate } from './useDidUpdate';

export const useDidSubsetUpdate = (
  callback: (changed: boolean) => ReturnType<EffectCallback>,
  deps: DependencyList,
  depsSubset: DependencyList
): void => {
  const cachedSubset = useRef(depsSubset);

  // no useCallback, because useDidUpdate does not need it
  const handleUpdate = () => {
    const subsetChanged = !shallowEquals(depsSubset, cachedSubset.current);
    cachedSubset.current = depsSubset;
    callback(subsetChanged);
  };

  useDidUpdate(handleUpdate, deps);

  // warn if subset change but not deps
  if (process.env.NODE_ENV === 'development') {
    const cachedDeps = useRef(deps);

    const handleUpdate = () => {
      const depsUnchanged = shallowEquals(deps, cachedDeps.current);
      warn('depsSubset must be subset of deps', depsUnchanged);
    };

    useDidUpdate(handleUpdate, depsSubset);
  }
};
