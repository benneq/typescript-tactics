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
