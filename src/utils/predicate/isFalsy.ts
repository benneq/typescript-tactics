export type Falsy = false | 0 | '' | null | undefined;

export const isFalsy = (value: unknown): value is Falsy => !value;
