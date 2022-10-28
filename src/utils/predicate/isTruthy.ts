import { Falsy } from './isFalsy';

export type Truthy<T> = Exclude<T, Falsy>;

/**
 * Checks if the provided value is Truthy
 *
 * @example
 * isTruthy(1) => true
 * isTruthy([]) => true
 * isTruthy({}) = true
 * isTruthy(null) => false
 * isTruthy(undefined) => false
 *
 * @returns `true` if the provided value is Truthy
 */
export const isTruthy = <T>(value: T | Falsy): value is Truthy<T> => !!value;
