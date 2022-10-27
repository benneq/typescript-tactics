export type Falsy = false | 0 | '' | null | undefined;

/**
 * Checks if the provided value is Falsy
 *
 * @returns `true` if the provided value is Falsy
 */
export const isFalsy = (value: unknown): value is Falsy => !value;
