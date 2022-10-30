export const times = (
  regExp: RegExp,
  minTimes: number,
  maxTimes = minTimes
) => {
  return RegExp(`(${regExp.source}){${minTimes},${maxTimes}}`);
};
