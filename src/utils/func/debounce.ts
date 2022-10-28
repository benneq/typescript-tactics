import { Callback } from './_types';

export const debounce = <TArgs extends unknown[] = []>(
  callback: Callback<TArgs>
) => {
  let timeout: NodeJS.Timeout | undefined = undefined;

  return (ms: number, ...args: TArgs) => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(callback, ms, ...args);
  };
};
