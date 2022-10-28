export type Falsy = false | 0 | '' | null | undefined;

/**
 * Checks if the provided value is Falsy
 *
 * @example
 * isFalsy(null) => true
 * isFalsy(undefined) => true
 * isFalsy("") => true
 * isFalsy([]) => false
 * isFalsy(object) = false
 *
 * @returns `true` if the provided value is Falsy
 */
export const isFalsy = (value: unknown): value is Falsy => !value;
