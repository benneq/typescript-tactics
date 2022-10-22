import { useState } from 'react';

export const useRefFn = <T>(init: () => T): React.MutableRefObject<T> => {
  return useState(() => ({ current: init() }))[0];
};
