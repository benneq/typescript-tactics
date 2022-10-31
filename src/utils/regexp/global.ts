import { mergeFlags } from './_helper';

export const global = (regExp: RegExp) => {
  return RegExp(regExp, mergeFlags(regExp, 'g'));
};
