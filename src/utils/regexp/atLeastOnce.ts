export const atLeastOnce = (regExp: RegExp) => {
  return RegExp(`(${regExp.source})+`, regExp.flags);
};
