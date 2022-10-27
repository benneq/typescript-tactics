import { Callback } from './types';

export const isFunction = <T, TArgs extends unknown[] = []>(
  value: unknown
): value is (...args: TArgs) => T => {
  return typeof value === 'function';
};

export type Identity = <T>(value: T) => T;

export const identity: Identity = (value) => {
  return value;
};

export const callIfDefined = <TArgs extends unknown[], T>(
  fn: undefined | ((...args: TArgs) => T),
  ...args: TArgs
): T | undefined => {
  return fn && fn(...args);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const empty: Callback = () => {};

type AnyFunc = (...arg: any[]) => any;

type LastFnReturnType<F extends Array<AnyFunc>, Else> = F extends [
  ...any[],
  (...arg: any) => infer R
]
  ? R
  : Else;

type PipeArgs<F extends AnyFunc[], Acc extends AnyFunc[] = []> = F extends [
  (...args: infer A) => infer B
]
  ? [...Acc, (...args: A) => B]
  : F extends [(...args: infer A) => any, ...infer Tail]
  ? Tail extends [(arg: infer B) => any, ...any[]]
    ? PipeArgs<Tail, [...Acc, (...args: A) => B]>
    : Acc
  : Acc;

export const pipe =
  <FirstFn extends AnyFunc, F extends AnyFunc[]>(
    firstFn: FirstFn,
    ...fns: PipeArgs<F> extends F ? F : PipeArgs<F>
  ) =>
  (arg: Parameters<FirstFn>[0]): LastFnReturnType<F, ReturnType<FirstFn>> => {
    return (fns as AnyFunc[]).reduce((acc, fn) => fn(acc), firstFn(arg));
  };
