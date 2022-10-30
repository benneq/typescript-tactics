export const atLeastTimes = (regExp: RegExp, minTimes: number) => {
  return RegExp(`(${regExp.source}){${minTimes}}`);
};
