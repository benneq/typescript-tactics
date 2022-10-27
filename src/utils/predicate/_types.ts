export type Predicate<TArgs extends unknown[] = []> = (
  ...args: TArgs
) => boolean;
