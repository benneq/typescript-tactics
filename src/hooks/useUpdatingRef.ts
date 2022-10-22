import { MutableRefObject, DependencyList, useEffect, useRef } from 'react';

export const useUpdatingRef = <T extends DependencyList[number]>(
  value: T
): MutableRefObject<T> => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
};
