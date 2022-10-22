import { useState } from 'react';

export const useRefFn = <T>(init: () => T): React.MutableRefObject<T> => {
  const [ref] = useState(() => ({ current: init() }));
  return ref;
};
