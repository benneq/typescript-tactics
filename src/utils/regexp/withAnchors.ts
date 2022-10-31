export const withAnchors = (regexp: RegExp) => {
  return new RegExp(`^(?:${regexp.source})$`, regexp.flags);
};
