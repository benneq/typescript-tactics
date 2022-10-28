import { Callback } from 'utils/func/_types';
import { useEffectOnce } from './useEffectOnce';
import { useUpdatingRef } from './useUpdatingRef';

export const useUnmountCallback = (destructor: Callback): void => {
  const destructorRef = useUpdatingRef(destructor);
  useEffectOnce(() => () => destructorRef.current());
};
