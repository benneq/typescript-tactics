export type Identity = <T>(value: T) => T;

export const identity: Identity = (value) => {
  return value;
};
