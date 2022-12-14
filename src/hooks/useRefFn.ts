import { useState } from 'react';
import { Provider } from 'utils/func/_types';

export const useRefFn = <T>(init: Provider<T>): React.MutableRefObject<T> => {
  const [ref] = useState(() => ({ current: init() }));
  return ref;
};
