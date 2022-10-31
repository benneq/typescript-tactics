export const negate = (regexp: RegExp): RegExp => {
  return new RegExp(`(?!${regexp.source})`, regexp.flags);
};
