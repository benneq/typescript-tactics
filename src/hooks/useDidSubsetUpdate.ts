import { DependencyList, EffectCallback, useRef } from 'react';
import { shallowEqual } from '../utils/object/shallowEqual';
import { warn } from '../utils/log';
import { useDidUpdate } from './useDidUpdate';

export const useDidSubsetUpdate = (
  callback: (changed: boolean) => ReturnType<EffectCallback>,
  deps: DependencyList,
  depsSubset: DependencyList
): void => {
  const cachedSubset = useRef(depsSubset);

  // no useCallback, because useDidUpdate does not need it
  const handleUpdate = () => {
    const subsetChanged = !shallowEqual(depsSubset, cachedSubset.current);
    cachedSubset.current = depsSubset;
    callback(subsetChanged);
  };

  useDidUpdate(handleUpdate, deps);

  // warn if subset change but not deps
  if (process.env.NODE_ENV === 'development') {
    const cachedDeps = useRef(deps);

    const handleUpdate = () => {
      const depsUnchanged = shallowEqual(deps, cachedDeps.current);
      warn('depsSubset must be subset of deps', depsUnchanged);
    };

    useDidUpdate(handleUpdate, depsSubset);
  }
};
