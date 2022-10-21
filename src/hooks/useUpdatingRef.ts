import { MutableRefObject, useEffect, useRef } from 'react';

export const useUpdatingRef = <T>(dep: T): MutableRefObject<T> => {
  const ref = useRef(dep);

  useEffect(() => {
    ref.current = dep;
  }, [dep]);

  return ref;
};
