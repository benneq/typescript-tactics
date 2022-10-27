export type Identity = <T>(value: T) => T;

/**
 * The Identity function returns the argument it is given
 *
 * @param value
 * @returns the provided value
 */
export const identity: Identity = (value) => {
  return value;
};
