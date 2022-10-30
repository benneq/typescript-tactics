export const anyTimes = (regExp: RegExp) => {
  return RegExp(`(${regExp.source})*`, regExp.flags);
};
