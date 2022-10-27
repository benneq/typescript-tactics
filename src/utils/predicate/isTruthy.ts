import { Falsy } from './isFalsy';

export type Truthy<T> = Exclude<T, Falsy>;

export const isTruthy = <T>(value: T | Falsy): value is Truthy<T> => !!value;
