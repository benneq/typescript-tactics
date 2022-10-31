import { defaultIfUndefined } from '../object/defaultIfUndefined';

export const times = (
  regExp: RegExp,
  minTimes: number,
  maxTimes?: number | undefined,
  nonGreedy?: boolean | undefined
) => {
  return RegExp(
    `(${regExp.source}){${minTimes},${defaultIfUndefined('')(maxTimes)}${
      nonGreedy ? '?' : ''
    }}`,
    regExp.flags
  );
};
