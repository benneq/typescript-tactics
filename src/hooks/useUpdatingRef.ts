import { MutableRefObject, DependencyList, useEffect, useRef } from 'react';

export const useUpdatingRef = <T extends DependencyList[number]>(
  dep: T
): MutableRefObject<T> => {
  const ref = useRef(dep);

  useEffect(() => {
    ref.current = dep;
  }, [dep]);

  return ref;
};
