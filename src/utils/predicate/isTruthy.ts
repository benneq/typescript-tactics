import { Falsy } from './isFalsy';

export type Truthy<T> = Exclude<T, Falsy>;

/**
 * Checks if the provided value is Truthy
 *
 * @returns `true` if the provided value is Truthy
 */
export const isTruthy = <T>(value: T | Falsy): value is Truthy<T> => !!value;
