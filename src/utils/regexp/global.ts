import { mergeFlags } from './_helper';

export const global = (regExp: RegExp): RegExp => {
  return RegExp(regExp, mergeFlags(regExp, 'g'));
};
