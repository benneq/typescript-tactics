import { useEffectOnce } from './useEffectOnce';
import { useUpdatingRef } from './useUpdatingRef';

export const useUnmountCallback = (fn: () => any): void => {
  const fnRef = useUpdatingRef(fn);
  useEffectOnce(() => () => fnRef.current());
};
