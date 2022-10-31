import { Callback } from './_types';

export const debounce = <TArgs extends unknown[] = []>(
  callback: Callback<TArgs>
): ((ms: number, ...args: TArgs) => void) => {
  let timeout: NodeJS.Timeout | undefined = undefined;

  return (ms, ...args) => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(callback, ms, ...args);
  };
};
